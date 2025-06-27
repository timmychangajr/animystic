import TabLayout from '@/app/(tabs)/_layout';
import { ThemedTabBarProps } from '@/components/ThemedTabBar';
import { act, renderHook } from '@testing-library/react-native';

describe('TabLayout', () => {
  let mockProps: ThemedTabBarProps = {
    state: {
      key: 'string',
      index: 0,
      routeNames: [],
      routes: [
        { name: 'index', key: 'index_123', params: {} },
        { name: 'details', key: 'details_123', params: undefined }
      ],
    },
    navigation: {
      emit: jest.fn(jest.fn(() => ({ defaultPrevented: false }))),
      navigate: jest.fn()
    },
  }
  test('renders correctly', async () => {
    const { result } = renderHook(() => TabLayout());
    await act(async () => {
      result.current.props['tabBar'](mockProps);
    })
  });
});