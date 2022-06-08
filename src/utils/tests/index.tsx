import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes/default';

type CustomRenderProps = Record<string, never> & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: CustomRenderProps = {},
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react';
export { customRender as render };
