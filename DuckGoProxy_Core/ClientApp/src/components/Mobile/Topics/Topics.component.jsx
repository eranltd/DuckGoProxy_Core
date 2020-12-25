import React, {memo} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {  useSelector } from "react-redux";
import { getTopics } from  "../../../redux/selectors";

import "./Topics.styles.scss";

const Topics = memo(props =>{
     
     const state = useSelector(state => state);
     const topics = getTopics(state);

     const columns = [
        
        { field: 'id', headerName: 'id', hide: true  },
        // { field: 'URL', headerName: 'URL', width: 130 },
        { field: 'Title', headerName: 'Title', renderCell: (params) => (
            <a href={params.row.content.URL} target="_blank"> 
                {params.row.content.Title}
              
            </a>
          ), width: "flex: 1"  },
      ];
      
      // const rows = [
      //   {
      //       "id": 637444338107285755,
      //       "URL": "https://duckduckgo.com/X",
      //       "Title": "X The 24th and third-to-last letter in the modern English alphabet and the ISO basic Latin..."
      //   },
      //   {
      //       "id": 637444338107285919,
      //       "URL": "https://duckduckgo.com/XXXTentacion",
      //       "Title": "XXXTentacion An American rapper, singer, and songwriter."
      //   },
      //   {
      //       "id": 637444338107285926,
      //       "URL": "https://duckduckgo.com/Malcolm_X",
      //       "Title": "Malcolm X An American Muslim minister and human rights activist who was a popular figure during the civil..."
      //   }
      // ];


    return (  
      <>
     
    <div id="topics-data-tbl" >
    <DataGrid rows={topics} columns={columns} pageSize={5} checkboxSelection />
    </div>

  </>
  
  );
    });

export default Topics;


