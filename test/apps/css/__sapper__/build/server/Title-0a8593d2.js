'use strict';

var __chunk_1 = require('./chunk-87a6c5d2.js');

/* test/apps/css/src/routes/_components/Title.svelte generated by Svelte v3.6.9 */

const css = {
	code: "h1.svelte-yhusah{color:green}",
	map: "{\"version\":3,\"file\":\"Title.svelte\",\"sources\":[\"Title.svelte\"],\"sourcesContent\":[\"<h1>Title</h1>\\n\\n<style>\\n\\th1 {\\n\\t\\tcolor: green;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAGC,EAAE,cAAC,CAAC,AACH,KAAK,CAAE,KAAK,AACb,CAAC\"}"
};

const Title = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);

	return `<h1 class="svelte-yhusah">Title</h1>`;
});

exports.default = Title;
