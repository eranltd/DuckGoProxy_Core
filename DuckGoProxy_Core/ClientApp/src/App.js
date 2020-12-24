import React from 'react';
// import useViewport from './CustomHooks/useViewport'
import MobileComponent from './components/Mobile/AppMobile'
import DesktopComponent from './components/Desktop/AppDesktop'
import ViewportProvider from './providers/ViewportProvider'
import { useViewport } from './providers/ViewportProvider'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

const mobileBreakPoint = 767

const ResponsiveLayout = ({ breakPoint = 414 }) => {
  const { width } = useViewport();
  return  width < breakPoint ? <MobileComponent /> : <DesktopComponent />;
}

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <ViewportProvider>
          <ResponsiveLayout breakPoint={mobileBreakPoint}/>
      </ViewportProvider>
    </ThemeProvider>
      </>
  );
}
