"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,r){r.r(t);var n=r(861),a=r(152),c=r(757),s=r.n(c),u=r(871),o=r(791),i=r(748),p=r(184);t.default=function(){var e=(0,u.UO)().movieId,t=(0,o.useState)([]),r=(0,a.Z)(t,2),c=r[0],f=r[1],h=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.t.getMovieCredits(e);case 2:r=t.sent,f(r.cast);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){h()}),[]),(0,p.jsxs)("section",{children:[0===c.length&&(0,p.jsx)("p",{children:" We don't have cast information for the moment"}),(0,p.jsx)("ul",{children:c.map((function(e){var t=e.cast_id,r=e.profile_path,n=e.name,a=e.character;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:n,width:"100"}),(0,p.jsx)("p",{children:n}),(0,p.jsxs)("p",{children:[" Character : ",a]})]},t)}))})]})}},748:function(e,t,r){r.d(t,{t:function(){return o}});var n=r(861),a=r(757),c=r.n(a),s="ea236f9607da5e1c117233fca3100ef0",u="https://api.themoviedb.org/3/",o={getTrendingMovies:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"trending/all/day?api_key=").concat(s));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.status);case 6:return e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),t(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),searchMovieByQueryAndPage:function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(t,"&language=en-US&page=1&include_adult=false&year=2001"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),r(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),r(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),r(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.status);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),r(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=247.35df0f9c.chunk.js.map