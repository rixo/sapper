import './chunk.68ae2c07.js';
import { s as start, p as prefetchRoutes, a as prefetch, g as goto } from './chunk.ef0dad12.js';

window.start = () => start({
	target: document.querySelector('#sapper')
});

window.prefetchRoutes = () => prefetchRoutes();
window.prefetch = href => prefetch(href);
window.goto = href => goto(href);
