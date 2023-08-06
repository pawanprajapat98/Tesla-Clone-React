import React, { useState } from 'react'
function Section({background,heading,pera,leftbtn,rightbtn,arrow}) {

  return (
    <div>
        <section style={{background:`url(${background})`}}>
      
          <div className='main'>
            
                <div className='top'>
                    <h1>{heading}</h1>
                    <p>{pera}</p>
                </div>
                <div className='bottom'>
                  <a href="" id='black'>{leftbtn}</a>
                  {
                      (rightbtn)?<a href="" id='white' >{rightbtn}</a>:""
                  }
                      
                </div> 
                {
                      (arrow) ? <img id='arrow' src={arrow}></img>:" "

                }
         </div>  
             
             
        </section>
     
    </div>
  )
}

export default Section
