import{r as c,z as x,j as e}from"./index-D7_HOr1t.js";import{S as a}from"./Stack-DO9IVJbs.js";import{e as h,D as u}from"./TextField-CwoY0MJy.js";import{a as o}from"./Button-BbynyYGA.js";import{T as t,L as p}from"./Link-OZgCnuzY.js";import{B as i}from"./Box-B-Rqd-vj.js";import{C as g}from"./Card-CLrPdCz5.js";import"./styled-C7LyEdVO.js";import"./Portal-BsPDGFSW.js";const j=()=>{const[s,n]=c.useState(""),{up:m}=x(),r=m("sm"),l=()=>{console.log("Reset password for:",s)};return e.jsxs(e.Fragment,{children:[e.jsx(a,{spacing:3,children:e.jsx(h,{fullWidth:!0,size:r?"medium":"small",name:"email",label:"Email address",value:s,onChange:d=>n(d.target.value)})}),e.jsx(o,{fullWidth:!0,size:r?"large":"medium",type:"submit",variant:"contained",color:"primary",sx:{mt:3},onClick:l,children:"Send Reset Password Link"}),e.jsx(u,{sx:{my:2},children:e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),e.jsx(t,{textAlign:"center",fontWeight:400,color:"text.primary",variant:"subtitle1",children:"Remembered your Password?"}),e.jsx(o,{component:p,href:"/authentication/login",fullWidth:!0,size:r?"large":"medium",type:"submit",variant:"contained",color:"primary",sx:{mt:3,"&:hover":{color:"common.white"}},children:"Back to Sign-in"})]})},P=()=>e.jsx(i,{sx:{width:1,position:"relative",zIndex:100},children:e.jsx(a,{alignItems:"center",justifyContent:"center",sx:{height:1},children:e.jsx(g,{sx:{p:{xs:3,sm:5},width:1,maxWidth:480},children:e.jsxs(i,{p:1,children:[e.jsx(t,{variant:"h4",fontWeight:"700",children:"Forgot your password?"}),e.jsx(t,{color:"textSecondary",variant:"body1",fontWeight:"400",sx:{mb:2.5,mt:1.5},children:"Please enter the email address associated with your account"}),e.jsx(j,{})]})})})});export{P as default};
