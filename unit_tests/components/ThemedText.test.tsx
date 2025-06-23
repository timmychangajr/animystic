import { ThemedText } from '@/components/ThemedText';
import { cleanup, render } from '@testing-library/react-native';

describe('ThemedText', () => {
  afterEach(cleanup);
  test('renders nothing without text', async () => {
    const tree = render(<ThemedText />);
    expect(tree).toMatchSnapshot();
  });
  test('renders with text', async () => {
    const tree = render(<ThemedText>TEST</ThemedText>);
    expect(tree).toMatchSnapshot(); 
  })
  test('renders with label', async () => {
    const tree = render(<ThemedText label='labeled'>TEST</ThemedText>);
    expect(tree).toMatchSnapshot(); 
  })
  test('renders as title', async () => {
    const tree = render(<ThemedText type='title'>TITLE</ThemedText>);
    expect(tree).toMatchSnapshot(); 
  })
});