import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import Siema from 'siema';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import Timer from './js/timer';
import './css/styles.css';
import './css/timer.css';

const notyf = new Notyf();
notyf.error('Error message');
notyf.success('Success message');

const mySiema = new Siema({
  selector: '#gallery-1',
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

const timer1 = new Timer({
  element: document.querySelector('#timer-1'),
  initialValue: 4,
  step: 2,
});

const timer2 = new Timer({
  element: document.querySelector('#timer-2'),
  initialValue: 10,
  step: 5,
});

// console.log(basicLightbox);
// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// instance.show();
