import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { FlatList, View } from "react-native";
import Button from "../../Components/Button";
import HeaderLapList from "../../Components/HeaderLapList";
import Lap from "../../Components/Lap";
import DisplayTime from "../../Components/DisplayTime";

export default function Home() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  const reversedLaps = [...laps].reverse();

  let customInterval: NodeJS.Timer | undefined;

  function handleGetLap() {
    const lap = time;

    setLaps((prevstate) => [...prevstate, lap]);
  }

  function handleStopTimer() {
    setIsRunning(false);
    if (customInterval) {
      clearInterval(customInterval);
    }
  }
  function clear() {
    setTime(0);
    setLaps([]);
  }

  useEffect(() => {
    if (isRunning) {
      clear();
      customInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 16);
      }, 160);
    } else {
      if (customInterval) {
        clearInterval(customInterval);
      }
    }

    return () => {
      if (customInterval) {
        clearInterval(customInterval);
      }
    };
  }, [isRunning]);

  return (
    <Container>
      <View
        style={{
          marginTop: 64,
          alignItems: "center",
        }}
      >
        <DisplayTime time={time} />
        <HeaderLapList />
        <FlatList
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            padding: 24,
            flexGrow: 1,
            width: 320,
            gap: 14,
          }}
          keyExtractor={(item, index) => index.toString()}
          style={{ maxHeight: 300 }}
          data={reversedLaps}
          renderItem={({ item, index }) => {
            const reverseIndex = laps.length - 1 - index;
            const previousLaps = reversedLaps.slice(index + 1);
            const overalltime =
              previousLaps.reduce((acc, lap) => acc + lap, 0) + item;

            return (
              <Lap
                lapNumber={reverseIndex + 1}
                time={item}
                overAlltime={overalltime}
              />
            );
          }}
        />
      </View>

      <View style={{ flexDirection: "row", gap: 24 }}>
        {!isRunning ? (
          <Button onPress={() => setIsRunning(true)}>Start</Button>
        ) : (
          <>
            <Button onPress={handleGetLap}>Lap</Button>
            <Button
              style={{ backgroundColor: "#C84334" }}
              onPress={handleStopTimer}
            >
              Stop
            </Button>
          </>
        )}
      </View>
    </Container>
  );
}
