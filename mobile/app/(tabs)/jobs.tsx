import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { jobs } from '@/data/mockData';

export default function JobsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ gap: 16, paddingBottom: 48 }}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Jobs for you</Text>
        <Text style={styles.title}>Match roles to your skills</Text>
        <Text style={styles.subtitle}>Signal interest, set alerts, and track applicants in one place.</Text>
      </View>

      <View style={{ gap: 12 }}>
        {jobs.map((job) => (
          <View key={job.id} style={styles.card}>
            <View style={{ gap: 4 }}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
              <Text style={styles.location}>{job.location}</Text>
            </View>
            <View style={styles.metaRow}>
              <Text style={styles.meta}>{job.mode}</Text>
              <Text style={styles.meta}>{job.applicants} applicants</Text>
            </View>
            <View style={styles.actions}>
              <View style={styles.primaryBtn}>
                <Text style={styles.primaryText}>Instant apply</Text>
              </View>
              <View style={styles.secondaryBtn}>
                <Text style={styles.secondaryText}>Save</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
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
    gap: 6,
  },
  eyebrow: {
    color: '#0a66c2',
    fontWeight: '600',
    fontSize: 13,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2b3d',
  },
  subtitle: {
    color: '#5b6674',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    gap: 12,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2b3d',
  },
  company: {
    fontSize: 15,
    color: '#394455',
  },
  location: {
    fontSize: 13,
    color: '#6a7382',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    fontSize: 12,
    color: '#0a66c2',
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: '#0a66c2',
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryBtn: {
    flex: 1,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#d3d7de',
    paddingVertical: 10,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#1f2b3d',
    fontWeight: '600',
  },
});

