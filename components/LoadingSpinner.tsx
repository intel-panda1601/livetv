import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet, Image } from 'react-native';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  showLogo?: boolean;
}

export default function LoadingSpinner({ 
  size = 40, 
  color = '#522e8e', 
  showLogo = false 
}: LoadingSpinnerProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => spin());
    };
    spin();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {showLogo && (
        <Image 
          source={require('../assets/images/icono.jpg')} 
          style={styles.logo}
          resizeMode="contain"
        />
      )}
      <Animated.View
        style={[
          styles.spinner,
          {
            width: size,
            height: size,
            borderColor: `${color}20`,
            borderTopColor: color,
            borderWidth: 4,
            transform: [{ rotate }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  spinner: {
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});