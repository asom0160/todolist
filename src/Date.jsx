import { useEffect, useState } from "react";

const Dates = () => {
  const days = new Date();

  const hours = days.getHours();
  const minutes = days.getMinutes();
  const seconds = days.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const [DateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const time = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
  }, []);
  return (
    <div
      style={{
        width: "600px",
        height: "100px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
      }}
    >
      <div>
        ⏳ {ampm}
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default Dates;
