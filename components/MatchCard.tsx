import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Calendar, MapPin } from 'lucide-react-native';

interface MatchCardProps {
  match: {
    id: string;
    team1: string;
    team2: string;
    date: string;
    time: string;
    status: 'live' | 'upcoming' | 'completed';
    venue?: string;
    imageUrl?: string;
    team1Logo?: string;
    team2Logo?: string;
  };
  onPress: () => void;
}

export default function MatchCard({ match, onPress }: MatchCardProps) {
  const getStatusColor = () => {
    switch (match.status) {
      case 'live':
        return '#EF4444';
      case 'upcoming':
        return '#F59E0B';
      case 'completed':
        return '#10B981';
      default:
        return '#6B7280';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {match.imageUrl && (
        <Image source={{ uri: match.imageUrl }} style={styles.image} />
      )}
      <View style={styles.content}>
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: getStatusColor() }]} />
          <Text style={styles.statusText}>{match.status.toUpperCase()}</Text>
        </View>
        
        <View style={styles.teamsContainer}>
          <View style={styles.teamSection}>
            {match.team1Logo && (
              <Image source={{ uri: match.team1Logo }} style={styles.teamLogo} />
            )}
            <Text style={styles.teamText}>{match.team1}</Text>
          </View>
          <Text style={styles.vsText}>VS</Text>
          <View style={styles.teamSection}>
            {match.team2Logo && (
              <Image source={{ uri: match.team2Logo }} style={styles.teamLogo} />
            )}
            <Text style={styles.teamText}>{match.team2}</Text>
          </View>
        </View>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Calendar size={16} color="#8B5CF6" />
            <Text style={styles.detailText}>{match.date} • {match.time}</Text>
          </View>
          {match.venue && (
            <View style={styles.detail}>
              <MapPin size={16} color="#8B5CF6" />
              <Text style={styles.detailText}>{match.venue}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#6B46C1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  teamSection: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  teamLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  teamText: {
    fontSize: 18,
    fontFamily: 'Cocogoose',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#6B46C1',
    textAlign: 'center',
  },
  vsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6',
    marginHorizontal: 16,
  },
  detailsContainer: {
    gap: 8,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
  },
});