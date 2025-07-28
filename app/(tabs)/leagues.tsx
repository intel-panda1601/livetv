import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import Header from '../../src/components/Header';
import LeagueCard from '../../src/components/LeagueCard';
import { mockLeagues } from '../../src/data/mockData';
import { useRouter } from 'expo-router';

export default function LeaguesScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleLeaguePress = (leagueId: string) => {
    router.push(`/league/${leagueId}`);
  };

  return (
    <View style={styles.container}>
      <Header title="Leagues" />
      
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Football Leagues</Text>
          <Text style={styles.headerSubtitle}>
            Follow your favorite leagues and stay updated with matches
          </Text>
        </View>

        <View style={styles.leaguesList}>
          {mockLeagues.map((league) => (
            <LeagueCard
              key={league.id}
              league={league}
              onPress={() => handleLeaguePress(league.id)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 16,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#C084FC',
    lineHeight: 22,
  },
  leaguesList: {
    paddingTop: 8,
    paddingBottom: 32,
  },
});