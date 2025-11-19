import { Ionicons } from '@expo/vector-icons';
import { Animated, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { TopNav } from '@/components/linkedin/TopNav';
import {
  buildConnectionSuggestions,
  ConnectionSuggestion,
  networkContext,
  refreshConnectionSuggestions,
  warmConnectionAvatarCache,
} from '@/data/mockData';
import { eventBus } from '@/utils/eventBus';

type TabKey = 'Grow' | 'Catch up';

export default function NetworkScreen() {
  const [pending, setPending] = useState<Record<number, boolean>>({});
  const [connections, setConnections] = useState(() => {
    const items = buildConnectionSuggestions(80);
    warmConnectionAvatarCache(items);
    return items;
  });
  const [activeTab, setActiveTab] = useState<TabKey>('Grow');
  const listRef = useRef<FlatList<ConnectionSuggestion>>(null);
  const refreshAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = eventBus.on('network:refresh', () => {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
      setPending({});
      
      // Reset rotation
      rotateAnim.setValue(0);
      
      // Animate refresh indicator in with rotation
      Animated.parallel([
        Animated.sequence([
          Animated.timing(refreshAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.delay(800),
          Animated.timing(refreshAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start();
      
      // Refresh with new random suggestions
      const newConnections = refreshConnectionSuggestions();
      setConnections(newConnections);
    });

    return unsubscribe;
  }, [refreshAnim, rotateAnim]);

  const handleConnect = (id: number) => {
    setPending((prev) => ({ ...prev, [id]: true }));
  };

  const data = activeTab === 'Grow' ? connections : [];

  const translateY = refreshAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-60, 0],
  });

  const opacity = refreshAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.root}>
      <TopNav />
      <Animated.View
        style={[
          styles.refreshBanner,
          {
            transform: [{ translateY }],
            opacity,
          },
        ]}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Ionicons name="refresh" size={18} color="#0a66c2" />
        </Animated.View>
        <Text style={styles.refreshBannerText}>Refreshing suggestions...</Text>
      </Animated.View>
      <FlatList
        ref={listRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConnectionCard person={item} pending={pending[item.id]} onConnect={() => handleConnect(item.id)} />
        )}
        contentContainerStyle={{ padding: 16, gap: 14, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <HeaderSection activeTab={activeTab} onTabChange={setActiveTab} />
        }
        ListFooterComponent={
          activeTab === 'Catch up' ? (
            <View style={styles.empty}>
              <Text style={styles.emptyTitle}>No reminders yet</Text>
              <Text style={styles.emptySubtitle}>See updates and milestones from your connections here.</Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const HeaderSection = ({
  activeTab,
  onTabChange,
}: {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}) => (
  <View style={{ gap: 16 }}>
    <View style={styles.tabRow}>
      {(['Grow', 'Catch up'] as TabKey[]).map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tabButton, activeTab === tab && styles.tabButtonActive]}
          onPress={() => onTabChange(tab)}>
          <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <TouchableOpacity style={styles.invitationsRow}>
      <Text style={styles.invitationsTitle}>Invitations</Text>
      <Ionicons name="chevron-forward" size={20} color="#5b6674" />
    </TouchableOpacity>

    <View style={styles.banner}>
      <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
        <View style={styles.iconBadge}>
          <Ionicons name="extension-puzzle-outline" size={26} color="#b35300" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Take a break with a LinkedIn puzzle game</Text>
          <Text style={styles.bannerSubtitle}>Zip – a quick brain teaser · Solve in 60s or less!</Text>
        </View>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Solve</Text>
        </TouchableOpacity>
      </View>
    </View>

    <TouchableOpacity style={styles.manageRow}>
      <Text style={styles.manageTitle}>Manage my network</Text>
      <Ionicons name="chevron-forward" size={20} color="#5b6674" />
    </TouchableOpacity>

    <View style={styles.sectionHeader}>
      <Image
        source={
          typeof networkContext.ownerAvatar === 'string'
            ? { uri: networkContext.ownerAvatar }
            : networkContext.ownerAvatar
        }
        style={styles.sectionAvatar}
      />
      <Text style={styles.sectionTitle}>{networkContext.ownerName}&rsquo;s connections you may know</Text>
    </View>
  </View>
);

const ConnectionCard = ({
  person,
  pending,
  onConnect,
}: {
  person: ConnectionSuggestion;
  pending?: boolean;
  onConnect: () => void;
}) => (
  <View style={styles.card}>
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Image source={{ uri: person.avatar }} style={styles.avatar} />
      <View style={{ flex: 1, gap: 2 }}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{person.name}</Text>
          {person.verified && <Ionicons name="shield-checkmark" size={16} color="#0a66c2" />}
        </View>
        <Text style={styles.headline} numberOfLines={2}>
          {person.headline}
        </Text>
        <View style={styles.mutualRow}>
          <Ionicons name="people-circle" size={18} color="#f8a01c" />
          <Text style={styles.mutual}>{person.mutualName} and {person.mutual} others</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      style={[styles.connectBtn, pending && styles.connectBtnPending]}
      disabled={pending}
      onPress={onConnect}>
      <Text style={[styles.connectText, pending && styles.connectTextPending]}>{pending ? 'Pending' : 'Connect'}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f4f1',
  },
  refreshBanner: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#e6f0ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cce0ff',
    elevation: 3,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
      },
      default: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
  },
  refreshBannerText: {
    color: '#0a66c2',
    fontWeight: '600',
    fontSize: 14,
  },
  tabRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dcd5c8',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabButtonActive: {
    borderBottomWidth: 3,
    borderColor: '#0a66c2',
  },
  tabText: {
    fontSize: 16,
    color: '#6a7382',
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#0a66c2',
  },
  invitationsRow: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ebe9e4',
  },
  invitationsTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1f1f1f',
  },
  banner: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ebe9e4',
  },
  iconBadge: {
    width: 54,
    height: 54,
    borderRadius: 12,
    backgroundColor: '#fff4e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontWeight: '700',
    color: '#1f1f1f',
  },
  bannerSubtitle: {
    color: '#5c6068',
    fontSize: 13,
  },
  bannerButton: {
    borderWidth: 1,
    borderColor: '#0a66c2',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  bannerButtonText: {
    color: '#0a66c2',
    fontWeight: '600',
  },
  manageRow: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ebe9e4',
  },
  manageTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f1f1f',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  sectionAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1f1f1f',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: '#ebe9e4',
    elevation: 2,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
      },
      default: {
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f1f1f',
  },
  headline: {
    color: '#5b6674',
    fontSize: 13,
  },
  mutualRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  mutual: {
    fontSize: 12,
    color: '#5b6674',
  },
  connectBtn: {
    alignSelf: 'flex-end',
    borderWidth: 1.2,
    borderColor: '#0a66c2',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 32,
  },
  connectBtnPending: {
    borderColor: '#d3d7de',
    backgroundColor: '#f3f4f7',
  },
  connectText: {
    color: '#0a66c2',
    fontWeight: '700',
  },
  connectTextPending: {
    color: '#7c8899',
  },
  empty: {
    padding: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f1f1f',
  },
  emptySubtitle: {
    color: '#5b6674',
    textAlign: 'center',
  },
});
