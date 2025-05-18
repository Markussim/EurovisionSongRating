import { render } from 'preact';
import { App } from './App';
import './styles/global.css';

const rootElement = document.getElementById('app');

if (rootElement) {
    render(<App />, rootElement);
} else {
    console.error("Root element #app not found in index.html");
}