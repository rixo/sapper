'use strict';

var __chunk_1 = require('./chunk-ca2ab714.js');
var __chunk_3 = require('./chunk-20c8d7b6.js');

/* test/apps/basics/src/routes/store/result.svelte generated by Svelte v3.6.9 */

const Result = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	const { session } = __chunk_3.stores$1();
	let call_count = 0;

	__chunk_1.onMount(() => {
		call_count = __chunk_1.get_store_value(session);
	});

	return `<h1>Result</h1>
	<h2>Called ${__chunk_1.escape(call_count)} time</h2>`;
});

exports.default = Result;
