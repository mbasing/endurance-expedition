import React from "react";

const Modal = () => {
  return (
    <div
      className="modal"
      style={{
        display: "grid",
        placeItems: "center",
        borderRadius: "10px",
        padding: "20px",
        justifyContent: "center",
        backgroundColor: "white",
        width: "350px",
        height: "250px",
        margin: "auto",
      }}
    >
      <p>Hello world</p>
    </div>
  );
};

export default Modal;
