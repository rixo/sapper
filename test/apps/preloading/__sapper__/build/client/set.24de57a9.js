import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, q as text, c as claim_element, a as children, j as claim_text, d as detach, f as insert, r as append, D as set_data, n as noop } from './chunk.19600e5a.js';

/* test/apps/preloading/src/routes/preload-values/set.svelte generated by Svelte v3.6.9 */

function create_fragment(ctx) {
	var h1, t_value = ctx.set.has('x'), t;

	return {
		c() {
			h1 = element("h1");
			t = text(t_value);
		},

		l(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t = claim_text(h1_nodes, t_value);
			h1_nodes.forEach(detach);
		},

		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t);
		},

		p(changed, ctx) {
			if ((changed.set) && t_value !== (t_value = ctx.set.has('x'))) {
				set_data(t, t_value);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
			}
		}
	};
}

function preload() {
	return {
		set: new Set(['x'])
	};
}

function instance($$self, $$props, $$invalidate) {
	let { set } = $$props;

	$$self.$set = $$props => {
		if ('set' in $$props) $$invalidate('set', set = $$props.set);
	};

	return { set };
}

class Set_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["set"]);
	}
}

export default Set_1;
export { preload };
