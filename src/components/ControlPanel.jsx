const ControlPanel = ({
  machineStatus,
  setMachineStatus,
  songName,
  volume,
  setVolume,
}) => {
  const status = machineStatus
    ? {
        btnClass: "btn-success",
        btnText: "On",
      }
    : {
        btnClass: "btn-danger",
        btnText: "Off",
      };
  const progressBarHandle = (e) => {
    setVolume(e.target.value / 100);
  };
  return (
    <div className="d-flex flex-column gap-3">
      <h3 className="m-0">Drum Machine</h3>
      <button
        onClick={() => setMachineStatus(!machineStatus)}
        className={`btn ${status.btnClass} fw-bold w-25`}
      >
        {status.btnText}
      </button>
      <p
        id="display"
        className="py-3 fs-3 text-black fw-semibold text-center bg-secondary-subtle border border-2 border-secondary"
      >
        {!machineStatus ? "" : songName}
      </p>
      <h5 className="m-0">Volume</h5>
      <input
        value={volume * 100}
        onChange={progressBarHandle}
        type="range"
        className="form-range "
        id="customRange1"
      />
    </div>
  );
};

export default ControlPanel;
