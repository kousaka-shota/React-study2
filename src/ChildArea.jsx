const styles = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={styles}>
          <p>子コンポネント</p>
        </div>
      ) : null}
    </>
  );
};
