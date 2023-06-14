import React from "react";
import { Container, CurrentOverAllTime, TextTime } from "./styles";

interface DisplayTimeProps {
  time: number;
}

export default function DisplayTime({ time }: DisplayTimeProps) {
  const minutes = Math.floor(time / 3600);
  const seconds = Math.floor((time % 3600) / 60);
  const centiSeconds = Math.floor(time % 100);

  return (
    <Container>
      <TextTime>
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}.
        {centiSeconds < 10 ? "0" + centiSeconds : centiSeconds}
      </TextTime>
    </Container>
  );
}
