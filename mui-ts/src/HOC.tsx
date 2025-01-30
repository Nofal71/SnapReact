import React from 'react';
import ThemeConfig from './theme/ThemeConfig';
import { Provider } from 'react-redux';
import { persistor, store } from './config/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import MUI_Alert from './components/ui/Alert';
import AlertDialog from './components/ui/Modal';
import SnackBar from './components/ui/SnackBar';

interface HOCProps {
  children: React.ReactNode; 
}

const HOC: React.FC<HOCProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeConfig>
        <MUI_Alert />
        <AlertDialog />
        <SnackBar />
        {children}
      </ThemeConfig>
    </PersistGate>
  </Provider>
);

export default HOC;
