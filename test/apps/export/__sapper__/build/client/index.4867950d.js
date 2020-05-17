import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, d as text, h as claim_element, j as children, k as claim_text, l as detach, A as attr, m as insert, o as append, B as set_data, f as space, x as empty, n as noop, C as destroy_each } from './chunk.cf5f63ce.js';

/* test/apps/export/src/routes/blog/index.html generated by Svelte v3.6.9 */

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (15:0) {#each posts as post}
function create_each_block(ctx) {
	var p, a, t_value = ctx.post.title, t, a_href_value;

	return {
		c() {
			p = element("p");
			a = element("a");
			t = text(t_value);
			this.h();
		},

		l(nodes) {
			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			a = claim_element(p_nodes, "A", { href: true }, false);
			var a_nodes = children(a);

			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			p_nodes.forEach(detach);
			this.h();
		},

		h() {
			attr(a, "href", a_href_value = "blog/" + ctx.post.slug);
		},

		m(target, anchor) {
			insert(target, p, anchor);
			append(p, a);
			append(a, t);
		},

		p(changed, ctx) {
			if ((changed.posts) && t_value !== (t_value = ctx.post.title)) {
				set_data(t, t_value);
			}

			if ((changed.posts) && a_href_value !== (a_href_value = "blog/" + ctx.post.slug)) {
				attr(a, "href", a_href_value);
			}
		},

		d(detaching) {
			if (detaching) {
				detach(p);
			}
		}
	};
}

function create_fragment(ctx) {
	var h1, t0, t1, each_1_anchor;

	var each_value = ctx.posts;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			h1 = element("h1");
			t0 = text("blog");
			t1 = space();

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},

		l(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "blog");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n\n");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},

		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},

		p(changed, ctx) {
			if (changed.posts) {
				each_value = ctx.posts;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
			}

			destroy_each(each_blocks, detaching);

			if (detaching) {
				detach(each_1_anchor);
			}
		}
	};
}

function preload() {
	return this.fetch('blog.json').then(r => r.json()).then(posts => {
		return { posts };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { posts } = $$props;

	$$self.$set = $$props => {
		if ('posts' in $$props) $$invalidate('posts', posts = $$props.posts);
	};

	return { posts };
}

class Index extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["posts"]);
	}
}

export default Index;
export { preload };
