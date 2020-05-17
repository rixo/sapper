import './chunk.23945acd.js';
import { s as start, p as prefetchRoutes, a as prefetch, g as goto } from './chunk.76a4a249.js';

window.start = () => start({
	target: document.querySelector('#sapper')
});

window.prefetchRoutes = () => prefetchRoutes();
window.prefetch = href => prefetch(href);
window.goto = href => goto(href);
