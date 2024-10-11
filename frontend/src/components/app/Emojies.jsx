import { emojiList } from "../../constants";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useState } from "react";

const Emojies = () => {
  const [currentEmoji, setCurrentEmoji] = useState(null);

  return (
    <div>
      <div>
        <Picker
          data={data}
          previewPosition="none"
          onEmojiSelect={(e) => setCurrentEmoji(e.native)}
        />
      </div>
    </div>
  );
};

export default Emojies;
