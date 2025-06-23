import { ThemedButton } from '@/components/ThemedButton';
import { cleanup, render } from '@testing-library/react-native';

describe('ThemedButton', () => {
  afterEach(cleanup);
  test('renders correctly', async () => {
    const tree = render(<ThemedButton />);
    expect(tree).toMatchSnapshot();
  });
  test('renders with shadow', async () => {
    const tree = render(<ThemedButton withShadow title='Test' />);
    expect(tree).toMatchSnapshot(); 
  })
});