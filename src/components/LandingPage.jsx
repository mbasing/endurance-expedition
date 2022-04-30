import React from "react";
import "../index.css";
import Modal from "./Modal";

const LandingPage = () => {
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
        , <br /> constant <span style={{ color: "#d62828" }}>danger</span>, safe
        return <span style={{ color: "#d62828" }}>doubtful</span>, <br /> honor
        and recognition in case of success
      </p>

      <div>
        <span></span>
        <button
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
      <Modal />
    </div>
  );
};

export default LandingPage;
