(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(3),r=n.n(c),s=(n(12),n(4)),i=n(5),u=n(7),d=n(6),h=(n(13),n(0)),l=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={quote:"loading...",author:"loading...",isLoaded:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){var n=Math.floor(103*Math.random()+1);t.setState({quote:e.quotes[n].quote,author:e.quotes[n].author,isLoaded:!0})})),this.handleNewQuote=this.handleNewQuote.bind(this)}},{key:"handleNewQuote",value:function(){this.animate(),this.getRandomQuote()}},{key:"getRandomQuote",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){var n=Math.floor(101*Math.random())+1;t.setState({quote:e.quotes[n].quote,author:e.quotes[n].author,isLoaded:!0})}))}},{key:"animate",value:function(){var t=this.randomGradiant(),e=document.querySelector(".quote-box");e.classList.add("change");var n=setTimeout((function(){document.documentElement.style.setProperty("--main-gradient-color",t),e.classList.remove("change"),clearTimeout(n)}),1e3)}},{key:"randomGradiant",value:function(){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"],e=function(){for(var e="#",n=0;n<6;n++){var a=Math.round(14*Math.random());e+=t[a]}return e};return"linear-gradient(45deg, "+e()+", "+e()+")"}},{key:"render",value:function(){return this.state.isLoaded?Object(h.jsxs)("section",{className:"quote-box",children:[Object(h.jsx)("p",{className:"gradient-text quote-text",id:"text",children:this.state.quote}),Object(h.jsxs)("p",{className:"gradient-text quote-author",id:"author",children:["-",this.state.author," "]}),Object(h.jsxs)("div",{className:"actions",children:[Object(h.jsx)("a",{className:"gradient-bg btn btn-tweet",id:"tweet-quote",type:"button",role:"button",title:"Share on twitter",href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&url=".concat(this.state.quote,"-").concat(this.state.author),arget:"_blank",rel:"noopener"}),Object(h.jsx)("button",{className:"gradient-bg btn btn-next",id:"new-quote",onClick:this.handleNewQuote,children:"Next Quote"})]})]}):Object(h.jsx)("div",{class:"loading",children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsx)("div",{class:"text",children:"loading"}),Object(h.jsx)("div",{class:"ring"})]})})}}]),n}(o.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.2cbb0ea7.chunk.js.map