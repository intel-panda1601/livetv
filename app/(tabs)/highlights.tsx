import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, TouchableOpacity } from 'react-native';
import { Star, Filter, Play } from 'lucide-react-native';
import Header from '../../src/components/Header';
import VideoCard from '../../src/components/VideoCard';
import { mockHighlights } from '../../src/data/mockData';
import { useRouter } from 'expo-router';

export default function HighlightsScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedSport, setSelectedSport] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const sportCategories = ['All', 'Football', 'Basketball', 'Tennis', 'Baseball', 'Hockey'];

  const filteredHighlights = selectedSport === 'All' 
    ? mockHighlights 
    : mockHighlights.filter(highlight => highlight.sport === selectedSport);

  const featuredHighlights = filteredHighlights.filter(highlight => highlight.featured);
  const regularHighlights = filteredHighlights.filter(highlight => !highlight.featured);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleVideoPress = (videoId: string) => {
    router.push(`/video/${videoId}`);
  };

  return (
    <View style={styles.container}>
      <Header title="Sports Highlights" />
      
      {/* Filter Section */}
      <View style={styles.filterSection}>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} color="#A855F7" />
          <Text style={styles.filterButtonText}>
            {selectedSport === 'All' ? 'All Sports' : selectedSport}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Filter Options */}
      {showFilters && (
        <View style={styles.filterOptions}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sportCategories.map((sport) => (
              <TouchableOpacity
                key={sport}
                style={[
                  styles.sportChip,
                  selectedSport === sport && styles.sportChipActive
                ]}
                onPress={() => {
                  setSelectedSport(sport);
                  setShowFilters(false);
                }}
              >
                <Text style={[
                  styles.sportChipText,
                  selectedSport === sport && styles.sportChipTextActive
                ]}>
                  {sport}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Featured Highlights */}
        {featuredHighlights.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Star size={24} color="#FFD700" />
              <Text style={styles.sectionTitle}>Featured Highlights</Text>
            </View>
            {featuredHighlights.map((highlight) => (
              <View key={highlight.id} style={styles.featuredCard}>
                <VideoCard
                  video={{
                    id: highlight.id,
                    title: highlight.title,
                    thumbnailUrl: highlight.thumbnailUrl,
                    videoId: highlight.videoId,
                    duration: highlight.duration,
                    uploadDate: highlight.uploadDate,
                    views: highlight.views,
                    category: 'Sport'
                  }}
                  onPress={() => handleVideoPress(highlight.id)}
                />
                <View style={styles.featuredBadge}>
                  <Star size={16} color="#FFD700" fill="#FFD700" />
                  <Text style={styles.featuredText}>Featured</Text>
                </View>
                <View style={styles.highlightMeta}>
                  <Text style={styles.sportTag}>{highlight.sport}</Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Regular Highlights */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Play size={24} color="#A855F7" />
            <Text style={styles.sectionTitle}>
              {selectedSport === 'All' ? 'All Highlights' : `${selectedSport} Highlights`}
            </Text>
          </View>
          
          {regularHighlights.map((highlight) => (
            <View key={highlight.id} style={styles.highlightCard}>
              <VideoCard
                video={{
                  id: highlight.id,
                  title: highlight.title,
                  thumbnailUrl: highlight.thumbnailUrl,
                  videoId: highlight.videoId,
                  duration: highlight.duration,
                  uploadDate: highlight.uploadDate,
                  views: highlight.views,
                  category: 'Sport'
                }}
                onPress={() => handleVideoPress(highlight.id)}
              />
              <View style={styles.highlightMeta}>
                <Text style={styles.sportTag}>{highlight.sport}</Text>
              </View>
            </View>
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
  filterSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  filterButtonText: {
    color: '#A855F7',
    fontSize: 14,
    fontWeight: '600',
  },
  filterOptions: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sportChip: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  sportChipActive: {
    backgroundColor: '#A855F7',
    borderColor: '#A855F7',
  },
  sportChipText: {
    color: '#A855F7',
    fontSize: 14,
    fontWeight: '500',
  },
  sportChipTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
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
  featuredCard: {
    position: 'relative',
    marginBottom: 16,
  },
  featuredBadge: {
    position: 'absolute',
    top: 16,
    right: 32,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
    zIndex: 10,
  },
  featuredText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '600',
  },
  highlightCard: {
    marginBottom: 16,
  },
  highlightMeta: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  sportTag: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    color: '#A855F7',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
});