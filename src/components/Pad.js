// The independent pad components

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
