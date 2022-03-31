// Import stylesheets
import './style.scss';

const slider = document.querySelector('.input_range');
const root = document.documentElement;

slider.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty('--radius', e.target.value + '%');
});
