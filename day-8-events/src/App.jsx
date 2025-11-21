import { useState } from "react";
import { FaStar } from "react-icons/fa";

const App = () => {
  const [rating, setRating] = useState(0);    
  const [star, setStar] = useState(0);        

  const handleMouseEnter = (index) => {
    setStar(index + 1);
  };

  const handleMouseLeave = () => {
    setStar(0);
  };

  const handleMouseClick = (value) => {
    setRating(value);
  };

  return (
    <>
      <div style={styles.container}>
        {[1, 2, 3, 4, 5].map((value, index) => {
          return (
            <FaStar
              key={index}
              color={index < star || index < rating ? "gold" : "gray"}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMouseClick(value)}
              style={{ fontSize: "30px", cursor: "pointer", marginRight: "5px" }}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

const styles = {
  container: {
    height: "100vh",
    background: "#111",     
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
};
