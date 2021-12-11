import "./App.css";
import CountDownTimer from "./components/CountDownTimer";

function App() {

  const hoursMinSecs = { hours: 0, minutes: 30, seconds: 0 };
  
  return (
    <div className="App">
      <CountDownTimer hoursMinSecs={hoursMinSecs} />
    </div>
  );
}

export default App;
