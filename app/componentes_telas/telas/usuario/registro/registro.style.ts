import { StyleSheet } from "react-native";
import { CORES, TAMANHO_FONTE } from "../../../../contantes/tema";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginBottom: 15,
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 40,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 25,
  },
  footerText: {
    textAlign: "center",
    color: CORES.cinza_escuro,
    fontSize: TAMANHO_FONTE.md,
  },
  containerHeader: {
    marginTop: 40,
  },
});
