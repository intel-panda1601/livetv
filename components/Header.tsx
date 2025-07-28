import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Dimensions } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function Header({ title, showBackButton = false }: HeaderProps) {
  const router = useRouter();

  // If no title is provided, default to "LIVE TV"
  const displayTitle = title || "LIVE TV";
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.spacer} />
        <View style={styles.content}>
          {showBackButton && (
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <ArrowLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
          <Text 
            style={styles.title}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
          >
            {displayTitle}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#3B82F6',
  },
  header: {
    backgroundColor: '#3B82F6',
    paddingBottom: 16,
  },
  spacer: {
    height: Platform.select({ android: 24, ios: 8 }),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width > 400 ? 24 : 16,
    paddingTop: 12,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  title: {
    fontSize: Platform.select({ android: 20, ios: 24 }),
    fontFamily: 'Cocogoose',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 48,
    textAlign: 'center',
  },
});