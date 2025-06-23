import RootLayout from '@/app/_layout';
import { render } from '@testing-library/react-native';

jest.mock('expo-router', () => {
  return {
    ...jest.requireActual('expo-router'),
  };
});
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useTheme: jest.fn(() => ({
      colors: {
        background: '#000'
      }
    }))
  };
});
describe('TabLayout', () => {
  test('renders correctly', async () => {
    const tree = render(<RootLayout />);
    expect(tree).toMatchSnapshot()
  });
});