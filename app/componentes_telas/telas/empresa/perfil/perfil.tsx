import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './perfil.style';
import { ICONE_MINHA_IMAGEM } from "../../../../contantes/icones_imagens";

const CompanyProfile = () => {
  const companyData = {
    name: 'Empresa XXXXXXXX',
    logo: 'https://example.com/logo.png',
    description: 'Empresa de tecnologia e inovação.',
    website: 'https://empresataltaltal.com',
    contactEmail: 'contact@tech-innovations.com',
    openPositions: 5,
  };

  return (
    <View style={styles.container}>
      <Image source={ ICONE_MINHA_IMAGEM } style={styles.logo} />
      <Text style={styles.name}>{companyData.name}</Text>
      <Text style={styles.description}>{companyData.description}</Text>
      <Text style={styles.contact}>Email: {companyData.contactEmail}</Text>
      <Text style={styles.website}>Website: {companyData.website}</Text>
      <Text style={styles.positions}>Vagas abertas: {companyData.openPositions}</Text>
      
      <Button title="Ver vagas disponíveis" onPress={() => { /* Navegação para vagas */ }} />
    </View>
  );
};

export default CompanyProfile;