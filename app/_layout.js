import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { LogBox } from 'react-native';

export default function Layout() {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings if needed
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
