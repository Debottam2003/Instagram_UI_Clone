import React from 'react';
import Story from './story';
import './home.css';
function Home() {
  let arr = ['user 1','user 2','user 3','user 4','user 5','user 6','user 7','user 8','user 9'];
  return (
    <>
    <Story />
    <div className='home'>
       {arr.map((element,index)=>(<div key={index}>
                                      <div className='posts'>
                                        <div className='username'><div className={'icon'+index}></div>{element}</div>
                                        <div className={'tag'+index} ></div>
                                      </div>
                                  </div>))}
    </div>  
    </>
  );
}

export default Home