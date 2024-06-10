import React from 'react'
import Images from './Images'
import Heading from './Heading';

function Card(props){
    // console.log(props);
    return(
      <>
      <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
         <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
         <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
         <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
     </div>

     <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
         <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
     </div>


     <div className="cards">
      <div className="card">
        {/* <img src={props.imgsrc} alt="mypic" className="card__img" /> */}
         <Images imgsrc={props.imgsrc}/>
        <div className="card__info">
          <span className="card__category">{props.title}</span>
          {/* <h3 className="card__title">{props.sname}</h3> */}
          <Heading sname={props.sname}/>
          <a href={props.link} target="_blank">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
     </div>
     </>
     
    );
  }

  export default Card;