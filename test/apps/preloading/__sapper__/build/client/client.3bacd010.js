import './chunk.19600e5a.js';
import { s as start, p as prefetchRoutes, a as prefetch, g as goto } from './chunk.17996ab4.js';

window.start = () => start({
	target: document.querySelector('#sapper')
});

window.prefetchRoutes = () => prefetchRoutes();
window.prefetch = href => prefetch(href);
window.goto = href => goto(href);
