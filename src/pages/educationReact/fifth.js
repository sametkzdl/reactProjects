import React, { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;
const init = () => {
  console.log("sunucuya bağlanılıyor");

  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () =>
    console.log("sunucuya bağlantı başarılı bir şekilde gerçekleştirildi")
  );
};

const send = (color) => {
  socket.emit("newColor", color);
};

const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color,"gönderilen color");
    cb(color);
  });
};

const Fifth = () => {
  const [activeColor, setActiveColor] = useState("#000000");
  const [colorValue, setColorValue] = useState("#000000");
  useEffect(() => {
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div
      style={{
        margin: "auto",
        width: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: activeColor,
      }}
    >
      <h4>{activeColor}</h4>
      <input type="color" onChange={(e) => setColorValue(e.target.value)} value={activeColor} />
      <button
        onClick={() => {
          send(colorValue);
        }}
      >
        Send Current Color
      </button>
    </div>
  );
};

export default Fifth;
