import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import * as NextImage from "next/image";
import theme from 'styles/themes/default';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.mainBg,
      },
      {
        name: 'dark',
        value: theme.colors.lightBg,
      },
    ],
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    )
  }
]
