import React,{useState} from "react";
import NavBar from '../shared/NavBar/NavBar'
import DuckGoForm from './DuckGoForm/DuckGoForm.component'
import Topics from './Topics/Topics.component'


const MobileComponent = () => {

      const [queryParam, setQueryParam] = useState('');

      function handleSideBarClick(queryParam) {
            setQueryParam(queryParam);
            // alert(queryParam)
          }

      return (
            
            <>
            
            {/* <p>"Wow, your screen is small(mobile)!"</p> */}

            <NavBar IsMobile='true' onSideBarClick={handleSideBarClick}/>
            
            <DuckGoForm queryParam={queryParam} />
            <Topics/>
                   
            
            
            </>
            );
}





export default MobileComponent;