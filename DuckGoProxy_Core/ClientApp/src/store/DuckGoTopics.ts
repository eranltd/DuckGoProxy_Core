import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface DuckGoTopicState {
    isLoading: boolean;
    startDateIndex?: number;
    topics: DuckGoTopic[];
}

export interface DuckGoTopic {
    /**  
     * "FirstURL": "X The 24th and third-to-last letter in the modern English alphabet and the ISO basic Latin...",
        "Text": "https://duckduckgo.com/X",
    */
    Date: string;
    FirstURL: string;
    Text: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestDuckGoTopicsAction {
    type: 'REQUEST_DUCKGO_TOPICS';
    startDateIndex: number;
}

interface ReceiveDuckGoTopicsAction {
    type: 'RECEIVE_DUCKGO_TOPICS';
    startDateIndex: number;
    topics: DuckGoTopic[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestDuckGoTopicsAction | ReceiveDuckGoTopicsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestDuckGoTopics: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.DuckGoTopics && startDateIndex !== appState.DuckGoTopics.startDateIndex) {
            fetch(`DuckGo/?q=x`)
                .then(response => response.json() as Promise<DuckGoTopic[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_DUCKGO_TOPICS', startDateIndex: startDateIndex, topics: data });
                });

            dispatch({ type: 'REQUEST_WEATHER_topics', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: DuckGoTopicsState = { topics: [], isLoading: false };

export const reducer: Reducer<DuckGoTopicsState> = (state: DuckGoTopicsState | undefined, incomingAction: Action): DuckGoTopicsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_DUCKGO_TOPICS':
            return {
                startDateIndex: action.startDateIndex,
                topics: state.topics,
                isLoading: true
            };
        case 'RECEIVE_DUCKGO_TOPICS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    topics: action.topics,
                    isLoading: false
                };
            }
            break;
    }

    return state;
};
