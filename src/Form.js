import { useContext } from "react";
import { FormContext } from "./App";

const modes = [
  "ionian",
  "dorian",
  "phrygian",
  "lydian",
  "mixolydian",
  "aeolian",
  "locrian"
];

const Form = () => {
  const {
    chartTitle,
    setChartTitle,
    mode,
    setMode,
    mode2,
    setMode2,
    showMode2,
    toggleShowMode2,
    position,
    setPosition
  } = useContext(FormContext);

  const toggleShowHide = (e) => {
    e.preventDefault();
    toggleShowMode2(!showMode2);
  };

  return (
    <form>
      {/* title for mode or chart */}
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={chartTitle}
        onChange={(e) => setChartTitle(e.target.value)}
      />
      <br />
      <label htmlFor="position">Position</label>
      <select
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        {[0, 1, 2, 3, 4].map((pos, index) => (
          <option key={index} value={pos}>
            {pos}
          </option>
        ))}
      </select>
      <br />
      {/* dropdown to select mode */}
      <label htmlFor="mode">Select mode</label>
      <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)}>
        {modes.map((mode, index) => (
          <option key={index} value={mode}>
            {mode}
          </option>
        ))}
      </select>
      <br />
      {/* dropdown to select mode to compare */}
      <label htmlFor="mode-2">Select 2nd mode</label>
      <select
        id="mode-2"
        value={mode2}
        onChange={(e) => setMode2(e.target.value)}
      >
        {modes.map((mode, index) => (
          <option key={index} value={mode}>
            {mode}
          </option>
        ))}
      </select>
      {/* + button to add addition mode select to compare */}
      <button onClick={(e) => toggleShowHide(e)}>
        {showMode2 ? "Hide" : "Show"}
      </button>
    </form>
  );
};

export default Form;
