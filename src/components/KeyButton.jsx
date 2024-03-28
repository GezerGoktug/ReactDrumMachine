import styles from "./KeyButton.module.css";
const KeyButton = ({ children, src, onClick, songName }) => {
  return (
    <button
      id={songName}
      onClick={(event) => onClick(event, songName)}
      className={`drum-pad btn btn-secondary rounded-0 fw-bold fs-2 shadow-lg border border-2 border-black d-flex justify-content-center align-items-center p-0 ${styles.button}`}
    >
      {children}
      <audio id={children} className="clip" src={src}></audio>
    </button>
  );
};

export default KeyButton;
