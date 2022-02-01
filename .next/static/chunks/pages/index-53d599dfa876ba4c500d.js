(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var a=n(9448);t.default=void 0;var i=a(n(7294)),r=n(1689),l=n(2441),o=n(5749);const p={};function s(e,t,n,a){if(!e)return;if(!(0,r.isLocalURL)(t))return;e.prefetch(t,n,a).catch((e=>{0}));const i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;p[t+"%"+n+(i?"%"+i:"")]=!0}var m=function(e){const t=!1!==e.prefetch,n=(0,l.useRouter)(),a=n&&n.asPath||"/",{href:m,as:d}=i.default.useMemo((()=>{const[t,n]=(0,r.resolveHref)(a,e.href,!0);return{href:t,as:e.as?(0,r.resolveHref)(a,e.as):n||t}}),[a,e.href,e.as]);let{children:c,replace:u,shallow:f,scroll:h,locale:x}=e;"string"===typeof c&&(c=i.default.createElement("a",null,c));const g=i.Children.only(c),b=g&&"object"===typeof g&&g.ref,[E,y]=(0,o.useIntersection)({rootMargin:"200px"}),k=i.default.useCallback((e=>{E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,i.useEffect)((()=>{const e=y&&t&&(0,r.isLocalURL)(m),a="undefined"!==typeof x?x:n&&n.locale,i=p[m+"%"+d+(a?"%"+a:"")];e&&!i&&s(n,m,d,{locale:a})}),[d,m,y,x,t,n]);const w={ref:k,onClick:e=>{g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,l,o,p){const{nodeName:s}=e.currentTarget;("A"!==s||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[i?"replace":"push"](n,a,{shallow:l,locale:p,scroll:o}))}(e,n,m,d,u,f,h,x)},onMouseEnter:e=>{(0,r.isLocalURL)(m)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(n,m,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){const e="undefined"!==typeof x?x:n&&n.locale,t=n&&n.isLocaleDomain&&(0,r.getDomainLocale)(d,e,n&&n.locales,n&&n.domainLocales);w.href=t||(0,r.addBasePath)((0,r.addLocale)(d,e,n&&n.defaultLocale))}return i.default.cloneElement(g,w)};t.default=m},5749:function(e,t,n){"use strict";t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!r,o=(0,a.useRef)(),[p,s]=(0,a.useState)(!1),m=(0,a.useCallback)((t=>{o.current&&(o.current(),o.current=void 0),n||p||t&&t.tagName&&(o.current=function(e,t,n){const{id:a,observer:i,elements:r}=function(e){const t=e.rootMargin||"";let n=l.get(t);if(n)return n;const a=new Map,i=new IntersectionObserver((e=>{e.forEach((e=>{const t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:a}),n}(n);return r.set(e,t),i.observe(e),function(){r.delete(e),i.unobserve(e),0===r.size&&(i.disconnect(),l.delete(a))}}(t,(e=>e&&s(e)),{rootMargin:e}))}),[n,e,p]);return(0,a.useEffect)((()=>{if(!r&&!p){const e=(0,i.requestIdleCallback)((()=>s(!0)));return()=>(0,i.cancelIdleCallback)(e)}}),[p]),[m,p]};var a=n(7294),i=n(8391);const r="undefined"!==typeof IntersectionObserver;const l=new Map},3682:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ze}});var a=n(7294),i=n(9163);const r=i.default.section`
  display: ${e=>e.grid?"grid":"flex"};
  flex-direction: ${e=>e.row?"row":"column"};
  padding: ${e=>e.nopadding?"0":"32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${e=>e.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.nopadding?"0":"16px 16px 0"} ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`,l=i.default.h2`
  font-weight: 800;
  font-size: ${e=>e.main?"65px":"56px"};
  line-height: ${e=>e.main?"72px":"56px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${e=>e.main?"58px 0 16px":"0"};
  @media ${e=>e.theme.breakpoints.md}{
    font-size: ${e=>e.main?"56px":"48px"};
    line-height: ${e=>e.main?"56px":"48px"};
    margin-bottom: 12px;
    padding: ${e=>e.main?"40px 0 12px":"0"};
  }
  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${e=>e.main?"28px":"32px"};
    line-height: ${e=>e.main?"32px":"40px"};
    margin-bottom: 8px;
    padding: ${e=>e.main?"16px 0 8px":"0"};
    max-width: 100%;
  }
`,o=i.default.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,p=i.default.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${e=>e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
    margin: ${e=>e.divider?"4rem 0":""};
  @media ${e=>e.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`,s=(i.default.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  @media ${e=>e.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`,i.default.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }
  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${e=>e.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`,i.default.div`
  width: ${({alt:e})=>e?"150px":"262px"};
  height: ${({alt:e})=>e?"52px":"64px"};
  border-radius: 50px;
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({alt:e,form:t})=>e||t?"0":"0 0 80px"};
  color: #fff;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({disabled:e})=>e?".5":"1"};
  @media ${e=>e.theme.breakpoints.md} {
    width: ${({alt:e})=>e?"150px":"184px"};
    height: ${({alt:e})=>e?"52px":"48px"};
    font-size: ${({alt:e})=>e?"20px":"16px"};
    margin-bottom: ${({alt:e})=>e?"0":"64px"};
  }
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({alt:e})=>e?"0":"32px"};
  }
`),m=i.default.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({disabled:e})=>e?".5":"1"};
  transition: .4s ease;
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({disabled:e})=>e?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"};
  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }
  @media ${e=>e.theme.breakpoints.md} {
    font-size: ${({alt:e})=>e?"20px":"16px"};
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
  }
`,d=(i.default.div`
  margin-left: ${({large:e})=>e?"24px":"16px"};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${e=>e.theme.breakpoints.md} {
    margin-left: ${({large:e})=>e?"16px":"8px"};
  }
  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: ${({large:e})=>e?"0":"8px"};
  }
`,i.default.div`
  display: flex;  
  height: ${({large:e})=>e?"32px":"24px"};
  @media ${e=>e.theme.breakpoints.md} {
    height: ${({nav:e})=>e?"16px":"24px"};
  }
  @media ${e=>e.theme.breakpoints.sm} {
    height: ${({large:e})=>e?"32px":"16px"};
  }
`,i.default.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;
  @media ${e=>e.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
  @media ${e=>e.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`),c=i.default.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${e=>e.theme.breakpoints.lg} {
    height: 210px;
  }
  @media ${e=>e.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n){
      grid-row:2;
    }
  }
`,u=i.default.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`,f=i.default.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  @media ${e=>e.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`,h=(i.default.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
  @media ${e=>e.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`,i.default.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media ${e=>e.theme.breakpoints.md}{
    line-height: 32px;
    font-size: 20px;
  };
  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`,i.default.div`
  display: flex;
  @media ${e=>e.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`,[{number:20,text:"Open Source Projects"},{number:50,text:"Students"},{number:12,text:"Github Followers"},{number:20,text:"Github Stars"}]);var x=()=>a.createElement(r,null,a.createElement(l,null,"Personal Achievements"),a.createElement(d,null,h.map((e=>a.createElement(c,{key:e},a.createElement(u,null,`${e.number}+`),a.createElement(f,null,e.text))))),a.createElement(p,null));var g=()=>a.createElement("div",null,a.createElement("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{opacity:"0.15"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),a.createElement("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),a.createElement("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})),a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6"},a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_2"}))),a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)"},a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_2"}))),a.createElement("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737"},a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_2"}))),a.createElement("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)"},a.createElement("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_2"}))),a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6"},a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)"},a.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737"},a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)"},a.createElement("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737"},a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_1"}))),a.createElement("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)"},a.createElement("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_1"}))),a.createElement("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737"},a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)"},a.createElement("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7"},a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)"},a.createElement("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto"},a.createElement("mpath",{xlinkHref:"#path_0"}))),a.createElement("defs",null,a.createElement("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),a.createElement("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),a.createElement("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)"},a.createElement("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),a.createElement("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#945DD6"}),a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#945DD6"}),a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#F46737"}),a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#F46737"}),a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#F46737"}),a.createElement("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#13ADC7"}),a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#13ADC7"}),a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#945DD6"}),a.createElement("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})),a.createElement("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#13ADC7"}),a.createElement("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"}))))),b=n(5697),E=n.n(b);const y=({alt:e,form:t,disabled:n,onClick:i,children:r})=>a.createElement(s,{alt:e,form:t,disabled:n},r,a.createElement(m,{alt:e,onClick:i,disabled:n},r));y.propTypes={form:E().node.isRequired},y.propTypes={disabled:E().node.isRequired},y.propTypes={onClick:E().func.isRequired},y.propTypes={alt:E().node.isRequired},y.propTypes={children:E().node.isRequired};var k=y;var w=i.default.div`
  width: 100%;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${e=>e.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;const v=({handleClick:e})=>a.createElement(a.Fragment,null,a.createElement(r,{row:!0,nopadding:!0},a.createElement(w,null,a.createElement(l,{main:!0,center:!0},"Welcome To",a.createElement("br",null),"My Personal Portfolio"),a.createElement(o,null,"I'm a software engineer specializing in building and designing exceptional digital experiences."),a.createElement(k,{onClick:e},"Learn more"))));v.propTypes={handleClick:E().func.isRequired};var $=v;const C=i.default.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`,z=i.default.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${e=>e.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`,F=i.default.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
  }
