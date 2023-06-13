import React from "react";
import { Container, LapNumber, LapTime, OverallTime } from "./styles";

interface lapProps {
  lapNumber: number;
  time: number;
  overAlltime: number;
}

export default function Lap({ lapNumber, time, overAlltime }: lapProps) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const hoursOverAll = Math.floor(overAlltime / 3600);
  const minutesOverAll = Math.floor((overAlltime % 3600) / 60);
  const secondsOverall = Math.floor(overAlltime % 60);

  return (
    <Container>
      <LapNumber>{lapNumber < 10 ? "0" + lapNumber : lapNumber}</LapNumber>
      <LapTime>
        {hours < 10 ? "0" + hours : hours} :{" "}
        {minutes < 10 ? "0" + minutes : minutes}.
        {seconds < 10 ? "0" + seconds : seconds}
      </LapTime>
      <OverallTime>
        {hoursOverAll < 10 ? "0" + hoursOverAll : hoursOverAll} :{" "}
        {minutesOverAll < 10 ? "0" + minutesOverAll : minutesOverAll}.
        {secondsOverall < 10 ? "0" + secondsOverall : secondsOverall}
      </OverallTime>
    </Container>
  );
}
