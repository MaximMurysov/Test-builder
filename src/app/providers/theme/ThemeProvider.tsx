import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { themeConfig } from './config';
type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};
