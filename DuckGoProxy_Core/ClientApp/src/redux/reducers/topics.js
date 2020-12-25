import { ADD_TOPIC, CLEAR_TOPICS } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TOPIC: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content
          }
        }
      };
    }
    case CLEAR_TOPICS: {
      return {
        allIds: [],
        byIds: {}
        };
      }
    

    default:
      return state;
  }
}
