import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Trophy, Calendar, Users } from 'lucide-react-native';
import Header from '../../src/components/Header';
import MatchCard from '../../src/components/MatchCard';
import { mockLeagues, mockMatches } from '../../src/data/mockData';
import { useRouter } from 'expo-router';

export default function LeagueDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const league = mockLeagues.find(l => l.id === id);
  const leagueMatches = mockMatches.filter(m => m.league === league?.name);

  if (!league) {
    return (
      <View style={styles.container}>
        <Header title="League Details" showBackButton />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>League not found</Text>
        </View>
      </View>
    );
  }

  const handleMatchPress = (matchId: string) => {
    router.push(`/match/${matchId}`);
  };

  return (
    <View style={styles.container}>
      <Header title={league.name} showBackButton />
      
      <ScrollView style={styles.content}>
        {/* League Header */}
        <View style={styles.leagueHeader}>
          {league.logoUrl && (
            <Image source={{ uri: league.logoUrl }} style={styles.leagueLogo} />
          )}
          <View style={styles.leagueInfo}>
            <Text style={styles.leagueName}>{league.name}</Text>
            <Text style={styles.leagueSeason}>{league.season}</Text>
            {league.description && (
              <Text style={styles.leagueDescription}>{league.description}</Text>
            )}
          </View>
        </View>

        {/* League Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Calendar size={24} color="#A855F7" />
            <Text style={styles.statNumber}>{league.matchCount}</Text>
            <Text style={styles.statLabel}>Total Matches</Text>
          </View>
          <View style={styles.statCard}>
            <Trophy size={24} color="#F59E0B" />
            <Text style={styles.statNumber}>{leagueMatches.length}</Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
          <View style={styles.statCard}>
            <Users size={24} color="#10B981" />
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Teams</Text>
          </View>
        </View>

        {/* Matches Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Matches</Text>
          {leagueMatches.length > 0 ? (
            leagueMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onPress={() => handleMatchPress(match.id)}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No matches available for this league</Text>
            </View>
          )}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#A855F7',
    fontWeight: 'bold',
  },
  leagueHeader: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  leagueLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  leagueInfo: {
    flex: 1,
  },
  leagueName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 4,
  },
  leagueSeason: {
    fontSize: 16,
    color: '#C084FC',
    marginBottom: 8,
  },
  leagueDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A855F7',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#C084FC',
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A855F7',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  emptyState: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#C084FC',
    textAlign: 'center',
  },
});