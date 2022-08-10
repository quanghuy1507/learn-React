import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

Clock.propTypes = {};

function forMatDate(date) {
  //   console.log(date);
  const hour = `0${date.getHours()}`.slice(-2);
  const minus = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hour}:${minus}:${second}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      //   console.log(now);
      const newTimeString = forMatDate(now);

      setTimeString(newTimeString);

      return () => {
        console.log("clock interval");
        clearInterval(clockInterval);
      };
    }, 1000);
  }, []);

  return <p>{timeString}</p>;
}

export default Clock;
