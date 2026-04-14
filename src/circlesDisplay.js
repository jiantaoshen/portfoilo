// Circle component to render individual circle
const Circle = ({ filled }) => {
  return <div className={`circle ${filled ? 'filled' : ''}`}></div>;
};

// Parent component that will render the circles based on 'level'
const Circles = ({ level }) => {
  const totalCircles = 5;
  const circles = [];

  for (let i = 0; i < totalCircles; i++) {
    // Determine if this circle should be filled
    circles.push(<Circle key={i} filled={i < level} />);
  }

  return <div className="circles">{circles}</div>;
};

export default Circles;