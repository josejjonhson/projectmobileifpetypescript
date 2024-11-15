import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './exibir.style'; 

interface Stage {
  id: string;
  title: string;
  description: string;
}

export default function Stages() {
  const [stages, setStages] = useState<Stage[]>([]);

  // Mesma função para renderizar cada item da lista de estágios
  const renderStage = ({ item }: { item: Stage }) => (
    <TouchableOpacity style={styles.stageContainer}>
      <Text style={styles.stageTitle}>{item.title}</Text>
      <Text style={styles.stageDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStages([
        { id: '1', title: 'Estágio em Desenvolvimento Front-end', description: 'Descrição sobre estágio em front-end' },
        { id: '2', title: 'Estágio em Desenvolvimento Backend', description: 'Descrição sobre estágio em backend' },
        { id: '3', title: 'Estágio em Design Gráfico', description: 'Descrição sobre estágio em design gráfico' },
      ]);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View>
      <FlatList
        data={stages}
        keyExtractor={(item) => item.id}
        renderItem={renderStage}
      />
    </View>
  );
}
