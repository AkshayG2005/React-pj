import React from 'react';

function App(){
  // new Date (year, month, day, hours, minutes, seconds, milliseconds)
  let curDate = new Date(2023, 5, 3, 8 );
  curDate = curDate.getHours();
  let greeting = '';
  const cssStyle = { };
  
  
  if (curDate>= 1 && curDate < 12){
      greeting = 'Good Morning';
      cssStyle.color = "Green";
  }else if (curDate>= 12 && curDate < 19){
      greeting = "Good Afternoon";
      cssStyle.color = "Orange";
  }else{
      greeting = " Good Night";
      cssStyle.color = "Red";
  }
  
  return(
    <>
    <div>
   <h1> 
        Hello, <span style={cssStyle}> {greeting} </span> 
   </h1>
</div>
</>
  )

}

export default App;
