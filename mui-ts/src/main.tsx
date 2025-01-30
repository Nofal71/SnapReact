import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import HOC from './HOC';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HOC>
      <App />
    </HOC>
  </StrictMode>,
);
