import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries='amazon';
const FavM=()=>{
 return ( favSeries=='netflix'?<Netflix/> :<Amazon/>);
// if(favSeries=='netflix'){
//  return <Netflix/>;
// }else{
//   return <Amazon/>;
// }
};

const App=()=>(<>
    <h1 className='heading_style'>Top 5 Netflix movies in 2023</h1>
    <FavM/>
</>);
export default App;