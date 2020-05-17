import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, d as text, h as claim_element, j as children, k as claim_text, l as detach, m as insert, o as append, B as set_data, n as noop } from './chunk.cf5f63ce.js';

/* test/apps/export/src/routes/boom/[a]/[b].svelte generated by Svelte v3.6.9 */

function create_fragment(ctx) {
	var p, t0, t1, t2;

	return {
		c() {
			p = element("p");
			t0 = text(ctx.a);
			t1 = text("/");
			t2 = text(ctx.b);
		},

		l(nodes) {
			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			t0 = claim_text(p_nodes, ctx.a);
			t1 = claim_text(p_nodes, "/");
			t2 = claim_text(p_nodes, ctx.b);
			p_nodes.forEach(detach);
		},

		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t0);
			append(p, t1);
			append(p, t2);
		},

		p(changed, ctx) {
			if (changed.a) {
				set_data(t0, ctx.a);
			}

			if (changed.b) {
				set_data(t2, ctx.b);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(p);
			}
		}
	};
}

function preload({ params }) {
	return params;
}

function instance($$self, $$props, $$invalidate) {
	let { a, b } = $$props;

	$$self.$set = $$props => {
		if ('a' in $$props) $$invalidate('a', a = $$props.a);
		if ('b' in $$props) $$invalidate('b', b = $$props.b);
	};

	return { a, b };
}

class B extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["a", "b"]);
	}
}

export default B;
export { preload };
