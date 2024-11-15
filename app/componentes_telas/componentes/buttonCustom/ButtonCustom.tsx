  import React from 'react';
  import { Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';
  import { styles } from './ButtonCustom.style';

  // Definindo o tipo para as propriedades
  interface ButtonProps {
    text: string;  // O texto a ser exibido no botão
    style?: StyleProp<ViewStyle>;  // Permite um estilo opcional para o botão
    textStyle?: StyleProp<TextStyle>;  // Permite um estilo opcional para o texto
    onPress: () => void;  // Adicionando a propriedade onPress
  }

  const ButtonCustom: React.FC<ButtonProps> = (props) => {
    return (
      <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </TouchableOpacity>
    );
  }

  export default ButtonCustom;
    