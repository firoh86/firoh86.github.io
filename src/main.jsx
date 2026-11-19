import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './fuentes/fuentes.css';
import './estilos.css';
import { Preferencias } from './preferencias.jsx';
import { App } from './App.jsx';

createRoot(document.getElementById('raiz')).render(<StrictMode><Preferencias><App /></Preferencias></StrictMode>);
