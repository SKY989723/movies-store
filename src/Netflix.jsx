import React from "react";
import Sdata from './Sdata';
import Card from './Card';
const Netflix=()=>{
    return (
      <>
        <Card 
        key={Sdata[1].id}
      imgsrc={Sdata[1].imgsrc}
        sname={Sdata[1].sname}
        title={Sdata[1].title}
        link={Sdata[1].link}
      />
        {/* <Card 
        key={Sdata[2].id}
      imgsrc={Sdata[2].imgsrc}
        sname={Sdata[2].sname}
        title={Sdata[2].title}
        link={Sdata[2].link}
      />
        <Card 
        key={Sdata[6].id}
      imgsrc={Sdata[6].imgsrc}
        sname={Sdata[6].sname}
        title={Sdata[6].title}
        link={Sdata[6].link}
      /> */}
      </>
      );
}
export default Netflix;