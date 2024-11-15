import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#004d40', 
        },
        headerTintColor: '#ffffff',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Página de direcionamento/index' }} />
      <Stack.Screen name="componentes_telas/telas/usuario/acesso/acesso" options={{ title: 'Acesso' }} />
      <Stack.Screen name="componentes_telas/telas/usuario/perfil/perfil" options={{ title: 'Perfil do Usuário' }} />
      <Stack.Screen name="componentes_telas/telas/usuario/registro/registro" options={{ title: 'Registro de Usuário' }} />
      <Stack.Screen name="componentes_telas/telas/empresa/perfil/perfil" options={{ title: 'Perfil da Empresa' }} />
      <Stack.Screen name="componentes_telas/telas/estagios/exibir/exibir" options={{ title: 'Página de Estágios' }} />
      <Stack.Screen name="componentes_telas/telas/empresa/exibir/exibir" options={{ title: 'Página de Empresas' }} />
    </Stack>
  );
}
