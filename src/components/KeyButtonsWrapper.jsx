import { useEffect } from "react";
import KeyButton from "./KeyButton";

const KeyButtonsWrapper = ({ setSongName, volume, machineStatus }) => {
  const handleSong = (e, songName) => {
    if (machineStatus) {
      const song = e.target.lastElementChild;
      song.volume = volume;
      song.play();
      setSongName(songName);
    }
  };
  useEffect(() => {
    const keyFollowEventHandle = (e) => {
      const keys = document.getElementsByClassName("drum-pad");
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent.toLowerCase() === e.key.toLowerCase()) {
          keys[i].click();
        }
      }
    };
    document.addEventListener("keydown", keyFollowEventHandle);
  }, []);
  return (
    <div className="row row-cols-3 gx-0 gy-3">
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Heater 1"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          onClick={handleSong}
        >
          Q
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Heater-2"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          onClick={handleSong}
        >
          W
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Heater-3"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          onClick={handleSong}
        >
          E
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Heater-4"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          onClick={handleSong}
        >
          A
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Clap"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          onClick={handleSong}
        >
          S
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Open-HH"
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          onClick={handleSong}
        >
          D
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Kick-n'-Hat"
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          onClick={handleSong}
        >
          Z
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Kick"
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          onClick={handleSong}
        >
          X
        </KeyButton>
      </div>
      <div className="col col-4 p-0 d-flex justify-content-center align-items-center">
        <KeyButton
          songName="Closed-HH"
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          onClick={handleSong}
        >
          C
        </KeyButton>
      </div>
    </div>
  );
};

export default KeyButtonsWrapper;
