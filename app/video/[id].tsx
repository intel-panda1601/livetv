import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Calendar, Eye, Tag } from 'lucide-react-native';
import Header from '../../src/components/Header';
import VideoPlayer from '../../src/components/VideoPlayer';
import { mockVideos, mockHighlights } from '../../src/data/mockData';

export default function VideoDetailsScreen() {
  const { id } = useLocalSearchParams();
  
  // Check both videos and highlights
  let video = mockVideos.find(v => v.id === id);
  let isHighlight = false;
  
  if (!video) {
    const highlight = mockHighlights.find(h => h.id === id);
    if (highlight) {
      video = {
        id: highlight.id,
        title: highlight.title,
        thumbnailUrl: highlight.thumbnailUrl,
        videoId: highlight.videoId,
        duration: highlight.duration,
        uploadDate: highlight.uploadDate,
        views: highlight.views,
        category: 'Sport',
        description: highlight.description
      };
      isHighlight = true;
    }
  }

  if (!video) {
    return (
      <View style={styles.container}>
        <Header title="Video" showBackButton />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Video not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Video" showBackButton />
      
      <ScrollView style={styles.content}>
        {/* Video Player */}
        <View style={styles.videoPlayerContainer}>
          <VideoPlayer videoId={video.videoId} height={220} />
        </View>
        
        {/* Video Details */}
        <View style={styles.videoDetails}>
          <Text style={styles.title}>{video.title}</Text>
          
          <View style={styles.metadata}>
            <View style={styles.metadataItem}>
              <Calendar size={16} color="#A855F7" />
              <Text style={styles.metadataText}>{video.uploadDate}</Text>
            </View>
            
            <View style={styles.metadataItem}>
              <Eye size={16} color="#A855F7" />
              <Text style={styles.metadataText}>{video.views.toLocaleString()} views</Text>
            </View>

            <View style={styles.metadataItem}>
              <Text style={styles.durationText}>{video.duration}</Text>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.categoryBadge}>
              <Tag size={14} color="#FFFFFF" />
              <Text style={styles.categoryText}>{video.category}</Text>
            </View>
            {isHighlight && (
              <View style={[styles.categoryBadge, styles.highlightBadge]}>
                <Text style={styles.categoryText}>⭐ Highlight</Text>
              </View>
            )}
          </View>
          
          {video.description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.description}>{video.description}</Text>
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
  videoPlayerContainer: {
    marginBottom: 16,
  },
  videoDetails: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    margin: 16,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 16,
    lineHeight: 28,
  },
  metadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  metadataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metadataText: {
    fontSize: 14,
    color: '#C084FC',
  },
  durationText: {
    fontSize: 14,
    color: '#A855F7',
    fontWeight: '600',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  categoryBadge: {
    backgroundColor: '#A855F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  highlightBadge: {
    backgroundColor: '#F59E0B',
  },
  descriptionContainer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(168, 85, 247, 0.3)',
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#C084FC',
    lineHeight: 20,
  },
});