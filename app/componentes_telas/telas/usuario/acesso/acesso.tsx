import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./acesso.style";
import HeaderCustom from "../../../componentes/headerCustom/HeaderCustom"; 
import TextBoxCustom from "../../../componentes/textboxCustom/TextBoxCustom";
import ButtonCustom from "../../../componentes/buttonCustom/ButtonCustom";

function Acesso() {
  return (
    <ScrollView> 
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <HeaderCustom text="Acesse sua Conta." /> 
        </View>

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <TextBoxCustom placeholder="Seu melhor email" label="E-mail" /> 
          </View>
          <View style={styles.form}>
            <TextBoxCustom isPassword={true} placeholder="Password" label="Senha" /> 
          </View>
          <View style={styles.form}>
            <ButtonCustom text="Acessar" onPress={() => {
              // Vamos adicionar a ação aqui em breve.
              console.log('Botão Acessar pressionado!');
            }} />
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
