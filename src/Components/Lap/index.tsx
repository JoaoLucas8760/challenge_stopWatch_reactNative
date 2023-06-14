import React from "react";
import { Container, LapNumber, LapTime, OverallTime } from "./styles";

interface lapProps {
  lapNumber: number;
  time: number;
  overAlltime: number;
}

export default function Lap({ lapNumber, time, overAlltime }: lapProps) {
  const minutes = Math.floor(time / 3600);
  const seconds = Math.floor((time % 3600) / 60);
  const centiseconds = Math.floor(time % 100);

  const minutesOverAll = Math.floor(overAlltime / 3600);
  const secondsOverAll = Math.floor((overAlltime % 3600) / 60);
  const centiSecondsOverall = Math.floor(overAlltime % 100);

  return (
    <Container>
      <LapNumber>{lapNumber < 10 ? "0" + lapNumber : lapNumber}</LapNumber>
      <LapTime>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}.
        {centiseconds < 10 ? "0" + centiseconds : centiseconds}
      </LapTime>
      <OverallTime>
        {minutesOverAll < 10 ? "0" + minutesOverAll : minutesOverAll} :{" "}
        {secondsOverAll < 10 ? "0" + secondsOverAll : secondsOverAll}.
        {centiSecondsOverall < 10
          ? "0" + centiSecondsOverall
          : centiSecondsOverall}
      </OverallTime>
    </Container>
  );
}
