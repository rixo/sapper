import './chunk.7ccdb5fe.js';
import { s as start, p as prefetchRoutes, a as prefetch, g as goto } from './chunk.2f9c90c3.js';

window.start = () => start({
	target: document.querySelector('#sapper')
});

window.prefetchRoutes = () => prefetchRoutes();
window.prefetch = href => prefetch(href);
window.goto = href => goto(href);
