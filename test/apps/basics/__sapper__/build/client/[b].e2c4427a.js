import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, d as text, h as claim_element, j as children, k as claim_text, l as detach, m as insert, o as append, n as noop } from './chunk.68ae2c07.js';

/* test/apps/basics/src/routes/dirs/foo/[b].svelte generated by Svelte v3.6.9 */

function create_fragment(ctx) {
	var h1, t;

	return {
		c() {
			h1 = element("h1");
			t = text("B page");
		},

		l(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t = claim_text(h1_nodes, "B page");
			h1_nodes.forEach(detach);
		},

		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
			}
		}
	};
}

class B extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default B;
