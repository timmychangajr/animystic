import DetailsScreen from '@/app/(tabs)/details';
import { Animal } from '@/services/animal';
import { cleanup, render } from '@testing-library/react-native';
import { useLocalSearchParams } from 'expo-router';

jest.mock('expo-router', () => {
  return {
    ...jest.requireActual('expo-router'),
    useLocalSearchParams: jest.fn(),
  };
});

describe('DetailsScreen', () => {
  afterEach(cleanup);
  const initSearchParams = async (params?: object) => {
    useLocalSearchParams.mockImplementation(() => ({
      fromNav: params ? JSON.stringify(params): 'undefined'
    }))
  }
  test('renders correctly', async () => {
    await initSearchParams()
    const tree = render(<DetailsScreen />);
    expect(tree).toMatchSnapshot();
  });
  test('should load valid details with an image', async () => {
    await initSearchParams({
      name: 'Sloth',
      imageUrl: 'test'
    } as Animal)
    const tree = render(<DetailsScreen />);
    expect(await tree.getByTestId('animal_name')).toBeOnTheScreen()
  })
  test('should load valid details without an image', async () => {
    await initSearchParams({
      name: 'Sloth',
      imageUrl: 'test'
    } as Animal)
    const tree = render(<DetailsScreen />);
    expect(await tree.getByTestId('animal_name')).toBeOnTheScreen()
  })
});