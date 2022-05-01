import LandingPage from "./components/LandingPage";
import TopNavigation from "./components/TopNavigation";

const App = () => {
  return (
    <div
      className="app"
      style={{
        backgroundColor: "black",
        padding: "50px",
        overflow: "hidden auto",
      }}
    >
      <TopNavigation />
      <div>
        <LandingPage />
      </div>
    </div>
  );
};

export default App;
