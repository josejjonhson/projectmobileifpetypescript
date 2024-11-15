import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./acesso.style";
import HeaderCustom from "../../../componentes/headerCustom/HeaderCustom"; // Alterado para HeaderCustom
import TextBoxCustom from "../../../componentes/textboxCustom/TextBoxCustom";
import ButtonCustom from "../../../componentes/buttonCustom/ButtonCustom";

function Acesso() {
  return (
    <ScrollView> 
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <HeaderCustom text="Acesse sua Conta." /> {/* Alterado para HeaderCustom */}
        </View>

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <TextBoxCustom placeholder="Seu melhor email" label="E-mail" /> {/* Alterado para TextBoxCustom */}
          </View>
          <View style={styles.form}>
            <TextBoxCustom isPassword={true} placeholder="Password" label="Senha" /> {/* Alterado para TextBoxCustom */}
          </View>
          <View style={styles.form}>
            <ButtonCustom text="Acessar" /> {/* Alterado para ButtonCustom */}
          </View>
        </View>
        
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Criar minha conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Acesso;