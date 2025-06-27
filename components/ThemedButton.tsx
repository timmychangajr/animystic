import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { AppColors } from '@/constants/Colors';
import { defaultPadding, globalStyles } from '@/constants/globalStyles';
import { Octicons } from '@expo/vector-icons';
import { ThemedText, ThemedTextProps } from './ThemedText';

export type ThemedButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
  title?: string;
  textType?: ThemedTextProps['type'];
  backgroundColor?: keyof typeof AppColors;
  withShadow?: boolean;
};

export function ThemedButton({
  style,
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
        styles.buttonContainer,
        withShadow && globalStyles.shadowProps,
        { backgroundColor: AppColors[backgroundColor ?? 'buttonBackground'] },
        style
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

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: 9999,
    gap: defaultPadding / 2,
    paddingHorizontal: defaultPadding,
    paddingVertical: defaultPadding / 2.5,
  }
})
