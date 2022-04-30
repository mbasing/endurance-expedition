import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div
      className="app"
      style={{
        backgroundColor: "#232145",
        padding: "50px",
        overflow: "hidden auto",
      }}
    >
      <LandingPage />
      <Modal />
    </div>
  );
};

export default App;
