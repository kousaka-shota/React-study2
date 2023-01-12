import { memo } from "react";

const styles = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoでくくるとpropsが変更されたときにしか再レンダリングされないようになる
//（親コンポーネントがレンダリングされても子コンポーネントは再レンダリングされないようにできる）
export const ChildArea = memo((props) => {
  const { open, onClickOpen } = props;
  console.log("childarea再レンダリング！");
  return (
    <>
      {open ? (
        <div style={styles}>
          <p>子コンポネント</p>
          <button onClick={onClickOpen}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
