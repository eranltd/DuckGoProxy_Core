import React, { memo  } from "react";

import { List, Paper  } from "@material-ui/core";
import { getSearchHistory } from "../../../redux/selectors";
import {  useSelector } from "react-redux";
import SearchHistoryItem from '../SearchHistoryItem/SearchHistoryItem.component'

const SearchHistory = memo(props => {

    const state = useSelector(state => state);
    const history = getSearchHistory(state);
    const handleSearchHistory = props.onSideBarClick;

return(
    
    <>
    {history.length === 0  && (<h6>You Hav't submitted any queries yet!</h6>)}
    {history && history.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <List style={{ overflow: "hidden" }}>
          {history.map((historyItem, idx) => (
              
              <SearchHistoryItem
              historyItem={historyItem}
                key={`history-${historyItem.id}`}
                divider= {history.id !== history.length - 1}
                handleSearchHistory = {handleSearchHistory}

                

              />

            ))}


            
          </List>
        </Paper>
      )}
    </>    
)

});


export default SearchHistory;
    