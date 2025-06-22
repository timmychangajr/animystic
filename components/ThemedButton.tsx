import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { AppColors } from '@/constants/Colors';
import { defaultPadding, globalStyles } from '@/constants/globalStyles';
import { Octicons } from '@expo/vector-icons';
import { ThemedText, ThemedTextProps } from './ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  isSafeArea?: boolean;
  isLoading?: boolean;
  title?: string;
  textType?: ThemedTextProps['type'];
  backgroundColor?: keyof typeof AppColors;
  withShadow?: boolean;
};

export function ThemedButton({
  style,
  isSafeArea,
  backgroundColor,
  withShadow = false,
  isLoading = false,
  textType = 'subtitle',
  title = 'Submit',
  ...otherProps }: ThemedButtonProps) {
  return (
    <TouchableOpacity
      {...otherProps}
      disabled={isLoading}
      style={[
        withShadow && globalStyles.shadowProps,
        {
          backgroundColor: AppColors[backgroundColor ?? 'buttonBackground'],
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          borderRadius: 9999,
          gap: defaultPadding / 2,
          paddingHorizontal: defaultPadding,
          paddingVertical: defaultPadding / 2.5,
        }, style
      ]}
    >
      {isLoading ? <ActivityIndicator size='small' color={AppColors.text} /> :
        <>
          <Octicons name='search' color={AppColors.text} size={20} />
          <ThemedText type={textType}>{title}</ThemedText>
        </>
      }
    </TouchableOpacity>
  );
}
