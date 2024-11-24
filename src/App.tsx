import { useState } from "react";
import "./App.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function App() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="landing">
      <div>
        <h1 className="header">logcat.ai</h1>
        <div className="body">
          <div className="text fade-in">
            <div className="description">
              <div>
                <p>make sense of your logcat.</p>
                <p>streamline debugging.</p>
                <p>develop faster.</p>
              </div>
              <h1>coming soon.</h1>
              <button
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfvo_BZ2o9Gt_EK6Bn2eLoUrxcSUXdoac8JECPe0yC87s9GmA/viewform",
                    "_blank"
                  );
                }}
              >
                get in touch
              </button>
            </div>
          </div>
          <div className="demo fade-in">
            <div className="before-after-slider-container">
              <ReactBeforeSliderComponent
                firstImage={{
                  imageUrl: require("./assets/post-logcat.png"),
                }}
                secondImage={{
                  imageUrl: require("./assets/pre-logcat.png"),
                }}
                currentPercentPosition={sliderPosition}
                onChangePercentPosition={(newPosition) => {
                  setSliderPosition(newPosition);
                }}
                className="before-after-slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
