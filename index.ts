// Import stylesheets
import './style.scss';

const border_slider = document.querySelector('.input_range_border_radius');
const height_slider = document.querySelector('.input_range_height');
const width_slider = document.querySelector('.input_range_width');
const root = document.documentElement;

border_slider.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty('--radius', e.target.value + '%');
});

width_slider.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty('--width', e.target.value + 'px');
});

height_slider.addEventListener('input', (e) => {
  //@ts-ignore
  root.style.setProperty('--height', e.target.value + 'px');
});
