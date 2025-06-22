import { View, type ViewProps } from 'react-native';

import { AppColors } from '@/constants/Colors';
import { globalStyles } from '@/constants/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  isSafeArea?: boolean;
  backgroundColor?: keyof typeof AppColors;
  withShadow?: boolean;
};

export function ThemedView({ style, isSafeArea, backgroundColor, withShadow = false, ...otherProps }: ThemedViewProps) {
  const MainView = isSafeArea ? SafeAreaView : View;
  return (
    <MainView
      {...otherProps}
      style={[
        withShadow && globalStyles.shadowProps,
        {
          backgroundColor: AppColors[backgroundColor ?? 'background']
        }, style
      ]}
    />
  );
}
