const Stickers = () => {
    // Array of sticker image URLs
    const stickerList = [
      "https://example.com/sticker1.png",
      "https://example.com/sticker2.png",
      "https://example.com/sticker3.png",
      "https://example.com/sticker4.png",
      // Add more stickers as needed
    ];
  
    return (
      <div>
        <h3>Stickers</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "300px",   // Limit height
            overflowY: "scroll",  // Make scrollable
            border: "1px solid #ccc",
            padding: "10px"
          }}
        >
          {stickerList.map((sticker, index) => (
            <img
              key={index}
              src={sticker}
              alt={`Sticker ${index + 1}`}
              style={{ width: "100px", height: "100px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Stickers;
  