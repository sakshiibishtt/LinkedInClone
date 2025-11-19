import { Tabs } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Animated, StyleSheet, View, Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { DoubleTapTabButton } from '@/components/double-tap-tab-button';
import { PostTabButton } from '@/components/post-tab-button';
import { eventBus } from '@/utils/eventBus';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const refreshAnim = useRef(new Animated.Value(0)).current;
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const unsubscribe = eventBus.on('network:refresh', () => {
      refreshAnim.setValue(0);
      Animated.timing(refreshAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start(() => refreshAnim.setValue(0));
    });
    return unsubscribe;
  }, [refreshAnim]);

  const networkIcon = ({ color }: { color: string }) => {
    const scale = refreshAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.2],
    });
    return (
      <View style={{ width: 32, alignItems: 'center' }}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Ionicons name="people" size={24} color={color} />
        </Animated.View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0a66c2',
        tabBarInactiveTintColor: isDark ? '#888' : '#999',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          borderTopColor: isDark ? '#333' : '#e5e5e5',
          borderTopWidth: 1,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 8,
          height: Platform.OS === 'ios' ? 84 : 64,
          elevation: 8,
          ...Platform.select({
            web: {
              boxShadow: '0px -2px 8px rgba(0,0,0,0.1)',
            },
            default: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
          }),
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'My Network',
          tabBarIcon: ({ color }) => networkIcon({ color }),
          tabBarButton: (props) => <DoubleTapTabButton eventName="network:refresh" {...props} />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarButton: (props) => <PostTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Ionicons name="notifications" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color }) => <Ionicons name="briefcase" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  refreshBadge: {
    position: 'absolute',
    top: -4,
    right: -6,
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 2,
  },
});
