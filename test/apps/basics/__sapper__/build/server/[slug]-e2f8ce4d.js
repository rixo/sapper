'use strict';

var __chunk_1 = require('./chunk-ca2ab714.js');
var __chunk_3 = require('./chunk-20c8d7b6.js');

/* test/apps/basics/src/routes/[slug].svelte generated by Svelte v3.6.9 */

const Slug = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $page;

	const { page } = __chunk_3.stores$1(); $page = __chunk_1.get_store_value(page);

	$page = __chunk_1.get_store_value(page);

	return `<h1>${__chunk_1.escape($page.params.slug)}</h1>

	<a href="234">regexp route</a>`;
});

exports.default = Slug;
