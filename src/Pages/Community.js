import { useState } from "react";
import BoardList from "../component/BoardList";
import Write from "../component/Write";

const Community = () =>{
 
  return(
   <> 
    <div className="nav">
      <BoardList/>
      <Write/>
    </div>
   
    </>
  );

  
}

export default Community;