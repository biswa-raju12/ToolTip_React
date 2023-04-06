import { useState } from "react";
import "./App.css";

function App() {
  //using state to set and get the position of the tip

  const [position, setPosition] = useState('top');

  //boolan value to check hovering of mouse

  const [flag, setFlag] = useState(false);

  //Function called when position button clicked.
  function handle(event) {
    //setting the position the tip

    setPosition((prevPosition) => {
      return (prevPosition = event.target.value);
    });
  }

  //function called after hover the mouse and setting the value to true

  function handleMouseIN() {
    setFlag(true);
  }
  function handleMouseOut() {
    setFlag(false);
  }

  //based on the flag value setting the display of the tip to visible or not
  const visibility = { display: flag ? "block" : "none" };
  return (
    <div className="App">
      {/* button to set the posotion the top left, Right, up, down */}

      <div className="btn">
        <button onClick={handle} value="left">
          Left
        </button>
        <button onClick={handle} value="right">
          Right
        </button>
        <button onClick={handle} value="bottom">
          Bottom
        </button>
        <button onClick={handle} value="top">
          Top
        </button>
      </div>

      <div className="text">
        {/* when hover over these buttons the tip will be display */}
        <button
          className="tooltip-hov"
          onMouseOver={handleMouseIN}
          onMouseOut={handleMouseOut}
        >
          Hover over me!
        </button>
        {/* this is the tip message */}

        <div className="msg" style={visibility}>
          Thanks for hovering!<br/> I'm a tooltip from {position}
        </div>
      </div>
    </div>
  );
}

export default App;
