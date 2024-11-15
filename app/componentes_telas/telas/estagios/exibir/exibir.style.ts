import { StyleSheet } from 'react-native';
import { CORES, TAMANHO_FONTE } from "../../../../contantes/tema"; 

export const styles = StyleSheet.create({
  stageContainer: {
    padding: 15,
    backgroundColor: CORES.branco, 
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: CORES.cinza_claro, 
  },
  stageTitle: {
    fontSize: TAMANHO_FONTE.md, 
    fontWeight: 'bold',
    color: CORES.verde_escuro, 
  },
  stageDescription: {
    fontSize: TAMANHO_FONTE.sm, 
    color: CORES.cinza_escuro, 
    marginTop: 5,
  },
});
