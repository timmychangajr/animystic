import { Keyboard, StyleSheet, TextInput, TextInputProps } from 'react-native';

import { AppColors } from '@/constants/Colors';
import { defaultPadding, globalStyles } from '@/constants/globalStyles';

export type ThemedInputProps = TextInputProps & {
  isSafeArea?: boolean;
  backgroundColor?: keyof typeof AppColors;
  withShadow?: boolean;
};

export function ThemedInput({ style, isSafeArea, backgroundColor, withShadow = false, ...otherProps }: ThemedInputProps) {
  return (
    <TextInput
      {...otherProps}
      onBlur={Keyboard.dismiss}
      placeholder={otherProps.placeholder || "dot dot dot"}
      cursorColor={AppColors.text}
      placeholderTextColor={AppColors.quietText}
      style={[
        styles.inputContainer,
        withShadow && globalStyles.shadowProps,
        { backgroundColor: AppColors[backgroundColor ?? 'inputBackground'] }, style
      ]}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    fontSize: 18,
    fontFamily: 'Outfit',
    paddingHorizontal: defaultPadding,
    paddingVertical: defaultPadding / 2.5,
    borderRadius: 9999,
    width: '100%',
    color: AppColors.text,
  }
})
