import React from "react";
import Sdata from './Sdata';
import Card from './Card';
const Amazon=()=>{
    return (<>
        <Card 
        key={Sdata[3].id}
      imgsrc={Sdata[3].imgsrc}
        sname={Sdata[3].sname}
        title={Sdata[3].title}
        link={Sdata[3].link}
      />
        {/* <Card 
        key={Sdata[5].id}
      imgsrc={Sdata[5].imgsrc}
        sname={Sdata[5].sname}
        title={Sdata[5].title}
        link={Sdata[5].link}
      /> */}
      </>
      );
}
export default Amazon;