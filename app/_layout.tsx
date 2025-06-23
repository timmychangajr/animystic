import { AppColors } from '@/constants/Colors';
import { useTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import 'react-native-reanimated';

const bg_img = require('../assets/images/animystic_bg.png')


export default function RootLayout() {
  const { colors } = useTheme();
  colors.background = 'transparent';
  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/Outfit-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={bg_img}
      resizeMode='cover'
      style={{ flex: 1, backgroundColor: AppColors.background }}
    >
      <Stack screenOptions={{animation:'fade'}}>
        <Stack.Screen name="(tabs)"
          options={{
            headerShown: false,
          }} />
      </Stack>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
