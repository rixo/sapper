import { c as SvelteComponentDev, d as init, b as safe_not_equal, h as element, i as text, j as space, k as claim_element, l as children, m as claim_text, n as detach, o as add_location, p as insert, q as append, r as set_data, a as noop } from './chunk.035fae03.js';

/* src/routes/no-error.svelte generated by Svelte v3.2.2 */

const file = "src/routes/no-error.svelte";

function create_fragment(ctx) {
	var h1, t0_value = ctx.error ? ctx.error.message : 'No error here', t0, t1, a, t2;

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			a = element("a");
			t2 = text("Enhance your calm");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, t0_value);
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\r\n\r\n");

			a = claim_element(nodes, "A", { href: true }, false);
			var a_nodes = children(a);

			t2 = claim_text(a_nodes, "Enhance your calm");
			a_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 4, 0, 43);
			a.href = "enhance-your-calm";
			add_location(a, file, 6, 0, 97);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, a, anchor);
			append(a, t2);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t0_value !== (t0_value = ctx.error ? ctx.error.message : 'No error here')) {
				set_data(t0, t0_value);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(a);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { error } = $$props;

	$$self.$set = $$props => {
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { error };
}

class No_error extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["error"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<No_error> was created without expected prop 'error'");
		}
	}

	get error() {
		throw new Error("<No_error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error("<No_error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default No_error;
