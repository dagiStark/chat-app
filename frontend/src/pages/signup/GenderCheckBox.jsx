
// eslint-disable-next-line react/prop-types
const GenderCheckBox = ({ onchangeHandle, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label
          className={`cursor-pointer label ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text m-3">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
            checked={selectedGender === "male"}
            onChange={() => onchangeHandle("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`cursor-pointer label ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text m-3">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-info"
            checked={selectedGender === "female"}
            onChange={() => onchangeHandle("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;


