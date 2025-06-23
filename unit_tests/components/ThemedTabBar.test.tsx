import { ThemedTabBar, ThemedTabBarProps } from '@/components/ThemedTabBar';
import { cleanup, fireEvent, render } from '@testing-library/react-native';

describe('ThemedTabBar', () => {
  afterEach(cleanup);
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
    const tree = render(<ThemedTabBar {...mockProps} />);
    expect(tree).toMatchSnapshot();
  });
  test('should load index as only tab', async () => {
    const tree = render(<ThemedTabBar {...mockProps} />);
    expect(tree.queryByTestId('tab_index')).toBeTruthy()
    expect(tree.queryByTestId('tab_details')).toBeNull()
  })
  test('should allow navigation to details when params are present', async () => {
    const newMockProps = {
      ...mockProps,
      state: {
        ...mockProps.state,
        routes: [
          { name: 'index', key: 'index_123', params: {} },
          { name: 'details', key: 'details_123', params: {} }
        ],
      }
    }
    const tree = render(<ThemedTabBar {...newMockProps} />);
    const tabButton = tree.getByTestId('tab_details')
    fireEvent.press(tabButton)
  })
});