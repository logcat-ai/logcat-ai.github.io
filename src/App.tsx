import { useEffect, useState } from "react";
import "./App.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Terminal } from "lucide-react";

function App() {
    const [sliderPosition, setSliderPosition] = useState(100);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let isDecreasing = true;
        const shutterSpeed = 1;
        const increment = 0.5;

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
                <h1 className="header">
                    <Terminal className="logo" />
                    <span>
                        logcat.<span className="secondary">ai</span>
                    </span>
                </h1>
                <div className="body">
                    <div className="text fade-in">
                        <div className="description">
                            <div>
                                <h1>
                                    <strong className="secondary">
                                        Stop Guessing, Start Debugging
                                    </strong>
                                    : Al Insights for Android Logcat.
                                </h1>
                                <p>
                                    Master Android logs at every level: Smart
                                    analysis for app and OS developers to build
                                    with confidence
                                </p>
                            </div>
                            <div className="launching">
                                LAUNCHING SPRING 2025
                                <hr />
                            </div>
                            <button
                                onClick={() => {
                                    window.open(
                                        "https://docs.google.com/forms/d/e/1FAIpQLSfvo_BZ2o9Gt_EK6Bn2eLoUrxcSUXdoac8JECPe0yC87s9GmA/viewform",
                                        "_blank"
                                    );
                                }}
                            >
                                Join the waitlist
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
                <div className="footer fade-in">
                    © 2025. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}

export default App;
