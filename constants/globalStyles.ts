import { StyleSheet } from "react-native";

export const defaultBorderRadius = 20;
export const defaultPadding = 20;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: defaultPadding,
  },
  titleContainer: {
    flexDirection: 'row',
    padding: defaultPadding,
    paddingVertical: defaultPadding/2,
    borderRadius: defaultBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  shadowProps: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
    cardContainer: {
    flex: 1,
    padding: defaultPadding,
    borderRadius: defaultBorderRadius,
    marginVertical: defaultPadding
  }
});