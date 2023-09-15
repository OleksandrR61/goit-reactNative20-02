import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { RegistrationScreen, LoginScreen } from './screens';
import { Container } from './components';

export default function App() {
  const [ isFontsLoaded ] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), //500
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), //400
  });

  if (!isFontsLoaded) {
    return <Container />
  };

  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </>
  );
};