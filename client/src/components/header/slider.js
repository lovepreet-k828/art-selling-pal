import React from "react";



export default function Slideshow() {
    const colors = [ 'polygon/parrot.webp', "polygon/waterfalls.webp", "polygon/red_planet.webp", 'vanGogh/hut.webp'];
const delay = 1500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" style={{marginTop:"0%", background: `url('/public/images/vanGogh/hut.webp')` }}>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((background, index) => {
          return (
          <div
            className="slide"
            key={index}
            style={{ background:`url(${background})`,backgroundColor:{background}, maxWidth:"100%",maxHeight:"100%" }}
          >
            <img className="slide" src={process.env.PUBLIC_URL + `/images/${background}`} style={{width:"100%",height:"100%" }} alt="hwllo"/>
          </div>
        )})}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}