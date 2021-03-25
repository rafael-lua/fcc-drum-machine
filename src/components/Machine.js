// The full drum machine component
import Pad from "./Pad";

const Machine = () => {
  return (
    <div className="machine">
      <div className="pads-grid">
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
        <Pad />
      </div>
      <p className="audio-display"><hr/> The display </p>
    </div>
  )
}

export default Machine
