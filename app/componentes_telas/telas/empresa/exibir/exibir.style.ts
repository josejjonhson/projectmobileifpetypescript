import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { CORES, TAMANHO_FONTE } from '../../../../contantes/tema'; 

interface Styles {
  companyContainer: ViewStyle;
  companyName: TextStyle;
  companyDescription: TextStyle;
}

export const styles: Styles = StyleSheet.create({
  companyContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: CORES.cinza_claro, 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: CORES.cinza_escuro, 
  },
  companyName: {
    fontSize: TAMANHO_FONTE.lg, 
    color: CORES.verde_escuro, 
    fontWeight: 'bold',
  },
  companyDescription: {
    fontSize: TAMANHO_FONTE.md, 
    color: CORES.cinza_escuro, 
  },
});
