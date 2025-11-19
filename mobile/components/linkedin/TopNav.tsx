import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const profilePhoto = require('@/assets/images/sakshib.png');

export const TopNav = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={profilePhoto} style={styles.avatar} />
        <View style={styles.search}>
          <Ionicons name="search" size={18} color="#6a7382" />
          <TextInput placeholder="Search" placeholderTextColor="#6a7382" style={styles.input} />
        </View>
        <TouchableOpacity style={styles.messagingButton}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#1f2b3d" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#eef2f7',
    borderRadius: 24,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1f2b3d',
  },
  messagingButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

