use ic_cdk::api::time;
use ic_cdk::export::candid::{CandidType, Deserialize};
use ic_cdk_macros::*;
use std::collections::{HashMap, HashSet};

#[derive(Clone, CandidType, Deserialize)]
pub struct Request {
    pub description: String,
    pub recipient: String,
    pub value: u64,
    pub completed: bool,
    pub no_of_voters: u64,
    pub voters: HashSet<String>,
}

#[init]
fn init(target: u64, duration_in_seconds: u64) {
    let caller = ic_cdk::api::caller().to_string();
    STATE.with(|s| {
        let mut state = s.borrow_mut();
        state.owner = caller;
        state.target = target;
        state.deadline = time() + duration_in_seconds * 1_000_000_000; // convert to nanoseconds
        state.minimum_contribution = 100;
    });
}

#[derive(Default)]
struct CrowdFundingState {
    pub owner: String,
    pub minimum_contribution: u64,
    pub deadline: u64,
    pub target: u64,
    pub raised_amount: u64,
    pub total_contributors: u64,
    pub contributors: HashMap<String, u64>,
    pub requests: Vec<Request>,
}

thread_local! {
    static STATE: std::cell::RefCell<CrowdFundingState> = std::cell::RefCell::new(CrowdFundingState::default());
}

#[query]
fn get_balance() -> u64 {
    STATE.with(|s| s.borrow().raised_amount)
}

#[update]
fn contribute() {
    let caller = ic_cdk::api::caller().to_string();
    let now = time();

    STATE.with(|s| {
        let mut state = s.borrow_mut();
        assert!(now < state.deadline, "Deadline has passed.");
        let amount = ic_cdk::api::msg::call_cycles();
        assert!(
            amount >= state.minimum_contribution,
            "Minimum contribution not met."
        );

        if state.contributors.get(&caller).is_none() {
            state.total_contributors += 1;
        }

        *state.contributors.entry(caller).or_insert(0) += amount;
        state.raised_amount += amount;
    });
}

#[update]
fn refund() {
    let caller = ic_cdk::api::caller().to_string();
    let now = time();

    STATE.with(|s| {
        let mut state = s.borrow_mut();
        let contribution = *state.contributors.get(&caller).unwrap_or(&0);

        assert!(contribution > 0, "Not a contributor.");
        assert!(now > state.deadline, "Deadline not reached.");
        assert!(state.raised_amount < state.target, "Target met. Refund not allowed.");

        state.contributors.remove(&caller);
        state.raised_amount -= contribution;

        ic_cdk::api::call::notify(&caller.parse().unwrap(), "refund_receive", (contribution,))
            .expect("Refund failed");
    });
}

#[update]
fn create_request(description: String, recipient: String, value: u64) {
    let caller = ic_cdk::api::caller().to_string();
    STATE.with(|s| {
        let mut state = s.borrow_mut();
        assert_eq!(caller, state.owner, "Only owner can create requests.");

        state.requests.push(Request {
            description,
            recipient,
            value,
            completed: false,
            no_of_voters: 0,
            voters: HashSet::new(),
        });
    });
}

#[update]
fn vote_request(request_no: usize) {
    let caller = ic_cdk::api::caller().to_string();
    STATE.with(|s| {
        let mut state = s.borrow_mut();
        assert!(
            state.contributors.get(&caller).unwrap_or(&0) > &0,
            "You are not a contributor."
        );

        let request = state
            .requests
            .get_mut(request_no)
            .expect("Invalid request index.");

        assert!(
            !request.voters.contains(&caller),
            "Already voted on this request."
        );

        request.voters.insert(caller);
        request.no_of_voters += 1;
    });
}

#[update]
fn make_payment(request_no: usize) {
    let caller = ic_cdk::api::caller().to_string();
    STATE.with(|s| {
        let mut state = s.borrow_mut();
        assert_eq!(caller, state.owner, "Only owner can make payments.");

        let request = state
            .requests
            .get_mut(request_no)
            .expect("Invalid request index.");

        assert!(!request.completed, "Request already completed.");
        assert!(
            request.no_of_voters > state.total_contributors / 2,
            "Not enough voters."
        );

        // Here, we'd typically send cycles to the recipient canister.
        // This is symbolic in this implementation.
        request.completed = true;
        // Payment logic would go here.
    });
}
