import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import { useRef } from 'react';

import { eventBus } from '@/utils/eventBus';

type Props = BottomTabBarButtonProps & {
  eventName: string;
};

export function DoubleTapTabButton({ eventName, style, pointerEvents, ...props }: Props) {
  const lastTapRef = useRef(0);
  const webPointerStyle =
    Platform.OS === 'web' && pointerEvents
      ? ({ pointerEvents } satisfies ViewStyle)
      : null;
  const composedStyle: StyleProp<ViewStyle> = webPointerStyle ? [style, webPointerStyle] : style;

  return (
    <PlatformPressable
      {...props}
      pointerEvents={Platform.OS === 'web' ? undefined : pointerEvents}
      style={composedStyle}
      onPress={(ev) => {
        const now = Date.now();
        if (now - lastTapRef.current < 350) {
          eventBus.emit(eventName);
        }
        lastTapRef.current = now;
        props.onPress?.(ev);
      }}
      onPressIn={(ev) => {
        if (Platform.OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}

