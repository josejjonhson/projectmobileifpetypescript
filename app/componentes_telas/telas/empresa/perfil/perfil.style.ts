import { StyleSheet } from 'react-native';
import { CORES, TAMANHO_FONTE } from '../../../../contantes/tema'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: CORES.cinza_claro, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20, 
    marginBottom: 20,
  },
  name: {
    fontSize: TAMANHO_FONTE.xl, 
    fontWeight: 'bold',
    color: CORES.cinza_escuro, 
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: TAMANHO_FONTE.md, 
    color: CORES.cinza_escuro, 
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: TAMANHO_FONTE.sm, 
    color: CORES.cinza_escuro, 
    marginBottom: 10,
    textAlign: 'center',
  },
  website: {
    fontSize: TAMANHO_FONTE.sm, 
    color: CORES.verde_mediano, 
    marginBottom: 10,
    textAlign: 'center', 
  },
  positions: {
    fontSize: TAMANHO_FONTE.md, 
    color: CORES.cinza_escuro, 
    marginBottom: 20,
    textAlign: 'center', 
  },
});

export default styles;
