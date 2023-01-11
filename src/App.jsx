import "./styles.css";
import react, { useState } from "react";
import { ChildArea } from "./ChildArea";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = (event) => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} type="text" />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
};
