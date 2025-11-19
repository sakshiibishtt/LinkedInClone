import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { View, Text, StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function PostTabButton({ style, pointerEvents, ...props }: BottomTabBarButtonProps) {
  const isActive = props.accessibilityState?.selected ?? false;
  const webPointerStyle =
    Platform.OS === 'web' && pointerEvents
      ? ({ pointerEvents } satisfies ViewStyle)
      : null;
  const composedStyle: StyleProp<ViewStyle> = webPointerStyle ? [style, webPointerStyle] : style;
  
  return (
    <PlatformPressable
      {...props}
      pointerEvents={Platform.OS === 'web' ? undefined : pointerEvents}
      style={[styles.wrapper, composedStyle]}>
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
    elevation: 4,
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
    }),
  },
  iconBoxActive: {
    backgroundColor: '#0a66c2',
    ...Platform.select({
      web: {
        boxShadow: '0px 4px 12px rgba(10,102,194,0.35)',
      },
      default: {
        shadowOpacity: 0.25,
      },
    }),
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
