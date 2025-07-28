import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, TouchableOpacity, FlatList } from 'react-native';
import { Play, Filter } from 'lucide-react-native';
import Header from '../../src/components/Header';
import VideoCard from '../../src/components/VideoCard';
import { mockVideos } from '../../src/data/mockData';
import { useRouter } from 'expo-router';

export default function VideosScreen() {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Sport', 'Podcast', 'TV Show', 'Other'];

  const filteredVideos = selectedCategory === 'All' 
    ? mockVideos 
    : mockVideos.filter(video => video.category === selectedCategory);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleVideoPress = (videoId: string) => {
    router.push(`/video/${videoId}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sport':
        return '⚽';
      case 'Podcast':
        return '🎙️';
      case 'TV Show':
        return '📺';
      case 'Other':
        return '🎬';
      default:
        return '📹';
    }
  };

  const renderVideosByCategory = () => {
    return categories.slice(1).map((category) => {
      const categoryVideos = mockVideos.filter(video => video.category === category);
      if (categoryVideos.length === 0) return null;
      
      return (
        <View key={category} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>
            {getCategoryIcon(category)} {category}
          </Text>
          
          <FlatList
            horizontal
            data={categoryVideos}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
            renderItem={({ item }) => (
              <View style={styles.horizontalVideoItem}>
                <VideoCard
                  video={item}
                  onPress={() => handleVideoPress(item.id)}
                />
              </View>
            )}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Videos" />
      
      {/* Filter Section */}
      <View style={styles.filterSection}>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} color="#A855F7" />
          <Text style={styles.filterButtonText}>
            {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Filter Options */}
      {showFilters && (
        <View style={styles.filterOptions}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryChip,
                  selectedCategory === category && styles.categoryChipActive
                ]}
                onPress={() => {
                  setSelectedCategory(category);
                  setShowFilters(false);
                }}
              >
                <Text style={[
                  styles.categoryChipText,
                  selectedCategory === category && styles.categoryChipTextActive
                ]}>
                  {category}
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
        {selectedCategory === 'All' ? (
          renderVideosByCategory()
        ) : (
          <View style={styles.categorySection}>
            <Text style={styles.categoryTitle}>
              {getCategoryIcon(selectedCategory)} {selectedCategory}
            </Text>
            <View style={styles.videoGrid}>
              {filteredVideos.map((video) => (
                <View key={video.id} style={styles.videoItem}>
                  <VideoCard
                    video={video}
                    onPress={() => handleVideoPress(video.id)}
                  />
                </View>
              ))}
            </View>
          </View>
        )}
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
  categoryChip: {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  categoryChipActive: {
    backgroundColor: '#A855F7',
    borderColor: '#A855F7',
  },
  categoryChipText: {
    color: '#A855F7',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  categorySection: {
    marginTop: 24,
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A855F7',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  horizontalList: {
    paddingHorizontal: 16,
  },
  horizontalVideoItem: {
    width: 280,
    marginRight: 16,
  },
  videoGrid: {
    paddingHorizontal: 16,
  },
  videoItem: {
    marginBottom: 16,
  },
});