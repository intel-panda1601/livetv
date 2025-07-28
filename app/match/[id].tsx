import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Calendar, MapPin, Trophy, Users } from 'lucide-react-native';
import Header from '../../src/components/Header';
import { mockMatches } from '../../src/data/mockData';

export default function MatchDetailsScreen() {
  const { id } = useLocalSearchParams();
  const match = mockMatches.find(m => m.id === id);

  if (!match) {
    return (
      <View style={styles.container}>
        <Header title="Match Details" showBackButton />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Match not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Match Details" showBackButton />
      
      <ScrollView style={styles.content}>
        {match.imageUrl && (
          <Image source={{ uri: match.imageUrl }} style={styles.matchImage} />
        )}
        
        <View style={styles.matchHeader}>
          <View style={styles.statusContainer}>
            <View style={[styles.statusDot, { 
              backgroundColor: match.status === 'live' ? '#EF4444' : 
                             match.status === 'upcoming' ? '#F59E0B' : '#10B981' 
            }]} />
            <Text style={styles.statusText}>{match.status.toUpperCase()}</Text>
          </View>
          
          <View style={styles.teamsContainer}>
            <View style={styles.teamSection}>
              {match.team1Logo && (
                <Image source={{ uri: match.team1Logo }} style={styles.teamLogo} />
              )}
              <Text style={styles.teamName}>{match.team1}</Text>
              {match.score && (
                <Text style={styles.score}>{match.score.team1}</Text>
              )}
            </View>
            
            <Text style={styles.vsText}>VS</Text>
            
            <View style={styles.teamSection}>
              {match.team2Logo && (
                <Image source={{ uri: match.team2Logo }} style={styles.teamLogo} />
              )}
              <Text style={styles.teamName}>{match.team2}</Text>
              {match.score && (
                <Text style={styles.score}>{match.score.team2}</Text>
              )}
            </View>
          </View>
          
          <View style={styles.matchInfo}>
            <View style={styles.infoItem}>
              <Calendar size={20} color="#A855F7" />
              <Text style={styles.infoText}>{match.date} • {match.time}</Text>
            </View>
            {match.venue && (
              <View style={styles.infoItem}>
                <MapPin size={20} color="#A855F7" />
                <Text style={styles.infoText}>{match.venue}</Text>
              </View>
            )}
            <View style={styles.infoItem}>
              <Trophy size={20} color="#A855F7" />
              <Text style={styles.infoText}>{match.league}</Text>
            </View>
          </View>
        </View>

        {/* Match Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Match Information</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardText}>
              {match.status === 'live' && 'This match is currently being played live.'}
              {match.status === 'upcoming' && 'This match is scheduled to be played soon.'}
              {match.status === 'completed' && 'This match has been completed.'}
            </Text>
            {match.score && (
              <Text style={styles.finalScore}>
                Final Score: {match.team1} {match.score.team1} - {match.score.team2} {match.team2}
              </Text>
            )}
          </View>
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
  matchImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  matchHeader: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C084FC',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  teamSection: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  teamLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A855F7',
    textAlign: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  vsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#A855F7',
    marginHorizontal: 16,
  },
  matchInfo: {
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#C084FC',
  },
  section: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 16,
    borderRadius: 12,
  },
  infoCardText: {
    fontSize: 16,
    color: '#C084FC',
    lineHeight: 22,
    marginBottom: 8,
  },
  finalScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A855F7',
    textAlign: 'center',
  },
});