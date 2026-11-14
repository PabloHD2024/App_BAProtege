import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { getOnboarded, getUser } from '../utils/storage';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

SplashScreen.preventAutoHideAsync();

function InnerLayout() {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const onboarded = await getOnboarded();
      const user = await getUser();
      if (onboarded && user) {
        router.replace(user.mode === 'protegido' ? '/protegido/notificaciones' : '/(tabs)/inicio');
      }
      setReady(true);
      await SplashScreen.hideAsync();
    })();
  }, []);

  if (!ready) {
    return (
      <View style={[styles.loading, { backgroundColor: theme.bg }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }
  return <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right', animationDuration: 250 }} />;
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});