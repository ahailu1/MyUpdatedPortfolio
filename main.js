(()=>{var t={723:()=>{var t=document.getElementsByClassName("mynav")[0],e=document.getElementsByClassName("mynav__list")[0],o=document.getElementsByClassName("section__homepage__image__container")[0],n=document.getElementsByClassName("section__homepage")[0],s=document.getElementsByClassName("section__homepage__image__container")[0],i=o.getBoundingClientRect().bottom,l=1/parseInt(i);t.classList.remove("toggled"),window.addEventListener("scroll",(function(i){var a=n.getBoundingClientRect().bottom,c=o.getBoundingClientRect().bottom,g=Math.abs(c*l*.85);a<0||(e.classList.remove("toggled"),t.classList.remove("toggled")),c>0?s.setAttribute("style","opacity: ".concat(g)):(s.setAttribute("style","opacity: 1"),t.classList.add("toggled"),e.classList.add("toggled"))})),console.log("hello world")},562:t=>{t.exports={hello:function(){console.log("phaggotssaz");var t=document.getElementsByClassName("project__one__text"),e=window.innerHeight,o=document.getElementsByClassName("project__image"),n=t[0].getBoundingClientRect().top,s=t[0].getBoundingClientRect().height,i=t[1].getBoundingClientRect().top,l=t[1].getBoundingClientRect().height,a=function(t,e,o){var i=(e-t)/o*.45*100;i=i>45?44:i;var l=(e-n)/s;return console.log(l+"my opacity"),[i,l]};console.log(t[1]),console.log(o[1]);var c=a(n,e,s),g=a(i,e,l);n<=e&&window.innerWidth>968&&(o[0].classList.add("instachatter"),o[0].setAttribute("style","left:".concat(c[0],"%;opacity:").concat(c[1],";"))),i<=e&&window.innerWidth>968?o[1].setAttribute("style","left:".concat(g[0],"%;opacity:").concat(g[1],";")):window.innerWidth<967&&o[1].setAttribute("style","")}}}},e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(723);var t=o(562),e=o.n(t),n=window.innerHeight,s=document.getElementsByClassName("about__container")[0],i=(s.getBoundingClientRect(),document.getElementsByClassName("about__container__span")[0]),l=document.getElementsByClassName("section__about__card"),a=document.getElementsByClassName("section__about__card__span"),c=document.getElementsByClassName("section__about__card__information"),g=(document.getElementsByClassName("section__about")[0],document.getElementsByClassName("section__about__container__description")[0]),d=document.getElementsByClassName("technology__language__wrapper")[0],r=0,u=0,m=0,_=0,h=document.getElementsByClassName("technology__language"),y=function(t){var e=t.getBoundingClientRect().height,o=t.getBoundingClientRect().top,s=(n-o)/e*100-10;return s>100?100:s};window.addEventListener("scroll",(function(){var t=l[0].getBoundingClientRect(),o=l[1].getBoundingClientRect(),p=g.getBoundingClientRect().height,B=g.getBoundingClientRect().top,C=y(g);e().hello();var b=s.getBoundingClientRect().top,v=(c[0].children,c[1].children,t.top),w=o.top,R=document.body.getBoundingClientRect().top,E=y(s),L=y(l[0]),N=y(l[0]);b<n&&(R>r?(r=R,i.setAttribute("style",""),s.classList.add("toggled")):s.getBoundingClientRect().top>0&&(r=R,s.classList.remove("toggled"),i.setAttribute("style","height:".concat(E,"%;background-color:#1d1d20; color: white;")))),v<n&&(R>u?(a[0].setAttribute("style","height:0;opacity:0;"),l[0].classList.add("toggled"),u=R):v>0&&(a[0].setAttribute("style","height:".concat(L,"%;background-color:whitesmoke; color: white;")),l[0].classList.remove("toggled"),u=R)),w<n&&(R>m?(a[1].setAttribute("style","height:0;"),m=R,l[1].classList.remove("toggled")):w>0&&(a[1].setAttribute("style","height:".concat(N,"%;background-color:#1d1d20; color: white;")),m=R,l[1].classList.add("toggled"),console.log(l[1].getBoundingClientRect().top+"this tha top"))),B<n&&(console.log([B,d,p]),d.setAttribute("style","height:".concat(C,"%;")),R>_?(g.classList.add("toggled"),d.setAttribute("style","height:0;opacity:0;"),_=R):B>0&&(g.classList.remove("toggled"),d.setAttribute("style","height:".concat(C,"%;")),_=R));var f=document.getElementsByClassName("technology__language__relative"),A=h[0],j=h[1],x=h[2],k=h[3],H=A.getBoundingClientRect().bottom,O=j.getBoundingClientRect().bottom,W=x.getBoundingClientRect().bottom,M=k.getBoundingClientRect().bottom;function P(t,e,o,n){t<window.innerHeight&&t>0?o[e].classList.add(n):t<0?o[e].classList.remove(n):f[e].classList.remove(n)}P(H,0,f,"html"),P(O,1,f,"javascript"),P(W,2,f,"reactjs"),P(M,3,f,"nodejs")}))})()})();