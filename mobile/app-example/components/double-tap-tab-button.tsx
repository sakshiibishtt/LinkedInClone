import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { useRef } from 'react';

import { eventBus } from '@/utils/eventBus';

type Props = BottomTabBarButtonProps & {
  eventName: string;
};

export function DoubleTapTabButton({ eventName, ...props }: Props) {
  const lastTapRef = useRef(0);

  return (
    <PlatformPressable
      {...props}
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

