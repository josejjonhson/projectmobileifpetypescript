  import React from 'react';
  import { Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native';
  import { styles } from './ButtonCustom.style';

  interface ButtonProps {
    text: string;  
    style?: StyleProp<ViewStyle>;  
    textStyle?: StyleProp<TextStyle>;  
    onPress: () => void;  
  }

  const ButtonCustom: React.FC<ButtonProps> = (props) => {
    return (
      <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </TouchableOpacity>
    );
  }

  export default ButtonCustom;