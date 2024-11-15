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
    </Stack>
  );
}
