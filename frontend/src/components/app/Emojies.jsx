import { emojiList } from "../../constants";

const Emojies = () => {


  return (
    <div>
      <h3>Emojies</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "650px", 
          overflowY: "scroll", 
          border: "1px solid #ccc", 
          padding: "10px",
        }}
      >
        {emojiList.map((emoji, index) => (
          <span key={index} style={{ fontSize: "2rem", margin: "0px" }}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Emojies;
