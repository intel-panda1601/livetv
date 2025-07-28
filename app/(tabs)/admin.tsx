import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Settings, Users, BarChart3, Shield, Database, Activity } from 'lucide-react-native';
import Header from '../../src/components/Header';

export default function AdminScreen() {
  const adminStats = [
    { title: 'Total Matches', value: '156', color: '#EF4444' },
    { title: 'Live Matches', value: '3', color: '#F59E0B' },
    { title: 'Total Leagues', value: '8', color: '#10B981' },
    { title: 'Total Videos', value: '45', color: '#A855F7' },
    { title: 'Active Users', value: '1.2K', color: '#6366F1' },
    { title: 'Highlights', value: '89', color: '#FFD700' },
  ];

  const adminSections = [
    {
      title: 'User Management',
      icon: Users,
      color: '#EF4444',
      description: 'Manage user accounts and permissions',
    },
    {
      title: 'Content Management',
      icon: Database,
      color: '#F59E0B',
      description: 'Manage matches, videos, and highlights',
    },
    {
      title: 'Analytics',
      icon: BarChart3,
      color: '#10B981',
      description: 'View app usage and performance metrics',
    },
    {
      title: 'Security',
      icon: Shield,
      color: '#A855F7',
      description: 'Security settings and access control',
    },
    {
      title: 'System Status',
      icon: Activity,
      color: '#6366F1',
      description: 'Monitor system health and performance',
    },
    {
      title: 'Settings',
      icon: Settings,
      color: '#6B7280',
      description: 'App configuration and preferences',
    },
  ];

  const StatCard = ({ title, value, color }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Admin Panel" />
      
      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome, Admin</Text>
          <Text style={styles.welcomeSubtitle}>
            Manage your Live TV app from this dashboard
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dashboard Overview</Text>
          <View style={styles.statsGrid}>
            {adminStats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                color={stat.color}
              />
            ))}
          </View>
        </View>

        {/* Admin Sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Management</Text>
          {adminSections.map((section, index) => (
            <TouchableOpacity key={index} style={styles.adminCard}>
              <View style={[styles.iconContainer, { backgroundColor: `${section.color}20` }]}>
                <section.icon size={24} color={section.color} />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{section.title}</Text>
                <Text style={styles.cardDescription}>{section.description}</Text>
              </View>
              <Settings size={20} color="#6B7280" />
            </TouchableOpacity>
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
  welcomeSection: {
    padding: 16,
    marginTop: 16,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#C084FC',
    lineHeight: 22,
  },
  section: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: 100,
    maxWidth: '48%',
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#C084FC',
    fontWeight: '600',
  },
  adminCard: {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#A855F7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A855F7',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#C084FC',
  },
});