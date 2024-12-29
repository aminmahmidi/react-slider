import { useEffect, useState } from "react";
import "./App.css";
import "./assets/Fonts/regular/style.css";
import { data } from "./data";
import Navigation from "./Navigation";
function App() {
  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navigation, setNavigation] = useState(
    data.map((_) => {
      return;
    })
  );
  const [play, setPlay] = useState(true);
  const slideNext = (slide) => {
    setCurrent((prevSlide) => {
      const result = (prevSlide + 1) % data.length;
      setNavigation(navigation + 1) % data.length;
      slide = prevSlide;
      setCurrentIndex(result);
      return result;
    });
  };
  const slidePrev = () => {
    setCurrent((prevSlide) => {
      const result = (prevSlide - 1 + data.length) % data.length;
      setCurrentIndex(prevSlide);
      return result;
    });
  };
  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        slideNext();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [play]);

  const togglePlay = () => {
    setPlay(!play);
  };
  return (
    <>
      <div className="slider-container">
        {data.map((item, index) => {
          const { img, title, info, id } = item;
          return (
            <div
              className="slide"
              style={{ transform: `translateX(${100 * (index - current)}%)` }}
              key={id}
            >
              <div className="text">
                <h3>{title}</h3>
                <p>{info}</p>
              </div>
              <div className="img-container">
                <img src={img} alt="" />
              </div>
            </div>
          );
        })}
        <div className="navigation">
          <div className="play-container">
            <button type="button" className="play" onClick={togglePlay}>
              <i class={!play ? "ph ph-play" : "ph ph-pause"}></i>
            </button>
          </div>
          <button type="button" className="left" onClick={slidePrev}>
            <i class="ph ph-caret-left"></i>
          </button>
          <Navigation
            data={data}
            setCurrent={setCurrent}
            current={current}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            slideNext={slideNext}
          />
          <button type="button" className="right">
            <i class="ph ph-caret-right" onClick={slideNext}></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
