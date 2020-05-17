import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, d as text, f as space, h as claim_element, j as children, k as claim_text, l as detach, A as attr, m as insert, o as append, n as noop } from './chunk.cf5f63ce.js';

/* test/apps/export/src/routes/index.svelte generated by Svelte v3.6.9 */

function create_fragment(ctx) {
	var h1, t0, t1, a0, t2, t3, a1, t4, t5, a2, t6, t7, a3, t8, t9, a4, t10, t11, a5, t12, t13, a6, t14, t15, a7, t16, t17, a8, t18;

	return {
		c() {
			h1 = element("h1");
			t0 = text("Great success!");
			t1 = space();
			a0 = element("a");
			t2 = text("blog");
			t3 = space();
			a1 = element("a");
			t4 = text("empty anchor");
			t5 = space();
			a2 = element("a");
			t6 = text("empty anchor #2");
			t7 = space();
			a3 = element("a");
			t8 = text("empty anchor #3");
			t9 = space();
			a4 = element("a");
			t10 = text("empty anchor #4");
			t11 = space();
			a5 = element("a");
			t12 = text("empty anchor #5");
			t13 = space();
			a6 = element("a");
			t14 = text("empty anchor #6");
			t15 = space();
			a7 = element("a");
			t16 = text("boom");
			t17 = space();
			a8 = element("a");
			t18 = text("pdf file");
			this.h();
		},

		l(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n");

			a0 = claim_element(nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			t2 = claim_text(a0_nodes, "blog");
			a0_nodes.forEach(detach);
			t3 = claim_text(nodes, "\n");

			a1 = claim_element(nodes, "A", { href: true }, false);
			var a1_nodes = children(a1);

			t4 = claim_text(a1_nodes, "empty anchor");
			a1_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n");

			a2 = claim_element(nodes, "A", { href: true }, false);
			var a2_nodes = children(a2);

			t6 = claim_text(a2_nodes, "empty anchor #2");
			a2_nodes.forEach(detach);
			t7 = claim_text(nodes, "\n");

			a3 = claim_element(nodes, "A", { href: true }, false);
			var a3_nodes = children(a3);

			t8 = claim_text(a3_nodes, "empty anchor #3");
			a3_nodes.forEach(detach);
			t9 = claim_text(nodes, "\n");

			a4 = claim_element(nodes, "A", { href: true }, false);
			var a4_nodes = children(a4);

			t10 = claim_text(a4_nodes, "empty anchor #4");
			a4_nodes.forEach(detach);
			t11 = claim_text(nodes, "\n");

			a5 = claim_element(nodes, "A", { href: true }, false);
			var a5_nodes = children(a5);

			t12 = claim_text(a5_nodes, "empty anchor #5");
			a5_nodes.forEach(detach);
			t13 = claim_text(nodes, "\n");

			a6 = claim_element(nodes, "A", {}, false);
			var a6_nodes = children(a6);

			t14 = claim_text(a6_nodes, "empty anchor #6");
			a6_nodes.forEach(detach);
			t15 = claim_text(nodes, "\n");

			a7 = claim_element(nodes, "A", { href: true }, false);
			var a7_nodes = children(a7);

			t16 = claim_text(a7_nodes, "boom");
			a7_nodes.forEach(detach);
			t17 = claim_text(nodes, "\n");

			a8 = claim_element(nodes, "A", { href: true }, false);
			var a8_nodes = children(a8);

			t18 = claim_text(a8_nodes, "pdf file");
			a8_nodes.forEach(detach);
			this.h();
		},

		h() {
			attr(a0, "href", "blog");
			attr(a1, "href", "");
			attr(a2, "href", "");
			attr(a3, "href", "");
			attr(a4, "href", "");
			attr(a5, "href", "");
			attr(a7, "href", "boom");
			attr(a8, "href", "test.pdf");
		},

		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, a0, anchor);
			append(a0, t2);
			insert(target, t3, anchor);
			insert(target, a1, anchor);
			append(a1, t4);
			insert(target, t5, anchor);
			insert(target, a2, anchor);
			append(a2, t6);
			insert(target, t7, anchor);
			insert(target, a3, anchor);
			append(a3, t8);
			insert(target, t9, anchor);
			insert(target, a4, anchor);
			append(a4, t10);
			insert(target, t11, anchor);
			insert(target, a5, anchor);
			append(a5, t12);
			insert(target, t13, anchor);
			insert(target, a6, anchor);
			append(a6, t14);
			insert(target, t15, anchor);
			insert(target, a7, anchor);
			append(a7, t16);
			insert(target, t17, anchor);
			insert(target, a8, anchor);
			append(a8, t18);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(a0);
				detach(t3);
				detach(a1);
				detach(t5);
				detach(a2);
				detach(t7);
				detach(a3);
				detach(t9);
				detach(a4);
				detach(t11);
				detach(a5);
				detach(t13);
				detach(a6);
				detach(t15);
				detach(a7);
				detach(t17);
				detach(a8);
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
