// The full drum machine component
import { useState } from "react";
import Pad from "./Pad";

const Machine = () => {
  const [display, setDisplay] = useState("Key...");

  return (
    <div className="machine">
      <div className="pads-grid">
        <Pad setDisplay={setDisplay} padKey="Q" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="W" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="E" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="A" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="S" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="D" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="Z" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="X" audioFile="drum-kick.wav" padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="C" audioFile="drum-kick.wav" padName="Drum Kick"/>
      </div>
      <hr/>
      <p className="audio-display"> {display} </p>
    </div>
  )
}

export default Machine;
