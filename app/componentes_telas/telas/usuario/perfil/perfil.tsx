import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import ButtonCustom from '../../../../componentes_telas/componentes/buttonCustom/ButtonCustom'; // Importando o ButtonCustom
import { styles } from './perfil.style';
import { ICONE_MINHA_IMAGEM } from "../../../../contantes/icones_imagens";  

function Perfil() {
  const [name, setName] = useState('José Jonhson');
  const [email, setEmail] = useState('josejjonhson@gmail.com');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil do Usuário</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image source={ ICONE_MINHA_IMAGEM } style={styles.logo} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <ButtonCustom
        text="Editar Perfil"
        style={[styles.button, styles.editButton]}
        textStyle={styles.buttonText}
        // Adicionar a ação do botão depois
        onPress={() => console.log("Editar Perfil pressionado")}
      />

      <ButtonCustom
        text="Sair"
        style={[styles.button, styles.footerButton]}
        textStyle={styles.buttonText}
        // Adicionar a ação do botão depois
        onPress={() => console.log("Sair pressionado")}
      />
    </ScrollView>
  );
}

export default Perfil;
