import { AppColors } from '@/constants/Colors';
import { defaultPadding } from '@/constants/globalStyles';
import { Octicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './ThemedView';

interface Route {
  icon: keyof typeof Octicons.glyphMap,
  name: string,
}
export type ThemedTabBarProps = Pick<BottomTabBarProps, 'state' | 'navigation'>;

const routeDetail: Record<string, Route> = {
  index: { name: 'Home', icon: 'home' },
  details: { name: 'Details', icon: 'log' }
}
export function ThemedTabBar({ state, navigation }: ThemedTabBarProps) {
  return (
    <ThemedView style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const showTab = route.name === 'index' || (route.name === 'details' && !!route.params)

        const onPress = () => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return showTab && (
          <TouchableOpacity testID={"tab_" + route.name} key={route.key} style={styles.tabButton} onPress={onPress}>
            <Octicons name={routeDetail[route.name].icon} size={isFocused ? 22 : 20} color={AppColors.icon} />
            <View
              style={[
                styles.indicator,
                isFocused && styles.tabButtonSelected
              ]} />
          </TouchableOpacity>
        )
      })}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: defaultPadding * 3,
  },
  tabButton: {
    borderBottomColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    bottom: -defaultPadding / 2,
    height: 4,
    width: '70%',
    borderRadius: 999,
  },
  tabButtonSelected: {
    backgroundColor: '#fff'
  },
  topBorder: {
    height: 3,
    margin: 'auto',
    width: '70%',
    borderRadius: 10,
    opacity: 0.2,
  },
  separator: {
    height: '100%',
    backgroundColor: 'transparent',
    width: 3,
    borderRadius: 10,
    marginHorizontal: 40,
    opacity: 0.2,
  }
})
