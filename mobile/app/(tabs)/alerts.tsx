import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { notifications } from '@/data/mockData';

const typeColors: Record<string, string> = {
  mention: '#0a66c2',
  job: '#1f8a46',
  connection: '#b24020',
};

export default function AlertsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ gap: 12, paddingBottom: 48 }}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Notifications</Text>
        <Text style={styles.title}>Stay updated on mentions, jobs, and connections.</Text>
      </View>

      {notifications.map((alert) => (
        <View key={alert.id} style={styles.card}>
          <View style={styles.row}>
            <View style={[styles.dot, { backgroundColor: typeColors[alert.type] ?? '#0a66c2' }]} />
            <Text style={styles.cardTitle}>{alert.title}</Text>
          </View>
          <Text style={styles.description}>{alert.description}</Text>
          <Text style={styles.time}>{alert.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f2ef',
    padding: 16,
  },
  hero: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    gap: 8,
  },
  eyebrow: {
    color: '#0a66c2',
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2b3d',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#1f2b3d',
  },
  description: {
    color: '#515e70',
  },
  time: {
    fontSize: 12,
    color: '#7c8899',
  },
});

