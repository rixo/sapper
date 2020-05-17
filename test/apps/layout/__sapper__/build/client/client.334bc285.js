import './chunk.d4046557.js';
import { s as start, p as prefetchRoutes, a as prefetch, g as goto } from './chunk.e787e967.js';

window.start = () => start({
	target: document.querySelector('#sapper')
});

window.prefetchRoutes = () => prefetchRoutes();
window.prefetch = href => prefetch(href);
window.goto = href => goto(href);
