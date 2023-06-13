import React from "react";
import { Container } from "./styles";
import { Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      <Text style={{ color: "#fff", fontWeight: "600", fontSize: 22 }}>
        {children}
      </Text>
    </Container>
  );
}
