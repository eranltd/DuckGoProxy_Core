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
  
  const historyItem = props.historyItem;
  const handleSearchHistory = props.handleSearchHistory;

  return(
  <ListItem divider={props.divider}>
      🔍
 
 <Button htmlFor={historyItem.id+'-historyItem'}
    primary={historyItem.content}  onClick={e => {handleSearchHistory(historyItem.content)}}
    >   
    {historyItem.content} 
   </Button>
    
  </ListItem>
)});

// export default SearchHistoryItem;
export default connect(null)(SearchHistoryItem);

