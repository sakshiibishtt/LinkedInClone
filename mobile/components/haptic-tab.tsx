import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform, StyleProp, ViewStyle } from 'react-native';

export function HapticTab(props: BottomTabBarButtonProps) {
  const { pointerEvents, style, ...rest } = props;
  const webPointerStyle =
    Platform.OS === 'web' && pointerEvents
      ? ({ pointerEvents } satisfies ViewStyle)
      : null;
  const composedStyle: StyleProp<ViewStyle> = webPointerStyle ? [style, webPointerStyle] : style;

  return (
    <PlatformPressable
      {...rest}
      pointerEvents={Platform.OS === 'web' ? undefined : pointerEvents}
      style={composedStyle}
      onPressIn={(ev) => {
        if (Platform.OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        rest.onPressIn?.(ev);
      }}
    />
  );
}
