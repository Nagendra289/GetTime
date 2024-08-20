import React, { useState } from "react";
//let time = React.useState(new Date().toLocaleTimeString());
var isClicked = false;

function App() {
  let [time, isClicked] = useState(new Date().toLocaleTimeString());
  // we are getting the time of the present
  function on() {
    let newtime = new Date().toLocaleTimeString();
    isClicked(newtime);
    //here we are updating whenever the get time button clicked time is updating through the hooks.
  }

  // in button we are calling for on function whenever onClick event occured.
  // we are updating the time through time varibale in p.

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={on}>Get Time</button>
    </div>
  );
}

export default App;
