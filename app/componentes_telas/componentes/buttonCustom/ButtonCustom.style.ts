import { StyleSheet } from 'react-native';
import { CORES, TAMANHO_FONTE } from '../../../contantes/tema';

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CORES.cinza_escuro,  // Cor de fundo
  },
  text: {
    fontSize: TAMANHO_FONTE.md,
    color: CORES.branco,
    textAlign: 'center',
  },
});