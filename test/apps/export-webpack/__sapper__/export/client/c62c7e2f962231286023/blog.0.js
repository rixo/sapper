(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",function(){return b});var o=c(0);function s(t,e,c){const o=Object.create(t);return o.post=e[c],o}function n(t){var e,c,s,n,r=t.post.title;return{c(){e=Object(o.n)("p"),c=Object(o.n)("a"),s=Object(o.E)(r),this.h()},l(t){e=Object(o.h)(t,"P",{},!1);var n=Object(o.g)(e);c=Object(o.h)(n,"A",{href:!0},!1);var b=Object(o.g)(c);s=Object(o.i)(b,r),b.forEach(o.m),n.forEach(o.m),this.h()},h(){Object(o.e)(c,"href",n="blog/"+t.post.slug)},m(t,n){Object(o.v)(t,e,n),Object(o.c)(e,c),Object(o.c)(c,s)},p(t,e){t.posts&&r!==(r=e.post.title)&&Object(o.C)(s,r),t.posts&&n!==(n="blog/"+e.post.slug)&&Object(o.e)(c,"href",n)},d(t){t&&Object(o.m)(e)}}}function r(t){for(var e,c,r,b,j=t.posts,O=[],h=0;h<j.length;h+=1)O[h]=n(s(t,j,h));return{c(){e=Object(o.n)("h1"),c=Object(o.E)("blog"),r=Object(o.D)();for(var t=0;t<O.length;t+=1)O[t].c();b=Object(o.o)()},l(t){e=Object(o.h)(t,"H1",{},!1);var s=Object(o.g)(e);c=Object(o.i)(s,"blog"),s.forEach(o.m),r=Object(o.i)(t,"\n\n");for(var n=0;n<O.length;n+=1)O[n].l(t);b=Object(o.o)()},m(t,s){Object(o.v)(t,e,s),Object(o.c)(e,c),Object(o.v)(t,r,s);for(var n=0;n<O.length;n+=1)O[n].m(t,s);Object(o.v)(t,b,s)},p(t,e){if(t.posts){j=e.posts;for(var c=0;c<j.length;c+=1){const o=s(e,j,c);O[c]?O[c].p(t,o):(O[c]=n(o),O[c].c(),O[c].m(b.parentNode,b))}for(;c<O.length;c+=1)O[c].d(1);O.length=j.length}},i:o.y,o:o.y,d(t){t&&(Object(o.m)(e),Object(o.m)(r)),Object(o.l)(O,t),t&&Object(o.m)(b)}}}function b(){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function j(t,e,c){let{posts:o}=e;return t.$set=t=>{"posts"in t&&c("posts",o=t.posts)},{posts:o}}e.default=class extends o.a{constructor(t){super(),Object(o.u)(this,t,j,r,o.A,["posts"])}}}}]);
//# sourceMappingURL=blog.0.js.map