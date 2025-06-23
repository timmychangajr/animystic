import HomeScreen from '@/app/(tabs)/index';
import { cleanup, fireEvent, render, renderHook } from '@testing-library/react-native';
import { useRouter } from 'expo-router';

describe('HomeScreen', () => {
  afterEach(cleanup);
  const initSearch = async () => {
    const navigate = renderHook(() => useRouter())
    navigate.result.current.navigate = jest.fn()
    const tree = render(<HomeScreen />);
    const input = tree.getByTestId('search_input');
    const button = tree.getByTestId('search_btn');
    return { tree, input, button }
  }
  test('renders correctly', () => {
    const tree = render(<HomeScreen />);
    expect(tree).toMatchSnapshot();
  });
  test('should display recent search on submission', async () => {
    const { tree, input, button } = await initSearch()
    
    fireEvent.changeText(input, 'sloth');
    fireEvent.press(button);
    
    await tree.findByTestId('recent_view')
    const recentButton = tree.getByTestId('recent_btn');
    fireEvent.press(recentButton);
  });
  test('should display error in placeholder with invalid search', async () => {
    const { tree, input, button } = await initSearch()

    fireEvent.changeText(input, 'pickle');
    fireEvent.press(button);

    await tree.findByPlaceholderText('Try another animal...')
  });
    test('should search animal unavailable data', async () => {
    const { tree, input, button } = await initSearch()

    fireEvent.changeText(input, 'monkey');
    fireEvent.press(button);

    await tree.findByPlaceholderText('Try another animal...')
  });
});