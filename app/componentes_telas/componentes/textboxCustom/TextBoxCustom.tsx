import { Text, TextInput } from "react-native";
import { styles } from "./TextBox.style";
import React from "react";

// Definir a interface para as props
interface TextBoxProps {
  label: string;
  placeholder: string;
  isPassword?: boolean; // Colocar como opcional, caso não seja sempre necessário
}

function TextBoxCustom({ label, placeholder, isPassword = false }: TextBoxProps) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={isPassword}
        placeholder={placeholder}
        style={styles.input}
      />
    </>
  );
}

export default TextBoxCustom;