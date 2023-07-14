import React, { useState } from 'react';

import './App.css';


function Square({value ,  onsqaureclick   } )
{
 
  
  const styles = {}
if(!!value ) { // not undefined
  styles.color = value === "X" ? 'green': 'red'
}

  return(
    <>
  <button className='squares'  style={styles}     onClick={onsqaureclick  } > {value} </button>


  </>
    )
  }
  
  function App() {
    const [value1 , setvalue1] = useState (Array(9).fill(null))
    
    const [isX , setX] = useState (true)   ;
    const arraycopy = value1.slice()  ; 

    let winner = handlewinning(value1) ; 
  let status ; 

if (winner)
{
    status = "winner is " +  winner ;  
}
else
{
        status = "next players move: " +  ( isX ? "X" : "O" )  ;
}
   
    function handlewinning(value1)
    {

        let lines =[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]

  for (let i = 0; i < lines.length; i++) {
    let [a,b,c] = lines[i]  ; 
   
    if( value1[i] && value1[a] === value1[b]   && value1[a] === value1[c]) 
    {
      return value1[a]  ; 

    }
    
  }
  return null ; 

  
    }




    function  handleclick(i)
    {
      if(value1[i]  || handlewinning(value1)   )
      {
        return; 
      }
      // const arraycopy = value1.slice()  ; 

      if (isX)
      {
        arraycopy[i] = "X"
        

        setvalue1(arraycopy)  ;  
        setX(false);
      }
      else 
      {
        
        arraycopy[i] = "O" ; 
        setvalue1(arraycopy)  ; 
        setX(true);
      }
 
    }

 return (
      <div className="game">
         <div className = 'btn' >
              
       <h1>{status} </h1>
<div className='row '>
          <Square  value = {value1[0]}  onsqaureclick =  {()=>handleclick(0) }   />
          <Square  value = {value1[1]}   onsqaureclick = {()=>handleclick(1)}  />
          <Square  value = {value1[2]}   onsqaureclick = {()=>handleclick(2)} />
      </div>

<div className='row '>
  
          <Square value = {value1[3]} onsqaureclick = {()=>handleclick(3)} />
          <Square value = {value1[4]} onsqaureclick = {()=>handleclick(4)}  />
          <Square value = {value1[5]} onsqaureclick = {()=>handleclick(5)}  />
     </div>
 


          <div className='row '>
  
          <Square value = {value1[6]} onsqaureclick = {()=>handleclick(6)}   />
          <Square value = {value1[7]} onsqaureclick = {()=>handleclick(7)}   />
          <Square value = {value1[8]} onsqaureclick = {()=>handleclick(8)}   />
  </div>

 
         </div> 
    </div>
  );
}

export default App;
