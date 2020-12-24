import React from "react";
import NavBar from '../shared/NavBar/NavBar'
import DuckGoForm from './DuckGoForm/DuckGoForm.component'
import Topics from './Topics/Topics.component'


const MobileComponent = () => 


(<>
{/* <p>"Wow, your screen is small(mobile)!"</p> */}
<NavBar IsMobile='true'/>

      <DuckGoForm/>
       <Topics/>
       


</>
);
export default MobileComponent;