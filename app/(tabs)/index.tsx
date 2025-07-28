import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, FlatList } from 'react-native';
import { Radio, Clock, CheckCircle, Play } from 'lucide-react-native';
import Header from '../../src/components/Header';
import MatchCard from '../../src/components/MatchCard';
import VideoCard from '../../src/components/VideoCard';
import { mockMatches, mockVideos } from '../../src/data/mockData';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const liveMatches = mockMatches.filter(match => match.status === 'live');
  const upcomingMatches = mockMatches.filter(match => match.status === 'upcoming');
  const completedMatches = mockMatches.filter(match => match.status === 'completed');
  const featuredVideos = mockVideos.slice(0, 3);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleMatchPress = (matchId: string) => {
    router.push(`/match/${matchId}`);
  };

  const handleVideoPress = (videoId: string) => {
    router.push(`/video/${videoId}`);
  };

  const renderMatchItem = ({ item }) => (
    <View style={styles.horizontalMatchItem}>
      <MatchCard
        match={item}
        onPress={() => handleMatchPress(item.id)}
      />
    </View>
  );

  const renderVideoItem = ({ item }) => (
    <View style={styles.horizontalVideoItem}>
      <VideoCard
        video={item}
        onPress={() => handleVideoPress(item.id)}
      />
    </View>
  );

  const MatchSection = ({ title, matches, icon: Icon, iconColor }) => {
    if (matches.length === 0) return null;
    
    return (
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Icon size={24} color={iconColor} />
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionCount}>({matches.length})</Text>
        </View>
        
        <FlatList
          horizontal
          data={matches}
          keyExtractor={(item) => item.id}
          renderItem={renderMatchItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="LIVE TV" />
      
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Featured Videos Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Play size={24} color="#A855F7" />
            <Text style={styles.sectionTitle}>What's New</Text>
          </View>
          
          <FlatList
            horizontal
            data={featuredVideos}
            keyExtractor={(item) => item.id}
            renderItem={renderVideoItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* Live Matches Section */}
        <MatchSection 
          title="Live Matches" 
          matches={liveMatches} 
          icon={Radio} 
          iconColor="#EF4444" 
        />

        {/* Upcoming Matches Section */}
        <MatchSection 
          title="Upcoming Matches" 
          matches={upcomingMatches} 
          icon={Clock} 
          iconColor="#F59E0B" 
        />

        {/* Completed Matches Section */}
        <MatchSection 
          title="Recent Results" 
          matches={completedMatches} 
          icon={CheckCircle} 
          iconColor="#10B981" 
        />
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
  section: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A855F7',
  },
  sectionCount: {
    fontSize: 16,
    color: '#C084FC',
    fontWeight: '600',
    marginLeft: 4,
  },
  horizontalList: {
    paddingHorizontal: 16,
  },
  horizontalMatchItem: {
    width: 320,
    marginRight: 16,
  },
  horizontalVideoItem: {
    width: 280,
    marginRight: 16,
  },
});