(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{162:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(74),o=e.n(i),l=e(10),s=e(2),c=e(3),p=e(75),m=e.n(p);function x(){var t=Object(s.a)(["\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toutline: none;\n\t\tbox-sizing: border-box;\n\t}\n\n\tbody {\n\t\tbackground: #F0F0F5 url(",") no-repeat 70% top;\n\t\t-webkit-font-smoothing: antialiased;\n\t}\n\n\tbody,\n\tinput,\n\tbutton {\n\t\tfont: 16px Roboto, sans-serif;\n\t}\n\n\t#root {\n\t\tmax-width: 960px;\n\t\tmargin: 0 auto;\n\t\tpadding: 40px 20px;\n\t}\n\n\tbutton {\n\t\tcursor: pointer;\n\t}\n"]);return x=function(){return t},t}var d=Object(c.a)(x(),m.a),u=e(14),f=e(48),g=e.n(f),k=e(28),b=e(79),h=e(8),E=e(11),y=e(80),v=e.n(y).a.create({baseURL:"https://api.github.com"}),w=e(81),j=e.n(w);function O(){var t=Object(s.a)(["\n\tposition: fixed;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: rgba(255, 255, 255, 0.2);\n"]);return O=function(){return t},t}var z=c.c.div(O()),S=e(82),D=function(){var t={loop:!0,autoplay:!0,animationData:S,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}};return(r.a.createElement(z,null,r.a.createElement(j.a,{options:t,height:200,width:200})))},A=e(85);function B(){var t=Object(s.a)(["\n\tdisplay: block;\n\tcolor: #c53030;\n\tmargin-top: 8px;\n"]);return B=function(){return t},t}function V(){var t=Object(s.a)(["\n\tmargin-top: 80px;\n\tmax-width: 700px;\n\n\t/* Repository item */\n\ta {\n\t\tbackground: #ffffff;\n\t\tborder-radius: 5px;\n\t\twidth: 100%;\n\t\tpadding: 24px;\n\t\tflex-direction: column;\n\t\ttext-decoration: none;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttransition: 0.2s transform;\n\n\t\t& + a {\n\t\t\tmargin-top: 16px;\n\t\t}\n\n\t\t&:hover {\n\t\t\ttransform: translateX(10px);\n\t\t}\n\n\t\timg {\n\t\t\twidth: 64px;\n\t\t\theight: 64px;\n\t\t\tborder-radius: 50%;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\n\t\tdiv {\n\t\t\tmargin: 0 16px;\n\t\t\tflex: 1;\n\n\t\t\tstrong {\n\t\t\t\tfont-size: 20px;\n\t\t\t\tcolor: #3d3d4d;\n\n\t\t\t\tspan {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #a8a8b3;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t}\n\n\t\tsvg {\n\t\t\tmargin: 16px 0 0 0;\n\t\t\tcolor: #cbcbd6;\n\t\t}\n\t}\n\n\t@media (min-width: 1024px) {\n\t\ta {\n\t\t\tflex-direction: row;\n\n\t\t\timg {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\n\t\t\tsvg {\n\t\t\t\tmargin: 0 0 0 auto;\n\t\t\t}\n\t\t}\n\t}\n"]);return V=function(){return t},t}function C(){var t=Object(s.a)(["\n\t\t\t\tborder-color: #c53030;\n\t\t\t"]);return C=function(){return t},t}function _(){var t=Object(s.a)(["\n\tmargin-top: 40px;\n\tmax-width: 700px;\n\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\n\t& > div {\n\t\tflex-basis: 100%;\n\t\tborder: none;\n\t\tdisplay: flex;\n\n\t\tlabel {\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\tpadding-left: 35px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tcursor: pointer;\n\t\t\tfont-size: 22px;\n\t\t\t-webkit-user-select: none;\n\t\t\t-moz-user-select: none;\n\t\t\t-ms-user-select: none;\n\t\t\tuser-select: none;\n\t\t\tcolor: #3a3a3a;\n\n\t\t\t& + label {\n\t\t\t\tmargin-left: 16px;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tinput {\n\t\t\t\t\t& ~ span {\n\t\t\t\t\t\tbackground-color: #e1e1e1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tinput {\n\t\t\t\tposition: absolute;\n\t\t\t\topacity: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t\theight: 0;\n\t\t\t\twidth: 0;\n\t\t\t}\n\n\t\t\tinput:checked {\n\t\t\t\t& ~ span {\n\t\t\t\t\tbackground-color: #2196f3;\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tspan {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\tleft: 0;\n\t\t\t\theight: 25px;\n\t\t\t\twidth: 25px;\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttransition: 0.2s background-color;\n\t\t\t\t&:after {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tdisplay: none;\n\t\t\t\t\ttop: 9px;\n\t\t\t\t\tleft: 9px;\n\t\t\t\t\twidth: 8px;\n\t\t\t\t\theight: 8px;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tbackground: white;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t& > input {\n\t\tflex: 1;\n\t\theight: 50px;\n\t\tpadding: 0 16px;\n\t\tborder: 2px solid transparent;\n\t\tborder-right: 0;\n\t\tborder-radius: 5px 0 0 5px;\n\t\tcolor: #3a3a3a;\n\n\t\t","\n\n\t\t&::placeholder {\n\t\t\tcolor: #a8a8b3;\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\theight: 70px;\n\t\t\tpadding: 0 24px;\n\t\t}\n\t}\n\n\tbutton {\n\t\tflex: 1;\n\t\tbackground: #2196f3;\n\t\tborder: 0;\n\t\theight: 50px;\n\t\tcolor: #ffffff;\n\t\tfont-weight: bold;\n\t\tborder-radius: 0 5px 5px 0;\n\t\ttransition: 0.2s background-color;\n\t\t&:hover {\n\t\t\tbackground: ",";\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\theight: 70px;\n\t\t\tflex: none;\n\t\t\twidth: 210px;\n\t\t}\n\t}\n"]);return _=function(){return t},t}function G(){var t=Object(s.a)(["\n\tmargin-top: 40px;\n\tfont-size: 36px;\n\tline-height: 44px;\n\tcolor: #3a3a3a;\n"]);return G=function(){return t},t}var T=c.c.h1(G()),F=c.c.form(_(),(function(t){return t.hasError&&Object(c.b)(C())}),Object(A.a)(.2,"#2196f3")),R=c.c.div(V()),L=c.c.span(B()),J=function(){var t=Object(a.useState)("repositories"),n=Object(h.a)(t,2),e=n[0],i=n[1],o=Object(a.useState)(""),s=Object(h.a)(o,2),c=s[0],p=s[1],m=Object(a.useState)({loading:!1,error:""}),x=Object(h.a)(m,2),d=x[0],u=x[1],f=Object(a.useState)([]),y=Object(h.a)(f,2),w=y[0],j=y[1];function O(){return(O=Object(b.a)(g.a.mark((function t(n){var a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c){t.next=4;break}return u(Object(k.a)(Object(k.a)({},d),{},{error:"You must type a ".concat("repositories"===e?"repository":"user"," name to search")})),t.abrupt("return");case 4:return u(Object(k.a)(Object(k.a)({},d),{},{loading:!0})),t.prev=5,t.next=8,v.get("search/".concat(e,"?q=").concat(c));case 8:a=t.sent,r=a.data.items,j(r),p(""),u({loading:!1,error:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),u({loading:!0,error:"Error while searching for: ".concat(c)});case 18:case"end":return t.stop()}}),t,null,[[5,15]])})))).apply(this,arguments)}return(r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null," Explore repositories or users on GitHub: "),r.a.createElement(F,{hasError:!!d.error,onSubmit:function(t){return O.apply(this,arguments)}},r.a.createElement("div",null,r.a.createElement("label",null,"Repositories",r.a.createElement("input",{type:"radio",value:"repositories",id:"repositories",name:"searchType",checked:"repositories"===e,onChange:function(t){return i(t.target.value)}}),r.a.createElement("span",null)),r.a.createElement("label",null,"Users",r.a.createElement("input",{type:"radio",value:"users",id:"users",name:"searchType",checked:"users"===e,onChange:function(t){return i(t.target.value)}}),r.a.createElement("span",null))),r.a.createElement("input",{value:c,placeholder:"Search for ".concat(e.toLocaleLowerCase(),"..."),onChange:function(t){return p(t.target.value)}}),r.a.createElement("button",{type:"submit"}," Search ")),d.error&&r.a.createElement(L,null," ",d.error," "),r.a.createElement(R,null,d.loading?r.a.createElement(D,null):w.map((function(t){return"User"===t.type?r.a.createElement(l.b,{to:"/users/".concat(t.login),key:t.id},r.a.createElement("img",{src:t.avatar_url,alt:t.login}),r.a.createElement("div",null,r.a.createElement("strong",null," ",t.login," ")),r.a.createElement(E.b,{size:20})):r.a.createElement(l.b,{to:"/repositories/".concat(t.full_name),key:t.id},r.a.createElement("div",null,r.a.createElement("strong",null," ",t.name," ",r.a.createElement("span",null," [",t.owner.login,"] ")),r.a.createElement("p",null," ",t.description," ")),r.a.createElement(E.b,{size:20}))})))))};function M(){var t=Object(s.a)(["\n\tmargin-top: 80px;\n\tmax-width: 700px;\n\n\t/* Repository item */\n\ta {\n\t\tbackground: #ffffff;\n\t\tborder-radius: 5px;\n\t\twidth: 100%;\n\t\tpadding: 16px;\n\t\tdisplay: block;\n\t\ttext-decoration: none;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttransition: 0.2s transform;\n\n\t\t& + a {\n\t\t\tmargin-top: 16px;\n\t\t}\n\n\t\t&:hover {\n\t\t\ttransform: translateX(10px);\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tpadding: 24px;\n\t\t}\n\t}\n\n\tdiv {\n\t\tmargin: 0 8px;\n\t\tflex: 1;\n\n\t\tstrong {\n\t\t\tfont-size: 18px;\n\t\t\tcolor: #3d3d4d;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: 16px;\n\t\t\tcolor: #a8a8b3;\n\t\t\tmargin-top: 4px;\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tmargin: 0 16px;\n\n\t\t\tstrong {\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t}\n\t}\n\n\tsvg {\n\t\tmargin-left: auto;\n\t\tcolor: #cbcbd6;\n\t}\n"]);return M=function(){return t},t}function U(){var t=Object(s.a)(["\n\tmargin-top: 80px;\n\n\theader {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 80px;\n\t\t\theight: 80px;\n\t\t\tborder-radius: 50%;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\n\t\tdiv {\n\t\t\tflex: 1;\n\t\t\tstrong {\n\t\t\t\tfont-size: 26px;\n\t\t\t\tcolor: #3d3d4d;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #737380;\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tflex-direction: row;\n\n\t\t\timg {\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 120px;\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\n\t\t\tdiv {\n\t\t\t\tmargin-left: 24px;\n\n\t\t\t\tstrong {\n\t\t\t\t\tfont-size: 36px;\n\t\t\t\t}\n\n\t\t\t\tp {\n\t\t\t\t\tfont-size: 28px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tlist-style: none;\n\t\tmargin-top: 40px;\n\n\t\tli {\n\t\t\t& + li {\n\t\t\t\tmargin-left: 26px;\n\t\t\t}\n\t\t\tstrong {\n\t\t\t\tdisplay: block;\n\t\t\t\tfont-size: 26px;\n\t\t\t\tcolor: #3d3d4d;\n\t\t\t}\n\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\tcolor: #6c6c80;\n\t\t\t}\n\t\t}\n\t\t@media (min-width: 1024px) {\n\t\t\tli {\n\t\t\t\t& + li {\n\t\t\t\t\tmargin-left: 80px;\n\t\t\t\t}\n\t\t\t\tstrong {\n\t\t\t\t\tfont-size: 36px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return U=function(){return t},t}var X=c.c.section(U()),Y=c.c.div(M()),H=function(){var t=Object(u.g)().params,n=Object(a.useState)(null),e=Object(h.a)(n,2),i=e[0],o=e[1],l=Object(a.useState)([]),s=Object(h.a)(l,2),c=s[0],p=s[1];return Object(a.useEffect)((function(){v.get("repos/".concat(t.repository)).then((function(t){o(t.data)})),v.get("repos/".concat(t.repository,"/issues")).then((function(t){p(t.data)}))}),[t.repository]),i&&c?r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,r.a.createElement("header",null,r.a.createElement("img",{src:i.owner.avatar_url,alt:i.owner.avatar_url}),r.a.createElement("div",null,r.a.createElement("strong",null," ",i.full_name," "),r.a.createElement("p",null," ",i.description," "))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null," ",i.stargazers_count," "),r.a.createElement("span",null," stars ")),r.a.createElement("li",null,r.a.createElement("strong",null," ",i.forks_count," "),r.a.createElement("span",null," forks ")),r.a.createElement("li",null,r.a.createElement("strong",null," ",i.open_issues_count," "),r.a.createElement("span",null," open issues ")))),r.a.createElement(Y,null,c.map((function(t){return r.a.createElement("a",{key:t.id,href:t.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("strong",null," ",t.title," "),r.a.createElement("p",null," ",t.user.login," ")),r.a.createElement(E.b,{size:20}))})))):r.a.createElement(D,null)};function q(){var t=Object(s.a)(["\n\tmargin-top: 80px;\n\tmax-width: 700px;\n\n\t/* Repository item */\n\ta {\n\t\tbackground: #ffffff;\n\t\tborder-radius: 5px;\n\t\twidth: 100%;\n\t\tpadding: 16px;\n\t\tdisplay: block;\n\t\ttext-decoration: none;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttransition: 0.2s transform;\n\n\t\t& + a {\n\t\t\tmargin-top: 16px;\n\t\t}\n\n\t\t&:hover {\n\t\t\ttransform: translateX(10px);\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tpadding: 24px;\n\t\t}\n\t}\n\n\tdiv {\n\t\tmargin: 0 8px;\n\t\tflex: 1;\n\n\t\tstrong {\n\t\t\tfont-size: 18px;\n\t\t\tcolor: #3d3d4d;\n\t\t}\n\n\t\tp {\n\t\t\tfont-size: 16px;\n\t\t\tcolor: #a8a8b3;\n\t\t\tmargin-top: 4px;\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tmargin: 0 16px;\n\n\t\t\tstrong {\n\t\t\t\tfont-size: 20px;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\t\t}\n\t}\n\n\tsvg {\n\t\tmargin-left: auto;\n\t\tcolor: #cbcbd6;\n\t}\n"]);return q=function(){return t},t}function I(){var t=Object(s.a)(["\n\tmargin-top: 80px;\n\n\theader {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\n\t\timg {\n\t\t\twidth: 80px;\n\t\t\theight: 80px;\n\t\t\tborder-radius: 50%;\n\t\t\tmargin-bottom: 16px;\n\t\t}\n\n\t\tdiv {\n\t\t\tflex: 1;\n\t\t\tstrong {\n\t\t\t\tfont-size: 26px;\n\t\t\t\tcolor: #3d3d4d;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #737380;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 1024px) {\n\t\t\tflex-direction: row;\n\n\t\t\timg {\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 120px;\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\n\t\t\tdiv {\n\t\t\t\tmargin-left: 24px;\n\n\t\t\t\tstrong {\n\t\t\t\t\tfont-size: 36px;\n\t\t\t\t}\n\n\t\t\t\tp {\n\t\t\t\t\tfont-size: 28px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tul {\n\t\tdisplay: flex;\n\t\tlist-style: none;\n\t\tmargin-top: 40px;\n\n\t\tli {\n\t\t\t& + li {\n\t\t\t\tmargin-left: 26px;\n\t\t\t}\n\t\t\tstrong {\n\t\t\t\tdisplay: block;\n\t\t\t\tfont-size: 26px;\n\t\t\t\tcolor: #3d3d4d;\n\t\t\t}\n\n\t\t\tspan {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-top: 4px;\n\t\t\t\tcolor: #6c6c80;\n\t\t\t}\n\t\t}\n\t\t@media (min-width: 1024px) {\n\t\t\tli {\n\t\t\t\t& + li {\n\t\t\t\t\tmargin-left: 80px;\n\t\t\t\t}\n\t\t\t\tstrong {\n\t\t\t\t\tfont-size: 36px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return I=function(){return t},t}var N=c.c.section(I()),K=c.c.div(q()),P=function(){var t=Object(u.g)().params,n=Object(a.useState)(null),e=Object(h.a)(n,2),i=e[0],o=e[1],l=Object(a.useState)([]),s=Object(h.a)(l,2),c=s[0],p=s[1];return Object(a.useEffect)((function(){v.get("users/".concat(t.user)).then((function(t){o(t.data)})),v.get("users/".concat(t.user,"/repos")).then((function(t){p(t.data)}))}),[t.user]),i&&c?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement("header",null,r.a.createElement("img",{src:i.avatar_url,alt:i.name}),r.a.createElement("div",null,r.a.createElement("strong",null,i.name," ",r.a.createElement("span",null," ",i.login," ")),r.a.createElement("p",null,i.location))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null," ",i.followers," "),r.a.createElement("span",null," followers ")),r.a.createElement("li",null,r.a.createElement("strong",null," ",i.following," "),r.a.createElement("span",null," following ")),r.a.createElement("li",null,r.a.createElement("strong",null," ",i.public_repos," "),r.a.createElement("span",null," public repos ")))),r.a.createElement(K,null,c.map((function(t){return r.a.createElement("a",{key:t.id,href:t.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("strong",null," ",t.name," "),r.a.createElement("p",null," ",t.description," ")),r.a.createElement(E.b,{size:20}))})))):r.a.createElement(D,null)},Q=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:J}),r.a.createElement(u.a,{path:"/repositories/:repository+",component:H}),r.a.createElement(u.a,{path:"/users/:user",component:P}))},W=e(84),Z=e.n(W);function $(){var t=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\n\ta {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\ttext-decoration: none;\n\t\tcolor: #a8a8b3;\n\t\ttransition: 0.2s color;\n\n\t\t&:hover {\n\t\t\tcolor: #666666;\n\t\t}\n\n\t\tsvg {\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n"]);return $=function(){return t},t}var tt=c.c.header($()),nt=function(){var t=Object(u.f)().pathname;return(r.a.createElement(tt,null,r.a.createElement("img",{src:Z.a,alt:"GitHub Explorer"}),"/"!==t&&r.a.createElement(l.b,{to:"/"},r.a.createElement(E.a,{size:16}),"Voltar")))},et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(l.a,{basename:"/github_explorer"},r.a.createElement(nt,null),r.a.createElement(Q,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(et,null)),document.getElementById("root"))},75:function(t,n,e){t.exports=e.p+"static/media/github_bg.0b819d63.svg"},82:function(t){t.exports=JSON.parse('{"v":"5.5.3","fr":25,"ip":0,"op":75,"w":250,"h":250,"nm":"Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Camada de forma 6","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":75,"s":[100]},{"t":88,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":63,"s":[50,50,100]},{"t":88,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":63,"op":263,"st":63,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Camada de forma 5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":51,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":63,"s":[100]},{"t":76,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":51,"s":[50,50,100]},{"t":76,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":51,"op":251,"st":51,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Camada de forma 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":48,"s":[100]},{"t":61,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":36,"s":[50,50,100]},{"t":61,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":36,"op":236,"st":36,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Camada de forma 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":36,"s":[100]},{"t":49,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":24,"s":[50,50,100]},{"t":49,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":24,"op":224,"st":24,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Camada de forma 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":24,"s":[100]},{"t":37,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[126,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":12,"s":[50,50,100]},{"t":37,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":12,"op":212,"st":12,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Camada de forma 7","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":12,"s":[100]},{"t":25,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[50,50,100]},{"t":25,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":200,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Camada de forma 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-12,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":13,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[-7.687,4.313,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":-12,"s":[50,50,100]},{"t":13,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[115.627,115.627],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Caminho da elipse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.23921568627450981,0.23921568627450981,0.30196078431372547,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Tra\xe7ado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.687,4.313],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Elipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-12,"op":188,"st":-12,"bm":0}],"markers":[]}')},84:function(t,n,e){t.exports=e.p+"static/media/logo.04f6798f.svg"},86:function(t,n,e){t.exports=e(162)}},[[86,1,2]]]);
//# sourceMappingURL=main.c0f7479f.chunk.js.map