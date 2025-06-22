import { AppColors } from '@/constants/Colors';
import { defaultPadding } from '@/constants/globalStyles';
import { StyleSheet, Text, View, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  textColor?: keyof typeof AppColors;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  carded?: boolean;
  label?: string;
  withShadow?: boolean;
};

export function ThemedText({
  style,
  textColor,
  type = 'default',
  carded = false,
  label,
  withShadow = false,
  ...rest
}: ThemedTextProps) {
  const color = AppColors[textColor ?? 'text'];

  return rest.children && (
    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
      {label ? <Text style={{
        // flex: 1,
        color: AppColors.quietText,
        marginRight: defaultPadding,
        fontFamily: 'Outfit',
      }}>{label}</Text> : null}
      <Text
        {...rest}
        style={[
          { color, fontFamily: 'Outfit' },
          type === 'default' ? styles.default : undefined,
          type === 'title' ? styles.title : undefined,
          type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          type === 'link' ? styles.link : undefined,
          style,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    // fontWeight: '600',
  },
  title: {
    fontSize: 25,
    // fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
