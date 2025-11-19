import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { PostCard } from '@/components/linkedin/PostCard';
import { TopNav } from '@/components/linkedin/TopNav';
import { heroStats, posts } from '@/data/mockData';

const filters = ['Top', 'Recent', '#Hiring', 'Promoted'];
const personalPhoto = require('@/assets/images/sakshib.png');

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <TopNav />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ gap: 16 }}>
            <HeroCard />
            <StatsRow />
            <Composer />
            <FilterRow />
          </View>
        }
      />
    </View>
  );
}

const HeroCard = () => (
  <View style={styles.hero}>
    <View style={{ flex: 1, gap: 6 }}>
      <Text style={styles.eyebrow}>Welcome back</Text>
      <Text style={styles.heroTitle}>Keep building your feed.</Text>
      <Text style={styles.heroSubtitle}>Engage with posts that matter, follow trending companies, and share wins.</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Open to work</Text>
      </View>
    </View>
    <Image source={personalPhoto} style={styles.heroPhoto} />
  </View>
);

const StatsRow = () => (
  <View style={styles.statsRow}>
    {heroStats.map((stat) => (
      <View key={stat.label} style={styles.statCard}>
        <Text style={styles.statLabel}>{stat.label}</Text>
        <Text style={styles.statValue}>{stat.value}</Text>
        <Text style={styles.statChange}>{stat.change}</Text>
      </View>
    ))}
  </View>
);

const Composer = () => (
  <View style={styles.composer}>
    <View style={styles.composerRow}>
      <Image source={personalPhoto} style={styles.avatarPlaceholder} />
      <TextInput placeholder="Share your thoughts..." placeholderTextColor="#7c8899" style={styles.input} />
    </View>
    <View style={styles.composerActions}>
      {['Photo', 'Video', 'Job', 'Write article'].map((action) => (
        <TouchableOpacity key={action} style={styles.actionChip}>
          <Text style={styles.pillText}>{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const FilterRow = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
    {filters.map((chip, index) => (
      <View key={chip} style={[styles.filterChip, index === 0 && styles.filterChipActive]}>
        <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>{chip}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3f2ef',
  },
  hero: {
    backgroundColor: '#0a66c2',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  eyebrow: {
    color: 'rgba(255,255,255,0.9)',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontSize: 12,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  badgeText: {
    color: '#0a66c2',
    fontWeight: '600',
  },
  heroPhoto: {
    width: 110,
    height: 110,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  statCard: {
    flex: 1,
    minWidth: 110,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6a7382',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2b3d',
  },
  statChange: {
    fontSize: 12,
    color: '#1f8a46',
    fontWeight: '600',
  },
  composer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  composerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#dfe4ea',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e3e8',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: '#1f2b3d',
    fontSize: 15,
  },
  composerActions: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  actionChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#eef4ff',
  },
  pillText: {
    color: '#0a66c2',
    fontWeight: '600',
  },
  filterRow: {
    gap: 8,
  },
  filterChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#cfd5dd',
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  filterChipActive: {
    backgroundColor: '#0a66c2',
    borderColor: '#0a66c2',
  },
  filterText: {
    color: '#5c6675',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
});
