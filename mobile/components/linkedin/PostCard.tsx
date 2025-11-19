import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FeedPost } from '@/data/mockData';

type Props = {
  post: FeedPost;
};

export const PostCard = ({ post }: Props) => {
  return (
    <View style={styles.card}>
      {post.context && (
        <View style={styles.contextRow}>
          <Text style={styles.contextText}>{post.context}</Text>
          <Ionicons name="close" size={16} color="#6a7382" />
        </View>
      )}

      <View style={styles.header}>
        <Image source={{ uri: post.actor.logo }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.author}>{post.actor.name}</Text>
          <Text style={styles.subtitle}>{post.actor.subtitle}</Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
        <Pressable style={styles.followButton}>
          <Text style={styles.followText}>{post.actor.isPromoted ? 'Promoted' : 'Follow'}</Text>
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Ionicons name="ellipsis-horizontal" size={20} color="#6a7382" />
        </Pressable>
      </View>

      <Text style={styles.copy}>{post.body}</Text>
      {post.image && <Image source={{ uri: post.image }} style={styles.image} />}

      <View style={styles.meta}>
        <Text style={styles.metaText}>{post.reactions.toLocaleString()} reactions</Text>
        <Text style={styles.metaText}>{post.comments.toLocaleString()} comments</Text>
      </View>

      {post.commentPreview && (
        <View style={styles.commentPreview}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/women/63.jpg' }} style={styles.commentAvatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.commentAuthor}>{post.commentPreview.author}</Text>
            <Text style={styles.commentText}>{post.commentPreview.text}</Text>
            <View style={styles.inlineActions}>
              <Text style={styles.inlineAction}>Like</Text>
              <Text style={styles.dot}>·</Text>
              <Text style={styles.inlineAction}>Reply</Text>
            </View>
          </View>
        </View>
      )}

      <View style={styles.actions}>
        {[
          { icon: 'thumbs-up-outline', label: 'Like' },
          { icon: 'chatbubble-ellipses-outline', label: 'Comment' },
          { icon: 'repeat', label: 'Repost' },
          { icon: 'paper-plane-outline', label: 'Send' },
        ].map((action) => (
          <Pressable key={action.label} style={styles.actionButton}>
            <Ionicons name={action.icon as any} size={18} color="#5c6675" />
            <Text style={styles.actionText}>{action.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 12,
    elevation: 3,
    ...Platform.select({
      web: {
        boxShadow: '0px 6px 10px rgba(10,31,68,0.08)',
      },
      default: {
        shadowColor: '#0a1f44',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
      },
    }),
  },
  contextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contextText: {
    color: '#5c6675',
    fontSize: 13,
  },
  header: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  author: {
    fontWeight: '600',
    fontSize: 16,
    color: '#152538',
  },
  subtitle: {
    fontSize: 13,
    color: '#6a7382',
  },
  time: {
    fontSize: 12,
    color: '#9aa3af',
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#0a66c2',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  followText: {
    color: '#0a66c2',
    fontWeight: '600',
  },
  iconButton: {
    padding: 4,
  },
  copy: {
    fontSize: 14.5,
    lineHeight: 20,
    color: '#2b3848',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 12,
    color: '#6a7382',
  },
  commentPreview: {
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: '#e6e9ef',
    borderRadius: 12,
    padding: 10,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  commentAuthor: {
    fontWeight: '600',
    fontSize: 13,
    color: '#2b3848',
  },
  commentText: {
    color: '#4a5565',
    fontSize: 13,
  },
  inlineActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  inlineAction: {
    color: '#5c6675',
    fontSize: 12,
    fontWeight: '600',
  },
  dot: {
    color: '#5c6675',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#eef1f4',
    paddingTop: 12,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 999,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  actionText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#55657a',
  },
});

