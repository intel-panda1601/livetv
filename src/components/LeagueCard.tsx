import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Trophy, Calendar, Users } from 'lucide-react-native';
import { League } from '../types';

interface LeagueCardProps {
  league: League;
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
            <Trophy size={32} color="#A855F7" />
          </View>
        )}
        <View style={styles.info}>
          <Text style={styles.name}>{league.name}</Text>
          <Text style={styles.season}>{league.season}</Text>
          {league.description && (
            <Text style={styles.description} numberOfLines={2}>
              {league.description}
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Calendar size={16} color="#A855F7" />
          <Text style={styles.footerText}>{league.matchCount} matches</Text>
        </View>
        <View style={styles.footerItem}>
          <Users size={16} color="#A855F7" />
          <Text style={styles.footerText}>Active</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#A855F7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#A855F7',
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
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
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 4,
  },
  season: {
    fontSize: 14,
    color: '#C084FC',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footerText: {
    fontSize: 14,
    color: '#C084FC',
  },
});