`,_=i.default.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`,L=i.default.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${e=>e.title?"3rem":"2rem"};
`,M=i.default.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`,D=(i.default.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`,i.default.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${e=>e.theme.breakpoints.sm} {
    padding:.3rem
  }
`),S=i.default.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`,O=i.default.a`
  color:#d4c0c0;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    background: #801414;
  }
`,j=i.default.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`,T=i.default.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`,U=[{title:"To-Do-App",description:'This is a to-do application. This website helps users organize their daily activities. Users can add tasks to the list, edit, and remove completed tasks from the list. Check out the website by clicking on "Code" below.',image:"https://www.linkpicture.com/q/todos.png",tags:["React","JavaScript","CSS3"],source:"https://github.com/Azonkeu/to-do-app/tree/to-do",visit:"https://azonkeu.github.io/to-do-app/",id:0},{title:"Movie Shows",description:"This website shows the most popular movies from an external API and allows users to comment and make reservations. The webapp has 3 user interfaces.",image:"https://www.linkpicture.com/q/mov.png",tags:["JavaScript","HTML5","CSS3","API"],source:"https://github.com/Azonkeu/Final-Javascript-capstone",visit:"https://elated-saha-e87646.netlify.app/",id:1},{title:"Math-Magicians",description:"Math-Magicians is a website for math lovers. Users can do mathematical operations using the calculator.",image:"https://www.linkpicture.com/q/calculat.png",tags:["React","JavaScript","CSS3"],source:"https://github.com/Azonkeu/math-magicians",visit:"https://azonkeu.github.io/math-magicians/",id:2},{title:"Online Tutoring",description:"Speak Fluently is an online platform where students and teachers can meet for language lessons.",image:"https://www.linkpicture.com/q/flu.png",tags:["JavaScript","HTML5","CSS3"],source:"https://github.com/Azonkeu/Speak-Fluently",visit:"https://azonkeu.github.io/Speak-Fluently/",id:3}],R=[{year:2017,text:"Started my journey"},{year:2018,text:"Worked as a Full-stack developer at Skelia"},{year:2019,text:"Worked as a Full-stack developer at VironIT"},{year:2020,text:"Shared my projects with the world"},{year:2021,text:"Worked as a freelancer"}];var A=()=>a.createElement(r,{nopadding:!0,id:"projects"},a.createElement(p,null),a.createElement(l,{main:!0},"Projects"),a.createElement(z,null,U.map((e=>a.createElement(F,{key:e},a.createElement(C,{src:e.image}),a.createElement(_,null,a.createElement(L,{title:!0},e.title),a.createElement(M,null)),a.createElement(D,{className:"card-info"},e.description),a.createElement("div",null,a.createElement(_,{style:{marginTop:"1.5rem",color:"yellow",fontSize:"1.2em"}},"Stack"),a.createElement(j,null,e.tags.map((e=>a.createElement(T,{key:e},e))),";")),a.createElement(S,null,a.createElement(O,{href:e.visit},"Live"),a.createElement(O,{href:e.source},"Source"))))))),B=n(859);i.default.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${e=>e.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${e=>e.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`,i.default.img`
  width: 100%;
`;const H=i.default.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${e=>e.theme.breakpoints.lg}{
    margin: 64px 0;
  }
  @media ${e=>e.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }

  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`,G=i.default.div`
  display: flex;
  flex-direction: column;
  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`,N=i.default.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;
  @media ${e=>e.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`,P=i.default.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  @media ${e=>e.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`,I=i.default.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  @media ${e=>e.theme.breakpoints.md}{
    max-width: 203px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
  }
`;i.default.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${e=>e.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;var q=()=>a.createElement(r,{id:"tech"},a.createElement(p,{divider:!0}),a.createElement(l,null,"Technologies"),a.createElement(o,null,"I've worked with a range a technologies in the web development world. From Back-end To Design"),a.createElement(H,null,a.createElement(I,null,a.createElement("picture",null,a.createElement(B.GR$,{size:"3rem"})),a.createElement(G,null,a.createElement(N,null,"Front-End"),a.createElement(P,null,"Experiece with",a.createElement("br",null),"HTML5",a.createElement("br",null),"CSS3",a.createElement("br",null),"JavaScript",a.createElement("br",null),"React.js",a.createElement("br",null),"Redux",a.createElement("br",null),"Bootstrap",a.createElement("br",null),"Next.js",a.createElement("br",null),"Vue.js"))),a.createElement(I,null,a.createElement("picture",null,a.createElement(B.BwW,{size:"3rem"})),a.createElement(G,null,a.createElement(N,null,"Back-End"),a.createElement(P,null,"Experience with",a.createElement("br",null),"Node and Databases",a.createElement("br",null),"Ruby",a.createElement("br",null),"Rails",a.createElement("br",null),"MySQL"))),a.createElement(I,null,a.createElement("picture",null,a.createElement(B.MSM,{size:"3rem"})),a.createElement(G,null,a.createElement(N,null,"Tools & Methods:"),a.createElement(P,null,"Experience with",a.createElement("br",null),"Git",a.createElement("br",null),"GitHub",a.createElement("br",null),"Heroku",a.createElement("br",null),"Netlify",a.createElement("br",null),"Mobile/Responsive Development",a.createElement("br",null),"RSpec",a.createElement("br",null),"TDD",a.createElement("br",null),"Chrome Dev Tools",a.createElement("br",null),"Figma")))),a.createElement(p,{colorAlt:!0}));const J=i.default.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */
  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }
  margin-bottom: 80px;
  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }
  @media ${e=>e.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`,W=i.default.div`
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({final:e})=>e?"120%;":"min-content"}
  }
