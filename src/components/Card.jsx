import { useState } from "react";
import ControlPanel from "./ControlPanel";
import KeyButtonsWrapper from "./KeyButtonsWrapper";
import styles from "./Card.module.css";
const Card = () => {
  const [machineStatus, setMachineStatus] = useState(true);
  const [songName, setSongName] = useState("");
  const [volume, setVolume] = useState(0.5);
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div
        id="drum-machine"
        className={`card rounded-0 border border-3 border-dark-subtle mb-3 py-2 px-1 py-md-4 px-md-3 ${styles.card}`}
      >
        <div className="row row-cols-2 g-4 g-sm-0">
          <div className="col-12 col-sm-6">
            <KeyButtonsWrapper
              machineStatus={machineStatus}
              volume={volume}
              setSongName={setSongName}
            />
          </div>
          <div className="col-12 col-sm-6">
            <div className="card-body p-0">
              <ControlPanel
                setVolume={setVolume}
                volume={volume}
                songName={songName}
                machineStatus={machineStatus}
                setMachineStatus={setMachineStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
