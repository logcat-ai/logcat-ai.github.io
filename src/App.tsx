import { useEffect, useState } from "react";
import "./App.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

function App() {
  const [sliderPosition, setSliderPosition] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let isDecreasing = true;
    const shutterSpeed = 1;
    const increment = 0.25;

    const animation = setInterval(() => {
      setIsAnimating(true);
      setSliderPosition((prev) => {
        if (isDecreasing) {
          if (prev === increment) {
            isDecreasing = false;
          }
          return prev - increment;
        }
        if (prev === 50) {
          clearInterval(animation);
          setIsAnimating(false);
        }
        return prev + increment;
      });
    }, shutterSpeed);

    return () => clearInterval(animation);
  }, []);

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
                  if (isAnimating) {
                    return;
                  }
                  setSliderPosition(newPosition);
                }}
                className={isAnimating ? "disabled" : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
