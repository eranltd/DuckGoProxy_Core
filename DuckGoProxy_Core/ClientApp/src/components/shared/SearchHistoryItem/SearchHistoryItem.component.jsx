import React, { memo } from "react";

import {
  ListItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

import {  useDispatch,  } from "react-redux";


const SearchHistoryItem = memo( (props) => {
  
  const dispatch = useDispatch();
  const historyItem = props.historyItem;

    console.log(historyItem);

  return(
  <ListItem divider={props.divider}>
      {historyItem && historyItem.completed ? "👌" : "👋"}{" "}

    <Checkbox
      id={historyItem.id+'-historyItem'}
      onClick={() => {dispatch(props.onCheckBoxToggle(historyItem.id))}}
      checked={props.checked}
      disableRipple
    />
 
 <ListItemText htmlFor={historyItem.id+'-historyItem'}
    primary={historyItem.content} />   
   
    
  </ListItem>
)});

export default SearchHistoryItem;

