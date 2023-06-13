import React from "react";
import { Container, CurrentOverAllTime, TextTime } from "./styles";

interface DisplayTimeProps {
  time: number;
}

export default function DisplayTime({ time }: DisplayTimeProps) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <Container>
      <TextTime>
        {hours < 10 ? "0" + hours : hours} :{" "}
        {minutes < 10 ? "0" + minutes : minutes}.
        {seconds < 10 ? "0" + seconds : seconds}
      </TextTime>
    </Container>
  );
}
