import { View, Image, Text } from "react-native";
import { styles } from "./HeaderCustom.style";
import { ICONE_MINHA_IMAGEM } from "../../../contantes/icones_imagens";  
import React from "react";

// Definir a interface para as props muito importante já que estamos trabalhando com TS
interface HeaderProps {
  text: string;
}

function HeaderCustom({ text }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={ICONE_MINHA_IMAGEM} />
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

export default HeaderCustom;