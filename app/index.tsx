// PÁGINA USADA PRINCIPALMENTE PARA DEBUG E DIRECIONAMENTO


import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Link href="/componentes_telas/telas/usuario/acesso/acesso" style={{ padding: 10, borderWidth: 1 }}>
        Ir para a tela Acesso
      </Link>
      <Link href="/componentes_telas/telas/usuario/perfil/perfil" style={{ padding: 10, borderWidth: 1 }}>
        Ir para a tela de Perfil de Usuário
      </Link>
    </View>
  );
}


// POSTERIORMENTE VAMOS IMPLEMENTAR ESSE CÓDIGO
// import { useEffect, useState } from 'react';
// import { Redirect } from 'expo-router';  // Importando a função Redirect

// export default function Index() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Lógica para verificar se o usuário está autenticado
//     // Exemplo: verificar token de login armazenado
//     const token = localStorage.getItem('authToken'); // ou AsyncStorage, dependendo de onde você armazena
//     setIsLoggedIn(!!token);
//   }, []);

//   if (isLoggedIn) {
//     return <Redirect href="/screens/home/home_view" />;  // Redireciona para a tela principal
//   }

//   return <Redirect href="/screens/login/login_view" />;  // Redireciona para a tela de login
// }
