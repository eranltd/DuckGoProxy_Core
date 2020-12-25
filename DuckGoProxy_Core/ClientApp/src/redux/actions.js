import { ADD_TOPIC,ADD_SEARCH_HISTORY } from "./actionTypes";

let nextTopicId = 0;
let nextsearchHistoryId = 0;

export const addTopic = content => ({
  type: ADD_TOPIC,
  payload: {
    id: ++nextTopicId,
    content
  }
});


export const addSearchHistory = content => ({
  type: ADD_SEARCH_HISTORY,
  payload: {
    id: ++nextsearchHistoryId,
    content
  }
});

