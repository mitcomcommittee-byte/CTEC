import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { LogoProvider } from './context/LogoContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <LogoProvider>
    <App />
  </LogoProvider>
);
