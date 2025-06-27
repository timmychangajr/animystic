import { AppColors } from '@/constants/Colors';
import { defaultPadding } from '@/constants/globalStyles';
import { StyleSheet, Text, View, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  textColor?: keyof typeof AppColors;
  type?: 'title' | 'subtitle';
  label?: string;
};

export function ThemedText({
  style,
  textColor,
  type,
  label,
  ...rest
}: ThemedTextProps) {
  const color = AppColors[textColor ?? 'text'];

  return rest.children && (
    <View style={styles.textContainer}>
      {label ? <Text style={{
        color: AppColors.quietText,
        marginRight: defaultPadding,
        fontFamily: 'Outfit',
      }}>{label}</Text> : null}
      <Text
        {...rest}
        style={[
          { color, fontFamily: 'Outfit' },
          styles.default,
          type === 'title' ? styles.title : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          style,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 25,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
  },
});
