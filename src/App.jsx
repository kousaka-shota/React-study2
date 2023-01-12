import "./styles.css";
import react, { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (event) => setText(event.target.value);
  //usecalback=>関数をpropsで渡していると再レンダリングされてしまうので、
  //openの値が変わったら再レンダリングという処理にするもの
  const onClickOpen = useCallback((event) => setOpen(!open), [open]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} type="text" />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickOpen={onClickOpen} />
    </div>
  );
};
