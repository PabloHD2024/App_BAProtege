import { Tabs } from 'expo-router';
import { COLORS } from '../../constants/colors';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: COLORS.primary }, tabBarActiveTintColor: COLORS.white, tabBarInactiveTintColor: '#CCC' }}>
      <Tabs.Screen name="inicio" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="proteccion" options={{ title: 'Protección' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}