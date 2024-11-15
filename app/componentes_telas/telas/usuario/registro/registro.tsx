import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style"; // Verifique a extensão do arquivo de estilo
import HeaderCustom from "../../../componentes/headerCustom/HeaderCustom"; // Certifique-se de que está importando o componente correto
import TextBoxCustom from "../../../componentes/textboxCustom/TextBoxCustom";
import ButtonCustom from "../../../componentes/buttonCustom/ButtonCustom"; // Usando ButtonCustom

const Registro: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          {/* Corrigido: Alterei Header para HeaderCustom */}
          <HeaderCustom text="Criar a sua Conta." />
        </View>

        <View style={styles.formGroup}>
          <View style={styles.form}>
            <TextBoxCustom placeholder="Nome Completo" label="Nome Completo" />
          </View>

          <View style={styles.form}>
            <TextBoxCustom placeholder="E-mail" label="E-mail" />
          </View>

          <View style={styles.form}>
            <TextBoxCustom isPassword={true} placeholder="Password" label="Escolha uma senha" />
          </View>

          <View style={styles.form}>
            <TextBoxCustom isPassword={true} placeholder="Password" label="Confirme a senha" />
          </View>

          <View style={styles.form}>
            
            <ButtonCustom 
                text="Próximo passo" 
                onPress={() => {
                    // Ação que você quer executar ao pressionar o botão
                    console.log("Próximo passo pressionado!");
                }} 
            />
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Acessar minha conta.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Registro;
