import{a1 as h,a2 as B,r as u,K as N,G as p,b as C,j as T,_,d as y,a as E,a3 as R,T as g,a4 as j}from"./index-DD-TLKb_.js";const M=["className","component"];function P(e={}){const{themeId:s,defaultTheme:o,defaultClassName:n="MuiBox-root",generateClassName:r}=e,l=h("div",{shouldForwardProp:t=>t!=="theme"&&t!=="sx"&&t!=="as"})(B);return u.forwardRef(function(m,x){const a=N(o),c=p(m),{className:i,component:d="div"}=c,f=C(c,M);return T.jsx(l,_({as:d,ref:x,className:y(i,r?r(n):n),theme:s&&a[s]||a},f))})}function b(e,s){typeof e=="function"?e(s):e&&(e.current=s)}function w(...e){return u.useMemo(()=>e.every(s=>s==null)?null:s=>{e.forEach(o=>{b(o,s)})},e)}const F=E("MuiBox",["root"]),I=R(),G=P({themeId:g,defaultTheme:I,defaultClassName:F.root,generateClassName:j.generate});export{G as B,b as s,w as u};
