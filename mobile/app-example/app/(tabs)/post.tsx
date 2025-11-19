import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostScreen() {
  const actions = [
    { label: 'Photo', icon: 'image-outline', color: '#0a66c2' },
    { label: 'Video', icon: 'videocam-outline', color: '#7fc15e' },
    { label: 'Event', icon: 'calendar-outline', color: '#c37d16' },
    { label: 'Write article', icon: 'document-text-outline', color: '#e06847' },
  ];

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ gap: 20 }}>
      <View style={styles.composerCard}>
        <Text style={styles.title}>Share an update</Text>
        <TextInput
          placeholder="What do you want to talk about?"
          placeholderTextColor="#96a0b2"
          multiline
          style={styles.input}
        />
        <View style={styles.actionRow}>
          {actions.map((action) => (
            <TouchableOpacity key={action.label} style={styles.actionButton}>
              <Ionicons name={action.icon as any} size={20} color={action.color} />
              <Text style={[styles.actionText, { color: action.color }]}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.postBtnText}>Post</Text>
        </TouchableOpacity>
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
  composerCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e3e8',
    gap: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2b3d',
  },
  input: {
    minHeight: 120,
    textAlignVertical: 'top',
    fontSize: 15,
    color: '#1f2b3d',
  },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: '#f3f6fb',
  },
  actionText: {
    fontWeight: '600',
  },
  postBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#0a66c2',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 999,
  },
  postBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
});

