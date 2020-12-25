export const getTopicsState = store => store.topics;
export const getTopicsList = store => getTopicsState(store) ? getTopicsState(store).allIds : [];
export const getTopicById = (store, id) =>
getTopicsState(store) ? { ...getTopicsState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */


export const getTopics = store =>
getTopicsList(store).map(id => getTopicById(store, id));


  /********************************************************************* */

export const getSearchHistoryState = store => store.searchHistory;
export const getSearchHistoryList = store => getSearchHistoryState(store) ? getSearchHistoryState(store).allIds : [];
export const getSearchHistoryById = (store, id) =>
getSearchHistoryState(store) ? { ...getSearchHistoryState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */

export const getSearchHistory = store =>
getSearchHistoryList(store).map(id => getSearchHistoryById(store, id));

/********************************************************************* */
export const QueryParam = store => store.queryParam;
