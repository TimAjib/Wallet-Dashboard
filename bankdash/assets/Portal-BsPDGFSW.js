import{r as t,k as l,j as u,A as E}from"./index-D7_HOr1t.js";import{u as d,s as i}from"./Box-B-Rqd-vj.js";function x(o){return typeof o=="function"?o():o}const j=t.forwardRef(function(c,s){const{children:e,container:a,disablePortal:r=!1}=c,[n,f]=t.useState(null),m=d(t.isValidElement(e)?e.ref:null,s);if(l(()=>{r||f(x(a)||document.body)},[a,r]),l(()=>{if(n&&!r)return i(s,n),()=>{i(s,null)}},[s,n,r]),r){if(t.isValidElement(e)){const p={ref:m};return t.cloneElement(e,p)}return u.jsx(t.Fragment,{children:e})}return u.jsx(t.Fragment,{children:n&&E.createPortal(e,n)})});export{j as P};
