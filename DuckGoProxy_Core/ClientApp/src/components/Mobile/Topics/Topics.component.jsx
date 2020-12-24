import React from 'react'
import { DataGrid } from '@material-ui/data-grid';



const Topics = ({props})=>{
     const generateLink = (params) => (<a href="{params.row.URL}>">{params.row.Title}</a>);
    
    // const generateLink = (params) => `<h1>${params.row.URL}/</h1>`

    // function generateLink (params) {
    // console.log(params)
    // return`<h1>/</h1>`
    // }

    const columns = [
        
        { field: 'id', headerName: 'id', hide: true  },
        // { field: 'URL', headerName: 'URL', width: 130 },
        { field: 'Title', headerName: 'Title', renderCell: (params) => (
            <a href={params.row.URL} target="_blank"> 
              {params.row.Title}
              
            </a>
          ), width: "flex: 1"  },
      ];
      
      const rows = [
        {
            "id": 637444338107285755,
            "URL": "https://duckduckgo.com/X",
            "Title": "X The 24th and third-to-last letter in the modern English alphabet and the ISO basic Latin..."
        },
        {
            "id": 637444338107285919,
            "URL": "https://duckduckgo.com/XXXTentacion",
            "Title": "XXXTentacion An American rapper, singer, and songwriter."
        },
        {
            "id": 637444338107285926,
            "URL": "https://duckduckgo.com/Malcolm_X",
            "Title": "Malcolm X An American Muslim minister and human rights activist who was a popular figure during the civil..."
        }
      ];


    return (  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  </div>)
}

export default Topics;