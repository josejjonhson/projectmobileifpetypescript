import { StyleSheet } from "react-native";
import { CORES, TAMANHO_FONTE } from "../../../contantes/tema";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
    },
    logo: {
        width: 180,
        height: 230,
    },
    title: {
        color: CORES.cinza_escuro,
        fontSize: TAMANHO_FONTE.md,
        textAlign: "center",
    },
});
