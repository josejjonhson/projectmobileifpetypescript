import { StyleSheet } from "react-native";
import { CORES, TAMANHO_FONTE } from "../../../contantes/tema";

export const styles = StyleSheet.create({
    input: {
        width: "100%", // Pode ser uma string ou número válido
        backgroundColor: CORES.branco,
        padding: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: CORES.cinza_claro,
    },
    label: {
        marginLeft: 5,
        color: CORES.cinza_escuro,
        fontSize: TAMANHO_FONTE.md
    }
});
