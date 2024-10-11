import { useState } from "react";
import Emojies from "./Emojies";
import Stickers from "./Stickers";
import Gifs from "./Gifs";

function RightSideBar() {
  const [selectedComponent, setSelectedComponent] = useState("Emojies");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Emojies":
        return <Emojies />;
      case "Stickers":
        return <Stickers />;
      case "Gifs":
        return <Gifs />;
      default:
        return <Emojies />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        {/* Navbar */}
        <button onClick={() => setSelectedComponent("Emojies")}>Emojies</button>
        <button onClick={() => setSelectedComponent("Stickers")}>Stickers</button>
        <button onClick={() => setSelectedComponent("Gifs")}>Gifs</button>
      </div>
      <div>
        {/* Render Selected Component */}
        {renderComponent()}
      </div>
    </div>
  );
}

export default RightSideBar;
