import React, { memo } from "react";

import {
  ListItem,
  Checkbox,
  Button,
  ListItemText,
} from "@material-ui/core";

import {  useDispatch  } from "react-redux";
import { connect } from "react-redux";


const SearchHistoryItem = memo( (props) => {
  
  const dispatch = useDispatch();
  const historyItem = props.historyItem;

  const handleSearchHistory = props.handleSearchHistory;

  return(
  <ListItem divider={props.divider}>
      {historyItem && historyItem.completed ? "👌" : "👋"}{" "}


 
 <Button htmlFor={historyItem.id+'-historyItem'}
    primary={historyItem.content}  onClick={e => {handleSearchHistory(historyItem.content);props.dispatch({ type: "SUBMIT_FORM" })}}
    >   
    {historyItem.content} 
   </Button>
    
  </ListItem>
)});

// export default SearchHistoryItem;
export default connect(null)(SearchHistoryItem);