`,V=i.default.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;
  @media ${e=>e.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${e=>e.active===(e.index?"opacity: 1":"opacity: 0.5")}; 
  }
`,Z=i.default.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }  
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`,K=i.default.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;
  @media ${e=>e.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`,X=i.default.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`,Y=i.default.div`
  width: 288px;
  display: none;
  visibility: hidden;
  @media ${e=>e.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`,Q=i.default.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${e=>e.active===(e.index?"1":".33")};
  transform: ${e=>e.active===(e.index?"scale(1.6)":"scale(1)")};
  &:focus {
    outline: none;
  }
`,ee=i.default.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`,te=R.length;var ne=()=>{const[e,t]=(0,a.useState)(0),n=(0,a.useRef)(),i=(e,t)=>e.scrollTo({left:t,behavior:"smooth"}),s=(e,t)=>{if(e.preventDefault(),n.current){const e=Math.floor(.7*n.current.scrollWidth*(t/R.length));i(n.current,e)}};return(0,a.useEffect)((()=>{window.addEventListener("resize",(()=>{i(n.current,0)}))}),[]),a.createElement(r,{id:"about"},a.createElement(l,null,"About Me"),a.createElement(o,null,"The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."),a.createElement(J,{ref:n,onScroll:()=>{if(n.current){const e=Math.round(n.current.scrollLeft/(.7*n.current.scrollWidth)*R.length);t(e)}}},a.createElement(a.Fragment,null,R.map(((t,n)=>a.createElement(W,{key:t,final:n===te-1},a.createElement(V,{index:n,id:`carousel__item-${n}`,active:e,onClick:e=>s(e,n)},a.createElement(Z,null,`${t.year}`,a.createElement(K,{width:"208",height:"6",viewBox:"0 0 208 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",fill:"url(#paint0_linear)",fillOpacity:"0.33"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear",x1:"-4.30412e-10",y1:"0.5",x2:"208",y2:"0.500295",gradientUnits:"userSpaceOnUse"},a.createElement("stop",{"stop-Color":"white"}),a.createElement("stop",{offset:"0.79478",stopColor:"white",stopOpacity:"0"}))))),a.createElement(X,null,t.text))))))),a.createElement(Y,null,R.map(((t,n)=>a.createElement(Q,{key:t,index:n,active:e,onClick:e=>s(e,n),type:"button"},a.createElement(ee,{active:e})))),";"),a.createElement(p,null))},ae=n(2821),ie=n(1649);const re=i.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  @media ${e=>e.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`,le=i.default.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`,oe=i.default.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`,pe=i.default.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${e=>e.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`,se=i.default.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`,me=(i.default.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${e=>e.theme.breakpoints.md} {
    padding: 0;
  }
`,(0,i.default)(ie.U0j)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({isOpen:e})=>e?"1":".75"};
  transform: ${({isOpen:e})=>e?"scaleY(-1)":"scaleY(1)"};
  &:hover {
    opacity: 1;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`,i.default.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`),de=i.default.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`,ce=i.default.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: .3s ease;
  position: relative;
  left: 0;
  &:hover {
    color: #fff;
    left: 6px;
  }
  @media ${e=>e.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`,ue=i.default.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  @media ${e=>e.theme.breakpoints.md}{
    display: flex;
    justify-content: space-between;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`,fe=i.default.div`
  display: flex;
  align-items:baseline;
  flex-wrap: wrap;
  margin-right: auto;
  @media ${e=>e.theme.breakpoints.md}{
    flex-direction: column;
    align-items: baseline;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`,he=i.default.p`
  color: rgba(255, 255, 255, 0.5);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
  @media ${e=>e.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }
  @media ${e=>e.theme.breakpoints.sm}{
    line-height: 22px;
    font-size: 14px;
    min-width: 100px;
  }
`,xe=i.default.div`
  display: flex;
  align-items: center;
  @media ${e=>e.theme.breakpoints.md}{
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`,ge=i.default.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  @media ${e=>e.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }
  @media ${e=>e.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`,be=i.default.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`,Ee=i.default.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;var ye=()=>a.createElement(de,null,a.createElement(ge,null,a.createElement(be,null,a.createElement(Ee,null,"Call"),a.createElement(ce,{href:"tel:00237652126440"},"(+237) 652-126440")),a.createElement(be,null,a.createElement(Ee,null,"Email"),a.createElement(ce,{href:"mailto:mazonkeu@gmail.com"},"mazonkeu@gmail.com"))),a.createElement(ue,null,a.createElement(fe,null,a.createElement(he,null,"Let creativity lead!")),a.createElement(xe,null,a.createElement(me,{href:"https://github.com/Azonkeu"},a.createElement(ae.RrF,{size:"3rem"})),a.createElement(me,{href:"https://www.linkedin.com/in/azonkeu-ornela-software-developer/"},a.createElement(ae._iD,{size:"3rem"})),a.createElement(me,{href:"https://www.instagram.com/ornela9238/"},a.createElement(ae.t0C,{size:"3rem"}))))),ke=n(1664);var we=()=>a.createElement(re,null,a.createElement(le,null,a.createElement(ke.default,{href:"/"},a.createElement("a",{href:"/",style:{display:"flex",alignItems:"center",color:"white"}},a.createElement(B.JAz,{size:"3rem"}),a.createElement("span",{style:{fontSize:"1.2em"}},"Azonkeu Ornela")))),a.createElement(oe,null,a.createElement("li",null,a.createElement(ke.default,{href:"#projects"},a.createElement(se,null,"Projects"))),a.createElement("li",null,a.createElement(ke.default,{href:"#tech"},a.createElement(se,null,"Technologies"))),a.createElement("li",null,a.createElement(ke.default,{href:"#about"},a.createElement(se,null,"About")))),a.createElement(pe,null,a.createElement(me,{href:"https://github.com/Azonkeu"},a.createElement(ae.RrF,{size:"3rem"})),a.createElement(me,{href:"https://www.linkedin.com/in/azonkeu-ornela-software-developer/"},a.createElement(ae._iD,{size:"3rem"})),a.createElement(me,{href:"https://www.instagram.com/ornela9238/"},a.createElement(ae.t0C,{size:"3rem"}))));var ve=i.default.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;const $e=({children:e})=>a.createElement(ve,null,a.createElement(we,null),a.createElement("main",null,e),a.createElement(ye,null));$e.propTypes={children:E().instanceOf(Object).isRequired};var Ce=$e;var ze=()=>a.createElement(Ce,null,a.createElement(r,{grid:!0},a.createElement($,null),a.createElement(g,null)),a.createElement(A,null),a.createElement(q,null),a.createElement(ne,null),a.createElement(x,null))},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3682)}])},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var a=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(i),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};function p(e){return e&&e.map((function(e,t){return a.createElement(e.tag,l({key:t},e.attr),p(e.child))}))}function s(e){return function(t){return a.createElement(m,l({attr:l({},e.attr)},t),p(e.child))}}function m(e){var t=function(t){var n,i=e.attr,r=e.size,p=e.title,s=o(e,["attr","size","title"]),m=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),p&&a.createElement("title",null,p),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(i)}}},function(e){e.O(0,[866,921,617,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);