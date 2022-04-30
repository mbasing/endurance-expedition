import React, { useState } from "react";
import "../index.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// import Modal from "./Modal";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal();
  };

  return (
    <div
      className="landing-page"
      style={{
        display: "grid",
        placeItems: "center",
        margin: "85px auto",
      }}
    >
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "'Permanent Marker', cursive",
        }}
      >
        Men wanted for <span style={{ color: "#d62828" }}>hazardous</span>{" "}
        journey, <br />
        <span style={{ color: "#d62828" }}>Small</span> wages,{" "}
        <span style={{ color: "#d62828" }}>bitter</span> cold,
        <br />
        Long months of{" "}
        <span style={{ color: "#d62828" }}>
          complete <span style={{ color: "#d62828" }}>darkness</span>
        </span>
        , <br /> constant <span style={{ color: "#d62828" }}>danger,</span> safe
        return <span style={{ color: "#d62828" }}>doubtful,</span> <br /> honor
        and recognition in case of success
      </p>

      <div>
        <span></span>
        <button
          onClick={onOpenModal}
          className="waitlist"
          style={{
            border: "0",
            outline: "0",
            whiteSpace: "nowrap",
            padding: "20px 70px",
            borderRadius: "30px",
            backgroundColor: "#d62828",
            color: "white",
            cursor: "pointer",
            marginTop: "80px",
            fontSize: "18px",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Join wait list
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
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
            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  border: "3px solid gray",
                  padding: "5px",
                  borderRadius: "25px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
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
                    padding: "12px 40px",
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
      </Modal>
    </div>
  );
};

export default LandingPage;
