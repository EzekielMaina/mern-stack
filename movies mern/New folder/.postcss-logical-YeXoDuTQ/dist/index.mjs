import r from"postcss";var t=(t,e)=>{const o="rule"===Object(t.parent).type?t.parent.cloneBefore({raws:{}}).removeAll():r.rule({selector:"&"});return o.selectors=o.selectors.map((r=>`${r}:dir(${e})`)),o};const e=/^border-(block|block-start|block-end|inline|inline-start|inline-end)(-(width|style|color))?$/i;var o=(r,t,o,l)=>{r.cloneBefore({prop:`border-top${r.prop.replace(e,"$2")}`,value:t[0]}),r.cloneBefore({prop:`border-bottom${r.prop.replace(e,"$2")}`,value:t[1]||t[0]}),a(r,l)},l=(r,t,o,l)=>{r.cloneBefore({prop:`border-top${r.prop.replace(e,"$2")}`}),a(r,l)},n=(r,t,o,l)=>{r.cloneBefore({prop:`border-bottom${r.prop.replace(e,"$2")}`}),a(r,l)},i=(r,o,l,n)=>{const i=()=>[r.cloneBefore({prop:`border-left${r.prop.replace(e,"$2")}`,value:o[0]}),r.cloneBefore({prop:`border-right${r.prop.replace(e,"$2")}`,value:o[1]||o[0]})],d=()=>[r.clone({prop:`border-right${r.prop.replace(e,"$2")}`,value:o[0]}),r.clone({prop:`border-left${r.prop.replace(e,"$2")}`,value:o[1]||o[0]})];return 1===o.length||2===o.length&&o[0]===o[1]||"ltr"===l?(i(),void a(r,n)):"rtl"===l?(d(),void a(r,n)):(t(r,"ltr").append(i()),t(r,"rtl").append(d()),void a(r,n))},d=(r,o,l,n)=>{const i=()=>r.cloneBefore({prop:`border-left${r.prop.replace(e,"$2")}`}),d=()=>r.cloneBefore({prop:`border-right${r.prop.replace(e,"$2")}`});return"ltr"===l?(i(),void a(r,n)):"rtl"===l?(d(),void a(r,n)):(t(r,"ltr").append(i()),t(r,"rtl").append(d()),void a(r,n))},p=(r,o,l,n)=>{const i=()=>r.cloneBefore({prop:`border-right${r.prop.replace(e,"$2")}`}),d=()=>r.cloneBefore({prop:`border-left${r.prop.replace(e,"$2")}`});return"ltr"===l?(i(),void a(r,n)):"rtl"===l?(d(),void a(r,n)):(t(r,"ltr").append(i()),t(r,"rtl").append(d()),void a(r,n))};function a(r,t){t||r.remove()}const b=/^(border-)(end-end|end-start|start-end|start-start)(-radius)$/i,c={"end-end":"bottom-right","end-start":"bottom-left","start-end":"top-right","start-start":"top-left"},s={"end-end":"bottom-left","end-start":"bottom-right","start-end":"top-left","start-start":"top-right"};var g=(r,e,o,l)=>"ltr"===o?(f(r),void h(r,l)):"rtl"===o?(u(r),void h(r,l)):(t(r,"ltr").append(f(r)),t(r,"rtl").append(u(r)),void h(r,l));function f(r){return r.cloneBefore({prop:r.prop.replace(b,((r,t,e,o)=>`${t}${c[e]}${o}`))})}function u(r){return r.cloneBefore({prop:r.prop.replace(b,((r,t,e,o)=>`${t}${s[e]}${o}`))})}function h(r,t){t||r.remove()}var v=r=>{const t=r.slice();return 4===t.length&&t[3]===t[1]&&t.pop(),3===t.length&&t[2]===t[0]&&t.pop(),2===t.length&&t[1]===t[0]&&t.pop(),t},m=(r,e,o,l)=>{if("logical"!==e[0])return null;const[,n,i,d,p]=e,a=v([n,p||i||n,d||n,i||n]),b=()=>r.cloneBefore({value:a.join(" ")});if(a.length<4||"ltr"===o)return b(),void k(r,l);const c=v([n,i||n,d||n,p||i||n]),s=()=>r.cloneBefore({value:c.join(" ")});if("rtl"===o)return s(),void k(r,l);t(r,"ltr").append(b()),t(r,"rtl").append(s()),k(r,l)};function k(r,t){t||r.remove()}var $=(r,e,o,l)=>/^inline-start$/i.test(r.value)?"ltr"===o?(B(r),void w(r,l)):"rtl"===o?(y(r),void w(r,l)):(t(r,"ltr").append(B(r)),t(r,"rtl").append(y(r)),void w(r,l)):/^inline-end$/i.test(r.value)?"ltr"===o?(y(r),void w(r,l)):"rtl"===o?(B(r),void w(r,l)):(t(r,"ltr").append(y(r)),t(r,"rtl").append(B(r)),void w(r,l)):void 0;function B(r){return r.cloneBefore({value:"left"})}function y(r){return r.cloneBefore({value:"right"})}function w(r,t){t||r.remove()}var j=(r,e,o,l)=>{if("logical"!==e[0])return r.cloneBefore({prop:"top",value:e[0]}),r.cloneBefore({prop:"right",value:e[1]||e[0]}),r.cloneBefore({prop:"bottom",value:e[2]||e[0]}),r.cloneBefore({prop:"left",value:e[3]||e[1]||e[0]}),void E(r,l);return!e[4]||e[4]===e[2]||"ltr"===o?(z(r,e),void E(r,l)):"rtl"===o?(x(r,e),void E(r,l)):(t(r,"ltr").append(z(r,e)),t(r,"rtl").append(x(r,e)),void E(r,l))};function z(r,t){return[r.cloneBefore({prop:"top",value:t[1]}),r.cloneBefore({prop:"left",value:t[2]||t[1]}),r.cloneBefore({prop:"bottom",value:t[3]||t[1]}),r.cloneBefore({prop:"right",value:t[4]||t[2]||t[1]})]}function x(r,t){return[r.cloneBefore({prop:"top",value:t[1]}),r.cloneBefore({prop:"right",value:t[2]||t[1]}),r.cloneBefore({prop:"bottom",value:t[3]||t[1]}),r.cloneBefore({prop:"left",value:t[4]||t[2]||t[1]})]}function E(r,t){t||r.remove()}var O=(r,t,e,o)=>/^block$/i.test(r.value)?(r.cloneBefore({value:"vertical"}),void A(r,o)):/^inline$/i.test(r.value)?(r.cloneBefore({value:"horizontal"}),void A(r,o)):void 0;function A(r,t){t||r.remove()}var D=/^(inset|margin|padding)(?:-(block|block-start|block-end|inline|inline-start|inline-end|start|end))$/i,P=/^inset-/i,q=(r,t,e)=>r.cloneBefore({prop:`${r.prop.replace(D,"$1")}${t}`.replace(P,""),value:e}),C=(r,t,e,o)=>{q(r,"-top",t[0]),q(r,"-bottom",t[1]||t[0]),K(r,o)},F=(r,t,e,o)=>{r.cloneBefore({prop:r.prop.replace(D,"$1-top").replace(P,"")}),K(r,o)},G=(r,t,e,o)=>{r.cloneBefore({prop:r.prop.replace(D,"$1-bottom").replace(P,"")}),K(r,o)},H=(r,e,o,l)=>{const n=()=>[q(r,"-left",e[0]),q(r,"-right",e[1]||e[0])],i=()=>[q(r,"-right",e[0]),q(r,"-left",e[1]||e[0])];return 1===e.length||2===e.length&&e[0]===e[1]||"ltr"===o?(n(),void K(r,l)):"rtl"===o?(i(),void K(r,l)):(t(r,"ltr").append(n()),t(r,"rtl").append(i()),void K(r,l))},I=(r,e,o,l)=>{const n=()=>q(r,"-left",r.value),i=()=>q(r,"-right",r.value);return"ltr"===o?(n(),void K(r,l)):"rtl"===o?(i(),void K(r,l)):(t(r,"ltr").append(n()),t(r,"rtl").append(i()),void K(r,l))},J=(r,e,o,l)=>{const n=()=>q(r,"-right",r.value),i=()=>q(r,"-left",r.value);return"ltr"===o?(n(),void K(r,l)):"rtl"===o?(i(),void K(r,l)):(t(r,"ltr").append(n()),t(r,"rtl").append(i()),void K(r,l))};function K(r,t){t||r.remove()}var L=/^(min-|max-)?(block|inline)-(size)$/i,M=(r,t,e,o)=>{r.cloneBefore({prop:r.prop.replace(L,((r,t,e)=>`${t||""}${"block"===e?"height":"width"}`))}),o||r.remove()},N=(r,e,o,l)=>/^start$/i.test(r.value)?"ltr"===o?(Q(r),void S(r,l)):"rtl"===o?(R(r),void S(r,l)):(t(r,"ltr").append(Q(r)),t(r,"rtl").append(R(r)),void S(r,l)):/^end$/i.test(r.value)?"ltr"===o?(R(r),void S(r,l)):"rtl"===o?(Q(r),void S(r,l)):(t(r,"ltr").append(R(r)),t(r,"rtl").append(Q(r)),void S(r,l)):void 0;function Q(r){return r.cloneBefore({value:"left"})}function R(r){return r.cloneBefore({value:"right"})}function S(r,t){t||r.remove()}function T(r,t){return U(r,/^\s$/,t)}function U(r,t,e){const o=[];let l="",n=!1,i=0,d=-1;for(;++d<r.length;){const p=r[d];"("===p?i+=1:")"===p?i>0&&(i-=1):0===i&&t.test(p)&&(n=!0),n?(e&&!l.trim()||o.push(e?l.trim():l),e||o.push(p),l="",n=!1):l+=p}return""!==l&&o.push(e?l.trim():l),o}var V=(r,e,o,l)=>{const n=[],i=[];var d,p;return(d=r.value,U(d,/^,$/,p)).forEach((r=>{let t=!1;T(r).forEach(((r,e,o)=>{r in W&&(t=!0,W[r].ltr.forEach((r=>{const t=o.slice();t.splice(e,1,r),n.length&&!/^,$/.test(n[n.length-1])&&n.push(","),n.push(t.join(""))})),W[r].rtl.forEach((r=>{const t=o.slice();t.splice(e,1,r),i.length&&!/^,$/.test(i[i.length-1])&&i.push(","),i.push(t.join(""))})))})),t||(n.push(r),i.push(r))})),n.length&&"ltr"===o?(l&&r.cloneBefore({}),void(r.value=n.join(""))):i.length&&"rtl"===o?(l&&r.cloneBefore({}),void(r.value=i.join(""))):n.join("")!==i.join("")?(t(r,"ltr").append(r.cloneBefore({value:n.join("")})),t(r,"rtl").append(r.cloneBefore({value:i.join("")})),void function(r,t){t||r.remove()}(r,l)):void 0};const W={"block-size":{ltr:["height"],rtl:["height"]},"inline-size":{ltr:["width"],rtl:["width"]},"margin-block-end":{ltr:["margin-bottom"],rtl:["margin-bottom"]},"margin-block-start":{ltr:["margin-top"],rtl:["margin-top"]},"margin-block":{ltr:["margin-top","margin-bottom"],rtl:["margin-top","margin-bottom"]},"margin-inline-end":{ltr:["margin-right"],rtl:["margin-left"]},"margin-inline-start":{ltr:["margin-left"],rtl:["margin-right"]},"margin-inline":{ltr:["margin-left","margin-right"],rtl:["margin-left","margin-right"]},"inset-block-end":{ltr:["bottom"],rtl:["bottom"]},"inset-block-start":{ltr:["top"],rtl:["top"]},"inset-block":{ltr:["top","bottom"],rtl:["top","bottom"]},"inset-inline-end":{ltr:["right"],rtl:["left"]},"inset-inline-start":{ltr:["left"],rtl:["right"]},"inset-inline":{ltr:["left","right"],rtl:["left","right"]},inset:{ltr:["top","right","bottom","left"],rtl:["top","right","bottom","left"]},"padding-block-end":{ltr:["padding-bottom"],rtl:["padding-bottom"]},"padding-block-start":{ltr:["padding-top"],rtl:["padding-top"]},"padding-block":{ltr:["padding-top","padding-bottom"],rtl:["padding-top","padding-bottom"]},"padding-inline-end":{ltr:["padding-right"],rtl:["padding-left"]},"padding-inline-start":{ltr:["padding-left"],rtl:["padding-right"]},"padding-inline":{ltr:["padding-left","padding-right"],rtl:["padding-left","padding-right"]},"border-block-color":{ltr:["border-top-color","border-bottom-color"],rtl:["border-top-color","border-bottom-color"]},"border-block-end-color":{ltr:["border-bottom-color"],rtl:["border-bottom-color"]},"border-block-end-style":{ltr:["border-bottom-style"],rtl:["border-bottom-style"]},"border-block-end-width":{ltr:["border-bottom-width"],rtl:["border-bottom-width"]},"border-block-end":{ltr:["border-bottom"],rtl:["border-bottom"]},"border-block-start-color":{ltr:["border-top-color"],rtl:["border-top-color"]},"border-block-start-style":{ltr:["border-top-style"],rtl:["border-top-style"]},"border-block-start-width":{ltr:["border-top-width"],rtl:["border-top-width"]},"border-block-start":{ltr:["border-top"],rtl:["border-top"]},"border-block-style":{ltr:["border-top-style","border-bottom-style"],rtl:["border-top-style","border-bottom-style"]},"border-block-width":{ltr:["border-top-width","border-bottom-width"],rtl:["border-top-width","border-bottom-width"]},"border-block":{ltr:["border-top","border-bottom"],rtl:["border-top","border-bottom"]},"border-inline-color":{ltr:["border-left-color","border-right-color"],rtl:["border-left-color","border-right-color"]},"border-inline-end-color":{ltr:["border-right-color"],rtl:["border-left-color"]},"border-inline-end-style":{ltr:["border-right-style"],rtl:["border-left-style"]},"border-inline-end-width":{ltr:["border-right-width"],rtl:["border-left-width"]},"border-inline-end":{ltr:["border-right"],rtl:["border-left"]},"border-inline-start-color":{ltr:["border-left-color"],rtl:["border-right-color"]},"border-inline-start-style":{ltr:["border-left-style"],rtl:["border-right-style"]},"border-inline-start-width":{ltr:["border-left-width"],rtl:["border-right-width"]},"border-inline-start":{ltr:["border-left"],rtl:["border-right"]},"border-inline-style":{ltr:["border-left-style","border-right-style"],rtl:["border-left-style","border-right-style"]},"border-inline-width":{ltr:["border-left-width","border-right-width"],rtl:["border-left-width","border-right-width"]},"border-inline":{ltr:["border-left","border-right"],rtl:["border-left","border-right"]},"border-end-end-radius":{ltr:["border-bottom-right-radius"],rtl:["border-bottom-left-radius"]},"border-end-start-radius":{ltr:["border-bottom-left-radius"],rtl:["border-bottom-right-radius"]},"border-start-end-radius":{ltr:["border-top-right-radius"],rtl:["border-top-left-radius"]},"border-start-start-radius":{ltr:["border-top-left-radius"],rtl:["border-top-right-radius"]}};function X(r){let t=r.parent;for(;t;)if("atrule"===t.type){if("keyframes"===t.name)return!0;t=t.parent}else t=t.parent;return!1}function Y(r){r=Object(r);const t=Boolean(r.preserve),e=!t&&"string"==typeof r.dir&&(/^rtl$/i.test(r.dir)?"rtl":"ltr"),a=r=>o=>{if(X(o))return;const l=o.parent,n=T(o.value,!0);r(o,n,e,t),l.nodes.length||l.remove()},b=r=>o=>{if(X(o))return;const l=o.parent,n=[o.value];r(o,n,e,t),l.nodes.length||l.remove()};return{postcssPlugin:"postcss-logical-properties",Declaration:{clear:a($),float:a($),resize:a(O),"text-align":a(N),"block-size":a(M),"max-block-size":a(M),"min-block-size":a(M),"inline-size":a(M),"max-inline-size":a(M),"min-inline-size":a(M),margin:a(m),"margin-inline":a(H),"margin-inline-end":a(J),"margin-inline-start":a(I),"margin-block":a(C),"margin-block-end":a(G),"margin-block-start":a(F),inset:a(j),"inset-inline":a(H),"inset-inline-end":a(J),"inset-inline-start":a(I),"inset-block":a(C),"inset-block-end":a(G),"inset-block-start":a(F),padding:a(m),"padding-inline":a(H),"padding-inline-end":a(J),"padding-inline-start":a(I),"padding-block":a(C),"padding-block-end":a(G),"padding-block-start":a(F),"border-block":b(o),"border-block-color":a(o),"border-block-style":a(o),"border-block-width":a(o),"border-block-end":b(n),"border-block-end-color":a(n),"border-block-end-style":a(n),"border-block-end-width":a(n),"border-block-start":b(l),"border-block-start-color":a(l),"border-block-start-style":a(l),"border-block-start-width":a(l),"border-inline":b(i),"border-inline-color":a(i),"border-inline-style":a(i),"border-inline-width":a(i),"border-inline-end":b(p),"border-inline-end-color":a(p),"border-inline-end-style":a(p),"border-inline-end-width":a(p),"border-inline-start":b(d),"border-inline-start-color":a(d),"border-inline-start-style":a(d),"border-inline-start-width":a(d),"border-end-end-radius":a(g),"border-end-start-radius":a(g),"border-start-end-radius":a(g),"border-start-start-radius":a(g),"border-color":a(m),"border-style":a(m),"border-width":a(m),transition:a(V),"transition-property":a(V)}}}Y.postcss=!0;export{Y as default};