// The independent pad components

const Pad = (props) => {
  return (
    <div className="pads-item" onClick={() => props.setDisplay(props.padName)}>
      <p className="pads-key">{props.padKey}</p>
    </div>
  )
}

export default Pad
