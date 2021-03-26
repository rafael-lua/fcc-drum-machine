// The independent pad components
import { useEffect } from "react";

const Pad = (props) => {

  const handleClick = () => {
    props.setDisplay(props.padName);

    const audioContext = document.getElementById(props.padKey);
    if (audioContext.paused) {
      audioContext.play();
    }else{
      audioContext.currentTime = 0
    }
  }

  // Destruct variables from props to use it on effect hook after the component is mounted. 
  // Then add a function callback to the whole document listening for keydown.
  // When a key is pressed, all pad components have their handle called, but only the one with key matching will play.
  const padKey = props.padKey;
  const padName = props.padName;
  const setDisplay = props.setDisplay;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if(e.key.toLowerCase() === padKey.toLowerCase()) {
        setDisplay(padName);

        const audioContext = document.getElementById(padKey);
        if (audioContext.paused) {
          audioContext.play();
        }else{
          audioContext.currentTime = 0
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress);
  }, [padKey, padName, setDisplay]);

  /*
    To remember: 
        useEffect without a second parameter run EVERY RENDER. 
        With a empty array, run only once ever, since there is no variables being watched for update.
        With variables references, it runs everytime that one of the variables changes.
  */


  return (
    <div className="pads-item" onClick={handleClick}>
      <p className="pads-key">{props.padKey}</p>
      <audio className="clip" id={props.padKey}>
        <source src={props.audioFile} type="audio/wav"/>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  )
}

export default Pad
