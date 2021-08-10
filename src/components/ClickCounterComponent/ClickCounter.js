import { createSelector } from 'reselect';

const scope = 'HomeContainer';

const INCREMENT = `${scope}/increment`;
const DECREMENT = `${scope}/decrement`;

export const initialState = {
    counter: 0,
};


const selectClickCounterDomain = state => state.clickCounter || initialState;
const makeSelectClickCounter = () => createSelector(selectClickCounterDomain, substate => substate.counter);


export {
    makeSelectClickCounter,
};

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
    return {
        type: DECREMENT,
    };
}

export default function clickCounterManager(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT:
            if (state.counter > 0) {
                return {
                    ...state,
                    counter: state.counter - 1,
                };
            }
            else return {
                ...state,
                counter: state.counter,
            };
        default:
            return state;
    }
}