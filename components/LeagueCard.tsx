import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Trophy, Calendar } from 'lucide-react-native';

interface LeagueCardProps {
  league: {
    id: string;
    name: string;
    logoUrl?: string;
    matchCount: number;
    season: string;
  };
  onPress: () => void;
}

export default function LeagueCard({ league, onPress }: LeagueCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        {league.logoUrl ? (
          <Image source={{ uri: league.logoUrl }} style={styles.logo} />
        ) : (
          <View style={styles.logoPlaceholder}>
            <Trophy size={32} color="#8B5CF6" />
          </View>
        )}
        <View style={styles.info}>
          <Text style={styles.name}>{league.name}</Text>
          <Text style={styles.season}>{league.season}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.matchInfo}>
          <Calendar size={16} color="#8B5CF6" />
          <Text style={styles.matchCount}>{league.matchCount} matches</Text>
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
    padding: 16,
    shadowColor: '#6B46C1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  logoPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Cocogoose',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#6B46C1',
    marginBottom: 4,
  },
  season: {
    fontSize: 14,
    color: '#6B7280',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  matchCount: {
    fontSize: 14,
    color: '#6B7280',
  },
});