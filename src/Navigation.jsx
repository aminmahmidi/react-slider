import React from "react";
function Navigation({
  data,
  setCurrent,
  currentIndex,
  setCurrentIndex,
  current,
}) {
  const handleNavigation = (item) => {
    setCurrent(item);
    setCurrentIndex(item);
  };
  return (
    <div className="navigation-bar">
      {data.map((_, index) => {
        return (
          <button
            onClick={() => handleNavigation(index)}
            className={index === currentIndex ? "active" : "inactive"}
          ></button>
        );
      })}
    </div>
  );
}

export default Navigation;
