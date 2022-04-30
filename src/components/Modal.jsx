import React, { useState } from "react";

const Modal = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I HAVE BEEN SUBMITTED");
  };

  return (
    <div
      className="modal"
      style={{
        // display: "grid",
        // placeItems: "left",
        borderRadius: "10px",
        padding: "10px 50px 30px",
        justifyContent: "center",
        backgroundColor: "white",
        width: "350px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <div className="modal-content">
        <span className="close">&times;</span>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              border: "3px solid black",
              padding: "5px",
              borderRadius: "25px",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input
              style={{
                padding: "5px 10px",
                borderRadius: "10px",
                outline: 0,
                border: 0,
                width: "",
              }}
              required
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              style={{
                border: 0,
                outline: 0,
                borderRadius: "20px",
                backgroundColor: "#d62828",
                padding: "10px 25px",
                cursor: "pointer",
                color: "white",
                fontSize: "10px",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
