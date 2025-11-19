import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function PostTabButton(props: BottomTabBarButtonProps) {
  const isActive = props.accessibilityState?.selected ?? false;
  
  return (
    <PlatformPressable {...props} style={styles.wrapper}>
      <View style={[styles.iconBox, isActive && styles.iconBoxActive]}>
        <Ionicons name="add" size={28} color="#ffffff" weight="bold" />
      </View>
      <Text style={[styles.label, isActive && styles.labelActive]}>Post</Text>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#bfc8d3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  iconBoxActive: {
    backgroundColor: '#0a66c2',
    shadowOpacity: 0.25,
  },
  label: {
    fontSize: 11,
    color: '#999',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  labelActive: {
    color: '#0a66c2',
  },
});
