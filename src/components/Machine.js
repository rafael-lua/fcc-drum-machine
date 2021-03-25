// The full drum machine component
import { useState } from "react";
import Pad from "./Pad";

// Import the resource to be used
import audio_DrumKick from "../audio/drum-kick.wav";
import audio_DrumSnare from "../audio/drum-snare.wav"; 
import audio_DrumClap from "../audio/drum-clap.wav";
import audio_DrumCowbell from "../audio/drum-cowbell.wav";
import audio_ScratchVocal from "../audio/scratch-vocal.wav";
import audio_TrumpetLick from "../audio/trumpet-lick.wav";
import audio_GuitarWail from "../audio/guitar-wail.wav";
import audio_GuitarSlide from "../audio/guitar-slide.wav";
import audio_GuitarClap from "../audio/guitar-clap.wav";

const Machine = () => {
  const [display, setDisplay] = useState("Key...");

  return (
    <div className="machine">
      <div className="pads-grid">
        <Pad setDisplay={setDisplay} padKey="Q" audioFile={audio_DrumKick} padName="Drum Kick"/>
        <Pad setDisplay={setDisplay} padKey="W" audioFile={audio_DrumSnare} padName="Drum Snare"/>
        <Pad setDisplay={setDisplay} padKey="E" audioFile={audio_DrumClap} padName="Drum Clap"/>
        <Pad setDisplay={setDisplay} padKey="A" audioFile={audio_DrumCowbell} padName="Drum Cowbell"/>
        <Pad setDisplay={setDisplay} padKey="S" audioFile={audio_ScratchVocal} padName="Scratch Vocal"/>
        <Pad setDisplay={setDisplay} padKey="D" audioFile={audio_TrumpetLick} padName="Trumpet Lick"/>
        <Pad setDisplay={setDisplay} padKey="Z" audioFile={audio_GuitarWail} padName="Guitar Wail"/>
        <Pad setDisplay={setDisplay} padKey="X" audioFile={audio_GuitarSlide} padName="Guitar Slide"/>
        <Pad setDisplay={setDisplay} padKey="C" audioFile={audio_GuitarClap} padName="Guitar Clap"/>
      </div>
      <hr/>
      <p className="audio-display"> {display} </p>
    </div>
  )
}

export default Machine;
