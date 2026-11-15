// app/_layout.tsx
import { Stack } from 'expo-router';
import { ThemeProvider } from '../contexts/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />
    </ThemeProvider>
  );
}