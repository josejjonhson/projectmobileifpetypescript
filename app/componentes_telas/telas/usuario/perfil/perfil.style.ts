import { StyleSheet } from 'react-native';
import { CORES, TAMANHO_FONTE } from '../../../../contantes/tema';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.cinza_claro,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: TAMANHO_FONTE.xl,
    color: CORES.cinza_escuro,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: TAMANHO_FONTE.md,
    color: CORES.cinza_escuro,
  },
  input: {
    width: '100%',
    backgroundColor: CORES.branco,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: CORES.cinza_claro,
    marginTop: 5,
  },
  button: {
    width: '100%',
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: TAMANHO_FONTE.md,
    color: CORES.branco,
    padding: 14,
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: CORES.cinza_escuro,
  },
  editButton: {
    backgroundColor: CORES.cinza_escuro,
  },
});
