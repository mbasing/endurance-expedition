import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

const TopNavigation = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="top-navigation">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={onOpenModal}
          className="waitlist"
          style={{
            border: "0",
            outline: "0",
            whiteSpace: "nowrap",
            padding: "20px 70px",
            borderRadius: "30px",
            marginBottom: "20px",
            backgroundColor: "white",
            color: "#d62828",
            cursor: "pointer",
            fontSize: "18px",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          }}
        >
          Login
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <div
            className="modal"
            style={{
              padding: "10px 50px 30px",
              justifyContent: "center",
              backgroundColor: "white",
              width: "300px",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            <div className="modal-content">
              <form
                onSubmit={() => {}}
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              ></form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default TopNavigation;
