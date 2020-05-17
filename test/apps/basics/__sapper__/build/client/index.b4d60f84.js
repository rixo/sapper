import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, d as text, f as space, h as claim_element, j as children, k as claim_text, l as detach, B as attr, m as insert, o as append, n as noop } from './chunk.68ae2c07.js';

/* test/apps/basics/src/routes/dirs/foo/index.svelte generated by Svelte v3.6.9 */

function create_fragment(ctx) {
	var h1, t0, t1, a, t2;

	return {
		c() {
			h1 = element("h1");
			t0 = text("foo");
			t1 = space();
			a = element("a");
			t2 = text("bar");
			this.h();
		},

		l(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "foo");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n");

			a = claim_element(nodes, "A", { href: true }, false);
			var a_nodes = children(a);

			t2 = claim_text(a_nodes, "bar");
			a_nodes.forEach(detach);
			this.h();
		},

		h() {
			attr(a, "href", "dirs/bar");
		},

		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, a, anchor);
			append(a, t2);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(a);
			}
		}
	};
}

class Index extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
