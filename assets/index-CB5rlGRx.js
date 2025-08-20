(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="157",Ua={ROTATE:0,DOLLY:1,PAN:2},Fa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gg=0,hd=1,kg=2,mm=1,zg=2,cr=3,Dr=0,gi=1,fr=2,Cr=0,fs=1,dd=2,pd=3,md=4,Hg=5,rs=100,Vg=101,Wg=102,_d=103,vd=104,Xg=200,Yg=201,jg=202,qg=203,_m=204,vm=205,$g=206,Zg=207,Kg=208,Jg=209,Qg=210,e0=0,t0=1,n0=2,zu=3,i0=4,r0=5,a0=6,s0=7,gm=0,o0=1,l0=2,Lr=0,c0=1,u0=2,f0=3,h0=4,d0=5,ym=300,ps=301,ms=302,Hu=303,Vu=304,$l=306,Wu=1e3,ki=1001,ia=1002,ai=1003,gd=1004,eu=1005,Si=1006,p0=1007,po=1008,Pr=1009,m0=1010,_0=1011,sf=1012,xm=1013,wr=1014,Rr=1015,mo=1016,bm=1017,Sm=1018,ra=1020,v0=1021,zi=1023,g0=1024,y0=1025,aa=1026,_s=1027,x0=1028,Em=1029,b0=1030,Mm=1031,Tm=1033,tu=33776,nu=33777,iu=33778,ru=33779,yd=35840,xd=35841,bd=35842,Sd=35843,S0=36196,Ed=37492,Md=37496,Td=37808,Ad=37809,wd=37810,Rd=37811,Cd=37812,Ld=37813,Pd=37814,Dd=37815,Od=37816,Nd=37817,Id=37818,Ud=37819,Fd=37820,Bd=37821,au=36492,Gd=36494,kd=36495,E0=36283,zd=36284,Hd=36285,Vd=36286,Am=3e3,sa=3001,M0=3200,T0=3201,wm=0,A0=1,Di="",ti="srgb",pr="srgb-linear",of="display-p3",Zl="display-p3-linear",Bl="linear",xn="srgb",Gl="rec709",kl="p3",su=7680,w0=519,R0=512,C0=513,L0=514,P0=515,D0=516,O0=517,N0=518,I0=519,Xu=35044,Wd="300 es",Yu=1035,dr=2e3,zl=2001;class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xd=1234567;const io=Math.PI/180,_o=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function Kn(i,e,t){return Math.max(e,Math.min(t,i))}function lf(i,e){return(i%e+e)%e}function U0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function F0(i,e,t){return i!==e?(t-i)/(e-i):0}function ro(i,e,t){return(1-t)*i+t*e}function B0(i,e,t,n){return ro(i,e,1-Math.exp(-t*n))}function G0(i,e=1){return e-Math.abs(lf(i,e*2)-e)}function k0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function H0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function V0(i,e){return i+Math.random()*(e-i)}function W0(i){return i*(.5-Math.random())}function X0(i){i!==void 0&&(Xd=i);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y0(i){return i*io}function j0(i){return i*_o}function ju(i){return(i&i-1)===0&&i!==0}function q0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,e,t,n,r){const s=Math.cos,l=Math.sin,o=s(t/2),c=l(t/2),u=s((e+n)/2),f=l((e+n)/2),h=s((e-n)/2),d=l((e-n)/2),v=s((n-e)/2),y=l((n-e)/2);switch(r){case"XYX":i.set(o*f,c*h,c*d,o*u);break;case"YZY":i.set(c*d,o*f,c*h,o*u);break;case"ZXZ":i.set(c*h,c*d,o*f,o*u);break;case"XZX":i.set(o*f,c*y,c*v,o*u);break;case"YXY":i.set(c*v,o*f,c*y,o*u);break;case"ZYZ":i.set(c*y,c*v,o*f,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rm={DEG2RAD:io,RAD2DEG:_o,generateUUID:Ji,clamp:Kn,euclideanModulo:lf,mapLinear:U0,inverseLerp:F0,lerp:ro,damp:B0,pingpong:G0,smoothstep:k0,smootherstep:z0,randInt:H0,randFloat:V0,randFloatSpread:W0,seededRandom:X0,degToRad:Y0,radToDeg:j0,isPowerOfTwo:ju,ceilPowerOfTwo:q0,floorPowerOfTwo:Hl,setQuaternionFromProperEuler:$0,normalize:mn,denormalize:Zi};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*r+e.x,this.y=s*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e,t,n,r,s,l,o,c,u){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,o,c,u)}set(e,t,n,r,s,l,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=l,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],o=n[3],c=n[6],u=n[1],f=n[4],h=n[7],d=n[2],v=n[5],y=n[8],S=r[0],g=r[3],_=r[6],D=r[1],E=r[4],B=r[7],H=r[2],te=r[5],X=r[8];return s[0]=l*S+o*D+c*H,s[3]=l*g+o*E+c*te,s[6]=l*_+o*B+c*X,s[1]=u*S+f*D+h*H,s[4]=u*g+f*E+h*te,s[7]=u*_+f*B+h*X,s[2]=d*S+v*D+y*H,s[5]=d*g+v*E+y*te,s[8]=d*_+v*B+y*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return t*l*f-t*o*u-n*s*f+n*o*c+r*s*u-r*l*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=f*l-o*u,d=o*c-f*s,v=u*s-l*c,y=t*h+n*d+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*u-f*n)*S,e[2]=(o*n-r*l)*S,e[3]=d*S,e[4]=(f*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=v*S,e[7]=(n*c-u*t)*S,e[8]=(l*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,l,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*l+u*o)+l+e,-r*u,r*c,-r*(-u*l+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new cn;function Cm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Z0(){const i=vo("canvas");return i.style.display="block",i}const Yd={};function ao(i){i in Yd||(Yd[i]=!0,console.warn(i))}const jd=new cn().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qd=new cn().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[pr]:{transfer:Bl,primaries:Gl,toReference:i=>i,fromReference:i=>i},[ti]:{transfer:xn,primaries:Gl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Zl]:{transfer:Bl,primaries:kl,toReference:i=>i.applyMatrix3(qd),fromReference:i=>i.applyMatrix3(jd)},[of]:{transfer:xn,primaries:kl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qd),fromReference:i=>i.applyMatrix3(jd).convertLinearToSRGB()}},K0=new Set([pr,Zl]),_n={enabled:!0,_workingColorSpace:pr,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!K0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=nl[e].toReference,r=nl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return nl[i].primaries},getTransfer:function(i){return i===Di?Bl:nl[i].transfer}};function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ba;class Lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ba===void 0&&(Ba=vo("canvas")),Ba.width=e.width,Ba.height=e.height;const n=Ba.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ba}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=hs(s[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J0=0;class Pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,o=r.length;l<o;l++)r[l].isDataTexture?s.push(cu(r[l].image)):s.push(cu(r[l]))}else s=cu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;class pi extends ha{constructor(e=pi.DEFAULT_IMAGE,t=pi.DEFAULT_MAPPING,n=ki,r=ki,s=Si,l=po,o=zi,c=Pr,u=pi.DEFAULT_ANISOTROPY,f=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Ji(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===sa?ti:Di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wu:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wu:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ti?sa:Am}set encoding(e){ao("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sa?ti:Di}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=ym;pi.DEFAULT_ANISOTROPY=1;class ni{constructor(e=0,t=0,n=0,r=1){ni.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],d=c[1],v=c[5],y=c[9],S=c[2],g=c[6],_=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(y+g)<.1&&Math.abs(u+v+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,B=(v+1)/2,H=(_+1)/2,te=(f+d)/4,X=(h+S)/4,Le=(y+g)/4;return E>B&&E>H?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=te/n,s=X/n):B>H?B<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(B),n=te/r,s=Le/r):H<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),n=X/s,r=Le/s),this.set(n,r,s,t),this}let D=Math.sqrt((g-y)*(g-y)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(D)<.001&&(D=1),this.x=(g-y)/D,this.y=(h-S)/D,this.z=(d-f)/D,this.w=Math.acos((u+v+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ey extends ha{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ni(0,0,e,t),this.scissorTest=!1,this.viewport=new ni(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ao("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sa?ti:Di),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends ey{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dm extends pi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ty extends pi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,l,o){let c=n[r+0],u=n[r+1],f=n[r+2],h=n[r+3];const d=s[l+0],v=s[l+1],y=s[l+2],S=s[l+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=v,e[t+2]=y,e[t+3]=S;return}if(h!==S||c!==d||u!==v||f!==y){let g=1-o;const _=c*d+u*v+f*y+h*S,D=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const H=Math.sqrt(E),te=Math.atan2(H,_*D);g=Math.sin(g*te)/H,o=Math.sin(o*te)/H}const B=o*D;if(c=c*g+d*B,u=u*g+v*B,f=f*g+y*B,h=h*g+S*B,g===1-o){const H=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=H,u*=H,f*=H,h*=H}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,l){const o=n[r],c=n[r+1],u=n[r+2],f=n[r+3],h=s[l],d=s[l+1],v=s[l+2],y=s[l+3];return e[t]=o*y+f*h+c*v-u*d,e[t+1]=c*y+f*d+u*h-o*v,e[t+2]=u*y+f*v+o*d-c*h,e[t+3]=f*y-o*h-c*d-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,l=e._order,o=Math.cos,c=Math.sin,u=o(n/2),f=o(r/2),h=o(s/2),d=c(n/2),v=c(r/2),y=c(s/2);switch(l){case"XYZ":this._x=d*f*h+u*v*y,this._y=u*v*h-d*f*y,this._z=u*f*y+d*v*h,this._w=u*f*h-d*v*y;break;case"YXZ":this._x=d*f*h+u*v*y,this._y=u*v*h-d*f*y,this._z=u*f*y-d*v*h,this._w=u*f*h+d*v*y;break;case"ZXY":this._x=d*f*h-u*v*y,this._y=u*v*h+d*f*y,this._z=u*f*y+d*v*h,this._w=u*f*h-d*v*y;break;case"ZYX":this._x=d*f*h-u*v*y,this._y=u*v*h+d*f*y,this._z=u*f*y-d*v*h,this._w=u*f*h+d*v*y;break;case"YZX":this._x=d*f*h+u*v*y,this._y=u*v*h+d*f*y,this._z=u*f*y-d*v*h,this._w=u*f*h-d*v*y;break;case"XZY":this._x=d*f*h-u*v*y,this._y=u*v*h-d*f*y,this._z=u*f*y+d*v*h,this._w=u*f*h+d*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],l=t[1],o=t[5],c=t[9],u=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(f-c)*v,this._y=(s-u)*v,this._z=(l-r)*v}else if(n>o&&n>h){const v=2*Math.sqrt(1+n-o-h);this._w=(f-c)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(s+u)/v}else if(o>h){const v=2*Math.sqrt(1+o-n-h);this._w=(s-u)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(c+f)/v}else{const v=2*Math.sqrt(1+h-n-o);this._w=(l-r)/v,this._x=(s+u)/v,this._y=(c+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,l=e._w,o=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+l*o+r*u-s*c,this._y=r*f+l*c+s*o-n*u,this._z=s*f+l*u+n*c-r*o,this._w=l*f-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,l=this._w;let o=l*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=l,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),h=Math.sin((1-t)*f)/u,d=Math.sin(t*f)/u;return this._w=l*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,l=e.y,o=e.z,c=e.w,u=c*t+l*r-o*n,f=c*n+o*t-s*r,h=c*r+s*n-l*t,d=-s*t-l*n-o*r;return this.x=u*c+d*-s+f*-o-h*-l,this.y=f*c+d*-l+h*-s-u*-o,this.z=h*c+d*-o+u*-l-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,l=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*l-n*c,this.z=n*o-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new ne,$d=new ca;class So{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox),Ga.applyMatrix4(e.matrixWorld),this.union(Ga);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let l=0,o=s.count;l<o;l++)rr.fromBufferAttribute(s,l).applyMatrix4(e.matrixWorld),this.expandByPoint(rr)}else r.boundingBox===null&&r.computeBoundingBox(),Ga.copy(r.boundingBox),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),il.subVectors(this.max,Ws),ka.subVectors(e.a,Ws),za.subVectors(e.b,Ws),Ha.subVectors(e.c,Ws),br.subVectors(za,ka),Sr.subVectors(Ha,za),Zr.subVectors(ka,Ha);let t=[0,-br.z,br.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,br.z,0,-br.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-br.y,br.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!fu(t,ka,za,Ha,il)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,ka,za,Ha,il))?!1:(rl.crossVectors(br,Sr),t=[rl.x,rl.y,rl.z],fu(t,ka,za,Ha,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ir=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],rr=new ne,Ga=new So,ka=new ne,za=new ne,Ha=new ne,br=new ne,Sr=new ne,Zr=new ne,Ws=new ne,il=new ne,rl=new ne,Kr=new ne;function fu(i,e,t,n,r){for(let s=0,l=i.length-3;s<=l;s+=3){Kr.fromArray(i,s);const o=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),u=t.dot(Kr),f=n.dot(Kr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const ny=new So,Xs=new ne,hu=new ne;class Kl{constructor(e=new ne,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ny.setFromPoints(e).getCenter(n);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(hu)),this.expandByPoint(Xs.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ar=new ne,du=new ne,al=new ne,Er=new ne,pu=new ne,sl=new ne,mu=new ne;class cf{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){du.copy(e).add(t).multiplyScalar(.5),al.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(du);const s=e.distanceTo(t)*.5,l=-this.direction.dot(al),o=Er.dot(this.direction),c=-Er.dot(al),u=Er.lengthSq(),f=Math.abs(1-l*l);let h,d,v,y;if(f>0)if(h=l*c-o,d=l*o-c,y=s*f,h>=0)if(d>=-y)if(d<=y){const S=1/f;h*=S,d*=S,v=h*(h+l*d+2*o)+d*(l*h+d+2*c)+u}else d=s,h=Math.max(0,-(l*d+o)),v=-h*h+d*(d+2*c)+u;else d=-s,h=Math.max(0,-(l*d+o)),v=-h*h+d*(d+2*c)+u;else d<=-y?(h=Math.max(0,-(-l*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),v=-h*h+d*(d+2*c)+u):d<=y?(h=0,d=Math.min(Math.max(-s,-c),s),v=d*(d+2*c)+u):(h=Math.max(0,-(l*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),v=-h*h+d*(d+2*c)+u);else d=l>0?-s:s,h=Math.max(0,-(l*d+o)),v=-h*h+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(du).addScaledVector(al,d),v}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),r=ar.dot(ar)-n*n,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),o=n-l,c=n+l;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,l,o,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,l=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,l=(e.min.y-d.y)*f),n>l||s>r||((s>n||isNaN(n))&&(n=s),(l<r||isNaN(r))&&(r=l),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,r,s){pu.subVectors(t,e),sl.subVectors(n,e),mu.crossVectors(pu,sl);let l=this.direction.dot(mu),o;if(l>0){if(r)return null;o=1}else if(l<0)o=-1,l=-l;else return null;Er.subVectors(this.origin,e);const c=o*this.direction.dot(sl.crossVectors(Er,sl));if(c<0)return null;const u=o*this.direction.dot(pu.cross(Er));if(u<0||c+u>l)return null;const f=-o*Er.dot(mu);return f<0?null:this.at(f/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn{constructor(e,t,n,r,s,l,o,c,u,f,h,d,v,y,S,g){Vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,o,c,u,f,h,d,v,y,S,g)}set(e,t,n,r,s,l,o,c,u,f,h,d,v,y,S,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=l,_[9]=o,_[13]=c,_[2]=u,_[6]=f,_[10]=h,_[14]=d,_[3]=v,_[7]=y,_[11]=S,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Va.setFromMatrixColumn(e,0).length(),s=1/Va.setFromMatrixColumn(e,1).length(),l=1/Va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,l=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=l*f,v=l*h,y=o*f,S=o*h;t[0]=c*f,t[4]=-c*h,t[8]=u,t[1]=v+y*u,t[5]=d-S*u,t[9]=-o*c,t[2]=S-d*u,t[6]=y+v*u,t[10]=l*c}else if(e.order==="YXZ"){const d=c*f,v=c*h,y=u*f,S=u*h;t[0]=d+S*o,t[4]=y*o-v,t[8]=l*u,t[1]=l*h,t[5]=l*f,t[9]=-o,t[2]=v*o-y,t[6]=S+d*o,t[10]=l*c}else if(e.order==="ZXY"){const d=c*f,v=c*h,y=u*f,S=u*h;t[0]=d-S*o,t[4]=-l*h,t[8]=y+v*o,t[1]=v+y*o,t[5]=l*f,t[9]=S-d*o,t[2]=-l*u,t[6]=o,t[10]=l*c}else if(e.order==="ZYX"){const d=l*f,v=l*h,y=o*f,S=o*h;t[0]=c*f,t[4]=y*u-v,t[8]=d*u+S,t[1]=c*h,t[5]=S*u+d,t[9]=v*u-y,t[2]=-u,t[6]=o*c,t[10]=l*c}else if(e.order==="YZX"){const d=l*c,v=l*u,y=o*c,S=o*u;t[0]=c*f,t[4]=S-d*h,t[8]=y*h+v,t[1]=h,t[5]=l*f,t[9]=-o*f,t[2]=-u*f,t[6]=v*h+y,t[10]=d-S*h}else if(e.order==="XZY"){const d=l*c,v=l*u,y=o*c,S=o*u;t[0]=c*f,t[4]=-h,t[8]=u*f,t[1]=d*h+S,t[5]=l*f,t[9]=v*h-y,t[2]=y*h-v,t[6]=o*f,t[10]=S*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iy,e,ry)}lookAt(e,t,n){const r=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Mr.crossVectors(n,xi),Mr.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Mr.crossVectors(n,xi)),Mr.normalize(),ol.crossVectors(xi,Mr),r[0]=Mr.x,r[4]=ol.x,r[8]=xi.x,r[1]=Mr.y,r[5]=ol.y,r[9]=xi.y,r[2]=Mr.z,r[6]=ol.z,r[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],o=n[4],c=n[8],u=n[12],f=n[1],h=n[5],d=n[9],v=n[13],y=n[2],S=n[6],g=n[10],_=n[14],D=n[3],E=n[7],B=n[11],H=n[15],te=r[0],X=r[4],Le=r[8],L=r[12],W=r[1],Te=r[5],We=r[9],O=r[13],b=r[2],F=r[6],N=r[10],j=r[14],ue=r[3],fe=r[7],ge=r[11],q=r[15];return s[0]=l*te+o*W+c*b+u*ue,s[4]=l*X+o*Te+c*F+u*fe,s[8]=l*Le+o*We+c*N+u*ge,s[12]=l*L+o*O+c*j+u*q,s[1]=f*te+h*W+d*b+v*ue,s[5]=f*X+h*Te+d*F+v*fe,s[9]=f*Le+h*We+d*N+v*ge,s[13]=f*L+h*O+d*j+v*q,s[2]=y*te+S*W+g*b+_*ue,s[6]=y*X+S*Te+g*F+_*fe,s[10]=y*Le+S*We+g*N+_*ge,s[14]=y*L+S*O+g*j+_*q,s[3]=D*te+E*W+B*b+H*ue,s[7]=D*X+E*Te+B*F+H*fe,s[11]=D*Le+E*We+B*N+H*ge,s[15]=D*L+E*O+B*j+H*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],l=e[1],o=e[5],c=e[9],u=e[13],f=e[2],h=e[6],d=e[10],v=e[14],y=e[3],S=e[7],g=e[11],_=e[15];return y*(+s*c*h-r*u*h-s*o*d+n*u*d+r*o*v-n*c*v)+S*(+t*c*v-t*u*d+s*l*d-r*l*v+r*u*f-s*c*f)+g*(+t*u*h-t*o*v-s*l*h+n*l*v+s*o*f-n*u*f)+_*(-r*o*f-t*c*h+t*o*d+r*l*h-n*l*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=e[9],d=e[10],v=e[11],y=e[12],S=e[13],g=e[14],_=e[15],D=h*g*u-S*d*u+S*c*v-o*g*v-h*c*_+o*d*_,E=y*d*u-f*g*u-y*c*v+l*g*v+f*c*_-l*d*_,B=f*S*u-y*h*u+y*o*v-l*S*v-f*o*_+l*h*_,H=y*h*c-f*S*c-y*o*d+l*S*d+f*o*g-l*h*g,te=t*D+n*E+r*B+s*H;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/te;return e[0]=D*X,e[1]=(S*d*s-h*g*s-S*r*v+n*g*v+h*r*_-n*d*_)*X,e[2]=(o*g*s-S*c*s+S*r*u-n*g*u-o*r*_+n*c*_)*X,e[3]=(h*c*s-o*d*s-h*r*u+n*d*u+o*r*v-n*c*v)*X,e[4]=E*X,e[5]=(f*g*s-y*d*s+y*r*v-t*g*v-f*r*_+t*d*_)*X,e[6]=(y*c*s-l*g*s-y*r*u+t*g*u+l*r*_-t*c*_)*X,e[7]=(l*d*s-f*c*s+f*r*u-t*d*u-l*r*v+t*c*v)*X,e[8]=B*X,e[9]=(y*h*s-f*S*s-y*n*v+t*S*v+f*n*_-t*h*_)*X,e[10]=(l*S*s-y*o*s+y*n*u-t*S*u-l*n*_+t*o*_)*X,e[11]=(f*o*s-l*h*s-f*n*u+t*h*u+l*n*v-t*o*v)*X,e[12]=H*X,e[13]=(f*S*r-y*h*r+y*n*d-t*S*d-f*n*g+t*h*g)*X,e[14]=(y*o*r-l*S*r-y*n*c+t*S*c+l*n*g-t*o*g)*X,e[15]=(l*h*r-f*o*r+f*n*c-t*h*c-l*n*d+t*o*d)*X,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,l=e.x,o=e.y,c=e.z,u=s*l,f=s*o;return this.set(u*l+n,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+n,f*c-r*l,0,u*c-r*o,f*c+r*l,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,l){return this.set(1,n,s,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,l=t._y,o=t._z,c=t._w,u=s+s,f=l+l,h=o+o,d=s*u,v=s*f,y=s*h,S=l*f,g=l*h,_=o*h,D=c*u,E=c*f,B=c*h,H=n.x,te=n.y,X=n.z;return r[0]=(1-(S+_))*H,r[1]=(v+B)*H,r[2]=(y-E)*H,r[3]=0,r[4]=(v-B)*te,r[5]=(1-(d+_))*te,r[6]=(g+D)*te,r[7]=0,r[8]=(y+E)*X,r[9]=(g-D)*X,r[10]=(1-(d+S))*X,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Va.set(r[0],r[1],r[2]).length();const l=Va.set(r[4],r[5],r[6]).length(),o=Va.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bi.copy(this);const u=1/s,f=1/l,h=1/o;return Bi.elements[0]*=u,Bi.elements[1]*=u,Bi.elements[2]*=u,Bi.elements[4]*=f,Bi.elements[5]*=f,Bi.elements[6]*=f,Bi.elements[8]*=h,Bi.elements[9]*=h,Bi.elements[10]*=h,t.setFromRotationMatrix(Bi),n.x=s,n.y=l,n.z=o,this}makePerspective(e,t,n,r,s,l,o=dr){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let v,y;if(o===dr)v=-(l+s)/(l-s),y=-2*l*s/(l-s);else if(o===zl)v=-l/(l-s),y=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,l,o=dr){const c=this.elements,u=1/(t-e),f=1/(n-r),h=1/(l-s),d=(t+e)*u,v=(n+r)*f;let y,S;if(o===dr)y=(l+s)*h,S=-2*h;else if(o===zl)y=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=S,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Va=new ne,Bi=new Vn,iy=new ne(0,0,0),ry=new ne(1,1,1),Mr=new ne,ol=new ne,xi=new ne,Zd=new Vn,Kd=new ca;class Jl{constructor(e=0,t=0,n=0,r=Jl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],l=r[4],o=r[8],c=r[1],u=r[5],f=r[9],h=r[2],d=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(Kn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-Kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jl.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const Jd=new ne,Wa=new ca,sr=new Vn,ll=new ne,Ys=new ne,sy=new ne,oy=new ca,Qd=new ne(1,0,0),ep=new ne(0,1,0),tp=new ne(0,0,1),ly={type:"added"},cy={type:"removed"};class mi extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mi.DEFAULT_UP.clone();const e=new ne,t=new Jl,n=new ca,r=new ne(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vn},normalMatrix:{value:new cn}}),this.matrix=new Vn,this.matrixWorld=new Vn,this.matrixAutoUpdate=mi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Ys,ll,this.up):sr.lookAt(ll,Ys,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),Wa.setFromRotationMatrix(sr),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ly)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const l=this.children[r].getObjectsByProperty(e,t);l.length>0&&(n=n.concat(l))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,oy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=l(e.geometries),c=l(e.materials),u=l(e.textures),f=l(e.images),h=l(e.shapes),d=l(e.skeletons),v=l(e.animations),y=l(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function l(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mi.DEFAULT_UP=new ne(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new ne,or=new ne,_u=new ne,lr=new ne,Xa=new ne,Ya=new ne,np=new ne,vu=new ne,gu=new ne,yu=new ne;let cl=!1;class Pi{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gi.subVectors(e,t),r.cross(Gi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gi.subVectors(r,t),or.subVectors(n,t),_u.subVectors(e,t);const l=Gi.dot(Gi),o=Gi.dot(or),c=Gi.dot(_u),u=or.dot(or),f=or.dot(_u),h=l*u-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,v=(u*c-o*f)*d,y=(l*f-o*c)*d;return s.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,lr),lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getUV(e,t,n,r,s,l,o,c){return cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cl=!0),this.getInterpolation(e,t,n,r,s,l,o,c)}static getInterpolation(e,t,n,r,s,l,o,c){return this.getBarycoord(e,t,n,r,lr),c.setScalar(0),c.addScaledVector(s,lr.x),c.addScaledVector(l,lr.y),c.addScaledVector(o,lr.z),c}static isFrontFacing(e,t,n,r){return Gi.subVectors(n,t),or.subVectors(e,t),Gi.cross(or).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Gi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return cl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cl=!0),Pi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Pi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let l,o;Xa.subVectors(r,n),Ya.subVectors(s,n),vu.subVectors(e,n);const c=Xa.dot(vu),u=Ya.dot(vu);if(c<=0&&u<=0)return t.copy(n);gu.subVectors(e,r);const f=Xa.dot(gu),h=Ya.dot(gu);if(f>=0&&h<=f)return t.copy(r);const d=c*h-f*u;if(d<=0&&c>=0&&f<=0)return l=c/(c-f),t.copy(n).addScaledVector(Xa,l);yu.subVectors(e,s);const v=Xa.dot(yu),y=Ya.dot(yu);if(y>=0&&v<=y)return t.copy(s);const S=v*u-c*y;if(S<=0&&u>=0&&y<=0)return o=u/(u-y),t.copy(n).addScaledVector(Ya,o);const g=f*y-v*h;if(g<=0&&h-f>=0&&v-y>=0)return np.subVectors(s,r),o=(h-f)/(h-f+(v-y)),t.copy(r).addScaledVector(np,o);const _=1/(g+S+d);return l=S*_,o=d*_,t.copy(n).addScaledVector(Xa,l).addScaledVector(Ya,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let uy=0;class da extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=fs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_m,this.blendDst=vm,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=su,this.stencilZFail=su,this.stencilZPass=su,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const l=[];for(const o in s){const c=s[o];delete c.metadata,l.push(c)}return l}if(t){const s=r(e.textures),l=r(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function xu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let hn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_n.workingColorSpace){return this.r=e,this.g=t,this.b=n,_n.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_n.workingColorSpace){if(e=lf(e,1),t=Kn(t,0,1),n=Kn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=xu(l,s,e+1/3),this.g=xu(l,s,e),this.b=xu(l,s,e-1/3)}return _n.toWorkingColorSpace(this,r),this}setStyle(e,t=ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],o=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const n=Nm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return _n.fromWorkingColorSpace(ri.copy(this),e),Math.round(Kn(ri.r*255,0,255))*65536+Math.round(Kn(ri.g*255,0,255))*256+Math.round(Kn(ri.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n.workingColorSpace){_n.fromWorkingColorSpace(ri.copy(this),t);const n=ri.r,r=ri.g,s=ri.b,l=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const f=(o+l)/2;if(o===l)c=0,u=0;else{const h=l-o;switch(u=f<=.5?h/(l+o):h/(2-l-o),l){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=_n.workingColorSpace){return _n.fromWorkingColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=ti){_n.fromWorkingColorSpace(ri.copy(this),e);const t=ri.r,n=ri.g,r=ri.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(ul);const n=ro(Tr.h,ul.h,t),r=ro(Tr.s,ul.s,t),s=ro(Tr.l,ul.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ri=new hn;hn.NAMES=Nm;class ur extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new hn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hn=new ne,fl=new pt;class Hi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xu,this.updateRange={offset:0,count:-1},this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fl.fromBufferAttribute(this,t),fl.applyMatrix3(e),this.setXY(t,fl.x,fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Im extends Hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Um extends Hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class oi extends Hi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fy=0;const Li=new Vn,bu=new mi,ja=new ne,bi=new So,js=new So,Zn=new ne;class Oi extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cm(e)?Um:Im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new cn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ja).negate(),this.translate(ja.x,ja.y,ja.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(bi.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Zn.addVectors(bi.min,js.min),bi.expandByPoint(Zn),Zn.addVectors(bi.max,js.max),bi.expandByPoint(Zn)):(bi.expandByPoint(js.min),bi.expandByPoint(js.max))}bi.getCenter(n);let r=0;for(let s=0,l=e.count;s<l;s++)Zn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Zn));if(t)for(let s=0,l=t.length;s<l;s++){const o=t[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Zn.fromBufferAttribute(o,u),c&&(ja.fromBufferAttribute(e,u),Zn.add(ja)),r=Math.max(r,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,l=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],f=[];for(let W=0;W<o;W++)u[W]=new ne,f[W]=new ne;const h=new ne,d=new ne,v=new ne,y=new pt,S=new pt,g=new pt,_=new ne,D=new ne;function E(W,Te,We){h.fromArray(r,W*3),d.fromArray(r,Te*3),v.fromArray(r,We*3),y.fromArray(l,W*2),S.fromArray(l,Te*2),g.fromArray(l,We*2),d.sub(h),v.sub(h),S.sub(y),g.sub(y);const O=1/(S.x*g.y-g.x*S.y);isFinite(O)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(v,-S.y).multiplyScalar(O),D.copy(v).multiplyScalar(S.x).addScaledVector(d,-g.x).multiplyScalar(O),u[W].add(_),u[Te].add(_),u[We].add(_),f[W].add(D),f[Te].add(D),f[We].add(D))}let B=this.groups;B.length===0&&(B=[{start:0,count:n.length}]);for(let W=0,Te=B.length;W<Te;++W){const We=B[W],O=We.start,b=We.count;for(let F=O,N=O+b;F<N;F+=3)E(n[F+0],n[F+1],n[F+2])}const H=new ne,te=new ne,X=new ne,Le=new ne;function L(W){X.fromArray(s,W*3),Le.copy(X);const Te=u[W];H.copy(Te),H.sub(X.multiplyScalar(X.dot(Te))).normalize(),te.crossVectors(Le,Te);const O=te.dot(f[W])<0?-1:1;c[W*4]=H.x,c[W*4+1]=H.y,c[W*4+2]=H.z,c[W*4+3]=O}for(let W=0,Te=B.length;W<Te;++W){const We=B[W],O=We.start,b=We.count;for(let F=O,N=O+b;F<N;F+=3)L(n[F+0]),L(n[F+1]),L(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,v=n.count;d<v;d++)n.setXYZ(d,0,0,0);const r=new ne,s=new ne,l=new ne,o=new ne,c=new ne,u=new ne,f=new ne,h=new ne;if(e)for(let d=0,v=e.count;d<v;d+=3){const y=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,S),l.fromBufferAttribute(t,g),f.subVectors(l,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,g),o.add(f),c.add(f),u.add(f),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,v=t.count;d<v;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),l.fromBufferAttribute(t,d+2),f.subVectors(l,s),h.subVectors(r,s),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zn.fromBufferAttribute(e,t),Zn.normalize(),e.setXYZ(t,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,h=o.normalized,d=new u.constructor(c.length*f);let v=0,y=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?v=c[S]*o.data.stride+o.offset:v=c[S]*f;for(let _=0;_<f;_++)d[y++]=u[v++]}return new Hi(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Oi,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,n);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const d=u[f],v=e(d,n);c.push(v)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let o=0,c=l.length;o<c;o++){const u=l[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,d=u.length;h<d;h++){const v=u[h];f.push(v.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,v=h.length;d<v;d++)f.push(h[d].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Vn,Jr=new cf,hl=new Kl,rp=new ne,qa=new ne,$a=new ne,Za=new ne,Su=new ne,dl=new ne,pl=new pt,ml=new pt,_l=new pt,ap=new ne,sp=new ne,op=new ne,vl=new ne,gl=new ne;class si extends mi{constructor(e=new Oi,t=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){dl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],h=s[c];f!==0&&(Su.fromBufferAttribute(h,e),l?dl.addScaledVector(Su,f):dl.addScaledVector(Su.sub(t),f))}t.add(dl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(hl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(hl,rp)===null||Jr.origin.distanceToSquared(rp)>(e.far-e.near)**2))&&(ip.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&Jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,l=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(l))for(let y=0,S=d.length;y<S;y++){const g=d[y],_=l[g.materialIndex],D=Math.max(g.start,v.start),E=Math.min(o.count,Math.min(g.start+g.count,v.start+v.count));for(let B=D,H=E;B<H;B+=3){const te=o.getX(B),X=o.getX(B+1),Le=o.getX(B+2);r=yl(this,_,e,n,u,f,h,te,X,Le),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(o.count,v.start+v.count);for(let g=y,_=S;g<_;g+=3){const D=o.getX(g),E=o.getX(g+1),B=o.getX(g+2);r=yl(this,l,e,n,u,f,h,D,E,B),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(l))for(let y=0,S=d.length;y<S;y++){const g=d[y],_=l[g.materialIndex],D=Math.max(g.start,v.start),E=Math.min(c.count,Math.min(g.start+g.count,v.start+v.count));for(let B=D,H=E;B<H;B+=3){const te=B,X=B+1,Le=B+2;r=yl(this,_,e,n,u,f,h,te,X,Le),r&&(r.faceIndex=Math.floor(B/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),S=Math.min(c.count,v.start+v.count);for(let g=y,_=S;g<_;g+=3){const D=g,E=g+1,B=g+2;r=yl(this,l,e,n,u,f,h,D,E,B),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function hy(i,e,t,n,r,s,l,o){let c;if(e.side===gi?c=n.intersectTriangle(l,s,r,!0,o):c=n.intersectTriangle(r,s,l,e.side===Dr,o),c===null)return null;gl.copy(o),gl.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(gl);return u<t.near||u>t.far?null:{distance:u,point:gl.clone(),object:i}}function yl(i,e,t,n,r,s,l,o,c,u){i.getVertexPosition(o,qa),i.getVertexPosition(c,$a),i.getVertexPosition(u,Za);const f=hy(i,e,t,n,qa,$a,Za,vl);if(f){r&&(pl.fromBufferAttribute(r,o),ml.fromBufferAttribute(r,c),_l.fromBufferAttribute(r,u),f.uv=Pi.getInterpolation(vl,qa,$a,Za,pl,ml,_l,new pt)),s&&(pl.fromBufferAttribute(s,o),ml.fromBufferAttribute(s,c),_l.fromBufferAttribute(s,u),f.uv1=Pi.getInterpolation(vl,qa,$a,Za,pl,ml,_l,new pt),f.uv2=f.uv1),l&&(ap.fromBufferAttribute(l,o),sp.fromBufferAttribute(l,c),op.fromBufferAttribute(l,u),f.normal=Pi.getInterpolation(vl,qa,$a,Za,ap,sp,op,new ne),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new ne,materialIndex:0};Pi.getNormal(qa,$a,Za,h.normal),f.face=h}return f}class Ki extends Oi{constructor(e=1,t=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const o=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const c=[],u=[],f=[],h=[];let d=0,v=0;y("z","y","x",-1,-1,n,t,e,l,s,0),y("z","y","x",1,-1,n,t,-e,l,s,1),y("x","z","y",1,1,e,n,t,r,l,2),y("x","z","y",1,-1,e,n,-t,r,l,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(f,3)),this.setAttribute("uv",new oi(h,2));function y(S,g,_,D,E,B,H,te,X,Le,L){const W=B/X,Te=H/Le,We=B/2,O=H/2,b=te/2,F=X+1,N=Le+1;let j=0,ue=0;const fe=new ne;for(let ge=0;ge<N;ge++){const q=ge*Te-O;for(let se=0;se<F;se++){const Ie=se*W-We;fe[S]=Ie*D,fe[g]=q*E,fe[_]=b,u.push(fe.x,fe.y,fe.z),fe[S]=0,fe[g]=0,fe[_]=te>0?1:-1,f.push(fe.x,fe.y,fe.z),h.push(se/X),h.push(1-ge/Le),j+=1}}for(let ge=0;ge<Le;ge++)for(let q=0;q<X;q++){const se=d+q+F*ge,Ie=d+q+F*(ge+1),et=d+(q+1)+F*(ge+1),Ge=d+(q+1)+F*ge;c.push(se,Ie,Ge),c.push(Ie,et,Ge),ue+=6}o.addGroup(v,ue,L),v+=ue,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function di(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const r in n)e[r]=n[r]}return e}function dy(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fm(i){return i.getRenderTarget()===null?i.outputColorSpace:_n.workingColorSpace}const py={clone:vs,merge:di};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uf extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vn,this.projectionMatrix=new Vn,this.projectionMatrixInverse=new Vn,this.coordinateSystem=dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ei extends uf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;s+=l.offsetX*r/c,t-=l.offsetY*n/u,r*=l.width/c,n*=l.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ka=-90,Ja=1;class vy extends mi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(Ka,Ja,e,t);r.layers=this.layers,this.add(r);const s=new Ei(Ka,Ja,e,t);s.layers=this.layers,this.add(s);const l=new Ei(Ka,Ja,e,t);l.layers=this.layers,this.add(l);const o=new Ei(Ka,Ja,e,t);o.layers=this.layers,this.add(o);const c=new Ei(Ka,Ja,e,t);c.layers=this.layers,this.add(c);const u=new Ei(Ka,Ja,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,l,o,c]=t;for(const u of t)this.remove(u);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,o,c,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(h,d,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Bm extends pi{constructor(e,t,n,r,s,l,o,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,r,s,l,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gy extends la{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ao("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===sa?ti:Di),this.texture=new Bm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ki(5,5,5),s=new ua({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gi,blending:Cr});s.uniforms.tEquirect.value=t;const l=new si(r,s),o=t.minFilter;return t.minFilter===po&&(t.minFilter=Si),new vy(1,10,this).update(e,l),t.minFilter=o,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(s)}}const Eu=new ne,yy=new ne,xy=new cn;class Ar{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Eu.subVectors(n,t).cross(yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Eu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xy.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Kl,xl=new ne;class Gm{constructor(e=new Ar,t=new Ar,n=new Ar,r=new Ar,s=new Ar,l=new Ar){this.planes=[e,t,n,r,s,l]}set(e,t,n,r,s,l){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr){const n=this.planes,r=e.elements,s=r[0],l=r[1],o=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],v=r[8],y=r[9],S=r[10],g=r[11],_=r[12],D=r[13],E=r[14],B=r[15];if(n[0].setComponents(c-s,d-u,g-v,B-_).normalize(),n[1].setComponents(c+s,d+u,g+v,B+_).normalize(),n[2].setComponents(c+l,d+f,g+y,B+D).normalize(),n[3].setComponents(c-l,d-f,g-y,B-D).normalize(),n[4].setComponents(c-o,d-h,g-S,B-E).normalize(),t===dr)n[5].setComponents(c+o,d+h,g+S,B+E).normalize();else if(t===zl)n[5].setComponents(o,h,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){return Qr.center.set(0,0,0),Qr.radius=.7071067811865476,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function km(){let i=null,e=!1,t=null,n=null;function r(s,l){t(s,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function by(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,f){const h=u.array,d=u.usage,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,h,d),u.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,v=f.updateRange;i.bindBuffer(h,u),v.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d,v.offset,v.count):i.bufferSubData(h,v.offset*d.BYTES_PER_ELEMENT,d.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f&&(i.deleteBuffer(f.buffer),n.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:l,remove:o,update:c}}class Ql extends Oi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,l=t/2,o=Math.floor(n),c=Math.floor(r),u=o+1,f=c+1,h=e/o,d=t/c,v=[],y=[],S=[],g=[];for(let _=0;_<f;_++){const D=_*d-l;for(let E=0;E<u;E++){const B=E*h-s;y.push(B,-D,0),S.push(0,0,1),g.push(E/o),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let D=0;D<o;D++){const E=D+u*_,B=D+u*(_+1),H=D+1+u*(_+1),te=D+1+u*_;v.push(E,B,te),v.push(B,H,te)}this.setIndex(v),this.setAttribute("position",new oi(y,3)),this.setAttribute("normal",new oi(S,3)),this.setAttribute("uv",new oi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,My=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,en={alphahash_fragment:Sy,alphahash_pars_fragment:Ey,alphamap_fragment:My,alphamap_pars_fragment:Ty,alphatest_fragment:Ay,alphatest_pars_fragment:wy,aomap_fragment:Ry,aomap_pars_fragment:Cy,begin_vertex:Ly,beginnormal_vertex:Py,bsdfs:Dy,iridescence_fragment:Oy,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Fy,clipping_planes_vertex:By,color_fragment:Gy,color_pars_fragment:ky,color_pars_vertex:zy,color_vertex:Hy,common:Vy,cube_uv_reflection_fragment:Wy,defaultnormal_vertex:Xy,displacementmap_pars_vertex:Yy,displacementmap_vertex:jy,emissivemap_fragment:qy,emissivemap_pars_fragment:$y,colorspace_fragment:Zy,colorspace_pars_fragment:Ky,envmap_fragment:Jy,envmap_common_pars_fragment:Qy,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:dx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:rx,fog_fragment:ax,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:hx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:_x,lights_phong_pars_fragment:vx,lights_physical_fragment:gx,lights_physical_pars_fragment:yx,lights_fragment_begin:xx,lights_fragment_maps:bx,lights_fragment_end:Sx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Tx,logdepthbuf_vertex:Ax,map_fragment:wx,map_pars_fragment:Rx,map_particle_fragment:Cx,map_particle_pars_fragment:Lx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Dx,morphcolor_vertex:Ox,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Bx,normal_pars_fragment:Gx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:Yx,opaque_fragment:jx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:Zx,dithering_fragment:Kx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:ab,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:lb,specularmap_fragment:cb,specularmap_pars_fragment:ub,tonemapping_fragment:fb,tonemapping_pars_fragment:hb,transmission_fragment:db,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:_b,uv_vertex:vb,worldpos_vertex:gb,background_vert:yb,background_frag:xb,backgroundCube_vert:bb,backgroundCube_frag:Sb,cube_vert:Eb,cube_frag:Mb,depth_vert:Tb,depth_frag:Ab,distanceRGBA_vert:wb,distanceRGBA_frag:Rb,equirect_vert:Cb,equirect_frag:Lb,linedashed_vert:Pb,linedashed_frag:Db,meshbasic_vert:Ob,meshbasic_frag:Nb,meshlambert_vert:Ib,meshlambert_frag:Ub,meshmatcap_vert:Fb,meshmatcap_frag:Bb,meshnormal_vert:Gb,meshnormal_frag:kb,meshphong_vert:zb,meshphong_frag:Hb,meshphysical_vert:Vb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:Yb,points_vert:jb,points_frag:qb,shadow_vert:$b,shadow_frag:Zb,sprite_vert:Kb,sprite_frag:Jb},ht={common:{diffuse:{value:new hn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new cn}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new cn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new cn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new cn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new cn},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new cn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new cn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new cn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new cn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new hn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new hn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new hn(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new cn},alphaMap:{value:null},alphaMapTransform:{value:new cn},alphaTest:{value:0}}},$i={basic:{uniforms:di([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:en.meshbasic_vert,fragmentShader:en.meshbasic_frag},lambert:{uniforms:di([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new hn(0)}}]),vertexShader:en.meshlambert_vert,fragmentShader:en.meshlambert_frag},phong:{uniforms:di([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new hn(0)},specular:{value:new hn(1118481)},shininess:{value:30}}]),vertexShader:en.meshphong_vert,fragmentShader:en.meshphong_frag},standard:{uniforms:di([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new hn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag},toon:{uniforms:di([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new hn(0)}}]),vertexShader:en.meshtoon_vert,fragmentShader:en.meshtoon_frag},matcap:{uniforms:di([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:en.meshmatcap_vert,fragmentShader:en.meshmatcap_frag},points:{uniforms:di([ht.points,ht.fog]),vertexShader:en.points_vert,fragmentShader:en.points_frag},dashed:{uniforms:di([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:en.linedashed_vert,fragmentShader:en.linedashed_frag},depth:{uniforms:di([ht.common,ht.displacementmap]),vertexShader:en.depth_vert,fragmentShader:en.depth_frag},normal:{uniforms:di([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:en.meshnormal_vert,fragmentShader:en.meshnormal_frag},sprite:{uniforms:di([ht.sprite,ht.fog]),vertexShader:en.sprite_vert,fragmentShader:en.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:en.background_vert,fragmentShader:en.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:en.backgroundCube_vert,fragmentShader:en.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:en.cube_vert,fragmentShader:en.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:en.equirect_vert,fragmentShader:en.equirect_frag},distanceRGBA:{uniforms:di([ht.common,ht.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:en.distanceRGBA_vert,fragmentShader:en.distanceRGBA_frag},shadow:{uniforms:di([ht.lights,ht.fog,{color:{value:new hn(0)},opacity:{value:1}}]),vertexShader:en.shadow_vert,fragmentShader:en.shadow_frag}};$i.physical={uniforms:di([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new cn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new cn},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new cn},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new cn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new cn},sheen:{value:0},sheenColor:{value:new hn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new cn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new cn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new cn},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new cn},attenuationDistance:{value:0},attenuationColor:{value:new hn(0)},specularColor:{value:new hn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new cn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new cn},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new cn}}]),vertexShader:en.meshphysical_vert,fragmentShader:en.meshphysical_frag};const bl={r:0,b:0,g:0};function Qb(i,e,t,n,r,s,l){const o=new hn(0);let c=s===!0?0:1,u,f,h=null,d=0,v=null;function y(g,_){let D=!1,E=_.isScene===!0?_.background:null;E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E)),E===null?S(o,c):E&&E.isColor&&(S(E,1),D=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===$l)?(f===void 0&&(f=new si(new Ki(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:vs($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(H,te,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=_n.getTransfer(E.colorSpace)!==xn,(h!==E||d!==E.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,h=E,d=E.version,v=i.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new si(new Ql(2,2),new ua({name:"BackgroundMaterial",uniforms:vs($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=_n.getTransfer(E.colorSpace)!==xn,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,v=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function S(g,_){g.getRGB(bl,Fm(i)),n.buffers.color.setClear(bl.r,bl.g,bl.b,_,l)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),c=_,S(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,S(o,c)},render:y}}function eS(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,o={},c=g(null);let u=c,f=!1;function h(b,F,N,j,ue){let fe=!1;if(l){const ge=S(j,N,F);u!==ge&&(u=ge,v(u.object)),fe=_(b,j,N,ue),fe&&D(b,j,N,ue)}else{const ge=F.wireframe===!0;(u.geometry!==j.id||u.program!==N.id||u.wireframe!==ge)&&(u.geometry=j.id,u.program=N.id,u.wireframe=ge,fe=!0)}ue!==null&&t.update(ue,i.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,Le(b,F,N,j),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ue).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function v(b){return n.isWebGL2?i.bindVertexArray(b):s.bindVertexArrayOES(b)}function y(b){return n.isWebGL2?i.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function S(b,F,N){const j=N.wireframe===!0;let ue=o[b.id];ue===void 0&&(ue={},o[b.id]=ue);let fe=ue[F.id];fe===void 0&&(fe={},ue[F.id]=fe);let ge=fe[j];return ge===void 0&&(ge=g(d()),fe[j]=ge),ge}function g(b){const F=[],N=[],j=[];for(let ue=0;ue<r;ue++)F[ue]=0,N[ue]=0,j[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:j,object:b,attributes:{},index:null}}function _(b,F,N,j){const ue=u.attributes,fe=F.attributes;let ge=0;const q=N.getAttributes();for(const se in q)if(q[se].location>=0){const et=ue[se];let Ge=fe[se];if(Ge===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(Ge=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(Ge=b.instanceColor)),et===void 0||et.attribute!==Ge||Ge&&et.data!==Ge.data)return!0;ge++}return u.attributesNum!==ge||u.index!==j}function D(b,F,N,j){const ue={},fe=F.attributes;let ge=0;const q=N.getAttributes();for(const se in q)if(q[se].location>=0){let et=fe[se];et===void 0&&(se==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),se==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const Ge={};Ge.attribute=et,et&&et.data&&(Ge.data=et.data),ue[se]=Ge,ge++}u.attributes=ue,u.attributesNum=ge,u.index=j}function E(){const b=u.newAttributes;for(let F=0,N=b.length;F<N;F++)b[F]=0}function B(b){H(b,0)}function H(b,F){const N=u.newAttributes,j=u.enabledAttributes,ue=u.attributeDivisors;N[b]=1,j[b]===0&&(i.enableVertexAttribArray(b),j[b]=1),ue[b]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,F),ue[b]=F)}function te(){const b=u.newAttributes,F=u.enabledAttributes;for(let N=0,j=F.length;N<j;N++)F[N]!==b[N]&&(i.disableVertexAttribArray(N),F[N]=0)}function X(b,F,N,j,ue,fe,ge){ge===!0?i.vertexAttribIPointer(b,F,N,ue,fe):i.vertexAttribPointer(b,F,N,j,ue,fe)}function Le(b,F,N,j){if(n.isWebGL2===!1&&(b.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const ue=j.attributes,fe=N.getAttributes(),ge=F.defaultAttributeValues;for(const q in fe){const se=fe[q];if(se.location>=0){let Ie=ue[q];if(Ie===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Ie=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Ie=b.instanceColor)),Ie!==void 0){const et=Ie.normalized,Ge=Ie.itemSize,xt=t.get(Ie);if(xt===void 0)continue;const Rt=xt.buffer,gt=xt.type,tn=xt.bytesPerElement,nn=n.isWebGL2===!0&&(gt===i.INT||gt===i.UNSIGNED_INT||Ie.gpuType===xm);if(Ie.isInterleavedBufferAttribute){const Ct=Ie.data,le=Ct.stride,dn=Ie.offset;if(Ct.isInstancedInterleavedBuffer){for(let Ot=0;Ot<se.locationSize;Ot++)H(se.location+Ot,Ct.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Ot=0;Ot<se.locationSize;Ot++)B(se.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Ot=0;Ot<se.locationSize;Ot++)X(se.location+Ot,Ge/se.locationSize,gt,et,le*tn,(dn+Ge/se.locationSize*Ot)*tn,nn)}else{if(Ie.isInstancedBufferAttribute){for(let Ct=0;Ct<se.locationSize;Ct++)H(se.location+Ct,Ie.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ct=0;Ct<se.locationSize;Ct++)B(se.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<se.locationSize;Ct++)X(se.location+Ct,Ge/se.locationSize,gt,et,Ge*tn,Ge/se.locationSize*Ct*tn,nn)}}else if(ge!==void 0){const et=ge[q];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(se.location,et);break;case 3:i.vertexAttrib3fv(se.location,et);break;case 4:i.vertexAttrib4fv(se.location,et);break;default:i.vertexAttrib1fv(se.location,et)}}}}te()}function L(){We();for(const b in o){const F=o[b];for(const N in F){const j=F[N];for(const ue in j)y(j[ue].object),delete j[ue];delete F[N]}delete o[b]}}function W(b){if(o[b.id]===void 0)return;const F=o[b.id];for(const N in F){const j=F[N];for(const ue in j)y(j[ue].object),delete j[ue];delete F[N]}delete o[b.id]}function Te(b){for(const F in o){const N=o[F];if(N[b.id]===void 0)continue;const j=N[b.id];for(const ue in j)y(j[ue].object),delete j[ue];delete N[b.id]}}function We(){O(),f=!0,u!==c&&(u=c,v(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:We,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:W,releaseStatesOfProgram:Te,initAttributes:E,enableAttribute:B,disableUnusedAttributes:te}}function tS(i,e,t,n){const r=n.isWebGL2;let s;function l(u){s=u}function o(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,h){if(h===0)return;let d,v;if(r)d=i,v="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[v](s,u,f,h),t.update(f,s,h)}this.setMode=l,this.render=o,this.renderInstances=c}function nS(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(X.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(X){if(X==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";X="mediump"}return X==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=l||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,B=l||e.has("OES_texture_float"),H=E&&B,te=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:D,vertexTextures:E,floatFragmentTextures:B,floatVertexTextures:H,maxSamples:te}}function iS(i){const e=this;let t=null,n=0,r=!1,s=!1;const l=new Ar,o=new cn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const v=h.length!==0||d||n!==0||r;return r=d,n=h.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,v){const y=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,_=i.get(h);if(!r||y===null||y.length===0||s&&!g)s?f(null):u();else{const D=s?0:n,E=D*4;let B=_.clippingState||null;c.value=B,B=f(y,d,E,v);for(let H=0;H!==E;++H)B[H]=t[H];_.clippingState=B,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=D}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,v,y){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=c.value,y!==!0||g===null){const _=v+S*4,D=d.matrixWorldInverse;o.getNormalMatrix(D),(g===null||g.length<_)&&(g=new Float32Array(_));for(let E=0,B=v;E!==S;++E,B+=4)l.copy(h[E]).applyMatrix4(D,o),l.normal.toArray(g,B),g[B+3]=l.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function rS(i){let e=new WeakMap;function t(l,o){return o===Hu?l.mapping=ps:o===Vu&&(l.mapping=ms),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const o=l.mapping;if(o===Hu||o===Vu)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new gy(c.height/2);return u.fromEquirectangularTexture(i,l),e.set(l,u),l.addEventListener("dispose",r),t(u.texture,l.mapping)}else return null}}return l}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class aS extends uf{constructor(e=-1,t=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,l=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,l=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,l,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,lp=[.125,.215,.35,.446,.526,.582],na=20,Mu=new aS,cp=new hn;let Tu=null;const ea=(1+Math.sqrt(5))/2,Qa=1/ea,up=[new ne(1,1,1),new ne(-1,1,1),new ne(1,1,-1),new ne(-1,1,-1),new ne(0,ea,Qa),new ne(0,ea,-Qa),new ne(Qa,0,ea),new ne(-Qa,0,ea),new ne(ea,Qa,0),new ne(-ea,Qa,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Tu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:mo,format:zi,colorSpace:pr,depthBuffer:!1},r=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(s)),this._blurMaterial=oS(s,e,t)}return r}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,n,r){const o=new Ei(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cp),f.toneMapping=Lr,f.autoClear=!1;const v=new ur({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),y=new si(new Ki,v);let S=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,S=!0):(v.color.copy(cp),S=!0);for(let _=0;_<6;_++){const D=_%3;D===0?(o.up.set(0,c[_],0),o.lookAt(u[_],0,0)):D===1?(o.up.set(0,0,c[_]),o.lookAt(0,u[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,u[_]));const E=this._cubeSize;Sl(r,D*E,_>2?E:0,E,E),f.setRenderTarget(r),S&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ps||e.mapping===ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new si(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Sl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,Mu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=up[(r-1)%up.length];this._blur(e,r-1,r,s,l)}t.autoClear=n}_blur(e,t,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",s),this._halfBlur(l,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,l,o){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new si(this._lodPlanes[r],u),d=u.uniforms,v=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*na-1),S=s/y,g=isFinite(s)?1+Math.floor(f*S):na;g>na&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${na}`);const _=[];let D=0;for(let X=0;X<na;++X){const Le=X/S,L=Math.exp(-Le*Le/2);_.push(L),X===0?D+=L:X<g&&(D+=2*L)}for(let X=0;X<_.length;X++)_[X]=_[X]/D;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=l==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=y,d.mipInt.value=E-n;const B=this._sizeLods[r],H=3*B*(r>E-os?r-E+os:0),te=4*(this._cubeSize-B);Sl(t,H,te,3*B,2*B),c.setRenderTarget(t),c.render(h,Mu)}}function sS(i){const e=[],t=[],n=[];let r=i;const s=i-os+1+lp.length;for(let l=0;l<s;l++){const o=Math.pow(2,r);t.push(o);let c=1/o;l>i-os?c=lp[l-i+os-1]:l===0&&(c=0),n.push(c);const u=1/(o-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,y=6,S=3,g=2,_=1,D=new Float32Array(S*y*v),E=new Float32Array(g*y*v),B=new Float32Array(_*y*v);for(let te=0;te<v;te++){const X=te%3*2/3-1,Le=te>2?0:-1,L=[X,Le,0,X+2/3,Le,0,X+2/3,Le+1,0,X,Le,0,X+2/3,Le+1,0,X,Le+1,0];D.set(L,S*y*te),E.set(d,g*y*te);const W=[te,te,te,te,te,te];B.set(W,_*y*te)}const H=new Oi;H.setAttribute("position",new Hi(D,S)),H.setAttribute("uv",new Hi(E,g)),H.setAttribute("faceIndex",new Hi(B,_)),e.push(H),r>os&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hp(i,e,t){const n=new la(i,e,t);return n.texture.mapping=$l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function oS(i,e,t){const n=new Float32Array(na),r=new ne(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:na,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function dp(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function pp(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===Hu||c===Vu,f=c===ps||c===ms;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new fp(i)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){t===null&&(t=new fp(i));const d=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function cS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function uS(i,e,t,n){const r={},s=new WeakMap;function l(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const S=d.morphAttributes[y];for(let g=0,_=S.length;g<_;g++)e.remove(S[g])}d.removeEventListener("dispose",l),delete r[d.id];const v=s.get(d);v&&(e.remove(v),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",l),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const y in d)e.update(d[y],i.ARRAY_BUFFER);const v=h.morphAttributes;for(const y in v){const S=v[y];for(let g=0,_=S.length;g<_;g++)e.update(S[g],i.ARRAY_BUFFER)}}function u(h){const d=[],v=h.index,y=h.attributes.position;let S=0;if(v!==null){const D=v.array;S=v.version;for(let E=0,B=D.length;E<B;E+=3){const H=D[E+0],te=D[E+1],X=D[E+2];d.push(H,te,te,X,X,H)}}else if(y!==void 0){const D=y.array;S=y.version;for(let E=0,B=D.length/3-1;E<B;E+=3){const H=E+0,te=E+1,X=E+2;d.push(H,te,te,X,X,H)}}else return;const g=new(Cm(d)?Um:Im)(d,1);g.version=S;const _=s.get(h);_&&e.remove(_),s.set(h,g)}function f(h){const d=s.get(h);if(d){const v=h.index;v!==null&&d.version<v.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function fS(i,e,t,n){const r=n.isWebGL2;let s;function l(d){s=d}let o,c;function u(d){o=d.type,c=d.bytesPerElement}function f(d,v){i.drawElements(s,v,o,d*c),t.update(v,s,1)}function h(d,v,y){if(y===0)return;let S,g;if(r)S=i,g="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[g](s,v,o,d*c,y),t.update(v,s,y)}this.setMode=l,this.setIndex=u,this.render=f,this.renderInstances=h}function hS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,o){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function dS(i,e){return i[0]-e[0]}function pS(i,e){return Math.abs(e[1])-Math.abs(i[1])}function mS(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,l=new ni,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let S=s.get(f);if(S===void 0||S.count!==y){let D=function(){O.dispose(),s.delete(f),f.removeEventListener("dispose",D)};S!==void 0&&S.texture.dispose();const E=f.morphAttributes.position!==void 0,B=f.morphAttributes.normal!==void 0,H=f.morphAttributes.color!==void 0,te=f.morphAttributes.position||[],X=f.morphAttributes.normal||[],Le=f.morphAttributes.color||[];let L=0;E===!0&&(L=1),B===!0&&(L=2),H===!0&&(L=3);let W=f.attributes.position.count*L,Te=1;W>e.maxTextureSize&&(Te=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const We=new Float32Array(W*Te*4*y),O=new Dm(We,W,Te,y);O.type=Rr,O.needsUpdate=!0;const b=L*4;for(let F=0;F<y;F++){const N=te[F],j=X[F],ue=Le[F],fe=W*Te*4*F;for(let ge=0;ge<N.count;ge++){const q=ge*b;E===!0&&(l.fromBufferAttribute(N,ge),We[fe+q+0]=l.x,We[fe+q+1]=l.y,We[fe+q+2]=l.z,We[fe+q+3]=0),B===!0&&(l.fromBufferAttribute(j,ge),We[fe+q+4]=l.x,We[fe+q+5]=l.y,We[fe+q+6]=l.z,We[fe+q+7]=0),H===!0&&(l.fromBufferAttribute(ue,ge),We[fe+q+8]=l.x,We[fe+q+9]=l.y,We[fe+q+10]=l.z,We[fe+q+11]=ue.itemSize===4?l.w:1)}}S={count:y,texture:O,size:new pt(W,Te)},s.set(f,S),f.addEventListener("dispose",D)}let g=0;for(let D=0;D<d.length;D++)g+=d[D];const _=f.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{const v=d===void 0?0:d.length;let y=n[f.id];if(y===void 0||y.length!==v){y=[];for(let E=0;E<v;E++)y[E]=[E,0];n[f.id]=y}for(let E=0;E<v;E++){const B=y[E];B[0]=E,B[1]=d[E]}y.sort(pS);for(let E=0;E<8;E++)E<v&&y[E][1]?(o[E][0]=y[E][0],o[E][1]=y[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(dS);const S=f.morphAttributes.position,g=f.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const B=o[E],H=B[0],te=B[1];H!==Number.MAX_SAFE_INTEGER&&te?(S&&f.getAttribute("morphTarget"+E)!==S[H]&&f.setAttribute("morphTarget"+E,S[H]),g&&f.getAttribute("morphNormal"+E)!==g[H]&&f.setAttribute("morphNormal"+E,g[H]),r[E]=te,_+=te):(S&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),g&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),r[E]=0)}const D=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",D),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function _S(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function l(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:l}}const zm=new pi,Hm=new Dm,Vm=new ty,Wm=new Bm,mp=[],_p=[],vp=new Float32Array(16),gp=new Float32Array(9),yp=new Float32Array(4);function Ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){n.toArray(s,0);for(let l=1,o=0;l!==e;++l)o+=t,i[l].toArray(s,o)}return s}function Xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ec(i,e){let t=_p[e];t===void 0&&(t=new Int32Array(e),_p[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2fv(this.addr,e),Yn(t,e)}}function yS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xn(t,e))return;i.uniform3fv(this.addr,e),Yn(t,e)}}function xS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4fv(this.addr,e),Yn(t,e)}}function bS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),Yn(t,n)}}function SS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),Yn(t,n)}}function ES(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yn(t,e)}else{if(Xn(t,n))return;vp.set(n),i.uniformMatrix4fv(this.addr,!1,vp),Yn(t,n)}}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2iv(this.addr,e),Yn(t,e)}}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;i.uniform3iv(this.addr,e),Yn(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4iv(this.addr,e),Yn(t,e)}}function RS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function CS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xn(t,e))return;i.uniform2uiv(this.addr,e),Yn(t,e)}}function LS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xn(t,e))return;i.uniform3uiv(this.addr,e),Yn(t,e)}}function PS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xn(t,e))return;i.uniform4uiv(this.addr,e),Yn(t,e)}}function DS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||zm,r)}function OS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vm,r)}function NS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wm,r)}function IS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hm,r)}function US(i){switch(i){case 5126:return vS;case 35664:return gS;case 35665:return yS;case 35666:return xS;case 35674:return bS;case 35675:return SS;case 35676:return ES;case 5124:case 35670:return MS;case 35667:case 35671:return TS;case 35668:case 35672:return AS;case 35669:case 35673:return wS;case 5125:return RS;case 36294:return CS;case 36295:return LS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return IS}}function FS(i,e){i.uniform1fv(this.addr,e)}function BS(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function GS(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function kS(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function zS(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function HS(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function VS(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function WS(i,e){i.uniform1iv(this.addr,e)}function XS(i,e){i.uniform2iv(this.addr,e)}function YS(i,e){i.uniform3iv(this.addr,e)}function jS(i,e){i.uniform4iv(this.addr,e)}function qS(i,e){i.uniform1uiv(this.addr,e)}function $S(i,e){i.uniform2uiv(this.addr,e)}function ZS(i,e){i.uniform3uiv(this.addr,e)}function KS(i,e){i.uniform4uiv(this.addr,e)}function JS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Xn(n,s)||(i.uniform1iv(this.addr,s),Yn(n,s));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||zm,s[l])}function QS(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Xn(n,s)||(i.uniform1iv(this.addr,s),Yn(n,s));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Vm,s[l])}function eE(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Xn(n,s)||(i.uniform1iv(this.addr,s),Yn(n,s));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Wm,s[l])}function tE(i,e,t){const n=this.cache,r=e.length,s=ec(t,r);Xn(n,s)||(i.uniform1iv(this.addr,s),Yn(n,s));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Hm,s[l])}function nE(i){switch(i){case 5126:return FS;case 35664:return BS;case 35665:return GS;case 35666:return kS;case 35674:return zS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return YS;case 35669:case 35673:return jS;case 5125:return qS;case 36294:return $S;case 36295:return ZS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return tE}}class iE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=US(t.type)}}class rE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=nE(t.type)}}class aE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Au=/(\w+)(\])?(\[|\.)?/g;function xp(i,e){i.seq.push(e),i.map[e.id]=e}function sE(i,e,t){const n=i.name,r=n.length;for(Au.lastIndex=0;;){const s=Au.exec(n),l=Au.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&l+2===r){xp(t,u===void 0?new iE(o,i,e):new rE(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new aE(o),xp(t,h)),t=h}}}class Il{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),l=e.getUniformLocation(t,s.name);sE(s,l,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,l=t.length;s!==l;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function bp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let oE=0;function lE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=r;l<s;l++){const o=l+1;n.push(`${o===e?">":" "} ${o}: ${t[l]}`)}return n.join(`
`)}function cE(i){const e=_n.getPrimaries(_n.workingColorSpace),t=_n.getPrimaries(i);let n;switch(e===t?n="":e===kl&&t===Gl?n="LinearDisplayP3ToLinearSRGB":e===Gl&&t===kl&&(n="LinearSRGBToLinearDisplayP3"),i){case pr:case Zl:return[n,"LinearTransferOETF"];case ti:case of:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Sp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lE(i.getShaderSource(e),l)}else return r}function uE(i,e){const t=cE(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fE(i,e){let t;switch(e){case c0:t="Linear";break;case u0:t="Reinhard";break;case f0:t="OptimizedCineon";break;case h0:t="ACESFilmic";break;case d0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hE(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(to).join(`
`)}function dE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),l=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[l]={type:s.type,location:i.getAttribLocation(e,l),locationSize:o}}return t}function to(i){return i!==""}function Ep(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(i){return i.replace(mE,vE)}const _E=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vE(i,e){let t=en[e];if(t===void 0){const n=_E.get(e);if(n!==void 0)t=en[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qu(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(i){return i.replace(gE,yE)}function yE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function bE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function EE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gm:e="ENVMAP_BLENDING_MULTIPLY";break;case o0:e="ENVMAP_BLENDING_MIX";break;case l0:e="ENVMAP_BLENDING_ADD";break}return e}function ME(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function TE(i,e,t,n){const r=i.getContext(),s=t.defines;let l=t.vertexShader,o=t.fragmentShader;const c=xE(t),u=bE(t),f=SE(t),h=EE(t),d=ME(t),v=t.isWebGL2?"":hE(t),y=dE(s),S=r.createProgram();let g,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(to).join(`
`),g.length>0&&(g+=`
`),_=[v,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(to).join(`
`),_.length>0&&(_+=`
`)):(g=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),_=[v,Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?en.tonemapping_pars_fragment:"",t.toneMapping!==Lr?fE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",en.colorspace_pars_fragment,uE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),l=qu(l),l=Ep(l,t),l=Mp(l,t),o=qu(o),o=Ep(o,t),o=Mp(o,t),l=Tp(l),o=Tp(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=D+g+l,B=D+_+o,H=bp(r,r.VERTEX_SHADER,E),te=bp(r,r.FRAGMENT_SHADER,B);if(r.attachShader(S,H),r.attachShader(S,te),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S),i.debug.checkShaderErrors){const L=r.getProgramInfoLog(S).trim(),W=r.getShaderInfoLog(H).trim(),Te=r.getShaderInfoLog(te).trim();let We=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(We=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,H,te);else{const b=Sp(r,H,"vertex"),F=Sp(r,te,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+b+`
`+F)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(W===""||Te==="")&&(O=!1);O&&(this.diagnostics={runnable:We,programLog:L,vertexShader:{log:W,prefix:g},fragmentShader:{log:Te,prefix:_}})}r.deleteShader(H),r.deleteShader(te);let X;this.getUniforms=function(){return X===void 0&&(X=new Il(r,S)),X};let Le;return this.getAttributes=function(){return Le===void 0&&(Le=pE(r,S)),Le},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oE++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=H,this.fragmentShader=te,this}let AE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new RE(e),t.set(e,n)),n}}class RE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function CE(i,e,t,n,r,s,l){const o=new Om,c=new wE,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(L){return L===0?"uv":`uv${L}`}function g(L,W,Te,We,O){const b=We.fog,F=O.geometry,N=L.isMeshStandardMaterial?We.environment:null,j=(L.isMeshStandardMaterial?t:e).get(L.envMap||N),ue=j&&j.mapping===$l?j.image.height:null,fe=y[L.type];L.precision!==null&&(v=r.getMaxPrecision(L.precision),v!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",v,"instead."));const ge=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=ge!==void 0?ge.length:0;let se=0;F.morphAttributes.position!==void 0&&(se=1),F.morphAttributes.normal!==void 0&&(se=2),F.morphAttributes.color!==void 0&&(se=3);let Ie,et,Ge,xt;if(fe){const gn=$i[fe];Ie=gn.vertexShader,et=gn.fragmentShader}else Ie=L.vertexShader,et=L.fragmentShader,c.update(L),Ge=c.getVertexShaderID(L),xt=c.getFragmentShaderID(L);const Rt=i.getRenderTarget(),gt=O.isInstancedMesh===!0,tn=!!L.map,nn=!!L.matcap,Ct=!!j,le=!!L.aoMap,dn=!!L.lightMap,Ot=!!L.bumpMap,Yt=!!L.normalMap,zt=!!L.displacementMap,vn=!!L.emissiveMap,It=!!L.metalnessMap,$t=!!L.roughnessMap,an=L.anisotropy>0,In=L.clearcoat>0,kn=L.iridescence>0,p=L.sheen>0,A=L.transmission>0,ye=an&&!!L.anisotropyMap,tt=In&&!!L.clearcoatMap,Ke=In&&!!L.clearcoatNormalMap,Je=In&&!!L.clearcoatRoughnessMap,Mt=kn&&!!L.iridescenceMap,nt=kn&&!!L.iridescenceThicknessMap,dt=p&&!!L.sheenColorMap,$=p&&!!L.sheenRoughnessMap,it=!!L.specularMap,ze=!!L.specularColorMap,bt=!!L.specularIntensityMap,Tt=A&&!!L.transmissionMap,Lt=A&&!!L.thicknessMap,At=!!L.gradientMap,Y=!!L.alphaMap,st=L.alphaTest>0,rt=!!L.alphaHash,ft=!!L.extensions,ot=!!F.attributes.uv1,Ye=!!F.attributes.uv2,St=!!F.attributes.uv3;let kt=Lr;return L.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(kt=i.toneMapping),{isWebGL2:f,shaderID:fe,shaderType:L.type,shaderName:L.name,vertexShader:Ie,fragmentShader:et,defines:L.defines,customVertexShaderID:Ge,customFragmentShaderID:xt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:v,instancing:gt,instancingColor:gt&&O.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:pr,map:tn,matcap:nn,envMap:Ct,envMapMode:Ct&&j.mapping,envMapCubeUVHeight:ue,aoMap:le,lightMap:dn,bumpMap:Ot,normalMap:Yt,displacementMap:d&&zt,emissiveMap:vn,normalMapObjectSpace:Yt&&L.normalMapType===A0,normalMapTangentSpace:Yt&&L.normalMapType===wm,metalnessMap:It,roughnessMap:$t,anisotropy:an,anisotropyMap:ye,clearcoat:In,clearcoatMap:tt,clearcoatNormalMap:Ke,clearcoatRoughnessMap:Je,iridescence:kn,iridescenceMap:Mt,iridescenceThicknessMap:nt,sheen:p,sheenColorMap:dt,sheenRoughnessMap:$,specularMap:it,specularColorMap:ze,specularIntensityMap:bt,transmission:A,transmissionMap:Tt,thicknessMap:Lt,gradientMap:At,opaque:L.transparent===!1&&L.blending===fs,alphaMap:Y,alphaTest:st,alphaHash:rt,combine:L.combine,mapUv:tn&&S(L.map.channel),aoMapUv:le&&S(L.aoMap.channel),lightMapUv:dn&&S(L.lightMap.channel),bumpMapUv:Ot&&S(L.bumpMap.channel),normalMapUv:Yt&&S(L.normalMap.channel),displacementMapUv:zt&&S(L.displacementMap.channel),emissiveMapUv:vn&&S(L.emissiveMap.channel),metalnessMapUv:It&&S(L.metalnessMap.channel),roughnessMapUv:$t&&S(L.roughnessMap.channel),anisotropyMapUv:ye&&S(L.anisotropyMap.channel),clearcoatMapUv:tt&&S(L.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&S(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&S(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&S(L.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&S(L.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&S(L.sheenColorMap.channel),sheenRoughnessMapUv:$&&S(L.sheenRoughnessMap.channel),specularMapUv:it&&S(L.specularMap.channel),specularColorMapUv:ze&&S(L.specularColorMap.channel),specularIntensityMapUv:bt&&S(L.specularIntensityMap.channel),transmissionMapUv:Tt&&S(L.transmissionMap.channel),thicknessMapUv:Lt&&S(L.thicknessMap.channel),alphaMapUv:Y&&S(L.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Yt||an),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ot,vertexUv2s:Ye,vertexUv3s:St,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(tn||Y),fog:!!b,useFog:L.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:se,numDirLights:W.directional.length,numPointLights:W.point.length,numSpotLights:W.spot.length,numSpotLightMaps:W.spotLightMap.length,numRectAreaLights:W.rectArea.length,numHemiLights:W.hemi.length,numDirLightShadows:W.directionalShadowMap.length,numPointLightShadows:W.pointShadowMap.length,numSpotLightShadows:W.spotShadowMap.length,numSpotLightShadowsWithMaps:W.numSpotLightShadowsWithMaps,numLightProbes:W.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&Te.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:tn&&L.map.isVideoTexture===!0&&_n.getTransfer(L.map.colorSpace)===xn,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===fr,flipSided:L.side===gi,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionDerivatives:ft&&L.extensions.derivatives===!0,extensionFragDepth:ft&&L.extensions.fragDepth===!0,extensionDrawBuffers:ft&&L.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&L.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:L.customProgramCacheKey()}}function _(L){const W=[];if(L.shaderID?W.push(L.shaderID):(W.push(L.customVertexShaderID),W.push(L.customFragmentShaderID)),L.defines!==void 0)for(const Te in L.defines)W.push(Te),W.push(L.defines[Te]);return L.isRawShaderMaterial===!1&&(D(W,L),E(W,L),W.push(i.outputColorSpace)),W.push(L.customProgramCacheKey),W.join()}function D(L,W){L.push(W.precision),L.push(W.outputColorSpace),L.push(W.envMapMode),L.push(W.envMapCubeUVHeight),L.push(W.mapUv),L.push(W.alphaMapUv),L.push(W.lightMapUv),L.push(W.aoMapUv),L.push(W.bumpMapUv),L.push(W.normalMapUv),L.push(W.displacementMapUv),L.push(W.emissiveMapUv),L.push(W.metalnessMapUv),L.push(W.roughnessMapUv),L.push(W.anisotropyMapUv),L.push(W.clearcoatMapUv),L.push(W.clearcoatNormalMapUv),L.push(W.clearcoatRoughnessMapUv),L.push(W.iridescenceMapUv),L.push(W.iridescenceThicknessMapUv),L.push(W.sheenColorMapUv),L.push(W.sheenRoughnessMapUv),L.push(W.specularMapUv),L.push(W.specularColorMapUv),L.push(W.specularIntensityMapUv),L.push(W.transmissionMapUv),L.push(W.thicknessMapUv),L.push(W.combine),L.push(W.fogExp2),L.push(W.sizeAttenuation),L.push(W.morphTargetsCount),L.push(W.morphAttributeCount),L.push(W.numDirLights),L.push(W.numPointLights),L.push(W.numSpotLights),L.push(W.numSpotLightMaps),L.push(W.numHemiLights),L.push(W.numRectAreaLights),L.push(W.numDirLightShadows),L.push(W.numPointLightShadows),L.push(W.numSpotLightShadows),L.push(W.numSpotLightShadowsWithMaps),L.push(W.numLightProbes),L.push(W.shadowMapType),L.push(W.toneMapping),L.push(W.numClippingPlanes),L.push(W.numClipIntersection),L.push(W.depthPacking)}function E(L,W){o.disableAll(),W.isWebGL2&&o.enable(0),W.supportsVertexTextures&&o.enable(1),W.instancing&&o.enable(2),W.instancingColor&&o.enable(3),W.matcap&&o.enable(4),W.envMap&&o.enable(5),W.normalMapObjectSpace&&o.enable(6),W.normalMapTangentSpace&&o.enable(7),W.clearcoat&&o.enable(8),W.iridescence&&o.enable(9),W.alphaTest&&o.enable(10),W.vertexColors&&o.enable(11),W.vertexAlphas&&o.enable(12),W.vertexUv1s&&o.enable(13),W.vertexUv2s&&o.enable(14),W.vertexUv3s&&o.enable(15),W.vertexTangents&&o.enable(16),W.anisotropy&&o.enable(17),L.push(o.mask),o.disableAll(),W.fog&&o.enable(0),W.useFog&&o.enable(1),W.flatShading&&o.enable(2),W.logarithmicDepthBuffer&&o.enable(3),W.skinning&&o.enable(4),W.morphTargets&&o.enable(5),W.morphNormals&&o.enable(6),W.morphColors&&o.enable(7),W.premultipliedAlpha&&o.enable(8),W.shadowMapEnabled&&o.enable(9),W.useLegacyLights&&o.enable(10),W.doubleSided&&o.enable(11),W.flipSided&&o.enable(12),W.useDepthPacking&&o.enable(13),W.dithering&&o.enable(14),W.transmission&&o.enable(15),W.sheen&&o.enable(16),W.opaque&&o.enable(17),W.pointsUvs&&o.enable(18),W.decodeVideoTexture&&o.enable(19),L.push(o.mask)}function B(L){const W=y[L.type];let Te;if(W){const We=$i[W];Te=py.clone(We.uniforms)}else Te=L.uniforms;return Te}function H(L,W){let Te;for(let We=0,O=u.length;We<O;We++){const b=u[We];if(b.cacheKey===W){Te=b,++Te.usedTimes;break}}return Te===void 0&&(Te=new TE(i,W,L,s),u.push(Te)),Te}function te(L){if(--L.usedTimes===0){const W=u.indexOf(L);u[W]=u[u.length-1],u.pop(),L.destroy()}}function X(L){c.remove(L)}function Le(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:B,acquireProgram:H,releaseProgram:te,releaseShaderCache:X,programs:u,dispose:Le}}function LE(){let i=new WeakMap;function e(s){let l=i.get(s);return l===void 0&&(l={},i.set(s,l)),l}function t(s){i.delete(s)}function n(s,l,o){i.get(s)[l]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function PE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function l(h,d,v,y,S,g){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:v,groupOrder:y,renderOrder:h.renderOrder,z:S,group:g},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=v,_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=S,_.group=g),e++,_}function o(h,d,v,y,S,g){const _=l(h,d,v,y,S,g);v.transmission>0?n.push(_):v.transparent===!0?r.push(_):t.push(_)}function c(h,d,v,y,S,g){const _=l(h,d,v,y,S,g);v.transmission>0?n.unshift(_):v.transparent===!0?r.unshift(_):t.unshift(_)}function u(h,d){t.length>1&&t.sort(h||PE),n.length>1&&n.sort(d||wp),r.length>1&&r.sort(d||wp)}function f(){for(let h=e,d=i.length;h<d;h++){const v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function DE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let l;return s===void 0?(l=new Rp,i.set(n,[l])):r>=s.length?(l=new Rp,s.push(l)):l=s[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function OE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new hn};break;case"SpotLight":t={position:new ne,direction:new ne,color:new hn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new hn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new hn,groundColor:new hn};break;case"RectAreaLight":t={color:new hn,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function NE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let IE=0;function UE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function FE(i,e){const t=new OE,n=NE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new ne);const s=new ne,l=new Vn,o=new Vn;function c(f,h){let d=0,v=0,y=0;for(let We=0;We<9;We++)r.probe[We].set(0,0,0);let S=0,g=0,_=0,D=0,E=0,B=0,H=0,te=0,X=0,Le=0,L=0;f.sort(UE);const W=h===!0?Math.PI:1;for(let We=0,O=f.length;We<O;We++){const b=f[We],F=b.color,N=b.intensity,j=b.distance,ue=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=F.r*N*W,v+=F.g*N*W,y+=F.b*N*W;else if(b.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(b.sh.coefficients[fe],N);L++}else if(b.isDirectionalLight){const fe=t.get(b);if(fe.color.copy(b.color).multiplyScalar(b.intensity*W),b.castShadow){const ge=b.shadow,q=n.get(b);q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=b.shadow.matrix,B++}r.directional[S]=fe,S++}else if(b.isSpotLight){const fe=t.get(b);fe.position.setFromMatrixPosition(b.matrixWorld),fe.color.copy(F).multiplyScalar(N*W),fe.distance=j,fe.coneCos=Math.cos(b.angle),fe.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),fe.decay=b.decay,r.spot[_]=fe;const ge=b.shadow;if(b.map&&(r.spotLightMap[X]=b.map,X++,ge.updateMatrices(b),b.castShadow&&Le++),r.spotLightMatrix[_]=ge.matrix,b.castShadow){const q=n.get(b);q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,r.spotShadow[_]=q,r.spotShadowMap[_]=ue,te++}_++}else if(b.isRectAreaLight){const fe=t.get(b);fe.color.copy(F).multiplyScalar(N),fe.halfWidth.set(b.width*.5,0,0),fe.halfHeight.set(0,b.height*.5,0),r.rectArea[D]=fe,D++}else if(b.isPointLight){const fe=t.get(b);if(fe.color.copy(b.color).multiplyScalar(b.intensity*W),fe.distance=b.distance,fe.decay=b.decay,b.castShadow){const ge=b.shadow,q=n.get(b);q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,q.shadowCameraNear=ge.camera.near,q.shadowCameraFar=ge.camera.far,r.pointShadow[g]=q,r.pointShadowMap[g]=ue,r.pointShadowMatrix[g]=b.shadow.matrix,H++}r.point[g]=fe,g++}else if(b.isHemisphereLight){const fe=t.get(b);fe.skyColor.copy(b.color).multiplyScalar(N*W),fe.groundColor.copy(b.groundColor).multiplyScalar(N*W),r.hemi[E]=fe,E++}}D>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ht.LTC_FLOAT_1,r.rectAreaLTC2=ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ht.LTC_HALF_1,r.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=v,r.ambient[2]=y;const Te=r.hash;(Te.directionalLength!==S||Te.pointLength!==g||Te.spotLength!==_||Te.rectAreaLength!==D||Te.hemiLength!==E||Te.numDirectionalShadows!==B||Te.numPointShadows!==H||Te.numSpotShadows!==te||Te.numSpotMaps!==X||Te.numLightProbes!==L)&&(r.directional.length=S,r.spot.length=_,r.rectArea.length=D,r.point.length=g,r.hemi.length=E,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=H,r.pointShadowMap.length=H,r.spotShadow.length=te,r.spotShadowMap.length=te,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=H,r.spotLightMatrix.length=te+X-Le,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=Le,r.numLightProbes=L,Te.directionalLength=S,Te.pointLength=g,Te.spotLength=_,Te.rectAreaLength=D,Te.hemiLength=E,Te.numDirectionalShadows=B,Te.numPointShadows=H,Te.numSpotShadows=te,Te.numSpotMaps=X,Te.numLightProbes=L,r.version=IE++)}function u(f,h){let d=0,v=0,y=0,S=0,g=0;const _=h.matrixWorldInverse;for(let D=0,E=f.length;D<E;D++){const B=f[D];if(B.isDirectionalLight){const H=r.directional[d];H.direction.setFromMatrixPosition(B.matrixWorld),s.setFromMatrixPosition(B.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(_),d++}else if(B.isSpotLight){const H=r.spot[y];H.position.setFromMatrixPosition(B.matrixWorld),H.position.applyMatrix4(_),H.direction.setFromMatrixPosition(B.matrixWorld),s.setFromMatrixPosition(B.target.matrixWorld),H.direction.sub(s),H.direction.transformDirection(_),y++}else if(B.isRectAreaLight){const H=r.rectArea[S];H.position.setFromMatrixPosition(B.matrixWorld),H.position.applyMatrix4(_),o.identity(),l.copy(B.matrixWorld),l.premultiply(_),o.extractRotation(l),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),H.halfWidth.applyMatrix4(o),H.halfHeight.applyMatrix4(o),S++}else if(B.isPointLight){const H=r.point[v];H.position.setFromMatrixPosition(B.matrixWorld),H.position.applyMatrix4(_),v++}else if(B.isHemisphereLight){const H=r.hemi[g];H.direction.setFromMatrixPosition(B.matrixWorld),H.direction.transformDirection(_),g++}}}return{setup:c,setupView:u,state:r}}function Cp(i,e){const t=new FE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function l(h){n.push(h)}function o(h){r.push(h)}function c(h){t.setup(n,h)}function u(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:o}}function BE(i,e){let t=new WeakMap;function n(s,l=0){const o=t.get(s);let c;return o===void 0?(c=new Cp(i,e),t.set(s,[c])):l>=o.length?(c=new Cp(i,e),o.push(c)):c=o[l],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class GE extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kE extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VE(i,e,t){let n=new Gm;const r=new pt,s=new pt,l=new ni,o=new GE({depthPacking:T0}),c=new kE,u={},f=t.maxTextureSize,h={[Dr]:gi,[gi]:Dr,[fr]:fr},d=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:zE,fragmentShader:HE}),v=d.clone();v.defines.HORIZONTAL_PASS=1;const y=new Oi;y.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new si(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mm;let _=this.type;this.render=function(H,te,X){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||H.length===0)return;const Le=i.getRenderTarget(),L=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Te=i.state;Te.setBlending(Cr),Te.buffers.color.setClear(1,1,1,1),Te.buffers.depth.setTest(!0),Te.setScissorTest(!1);const We=_!==cr&&this.type===cr,O=_===cr&&this.type!==cr;for(let b=0,F=H.length;b<F;b++){const N=H[b],j=N.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ue=j.getFrameExtents();if(r.multiply(ue),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ue.x),r.x=s.x*ue.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ue.y),r.y=s.y*ue.y,j.mapSize.y=s.y)),j.map===null||We===!0||O===!0){const ge=this.type!==cr?{minFilter:ai,magFilter:ai}:{};j.map!==null&&j.map.dispose(),j.map=new la(r.x,r.y,ge),j.map.texture.name=N.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const fe=j.getViewportCount();for(let ge=0;ge<fe;ge++){const q=j.getViewport(ge);l.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),Te.viewport(l),j.updateMatrices(N,ge),n=j.getFrustum(),B(te,X,j.camera,N,this.type)}j.isPointLightShadow!==!0&&this.type===cr&&D(j,X),j.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(Le,L,W)};function D(H,te){const X=e.update(S);d.defines.VSM_SAMPLES!==H.blurSamples&&(d.defines.VSM_SAMPLES=H.blurSamples,v.defines.VSM_SAMPLES=H.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new la(r.x,r.y)),d.uniforms.shadow_pass.value=H.map.texture,d.uniforms.resolution.value=H.mapSize,d.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(te,null,X,d,S,null),v.uniforms.shadow_pass.value=H.mapPass.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(te,null,X,v,S,null)}function E(H,te,X,Le){let L=null;const W=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(W!==void 0)L=W;else if(L=X.isPointLight===!0?c:o,i.localClippingEnabled&&te.clipShadows===!0&&Array.isArray(te.clippingPlanes)&&te.clippingPlanes.length!==0||te.displacementMap&&te.displacementScale!==0||te.alphaMap&&te.alphaTest>0||te.map&&te.alphaTest>0){const Te=L.uuid,We=te.uuid;let O=u[Te];O===void 0&&(O={},u[Te]=O);let b=O[We];b===void 0&&(b=L.clone(),O[We]=b),L=b}if(L.visible=te.visible,L.wireframe=te.wireframe,Le===cr?L.side=te.shadowSide!==null?te.shadowSide:te.side:L.side=te.shadowSide!==null?te.shadowSide:h[te.side],L.alphaMap=te.alphaMap,L.alphaTest=te.alphaTest,L.map=te.map,L.clipShadows=te.clipShadows,L.clippingPlanes=te.clippingPlanes,L.clipIntersection=te.clipIntersection,L.displacementMap=te.displacementMap,L.displacementScale=te.displacementScale,L.displacementBias=te.displacementBias,L.wireframeLinewidth=te.wireframeLinewidth,L.linewidth=te.linewidth,X.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Te=i.properties.get(L);Te.light=X}return L}function B(H,te,X,Le,L){if(H.visible===!1)return;if(H.layers.test(te.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&L===cr)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const We=e.update(H),O=H.material;if(Array.isArray(O)){const b=We.groups;for(let F=0,N=b.length;F<N;F++){const j=b[F],ue=O[j.materialIndex];if(ue&&ue.visible){const fe=E(H,ue,Le,L);i.renderBufferDirect(X,null,We,fe,H,j)}}}else if(O.visible){const b=E(H,O,Le,L);i.renderBufferDirect(X,null,We,b,H,null)}}const Te=H.children;for(let We=0,O=Te.length;We<O;We++)B(Te[We],te,X,Le,L)}}function WE(i,e,t){const n=t.isWebGL2;function r(){let Y=!1;const st=new ni;let rt=null;const ft=new ni(0,0,0,0);return{setMask:function(ot){rt!==ot&&!Y&&(i.colorMask(ot,ot,ot,ot),rt=ot)},setLocked:function(ot){Y=ot},setClear:function(ot,Ye,St,kt,fn){fn===!0&&(ot*=kt,Ye*=kt,St*=kt),st.set(ot,Ye,St,kt),ft.equals(st)===!1&&(i.clearColor(ot,Ye,St,kt),ft.copy(st))},reset:function(){Y=!1,rt=null,ft.set(-1,0,0,0)}}}function s(){let Y=!1,st=null,rt=null,ft=null;return{setTest:function(ot){ot?Rt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!Y&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(rt!==ot){switch(ot){case e0:i.depthFunc(i.NEVER);break;case t0:i.depthFunc(i.ALWAYS);break;case n0:i.depthFunc(i.LESS);break;case zu:i.depthFunc(i.LEQUAL);break;case i0:i.depthFunc(i.EQUAL);break;case r0:i.depthFunc(i.GEQUAL);break;case a0:i.depthFunc(i.GREATER);break;case s0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=ot}},setLocked:function(ot){Y=ot},setClear:function(ot){ft!==ot&&(i.clearDepth(ot),ft=ot)},reset:function(){Y=!1,st=null,rt=null,ft=null}}}function l(){let Y=!1,st=null,rt=null,ft=null,ot=null,Ye=null,St=null,kt=null,fn=null;return{setTest:function(gn){Y||(gn?Rt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(gn){st!==gn&&!Y&&(i.stencilMask(gn),st=gn)},setFunc:function(gn,Ai,Qn){(rt!==gn||ft!==Ai||ot!==Qn)&&(i.stencilFunc(gn,Ai,Qn),rt=gn,ft=Ai,ot=Qn)},setOp:function(gn,Ai,Qn){(Ye!==gn||St!==Ai||kt!==Qn)&&(i.stencilOp(gn,Ai,Qn),Ye=gn,St=Ai,kt=Qn)},setLocked:function(gn){Y=gn},setClear:function(gn){fn!==gn&&(i.clearStencil(gn),fn=gn)},reset:function(){Y=!1,st=null,rt=null,ft=null,ot=null,Ye=null,St=null,kt=null,fn=null}}}const o=new r,c=new s,u=new l,f=new WeakMap,h=new WeakMap;let d={},v={},y=new WeakMap,S=[],g=null,_=!1,D=null,E=null,B=null,H=null,te=null,X=null,Le=null,L=!1,W=null,Te=null,We=null,O=null,b=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,j=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ue)[1]),N=j>=1):ue.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),N=j>=2);let fe=null,ge={};const q=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Ie=new ni().fromArray(q),et=new ni().fromArray(se);function Ge(Y,st,rt,ft){const ot=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(Y,Ye),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<rt;St++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(st,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(st+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return Ye}const xt={};xt[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xt[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Rt(i.DEPTH_TEST),c.setFunc(zu),zt(!1),vn(hd),Rt(i.CULL_FACE),Ot(Cr);function Rt(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function gt(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function tn(Y,st){return v[Y]!==st?(i.bindFramebuffer(Y,st),v[Y]=st,n&&(Y===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=st),Y===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=st)),!0):!1}function nn(Y,st){let rt=S,ft=!1;if(Y)if(rt=y.get(st),rt===void 0&&(rt=[],y.set(st,rt)),Y.isWebGLMultipleRenderTargets){const ot=Y.texture;if(rt.length!==ot.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,St=ot.length;Ye<St;Ye++)rt[Ye]=i.COLOR_ATTACHMENT0+Ye;rt.length=ot.length,ft=!0}}else rt[0]!==i.COLOR_ATTACHMENT0&&(rt[0]=i.COLOR_ATTACHMENT0,ft=!0);else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&(t.isWebGL2?i.drawBuffers(rt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ct(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}const le={[rs]:i.FUNC_ADD,[Vg]:i.FUNC_SUBTRACT,[Wg]:i.FUNC_REVERSE_SUBTRACT};if(n)le[_d]=i.MIN,le[vd]=i.MAX;else{const Y=e.get("EXT_blend_minmax");Y!==null&&(le[_d]=Y.MIN_EXT,le[vd]=Y.MAX_EXT)}const dn={[Xg]:i.ZERO,[Yg]:i.ONE,[jg]:i.SRC_COLOR,[_m]:i.SRC_ALPHA,[Qg]:i.SRC_ALPHA_SATURATE,[Kg]:i.DST_COLOR,[$g]:i.DST_ALPHA,[qg]:i.ONE_MINUS_SRC_COLOR,[vm]:i.ONE_MINUS_SRC_ALPHA,[Jg]:i.ONE_MINUS_DST_COLOR,[Zg]:i.ONE_MINUS_DST_ALPHA};function Ot(Y,st,rt,ft,ot,Ye,St,kt){if(Y===Cr){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(Rt(i.BLEND),_=!0),Y!==Hg){if(Y!==D||kt!==L){if((E!==rs||te!==rs)&&(i.blendEquation(i.FUNC_ADD),E=rs,te=rs),kt)switch(Y){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.ONE,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case md:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,H=null,X=null,Le=null,D=Y,L=kt}return}ot=ot||st,Ye=Ye||rt,St=St||ft,(st!==E||ot!==te)&&(i.blendEquationSeparate(le[st],le[ot]),E=st,te=ot),(rt!==B||ft!==H||Ye!==X||St!==Le)&&(i.blendFuncSeparate(dn[rt],dn[ft],dn[Ye],dn[St]),B=rt,H=ft,X=Ye,Le=St),D=Y,L=!1}function Yt(Y,st){Y.side===fr?gt(i.CULL_FACE):Rt(i.CULL_FACE);let rt=Y.side===gi;st&&(rt=!rt),zt(rt),Y.blending===fs&&Y.transparent===!1?Ot(Cr):Ot(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const ft=Y.stencilWrite;u.setTest(ft),ft&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),$t(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Rt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(Y){W!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),W=Y)}function vn(Y){Y!==Gg?(Rt(i.CULL_FACE),Y!==Te&&(Y===hd?i.cullFace(i.BACK):Y===kg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),Te=Y}function It(Y){Y!==We&&(N&&i.lineWidth(Y),We=Y)}function $t(Y,st,rt){Y?(Rt(i.POLYGON_OFFSET_FILL),(O!==st||b!==rt)&&(i.polygonOffset(st,rt),O=st,b=rt)):gt(i.POLYGON_OFFSET_FILL)}function an(Y){Y?Rt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function In(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),fe!==Y&&(i.activeTexture(Y),fe=Y)}function kn(Y,st,rt){rt===void 0&&(fe===null?rt=i.TEXTURE0+F-1:rt=fe);let ft=ge[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ge[rt]=ft),(ft.type!==Y||ft.texture!==st)&&(fe!==rt&&(i.activeTexture(rt),fe=rt),i.bindTexture(Y,st||xt[Y]),ft.type=Y,ft.texture=st)}function p(){const Y=ge[fe];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ke(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Je(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(Y){Ie.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ie.copy(Y))}function bt(Y){et.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),et.copy(Y))}function Tt(Y,st){let rt=h.get(st);rt===void 0&&(rt=new WeakMap,h.set(st,rt));let ft=rt.get(Y);ft===void 0&&(ft=i.getUniformBlockIndex(st,Y.name),rt.set(Y,ft))}function Lt(Y,st){const ft=h.get(st).get(Y);f.get(st)!==ft&&(i.uniformBlockBinding(st,ft,Y.__bindingPointIndex),f.set(st,ft))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},fe=null,ge={},v={},y=new WeakMap,S=[],g=null,_=!1,D=null,E=null,B=null,H=null,te=null,X=null,Le=null,L=!1,W=null,Te=null,We=null,O=null,b=null,Ie.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Rt,disable:gt,bindFramebuffer:tn,drawBuffers:nn,useProgram:Ct,setBlending:Ot,setMaterial:Yt,setFlipSided:zt,setCullFace:vn,setLineWidth:It,setPolygonOffset:$t,setScissorTest:an,activeTexture:In,bindTexture:kn,unbindTexture:p,compressedTexImage2D:A,compressedTexImage3D:ye,texImage2D:$,texImage3D:it,updateUBOMapping:Tt,uniformBlockBinding:Lt,texStorage2D:nt,texStorage3D:dt,texSubImage2D:tt,texSubImage3D:Ke,compressedTexSubImage2D:Je,compressedTexSubImage3D:Mt,scissor:ze,viewport:bt,reset:At}}function XE(i,e,t,n,r,s,l){const o=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let S;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(p,A){return _?new OffscreenCanvas(p,A):vo("canvas")}function E(p,A,ye,tt){let Ke=1;if((p.width>tt||p.height>tt)&&(Ke=tt/Math.max(p.width,p.height)),Ke<1||A===!0)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap){const Je=A?Hl:Math.floor,Mt=Je(Ke*p.width),nt=Je(Ke*p.height);S===void 0&&(S=D(Mt,nt));const dt=ye?D(Mt,nt):S;return dt.width=Mt,dt.height=nt,dt.getContext("2d").drawImage(p,0,0,Mt,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+p.width+"x"+p.height+") to ("+Mt+"x"+nt+")."),dt}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+p.width+"x"+p.height+")."),p;return p}function B(p){return ju(p.width)&&ju(p.height)}function H(p){return o?!1:p.wrapS!==ki||p.wrapT!==ki||p.minFilter!==ai&&p.minFilter!==Si}function te(p,A){return p.generateMipmaps&&A&&p.minFilter!==ai&&p.minFilter!==Si}function X(p){i.generateMipmap(p)}function Le(p,A,ye,tt,Ke=!1){if(o===!1)return A;if(p!==null){if(i[p]!==void 0)return i[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let Je=A;if(A===i.RED&&(ye===i.FLOAT&&(Je=i.R32F),ye===i.HALF_FLOAT&&(Je=i.R16F),ye===i.UNSIGNED_BYTE&&(Je=i.R8)),A===i.RED_INTEGER&&(ye===i.UNSIGNED_BYTE&&(Je=i.R8UI),ye===i.UNSIGNED_SHORT&&(Je=i.R16UI),ye===i.UNSIGNED_INT&&(Je=i.R32UI),ye===i.BYTE&&(Je=i.R8I),ye===i.SHORT&&(Je=i.R16I),ye===i.INT&&(Je=i.R32I)),A===i.RG&&(ye===i.FLOAT&&(Je=i.RG32F),ye===i.HALF_FLOAT&&(Je=i.RG16F),ye===i.UNSIGNED_BYTE&&(Je=i.RG8)),A===i.RGBA){const Mt=Ke?Bl:_n.getTransfer(tt);ye===i.FLOAT&&(Je=i.RGBA32F),ye===i.HALF_FLOAT&&(Je=i.RGBA16F),ye===i.UNSIGNED_BYTE&&(Je=Mt===xn?i.SRGB8_ALPHA8:i.RGBA8),ye===i.UNSIGNED_SHORT_4_4_4_4&&(Je=i.RGBA4),ye===i.UNSIGNED_SHORT_5_5_5_1&&(Je=i.RGB5_A1)}return(Je===i.R16F||Je===i.R32F||Je===i.RG16F||Je===i.RG32F||Je===i.RGBA16F||Je===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Je}function L(p,A,ye){return te(p,ye)===!0||p.isFramebufferTexture&&p.minFilter!==ai&&p.minFilter!==Si?Math.log2(Math.max(A.width,A.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?A.mipmaps.length:1}function W(p){return p===ai||p===gd||p===eu?i.NEAREST:i.LINEAR}function Te(p){const A=p.target;A.removeEventListener("dispose",Te),O(A),A.isVideoTexture&&y.delete(A)}function We(p){const A=p.target;A.removeEventListener("dispose",We),F(A)}function O(p){const A=n.get(p);if(A.__webglInit===void 0)return;const ye=p.source,tt=g.get(ye);if(tt){const Ke=tt[A.__cacheKey];Ke.usedTimes--,Ke.usedTimes===0&&b(p),Object.keys(tt).length===0&&g.delete(ye)}n.remove(p)}function b(p){const A=n.get(p);i.deleteTexture(A.__webglTexture);const ye=p.source,tt=g.get(ye);delete tt[A.__cacheKey],l.memory.textures--}function F(p){const A=p.texture,ye=n.get(p),tt=n.get(A);if(tt.__webglTexture!==void 0&&(i.deleteTexture(tt.__webglTexture),l.memory.textures--),p.depthTexture&&p.depthTexture.dispose(),p.isWebGLCubeRenderTarget)for(let Ke=0;Ke<6;Ke++){if(Array.isArray(ye.__webglFramebuffer[Ke]))for(let Je=0;Je<ye.__webglFramebuffer[Ke].length;Je++)i.deleteFramebuffer(ye.__webglFramebuffer[Ke][Je]);else i.deleteFramebuffer(ye.__webglFramebuffer[Ke]);ye.__webglDepthbuffer&&i.deleteRenderbuffer(ye.__webglDepthbuffer[Ke])}else{if(Array.isArray(ye.__webglFramebuffer))for(let Ke=0;Ke<ye.__webglFramebuffer.length;Ke++)i.deleteFramebuffer(ye.__webglFramebuffer[Ke]);else i.deleteFramebuffer(ye.__webglFramebuffer);if(ye.__webglDepthbuffer&&i.deleteRenderbuffer(ye.__webglDepthbuffer),ye.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ye.__webglMultisampledFramebuffer),ye.__webglColorRenderbuffer)for(let Ke=0;Ke<ye.__webglColorRenderbuffer.length;Ke++)ye.__webglColorRenderbuffer[Ke]&&i.deleteRenderbuffer(ye.__webglColorRenderbuffer[Ke]);ye.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ye.__webglDepthRenderbuffer)}if(p.isWebGLMultipleRenderTargets)for(let Ke=0,Je=A.length;Ke<Je;Ke++){const Mt=n.get(A[Ke]);Mt.__webglTexture&&(i.deleteTexture(Mt.__webglTexture),l.memory.textures--),n.remove(A[Ke])}n.remove(A),n.remove(p)}let N=0;function j(){N=0}function ue(){const p=N;return p>=c&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+c),N+=1,p}function fe(p){const A=[];return A.push(p.wrapS),A.push(p.wrapT),A.push(p.wrapR||0),A.push(p.magFilter),A.push(p.minFilter),A.push(p.anisotropy),A.push(p.internalFormat),A.push(p.format),A.push(p.type),A.push(p.generateMipmaps),A.push(p.premultiplyAlpha),A.push(p.flipY),A.push(p.unpackAlignment),A.push(p.colorSpace),A.join()}function ge(p,A){const ye=n.get(p);if(p.isVideoTexture&&In(p),p.isRenderTargetTexture===!1&&p.version>0&&ye.__version!==p.version){const tt=p.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tn(ye,p,A);return}}t.bindTexture(i.TEXTURE_2D,ye.__webglTexture,i.TEXTURE0+A)}function q(p,A){const ye=n.get(p);if(p.version>0&&ye.__version!==p.version){tn(ye,p,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ye.__webglTexture,i.TEXTURE0+A)}function se(p,A){const ye=n.get(p);if(p.version>0&&ye.__version!==p.version){tn(ye,p,A);return}t.bindTexture(i.TEXTURE_3D,ye.__webglTexture,i.TEXTURE0+A)}function Ie(p,A){const ye=n.get(p);if(p.version>0&&ye.__version!==p.version){nn(ye,p,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture,i.TEXTURE0+A)}const et={[Wu]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},Ge={[ai]:i.NEAREST,[gd]:i.NEAREST_MIPMAP_NEAREST,[eu]:i.NEAREST_MIPMAP_LINEAR,[Si]:i.LINEAR,[p0]:i.LINEAR_MIPMAP_NEAREST,[po]:i.LINEAR_MIPMAP_LINEAR},xt={[R0]:i.NEVER,[I0]:i.ALWAYS,[C0]:i.LESS,[P0]:i.LEQUAL,[L0]:i.EQUAL,[N0]:i.GEQUAL,[D0]:i.GREATER,[O0]:i.NOTEQUAL};function Rt(p,A,ye){if(ye?(i.texParameteri(p,i.TEXTURE_WRAP_S,et[A.wrapS]),i.texParameteri(p,i.TEXTURE_WRAP_T,et[A.wrapT]),(p===i.TEXTURE_3D||p===i.TEXTURE_2D_ARRAY)&&i.texParameteri(p,i.TEXTURE_WRAP_R,et[A.wrapR]),i.texParameteri(p,i.TEXTURE_MAG_FILTER,Ge[A.magFilter]),i.texParameteri(p,i.TEXTURE_MIN_FILTER,Ge[A.minFilter])):(i.texParameteri(p,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(p,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(p===i.TEXTURE_3D||p===i.TEXTURE_2D_ARRAY)&&i.texParameteri(p,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==ki||A.wrapT!==ki)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(p,i.TEXTURE_MAG_FILTER,W(A.magFilter)),i.texParameteri(p,i.TEXTURE_MIN_FILTER,W(A.minFilter)),A.minFilter!==ai&&A.minFilter!==Si&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(p,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(p,i.TEXTURE_COMPARE_FUNC,xt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const tt=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ai||A.minFilter!==eu&&A.minFilter!==po||A.type===Rr&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(p,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function gt(p,A){let ye=!1;p.__webglInit===void 0&&(p.__webglInit=!0,A.addEventListener("dispose",Te));const tt=A.source;let Ke=g.get(tt);Ke===void 0&&(Ke={},g.set(tt,Ke));const Je=fe(A);if(Je!==p.__cacheKey){Ke[Je]===void 0&&(Ke[Je]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,ye=!0),Ke[Je].usedTimes++;const Mt=Ke[p.__cacheKey];Mt!==void 0&&(Ke[p.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(A)),p.__cacheKey=Je,p.__webglTexture=Ke[Je].texture}return ye}function tn(p,A,ye){let tt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=i.TEXTURE_3D);const Ke=gt(p,A),Je=A.source;t.bindTexture(tt,p.__webglTexture,i.TEXTURE0+ye);const Mt=n.get(Je);if(Je.version!==Mt.__version||Ke===!0){t.activeTexture(i.TEXTURE0+ye);const nt=_n.getPrimaries(_n.workingColorSpace),dt=A.colorSpace===Di?null:_n.getPrimaries(A.colorSpace),$=A.colorSpace===Di||nt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const it=H(A)&&B(A.image)===!1;let ze=E(A.image,it,!1,f);ze=kn(A,ze);const bt=B(ze)||o,Tt=s.convert(A.format,A.colorSpace);let Lt=s.convert(A.type),At=Le(A.internalFormat,Tt,Lt,A.colorSpace,A.isVideoTexture);Rt(tt,A,bt);let Y;const st=A.mipmaps,rt=o&&A.isVideoTexture!==!0,ft=Mt.__version===void 0||Ke===!0,ot=L(A,ze,bt);if(A.isDepthTexture)At=i.DEPTH_COMPONENT,o?A.type===Rr?At=i.DEPTH_COMPONENT32F:A.type===wr?At=i.DEPTH_COMPONENT24:A.type===ra?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:A.type===Rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===aa&&At===i.DEPTH_COMPONENT&&A.type!==sf&&A.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=wr,Lt=s.convert(A.type)),A.format===_s&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,A.type!==ra&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ra,Lt=s.convert(A.type))),ft&&(rt?t.texStorage2D(i.TEXTURE_2D,1,At,ze.width,ze.height):t.texImage2D(i.TEXTURE_2D,0,At,ze.width,ze.height,0,Tt,Lt,null));else if(A.isDataTexture)if(st.length>0&&bt){rt&&ft&&t.texStorage2D(i.TEXTURE_2D,ot,At,st[0].width,st[0].height);for(let Ye=0,St=st.length;Ye<St;Ye++)Y=st[Ye],rt?t.texSubImage2D(i.TEXTURE_2D,Ye,0,0,Y.width,Y.height,Tt,Lt,Y.data):t.texImage2D(i.TEXTURE_2D,Ye,At,Y.width,Y.height,0,Tt,Lt,Y.data);A.generateMipmaps=!1}else rt?(ft&&t.texStorage2D(i.TEXTURE_2D,ot,At,ze.width,ze.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze.width,ze.height,Tt,Lt,ze.data)):t.texImage2D(i.TEXTURE_2D,0,At,ze.width,ze.height,0,Tt,Lt,ze.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,At,st[0].width,st[0].height,ze.depth);for(let Ye=0,St=st.length;Ye<St;Ye++)Y=st[Ye],A.format!==zi?Tt!==null?rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ye,0,0,0,Y.width,Y.height,ze.depth,Tt,Y.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ye,At,Y.width,Y.height,ze.depth,0,Y.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ye,0,0,0,Y.width,Y.height,ze.depth,Tt,Lt,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ye,At,Y.width,Y.height,ze.depth,0,Tt,Lt,Y.data)}else{rt&&ft&&t.texStorage2D(i.TEXTURE_2D,ot,At,st[0].width,st[0].height);for(let Ye=0,St=st.length;Ye<St;Ye++)Y=st[Ye],A.format!==zi?Tt!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ye,0,0,Y.width,Y.height,Tt,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,Ye,At,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(i.TEXTURE_2D,Ye,0,0,Y.width,Y.height,Tt,Lt,Y.data):t.texImage2D(i.TEXTURE_2D,Ye,At,Y.width,Y.height,0,Tt,Lt,Y.data)}else if(A.isDataArrayTexture)rt?(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,At,ze.width,ze.height,ze.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ze.width,ze.height,ze.depth,Tt,Lt,ze.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,At,ze.width,ze.height,ze.depth,0,Tt,Lt,ze.data);else if(A.isData3DTexture)rt?(ft&&t.texStorage3D(i.TEXTURE_3D,ot,At,ze.width,ze.height,ze.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ze.width,ze.height,ze.depth,Tt,Lt,ze.data)):t.texImage3D(i.TEXTURE_3D,0,At,ze.width,ze.height,ze.depth,0,Tt,Lt,ze.data);else if(A.isFramebufferTexture){if(ft)if(rt)t.texStorage2D(i.TEXTURE_2D,ot,At,ze.width,ze.height);else{let Ye=ze.width,St=ze.height;for(let kt=0;kt<ot;kt++)t.texImage2D(i.TEXTURE_2D,kt,At,Ye,St,0,Tt,Lt,null),Ye>>=1,St>>=1}}else if(st.length>0&&bt){rt&&ft&&t.texStorage2D(i.TEXTURE_2D,ot,At,st[0].width,st[0].height);for(let Ye=0,St=st.length;Ye<St;Ye++)Y=st[Ye],rt?t.texSubImage2D(i.TEXTURE_2D,Ye,0,0,Tt,Lt,Y):t.texImage2D(i.TEXTURE_2D,Ye,At,Tt,Lt,Y);A.generateMipmaps=!1}else rt?(ft&&t.texStorage2D(i.TEXTURE_2D,ot,At,ze.width,ze.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Lt,ze)):t.texImage2D(i.TEXTURE_2D,0,At,Tt,Lt,ze);te(A,bt)&&X(tt),Mt.__version=Je.version,A.onUpdate&&A.onUpdate(A)}p.__version=A.version}function nn(p,A,ye){if(A.image.length!==6)return;const tt=gt(p,A),Ke=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,p.__webglTexture,i.TEXTURE0+ye);const Je=n.get(Ke);if(Ke.version!==Je.__version||tt===!0){t.activeTexture(i.TEXTURE0+ye);const Mt=_n.getPrimaries(_n.workingColorSpace),nt=A.colorSpace===Di?null:_n.getPrimaries(A.colorSpace),dt=A.colorSpace===Di||Mt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const $=A.isCompressedTexture||A.image[0].isCompressedTexture,it=A.image[0]&&A.image[0].isDataTexture,ze=[];for(let Ye=0;Ye<6;Ye++)!$&&!it?ze[Ye]=E(A.image[Ye],!1,!0,u):ze[Ye]=it?A.image[Ye].image:A.image[Ye],ze[Ye]=kn(A,ze[Ye]);const bt=ze[0],Tt=B(bt)||o,Lt=s.convert(A.format,A.colorSpace),At=s.convert(A.type),Y=Le(A.internalFormat,Lt,At,A.colorSpace),st=o&&A.isVideoTexture!==!0,rt=Je.__version===void 0||tt===!0;let ft=L(A,bt,Tt);Rt(i.TEXTURE_CUBE_MAP,A,Tt);let ot;if($){st&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Y,bt.width,bt.height);for(let Ye=0;Ye<6;Ye++){ot=ze[Ye].mipmaps;for(let St=0;St<ot.length;St++){const kt=ot[St];A.format!==zi?Lt!==null?st?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,0,0,kt.width,kt.height,Lt,kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,Y,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,0,0,kt.width,kt.height,Lt,At,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St,Y,kt.width,kt.height,0,Lt,At,kt.data)}}}else{ot=A.mipmaps,st&&rt&&(ot.length>0&&ft++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Y,ze[0].width,ze[0].height));for(let Ye=0;Ye<6;Ye++)if(it){st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,ze[Ye].width,ze[Ye].height,Lt,At,ze[Ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,Y,ze[Ye].width,ze[Ye].height,0,Lt,At,ze[Ye].data);for(let St=0;St<ot.length;St++){const fn=ot[St].image[Ye].image;st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,0,0,fn.width,fn.height,Lt,At,fn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,Y,fn.width,fn.height,0,Lt,At,fn.data)}}else{st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,0,0,Lt,At,ze[Ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,Y,Lt,At,ze[Ye]);for(let St=0;St<ot.length;St++){const kt=ot[St];st?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,0,0,Lt,At,kt.image[Ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,St+1,Y,Lt,At,kt.image[Ye])}}}te(A,Tt)&&X(i.TEXTURE_CUBE_MAP),Je.__version=Ke.version,A.onUpdate&&A.onUpdate(A)}p.__version=A.version}function Ct(p,A,ye,tt,Ke,Je){const Mt=s.convert(ye.format,ye.colorSpace),nt=s.convert(ye.type),dt=Le(ye.internalFormat,Mt,nt,ye.colorSpace);if(!n.get(A).__hasExternalTextures){const it=Math.max(1,A.width>>Je),ze=Math.max(1,A.height>>Je);Ke===i.TEXTURE_3D||Ke===i.TEXTURE_2D_ARRAY?t.texImage3D(Ke,Je,dt,it,ze,A.depth,0,Mt,nt,null):t.texImage2D(Ke,Je,dt,it,ze,0,Mt,nt,null)}t.bindFramebuffer(i.FRAMEBUFFER,p),an(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Ke,n.get(ye).__webglTexture,0,$t(A)):(Ke===i.TEXTURE_2D||Ke>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ke<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,Ke,n.get(ye).__webglTexture,Je),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(p,A,ye){if(i.bindRenderbuffer(i.RENDERBUFFER,p),A.depthBuffer&&!A.stencilBuffer){let tt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ye||an(A)){const Ke=A.depthTexture;Ke&&Ke.isDepthTexture&&(Ke.type===Rr?tt=i.DEPTH_COMPONENT32F:Ke.type===wr&&(tt=i.DEPTH_COMPONENT24));const Je=$t(A);an(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,tt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,tt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,tt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,p)}else if(A.depthBuffer&&A.stencilBuffer){const tt=$t(A);ye&&an(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,A.width,A.height):an(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,p)}else{const tt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Ke=0;Ke<tt.length;Ke++){const Je=tt[Ke],Mt=s.convert(Je.format,Je.colorSpace),nt=s.convert(Je.type),dt=Le(Je.internalFormat,Mt,nt,Je.colorSpace),$=$t(A);ye&&an(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,dt,A.width,A.height):an(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,dt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,dt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dn(p,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,p),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge(A.depthTexture,0);const tt=n.get(A.depthTexture).__webglTexture,Ke=$t(A);if(A.depthTexture.format===aa)an(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Ke):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(A.depthTexture.format===_s)an(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Ke):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ot(p){const A=n.get(p),ye=p.isWebGLCubeRenderTarget===!0;if(p.depthTexture&&!A.__autoAllocateDepthBuffer){if(ye)throw new Error("target.depthTexture not supported in Cube render targets");dn(A.__webglFramebuffer,p)}else if(ye){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]=i.createRenderbuffer(),le(A.__webglDepthbuffer[tt],p,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),le(A.__webglDepthbuffer,p,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(p,A,ye){const tt=n.get(p);A!==void 0&&Ct(tt.__webglFramebuffer,p,p.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ye!==void 0&&Ot(p)}function zt(p){const A=p.texture,ye=n.get(p),tt=n.get(A);p.addEventListener("dispose",We),p.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=A.version,l.memory.textures++);const Ke=p.isWebGLCubeRenderTarget===!0,Je=p.isWebGLMultipleRenderTargets===!0,Mt=B(p)||o;if(Ke){ye.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(o&&A.mipmaps&&A.mipmaps.length>0){ye.__webglFramebuffer[nt]=[];for(let dt=0;dt<A.mipmaps.length;dt++)ye.__webglFramebuffer[nt][dt]=i.createFramebuffer()}else ye.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){ye.__webglFramebuffer=[];for(let nt=0;nt<A.mipmaps.length;nt++)ye.__webglFramebuffer[nt]=i.createFramebuffer()}else ye.__webglFramebuffer=i.createFramebuffer();if(Je)if(r.drawBuffers){const nt=p.texture;for(let dt=0,$=nt.length;dt<$;dt++){const it=n.get(nt[dt]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&p.samples>0&&an(p)===!1){const nt=Je?A:[A];ye.__webglMultisampledFramebuffer=i.createFramebuffer(),ye.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const $=nt[dt];ye.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ye.__webglColorRenderbuffer[dt]);const it=s.convert($.format,$.colorSpace),ze=s.convert($.type),bt=Le($.internalFormat,it,ze,$.colorSpace,p.isXRRenderTarget===!0),Tt=$t(p);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,bt,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ye.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),p.depthBuffer&&(ye.__webglDepthRenderbuffer=i.createRenderbuffer(),le(ye.__webglDepthRenderbuffer,p,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ke){t.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Rt(i.TEXTURE_CUBE_MAP,A,Mt);for(let nt=0;nt<6;nt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)Ct(ye.__webglFramebuffer[nt][dt],p,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt);else Ct(ye.__webglFramebuffer[nt],p,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);te(A,Mt)&&X(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){const nt=p.texture;for(let dt=0,$=nt.length;dt<$;dt++){const it=nt[dt],ze=n.get(it);t.bindTexture(i.TEXTURE_2D,ze.__webglTexture),Rt(i.TEXTURE_2D,it,Mt),Ct(ye.__webglFramebuffer,p,it,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),te(it,Mt)&&X(i.TEXTURE_2D)}t.unbindTexture()}else{let nt=i.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(o?nt=p.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(nt,tt.__webglTexture),Rt(nt,A,Mt),o&&A.mipmaps&&A.mipmaps.length>0)for(let dt=0;dt<A.mipmaps.length;dt++)Ct(ye.__webglFramebuffer[dt],p,A,i.COLOR_ATTACHMENT0,nt,dt);else Ct(ye.__webglFramebuffer,p,A,i.COLOR_ATTACHMENT0,nt,0);te(A,Mt)&&X(nt),t.unbindTexture()}p.depthBuffer&&Ot(p)}function vn(p){const A=B(p)||o,ye=p.isWebGLMultipleRenderTargets===!0?p.texture:[p.texture];for(let tt=0,Ke=ye.length;tt<Ke;tt++){const Je=ye[tt];if(te(Je,A)){const Mt=p.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,nt=n.get(Je).__webglTexture;t.bindTexture(Mt,nt),X(Mt),t.unbindTexture()}}}function It(p){if(o&&p.samples>0&&an(p)===!1){const A=p.isWebGLMultipleRenderTargets?p.texture:[p.texture],ye=p.width,tt=p.height;let Ke=i.COLOR_BUFFER_BIT;const Je=[],Mt=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=n.get(p),dt=p.isWebGLMultipleRenderTargets===!0;if(dt)for(let $=0;$<A.length;$++)t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let $=0;$<A.length;$++){Je.push(i.COLOR_ATTACHMENT0+$),p.depthBuffer&&Je.push(Mt);const it=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(it===!1&&(p.depthBuffer&&(Ke|=i.DEPTH_BUFFER_BIT),p.stencilBuffer&&(Ke|=i.STENCIL_BUFFER_BIT)),dt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,nt.__webglColorRenderbuffer[$]),it===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Mt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Mt])),dt){const ze=n.get(A[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,ye,tt,0,0,ye,tt,Ke,i.NEAREST),v&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let $=0;$<A.length;$++){t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,nt.__webglColorRenderbuffer[$]);const it=n.get(A[$]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function $t(p){return Math.min(h,p.samples)}function an(p){const A=n.get(p);return o&&p.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function In(p){const A=l.render.frame;y.get(p)!==A&&(y.set(p,A),p.update())}function kn(p,A){const ye=p.colorSpace,tt=p.format,Ke=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||p.format===Yu||ye!==pr&&ye!==Di&&(_n.getTransfer(ye)===xn?o===!1?e.has("EXT_sRGB")===!0&&tt===zi?(p.format=Yu,p.minFilter=Si,p.generateMipmaps=!1):A=Lm.sRGBToLinear(A):(tt!==zi||Ke!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ye)),A}this.allocateTextureUnit=ue,this.resetTextureUnits=j,this.setTexture2D=ge,this.setTexture2DArray=q,this.setTexture3D=se,this.setTextureCube=Ie,this.rebindTextures=Yt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=vn,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=an}function YE(i,e,t){const n=t.isWebGL2;function r(s,l=Di){let o;const c=_n.getTransfer(l);if(s===Pr)return i.UNSIGNED_BYTE;if(s===bm)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Sm)return i.UNSIGNED_SHORT_5_5_5_1;if(s===m0)return i.BYTE;if(s===_0)return i.SHORT;if(s===sf)return i.UNSIGNED_SHORT;if(s===xm)return i.INT;if(s===wr)return i.UNSIGNED_INT;if(s===Rr)return i.FLOAT;if(s===mo)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===v0)return i.ALPHA;if(s===zi)return i.RGBA;if(s===g0)return i.LUMINANCE;if(s===y0)return i.LUMINANCE_ALPHA;if(s===aa)return i.DEPTH_COMPONENT;if(s===_s)return i.DEPTH_STENCIL;if(s===Yu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===x0)return i.RED;if(s===Em)return i.RED_INTEGER;if(s===b0)return i.RG;if(s===Mm)return i.RG_INTEGER;if(s===Tm)return i.RGBA_INTEGER;if(s===tu||s===nu||s===iu||s===ru)if(c===xn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===tu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===tu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===xd||s===bd||s===Sd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===S0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ed||s===Md)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ed)return c===xn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Md)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Td||s===Ad||s===wd||s===Rd||s===Cd||s===Ld||s===Pd||s===Dd||s===Od||s===Nd||s===Id||s===Ud||s===Fd||s===Bd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Td)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ad)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Od)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ud)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bd)return c===xn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===au||s===Gd||s===kd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===au)return c===xn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===E0||s===zd||s===Hd||s===Vd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===au)return o.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ra?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class jE extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qE={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,l=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,n),_=this._getHandJoint(u,S);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),v=.02,y=.005;u.inputState.pinching&&d>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $E extends pi{constructor(e,t,n,r,s,l,o,c,u,f){if(f=f!==void 0?f:aa,f!==aa&&f!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===aa&&(n=wr),n===void 0&&f===_s&&(n=ra),super(null,r,s,l,o,c,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ai,this.minFilter=c!==void 0?c:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ZE extends ha{constructor(e,t){super();const n=this;let r=null,s=1,l=null,o="local-floor",c=1,u=null,f=null,h=null,d=null,v=null,y=null;const S=t.getContextAttributes();let g=null,_=null;const D=[],E=[],B=new Ei;B.layers.enable(1),B.viewport=new ni;const H=new Ei;H.layers.enable(2),H.viewport=new ni;const te=[B,H],X=new jE;X.layers.enable(1),X.layers.enable(2);let Le=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=D[q];return se===void 0&&(se=new wu,D[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=D[q];return se===void 0&&(se=new wu,D[q]=se),se.getGripSpace()},this.getHand=function(q){let se=D[q];return se===void 0&&(se=new wu,D[q]=se),se.getHandSpace()};function W(q){const se=E.indexOf(q.inputSource);if(se===-1)return;const Ie=D[se];Ie!==void 0&&(Ie.update(q.inputSource,q.frame,u||l),Ie.dispatchEvent({type:q.type,data:q.inputSource}))}function Te(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Te),r.removeEventListener("inputsourceschange",We);for(let q=0;q<D.length;q++){const se=E[q];se!==null&&(E[q]=null,D[q].disconnect(se))}Le=null,L=null,e.setRenderTarget(g),v=null,d=null,h=null,r=null,_=null,ge.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||l},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:v},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Te),r.addEventListener("inputsourceschange",We),S.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:v}),_=new la(v.framebufferWidth,v.framebufferHeight,{format:zi,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let se=null,Ie=null,et=null;S.depth&&(et=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=S.stencil?_s:aa,Ie=S.stencil?ra:wr);const Ge={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),_=new la(d.textureWidth,d.textureHeight,{format:zi,type:Pr,depthTexture:new $E(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const xt=e.properties.get(_);xt.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(c),u=null,l=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function We(q){for(let se=0;se<q.removed.length;se++){const Ie=q.removed[se],et=E.indexOf(Ie);et>=0&&(E[et]=null,D[et].disconnect(Ie))}for(let se=0;se<q.added.length;se++){const Ie=q.added[se];let et=E.indexOf(Ie);if(et===-1){for(let xt=0;xt<D.length;xt++)if(xt>=E.length){E.push(Ie),et=xt;break}else if(E[xt]===null){E[xt]=Ie,et=xt;break}if(et===-1)break}const Ge=D[et];Ge&&Ge.connect(Ie)}}const O=new ne,b=new ne;function F(q,se,Ie){O.setFromMatrixPosition(se.matrixWorld),b.setFromMatrixPosition(Ie.matrixWorld);const et=O.distanceTo(b),Ge=se.projectionMatrix.elements,xt=Ie.projectionMatrix.elements,Rt=Ge[14]/(Ge[10]-1),gt=Ge[14]/(Ge[10]+1),tn=(Ge[9]+1)/Ge[5],nn=(Ge[9]-1)/Ge[5],Ct=(Ge[8]-1)/Ge[0],le=(xt[8]+1)/xt[0],dn=Rt*Ct,Ot=Rt*le,Yt=et/(-Ct+le),zt=Yt*-Ct;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const vn=Rt+Yt,It=gt+Yt,$t=dn-zt,an=Ot+(et-zt),In=tn*gt/It*vn,kn=nn*gt/It*vn;q.projectionMatrix.makePerspective($t,an,In,kn,vn,It),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function N(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;X.near=H.near=B.near=q.near,X.far=H.far=B.far=q.far,(Le!==X.near||L!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),Le=X.near,L=X.far);const se=q.parent,Ie=X.cameras;N(X,se);for(let et=0;et<Ie.length;et++)N(Ie[et],se);Ie.length===2?F(X,B,H):X.projectionMatrix.copy(B.projectionMatrix),j(q,X,se)};function j(q,se,Ie){Ie===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(Ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_o*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&v===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=q)};let ue=null;function fe(q,se){if(f=se.getViewerPose(u||l),y=se,f!==null){const Ie=f.views;v!==null&&(e.setRenderTargetFramebuffer(_,v.framebuffer),e.setRenderTarget(_));let et=!1;Ie.length!==X.cameras.length&&(X.cameras.length=0,et=!0);for(let Ge=0;Ge<Ie.length;Ge++){const xt=Ie[Ge];let Rt=null;if(v!==null)Rt=v.getViewport(xt);else{const tn=h.getViewSubImage(d,xt);Rt=tn.viewport,Ge===0&&(e.setRenderTargetTextures(_,tn.colorTexture,d.ignoreDepthValues?void 0:tn.depthStencilTexture),e.setRenderTarget(_))}let gt=te[Ge];gt===void 0&&(gt=new Ei,gt.layers.enable(Ge),gt.viewport=new ni,te[Ge]=gt),gt.matrix.fromArray(xt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(xt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ge===0&&(X.matrix.copy(gt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),et===!0&&X.cameras.push(gt)}}for(let Ie=0;Ie<D.length;Ie++){const et=E[Ie],Ge=D[Ie];et!==null&&Ge!==void 0&&Ge.update(et,se,u||l)}ue&&ue(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),y=null}const ge=new km;ge.setAnimationLoop(fe),this.setAnimationLoop=function(q){ue=q},this.dispose=function(){}}}function KE(i,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,Fm(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,D,E,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),h(g,_)):_.isMeshPhongMaterial?(s(g,_),f(g,_)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&v(g,_,B)):_.isMeshMatcapMaterial?(s(g,_),y(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),S(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(l(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?c(g,_,D,E):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===gi&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===gi&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const D=e.get(_).envMap;if(D&&(g.envMap.value=D,g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*E,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,D,E){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*D,g.scale.value=E*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function h(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function v(g,_,D){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===gi&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,_){_.matcap&&(g.matcap.value=_.matcap)}function S(g,_){const D=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function JE(i,e,t,n){let r={},s={},l=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(D,E){const B=E.program;n.uniformBlockBinding(D,B)}function u(D,E){let B=r[D.id];B===void 0&&(y(D),B=f(D),r[D.id]=B,D.addEventListener("dispose",g));const H=E.program;n.updateUBOMapping(D,H);const te=e.render.frame;s[D.id]!==te&&(d(D),s[D.id]=te)}function f(D){const E=h();D.__bindingPointIndex=E;const B=i.createBuffer(),H=D.__size,te=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,B),i.bufferData(i.UNIFORM_BUFFER,H,te),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,B),B}function h(){for(let D=0;D<o;D++)if(l.indexOf(D)===-1)return l.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(D){const E=r[D.id],B=D.uniforms,H=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let te=0,X=B.length;te<X;te++){const Le=B[te];if(v(Le,te,H)===!0){const L=Le.__offset,W=Array.isArray(Le.value)?Le.value:[Le.value];let Te=0;for(let We=0;We<W.length;We++){const O=W[We],b=S(O);typeof O=="number"?(Le.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,L+Te,Le.__data)):O.isMatrix3?(Le.__data[0]=O.elements[0],Le.__data[1]=O.elements[1],Le.__data[2]=O.elements[2],Le.__data[3]=O.elements[0],Le.__data[4]=O.elements[3],Le.__data[5]=O.elements[4],Le.__data[6]=O.elements[5],Le.__data[7]=O.elements[0],Le.__data[8]=O.elements[6],Le.__data[9]=O.elements[7],Le.__data[10]=O.elements[8],Le.__data[11]=O.elements[0]):(O.toArray(Le.__data,Te),Te+=b.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,Le.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(D,E,B){const H=D.value;if(B[E]===void 0){if(typeof H=="number")B[E]=H;else{const te=Array.isArray(H)?H:[H],X=[];for(let Le=0;Le<te.length;Le++)X.push(te[Le].clone());B[E]=X}return!0}else if(typeof H=="number"){if(B[E]!==H)return B[E]=H,!0}else{const te=Array.isArray(B[E])?B[E]:[B[E]],X=Array.isArray(H)?H:[H];for(let Le=0;Le<te.length;Le++){const L=te[Le];if(L.equals(X[Le])===!1)return L.copy(X[Le]),!0}}return!1}function y(D){const E=D.uniforms;let B=0;const H=16;let te=0;for(let X=0,Le=E.length;X<Le;X++){const L=E[X],W={boundary:0,storage:0},Te=Array.isArray(L.value)?L.value:[L.value];for(let We=0,O=Te.length;We<O;We++){const b=Te[We],F=S(b);W.boundary+=F.boundary,W.storage+=F.storage}if(L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=B,X>0){te=B%H;const We=H-te;te!==0&&We-W.boundary<0&&(B+=H-te,L.__offset=B)}B+=W.storage}return te=B%H,te>0&&(B+=H-te),D.__size=B,D.__cache={},this}function S(D){const E={boundary:0,storage:0};return typeof D=="number"?(E.boundary=4,E.storage=4):D.isVector2?(E.boundary=8,E.storage=8):D.isVector3||D.isColor?(E.boundary=16,E.storage=12):D.isVector4?(E.boundary=16,E.storage=16):D.isMatrix3?(E.boundary=48,E.storage=48):D.isMatrix4?(E.boundary=64,E.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),E}function g(D){const E=D.target;E.removeEventListener("dispose",g);const B=l.indexOf(E.__bindingPointIndex);l.splice(B,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function _(){for(const D in r)i.deleteBuffer(r[D]);l=[],r={},s={}}return{bind:c,update:u,dispose:_}}class Xm{constructor(e={}){const{canvas:t=Z0(),context:n=null,depth:r=!0,stencil:s=!0,alpha:l=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=l;const v=new Uint32Array(4),y=new Int32Array(4);let S=null,g=null;const _=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this._useLegacyLights=!1,this.toneMapping=Lr,this.toneMappingExposure=1;const E=this;let B=!1,H=0,te=0,X=null,Le=-1,L=null;const W=new ni,Te=new ni;let We=null;const O=new hn(0);let b=0,F=t.width,N=t.height,j=1,ue=null,fe=null;const ge=new ni(0,0,F,N),q=new ni(0,0,F,N);let se=!1;const Ie=new Gm;let et=!1,Ge=!1,xt=null;const Rt=new Vn,gt=new pt,tn=new ne,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return X===null?j:1}let le=n;function dn(I,pe){for(let Ae=0;Ae<I.length;Ae++){const _e=I[Ae],we=t.getContext(_e,pe);if(we!==null)return we}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${af}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",ft,!1),le===null){const pe=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&pe.shift(),le=dn(pe,I),le===null)throw dn(pe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&le instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),le.getShaderPrecisionFormat===void 0&&(le.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ot,Yt,zt,vn,It,$t,an,In,kn,p,A,ye,tt,Ke,Je,Mt,nt,dt,$,it,ze,bt,Tt,Lt;function At(){Ot=new cS(le),Yt=new nS(le,Ot,e),Ot.init(Yt),bt=new YE(le,Ot,Yt),zt=new WE(le,Ot,Yt),vn=new hS(le),It=new LE,$t=new XE(le,Ot,zt,It,Yt,bt,vn),an=new rS(E),In=new lS(E),kn=new by(le,Yt),Tt=new eS(le,Ot,kn,Yt),p=new uS(le,kn,vn,Tt),A=new _S(le,p,kn,vn),$=new mS(le,Yt,$t),Mt=new iS(It),ye=new CE(E,an,In,Ot,Yt,Tt,Mt),tt=new KE(E,It),Ke=new DE,Je=new BE(Ot,Yt),dt=new Qb(E,an,In,zt,A,d,c),nt=new VE(E,A,Yt),Lt=new JE(le,vn,Yt,zt),it=new tS(le,Ot,vn,Yt),ze=new fS(le,Ot,vn,Yt),vn.programs=ye.programs,E.capabilities=Yt,E.extensions=Ot,E.properties=It,E.renderLists=Ke,E.shadowMap=nt,E.state=zt,E.info=vn}At();const Y=new ZE(E,le);this.xr=Y,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){const I=Ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(I){I!==void 0&&(j=I,this.setSize(F,N,!1))},this.getSize=function(I){return I.set(F,N)},this.setSize=function(I,pe,Ae=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,N=pe,t.width=Math.floor(I*j),t.height=Math.floor(pe*j),Ae===!0&&(t.style.width=I+"px",t.style.height=pe+"px"),this.setViewport(0,0,I,pe)},this.getDrawingBufferSize=function(I){return I.set(F*j,N*j).floor()},this.setDrawingBufferSize=function(I,pe,Ae){F=I,N=pe,j=Ae,t.width=Math.floor(I*Ae),t.height=Math.floor(pe*Ae),this.setViewport(0,0,I,pe)},this.getCurrentViewport=function(I){return I.copy(W)},this.getViewport=function(I){return I.copy(ge)},this.setViewport=function(I,pe,Ae,_e){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,pe,Ae,_e),zt.viewport(W.copy(ge).multiplyScalar(j).floor())},this.getScissor=function(I){return I.copy(q)},this.setScissor=function(I,pe,Ae,_e){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,pe,Ae,_e),zt.scissor(Te.copy(q).multiplyScalar(j).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(I){zt.setScissorTest(se=I)},this.setOpaqueSort=function(I){ue=I},this.setTransparentSort=function(I){fe=I},this.getClearColor=function(I){return I.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(I=!0,pe=!0,Ae=!0){let _e=0;if(I){let we=!1;if(X!==null){const vt=X.texture.format;we=vt===Tm||vt===Mm||vt===Em}if(we){const vt=X.texture.type,Ut=vt===Pr||vt===wr||vt===sf||vt===ra||vt===bm||vt===Sm,Wt=dt.getClearColor(),Xt=dt.getClearAlpha(),rn=Wt.r,Ht=Wt.g,Jt=Wt.b;Ut?(v[0]=rn,v[1]=Ht,v[2]=Jt,v[3]=Xt,le.clearBufferuiv(le.COLOR,0,v)):(y[0]=rn,y[1]=Ht,y[2]=Jt,y[3]=Xt,le.clearBufferiv(le.COLOR,0,y))}else _e|=le.COLOR_BUFFER_BIT}pe&&(_e|=le.DEPTH_BUFFER_BIT),Ae&&(_e|=le.STENCIL_BUFFER_BIT),le.clear(_e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Ke.dispose(),Je.dispose(),It.dispose(),an.dispose(),In.dispose(),A.dispose(),Tt.dispose(),Lt.dispose(),ye.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",gn),Y.removeEventListener("sessionend",Ai),xt&&(xt.dispose(),xt=null),Qn.stop()};function st(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const I=vn.autoReset,pe=nt.enabled,Ae=nt.autoUpdate,_e=nt.needsUpdate,we=nt.type;At(),vn.autoReset=I,nt.enabled=pe,nt.autoUpdate=Ae,nt.needsUpdate=_e,nt.type=we}function ft(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ot(I){const pe=I.target;pe.removeEventListener("dispose",ot),Ye(pe)}function Ye(I){St(I),It.remove(I)}function St(I){const pe=It.get(I).programs;pe!==void 0&&(pe.forEach(function(Ae){ye.releaseProgram(Ae)}),I.isShaderMaterial&&ye.releaseShaderCache(I))}this.renderBufferDirect=function(I,pe,Ae,_e,we,vt){pe===null&&(pe=nn);const Ut=we.isMesh&&we.matrixWorld.determinant()<0,Wt=bn(I,pe,Ae,_e,we);zt.setMaterial(_e,Ut);let Xt=Ae.index,rn=1;if(_e.wireframe===!0){if(Xt=p.getWireframeAttribute(Ae),Xt===void 0)return;rn=2}const Ht=Ae.drawRange,Jt=Ae.attributes.position;let Sn=Ht.start*rn,Mn=(Ht.start+Ht.count)*rn;vt!==null&&(Sn=Math.max(Sn,vt.start*rn),Mn=Math.min(Mn,(vt.start+vt.count)*rn)),Xt!==null?(Sn=Math.max(Sn,0),Mn=Math.min(Mn,Xt.count)):Jt!=null&&(Sn=Math.max(Sn,0),Mn=Math.min(Mn,Jt.count));const _i=Mn-Sn;if(_i<0||_i===1/0)return;Tt.setup(we,_e,Wt,Ae,Xt);let Ni,Cn=it;if(Xt!==null&&(Ni=kn.get(Xt),Cn=ze,Cn.setIndex(Ni)),we.isMesh)_e.wireframe===!0?(zt.setLineWidth(_e.wireframeLinewidth*Ct()),Cn.setMode(le.LINES)):Cn.setMode(le.TRIANGLES);else if(we.isLine){let sn=_e.linewidth;sn===void 0&&(sn=1),zt.setLineWidth(sn*Ct()),we.isLineSegments?Cn.setMode(le.LINES):we.isLineLoop?Cn.setMode(le.LINE_LOOP):Cn.setMode(le.LINE_STRIP)}else we.isPoints?Cn.setMode(le.POINTS):we.isSprite&&Cn.setMode(le.TRIANGLES);if(we.isInstancedMesh)Cn.renderInstances(Sn,_i,we.count);else if(Ae.isInstancedBufferGeometry){const sn=Ae._maxInstanceCount!==void 0?Ae._maxInstanceCount:1/0,Ts=Math.min(Ae.instanceCount,sn);Cn.renderInstances(Sn,_i,Ts)}else Cn.render(Sn,_i)},this.compile=function(I,pe){function Ae(_e,we,vt){_e.transparent===!0&&_e.side===fr&&_e.forceSinglePass===!1?(_e.side=gi,_e.needsUpdate=!0,Ur(_e,we,vt),_e.side=Dr,_e.needsUpdate=!0,Ur(_e,we,vt),_e.side=fr):Ur(_e,we,vt)}g=Je.get(I),g.init(),D.push(g),I.traverseVisible(function(_e){_e.isLight&&_e.layers.test(pe.layers)&&(g.pushLight(_e),_e.castShadow&&g.pushShadow(_e))}),g.setupLights(E._useLegacyLights),I.traverse(function(_e){const we=_e.material;if(we)if(Array.isArray(we))for(let vt=0;vt<we.length;vt++){const Ut=we[vt];Ae(Ut,I,_e)}else Ae(we,I,_e)}),D.pop(),g=null};let kt=null;function fn(I){kt&&kt(I)}function gn(){Qn.stop()}function Ai(){Qn.start()}const Qn=new km;Qn.setAnimationLoop(fn),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(I){kt=I,Y.setAnimationLoop(I),I===null?Qn.stop():Qn.start()},Y.addEventListener("sessionstart",gn),Y.addEventListener("sessionend",Ai),this.render=function(I,pe){if(pe!==void 0&&pe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),pe.parent===null&&pe.matrixWorldAutoUpdate===!0&&pe.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(pe),pe=Y.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,pe,X),g=Je.get(I,D.length),g.init(),D.push(g),Rt.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),Ie.setFromProjectionMatrix(Rt),Ge=this.localClippingEnabled,et=Mt.init(this.clippingPlanes,Ge),S=Ke.get(I,_.length),S.init(),_.push(S),Mo(I,pe,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(ue,fe),this.info.render.frame++,et===!0&&Mt.beginShadows();const Ae=g.state.shadowsArray;if(nt.render(Ae,I,pe),et===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),dt.render(S,I),g.setupLights(E._useLegacyLights),pe.isArrayCamera){const _e=pe.cameras;for(let we=0,vt=_e.length;we<vt;we++){const Ut=_e[we];To(S,I,Ut,Ut.viewport)}}else To(S,I,pe);X!==null&&($t.updateMultisampleRenderTarget(X),$t.updateRenderTargetMipmap(X)),I.isScene===!0&&I.onAfterRender(E,I,pe),Tt.resetDefaultState(),Le=-1,L=null,D.pop(),D.length>0?g=D[D.length-1]:g=null,_.pop(),_.length>0?S=_[_.length-1]:S=null};function Mo(I,pe,Ae,_e){if(I.visible===!1)return;if(I.layers.test(pe.layers)){if(I.isGroup)Ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(pe);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ie.intersectsSprite(I)){_e&&tn.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Rt);const Ut=A.update(I),Wt=I.material;Wt.visible&&S.push(I,Ut,Wt,Ae,tn.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ie.intersectsObject(I))){const Ut=A.update(I),Wt=I.material;if(_e&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),tn.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),tn.copy(Ut.boundingSphere.center)),tn.applyMatrix4(I.matrixWorld).applyMatrix4(Rt)),Array.isArray(Wt)){const Xt=Ut.groups;for(let rn=0,Ht=Xt.length;rn<Ht;rn++){const Jt=Xt[rn],Sn=Wt[Jt.materialIndex];Sn&&Sn.visible&&S.push(I,Ut,Sn,Ae,tn.z,Jt)}}else Wt.visible&&S.push(I,Ut,Wt,Ae,tn.z,null)}}const vt=I.children;for(let Ut=0,Wt=vt.length;Ut<Wt;Ut++)Mo(vt[Ut],pe,Ae,_e)}function To(I,pe,Ae,_e){const we=I.opaque,vt=I.transmissive,Ut=I.transparent;g.setupLightsView(Ae),et===!0&&Mt.setGlobalState(E.clippingPlanes,Ae),vt.length>0&&ic(we,vt,pe,Ae),_e&&zt.viewport(W.copy(_e)),we.length>0&&va(we,pe,Ae),vt.length>0&&va(vt,pe,Ae),Ut.length>0&&va(Ut,pe,Ae),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function ic(I,pe,Ae,_e){const we=Yt.isWebGL2;xt===null&&(xt=new la(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")?mo:Pr,minFilter:po,samples:we?4:0})),E.getDrawingBufferSize(gt),we?xt.setSize(gt.x,gt.y):xt.setSize(Hl(gt.x),Hl(gt.y));const vt=E.getRenderTarget();E.setRenderTarget(xt),E.getClearColor(O),b=E.getClearAlpha(),b<1&&E.setClearColor(16777215,.5),E.clear();const Ut=E.toneMapping;E.toneMapping=Lr,va(I,Ae,_e),$t.updateMultisampleRenderTarget(xt),$t.updateRenderTargetMipmap(xt);let Wt=!1;for(let Xt=0,rn=pe.length;Xt<rn;Xt++){const Ht=pe[Xt],Jt=Ht.object,Sn=Ht.geometry,Mn=Ht.material,_i=Ht.group;if(Mn.side===fr&&Jt.layers.test(_e.layers)){const Ni=Mn.side;Mn.side=gi,Mn.needsUpdate=!0,Ao(Jt,Ae,_e,Sn,Mn,_i),Mn.side=Ni,Mn.needsUpdate=!0,Wt=!0}}Wt===!0&&($t.updateMultisampleRenderTarget(xt),$t.updateRenderTargetMipmap(xt)),E.setRenderTarget(vt),E.setClearColor(O,b),E.toneMapping=Ut}function va(I,pe,Ae){const _e=pe.isScene===!0?pe.overrideMaterial:null;for(let we=0,vt=I.length;we<vt;we++){const Ut=I[we],Wt=Ut.object,Xt=Ut.geometry,rn=_e===null?Ut.material:_e,Ht=Ut.group;Wt.layers.test(Ae.layers)&&Ao(Wt,pe,Ae,Xt,rn,Ht)}}function Ao(I,pe,Ae,_e,we,vt){I.onBeforeRender(E,pe,Ae,_e,we,vt),I.modelViewMatrix.multiplyMatrices(Ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),we.onBeforeRender(E,pe,Ae,_e,I,vt),we.transparent===!0&&we.side===fr&&we.forceSinglePass===!1?(we.side=gi,we.needsUpdate=!0,E.renderBufferDirect(Ae,pe,_e,we,I,vt),we.side=Dr,we.needsUpdate=!0,E.renderBufferDirect(Ae,pe,_e,we,I,vt),we.side=fr):E.renderBufferDirect(Ae,pe,_e,we,I,vt),I.onAfterRender(E,pe,Ae,_e,we,vt)}function Ur(I,pe,Ae){pe.isScene!==!0&&(pe=nn);const _e=It.get(I),we=g.state.lights,vt=g.state.shadowsArray,Ut=we.state.version,Wt=ye.getParameters(I,we.state,vt,pe,Ae),Xt=ye.getProgramCacheKey(Wt);let rn=_e.programs;_e.environment=I.isMeshStandardMaterial?pe.environment:null,_e.fog=pe.fog,_e.envMap=(I.isMeshStandardMaterial?In:an).get(I.envMap||_e.environment),rn===void 0&&(I.addEventListener("dispose",ot),rn=new Map,_e.programs=rn);let Ht=rn.get(Xt);if(Ht!==void 0){if(_e.currentProgram===Ht&&_e.lightsStateVersion===Ut)return Ms(I,Wt),Ht}else Wt.uniforms=ye.getUniforms(I),I.onBuild(Ae,Wt,E),I.onBeforeCompile(Wt,E),Ht=ye.acquireProgram(Wt,Xt),rn.set(Xt,Ht),_e.uniforms=Wt.uniforms;const Jt=_e.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Jt.clippingPlanes=Mt.uniform),Ms(I,Wt),_e.needsLights=ac(I),_e.lightsStateVersion=Ut,_e.needsLights&&(Jt.ambientLightColor.value=we.state.ambient,Jt.lightProbe.value=we.state.probe,Jt.directionalLights.value=we.state.directional,Jt.directionalLightShadows.value=we.state.directionalShadow,Jt.spotLights.value=we.state.spot,Jt.spotLightShadows.value=we.state.spotShadow,Jt.rectAreaLights.value=we.state.rectArea,Jt.ltc_1.value=we.state.rectAreaLTC1,Jt.ltc_2.value=we.state.rectAreaLTC2,Jt.pointLights.value=we.state.point,Jt.pointLightShadows.value=we.state.pointShadow,Jt.hemisphereLights.value=we.state.hemi,Jt.directionalShadowMap.value=we.state.directionalShadowMap,Jt.directionalShadowMatrix.value=we.state.directionalShadowMatrix,Jt.spotShadowMap.value=we.state.spotShadowMap,Jt.spotLightMatrix.value=we.state.spotLightMatrix,Jt.spotLightMap.value=we.state.spotLightMap,Jt.pointShadowMap.value=we.state.pointShadowMap,Jt.pointShadowMatrix.value=we.state.pointShadowMatrix);const Sn=Ht.getUniforms(),Mn=Il.seqWithValue(Sn.seq,Jt);return _e.currentProgram=Ht,_e.uniformsList=Mn,Ht}function Ms(I,pe){const Ae=It.get(I);Ae.outputColorSpace=pe.outputColorSpace,Ae.instancing=pe.instancing,Ae.instancingColor=pe.instancingColor,Ae.skinning=pe.skinning,Ae.morphTargets=pe.morphTargets,Ae.morphNormals=pe.morphNormals,Ae.morphColors=pe.morphColors,Ae.morphTargetsCount=pe.morphTargetsCount,Ae.numClippingPlanes=pe.numClippingPlanes,Ae.numIntersection=pe.numClipIntersection,Ae.vertexAlphas=pe.vertexAlphas,Ae.vertexTangents=pe.vertexTangents,Ae.toneMapping=pe.toneMapping}function bn(I,pe,Ae,_e,we){pe.isScene!==!0&&(pe=nn),$t.resetTextureUnits();const vt=pe.fog,Ut=_e.isMeshStandardMaterial?pe.environment:null,Wt=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:pr,Xt=(_e.isMeshStandardMaterial?In:an).get(_e.envMap||Ut),rn=_e.vertexColors===!0&&!!Ae.attributes.color&&Ae.attributes.color.itemSize===4,Ht=!!Ae.attributes.tangent&&(!!_e.normalMap||_e.anisotropy>0),Jt=!!Ae.morphAttributes.position,Sn=!!Ae.morphAttributes.normal,Mn=!!Ae.morphAttributes.color;let _i=Lr;_e.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(_i=E.toneMapping);const Ni=Ae.morphAttributes.position||Ae.morphAttributes.normal||Ae.morphAttributes.color,Cn=Ni!==void 0?Ni.length:0,sn=It.get(_e),Ts=g.state.lights;if(et===!0&&(Ge===!0||I!==L)){const ci=I===L&&_e.id===Le;Mt.setState(_e,I,ci)}let Ln=!1;_e.version===sn.__version?(sn.needsLights&&sn.lightsStateVersion!==Ts.state.version||sn.outputColorSpace!==Wt||we.isInstancedMesh&&sn.instancing===!1||!we.isInstancedMesh&&sn.instancing===!0||we.isSkinnedMesh&&sn.skinning===!1||!we.isSkinnedMesh&&sn.skinning===!0||we.isInstancedMesh&&sn.instancingColor===!0&&we.instanceColor===null||we.isInstancedMesh&&sn.instancingColor===!1&&we.instanceColor!==null||sn.envMap!==Xt||_e.fog===!0&&sn.fog!==vt||sn.numClippingPlanes!==void 0&&(sn.numClippingPlanes!==Mt.numPlanes||sn.numIntersection!==Mt.numIntersection)||sn.vertexAlphas!==rn||sn.vertexTangents!==Ht||sn.morphTargets!==Jt||sn.morphNormals!==Sn||sn.morphColors!==Mn||sn.toneMapping!==_i||Yt.isWebGL2===!0&&sn.morphTargetsCount!==Cn)&&(Ln=!0):(Ln=!0,sn.__version=_e.version);let er=sn.currentProgram;Ln===!0&&(er=Ur(_e,pe,we));let wo=!1,Fr=!1,As=!1;const ei=er.getUniforms(),wi=sn.uniforms;if(zt.useProgram(er.program)&&(wo=!0,Fr=!0,As=!0),_e.id!==Le&&(Le=_e.id,Fr=!0),wo||L!==I){ei.setValue(le,"projectionMatrix",I.projectionMatrix),ei.setValue(le,"viewMatrix",I.matrixWorldInverse);const ci=ei.map.cameraPosition;ci!==void 0&&ci.setValue(le,tn.setFromMatrixPosition(I.matrixWorld)),Yt.logarithmicDepthBuffer&&ei.setValue(le,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(_e.isMeshPhongMaterial||_e.isMeshToonMaterial||_e.isMeshLambertMaterial||_e.isMeshBasicMaterial||_e.isMeshStandardMaterial||_e.isShaderMaterial)&&ei.setValue(le,"isOrthographic",I.isOrthographicCamera===!0),L!==I&&(L=I,Fr=!0,As=!0)}if(we.isSkinnedMesh){ei.setOptional(le,we,"bindMatrix"),ei.setOptional(le,we,"bindMatrixInverse");const ci=we.skeleton;ci&&(Yt.floatVertexTextures?(ci.boneTexture===null&&ci.computeBoneTexture(),ei.setValue(le,"boneTexture",ci.boneTexture,$t),ei.setValue(le,"boneTextureSize",ci.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ga=Ae.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&Yt.isWebGL2===!0)&&$.update(we,Ae,er),(Fr||sn.receiveShadow!==we.receiveShadow)&&(sn.receiveShadow=we.receiveShadow,ei.setValue(le,"receiveShadow",we.receiveShadow)),_e.isMeshGouraudMaterial&&_e.envMap!==null&&(wi.envMap.value=Xt,wi.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),Fr&&(ei.setValue(le,"toneMappingExposure",E.toneMappingExposure),sn.needsLights&&rc(wi,As),vt&&_e.fog===!0&&tt.refreshFogUniforms(wi,vt),tt.refreshMaterialUniforms(wi,_e,j,N,xt),Il.upload(le,sn.uniformsList,wi,$t)),_e.isShaderMaterial&&_e.uniformsNeedUpdate===!0&&(Il.upload(le,sn.uniformsList,wi,$t),_e.uniformsNeedUpdate=!1),_e.isSpriteMaterial&&ei.setValue(le,"center",we.center),ei.setValue(le,"modelViewMatrix",we.modelViewMatrix),ei.setValue(le,"normalMatrix",we.normalMatrix),ei.setValue(le,"modelMatrix",we.matrixWorld),_e.isShaderMaterial||_e.isRawShaderMaterial){const ci=_e.uniformsGroups;for(let ws=0,Br=ci.length;ws<Br;ws++)if(Yt.isWebGL2){const ya=ci[ws];Lt.update(ya,er),Lt.bind(ya,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function rc(I,pe){I.ambientLightColor.needsUpdate=pe,I.lightProbe.needsUpdate=pe,I.directionalLights.needsUpdate=pe,I.directionalLightShadows.needsUpdate=pe,I.pointLights.needsUpdate=pe,I.pointLightShadows.needsUpdate=pe,I.spotLights.needsUpdate=pe,I.spotLightShadows.needsUpdate=pe,I.rectAreaLights.needsUpdate=pe,I.hemisphereLights.needsUpdate=pe}function ac(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(I,pe,Ae){It.get(I.texture).__webglTexture=pe,It.get(I.depthTexture).__webglTexture=Ae;const _e=It.get(I);_e.__hasExternalTextures=!0,_e.__hasExternalTextures&&(_e.__autoAllocateDepthBuffer=Ae===void 0,_e.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_e.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,pe){const Ae=It.get(I);Ae.__webglFramebuffer=pe,Ae.__useDefaultFramebuffer=pe===void 0},this.setRenderTarget=function(I,pe=0,Ae=0){X=I,H=pe,te=Ae;let _e=!0,we=null,vt=!1,Ut=!1;if(I){const Xt=It.get(I);Xt.__useDefaultFramebuffer!==void 0?(zt.bindFramebuffer(le.FRAMEBUFFER,null),_e=!1):Xt.__webglFramebuffer===void 0?$t.setupRenderTarget(I):Xt.__hasExternalTextures&&$t.rebindTextures(I,It.get(I.texture).__webglTexture,It.get(I.depthTexture).__webglTexture);const rn=I.texture;(rn.isData3DTexture||rn.isDataArrayTexture||rn.isCompressedArrayTexture)&&(Ut=!0);const Ht=It.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[pe])?we=Ht[pe][Ae]:we=Ht[pe],vt=!0):Yt.isWebGL2&&I.samples>0&&$t.useMultisampledRTT(I)===!1?we=It.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?we=Ht[Ae]:we=Ht,W.copy(I.viewport),Te.copy(I.scissor),We=I.scissorTest}else W.copy(ge).multiplyScalar(j).floor(),Te.copy(q).multiplyScalar(j).floor(),We=se;if(zt.bindFramebuffer(le.FRAMEBUFFER,we)&&Yt.drawBuffers&&_e&&zt.drawBuffers(I,we),zt.viewport(W),zt.scissor(Te),zt.setScissorTest(We),vt){const Xt=It.get(I.texture);le.framebufferTexture2D(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,le.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Xt.__webglTexture,Ae)}else if(Ut){const Xt=It.get(I.texture),rn=pe||0;le.framebufferTextureLayer(le.FRAMEBUFFER,le.COLOR_ATTACHMENT0,Xt.__webglTexture,Ae||0,rn)}Le=-1},this.readRenderTargetPixels=function(I,pe,Ae,_e,we,vt,Ut){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=It.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Wt=Wt[Ut]),Wt){zt.bindFramebuffer(le.FRAMEBUFFER,Wt);try{const Xt=I.texture,rn=Xt.format,Ht=Xt.type;if(rn!==zi&&bt.convert(rn)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Jt=Ht===mo&&(Ot.has("EXT_color_buffer_half_float")||Yt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(Ht!==Pr&&bt.convert(Ht)!==le.getParameter(le.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Rr&&(Yt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!Jt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}pe>=0&&pe<=I.width-_e&&Ae>=0&&Ae<=I.height-we&&le.readPixels(pe,Ae,_e,we,bt.convert(rn),bt.convert(Ht),vt)}finally{const Xt=X!==null?It.get(X).__webglFramebuffer:null;zt.bindFramebuffer(le.FRAMEBUFFER,Xt)}}},this.copyFramebufferToTexture=function(I,pe,Ae=0){const _e=Math.pow(2,-Ae),we=Math.floor(pe.image.width*_e),vt=Math.floor(pe.image.height*_e);$t.setTexture2D(pe,0),le.copyTexSubImage2D(le.TEXTURE_2D,Ae,0,0,I.x,I.y,we,vt),zt.unbindTexture()},this.copyTextureToTexture=function(I,pe,Ae,_e=0){const we=pe.image.width,vt=pe.image.height,Ut=bt.convert(Ae.format),Wt=bt.convert(Ae.type);$t.setTexture2D(Ae,0),le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,Ae.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ae.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,Ae.unpackAlignment),pe.isDataTexture?le.texSubImage2D(le.TEXTURE_2D,_e,I.x,I.y,we,vt,Ut,Wt,pe.image.data):pe.isCompressedTexture?le.compressedTexSubImage2D(le.TEXTURE_2D,_e,I.x,I.y,pe.mipmaps[0].width,pe.mipmaps[0].height,Ut,pe.mipmaps[0].data):le.texSubImage2D(le.TEXTURE_2D,_e,I.x,I.y,Ut,Wt,pe.image),_e===0&&Ae.generateMipmaps&&le.generateMipmap(le.TEXTURE_2D),zt.unbindTexture()},this.copyTextureToTexture3D=function(I,pe,Ae,_e,we=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=I.max.x-I.min.x+1,Ut=I.max.y-I.min.y+1,Wt=I.max.z-I.min.z+1,Xt=bt.convert(_e.format),rn=bt.convert(_e.type);let Ht;if(_e.isData3DTexture)$t.setTexture3D(_e,0),Ht=le.TEXTURE_3D;else if(_e.isDataArrayTexture)$t.setTexture2DArray(_e,0),Ht=le.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}le.pixelStorei(le.UNPACK_FLIP_Y_WEBGL,_e.flipY),le.pixelStorei(le.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_e.premultiplyAlpha),le.pixelStorei(le.UNPACK_ALIGNMENT,_e.unpackAlignment);const Jt=le.getParameter(le.UNPACK_ROW_LENGTH),Sn=le.getParameter(le.UNPACK_IMAGE_HEIGHT),Mn=le.getParameter(le.UNPACK_SKIP_PIXELS),_i=le.getParameter(le.UNPACK_SKIP_ROWS),Ni=le.getParameter(le.UNPACK_SKIP_IMAGES),Cn=Ae.isCompressedTexture?Ae.mipmaps[0]:Ae.image;le.pixelStorei(le.UNPACK_ROW_LENGTH,Cn.width),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,Cn.height),le.pixelStorei(le.UNPACK_SKIP_PIXELS,I.min.x),le.pixelStorei(le.UNPACK_SKIP_ROWS,I.min.y),le.pixelStorei(le.UNPACK_SKIP_IMAGES,I.min.z),Ae.isDataTexture||Ae.isData3DTexture?le.texSubImage3D(Ht,we,pe.x,pe.y,pe.z,vt,Ut,Wt,Xt,rn,Cn.data):Ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),le.compressedTexSubImage3D(Ht,we,pe.x,pe.y,pe.z,vt,Ut,Wt,Xt,Cn.data)):le.texSubImage3D(Ht,we,pe.x,pe.y,pe.z,vt,Ut,Wt,Xt,rn,Cn),le.pixelStorei(le.UNPACK_ROW_LENGTH,Jt),le.pixelStorei(le.UNPACK_IMAGE_HEIGHT,Sn),le.pixelStorei(le.UNPACK_SKIP_PIXELS,Mn),le.pixelStorei(le.UNPACK_SKIP_ROWS,_i),le.pixelStorei(le.UNPACK_SKIP_IMAGES,Ni),we===0&&_e.generateMipmaps&&le.generateMipmap(Ht),zt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?$t.setTextureCube(I,0):I.isData3DTexture?$t.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?$t.setTexture2DArray(I,0):$t.setTexture2D(I,0),zt.unbindTexture()},this.resetState=function(){H=0,te=0,X=null,zt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===of?"display-p3":"srgb",t.unpackColorSpace=_n.workingColorSpace===Zl?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ti?sa:Am}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sa?ti:pr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class QE extends Xm{}QE.prototype.isWebGL1Renderer=!0;class eM extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class tM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hi=new ne;class Vl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ym extends da{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new hn(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const qs=new ne,ts=new ne,ns=new ne,is=new pt,$s=new pt,jm=new Vn,El=new ne,Zs=new ne,Ml=new ne,Lp=new pt,Ru=new pt,Pp=new pt;class nM extends mi{constructor(e=new Ym){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Oi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tM(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Vl(n,3,0,!1)),es.setAttribute("uv",new Vl(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new pt(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const l=this.center;Tl(El.set(-.5,-.5,0),ns,l,ts,r,s),Tl(Zs.set(.5,-.5,0),ns,l,ts,r,s),Tl(Ml.set(.5,.5,0),ns,l,ts,r,s),Lp.set(0,0),Ru.set(1,0),Pp.set(1,1);let o=e.ray.intersectTriangle(El,Zs,Ml,!1,qs);if(o===null&&(Tl(Zs.set(-.5,.5,0),ns,l,ts,r,s),Ru.set(0,1),o=e.ray.intersectTriangle(El,Ml,Zs,!1,qs),o===null))return;const c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:Pi.getInterpolation(qs,El,Zs,Ml,Lp,Ru,Pp,new pt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tl(i,e,t,n,r,s){is.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?($s.x=s*is.x-r*is.y,$s.y=r*is.x+s*is.y):$s.copy(is),i.copy(e),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(jm)}class hf extends da{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new hn(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dp=new ne,Op=new ne,Np=new Vn,Cu=new cf,Al=new Kl;class iM extends mi{constructor(e=new Oi,t=new hf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Dp.fromBufferAttribute(t,r-1),Op.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Dp.distanceTo(Op);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;Np.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(Np);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new ne,f=new ne,h=new ne,d=new ne,v=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){const _=Math.max(0,l.start),D=Math.min(y.count,l.start+l.count);for(let E=_,B=D-1;E<B;E+=v){const H=y.getX(E),te=y.getX(E+1);if(u.fromBufferAttribute(g,H),f.fromBufferAttribute(g,te),Cu.distanceSqToSegment(u,f,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const Le=e.ray.origin.distanceTo(d);Le<e.near||Le>e.far||t.push({distance:Le,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,l.start),D=Math.min(g.count,l.start+l.count);for(let E=_,B=D-1;E<B;E+=v){if(u.fromBufferAttribute(g,E),f.fromBufferAttribute(g,E+1),Cu.distanceSqToSegment(u,f,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const te=e.ray.origin.distanceTo(d);te<e.near||te>e.far||t.push({distance:te,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ip=new ne,Up=new ne;class qm extends iM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ip.fromBufferAttribute(t,r),Up.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ip.distanceTo(Up);e.setAttribute("lineDistance",new oi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rM extends pi{constructor(e,t,n,r,s,l,o,c,u){super(e,t,n,r,s,l,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let l;t?l=t:l=e*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-l,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===l)return r/(s-1);const f=n[r],d=n[r+1]-f,v=(l-f)/d;return(r+v)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const l=this.getPoint(r),o=this.getPoint(s),c=t||(l.isVector2?new pt:new ne);return c.copy(o).sub(l).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new ne,r=[],s=[],l=[],o=new ne,c=new Vn;for(let v=0;v<=e;v++){const y=v/e;r[v]=this.getTangentAt(y,new ne)}s[0]=new ne,l[0]=new ne;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),l[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),l[v]=l[v-1].clone(),o.crossVectors(r[v-1],r[v]),o.length()>Number.EPSILON){o.normalize();const y=Math.acos(Kn(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(c.makeRotationAxis(o,y))}l[v].crossVectors(r[v],s[v])}if(t===!0){let v=Math.acos(Kn(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],v*y)),l[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class df extends Qi{constructor(e=0,t=0,n=1,r=1,s=0,l=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=l,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new pt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const l=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(l?s=0:s=r),this.aClockwise===!0&&!l&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,v=u-this.aY;c=d*f-v*h+this.aX,u=d*h+v*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aM extends df{constructor(e,t,n,r,s,l){super(e,t,n,n,r,s,l),this.isArcCurve=!0,this.type="ArcCurve"}}function pf(){let i=0,e=0,t=0,n=0;function r(s,l,o,c){i=s,e=o,t=-3*s+3*l-2*o-c,n=2*s-2*l+o+c}return{initCatmullRom:function(s,l,o,c,u){r(l,o,u*(o-s),u*(c-l))},initNonuniformCatmullRom:function(s,l,o,c,u,f,h){let d=(l-s)/u-(o-s)/(u+f)+(o-l)/f,v=(o-l)/f-(c-l)/(f+h)+(c-o)/h;d*=f,v*=f,r(l,o,d,v)},calc:function(s){const l=s*s,o=l*s;return i+e*s+t*l+n*o}}}const wl=new ne,Lu=new pf,Pu=new pf,Du=new pf;class sM extends Qi{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new ne){const n=t,r=this.points,s=r.length,l=(s-(this.closed?0:1))*e;let o=Math.floor(l),c=l-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,f;this.closed||o>0?u=r[(o-1)%s]:(wl.subVectors(r[0],r[1]).add(r[0]),u=wl);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(wl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(u.distanceToSquared(h),v),S=Math.pow(h.distanceToSquared(d),v),g=Math.pow(d.distanceToSquared(f),v);S<1e-4&&(S=1),y<1e-4&&(y=S),g<1e-4&&(g=S),Lu.initNonuniformCatmullRom(u.x,h.x,d.x,f.x,y,S,g),Pu.initNonuniformCatmullRom(u.y,h.y,d.y,f.y,y,S,g),Du.initNonuniformCatmullRom(u.z,h.z,d.z,f.z,y,S,g)}else this.curveType==="catmullrom"&&(Lu.initCatmullRom(u.x,h.x,d.x,f.x,this.tension),Pu.initCatmullRom(u.y,h.y,d.y,f.y,this.tension),Du.initCatmullRom(u.z,h.z,d.z,f.z,this.tension));return n.set(Lu.calc(c),Pu.calc(c),Du.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ne().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fp(i,e,t,n,r){const s=(n-e)*.5,l=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+l)*c+(-3*t+3*n-2*s-l)*o+s*i+t}function oM(i,e){const t=1-i;return t*t*e}function lM(i,e){return 2*(1-i)*i*e}function cM(i,e){return i*i*e}function so(i,e,t,n){return oM(i,e)+lM(i,t)+cM(i,n)}function uM(i,e){const t=1-i;return t*t*t*e}function fM(i,e){const t=1-i;return 3*t*t*i*e}function hM(i,e){return 3*(1-i)*i*i*e}function dM(i,e){return i*i*i*e}function oo(i,e,t,n,r){return uM(i,e)+fM(i,t)+hM(i,n)+dM(i,r)}class $m extends Qi{constructor(e=new pt,t=new pt,n=new pt,r=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pt){const n=t,r=this.v0,s=this.v1,l=this.v2,o=this.v3;return n.set(oo(e,r.x,s.x,l.x,o.x),oo(e,r.y,s.y,l.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pM extends Qi{constructor(e=new ne,t=new ne,n=new ne,r=new ne){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ne){const n=t,r=this.v0,s=this.v1,l=this.v2,o=this.v3;return n.set(oo(e,r.x,s.x,l.x,o.x),oo(e,r.y,s.y,l.y,o.y),oo(e,r.z,s.z,l.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zm extends Qi{constructor(e=new pt,t=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pt){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mM extends Qi{constructor(e=new ne,t=new ne){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Km extends Qi{constructor(e=new pt,t=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pt){const n=t,r=this.v0,s=this.v1,l=this.v2;return n.set(so(e,r.x,s.x,l.x),so(e,r.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _M extends Qi{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,r=this.v0,s=this.v1,l=this.v2;return n.set(so(e,r.x,s.x,l.x),so(e,r.y,s.y,l.y),so(e,r.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jm extends Qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pt){const n=t,r=this.points,s=(r.length-1)*e,l=Math.floor(s),o=s-l,c=r[l===0?l:l-1],u=r[l],f=r[l>r.length-2?r.length-1:l+1],h=r[l>r.length-3?r.length-1:l+2];return n.set(Fp(o,c.x,u.x,f.x,h.x),Fp(o,c.y,u.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new pt().fromArray(r))}return this}}var Bp=Object.freeze({__proto__:null,ArcCurve:aM,CatmullRomCurve3:sM,CubicBezierCurve:$m,CubicBezierCurve3:pM,EllipseCurve:df,LineCurve:Zm,LineCurve3:mM,QuadraticBezierCurve:Km,QuadraticBezierCurve3:_M,SplineCurve:Jm});class vM extends Qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bp[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const l=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-l/c;return o.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const l=s[r],o=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,c=l.getPoints(o);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Bp[r.type]().fromJSON(r))}return this}}class Gp extends vM{constructor(e){super(),this.type="Path",this.currentPoint=new pt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zm(this.currentPoint.clone(),new pt(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Km(this.currentPoint.clone(),new pt(e,t),new pt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,l){const o=new $m(this.currentPoint.clone(),new pt(e,t),new pt(n,r),new pt(s,l));return this.curves.push(o),this.currentPoint.set(s,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jm(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,l){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,l),this}absarc(e,t,n,r,s,l){return this.absellipse(e,t,n,n,r,s,l),this}ellipse(e,t,n,r,s,l,o,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,r,s,l,o,c),this}absellipse(e,t,n,r,s,l,o,c){const u=new df(e,t,n,r,s,l,o,c);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $u extends Gp{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Gp().fromJSON(r))}return this}}const gM={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Qm(i,0,r,t,!0);const l=[];if(!s||s.next===s.prev)return l;let o,c,u,f,h,d,v;if(n&&(s=EM(i,e,s,t)),i.length>80*t){o=u=i[0],c=f=i[1];for(let y=t;y<r;y+=t)h=i[y],d=i[y+1],h<o&&(o=h),d<c&&(c=d),h>u&&(u=h),d>f&&(f=d);v=Math.max(u-o,f-c),v=v!==0?32767/v:0}return go(s,l,t,o,c,v,0),l}};function Qm(i,e,t,n,r){let s,l;if(r===NM(i,e,t,n)>0)for(s=e;s<t;s+=n)l=kp(s,i[s],i[s+1],l);else for(s=t-n;s>=e;s-=n)l=kp(s,i[s],i[s+1],l);return l&&tc(l,l.next)&&(xo(l),l=l.next),l}function fa(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tc(t,t.next)||Rn(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,r,s,l){if(!i)return;!l&&s&&RM(i,n,r,s);let o=i,c,u;for(;i.prev!==i.next;){if(c=i.prev,u=i.next,s?xM(i,n,r,s):yM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(u.i/t|0),xo(i),i=u.next,o=u.next;continue}if(i=u,i===o){l?l===1?(i=bM(fa(i),e,t),go(i,e,t,n,r,s,2)):l===2&&SM(i,e,t,n,r,s):go(fa(i),e,t,n,r,s,1);break}}}function yM(i){const e=i.prev,t=i,n=i.next;if(Rn(e,t,n)>=0)return!1;const r=e.x,s=t.x,l=n.x,o=e.y,c=t.y,u=n.y,f=r<s?r<l?r:l:s<l?s:l,h=o<c?o<u?o:u:c<u?c:u,d=r>s?r>l?r:l:s>l?s:l,v=o>c?o>u?o:u:c>u?c:u;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=d&&y.y>=h&&y.y<=v&&cs(r,o,s,c,l,u,y.x,y.y)&&Rn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function xM(i,e,t,n){const r=i.prev,s=i,l=i.next;if(Rn(r,s,l)>=0)return!1;const o=r.x,c=s.x,u=l.x,f=r.y,h=s.y,d=l.y,v=o<c?o<u?o:u:c<u?c:u,y=f<h?f<d?f:d:h<d?h:d,S=o>c?o>u?o:u:c>u?c:u,g=f>h?f>d?f:d:h>d?h:d,_=Zu(v,y,e,t,n),D=Zu(S,g,e,t,n);let E=i.prevZ,B=i.nextZ;for(;E&&E.z>=_&&B&&B.z<=D;){if(E.x>=v&&E.x<=S&&E.y>=y&&E.y<=g&&E!==r&&E!==l&&cs(o,f,c,h,u,d,E.x,E.y)&&Rn(E.prev,E,E.next)>=0||(E=E.prevZ,B.x>=v&&B.x<=S&&B.y>=y&&B.y<=g&&B!==r&&B!==l&&cs(o,f,c,h,u,d,B.x,B.y)&&Rn(B.prev,B,B.next)>=0))return!1;B=B.nextZ}for(;E&&E.z>=_;){if(E.x>=v&&E.x<=S&&E.y>=y&&E.y<=g&&E!==r&&E!==l&&cs(o,f,c,h,u,d,E.x,E.y)&&Rn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;B&&B.z<=D;){if(B.x>=v&&B.x<=S&&B.y>=y&&B.y<=g&&B!==r&&B!==l&&cs(o,f,c,h,u,d,B.x,B.y)&&Rn(B.prev,B,B.next)>=0)return!1;B=B.nextZ}return!0}function bM(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!tc(r,s)&&e_(r,n,n.next,s)&&yo(r,s)&&yo(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),xo(n),xo(n.next),n=i=s),n=n.next}while(n!==i);return fa(n)}function SM(i,e,t,n,r,s){let l=i;do{let o=l.next.next;for(;o!==l.prev;){if(l.i!==o.i&&PM(l,o)){let c=t_(l,o);l=fa(l,l.next),c=fa(c,c.next),go(l,e,t,n,r,s,0),go(c,e,t,n,r,s,0);return}o=o.next}l=l.next}while(l!==i)}function EM(i,e,t,n){const r=[];let s,l,o,c,u;for(s=0,l=e.length;s<l;s++)o=e[s]*n,c=s<l-1?e[s+1]*n:i.length,u=Qm(i,o,c,n,!1),u===u.next&&(u.steiner=!0),r.push(LM(u));for(r.sort(MM),s=0;s<r.length;s++)t=TM(r[s],t);return t}function MM(i,e){return i.x-e.x}function TM(i,e){const t=AM(i,e);if(!t)return e;const n=t_(t,i);return fa(n,n.next),fa(t,t.next)}function AM(i,e){let t=e,n=-1/0,r;const s=i.x,l=i.y;do{if(l<=t.y&&l>=t.next.y&&t.next.y!==t.y){const d=t.x+(l-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,u=r.y;let f=1/0,h;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&cs(l<u?s:n,l,c,u,l<u?n:s,l,t.x,t.y)&&(h=Math.abs(l-t.y)/(s-t.x),yo(t,i)&&(h<f||h===f&&(t.x>r.x||t.x===r.x&&wM(r,t)))&&(r=t,f=h)),t=t.next;while(t!==o);return r}function wM(i,e){return Rn(i.prev,i,e.prev)<0&&Rn(e.next,i,i.next)<0}function RM(i,e,t,n){let r=i;do r.z===0&&(r.z=Zu(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,CM(r)}function CM(i){let e,t,n,r,s,l,o,c,u=1;do{for(t=i,i=null,s=null,l=0;t;){for(l++,n=t,o=0,e=0;e<u&&(o++,n=n.nextZ,!!n);e++);for(c=u;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,u*=2}while(l>1);return i}function Zu(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function LM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function cs(i,e,t,n,r,s,l,o){return(r-l)*(e-o)>=(i-l)*(s-o)&&(i-l)*(n-o)>=(t-l)*(e-o)&&(t-l)*(s-o)>=(r-l)*(n-o)}function PM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!DM(i,e)&&(yo(i,e)&&yo(e,i)&&OM(i,e)&&(Rn(i.prev,i,e.prev)||Rn(i,e.prev,e))||tc(i,e)&&Rn(i.prev,i,i.next)>0&&Rn(e.prev,e,e.next)>0)}function Rn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tc(i,e){return i.x===e.x&&i.y===e.y}function e_(i,e,t,n){const r=Cl(Rn(i,e,t)),s=Cl(Rn(i,e,n)),l=Cl(Rn(t,n,i)),o=Cl(Rn(t,n,e));return!!(r!==s&&l!==o||r===0&&Rl(i,t,e)||s===0&&Rl(i,n,e)||l===0&&Rl(t,i,n)||o===0&&Rl(t,e,n))}function Rl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cl(i){return i>0?1:i<0?-1:0}function DM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&e_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function yo(i,e){return Rn(i.prev,i,i.next)<0?Rn(i,e,i.next)>=0&&Rn(i,i.prev,e)>=0:Rn(i,e,i.prev)<0||Rn(i,i.next,e)<0}function OM(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function t_(i,e){const t=new Ku(i.i,i.x,i.y),n=new Ku(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kp(i,e,t,n){const r=new Ku(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ku(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function NM(i,e,t,n){let r=0;for(let s=e,l=t-n;s<t;s+=n)r+=(i[l]-i[s])*(i[s+1]+i[l+1]),l=s;return r}class lo{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return lo.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];zp(e),Hp(n,e);let l=e.length;t.forEach(zp);for(let c=0;c<t.length;c++)r.push(l),l+=t[c].length,Hp(n,t[c]);const o=gM.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function zp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wl extends Oi{constructor(e=new $u([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],l=[];let o=0,c=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(o,c,f),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new oi(r,3)),this.setAttribute("normal",new oi(s,3)),this.setAttribute("uv",new oi(l,2));function u(f){const h=r.length/3,d=f.extractPoints(t);let v=d.shape;const y=d.holes;lo.isClockWise(v)===!1&&(v=v.reverse());for(let g=0,_=y.length;g<_;g++){const D=y[g];lo.isClockWise(D)===!0&&(y[g]=D.reverse())}const S=lo.triangulateShape(v,y);for(let g=0,_=y.length;g<_;g++){const D=y[g];v=v.concat(D)}for(let g=0,_=v.length;g<_;g++){const D=v[g];r.push(D.x,D.y,0),s.push(0,0,1),l.push(D.x,D.y)}for(let g=0,_=S.length;g<_;g++){const D=S[g],E=D[0]+h,B=D[1]+h,H=D[2]+h;n.push(E,B,H),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return IM(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const l=t[e.shapes[r]];n.push(l)}return new Wl(n,e.curveSegments)}}function IM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class UM extends da{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wm,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Vp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class FM{constructor(e,t,n){const r=this;let s=!1,l=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,l,o),s=!0},this.itemEnd=function(f){l++,r.onProgress!==void 0&&r.onProgress(f,l,o),l===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=u.length;h<d;h+=2){const v=u[h],y=u[h+1];if(v.global&&(v.lastIndex=0),v.test(f))return y}return null}}}const BM=new FM;class mf{constructor(e){this.manager=e!==void 0?e:BM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mf.DEFAULT_MATERIAL_NAME="__DEFAULT";class GM extends mf{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=Vp.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const o=vo("img");function c(){f(),Vp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(h){f(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class kM extends mf{constructor(e){super(e)}load(e,t,n,r){const s=new pi,l=new GM(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Wp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zM extends qm{constructor(e=10,t=10,n=4473924,r=8947848){n=new hn(n),r=new hn(r);const s=t/2,l=e/t,o=e/2,c=[],u=[];for(let d=0,v=0,y=-o;d<=t;d++,y+=l){c.push(-o,0,y,o,0,y),c.push(y,0,-o,y,0,o);const S=d===s?n:r;S.toArray(u,v),v+=3,S.toArray(u,v),v+=3,S.toArray(u,v),v+=3,S.toArray(u,v),v+=3}const f=new Oi;f.setAttribute("position",new oi(c,3)),f.setAttribute("color",new oi(u,3));const h=new hf({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Ll=new ne,Nn=new uf;class HM extends qm{constructor(e){const t=new Oi,n=new hf({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],l={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(y,S){c(y),c(S)}function c(y){r.push(0,0,0),s.push(0,0,0),l[y]===void 0&&(l[y]=[]),l[y].push(r.length/3-1)}t.setAttribute("position",new oi(r,3)),t.setAttribute("color",new oi(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=l,this.update();const u=new hn(16755200),f=new hn(16711680),h=new hn(43775),d=new hn(16777215),v=new hn(3355443);this.setColors(u,f,h,d,v)}setColors(e,t,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;Nn.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Gn("c",t,e,Nn,0,0,-1),Gn("t",t,e,Nn,0,0,1),Gn("n1",t,e,Nn,-n,-r,-1),Gn("n2",t,e,Nn,n,-r,-1),Gn("n3",t,e,Nn,-n,r,-1),Gn("n4",t,e,Nn,n,r,-1),Gn("f1",t,e,Nn,-n,-r,1),Gn("f2",t,e,Nn,n,-r,1),Gn("f3",t,e,Nn,-n,r,1),Gn("f4",t,e,Nn,n,r,1),Gn("u1",t,e,Nn,n*.7,r*1.1,-1),Gn("u2",t,e,Nn,-n*.7,r*1.1,-1),Gn("u3",t,e,Nn,0,r*2,-1),Gn("cf1",t,e,Nn,-n,0,1),Gn("cf2",t,e,Nn,n,0,1),Gn("cf3",t,e,Nn,0,-r,1),Gn("cf4",t,e,Nn,0,r,1),Gn("cn1",t,e,Nn,-n,0,-1),Gn("cn2",t,e,Nn,n,0,-1),Gn("cn3",t,e,Nn,0,-r,-1),Gn("cn4",t,e,Nn,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Gn(i,e,t,n,r,s,l){Ll.set(r,s,l).unproject(n);const o=e[i];if(o!==void 0){const c=t.getAttribute("position");for(let u=0,f=o.length;u<f;u++)c.setXYZ(o[u],Ll.x,Ll.y,Ll.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);const Xp={type:"change"},Ou={type:"start"},Yp={type:"end"},Pl=new cf,jp=new Ar,VM=Math.cos(70*Rm.DEG2RAD);class n_ extends ha{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ua.ROTATE,MIDDLE:Ua.DOLLY,RIGHT:Ua.PAN},this.touches={ONE:Fa.ROTATE,TWO:Fa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function($){$.addEventListener("keydown",A),this._domElementKeyEvents=$},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xp),n.update(),s=r.NONE},this.update=(function(){const $=new ne,it=new ca().setFromUnitVectors(e.up,new ne(0,1,0)),ze=it.clone().invert(),bt=new ne,Tt=new ca,Lt=new ne,At=2*Math.PI;return function(st=null){const rt=n.object.position;$.copy(rt).sub(n.target),$.applyQuaternion(it),o.setFromVector3($),n.autoRotate&&s===r.NONE&&Te(L(st)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ft=n.minAzimuthAngle,ot=n.maxAzimuthAngle;isFinite(ft)&&isFinite(ot)&&(ft<-Math.PI?ft+=At:ft>Math.PI&&(ft-=At),ot<-Math.PI?ot+=At:ot>Math.PI&&(ot-=At),ft<=ot?o.theta=Math.max(ft,Math.min(ot,o.theta)):o.theta=o.theta>(ft+ot)/2?Math.max(ft,o.theta):Math.min(ot,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&te||n.object.isOrthographicCamera?o.radius=fe(o.radius):o.radius=fe(o.radius*u),$.setFromSpherical(o),$.applyQuaternion(ze),rt.copy(n.target).add($),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),f.set(0,0,0));let Ye=!1;if(n.zoomToCursor&&te){let St=null;if(n.object.isPerspectiveCamera){const kt=$.length();St=fe(kt*u);const fn=kt-St;n.object.position.addScaledVector(B,fn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const kt=new ne(H.x,H.y,0);kt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ye=!0;const fn=new ne(H.x,H.y,0);fn.unproject(n.object),n.object.position.sub(fn).add(kt),n.object.updateMatrixWorld(),St=$.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(Pl.origin.copy(n.object.position),Pl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Pl.direction))<VM?e.lookAt(n.target):(jp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Pl.intersectPlane(jp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),Ye=!0);return u=1,te=!1,Ye||bt.distanceToSquared(n.object.position)>l||8*(1-Tt.dot(n.object.quaternion))>l||Lt.distanceToSquared(n.target)>0?(n.dispatchEvent(Xp),bt.copy(n.object.position),Tt.copy(n.object.quaternion),Lt.copy(n.target),Ye=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",It),n.domElement.removeEventListener("pointercancel",an),n.domElement.removeEventListener("wheel",p),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",an),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const l=1e-6,o=new Wp,c=new Wp;let u=1;const f=new ne,h=new pt,d=new pt,v=new pt,y=new pt,S=new pt,g=new pt,_=new pt,D=new pt,E=new pt,B=new ne,H=new pt;let te=!1;const X=[],Le={};function L($){return $!==null?2*Math.PI/60*n.autoRotateSpeed*$:2*Math.PI/60/60*n.autoRotateSpeed}function W(){return Math.pow(.95,n.zoomSpeed)}function Te($){c.theta-=$}function We($){c.phi-=$}const O=(function(){const $=new ne;return function(ze,bt){$.setFromMatrixColumn(bt,0),$.multiplyScalar(-ze),f.add($)}})(),b=(function(){const $=new ne;return function(ze,bt){n.screenSpacePanning===!0?$.setFromMatrixColumn(bt,1):($.setFromMatrixColumn(bt,0),$.crossVectors(n.object.up,$)),$.multiplyScalar(ze),f.add($)}})(),F=(function(){const $=new ne;return function(ze,bt){const Tt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;$.copy(Lt).sub(n.target);let At=$.length();At*=Math.tan(n.object.fov/2*Math.PI/180),O(2*ze*At/Tt.clientHeight,n.object.matrix),b(2*bt*At/Tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(ze*(n.object.right-n.object.left)/n.object.zoom/Tt.clientWidth,n.object.matrix),b(bt*(n.object.top-n.object.bottom)/n.object.zoom/Tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function N($){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=$:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j($){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=$:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue($){if(!n.zoomToCursor)return;te=!0;const it=n.domElement.getBoundingClientRect(),ze=$.clientX-it.left,bt=$.clientY-it.top,Tt=it.width,Lt=it.height;H.x=ze/Tt*2-1,H.y=-(bt/Lt)*2+1,B.set(H.x,H.y,1).unproject(n.object).sub(n.object.position).normalize()}function fe($){return Math.max(n.minDistance,Math.min(n.maxDistance,$))}function ge($){h.set($.clientX,$.clientY)}function q($){ue($),_.set($.clientX,$.clientY)}function se($){y.set($.clientX,$.clientY)}function Ie($){d.set($.clientX,$.clientY),v.subVectors(d,h).multiplyScalar(n.rotateSpeed);const it=n.domElement;Te(2*Math.PI*v.x/it.clientHeight),We(2*Math.PI*v.y/it.clientHeight),h.copy(d),n.update()}function et($){D.set($.clientX,$.clientY),E.subVectors(D,_),E.y>0?N(W()):E.y<0&&j(W()),_.copy(D),n.update()}function Ge($){S.set($.clientX,$.clientY),g.subVectors(S,y).multiplyScalar(n.panSpeed),F(g.x,g.y),y.copy(S),n.update()}function xt($){ue($),$.deltaY<0?j(W()):$.deltaY>0&&N(W()),n.update()}function Rt($){let it=!1;switch($.code){case n.keys.UP:$.ctrlKey||$.metaKey||$.shiftKey?We(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:$.ctrlKey||$.metaKey||$.shiftKey?We(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:$.ctrlKey||$.metaKey||$.shiftKey?Te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:$.ctrlKey||$.metaKey||$.shiftKey?Te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),it=!0;break}it&&($.preventDefault(),n.update())}function gt(){if(X.length===1)h.set(X[0].pageX,X[0].pageY);else{const $=.5*(X[0].pageX+X[1].pageX),it=.5*(X[0].pageY+X[1].pageY);h.set($,it)}}function tn(){if(X.length===1)y.set(X[0].pageX,X[0].pageY);else{const $=.5*(X[0].pageX+X[1].pageX),it=.5*(X[0].pageY+X[1].pageY);y.set($,it)}}function nn(){const $=X[0].pageX-X[1].pageX,it=X[0].pageY-X[1].pageY,ze=Math.sqrt($*$+it*it);_.set(0,ze)}function Ct(){n.enableZoom&&nn(),n.enablePan&&tn()}function le(){n.enableZoom&&nn(),n.enableRotate&&gt()}function dn($){if(X.length==1)d.set($.pageX,$.pageY);else{const ze=dt($),bt=.5*($.pageX+ze.x),Tt=.5*($.pageY+ze.y);d.set(bt,Tt)}v.subVectors(d,h).multiplyScalar(n.rotateSpeed);const it=n.domElement;Te(2*Math.PI*v.x/it.clientHeight),We(2*Math.PI*v.y/it.clientHeight),h.copy(d)}function Ot($){if(X.length===1)S.set($.pageX,$.pageY);else{const it=dt($),ze=.5*($.pageX+it.x),bt=.5*($.pageY+it.y);S.set(ze,bt)}g.subVectors(S,y).multiplyScalar(n.panSpeed),F(g.x,g.y),y.copy(S)}function Yt($){const it=dt($),ze=$.pageX-it.x,bt=$.pageY-it.y,Tt=Math.sqrt(ze*ze+bt*bt);D.set(0,Tt),E.set(0,Math.pow(D.y/_.y,n.zoomSpeed)),N(E.y),_.copy(D)}function zt($){n.enableZoom&&Yt($),n.enablePan&&Ot($)}function vn($){n.enableZoom&&Yt($),n.enableRotate&&dn($)}function It($){n.enabled!==!1&&(X.length===0&&(n.domElement.setPointerCapture($.pointerId),n.domElement.addEventListener("pointermove",$t),n.domElement.addEventListener("pointerup",an)),Je($),$.pointerType==="touch"?ye($):In($))}function $t($){n.enabled!==!1&&($.pointerType==="touch"?tt($):kn($))}function an($){Mt($),X.length===0&&(n.domElement.releasePointerCapture($.pointerId),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",an)),n.dispatchEvent(Yp),s=r.NONE}function In($){let it;switch($.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case Ua.DOLLY:if(n.enableZoom===!1)return;q($),s=r.DOLLY;break;case Ua.ROTATE:if($.ctrlKey||$.metaKey||$.shiftKey){if(n.enablePan===!1)return;se($),s=r.PAN}else{if(n.enableRotate===!1)return;ge($),s=r.ROTATE}break;case Ua.PAN:if($.ctrlKey||$.metaKey||$.shiftKey){if(n.enableRotate===!1)return;ge($),s=r.ROTATE}else{if(n.enablePan===!1)return;se($),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ou)}function kn($){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Ie($);break;case r.DOLLY:if(n.enableZoom===!1)return;et($);break;case r.PAN:if(n.enablePan===!1)return;Ge($);break}}function p($){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||($.preventDefault(),n.dispatchEvent(Ou),xt($),n.dispatchEvent(Yp))}function A($){n.enabled===!1||n.enablePan===!1||Rt($)}function ye($){switch(nt($),X.length){case 1:switch(n.touches.ONE){case Fa.ROTATE:if(n.enableRotate===!1)return;gt(),s=r.TOUCH_ROTATE;break;case Fa.PAN:if(n.enablePan===!1)return;tn(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Fa.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(),s=r.TOUCH_DOLLY_PAN;break;case Fa.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ou)}function tt($){switch(nt($),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;dn($),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ot($),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;zt($),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vn($),n.update();break;default:s=r.NONE}}function Ke($){n.enabled!==!1&&$.preventDefault()}function Je($){X.push($)}function Mt($){delete Le[$.pointerId];for(let it=0;it<X.length;it++)if(X[it].pointerId==$.pointerId){X.splice(it,1);return}}function nt($){let it=Le[$.pointerId];it===void 0&&(it=new pt,Le[$.pointerId]=it),it.set($.pageX,$.pageY)}function dt($){const it=$.pointerId===X[0].pointerId?X[1]:X[0];return Le[it.pointerId]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",It),n.domElement.addEventListener("pointercancel",an),n.domElement.addEventListener("wheel",p,{passive:!1}),this.update()}}function WM(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function us(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),l=i.a,o=Math.round(i.h),c=i.s.toFixed(1),u=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var f=i.hex.toString(16);f.length<6;)f="0"+f;return"#"+f}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+l+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+l+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+l+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+c+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+c+",v:"+u+",a:"+l+"}"}return"unknown format"}var qp=Array.prototype.forEach,Ks=Array.prototype.slice,He={BREAK:{},extend:function(e){return this.each(Ks.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(t[r])||(e[r]=t[r])}).bind(this))},this),e},defaults:function(e){return this.each(Ks.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(r){this.isUndefined(e[r])&&(e[r]=t[r])}).bind(this))},this),e},compose:function(){var e=Ks.call(arguments);return function(){for(var t=Ks.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(qp&&e.forEach&&e.forEach===qp)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var l in e)if(t.call(n,e[l],l)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var r=void 0;return function(){var s=this,l=arguments;function o(){r=null,n||e.apply(s,l)}var c=n||!r;clearTimeout(r),r=setTimeout(o,t),c&&e.apply(s,l)}},toArray:function(e){return e.toArray?e.toArray():Ks.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:(function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e})(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},XM=[{litmus:He.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:us},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:us},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:us},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:us}}},{litmus:He.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:He.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:He.isObject,conversions:{RGBA_OBJ:{read:function(e){return He.isNumber(e.r)&&He.isNumber(e.g)&&He.isNumber(e.b)&&He.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return He.isNumber(e.r)&&He.isNumber(e.g)&&He.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return He.isNumber(e.h)&&He.isNumber(e.s)&&He.isNumber(e.v)&&He.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return He.isNumber(e.h)&&He.isNumber(e.s)&&He.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Js=void 0,Dl=void 0,Ju=function(){Dl=!1;var e=arguments.length>1?He.toArray(arguments):arguments[0];return He.each(XM,function(t){if(t.litmus(e))return He.each(t.conversions,function(n,r){if(Js=n.read(e),Dl===!1&&Js!==!1)return Dl=Js,Js.conversionName=r,Js.conversion=n,He.BREAK}),He.BREAK}),Dl},$p=void 0,Xl={hsv_to_rgb:function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),l=n*(1-t),o=n*(1-s*t),c=n*(1-(1-s)*t),u=[[n,c,l],[o,n,l],[l,n,c],[l,o,n],[c,l,n],[n,l,o]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),l=s-r,o=void 0,c=void 0;if(s!==0)c=l/s;else return{h:NaN,s:0,v:0};return e===s?o=(t-n)/l:t===s?o=2+(n-e)/l:o=4+(e-t)/l,o/=6,o<0&&(o+=1),{h:o*360,s:c,v:s/255}},rgb_to_hex:function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<($p=t*8)|e&~(255<<$p)}},YM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Vi=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},Wi=(function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}})(),Or=function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var l=r.get;return l===void 0?void 0:l.call(n)}},Nr=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Ir=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},Jn=(function(){function i(){if(Vi(this,i),this.__state=Ju.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Wi(i,[{key:"toString",value:function(){return us(this)}},{key:"toHexString",value:function(){return us(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i})();function _f(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Jn.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(Jn.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function vf(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Jn.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(Jn.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}Jn.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=Xl.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")He.extend(i.__state,Xl.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};Jn.recalculateHSV=function(i){var e=Xl.rgb_to_hsv(i.r,i.g,i.b);He.extend(i.__state,{s:e.s,v:e.v}),He.isNaN(e.h)?He.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};Jn.COMPONENTS=["r","g","b","h","s","v","hex","a"];_f(Jn.prototype,"r",2);_f(Jn.prototype,"g",1);_f(Jn.prototype,"b",0);vf(Jn.prototype,"h");vf(Jn.prototype,"s");vf(Jn.prototype,"v");Object.defineProperty(Jn.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Jn.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Xl.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var pa=(function(){function i(e,t){Vi(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Wi(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i})(),jM={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},i_={};He.each(jM,function(i,e){He.each(i,function(t){i_[t]=e})});var qM=/(\d+(\.\d+)?)px/;function qi(i){if(i==="0"||He.isUndefined(i))return 0;var e=i.match(qM);return He.isNull(e)?0:parseFloat(e[1])}var ve={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var r=n,s=t;He.isUndefined(s)&&(s=!0),He.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,r){var s=n||{},l=i_[t];if(!l)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(l);switch(l){case"MouseEvents":{var c=s.x||s.clientX||0,u=s.y||s.clientY||0;o.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,c,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var f=o.initKeyboardEvent||o.initKeyEvent;He.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),f(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}He.defaults(o,r),e.dispatchEvent(o)},bind:function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),ve},unbind:function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),ve},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return ve},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return ve},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return qi(t["border-left-width"])+qi(t["border-right-width"])+qi(t["padding-left"])+qi(t["padding-right"])+qi(t.width)},getHeight:function(e){var t=getComputedStyle(e);return qi(t["border-top-width"])+qi(t["border-bottom-width"])+qi(t["padding-top"])+qi(t["padding-bottom"])+qi(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},r_=(function(i){Nr(e,i);function e(t,n){Vi(this,e);var r=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function l(){s.setValue(!s.__prev)}return ve.bind(r.__checkbox,"change",l,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Wi(e,[{key:"setValue",value:function(n){var r=Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(pa),$M=(function(i){Nr(e,i);function e(t,n,r){Vi(this,e);var s=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=r,o=s;if(s.__select=document.createElement("select"),He.isArray(l)){var c={};He.each(l,function(u){c[u]=u}),l=c}return He.each(l,function(u,f){var h=document.createElement("option");h.innerHTML=f,h.setAttribute("value",u),o.__select.appendChild(h)}),s.updateDisplay(),ve.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;o.setValue(u)}),s.domElement.appendChild(s.__select),s}return Wi(e,[{key:"setValue",value:function(n){var r=Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return ve.isActive(this.__select)?this:(this.__select.value=this.getValue(),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e})(pa),ZM=(function(i){Nr(e,i);function e(t,n){Vi(this,e);var r=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function l(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),ve.bind(r.__input,"keyup",l),ve.bind(r.__input,"change",l),ve.bind(r.__input,"blur",o),ve.bind(r.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Wi(e,[{key:"updateDisplay",value:function(){return ve.isActive(this.__input)||(this.__input.value=this.getValue()),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(pa);function Zp(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var a_=(function(i){Nr(e,i);function e(t,n,r){Vi(this,e);var s=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=r||{};return s.__min=l.min,s.__max=l.max,s.__step=l.step,He.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Zp(s.__impliedStep),s}return Wi(e,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Zp(n),this}}]),e})(pa);function KM(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Yl=(function(i){Nr(e,i);function e(t,n,r){Vi(this,e);var s=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var l=s,o=void 0;function c(){var y=parseFloat(l.__input.value);He.isNaN(y)||l.setValue(y)}function u(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(){u()}function h(y){var S=o-y.clientY;l.setValue(l.getValue()+S*l.__impliedStep),o=y.clientY}function d(){ve.unbind(window,"mousemove",h),ve.unbind(window,"mouseup",d),u()}function v(y){ve.bind(window,"mousemove",h),ve.bind(window,"mouseup",d),o=y.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),ve.bind(s.__input,"change",c),ve.bind(s.__input,"blur",f),ve.bind(s.__input,"mousedown",v),ve.bind(s.__input,"keydown",function(y){y.keyCode===13&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Wi(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():KM(this.getValue(),this.__precision),Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(a_);function Kp(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}var Qu=(function(i){Nr(e,i);function e(t,n,r,s,l){Vi(this,e);var o=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:l})),c=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),ve.bind(o.__background,"mousedown",u),ve.bind(o.__background,"touchstart",d),ve.addClass(o.__background,"slider"),ve.addClass(o.__foreground,"slider-fg");function u(S){document.activeElement.blur(),ve.bind(window,"mousemove",f),ve.bind(window,"mouseup",h),f(S)}function f(S){S.preventDefault();var g=c.__background.getBoundingClientRect();return c.setValue(Kp(S.clientX,g.left,g.right,c.__min,c.__max)),!1}function h(){ve.unbind(window,"mousemove",f),ve.unbind(window,"mouseup",h),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}function d(S){S.touches.length===1&&(ve.bind(window,"touchmove",v),ve.bind(window,"touchend",y),v(S))}function v(S){var g=S.touches[0].clientX,_=c.__background.getBoundingClientRect();c.setValue(Kp(g,_.left,_.right,c.__min,c.__max))}function y(){ve.unbind(window,"touchmove",v),ve.unbind(window,"touchend",y),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Wi(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Or(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e})(a_),s_=(function(i){Nr(e,i);function e(t,n,r){Vi(this,e);var s=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,ve.bind(s.__button,"click",function(o){return o.preventDefault(),l.fire(),!1}),ve.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Wi(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e})(pa),ef=(function(i){Nr(e,i);function e(t,n){Vi(this,e);var r=Ir(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new Jn(r.getValue()),r.__temp=new Jn(0);var s=r;r.domElement=document.createElement("div"),ve.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",ve.bind(r.__input,"keydown",function(S){S.keyCode===13&&h.call(this)}),ve.bind(r.__input,"blur",h),ve.bind(r.__selector,"mousedown",function(){ve.addClass(this,"drag").bind(window,"mouseup",function(){ve.removeClass(s.__selector,"drag")})}),ve.bind(r.__selector,"touchstart",function(){ve.addClass(this,"drag").bind(window,"touchend",function(){ve.removeClass(s.__selector,"drag")})});var l=document.createElement("div");He.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),He.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),He.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),He.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),He.extend(l.style,{width:"100%",height:"100%",background:"none"}),Jp(l,"top","rgba(0,0,0,0)","#000"),He.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),QM(r.__hue_field),He.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),ve.bind(r.__saturation_field,"mousedown",o),ve.bind(r.__saturation_field,"touchstart",o),ve.bind(r.__field_knob,"mousedown",o),ve.bind(r.__field_knob,"touchstart",o),ve.bind(r.__hue_field,"mousedown",c),ve.bind(r.__hue_field,"touchstart",c);function o(S){v(S),ve.bind(window,"mousemove",v),ve.bind(window,"touchmove",v),ve.bind(window,"mouseup",u),ve.bind(window,"touchend",u)}function c(S){y(S),ve.bind(window,"mousemove",y),ve.bind(window,"touchmove",y),ve.bind(window,"mouseup",f),ve.bind(window,"touchend",f)}function u(){ve.unbind(window,"mousemove",v),ve.unbind(window,"touchmove",v),ve.unbind(window,"mouseup",u),ve.unbind(window,"touchend",u),d()}function f(){ve.unbind(window,"mousemove",y),ve.unbind(window,"touchmove",y),ve.unbind(window,"mouseup",f),ve.unbind(window,"touchend",f),d()}function h(){var S=Ju(this.value);S!==!1?(s.__color.__state=S,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(l),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function v(S){S.type.indexOf("touch")===-1&&S.preventDefault();var g=s.__saturation_field.getBoundingClientRect(),_=S.touches&&S.touches[0]||S,D=_.clientX,E=_.clientY,B=(D-g.left)/(g.right-g.left),H=1-(E-g.top)/(g.bottom-g.top);return H>1?H=1:H<0&&(H=0),B>1?B=1:B<0&&(B=0),s.__color.v=H,s.__color.s=B,s.setValue(s.__color.toOriginal()),!1}function y(S){S.type.indexOf("touch")===-1&&S.preventDefault();var g=s.__hue_field.getBoundingClientRect(),_=S.touches&&S.touches[0]||S,D=_.clientY,E=1-(D-g.top)/(g.bottom-g.top);return E>1?E=1:E<0&&(E=0),s.__color.h=E*360,s.setValue(s.__color.toOriginal()),!1}return r}return Wi(e,[{key:"updateDisplay",value:function(){var n=Ju(this.getValue());if(n!==!1){var r=!1;He.each(Jn.COMPONENTS,function(o){if(!He.isUndefined(n[o])&&!He.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&He.extend(this.__color.__state,n)}He.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,l=255-s;He.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Jp(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),He.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+l+","+l+","+l+",.7)"})}}]),e})(pa),JM=["-moz-","-o-","-webkit-","-ms-",""];function Jp(i,e,t,n){i.style.background="",He.each(JM,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function QM(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var eT={load:function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},tT=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,nT=function(e,t){var n=e[t];return He.isArray(arguments[2])||He.isObject(arguments[2])?new $M(e,t,arguments[2]):He.isNumber(n)?He.isNumber(arguments[2])&&He.isNumber(arguments[3])?He.isNumber(arguments[4])?new Qu(e,t,arguments[2],arguments[3],arguments[4]):new Qu(e,t,arguments[2],arguments[3]):He.isNumber(arguments[4])?new Yl(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Yl(e,t,{min:arguments[2],max:arguments[3]}):He.isString(n)?new ZM(e,t):He.isFunction(n)?new s_(e,t,""):He.isBoolean(n)?new r_(e,t):null};function iT(i){setTimeout(i,1e3/60)}var rT=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||iT,aT=(function(){function i(){Vi(this,i),this.backgroundElement=document.createElement("div"),He.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),ve.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),He.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;ve.bind(this.backgroundElement,"click",function(){e.hide()})}return Wi(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),He.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",ve.unbind(t.domElement,"webkitTransitionEnd",r),ve.unbind(t.domElement,"transitionend",r),ve.unbind(t.domElement,"oTransitionEnd",r)};ve.bind(this.domElement,"webkitTransitionEnd",n),ve.bind(this.domElement,"transitionend",n),ve.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-ve.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-ve.getHeight(this.domElement)/2+"px"}}]),i})(),sT=WM(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);eT.inject(sT);var Qp="dg",em=72,tm=20,bo="Default",no=(function(){try{return!!window.localStorage}catch{return!1}})(),co=void 0,nm=!0,as=void 0,Nu=!1,o_=[],yn=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),ve.addClass(this.domElement,Qp),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=He.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=He.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),He.isUndefined(n.load)?n.load={preset:bo}:n.preset&&(n.load.preset=n.preset),He.isUndefined(n.parent)&&n.hideable&&o_.push(this),n.resizable=He.isUndefined(n.parent)&&n.resizable,n.autoPlace&&He.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=no&&localStorage.getItem(ss(this,"isLocal"))==="true",s=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,uT(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,rf(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,l&&(l.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?ve.addClass(t.__ul,i.CLASS_CLOSED):ve.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(d){no&&(r=d,d?ve.bind(window,"unload",s):ve.unbind(window,"unload",s),localStorage.setItem(ss(t,"isLocal"),d))}}}),He.isUndefined(n.parent)){if(this.closed=n.closed||!1,ve.addClass(this.domElement,i.CLASS_MAIN),ve.makeSelectable(this.domElement,!1),no&&r){t.useLocalStorage=!0;var o=localStorage.getItem(ss(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,ve.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(ve.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(ve.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),ve.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);ve.addClass(c,"controller-name"),l=gf(t,c);var u=function(d){return d.preventDefault(),t.closed=!t.closed,!1};ve.addClass(this.__ul,i.CLASS_CLOSED),ve.addClass(l,"title"),ve.bind(l,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&(He.isUndefined(n.parent)&&(nm&&(as=document.createElement("div"),ve.addClass(as,Qp),ve.addClass(as,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(as),nm=!1),as.appendChild(this.domElement),ve.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||rf(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},ve.bind(window,"resize",this.__resizeHandler),ve.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),ve.bind(this.__ul,"transitionend",this.__resizeHandler),ve.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&cT(this),s=function(){no&&localStorage.getItem(ss(t,"isLocal"))==="true"&&localStorage.setItem(ss(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function f(){var h=t.getRoot();h.width+=1,He.defer(function(){h.width-=1})}n.parent||f()};yn.toggleHide=function(){Nu=!Nu,He.each(o_,function(i){i.domElement.style.display=Nu?"none":""})};yn.CLASS_AUTO_PLACE="a";yn.CLASS_AUTO_PLACE_CONTAINER="ac";yn.CLASS_MAIN="main";yn.CLASS_CONTROLLER_ROW="cr";yn.CLASS_TOO_TALL="taller-than-window";yn.CLASS_CLOSED="closed";yn.CLASS_CLOSE_BUTTON="close-button";yn.CLASS_CLOSE_TOP="close-top";yn.CLASS_CLOSE_BOTTOM="close-bottom";yn.CLASS_DRAG="drag";yn.DEFAULT_WIDTH=245;yn.TEXT_CLOSED="Close Controls";yn.TEXT_OPEN="Open Controls";yn._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===em||i.keyCode===em)&&yn.toggleHide()};ve.bind(window,"keydown",yn._keydownHandler,!1);He.extend(yn.prototype,{add:function(e,t){return uo(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return uo(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;He.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&as.removeChild(this.domElement);var e=this;He.each(this.__folders,function(t){e.removeFolder(t)}),ve.unbind(window,"keydown",yn._keydownHandler,!1),im(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new yn(t);this.__folders[e]=n;var r=gf(this,n.domElement);return ve.addClass(r,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],im(e);var t=this;He.each(e.__folders,function(n){e.removeFolder(n)}),He.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=ve.getOffset(e.__ul).top,n=0;He.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=ve.getHeight(r))}),window.innerHeight-t-tm<n?(ve.addClass(e.domElement,yn.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-tm+"px"):(ve.removeClass(e.domElement,yn.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&He.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:He.debounce(function(){this.onResize()},50),remember:function(){if(He.isUndefined(co)&&(co=new aT,co.domElement.innerHTML=tT),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;He.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&lT(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&rf(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ol(this)),e.folders={},He.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ol(this),tf(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[bo]=Ol(this,!0)),this.load.remembered[e]=Ol(this),this.preset=e,nf(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){He.each(this.__controllers,function(t){this.getRoot().load.remembered?l_(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),He.each(this.__folders,function(t){t.revert(t)}),e||tf(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&c_(this.__listening)},updateDisplay:function(){He.each(this.__controllers,function(e){e.updateDisplay()}),He.each(this.__folders,function(e){e.updateDisplay()})}});function gf(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function im(i){ve.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&ve.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function tf(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function oT(i,e,t){if(t.__li=e,t.__gui=i,He.extend(t,{options:function(l){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),uo(i,t.object,t.property,{before:o,factoryArgs:[He.toArray(arguments)]})}if(He.isArray(l)||He.isObject(l)){var c=t.__li.nextElementSibling;return t.remove(),uo(i,t.object,t.property,{before:c,factoryArgs:[l]})}},name:function(l){return t.__li.firstElementChild.firstElementChild.innerHTML=l,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Qu){var n=new Yl(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});He.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var l=t[s],o=n[s];t[s]=n[s]=function(){var c=Array.prototype.slice.call(arguments);return o.apply(n,c),l.apply(t,c)}}),ve.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Yl){var r=function(l){if(He.isNumber(t.__min)&&He.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=uo(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(o),c&&u.listen(),u}return l};t.min=He.compose(r,t.min),t.max=He.compose(r,t.max)}else t instanceof r_?(ve.bind(e,"click",function(){ve.fakeEvent(t.__checkbox,"click")}),ve.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof s_?(ve.bind(e,"click",function(){ve.fakeEvent(t.__button,"click")}),ve.bind(e,"mouseover",function(){ve.addClass(t.__button,"hover")}),ve.bind(e,"mouseout",function(){ve.removeClass(t.__button,"hover")})):t instanceof ef&&(ve.addClass(e,"color"),t.updateDisplay=He.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=He.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&tf(i.getRoot(),!0),s},t.setValue)}function l_(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,l=void 0;if(s[i.preset])l=s[i.preset];else if(s[bo])l=s[bo];else return;if(l[n]&&l[n][e.property]!==void 0){var o=l[n][e.property];e.initialValue=o,e.setValue(o)}}}}function uo(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new ef(e,t);else{var s=[e,t].concat(n.factoryArgs);r=nT.apply(i,s)}n.before instanceof pa&&(n.before=n.before.__li),l_(i,r),ve.addClass(r.domElement,"c");var l=document.createElement("span");ve.addClass(l,"property-name"),l.innerHTML=r.property;var o=document.createElement("div");o.appendChild(l),o.appendChild(r.domElement);var c=gf(i,o,n.before);return ve.addClass(c,yn.CLASS_CONTROLLER_ROW),r instanceof ef?ve.addClass(c,"color"):ve.addClass(c,YM(r.getValue())),oT(i,c,r),i.__controllers.push(r),r}function ss(i,e){return document.location.href+"."+e}function nf(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function rm(i,e){e.style.display=i.useLocalStorage?"block":"none"}function lT(i){var e=i.__save_row=document.createElement("li");ve.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),ve.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",ve.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",ve.addClass(n,"button"),ve.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",ve.addClass(r,"button"),ve.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",ve.addClass(s,"button"),ve.addClass(s,"revert");var l=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?He.each(i.load.remembered,function(h,d){nf(i,d,d===i.preset)}):nf(i,bo,!1),ve.bind(l,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),e.appendChild(l),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),no){var o=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(ss(i,"isLocal"))==="true"&&c.setAttribute("checked","checked"),rm(i,o),ve.bind(c,"change",function(){i.useLocalStorage=!i.useLocalStorage,rm(i,o)})}var f=document.getElementById("dg-new-constructor");ve.bind(f,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&co.hide()}),ve.bind(t,"click",function(){f.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),co.show(),f.focus(),f.select()}),ve.bind(n,"click",function(){i.save()}),ve.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),ve.bind(s,"click",function(){i.revert()})}function cT(i){var e=void 0;i.__resize_handle=document.createElement("div"),He.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function n(){ve.removeClass(i.__closeButton,yn.CLASS_DRAG),ve.unbind(window,"mousemove",t),ve.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),e=s.clientX,ve.addClass(i.__closeButton,yn.CLASS_DRAG),ve.bind(window,"mousemove",t),ve.bind(window,"mouseup",n),!1}ve.bind(i.__resize_handle,"mousedown",r),ve.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function rf(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function Ol(i,e){var t={};return He.each(i.__rememberedObjects,function(n,r){var s={},l=i.__rememberedObjectIndecesToControllers[r];He.each(l,function(o,c){s[c]=e?o.initialValue:o.getValue()}),t[r]=s}),t}function uT(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function c_(i){i.length!==0&&rT.call(window,function(){c_(i)}),He.each(i,function(e){e.updateDisplay()})}var fT=yn,hT={GUI:fT};const dT={width:1024,height:1280},pT={dimensions:{depth:2},thickness:.1},Es={viewport:dT,structure:pT};var ma=function({regl:i,precision:e,label:t="",width:n,height:r}){this.regl=i,this.precision=e,this.label=t,this.positionBuffer=this.regl.buffer([[-2,0],[0,-2],[2,2]]),this.draw=()=>{},this.init(),this.pingPongIndex=0,this.fbos=Array(2).fill().map(()=>this.regl.framebuffer({color:this.regl.texture({mag:"nearest",width:n,height:r,format:"rgba"}),depthStencil:!1}))};ma.prototype.resize=function(i,e){this.fbos.forEach(t=>{t.resize(i,e)})};ma.prototype.getCurrent=function(){return this.fbos[this.pingPongIndex]};ma.prototype.getTexture=function(){var i=this.pingPongIndex?0:1;return this.fbos[i]};ma.prototype.init=function(){return this.transformIndex=0,this.fragHeader=`
  precision ${this.precision} float;

  uniform float time;
  varying vec2 uv;
  `,this.fragBody="",this.vert=`
  precision ${this.precision} float;
  attribute vec2 position;
  varying vec2 uv;

  void main () {
    uv = position;
    gl_Position = vec4(2.0 * position - 1.0, 0, 1);
  }`,this.attributes={position:this.positionBuffer},this.uniforms={time:this.regl.prop("time"),resolution:this.regl.prop("resolution")},this.frag=`
       ${this.fragHeader}

      void main () {
        vec4 c = vec4(0, 0, 0, 0);
        vec2 st = uv;
        ${this.fragBody}
        gl_FragColor = c;
      }
  `,this};ma.prototype.render=function(i){let e=i[0];var t=this,n=Object.assign(e.uniforms,{prevBuffer:()=>t.fbos[t.pingPongIndex]});t.draw=t.regl({frag:e.frag,vert:t.vert,attributes:t.attributes,uniforms:n,count:3,framebuffer:()=>(t.pingPongIndex=t.pingPongIndex?0:1,t.fbos[t.pingPongIndex])})};ma.prototype.tick=function(i){this.draw(i)};function yf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nl={exports:{}},am;function mT(){return am||(am=1,typeof Object.create=="function"?Nl.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:Nl.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}),Nl.exports}var Iu,sm;function _T(){if(sm)return Iu;sm=1;function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}Iu=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(s){if(!t(s)||s<0||isNaN(s))throw TypeError("n must be a positive number");return this._maxListeners=s,this},i.prototype.emit=function(s){var l,o,c,u,f,h;if(this._events||(this._events={}),s==="error"&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){if(l=arguments[1],l instanceof Error)throw l;var d=new Error('Uncaught, unspecified "error" event. ('+l+")");throw d.context=l,d}if(o=this._events[s],r(o))return!1;if(e(o))switch(arguments.length){case 1:o.call(this);break;case 2:o.call(this,arguments[1]);break;case 3:o.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),o.apply(this,u)}else if(n(o))for(u=Array.prototype.slice.call(arguments,1),h=o.slice(),c=h.length,f=0;f<c;f++)h[f].apply(this,u);return!0},i.prototype.addListener=function(s,l){var o;if(!e(l))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",s,e(l.listener)?l.listener:l),this._events[s]?n(this._events[s])?this._events[s].push(l):this._events[s]=[this._events[s],l]:this._events[s]=l,n(this._events[s])&&!this._events[s].warned&&(r(this._maxListeners)?o=i.defaultMaxListeners:o=this._maxListeners,o&&o>0&&this._events[s].length>o&&(this._events[s].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[s].length),typeof console.trace=="function"&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(s,l){if(!e(l))throw TypeError("listener must be a function");var o=!1;function c(){this.removeListener(s,c),o||(o=!0,l.apply(this,arguments))}return c.listener=l,this.on(s,c),this},i.prototype.removeListener=function(s,l){var o,c,u,f;if(!e(l))throw TypeError("listener must be a function");if(!this._events||!this._events[s])return this;if(o=this._events[s],u=o.length,c=-1,o===l||e(o.listener)&&o.listener===l)delete this._events[s],this._events.removeListener&&this.emit("removeListener",s,l);else if(n(o)){for(f=u;f-- >0;)if(o[f]===l||o[f].listener&&o[f].listener===l){c=f;break}if(c<0)return this;o.length===1?(o.length=0,delete this._events[s]):o.splice(c,1),this._events.removeListener&&this.emit("removeListener",s,l)}return this},i.prototype.removeAllListeners=function(s){var l,o;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[s]&&delete this._events[s],this;if(arguments.length===0){for(l in this._events)l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events={},this}if(o=this._events[s],e(o))this.removeListener(s,o);else if(o)for(;o.length;)this.removeListener(s,o[o.length-1]);return delete this._events[s],this},i.prototype.listeners=function(s){var l;return!this._events||!this._events[s]?l=[]:e(this._events[s])?l=[this._events[s]]:l=this._events[s].slice(),l},i.prototype.listenerCount=function(s){if(this._events){var l=this._events[s];if(e(l))return 1;if(l)return l.length}return 0},i.listenerCount=function(s,l){return s.listenerCount(l)};function e(s){return typeof s=="function"}function t(s){return typeof s=="number"}function n(s){return typeof s=="object"&&s!==null}function r(s){return s===void 0}return Iu}var Uu,om;function vT(){if(om)return Uu;om=1;var i={};return Uu=i.performance&&i.performance.now?function(){return performance.now()}:Date.now||function(){return+new Date},Uu}var Qs={exports:{}},ta={exports:{}},gT=ta.exports,lm;function yT(){return lm||(lm=1,(function(){var i,e,t,n,r,s;typeof performance<"u"&&performance!==null&&performance.now?ta.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(ta.exports=function(){return(i()-r)/1e6},e=process.hrtime,i=function(){var l;return l=e(),l[0]*1e9+l[1]},n=i(),s=process.uptime()*1e9,r=n-s):Date.now?(ta.exports=function(){return Date.now()-t},t=Date.now()):(ta.exports=function(){return new Date().getTime()-t},t=new Date().getTime())}).call(gT)),ta.exports}var cm;function xT(){if(cm)return Qs.exports;cm=1;for(var i={},e=yT(),t=typeof window>"u"?i:window,n=["moz","webkit"],r="AnimationFrame",s=t["request"+r],l=t["cancel"+r]||t["cancelRequest"+r],o=0;!s&&o<n.length;o++)s=t[n[o]+"Request"+r],l=t[n[o]+"Cancel"+r]||t[n[o]+"CancelRequest"+r];if(!s||!l){var c=0,u=0,f=[],h=1e3/60;s=function(d){if(f.length===0){var v=e(),y=Math.max(0,h-(v-c));c=y+v,setTimeout(function(){var S=f.slice(0);f.length=0;for(var g=0;g<S.length;g++)if(!S[g].cancelled)try{S[g].callback(c)}catch(_){setTimeout(function(){throw _},0)}},Math.round(y))}return f.push({handle:++u,callback:d,cancelled:!1}),u},l=function(d){for(var v=0;v<f.length;v++)f[v].handle===d&&(f[v].cancelled=!0)}}return Qs.exports=function(d){return s.call(t,d)},Qs.exports.cancel=function(){l.apply(t,arguments)},Qs.exports.polyfill=function(d){d||(d=t),d.requestAnimationFrame=s,d.cancelAnimationFrame=l},Qs.exports}var Fu,um;function bT(){if(um)return Fu;um=1;var i=mT(),e=_T().EventEmitter,t=vT(),n=xT();Fu=r;function r(s){if(!(this instanceof r))return new r(s);this.running=!1,this.last=t(),this._frame=0,this._tick=this.tick.bind(this),s&&this.on("tick",s)}return i(r,e),r.prototype.start=function(){if(!this.running)return this.running=!0,this.last=t(),this._frame=n(this._tick),this},r.prototype.stop=function(){return this.running=!1,this._frame!==0&&n.cancel(this._frame),this._frame=0,this},r.prototype.tick=function(){this._frame=n(this._tick);var s=t(),l=s-this.last;this.emit("tick",l),this.last=s},Fu}var ST=bT();const ET=yf(ST);function MT(i){return navigator.mediaDevices.enumerateDevices().then(e=>e.filter(t=>t.kind==="videoinput")).then(e=>{let t={audio:!1,video:!0};return e[i]&&(t.video={deviceId:{exact:e[i].deviceId}}),window.navigator.mediaDevices.getUserMedia(t)}).then(e=>{const t=document.createElement("video");return t.setAttribute("autoplay",""),t.setAttribute("muted",""),t.setAttribute("playsinline",""),t.srcObject=e,new Promise((n,r)=>{t.addEventListener("loadedmetadata",()=>{t.play().then(()=>n({video:t}))})})}).catch(console.log.bind(console))}function TT(i){return new Promise(function(e,t){navigator.mediaDevices.getDisplayMedia(i).then(n=>{const r=document.createElement("video");r.srcObject=n,r.addEventListener("loadedmetadata",()=>{r.play(),e({video:r})})}).catch(n=>t(n))})}class AT{constructor({regl:e,width:t,height:n,pb:r,label:s=""}){this.label=s,this.regl=e,this.src=null,this.dynamic=!0,this.width=t,this.height=n,this.tex=this.regl.texture({shape:[1,1]}),this.pb=r}init(e,t){"src"in e&&(this.src=e.src,this.tex=this.regl.texture({data:this.src,...t})),"dynamic"in e&&(this.dynamic=e.dynamic)}initCam(e,t){const n=this;MT(e).then(r=>{n.src=r.video,n.dynamic=!0,n.tex=n.regl.texture({data:n.src,...t})}).catch(r=>console.log("could not get camera",r))}initVideo(e="",t){const n=document.createElement("video");n.crossOrigin="anonymous",n.autoplay=!0,n.loop=!0,n.muted=!0,n.addEventListener("loadeddata",()=>{this.src=n,n.play(),this.tex=this.regl.texture({data:this.src,...t}),this.dynamic=!0}),n.src=e}initImage(e="",t){const n=document.createElement("img");n.crossOrigin="anonymous",n.src=e,n.onload=()=>{this.src=n,this.dynamic=!1,this.tex=this.regl.texture({data:this.src,...t})}}initStream(e,t){let n=this;e&&this.pb&&(this.pb.initSource(e),this.pb.on("got video",function(r,s){r===e&&(n.src=s,n.dynamic=!0,n.tex=n.regl.texture({data:n.src,...t}))}))}initScreen(e=0,t){const n=this;TT().then(function(r){n.src=r.video,n.tex=n.regl.texture({data:n.src,...t}),n.dynamic=!0}).catch(r=>console.log("could not get screen",r))}resize(e,t){this.width=e,this.height=t}clear(){this.src&&this.src.srcObject&&this.src.srcObject.getTracks&&this.src.srcObject.getTracks().forEach(e=>e.stop()),this.src=null,this.tex=this.regl.texture({shape:[1,1]})}tick(e){this.src!==null&&this.dynamic===!0&&(this.src.videoWidth&&this.src.videoWidth!==this.tex.width&&(console.log(this.src.videoWidth,this.src.videoHeight,this.tex.width,this.tex.height),this.tex.resize(this.src.videoWidth,this.src.videoHeight)),this.src.width&&this.src.width!==this.tex.width&&this.tex.resize(this.src.width,this.src.height),this.tex.subimage(this.src))}getTexture(){return this.tex}}const hr={};function wT(i){if(typeof i=="object"){if("buttons"in i)return i.buttons;if("which"in i){var e=i.which;if(e===2)return 4;if(e===3)return 2;if(e>0)return 1<<e-1}else if("button"in i){var e=i.button;if(e===1)return 4;if(e===2)return 2;if(e>=0)return 1<<e}}return 0}hr.buttons=wT;function RT(i){return i.target||i.srcElement||window}hr.element=RT;function CT(i){return typeof i=="object"&&"pageX"in i?i.pageX:0}hr.x=CT;function LT(i){return typeof i=="object"&&"pageY"in i?i.pageY:0}hr.y=LT;function PT(i,e){e||(e=i,i=window);var t=0,n=0,r=0,s={shift:!1,alt:!1,control:!1,meta:!1},l=!1;function o(D){var E=!1;return"altKey"in D&&(E=E||D.altKey!==s.alt,s.alt=!!D.altKey),"shiftKey"in D&&(E=E||D.shiftKey!==s.shift,s.shift=!!D.shiftKey),"ctrlKey"in D&&(E=E||D.ctrlKey!==s.control,s.control=!!D.ctrlKey),"metaKey"in D&&(E=E||D.metaKey!==s.meta,s.meta=!!D.metaKey),E}function c(D,E){var B=hr.x(E),H=hr.y(E);"buttons"in E&&(D=E.buttons|0),(D!==t||B!==n||H!==r||o(E))&&(t=D|0,n=B||0,r=H||0,e&&e(t,n,r,s))}function u(D){c(0,D)}function f(){(t||n||r||s.shift||s.alt||s.meta||s.control)&&(n=r=0,t=0,s.shift=s.alt=s.control=s.meta=!1,e&&e(0,0,0,s))}function h(D){o(D)&&e&&e(t,n,r,s)}function d(D){hr.buttons(D)===0?c(0,D):c(t,D)}function v(D){c(t|hr.buttons(D),D)}function y(D){c(t&~hr.buttons(D),D)}function S(){l||(l=!0,i.addEventListener("mousemove",d),i.addEventListener("mousedown",v),i.addEventListener("mouseup",y),i.addEventListener("mouseleave",u),i.addEventListener("mouseenter",u),i.addEventListener("mouseout",u),i.addEventListener("mouseover",u),i.addEventListener("blur",f),i.addEventListener("keyup",h),i.addEventListener("keydown",h),i.addEventListener("keypress",h),i!==window&&(window.addEventListener("blur",f),window.addEventListener("keyup",h),window.addEventListener("keydown",h),window.addEventListener("keypress",h)))}function g(){l&&(l=!1,i.removeEventListener("mousemove",d),i.removeEventListener("mousedown",v),i.removeEventListener("mouseup",y),i.removeEventListener("mouseleave",u),i.removeEventListener("mouseenter",u),i.removeEventListener("mouseout",u),i.removeEventListener("mouseover",u),i.removeEventListener("blur",f),i.removeEventListener("keyup",h),i.removeEventListener("keydown",h),i.removeEventListener("keypress",h),i!==window&&(window.removeEventListener("blur",f),window.removeEventListener("keyup",h),window.removeEventListener("keydown",h),window.removeEventListener("keypress",h)))}S();var _={element:i};return Object.defineProperties(_,{enabled:{get:function(){return l},set:function(D){D?S():g()},enumerable:!0},buttons:{get:function(){return t},enumerable:!0},x:{get:function(){return n},enumerable:!0},y:{get:function(){return r},enumerable:!0},mods:{get:function(){return s},enumerable:!0}}),_}var Ul={exports:{}},DT=Ul.exports,fm;function OT(){return fm||(fm=1,(function(i,e){(function(t,n){i.exports=n()})(DT,(function(){function t(O,b,F){for(var N,j=0,ue=b.length;j<ue;j++)!N&&j in b||(N||(N=Array.prototype.slice.call(b,0,j)),N[j]=b[j]);return O.concat(N||Array.prototype.slice.call(b))}var n=Object.freeze({__proto__:null,blackman:function(O){for(var b=new Float32Array(O),F=2*Math.PI/(O-1),N=2*F,j=0;j<O/2;j++)b[j]=.42-.5*Math.cos(j*F)+.08*Math.cos(j*N);for(j=Math.ceil(O/2);j>0;j--)b[O-j]=b[j-1];return b},hamming:function(O){for(var b=new Float32Array(O),F=0;F<O;F++)b[F]=.54-.46*Math.cos(2*Math.PI*(F/O-1));return b},hanning:function(O){for(var b=new Float32Array(O),F=0;F<O;F++)b[F]=.5-.5*Math.cos(2*Math.PI*F/(O-1));return b},sine:function(O){for(var b=Math.PI/(O-1),F=new Float32Array(O),N=0;N<O;N++)F[N]=Math.sin(b*N);return F}}),r={};function s(O){for(;O%2==0&&O>1;)O/=2;return O===1}function l(O,b){if(b!=="rect"){if(b!==""&&b||(b="hanning"),r[b]||(r[b]={}),!r[b][O.length])try{r[b][O.length]=n[b](O.length)}catch{throw new Error("Invalid windowing function")}O=(function(F,N){for(var j=[],ue=0;ue<Math.min(F.length,N.length);ue++)j[ue]=F[ue]*N[ue];return j})(O,r[b][O.length])}return O}function o(O,b,F){for(var N=new Float32Array(O),j=0;j<N.length;j++)N[j]=j*b/F,N[j]=13*Math.atan(N[j]/1315.8)+3.5*Math.atan(Math.pow(N[j]/7518,2));return N}function c(O){return Float32Array.from(O)}function u(O){return 1125*Math.log(1+O/700)}function f(O,b,F){for(var N,j=new Float32Array(O+2),ue=new Float32Array(O+2),fe=b/2,ge=u(0),q=(u(fe)-ge)/(O+1),se=new Array(O+2),Ie=0;Ie<j.length;Ie++)j[Ie]=Ie*q,ue[Ie]=(N=j[Ie],700*(Math.exp(N/1125)-1)),se[Ie]=Math.floor((F+1)*ue[Ie]/b);for(var et=new Array(O),Ge=0;Ge<et.length;Ge++){for(et[Ge]=new Array(F/2+1).fill(0),Ie=se[Ge];Ie<se[Ge+1];Ie++)et[Ge][Ie]=(Ie-se[Ge])/(se[Ge+1]-se[Ge]);for(Ie=se[Ge+1];Ie<se[Ge+2];Ie++)et[Ge][Ie]=(se[Ge+2]-Ie)/(se[Ge+2]-se[Ge+1])}return et}function h(O,b,F,N,j,ue,fe){N===void 0&&(N=5),j===void 0&&(j=2),ue===void 0&&(ue=!0),fe===void 0&&(fe=440);var ge=Math.floor(F/2)+1,q=new Array(F).fill(0).map((function(nn,Ct){return O*(function(le,dn){return Math.log2(16*le/dn)})(b*Ct/F,fe)}));q[0]=q[1]-1.5*O;var se,Ie,et,Ge=q.slice(1).map((function(nn,Ct){return Math.max(nn-q[Ct])}),1).concat([1]),xt=Math.round(O/2),Rt=new Array(O).fill(0).map((function(nn,Ct){return q.map((function(le){return(10*O+xt+le-Ct)%O-xt}))})),gt=Rt.map((function(nn,Ct){return nn.map((function(le,dn){return Math.exp(-.5*Math.pow(2*Rt[Ct][dn]/Ge[dn],2))}))}));if(Ie=(se=gt)[0].map((function(){return 0})),et=se.reduce((function(nn,Ct){return Ct.forEach((function(le,dn){nn[dn]+=Math.pow(le,2)})),nn}),Ie).map(Math.sqrt),gt=se.map((function(nn,Ct){return nn.map((function(le,dn){return le/(et[dn]||1)}))})),j){var tn=q.map((function(nn){return Math.exp(-.5*Math.pow((nn/O-N)/j,2))}));gt=gt.map((function(nn){return nn.map((function(Ct,le){return Ct*tn[le]}))}))}return ue&&(gt=t(t([],gt.slice(3),!0),gt.slice(0,3))),gt.map((function(nn){return nn.slice(0,ge)}))}function d(O,b){for(var F=0,N=0,j=0;j<b.length;j++)F+=Math.pow(j,O)*Math.abs(b[j]),N+=b[j];return F/N}function v(O){var b=O.ampSpectrum,F=O.barkScale,N=O.numberOfBarkBands,j=N===void 0?24:N;if(typeof b!="object"||typeof F!="object")throw new TypeError;var ue=j,fe=new Float32Array(ue),ge=0,q=b,se=new Int32Array(ue+1);se[0]=0;for(var Ie=F[q.length-1]/ue,et=1,Ge=0;Ge<q.length;Ge++)for(;F[Ge]>Ie;)se[et++]=Ge,Ie=et*F[q.length-1]/ue;for(se[ue]=q.length-1,Ge=0;Ge<ue;Ge++){for(var xt=0,Rt=se[Ge];Rt<se[Ge+1];Rt++)xt+=q[Rt];fe[Ge]=Math.pow(xt,.23)}for(Ge=0;Ge<fe.length;Ge++)ge+=fe[Ge];return{specific:fe,total:ge}}function y(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;for(var F=new Float32Array(b.length),N=0;N<F.length;N++)F[N]=Math.pow(b[N],2);return F}function S(O){var b=O.ampSpectrum,F=O.melFilterBank,N=O.bufferSize;if(typeof b!="object")throw new TypeError("Valid ampSpectrum is required to generate melBands");if(typeof F!="object")throw new TypeError("Valid melFilterBank is required to generate melBands");for(var j=y({ampSpectrum:b}),ue=F.length,fe=Array(ue),ge=new Float32Array(ue),q=0;q<ge.length;q++){fe[q]=new Float32Array(N/2),ge[q]=0;for(var se=0;se<N/2;se++)fe[q][se]=F[q][se]*j[se],ge[q]+=fe[q][se];ge[q]=Math.log(ge[q]+1)}return Array.prototype.slice.call(ge)}function g(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var _=null,D=g((function(O,b){var F=O.length;return b=b||2,_&&_[F]||(function(N){(_=_||{})[N]=new Array(N*N);for(var j=Math.PI/N,ue=0;ue<N;ue++)for(var fe=0;fe<N;fe++)_[N][fe+ue*N]=Math.cos(j*(fe+.5)*ue)})(F),O.map((function(){return 0})).map((function(N,j){return b*O.reduce((function(ue,fe,ge,q){return ue+fe*_[F][ge+j*F]}),0)}))})),E=Object.freeze({__proto__:null,amplitudeSpectrum:function(O){return O.ampSpectrum},buffer:function(O){return O.signal},chroma:function(O){var b=O.ampSpectrum,F=O.chromaFilterBank;if(typeof b!="object")throw new TypeError("Valid ampSpectrum is required to generate chroma");if(typeof F!="object")throw new TypeError("Valid chromaFilterBank is required to generate chroma");var N=F.map((function(ue,fe){return b.reduce((function(ge,q,se){return ge+q*ue[se]}),0)})),j=Math.max.apply(Math,N);return j?N.map((function(ue){return ue/j})):N},complexSpectrum:function(O){return O.complexSpectrum},energy:function(O){var b=O.signal;if(typeof b!="object")throw new TypeError;for(var F=0,N=0;N<b.length;N++)F+=Math.pow(Math.abs(b[N]),2);return F},loudness:v,melBands:S,mfcc:function(O){var b=O.ampSpectrum,F=O.melFilterBank,N=O.numberOfMFCCCoefficients,j=O.bufferSize,ue=Math.min(40,Math.max(1,N||13));if(F.length<ue)throw new Error("Insufficient filter bank for requested number of coefficients");var fe=S({ampSpectrum:b,melFilterBank:F,bufferSize:j});return D(fe).slice(0,ue)},perceptualSharpness:function(O){for(var b=v({ampSpectrum:O.ampSpectrum,barkScale:O.barkScale}),F=b.specific,N=0,j=0;j<F.length;j++)N+=j<15?(j+1)*F[j+1]:.066*Math.exp(.171*(j+1));return N*=.11/b.total},perceptualSpread:function(O){for(var b=v({ampSpectrum:O.ampSpectrum,barkScale:O.barkScale}),F=0,N=0;N<b.specific.length;N++)b.specific[N]>F&&(F=b.specific[N]);return Math.pow((b.total-F)/b.total,2)},powerSpectrum:y,rms:function(O){var b=O.signal;if(typeof b!="object")throw new TypeError;for(var F=0,N=0;N<b.length;N++)F+=Math.pow(b[N],2);return F/=b.length,F=Math.sqrt(F)},spectralCentroid:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;return d(1,b)},spectralCrest:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;var F=0,N=-1/0;return b.forEach((function(j){F+=Math.pow(j,2),N=j>N?j:N})),F/=b.length,F=Math.sqrt(F),N/F},spectralFlatness:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;for(var F=0,N=0,j=0;j<b.length;j++)F+=Math.log(b[j]),N+=b[j];return Math.exp(F/b.length)*b.length/N},spectralFlux:function(O){var b=O.signal,F=O.previousSignal,N=O.bufferSize;if(typeof b!="object"||typeof F!="object")throw new TypeError;for(var j=0,ue=-N/2;ue<b.length/2-1;ue++)x=Math.abs(b[ue])-Math.abs(F[ue]),j+=(x+Math.abs(x))/2;return j},spectralKurtosis:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;var F=b,N=d(1,F),j=d(2,F),ue=d(3,F),fe=d(4,F);return(-3*Math.pow(N,4)+6*N*j-4*N*ue+fe)/Math.pow(Math.sqrt(j-Math.pow(N,2)),4)},spectralRolloff:function(O){var b=O.ampSpectrum,F=O.sampleRate;if(typeof b!="object")throw new TypeError;for(var N=b,j=F/(2*(N.length-1)),ue=0,fe=0;fe<N.length;fe++)ue+=N[fe];for(var ge=.99*ue,q=N.length-1;ue>ge&&q>=0;)ue-=N[q],--q;return(q+1)*j},spectralSkewness:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;var F=d(1,b),N=d(2,b),j=d(3,b);return(2*Math.pow(F,3)-3*F*N+j)/Math.pow(Math.sqrt(N-Math.pow(F,2)),3)},spectralSlope:function(O){var b=O.ampSpectrum,F=O.sampleRate,N=O.bufferSize;if(typeof b!="object")throw new TypeError;for(var j=0,ue=0,fe=new Float32Array(b.length),ge=0,q=0,se=0;se<b.length;se++){j+=b[se];var Ie=se*F/N;fe[se]=Ie,ge+=Ie*Ie,ue+=Ie,q+=Ie*b[se]}return(b.length*q-ue*j)/(j*(ge-Math.pow(ue,2)))},spectralSpread:function(O){var b=O.ampSpectrum;if(typeof b!="object")throw new TypeError;return Math.sqrt(d(2,b)-Math.pow(d(1,b),2))},zcr:function(O){var b=O.signal;if(typeof b!="object")throw new TypeError;for(var F=0,N=1;N<b.length;N++)(b[N-1]>=0&&b[N]<0||b[N-1]<0&&b[N]>=0)&&F++;return F}});function B(O){if(Array.isArray(O)){for(var b=0,F=Array(O.length);b<O.length;b++)F[b]=O[b];return F}return Array.from(O)}var H={},te={},X={bitReverseArray:function(O){if(H[O]===void 0){for(var b=(O-1).toString(2).length,F="0".repeat(b),N={},j=0;j<O;j++){var ue=j.toString(2);ue=F.substr(ue.length)+ue,ue=[].concat(B(ue)).reverse().join(""),N[j]=parseInt(ue,2)}H[O]=N}return H[O]},multiply:function(O,b){return{real:O.real*b.real-O.imag*b.imag,imag:O.real*b.imag+O.imag*b.real}},add:function(O,b){return{real:O.real+b.real,imag:O.imag+b.imag}},subtract:function(O,b){return{real:O.real-b.real,imag:O.imag-b.imag}},euler:function(O,b){var F=-2*Math.PI*O/b;return{real:Math.cos(F),imag:Math.sin(F)}},conj:function(O){return O.imag*=-1,O},constructComplexArray:function(O){var b={};b.real=O.real===void 0?O.slice():O.real.slice();var F=b.real.length;return te[F]===void 0&&(te[F]=Array.apply(null,Array(F)).map(Number.prototype.valueOf,0)),b.imag=te[F].slice(),b}},Le=function(O){var b={};O.real===void 0||O.imag===void 0?b=X.constructComplexArray(O):(b.real=O.real.slice(),b.imag=O.imag.slice());var F=b.real.length,N=Math.log2(F);if(Math.round(N)!=N)throw new Error("Input size must be a power of 2.");if(b.real.length!=b.imag.length)throw new Error("Real and imaginary components must have the same length.");for(var j=X.bitReverseArray(F),ue={real:[],imag:[]},fe=0;fe<F;fe++)ue.real[j[fe]]=b.real[fe],ue.imag[j[fe]]=b.imag[fe];for(var ge=0;ge<F;ge++)b.real[ge]=ue.real[ge],b.imag[ge]=ue.imag[ge];for(var q=1;q<=N;q++)for(var se=Math.pow(2,q),Ie=0;Ie<se/2;Ie++)for(var et=X.euler(Ie,se),Ge=0;Ge<F/se;Ge++){var xt=se*Ge+Ie,Rt=se*Ge+Ie+se/2,gt={real:b.real[xt],imag:b.imag[xt]},tn={real:b.real[Rt],imag:b.imag[Rt]},nn=X.multiply(et,tn),Ct=X.subtract(gt,nn);b.real[Rt]=Ct.real,b.imag[Rt]=Ct.imag;var le=X.add(nn,gt);b.real[xt]=le.real,b.imag[xt]=le.imag}return b},L=Le,W=(function(){function O(b,F){var N=this;if(this._m=F,!b.audioContext)throw this._m.errors.noAC;if(b.bufferSize&&!s(b.bufferSize))throw this._m._errors.notPow2;if(!b.source)throw this._m._errors.noSource;this._m.audioContext=b.audioContext,this._m.bufferSize=b.bufferSize||this._m.bufferSize||256,this._m.hopSize=b.hopSize||this._m.hopSize||this._m.bufferSize,this._m.sampleRate=b.sampleRate||this._m.audioContext.sampleRate||44100,this._m.callback=b.callback,this._m.windowingFunction=b.windowingFunction||"hanning",this._m.featureExtractors=E,this._m.EXTRACTION_STARTED=b.startImmediately||!1,this._m.channel=typeof b.channel=="number"?b.channel:0,this._m.inputs=b.inputs||1,this._m.outputs=b.outputs||1,this._m.numberOfMFCCCoefficients=b.numberOfMFCCCoefficients||this._m.numberOfMFCCCoefficients||13,this._m.numberOfBarkBands=b.numberOfBarkBands||this._m.numberOfBarkBands||24,this._m.spn=this._m.audioContext.createScriptProcessor(this._m.bufferSize,this._m.inputs,this._m.outputs),this._m.spn.connect(this._m.audioContext.destination),this._m._featuresToExtract=b.featureExtractors||[],this._m.barkScale=o(this._m.bufferSize,this._m.sampleRate,this._m.bufferSize),this._m.melFilterBank=f(Math.max(this._m.melBands,this._m.numberOfMFCCCoefficients),this._m.sampleRate,this._m.bufferSize),this._m.inputData=null,this._m.previousInputData=null,this._m.frame=null,this._m.previousFrame=null,this.setSource(b.source),this._m.spn.onaudioprocess=function(j){var ue;N._m.inputData!==null&&(N._m.previousInputData=N._m.inputData),N._m.inputData=j.inputBuffer.getChannelData(N._m.channel),N._m.previousInputData?((ue=new Float32Array(N._m.previousInputData.length+N._m.inputData.length-N._m.hopSize)).set(N._m.previousInputData.slice(N._m.hopSize)),ue.set(N._m.inputData,N._m.previousInputData.length-N._m.hopSize)):ue=N._m.inputData;var fe=(function(ge,q,se){if(ge.length<q)throw new Error("Buffer is too short for frame length");if(se<1)throw new Error("Hop length cannot be less that 1");if(q<1)throw new Error("Frame length cannot be less that 1");var Ie=1+Math.floor((ge.length-q)/se);return new Array(Ie).fill(0).map((function(et,Ge){return ge.slice(Ge*se,Ge*se+q)}))})(ue,N._m.bufferSize,N._m.hopSize);fe.forEach((function(ge){N._m.frame=ge;var q=N._m.extract(N._m._featuresToExtract,N._m.frame,N._m.previousFrame);typeof N._m.callback=="function"&&N._m.EXTRACTION_STARTED&&N._m.callback(q),N._m.previousFrame=N._m.frame}))}}return O.prototype.start=function(b){this._m._featuresToExtract=b||this._m._featuresToExtract,this._m.EXTRACTION_STARTED=!0},O.prototype.stop=function(){this._m.EXTRACTION_STARTED=!1},O.prototype.setSource=function(b){this._m.source&&this._m.source.disconnect(this._m.spn),this._m.source=b,this._m.source.connect(this._m.spn)},O.prototype.setChannel=function(b){b<=this._m.inputs?this._m.channel=b:console.error("Channel ".concat(b," does not exist. Make sure you've provided a value for 'inputs' that is greater than ").concat(b," when instantiating the MeydaAnalyzer"))},O.prototype.get=function(b){return this._m.inputData?this._m.extract(b||this._m._featuresToExtract,this._m.inputData,this._m.previousInputData):null},O})(),Te={audioContext:null,spn:null,bufferSize:512,sampleRate:44100,melBands:26,chromaBands:12,callback:null,windowingFunction:"hanning",featureExtractors:E,EXTRACTION_STARTED:!1,numberOfMFCCCoefficients:13,numberOfBarkBands:24,_featuresToExtract:[],windowing:l,_errors:{notPow2:new Error("Meyda: Buffer size must be a power of 2, e.g. 64 or 512"),featureUndef:new Error("Meyda: No features defined."),invalidFeatureFmt:new Error("Meyda: Invalid feature format"),invalidInput:new Error("Meyda: Invalid input."),noAC:new Error("Meyda: No AudioContext specified."),noSource:new Error("Meyda: No source node specified.")},createMeydaAnalyzer:function(O){return new W(O,Object.assign({},Te))},listAvailableFeatureExtractors:function(){return Object.keys(this.featureExtractors)},extract:function(O,b,F){var N=this;if(!b)throw this._errors.invalidInput;if(typeof b!="object")throw this._errors.invalidInput;if(!O)throw this._errors.featureUndef;if(!s(b.length))throw this._errors.notPow2;this.barkScale!==void 0&&this.barkScale.length==this.bufferSize||(this.barkScale=o(this.bufferSize,this.sampleRate,this.bufferSize)),this.melFilterBank!==void 0&&this.barkScale.length==this.bufferSize&&this.melFilterBank.length==this.melBands||(this.melFilterBank=f(Math.max(this.melBands,this.numberOfMFCCCoefficients),this.sampleRate,this.bufferSize)),this.chromaFilterBank!==void 0&&this.chromaFilterBank.length==this.chromaBands||(this.chromaFilterBank=h(this.chromaBands,this.sampleRate,this.bufferSize)),"buffer"in b&&b.buffer===void 0?this.signal=c(b):this.signal=b;var j=We(b,this.windowingFunction,this.bufferSize);if(this.signal=j.windowedSignal,this.complexSpectrum=j.complexSpectrum,this.ampSpectrum=j.ampSpectrum,F){var ue=We(F,this.windowingFunction,this.bufferSize);this.previousSignal=ue.windowedSignal,this.previousComplexSpectrum=ue.complexSpectrum,this.previousAmpSpectrum=ue.ampSpectrum}var fe=function(ge){return N.featureExtractors[ge]({ampSpectrum:N.ampSpectrum,chromaFilterBank:N.chromaFilterBank,complexSpectrum:N.complexSpectrum,signal:N.signal,bufferSize:N.bufferSize,sampleRate:N.sampleRate,barkScale:N.barkScale,melFilterBank:N.melFilterBank,previousSignal:N.previousSignal,previousAmpSpectrum:N.previousAmpSpectrum,previousComplexSpectrum:N.previousComplexSpectrum,numberOfMFCCCoefficients:N.numberOfMFCCCoefficients,numberOfBarkBands:N.numberOfBarkBands})};if(typeof O=="object")return O.reduce((function(ge,q){var se;return Object.assign({},ge,((se={})[q]=fe(q),se))}),{});if(typeof O=="string")return fe(O);throw this._errors.invalidFeatureFmt}},We=function(O,b,F){var N={};O.buffer===void 0?N.signal=c(O):N.signal=O,N.windowedSignal=l(N.signal,b),N.complexSpectrum=L(N.windowedSignal),N.ampSpectrum=new Float32Array(F/2);for(var j=0;j<F/2;j++)N.ampSpectrum[j]=Math.sqrt(Math.pow(N.complexSpectrum.real[j],2)+Math.pow(N.complexSpectrum.imag[j],2));return N};return typeof window<"u"&&(window.Meyda=Te),Te}))})(Ul)),Ul.exports}var NT=OT();const IT=yf(NT);class UT{constructor({numBins:e=4,cutoff:t=2,smooth:n=.4,max:r=15,scale:s=10,isDrawing:l=!1,parentEl:o=document.body}){this.vol=0,this.scale=s,this.max=r,this.cutoff=t,this.smooth=n,this.setBins(e),this.beat={holdFrames:20,threshold:40,_cutoff:0,decay:.98,_framesSinceBeat:0},this.onBeat=()=>{},this.canvas=document.createElement("canvas"),this.canvas.width=100,this.canvas.height=80,this.canvas.style.width="100px",this.canvas.style.height="80px",this.canvas.style.position="absolute",this.canvas.style.right="0px",this.canvas.style.bottom="0px",o.appendChild(this.canvas),this.isDrawing=l,this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#DFFFFF",this.ctx.strokeStyle="#0ff",this.ctx.lineWidth=.5,window.navigator.mediaDevices&&window.navigator.mediaDevices.getUserMedia({video:!1,audio:!0}).then(c=>{this.stream=c,this.context=new AudioContext;let u=this.context.createMediaStreamSource(c);this.meyda=IT.createMeydaAnalyzer({audioContext:this.context,source:u,featureExtractors:["loudness"]})}).catch(c=>console.log("ERROR",c))}detectBeat(e){e>this.beat._cutoff&&e>this.beat.threshold?(this.onBeat(),this.beat._cutoff=e*1.2,this.beat._framesSinceBeat=0):this.beat._framesSinceBeat<=this.beat.holdFrames?this.beat._framesSinceBeat++:(this.beat._cutoff*=this.beat.decay,this.beat._cutoff=Math.max(this.beat._cutoff,this.beat.threshold))}tick(){if(this.meyda){var e=this.meyda.get();if(e&&e!==null){this.vol=e.loudness.total,this.detectBeat(this.vol);const t=(r,s)=>r+s;let n=Math.floor(e.loudness.specific.length/this.bins.length);this.prevBins=this.bins.slice(0),this.bins=this.bins.map((r,s)=>e.loudness.specific.slice(s*n,(s+1)*n).reduce(t)).map((r,s)=>r*(1-this.settings[s].smooth)+this.prevBins[s]*this.settings[s].smooth),this.fft=this.bins.map((r,s)=>Math.max(0,(r-this.settings[s].cutoff)/this.settings[s].scale)),this.isDrawing&&this.draw()}}}setCutoff(e){this.cutoff=e,this.settings=this.settings.map(t=>(t.cutoff=e,t))}setSmooth(e){this.smooth=e,this.settings=this.settings.map(t=>(t.smooth=e,t))}setBins(e){this.bins=Array(e).fill(0),this.prevBins=Array(e).fill(0),this.fft=Array(e).fill(0),this.settings=Array(e).fill(0).map(()=>({cutoff:this.cutoff,scale:this.scale,smooth:this.smooth})),this.bins.forEach((t,n)=>{window["a"+n]=(r=1,s=0)=>()=>a.fft[n]*r+s})}setScale(e){this.scale=e,this.settings=this.settings.map(t=>(t.scale=e,t))}setMax(e){this.max=e,console.log("set max is deprecated")}hide(){this.isDrawing=!1,this.canvas.style.display="none"}show(){this.isDrawing=!0,this.canvas.style.display="block"}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var e=this.canvas.width/this.bins.length,t=this.canvas.height/(this.max*2);this.bins.forEach((n,r)=>{var s=n*t;this.ctx.fillRect(r*e,this.canvas.height-s,e,s);var l=this.canvas.height-t*this.settings[r].cutoff;this.ctx.beginPath(),this.ctx.moveTo(r*e,l),this.ctx.lineTo((r+1)*e,l),this.ctx.stroke();var o=this.canvas.height-t*(this.settings[r].scale+this.settings[r].cutoff);this.ctx.beginPath(),this.ctx.moveTo(r*e,o),this.ctx.lineTo((r+1)*e,o),this.ctx.stroke()})}}class FT{constructor(e){this.mediaSource=new MediaSource,this.stream=e,this.output=document.createElement("video"),this.output.autoplay=!0,this.output.loop=!0;let t=this;this.mediaSource.addEventListener("sourceopen",()=>{console.log("MediaSource opened"),t.sourceBuffer=t.mediaSource.addSourceBuffer('video/webm; codecs="vp8"'),console.log("Source buffer: ",sourceBuffer)})}start(){let e={mimeType:"video/webm;codecs=vp9"};this.recordedBlobs=[];try{this.mediaRecorder=new MediaRecorder(this.stream,e)}catch(t){console.log("Unable to create MediaRecorder with options Object: ",t);try{e={mimeType:"video/webm,codecs=vp9"},this.mediaRecorder=new MediaRecorder(this.stream,e)}catch(n){console.log("Unable to create MediaRecorder with options Object: ",n);try{e="video/vp8",this.mediaRecorder=new MediaRecorder(this.stream,e)}catch(r){alert(`MediaRecorder is not supported by this browser.

Try Firefox 29 or later, or Chrome 47 or later, with Enable experimental Web Platform features enabled from chrome://flags.`),console.error("Exception while creating MediaRecorder:",r);return}}}console.log("Created MediaRecorder",this.mediaRecorder,"with options",e),this.mediaRecorder.onstop=this._handleStop.bind(this),this.mediaRecorder.ondataavailable=this._handleDataAvailable.bind(this),this.mediaRecorder.start(100),console.log("MediaRecorder started",this.mediaRecorder)}stop(){this.mediaRecorder.stop()}_handleStop(){const e=new Blob(this.recordedBlobs,{type:this.mediaRecorder.mimeType}),t=window.URL.createObjectURL(e);this.output.src=t;const n=document.createElement("a");n.style.display="none",n.href=t;let r=new Date;n.download=`hydra-${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}-${r.getHours()}.${r.getMinutes()}.${r.getSeconds()}.webm`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),window.URL.revokeObjectURL(t)},300)}_handleDataAvailable(e){e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)}}const Bu={linear:function(i){return i},easeInQuad:function(i){return i*i},easeOutQuad:function(i){return i*(2-i)},easeInOutQuad:function(i){return i<.5?2*i*i:-1+(4-2*i)*i},easeInCubic:function(i){return i*i*i},easeOutCubic:function(i){return--i*i*i+1},easeInOutCubic:function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},easeInQuart:function(i){return i*i*i*i},easeOutQuart:function(i){return 1- --i*i*i*i},easeInOutQuart:function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},easeInQuint:function(i){return i*i*i*i*i},easeOutQuint:function(i){return 1+--i*i*i*i*i},easeInOutQuint:function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i},sin:function(i){return(1+Math.sin(Math.PI*i-Math.PI/2))/2}};var BT=(i,e,t,n,r)=>(i-e)*(r-n)/(t-e)+n;const u_={init:()=>{Array.prototype.fast=function(i=1){return this._speed=i,this},Array.prototype.smooth=function(i=1){return this._smooth=i,this},Array.prototype.ease=function(i="linear"){return typeof i=="function"?(this._smooth=1,this._ease=i):Bu[i]&&(this._smooth=1,this._ease=Bu[i]),this},Array.prototype.offset=function(i=.5){return this._offset=i%1,this},Array.prototype.fit=function(i=0,e=1){let t=Math.min(...this),n=Math.max(...this);var r=this.map(s=>BT(s,t,n,i,e));return r._speed=this._speed,r._smooth=this._smooth,r._ease=this._ease,r}},getValue:(i=[])=>({time:e,bpm:t})=>{let n=i._speed?i._speed:1,r=i._smooth?i._smooth:0,s=e*n*(t/60)+(i._offset||0);if(r!==0){let l=i._ease?i._ease:Bu.linear,o=s-r/2,c=i[Math.floor(o%i.length)],u=i[Math.floor((o+1)%i.length)],f=Math.min(o%1/r,1);return l(f)*(u-c)+c}else return i[Math.floor(s%i.length)],i[Math.floor(s%i.length)]}},GT=i=>{var e="",t=r(e),n=(s,l)=>{e+=`
      var ${s} = ${l}
    `,t=r(e)};return{addToContext:n,eval:s=>t.eval(s)};function r(s){globalThis.eval(s);var l=function(o){globalThis.eval(o)};return{eval:l}}};class kT{constructor(e,t,n=[]){this.makeGlobal=t,this.sandbox=GT(),this.parent=e;var r=Object.keys(e);r.forEach(s=>this.add(s)),this.userProps=n}add(e){this.makeGlobal&&(window[e]=this.parent[e])}set(e,t){this.makeGlobal&&(window[e]=t),this.parent[e]=t}tick(){this.makeGlobal&&this.userProps.forEach(e=>{this.parent[e]=window[e]})}eval(e){this.sandbox.eval(e)}}const zT={float:{vec4:{name:"sum",args:[[1,1,1,1]]},vec2:{name:"sum",args:[[1,1]]}}},Gu=i=>(i=i.toString(),i.indexOf(".")<0&&(i+="."),i);function HT(i,e,t){const n=i.transform.inputs,r=i.userArgs,{generators:s}=i.synth,{src:l}=s;return n.map((o,c)=>{const u={value:o.default,type:o.type,isUniform:!1,name:o.name,vecLen:0};if(u.type==="float"&&(u.value=Gu(o.default)),o.type.startsWith("vec"))try{u.vecLen=Number.parseInt(o.type.substr(3))}catch{console.log(`Error determining length of vector input type ${o.type} (${o.name})`)}if(r.length>c&&(u.value=r[c],typeof r[c]=="function"?(u.value=(d,v,y)=>{try{const S=r[c](v);return typeof S=="number"?S:(console.warn("function does not return a number",r[c]),o.default)}catch(S){return console.warn("ERROR",S),o.default}},u.isUniform=!0):r[c].constructor===Array&&(u.value=(d,v,y)=>u_.getValue(r[c])(v),u.isUniform=!0)),!(e<0)){if(u.value&&u.value.transforms){const d=u.value.transforms[u.value.transforms.length-1];if(d.transform.glsl_return_type!==o.type){const v=zT[o.type];if(typeof v<"u"){const y=v[d.transform.glsl_return_type];if(typeof y<"u"){const{name:S,args:g}=y;u.value=u.value[S](...g)}}}u.isUniform=!1}else if(u.type==="float"&&typeof u.value=="number")u.value=Gu(u.value);else if(u.type.startsWith("vec")&&typeof u.value=="object"&&Array.isArray(u.value))u.isUniform=!1,u.value=`${u.type}(${u.value.map(Gu).join(", ")})`;else if(o.type==="sampler2D"){var f=u.value;u.value=()=>f.getTexture(),u.isUniform=!0}else if(u.value.getTexture&&o.type==="vec4"){var h=u.value;u.value=l(h),u.isUniform=!1}u.isUniform&&(u.name+=e)}return u})}function VT(i){var e={uniforms:[],glslFunctions:[],fragColor:""},t=jl(i,e)("st");e.fragColor=t;let n={};return e.uniforms.forEach(r=>n[r.name]=r),e.uniforms=Object.values(n),e}function jl(i,e){var t=()=>"";return i.forEach(n=>{var r=HT(n,e.uniforms.length);r.forEach(o=>{o.isUniform&&e.uniforms.push(o)}),WT(n,e.glslFunctions)||e.glslFunctions.push(n);var s=t;if(n.transform.type==="src")t=o=>`${eo(o,n.name,r,e)}`;else if(n.transform.type==="coord")t=o=>`${s(`${eo(o,n.name,r,e)}`)}`;else if(n.transform.type==="color")t=o=>`${eo(`${s(o)}`,n.name,r,e)}`;else if(n.transform.type==="combine"){var l=r[0].value&&r[0].value.transforms?o=>`${jl(r[0].value.transforms,e)(o)}`:r[0].isUniform?()=>r[0].name:()=>r[0].value;t=o=>`${eo(`${s(o)}, ${l(o)}`,n.name,r.slice(1),e)}`}else if(n.transform.type==="combineCoord"){var l=r[0].value&&r[0].value.transforms?c=>`${jl(r[0].value.transforms,e)(c)}`:r[0].isUniform?()=>r[0].name:()=>r[0].value;t=c=>`${s(`${eo(`${c}, ${l(c)}`,n.name,r.slice(1),e)}`)}`}}),t}function eo(i,e,t,n){const r=t.map(s=>s.isUniform?s.name:s.value&&s.value.transforms?`${jl(s.value.transforms,n)("st")}`:s.value).reduce((s,l)=>`${s}, ${l}`,"");return`${e}(${i}${r})`}function WT(i,e){for(var t=0;t<e.length;t++)if(i.name==e[t].name)return!0;return!1}const XT={_luminance:{type:"util",glsl:`float _luminance(vec3 rgb){
      const vec3 W = vec3(0.2125, 0.7154, 0.0721);
      return dot(rgb, W);
    }`},_noise:{type:"util",glsl:`
    //	Simplex 3D Noise
    //	by Ian McEwan, Ashima Arts
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float _noise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //  x0 = x0 - 0. + 0.0 * C
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }
    `},_rgbToHsv:{type:"util",glsl:`vec3 _rgbToHsv(vec3 c){
            vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
            vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
            vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

            float d = q.x - min(q.w, q.y);
            float e = 1.0e-10;
            return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
        }`},_hsvToRgb:{type:"util",glsl:`vec3 _hsvToRgb(vec3 c){
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }`}};var Eo=function(i){return this.transforms=[],this.transforms.push(i),this.defaultOutput=i.defaultOutput,this.synth=i.synth,this.type="GlslSource",this.defaultUniforms=i.defaultUniforms,this};Eo.prototype.addTransform=function(i){this.transforms.push(i)};Eo.prototype.out=function(i){var e=i||this.defaultOutput,t=this.glsl(e);if(this.synth.currentFunctions=[],e)try{e.render(t)}catch(n){console.log("shader could not compile",n)}};Eo.prototype.glsl=function(){var i=[],e=[];return this.transforms.forEach(t=>{t.transform.type==="renderpass"?console.warn("no support for renderpass"):e.push(t)}),e.length>0&&i.push(this.compile(e)),i};Eo.prototype.compile=function(i){var e=VT(i,this.synth),t={};e.uniforms.forEach(r=>{t[r.name]=r.value});var n=`
  precision ${this.defaultOutput.precision} float;
  ${Object.values(e.uniforms).map(r=>{let s=r.type;switch(r.type){case"texture":s="sampler2D";break}return`
      uniform ${s} ${r.name};`}).join("")}
  uniform float time;
  uniform vec2 resolution;
  varying vec2 uv;
  uniform sampler2D prevBuffer;

  ${Object.values(XT).map(r=>`
            ${r.glsl}
          `).join("")}

  ${e.glslFunctions.map(r=>`
            ${r.transform.glsl}
          `).join("")}

  void main () {
    vec4 c = vec4(1, 0, 0, 1);
    vec2 st = gl_FragCoord.xy/resolution.xy;
    gl_FragColor = ${e.fragColor};
  }
  `;return{frag:n,uniforms:Object.assign({},this.defaultUniforms,t)}};const YT=()=>[{name:"noise",type:"src",inputs:[{type:"float",name:"scale",default:10},{type:"float",name:"offset",default:.1}],glsl:"   return vec4(vec3(_noise(vec3(_st*scale, offset*time))), 1.0);"},{name:"voronoi",type:"src",inputs:[{type:"float",name:"scale",default:5},{type:"float",name:"speed",default:.3},{type:"float",name:"blending",default:.3}],glsl:`   vec3 color = vec3(.0);
   // Scale
   _st *= scale;
   // Tile the space
   vec2 i_st = floor(_st);
   vec2 f_st = fract(_st);
   float m_dist = 10.;  // minimun distance
   vec2 m_point;        // minimum point
   for (int j=-1; j<=1; j++ ) {
   for (int i=-1; i<=1; i++ ) {
   vec2 neighbor = vec2(float(i),float(j));
   vec2 p = i_st + neighbor;
   vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
   point = 0.5 + 0.5*sin(time*speed + 6.2831*point);
   vec2 diff = neighbor + point - f_st;
   float dist = length(diff);
   if( dist < m_dist ) {
   m_dist = dist;
   m_point = point;
   }
   }
   }
   // Assign a color using the closest point position
   color += dot(m_point,vec2(.3,.6));
   color *= 1.0 - blending*m_dist;
   return vec4(color, 1.0);`},{name:"osc",type:"src",inputs:[{type:"float",name:"frequency",default:60},{type:"float",name:"sync",default:.1},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st;
   float r = sin((st.x-offset/frequency+time*sync)*frequency)*0.5  + 0.5;
   float g = sin((st.x+time*sync)*frequency)*0.5 + 0.5;
   float b = sin((st.x+offset/frequency+time*sync)*frequency)*0.5  + 0.5;
   return vec4(r, g, b, 1.0);`},{name:"shape",type:"src",inputs:[{type:"float",name:"sides",default:3},{type:"float",name:"radius",default:.3},{type:"float",name:"smoothing",default:.01}],glsl:`   vec2 st = _st * 2. - 1.;
   // Angle and radius from the current pixel
   float a = atan(st.x,st.y)+3.1416;
   float r = (2.*3.1416)/sides;
   float d = cos(floor(.5+a/r)*r-a)*length(st);
   return vec4(vec3(1.0-smoothstep(radius,radius + smoothing + 0.0000001,d)), 1.0);`},{name:"gradient",type:"src",inputs:[{type:"float",name:"speed",default:0}],glsl:"   return vec4(_st, sin(time*speed), 1.0);"},{name:"src",type:"src",inputs:[{type:"sampler2D",name:"tex",default:NaN}],glsl:`   //  vec2 uv = gl_FragCoord.xy/vec2(1280., 720.);
   return texture2D(tex, fract(_st));`},{name:"solid",type:"src",inputs:[{type:"float",name:"r",default:0},{type:"float",name:"g",default:0},{type:"float",name:"b",default:0},{type:"float",name:"a",default:1}],glsl:"   return vec4(r, g, b, a);"},{name:"rotate",type:"coord",inputs:[{type:"float",name:"angle",default:10},{type:"float",name:"speed",default:0}],glsl:`   vec2 xy = _st - vec2(0.5);
   float ang = angle + speed *time;
   xy = mat2(cos(ang),-sin(ang), sin(ang),cos(ang))*xy;
   xy += 0.5;
   return xy;`},{name:"scale",type:"coord",inputs:[{type:"float",name:"amount",default:1.5},{type:"float",name:"xMult",default:1},{type:"float",name:"yMult",default:1},{type:"float",name:"offsetX",default:.5},{type:"float",name:"offsetY",default:.5}],glsl:`   vec2 xy = _st - vec2(offsetX, offsetY);
   xy*=(1.0/vec2(amount*xMult, amount*yMult));
   xy+=vec2(offsetX, offsetY);
   return xy;
   `},{name:"pixelate",type:"coord",inputs:[{type:"float",name:"pixelX",default:20},{type:"float",name:"pixelY",default:20}],glsl:`   vec2 xy = vec2(pixelX, pixelY);
   return (floor(_st * xy) + 0.5)/xy;`},{name:"posterize",type:"color",inputs:[{type:"float",name:"bins",default:3},{type:"float",name:"gamma",default:.6}],glsl:`   vec4 c2 = pow(_c0, vec4(gamma));
   c2 *= vec4(bins);
   c2 = floor(c2);
   c2/= vec4(bins);
   c2 = pow(c2, vec4(1.0/gamma));
   return vec4(c2.xyz, _c0.a);`},{name:"shift",type:"color",inputs:[{type:"float",name:"r",default:.5},{type:"float",name:"g",default:0},{type:"float",name:"b",default:0},{type:"float",name:"a",default:0}],glsl:`   vec4 c2 = vec4(_c0);
   c2.r = fract(c2.r + r);
   c2.g = fract(c2.g + g);
   c2.b = fract(c2.b + b);
   c2.a = fract(c2.a + a);
   return vec4(c2.rgba);`},{name:"repeat",type:"coord",inputs:[{type:"float",name:"repeatX",default:3},{type:"float",name:"repeatY",default:3},{type:"float",name:"offsetX",default:0},{type:"float",name:"offsetY",default:0}],glsl:`   vec2 st = _st * vec2(repeatX, repeatY);
   st.x += step(1., mod(st.y,2.0)) * offsetX;
   st.y += step(1., mod(st.x,2.0)) * offsetY;
   return fract(st);`},{name:"modulateRepeat",type:"combineCoord",inputs:[{type:"float",name:"repeatX",default:3},{type:"float",name:"repeatY",default:3},{type:"float",name:"offsetX",default:.5},{type:"float",name:"offsetY",default:.5}],glsl:`   vec2 st = _st * vec2(repeatX, repeatY);
   st.x += step(1., mod(st.y,2.0)) + _c0.r * offsetX;
   st.y += step(1., mod(st.x,2.0)) + _c0.g * offsetY;
   return fract(st);`},{name:"repeatX",type:"coord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.y += step(1., mod(st.x,2.0))* offset;
   return fract(st);`},{name:"modulateRepeatX",type:"combineCoord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:.5}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.y += step(1., mod(st.x,2.0)) + _c0.r * offset;
   return fract(st);`},{name:"repeatY",type:"coord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:0}],glsl:`   vec2 st = _st * vec2(1.0, reps);
   //  float f =  mod(_st.y,2.0);
   st.x += step(1., mod(st.y,2.0))* offset;
   return fract(st);`},{name:"modulateRepeatY",type:"combineCoord",inputs:[{type:"float",name:"reps",default:3},{type:"float",name:"offset",default:.5}],glsl:`   vec2 st = _st * vec2(reps, 1.0);
   //  float f =  mod(_st.y,2.0);
   st.x += step(1., mod(st.y,2.0)) + _c0.r * offset;
   return fract(st);`},{name:"kaleid",type:"coord",inputs:[{type:"float",name:"nSides",default:4}],glsl:`   vec2 st = _st;
   st -= 0.5;
   float r = length(st);
   float a = atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   a = abs(a-pi/nSides/2.);
   return r*vec2(cos(a), sin(a));`},{name:"modulateKaleid",type:"combineCoord",inputs:[{type:"float",name:"nSides",default:4}],glsl:`   vec2 st = _st - 0.5;
   float r = length(st);
   float a = atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   a = abs(a-pi/nSides/2.);
   return (_c0.r+r)*vec2(cos(a), sin(a));`},{name:"scroll",type:"coord",inputs:[{type:"float",name:"scrollX",default:.5},{type:"float",name:"scrollY",default:.5},{type:"float",name:"speedX",default:0},{type:"float",name:"speedY",default:0}],glsl:`
   _st.x += scrollX + time*speedX;
   _st.y += scrollY + time*speedY;
   return fract(_st);`},{name:"scrollX",type:"coord",inputs:[{type:"float",name:"scrollX",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.x += scrollX + time*speed;
   return fract(_st);`},{name:"modulateScrollX",type:"combineCoord",inputs:[{type:"float",name:"scrollX",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.x += _c0.r*scrollX + time*speed;
   return fract(_st);`},{name:"scrollY",type:"coord",inputs:[{type:"float",name:"scrollY",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.y += scrollY + time*speed;
   return fract(_st);`},{name:"modulateScrollY",type:"combineCoord",inputs:[{type:"float",name:"scrollY",default:.5},{type:"float",name:"speed",default:0}],glsl:`   _st.y += _c0.r*scrollY + time*speed;
   return fract(_st);`},{name:"add",type:"combine",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return (_c0+_c1)*amount + _c0*(1.0-amount);"},{name:"sub",type:"combine",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return (_c0-_c1)*amount + _c0*(1.0-amount);"},{name:"layer",type:"combine",inputs:[],glsl:"   return vec4(mix(_c0.rgb, _c1.rgb, _c1.a), clamp(_c0.a + _c1.a, 0.0, 1.0));"},{name:"blend",type:"combine",inputs:[{type:"float",name:"amount",default:.5}],glsl:"   return _c0*(1.0-amount)+_c1*amount;"},{name:"mult",type:"combine",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return _c0*(1.0-amount)+(_c0*_c1)*amount;"},{name:"diff",type:"combine",inputs:[],glsl:"   return vec4(abs(_c0.rgb-_c1.rgb), max(_c0.a, _c1.a));"},{name:"modulate",type:"combineCoord",inputs:[{type:"float",name:"amount",default:.1}],glsl:`   //  return fract(st+(_c0.xy-0.5)*amount);
   return _st + _c0.xy*amount;`},{name:"modulateScale",type:"combineCoord",inputs:[{type:"float",name:"multiple",default:1},{type:"float",name:"offset",default:1}],glsl:`   vec2 xy = _st - vec2(0.5);
   xy*=(1.0/vec2(offset + multiple*_c0.r, offset + multiple*_c0.g));
   xy+=vec2(0.5);
   return xy;`},{name:"modulatePixelate",type:"combineCoord",inputs:[{type:"float",name:"multiple",default:10},{type:"float",name:"offset",default:3}],glsl:`   vec2 xy = vec2(offset + _c0.x*multiple, offset + _c0.y*multiple);
   return (floor(_st * xy) + 0.5)/xy;`},{name:"modulateRotate",type:"combineCoord",inputs:[{type:"float",name:"multiple",default:1},{type:"float",name:"offset",default:0}],glsl:`   vec2 xy = _st - vec2(0.5);
   float angle = offset + _c0.x * multiple;
   xy = mat2(cos(angle),-sin(angle), sin(angle),cos(angle))*xy;
   xy += 0.5;
   return xy;`},{name:"modulateHue",type:"combineCoord",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return _st + (vec2(_c0.g - _c0.r, _c0.b - _c0.g) * amount * 1.0/resolution);"},{name:"invert",type:"color",inputs:[{type:"float",name:"amount",default:1}],glsl:"   return vec4((1.0-_c0.rgb)*amount + _c0.rgb*(1.0-amount), _c0.a);"},{name:"contrast",type:"color",inputs:[{type:"float",name:"amount",default:1.6}],glsl:`   vec4 c = (_c0-vec4(0.5))*vec4(amount) + vec4(0.5);
   return vec4(c.rgb, _c0.a);`},{name:"brightness",type:"color",inputs:[{type:"float",name:"amount",default:.4}],glsl:"   return vec4(_c0.rgb + vec3(amount), _c0.a);"},{name:"mask",type:"combine",inputs:[],glsl:`   float a = _luminance(_c1.rgb);
  return vec4(_c0.rgb*a, a*_c0.a);`},{name:"luma",type:"color",inputs:[{type:"float",name:"threshold",default:.5},{type:"float",name:"tolerance",default:.1}],glsl:`   float a = smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb));
   return vec4(_c0.rgb*a, a);`},{name:"thresh",type:"color",inputs:[{type:"float",name:"threshold",default:.5},{type:"float",name:"tolerance",default:.04}],glsl:"   return vec4(vec3(smoothstep(threshold-(tolerance+0.0000001), threshold+(tolerance+0.0000001), _luminance(_c0.rgb))), _c0.a);"},{name:"color",type:"color",inputs:[{type:"float",name:"r",default:1},{type:"float",name:"g",default:1},{type:"float",name:"b",default:1},{type:"float",name:"a",default:1}],glsl:`   vec4 c = vec4(r, g, b, a);
   vec4 pos = step(0.0, c); // detect whether negative
   // if > 0, return r * _c0
   // if < 0 return (1.0-r) * _c0
   return vec4(mix((1.0-_c0)*abs(c), c*_c0, pos));`},{name:"saturate",type:"color",inputs:[{type:"float",name:"amount",default:2}],glsl:`   const vec3 W = vec3(0.2125, 0.7154, 0.0721);
   vec3 intensity = vec3(dot(_c0.rgb, W));
   return vec4(mix(intensity, _c0.rgb, amount), _c0.a);`},{name:"hue",type:"color",inputs:[{type:"float",name:"hue",default:.4}],glsl:`   vec3 c = _rgbToHsv(_c0.rgb);
   c.r += hue;
   //  c.r = fract(c.r);
   return vec4(_hsvToRgb(c), _c0.a);`},{name:"colorama",type:"color",inputs:[{type:"float",name:"amount",default:.005}],glsl:`   vec3 c = _rgbToHsv(_c0.rgb);
   c += vec3(amount);
   c = _hsvToRgb(c);
   c = fract(c);
   return vec4(c, _c0.a);`},{name:"prev",type:"src",inputs:[],glsl:"   return texture2D(prevBuffer, fract(_st));"},{name:"sum",type:"color",inputs:[{type:"vec4",name:"scale",default:1}],glsl:`   vec4 v = _c0 * s;
   return v.r + v.g + v.b + v.a;
   }
   float sum(vec2 _st, vec4 s) { // vec4 is not a typo, because argument type is not overloaded
   vec2 v = _st.xy * s.xy;
   return v.x + v.y;`},{name:"r",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.r * scale + offset);"},{name:"g",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.g * scale + offset);"},{name:"b",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.b * scale + offset);"},{name:"a",type:"color",inputs:[{type:"float",name:"scale",default:1},{type:"float",name:"offset",default:0}],glsl:"   return vec4(_c0.a * scale + offset);"}];class jT{constructor({defaultUniforms:e,defaultOutput:t,extendTransforms:n=[],changeListener:r=(()=>{})}={}){this.defaultOutput=t,this.defaultUniforms=e,this.changeListener=r,this.extendTransforms=n,this.generators={},this.init()}init(){const e=YT();return this.glslTransforms={},this.generators=Object.entries(this.generators).reduce((t,[n,r])=>(this.changeListener({type:"remove",synth:this,method:n}),t),{}),this.sourceClass=class extends Eo{},Array.isArray(this.extendTransforms)?e.concat(this.extendTransforms):typeof this.extendTransforms=="object"&&this.extendTransforms.type&&e.push(this.extendTransforms),e.map(t=>this.setFunction(t))}_addMethod(e,t){const n=this;if(this.glslTransforms[e]=t,t.type==="src"){const r=(...s)=>new this.sourceClass({name:e,transform:t,userArgs:s,defaultOutput:this.defaultOutput,defaultUniforms:this.defaultUniforms,synth:n});return this.generators[e]=r,this.changeListener({type:"add",synth:this,method:e}),r}else this.sourceClass.prototype[e]=function(...r){return this.transforms.push({name:e,transform:t,userArgs:r,synth:n}),this}}setFunction(e){var t=$T(e);t&&this._addMethod(e.name,t)}}const qT={src:{returnType:"vec4",args:["vec2 _st"]},coord:{returnType:"vec2",args:["vec2 _st"]},color:{returnType:"vec4",args:["vec4 _c0"]},combine:{returnType:"vec4",args:["vec4 _c0","vec4 _c1"]},combineCoord:{returnType:"vec2",args:["vec2 _st","vec4 _c0"]}};function $T(i){let e=qT[i.type];if(e){let t=e.args.map(l=>l).join(", "),n=i.inputs.map(l=>`${l.type} ${l.name}`).join(", "),r=`${t}${n.length>0?", "+n:""}`,s=`
  ${e.returnType} ${i.name}(${r}) {
      ${i.glsl}
  }
`;return(i.type==="combine"||i.type==="combineCoord")&&i.inputs.unshift({name:"color",type:"vec4"}),Object.assign({},i,{glsl:s})}else console.warn(`type ${i.type} not recognized`,i)}var Fl={exports:{}},ZT=Fl.exports,hm;function KT(){return hm||(hm=1,(function(i,e){(function(t,n){i.exports=n()})(ZT,(function(){var t=function(m){return m instanceof Uint8Array||m instanceof Uint16Array||m instanceof Uint32Array||m instanceof Int8Array||m instanceof Int16Array||m instanceof Int32Array||m instanceof Float32Array||m instanceof Float64Array||m instanceof Uint8ClampedArray},n=function(m,T){for(var U=Object.keys(T),oe=0;oe<U.length;++oe)m[U[oe]]=T[U[oe]];return m},r=`
`;function s(m){return typeof atob<"u"?atob(m):"base64:"+m}function l(m){var T=new Error("(regl) "+m);throw console.error(T),T}function o(m,T){m||l(T)}function c(m){return m?": "+m:""}function u(m,T,U){m in T||l("unknown parameter ("+m+")"+c(U)+". possible values: "+Object.keys(T).join())}function f(m,T){t(m)||l("invalid parameter type"+c(T)+". must be a typed array")}function h(m,T){switch(T){case"number":return typeof m=="number";case"object":return typeof m=="object";case"string":return typeof m=="string";case"boolean":return typeof m=="boolean";case"function":return typeof m=="function";case"undefined":return typeof m>"u";case"symbol":return typeof m=="symbol"}}function d(m,T,U){h(m,T)||l("invalid parameter type"+c(U)+". expected "+T+", got "+typeof m)}function v(m,T){m>=0&&(m|0)===m||l("invalid parameter type, ("+m+")"+c(T)+". must be a nonnegative integer")}function y(m,T,U){T.indexOf(m)<0&&l("invalid value"+c(U)+". must be one of: "+T)}var S=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function g(m){Object.keys(m).forEach(function(T){S.indexOf(T)<0&&l('invalid regl constructor argument "'+T+'". must be one of '+S)})}function _(m,T){for(m=m+"";m.length<T;)m=" "+m;return m}function D(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function E(m,T){this.number=m,this.line=T,this.errors=[]}function B(m,T,U){this.file=m,this.line=T,this.message=U}function H(){var m=new Error,T=(m.stack||m).toString(),U=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(T);if(U)return U[1];var oe=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(T);return oe?oe[1]:"unknown"}function te(){var m=new Error,T=(m.stack||m).toString(),U=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(T);if(U)return U[1];var oe=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(T);return oe?oe[1]:"unknown"}function X(m,T){var U=m.split(`
`),oe=1,be=0,ae={unknown:new D,0:new D};ae.unknown.name=ae[0].name=T||H(),ae.unknown.lines.push(new E(0,""));for(var he=0;he<U.length;++he){var Pe=U[he],Oe=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Pe);if(Oe)switch(Oe[1]){case"line":var Be=/(\d+)(\s+\d+)?/.exec(Oe[2]);Be&&(oe=Be[1]|0,Be[2]&&(be=Be[2]|0,be in ae||(ae[be]=new D)));break;case"define":var Ne=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Oe[2]);Ne&&(ae[be].name=Ne[1]?s(Ne[2]):Ne[2]);break}ae[be].lines.push(new E(oe++,Pe))}return Object.keys(ae).forEach(function(Ve){var $e=ae[Ve];$e.lines.forEach(function(De){$e.index[De.number]=De})}),ae}function Le(m){var T=[];return m.split(`
`).forEach(function(U){if(!(U.length<5)){var oe=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(U);oe?T.push(new B(oe[1]|0,oe[2]|0,oe[3].trim())):U.length>0&&T.push(new B("unknown",0,U))}}),T}function L(m,T){T.forEach(function(U){var oe=m[U.file];if(oe){var be=oe.index[U.line];if(be){be.errors.push(U),oe.hasErrors=!0;return}}m.unknown.hasErrors=!0,m.unknown.lines[0].errors.push(U)})}function W(m,T,U,oe,be){if(!m.getShaderParameter(T,m.COMPILE_STATUS)){var ae=m.getShaderInfoLog(T),he=oe===m.FRAGMENT_SHADER?"fragment":"vertex";j(U,"string",he+" shader source must be a string",be);var Pe=X(U,be),Oe=Le(ae);L(Pe,Oe),Object.keys(Pe).forEach(function(Be){var Ne=Pe[Be];if(!Ne.hasErrors)return;var Ve=[""],$e=[""];function De(Xe,Q){Ve.push(Xe),$e.push(Q||"")}De("file number "+Be+": "+Ne.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ne.lines.forEach(function(Xe){if(Xe.errors.length>0){De(_(Xe.number,4)+"|  ","background-color:yellow; font-weight:bold"),De(Xe.line+r,"color:red; background-color:yellow; font-weight:bold");var Q=0;Xe.errors.forEach(function(de){var Fe=de.message,Qe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Fe);if(Qe){var Me=Qe[1];switch(Fe=Qe[2],Me){case"assign":Me="=";break}Q=Math.max(Xe.line.indexOf(Me,Q),0)}else Q=0;De(_("| ",6)),De(_("^^^",Q+3)+r,"font-weight:bold"),De(_("| ",6)),De(Fe+r,"font-weight:bold")}),De(_("| ",6)+r)}else De(_(Xe.number,4)+"|  "),De(Xe.line+r,"color:red")}),typeof document<"u"&&!window.chrome?($e[0]=Ve.join("%c"),console.log.apply(console,$e)):console.log(Ve.join(""))}),o.raise("Error compiling "+he+" shader, "+Pe[0].name)}}function Te(m,T,U,oe,be){if(!m.getProgramParameter(T,m.LINK_STATUS)){var ae=m.getProgramInfoLog(T),he=X(U,be),Pe=X(oe,be),Oe='Error linking program with vertex shader, "'+Pe[0].name+'", and fragment shader "'+he[0].name+'"';typeof document<"u"?console.log("%c"+Oe+r+"%c"+ae,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Oe+r+ae),o.raise(Oe)}}function We(m){m._commandRef=H()}function O(m,T,U,oe){We(m);function be(Oe){return Oe?oe.id(Oe):0}m._fragId=be(m.static.frag),m._vertId=be(m.static.vert);function ae(Oe,Be){Object.keys(Be).forEach(function(Ne){Oe[oe.id(Ne)]=!0})}var he=m._uniformSet={};ae(he,T.static),ae(he,T.dynamic);var Pe=m._attributeSet={};ae(Pe,U.static),ae(Pe,U.dynamic),m._hasCount="count"in m.static||"count"in m.dynamic||"elements"in m.static||"elements"in m.dynamic}function b(m,T){var U=te();l(m+" in command "+(T||H())+(U==="unknown"?"":" called from "+U))}function F(m,T,U){m||b(T,U||H())}function N(m,T,U,oe){m in T||b("unknown parameter ("+m+")"+c(U)+". possible values: "+Object.keys(T).join(),oe||H())}function j(m,T,U,oe){h(m,T)||b("invalid parameter type"+c(U)+". expected "+T+", got "+typeof m,oe||H())}function ue(m){m()}function fe(m,T,U){m.texture?y(m.texture._texture.internalformat,T,"unsupported texture format for attachment"):y(m.renderbuffer._renderbuffer.format,U,"unsupported renderbuffer format for attachment")}var ge=33071,q=9728,se=9984,Ie=9985,et=9986,Ge=9987,xt=5120,Rt=5121,gt=5122,tn=5123,nn=5124,Ct=5125,le=5126,dn=32819,Ot=32820,Yt=33635,zt=34042,vn=36193,It={};It[xt]=It[Rt]=1,It[gt]=It[tn]=It[vn]=It[Yt]=It[dn]=It[Ot]=2,It[nn]=It[Ct]=It[le]=It[zt]=4;function $t(m,T){return m===Ot||m===dn||m===Yt?2:m===zt?4:It[m]*T}function an(m){return!(m&m-1)&&!!m}function In(m,T,U){var oe,be=T.width,ae=T.height,he=T.channels;o(be>0&&be<=U.maxTextureSize&&ae>0&&ae<=U.maxTextureSize,"invalid texture shape"),(m.wrapS!==ge||m.wrapT!==ge)&&o(an(be)&&an(ae),"incompatible wrap mode for texture, both width and height must be power of 2"),T.mipmask===1?be!==1&&ae!==1&&o(m.minFilter!==se&&m.minFilter!==et&&m.minFilter!==Ie&&m.minFilter!==Ge,"min filter requires mipmap"):(o(an(be)&&an(ae),"texture must be a square power of 2 to support mipmapping"),o(T.mipmask===(be<<1)-1,"missing or incomplete mipmap data")),T.type===le&&(U.extensions.indexOf("oes_texture_float_linear")<0&&o(m.minFilter===q&&m.magFilter===q,"filter not supported, must enable oes_texture_float_linear"),o(!m.genMipmaps,"mipmap generation not supported with float textures"));var Pe=T.images;for(oe=0;oe<16;++oe)if(Pe[oe]){var Oe=be>>oe,Be=ae>>oe;o(T.mipmask&1<<oe,"missing mipmap data");var Ne=Pe[oe];if(o(Ne.width===Oe&&Ne.height===Be,"invalid shape for mip images"),o(Ne.format===T.format&&Ne.internalformat===T.internalformat&&Ne.type===T.type,"incompatible type for mip image"),!Ne.compressed)if(Ne.data){var Ve=Math.ceil($t(Ne.type,he)*Oe/Ne.unpackAlignment)*Ne.unpackAlignment;o(Ne.data.byteLength===Ve*Be,"invalid data for image, buffer size is inconsistent with image format")}else Ne.element||Ne.copy}else m.genMipmaps||o((T.mipmask&1<<oe)===0,"extra mipmap data");T.compressed&&o(!m.genMipmaps,"mipmap generation for compressed images not supported")}function kn(m,T,U,oe){var be=m.width,ae=m.height,he=m.channels;o(be>0&&be<=oe.maxTextureSize&&ae>0&&ae<=oe.maxTextureSize,"invalid texture shape"),o(be===ae,"cube map must be square"),o(T.wrapS===ge&&T.wrapT===ge,"wrap mode not supported by cube map");for(var Pe=0;Pe<U.length;++Pe){var Oe=U[Pe];o(Oe.width===be&&Oe.height===ae,"inconsistent cube map face shape"),T.genMipmaps&&(o(!Oe.compressed,"can not generate mipmap for compressed textures"),o(Oe.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Be=Oe.images,Ne=0;Ne<16;++Ne){var Ve=Be[Ne];if(Ve){var $e=be>>Ne,De=ae>>Ne;o(Oe.mipmask&1<<Ne,"missing mipmap data"),o(Ve.width===$e&&Ve.height===De,"invalid shape for mip images"),o(Ve.format===m.format&&Ve.internalformat===m.internalformat&&Ve.type===m.type,"incompatible type for mip image"),Ve.compressed||(Ve.data?o(Ve.data.byteLength===$e*De*Math.max($t(Ve.type,he),Ve.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Ve.element||Ve.copy)}}}}var p=n(o,{optional:ue,raise:l,commandRaise:b,command:F,parameter:u,commandParameter:N,constructor:g,type:d,commandType:j,isTypedArray:f,nni:v,oneOf:y,shaderError:W,linkError:Te,callSite:te,saveCommandRef:We,saveDrawInfo:O,framebufferFormat:fe,guessCommand:H,texture2D:In,textureCube:kn}),A=0,ye=0,tt=5,Ke=6;function Je(m,T){this.id=A++,this.type=m,this.data=T}function Mt(m){return m.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function nt(m){if(m.length===0)return[];var T=m.charAt(0),U=m.charAt(m.length-1);if(m.length>1&&T===U&&(T==='"'||T==="'"))return['"'+Mt(m.substr(1,m.length-2))+'"'];var oe=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(m);if(oe)return nt(m.substr(0,oe.index)).concat(nt(oe[1])).concat(nt(m.substr(oe.index+oe[0].length)));var be=m.split(".");if(be.length===1)return['"'+Mt(m)+'"'];for(var ae=[],he=0;he<be.length;++he)ae=ae.concat(nt(be[he]));return ae}function dt(m){return"["+nt(m).join("][")+"]"}function $(m,T){return new Je(m,dt(T+""))}function it(m){return typeof m=="function"&&!m._reglType||m instanceof Je}function ze(m,T){if(typeof m=="function")return new Je(ye,m);if(typeof m=="number"||typeof m=="boolean")return new Je(tt,m);if(Array.isArray(m))return new Je(Ke,m.map((U,oe)=>ze(U,T+"["+oe+"]")));if(m instanceof Je)return m;p(!1,"invalid option type in uniform "+T)}var bt={DynamicVariable:Je,define:$,isDynamic:it,unbox:ze,accessor:dt},Tt={next:typeof requestAnimationFrame=="function"?function(m){return requestAnimationFrame(m)}:function(m){return setTimeout(m,16)},cancel:typeof cancelAnimationFrame=="function"?function(m){return cancelAnimationFrame(m)}:clearTimeout},Lt=typeof performance<"u"&&performance.now?function(){return performance.now()}:function(){return+new Date};function At(){var m={"":0},T=[""];return{id:function(U){var oe=m[U];return oe||(oe=m[U]=T.length,T.push(U),oe)},str:function(U){return T[U]}}}function Y(m,T,U){var oe=document.createElement("canvas");n(oe.style,{border:0,margin:0,padding:0,top:0,left:0}),m.appendChild(oe),m===document.body&&(oe.style.position="absolute",n(m.style,{margin:0,padding:0}));function be(){var Pe=window.innerWidth,Oe=window.innerHeight;if(m!==document.body){var Be=m.getBoundingClientRect();Pe=Be.right-Be.left,Oe=Be.bottom-Be.top}oe.width=U*Pe,oe.height=U*Oe,n(oe.style,{width:Pe+"px",height:Oe+"px"})}var ae;m!==document.body&&typeof ResizeObserver=="function"?(ae=new ResizeObserver(function(){setTimeout(be)}),ae.observe(m)):window.addEventListener("resize",be,!1);function he(){ae?ae.disconnect():window.removeEventListener("resize",be),m.removeChild(oe)}return be(),{canvas:oe,onDestroy:he}}function st(m,T){function U(oe){try{return m.getContext(oe,T)}catch{return null}}return U("webgl")||U("experimental-webgl")||U("webgl-experimental")}function rt(m){return typeof m.nodeName=="string"&&typeof m.appendChild=="function"&&typeof m.getBoundingClientRect=="function"}function ft(m){return typeof m.drawArrays=="function"||typeof m.drawElements=="function"}function ot(m){return typeof m=="string"?m.split():(p(Array.isArray(m),"invalid extension array"),m)}function Ye(m){return typeof m=="string"?(p(typeof document<"u","not supported outside of DOM"),document.querySelector(m)):m}function St(m){var T=m||{},U,oe,be,ae,he={},Pe=[],Oe=[],Be=typeof window>"u"?1:window.devicePixelRatio,Ne=!1,Ve=function(Xe){Xe&&p.raise(Xe)},$e=function(){};if(typeof T=="string"?(p(typeof document<"u","selector queries only supported in DOM enviroments"),U=document.querySelector(T),p(U,"invalid query string for element")):typeof T=="object"?rt(T)?U=T:ft(T)?(ae=T,be=ae.canvas):(p.constructor(T),"gl"in T?ae=T.gl:"canvas"in T?be=Ye(T.canvas):"container"in T&&(oe=Ye(T.container)),"attributes"in T&&(he=T.attributes,p.type(he,"object","invalid context attributes")),"extensions"in T&&(Pe=ot(T.extensions)),"optionalExtensions"in T&&(Oe=ot(T.optionalExtensions)),"onDone"in T&&(p.type(T.onDone,"function","invalid or missing onDone callback"),Ve=T.onDone),"profile"in T&&(Ne=!!T.profile),"pixelRatio"in T&&(Be=+T.pixelRatio,p(Be>0,"invalid pixel ratio"))):p.raise("invalid arguments to regl"),U&&(U.nodeName.toLowerCase()==="canvas"?be=U:oe=U),!ae){if(!be){p(typeof document<"u","must manually specify webgl context outside of DOM environments");var De=Y(oe||document.body,Ve,Be);if(!De)return null;be=De.canvas,$e=De.onDestroy}he.premultipliedAlpha===void 0&&(he.premultipliedAlpha=!0),ae=st(be,he)}return ae?{gl:ae,canvas:be,container:oe,extensions:Pe,optionalExtensions:Oe,pixelRatio:Be,profile:Ne,onDone:Ve,onDestroy:$e}:($e(),Ve("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function kt(m,T){var U={};function oe(he){p.type(he,"string","extension name must be string");var Pe=he.toLowerCase(),Oe;try{Oe=U[Pe]=m.getExtension(Pe)}catch{}return!!Oe}for(var be=0;be<T.extensions.length;++be){var ae=T.extensions[be];if(!oe(ae))return T.onDestroy(),T.onDone('"'+ae+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return T.optionalExtensions.forEach(oe),{extensions:U,restore:function(){Object.keys(U).forEach(function(he){if(U[he]&&!oe(he))throw new Error("(regl): error restoring extension "+he)})}}}function fn(m,T){for(var U=Array(m),oe=0;oe<m;++oe)U[oe]=T(oe);return U}var gn=5120,Ai=5121,Qn=5122,Mo=5123,To=5124,ic=5125,va=5126;function Ao(m){for(var T=16;T<=1<<28;T*=16)if(m<=T)return T;return 0}function Ur(m){var T,U;return T=(m>65535)<<4,m>>>=T,U=(m>255)<<3,m>>>=U,T|=U,U=(m>15)<<2,m>>>=U,T|=U,U=(m>3)<<1,m>>>=U,T|=U,T|m>>1}function Ms(){var m=fn(8,function(){return[]});function T(ae){var he=Ao(ae),Pe=m[Ur(he)>>2];return Pe.length>0?Pe.pop():new ArrayBuffer(he)}function U(ae){m[Ur(ae.byteLength)>>2].push(ae)}function oe(ae,he){var Pe=null;switch(ae){case gn:Pe=new Int8Array(T(he),0,he);break;case Ai:Pe=new Uint8Array(T(he),0,he);break;case Qn:Pe=new Int16Array(T(2*he),0,he);break;case Mo:Pe=new Uint16Array(T(2*he),0,he);break;case To:Pe=new Int32Array(T(4*he),0,he);break;case ic:Pe=new Uint32Array(T(4*he),0,he);break;case va:Pe=new Float32Array(T(4*he),0,he);break;default:return null}return Pe.length!==he?Pe.subarray(0,he):Pe}function be(ae){U(ae.buffer)}return{alloc:T,free:U,allocType:oe,freeType:be}}var bn=Ms();bn.zero=Ms();var rc=3408,ac=3410,I=3411,pe=3412,Ae=3413,_e=3414,we=3415,vt=33901,Ut=33902,Wt=3379,Xt=3386,rn=34921,Ht=36347,Jt=36348,Sn=35661,Mn=35660,_i=34930,Ni=36349,Cn=34076,sn=34024,Ts=7936,Ln=7937,er=7938,wo=35724,Fr=34047,As=36063,ei=34852,wi=3553,ga=34067,ci=34069,ws=33984,Br=6408,ya=5126,Ef=5121,sc=36160,x_=36053,b_=36064,S_=16384,E_=function(m,T){var U=1;T.ext_texture_filter_anisotropic&&(U=m.getParameter(Fr));var oe=1,be=1;T.webgl_draw_buffers&&(oe=m.getParameter(ei),be=m.getParameter(As));var ae=!!T.oes_texture_float;if(ae){var he=m.createTexture();m.bindTexture(wi,he),m.texImage2D(wi,0,Br,1,1,0,Br,ya,null);var Pe=m.createFramebuffer();if(m.bindFramebuffer(sc,Pe),m.framebufferTexture2D(sc,b_,wi,he,0),m.bindTexture(wi,null),m.checkFramebufferStatus(sc)!==x_)ae=!1;else{m.viewport(0,0,1,1),m.clearColor(1,0,0,1),m.clear(S_);var Oe=bn.allocType(ya,4);m.readPixels(0,0,1,1,Br,ya,Oe),m.getError()?ae=!1:(m.deleteFramebuffer(Pe),m.deleteTexture(he),ae=Oe[0]===1),bn.freeType(Oe)}}var Be=typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ne=!0;if(!Be){var Ve=m.createTexture(),$e=bn.allocType(Ef,36);m.activeTexture(ws),m.bindTexture(ga,Ve),m.texImage2D(ci,0,Br,3,3,0,Br,Ef,$e),bn.freeType($e),m.bindTexture(ga,null),m.deleteTexture(Ve),Ne=!m.getError()}return{colorBits:[m.getParameter(ac),m.getParameter(I),m.getParameter(pe),m.getParameter(Ae)],depthBits:m.getParameter(_e),stencilBits:m.getParameter(we),subpixelBits:m.getParameter(rc),extensions:Object.keys(T).filter(function(De){return!!T[De]}),maxAnisotropic:U,maxDrawbuffers:oe,maxColorAttachments:be,pointSizeDims:m.getParameter(vt),lineWidthDims:m.getParameter(Ut),maxViewportDims:m.getParameter(Xt),maxCombinedTextureUnits:m.getParameter(Sn),maxCubeMapSize:m.getParameter(Cn),maxRenderbufferSize:m.getParameter(sn),maxTextureUnits:m.getParameter(_i),maxTextureSize:m.getParameter(Wt),maxAttributes:m.getParameter(rn),maxVertexUniforms:m.getParameter(Ht),maxVertexTextureUnits:m.getParameter(Mn),maxVaryingVectors:m.getParameter(Jt),maxFragmentUniforms:m.getParameter(Ni),glsl:m.getParameter(wo),renderer:m.getParameter(Ln),vendor:m.getParameter(Ts),version:m.getParameter(er),readFloat:ae,npotTextureCube:Ne}};function Ii(m){return!!m&&typeof m=="object"&&Array.isArray(m.shape)&&Array.isArray(m.stride)&&typeof m.offset=="number"&&m.shape.length===m.stride.length&&(Array.isArray(m.data)||t(m.data))}var yi=function(m){return Object.keys(m).map(function(T){return m[T]})},Ro={shape:w_,flatten:A_};function M_(m,T,U){for(var oe=0;oe<T;++oe)U[oe]=m[oe]}function T_(m,T,U,oe){for(var be=0,ae=0;ae<T;++ae)for(var he=m[ae],Pe=0;Pe<U;++Pe)oe[be++]=he[Pe]}function Mf(m,T,U,oe,be,ae){for(var he=ae,Pe=0;Pe<T;++Pe)for(var Oe=m[Pe],Be=0;Be<U;++Be)for(var Ne=Oe[Be],Ve=0;Ve<oe;++Ve)be[he++]=Ne[Ve]}function Tf(m,T,U,oe,be){for(var ae=1,he=U+1;he<T.length;++he)ae*=T[he];var Pe=T[U];if(T.length-U===4){var Oe=T[U+1],Be=T[U+2],Ne=T[U+3];for(he=0;he<Pe;++he)Mf(m[he],Oe,Be,Ne,oe,be),be+=ae}else for(he=0;he<Pe;++he)Tf(m[he],T,U+1,oe,be),be+=ae}function A_(m,T,U,oe){var be=1;if(T.length)for(var ae=0;ae<T.length;++ae)be*=T[ae];else be=0;var he=oe||bn.allocType(U,be);switch(T.length){case 0:break;case 1:M_(m,T[0],he);break;case 2:T_(m,T[0],T[1],he);break;case 3:Mf(m,T[0],T[1],T[2],he,0);break;default:Tf(m,T,0,he,0)}return he}function w_(m){for(var T=[],U=m;U.length;U=U[0])T.push(U.length);return T}var oc={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},R_=5120,C_=5122,L_=5124,P_=5121,D_=5123,O_=5125,N_=5126,I_=5126,Gr={int8:R_,int16:C_,int32:L_,uint8:P_,uint16:D_,uint32:O_,float:N_,float32:I_},U_=35048,F_=35040,Co={dynamic:U_,stream:F_,static:35044},lc=Ro.flatten,Af=Ro.shape,wf=35044,B_=35040,cc=5121,uc=5126,_r=[];_r[5120]=1,_r[5122]=2,_r[5124]=4,_r[5121]=1,_r[5123]=2,_r[5125]=4,_r[5126]=4;function Lo(m){return oc[Object.prototype.toString.call(m)]|0}function Rf(m,T){for(var U=0;U<T.length;++U)m[U]=T[U]}function Cf(m,T,U,oe,be,ae,he){for(var Pe=0,Oe=0;Oe<U;++Oe)for(var Be=0;Be<oe;++Be)m[Pe++]=T[be*Oe+ae*Be+he]}function G_(m,T,U,oe){var be=0,ae={};function he(Q){this.id=be++,this.buffer=m.createBuffer(),this.type=Q,this.usage=wf,this.byteLength=0,this.dimension=1,this.dtype=cc,this.persistentData=null,U.profile&&(this.stats={size:0})}he.prototype.bind=function(){m.bindBuffer(this.type,this.buffer)},he.prototype.destroy=function(){$e(this)};var Pe=[];function Oe(Q,de){var Fe=Pe.pop();return Fe||(Fe=new he(Q)),Fe.bind(),Ve(Fe,de,B_,0,1,!1),Fe}function Be(Q){Pe.push(Q)}function Ne(Q,de,Fe){Q.byteLength=de.byteLength,m.bufferData(Q.type,de,Fe)}function Ve(Q,de,Fe,Qe,Me,at){var Ce;if(Q.usage=Fe,Array.isArray(de)){if(Q.dtype=Qe||uc,de.length>0){var je;if(Array.isArray(de[0])){Ce=Af(de);for(var Re=1,qe=1;qe<Ce.length;++qe)Re*=Ce[qe];Q.dimension=Re,je=lc(de,Ce,Q.dtype),Ne(Q,je,Fe),at?Q.persistentData=je:bn.freeType(je)}else if(typeof de[0]=="number"){Q.dimension=Me;var _t=bn.allocType(Q.dtype,de.length);Rf(_t,de),Ne(Q,_t,Fe),at?Q.persistentData=_t:bn.freeType(_t)}else t(de[0])?(Q.dimension=de[0].length,Q.dtype=Qe||Lo(de[0])||uc,je=lc(de,[de.length,de[0].length],Q.dtype),Ne(Q,je,Fe),at?Q.persistentData=je:bn.freeType(je)):p.raise("invalid buffer data")}}else if(t(de))Q.dtype=Qe||Lo(de),Q.dimension=Me,Ne(Q,de,Fe),at&&(Q.persistentData=new Uint8Array(new Uint8Array(de.buffer)));else if(Ii(de)){Ce=de.shape;var Pt=de.stride,Ze=de.offset,ke=0,Ee=0,wt=0,Ft=0;Ce.length===1?(ke=Ce[0],Ee=1,wt=Pt[0],Ft=0):Ce.length===2?(ke=Ce[0],Ee=Ce[1],wt=Pt[0],Ft=Pt[1]):p.raise("invalid shape"),Q.dtype=Qe||Lo(de.data)||uc,Q.dimension=Ee;var ct=bn.allocType(Q.dtype,ke*Ee);Cf(ct,de.data,ke,Ee,wt,Ft,Ze),Ne(Q,ct,Fe),at?Q.persistentData=ct:bn.freeType(ct)}else de instanceof ArrayBuffer?(Q.dtype=cc,Q.dimension=Me,Ne(Q,de,Fe),at&&(Q.persistentData=new Uint8Array(new Uint8Array(de)))):p.raise("invalid buffer data")}function $e(Q){T.bufferCount--,oe(Q);var de=Q.buffer;p(de,"buffer must not be deleted already"),m.deleteBuffer(de),Q.buffer=null,delete ae[Q.id]}function De(Q,de,Fe,Qe){T.bufferCount++;var Me=new he(de);ae[Me.id]=Me;function at(Re){var qe=wf,_t=null,Pt=0,Ze=0,ke=1;return Array.isArray(Re)||t(Re)||Ii(Re)||Re instanceof ArrayBuffer?_t=Re:typeof Re=="number"?Pt=Re|0:Re&&(p.type(Re,"object","buffer arguments must be an object, a number or an array"),"data"in Re&&(p(_t===null||Array.isArray(_t)||t(_t)||Ii(_t),"invalid data for buffer"),_t=Re.data),"usage"in Re&&(p.parameter(Re.usage,Co,"invalid buffer usage"),qe=Co[Re.usage]),"type"in Re&&(p.parameter(Re.type,Gr,"invalid buffer type"),Ze=Gr[Re.type]),"dimension"in Re&&(p.type(Re.dimension,"number","invalid dimension"),ke=Re.dimension|0),"length"in Re&&(p.nni(Pt,"buffer length must be a nonnegative integer"),Pt=Re.length|0)),Me.bind(),_t?Ve(Me,_t,qe,Ze,ke,Qe):(Pt&&m.bufferData(Me.type,Pt,qe),Me.dtype=Ze||cc,Me.usage=qe,Me.dimension=ke,Me.byteLength=Pt),U.profile&&(Me.stats.size=Me.byteLength*_r[Me.dtype]),at}function Ce(Re,qe){p(qe+Re.byteLength<=Me.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Re.byteLength+" starting from offset "+qe+" to a buffer of size "+Me.byteLength),m.bufferSubData(Me.type,qe,Re)}function je(Re,qe){var _t=(qe||0)|0,Pt;if(Me.bind(),t(Re)||Re instanceof ArrayBuffer)Ce(Re,_t);else if(Array.isArray(Re)){if(Re.length>0)if(typeof Re[0]=="number"){var Ze=bn.allocType(Me.dtype,Re.length);Rf(Ze,Re),Ce(Ze,_t),bn.freeType(Ze)}else if(Array.isArray(Re[0])||t(Re[0])){Pt=Af(Re);var ke=lc(Re,Pt,Me.dtype);Ce(ke,_t),bn.freeType(ke)}else p.raise("invalid buffer data")}else if(Ii(Re)){Pt=Re.shape;var Ee=Re.stride,wt=0,Ft=0,ct=0,jt=0;Pt.length===1?(wt=Pt[0],Ft=1,ct=Ee[0],jt=0):Pt.length===2?(wt=Pt[0],Ft=Pt[1],ct=Ee[0],jt=Ee[1]):p.raise("invalid shape");var Dt=Array.isArray(Re.data)?Me.dtype:Lo(Re.data),Vt=bn.allocType(Dt,wt*Ft);Cf(Vt,Re.data,wt,Ft,ct,jt,Re.offset),Ce(Vt,_t),bn.freeType(Vt)}else p.raise("invalid data for buffer subdata");return at}return Fe||at(Q),at._reglType="buffer",at._buffer=Me,at.subdata=je,U.profile&&(at.stats=Me.stats),at.destroy=function(){$e(Me)},at}function Xe(){yi(ae).forEach(function(Q){Q.buffer=m.createBuffer(),m.bindBuffer(Q.type,Q.buffer),m.bufferData(Q.type,Q.persistentData||Q.byteLength,Q.usage)})}return U.profile&&(T.getTotalBufferSize=function(){var Q=0;return Object.keys(ae).forEach(function(de){Q+=ae[de].stats.size}),Q}),{create:De,createStream:Oe,destroyStream:Be,clear:function(){yi(ae).forEach($e),Pe.forEach($e)},getBuffer:function(Q){return Q&&Q._buffer instanceof he?Q._buffer:null},restore:Xe,_initBuffer:Ve}}var k_=0,z_=0,H_=1,V_=1,W_=4,X_=4,xa={points:k_,point:z_,lines:H_,line:V_,triangles:W_,triangle:X_,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Y_=0,j_=1,Rs=4,q_=5120,ba=5121,Lf=5122,Sa=5123,Pf=5124,kr=5125,fc=34963,$_=35040,Z_=35044;function K_(m,T,U,oe){var be={},ae=0,he={uint8:ba,uint16:Sa};T.oes_element_index_uint&&(he.uint32=kr);function Pe(Xe){this.id=ae++,be[this.id]=this,this.buffer=Xe,this.primType=Rs,this.vertCount=0,this.type=0}Pe.prototype.bind=function(){this.buffer.bind()};var Oe=[];function Be(Xe){var Q=Oe.pop();return Q||(Q=new Pe(U.create(null,fc,!0,!1)._buffer)),Ve(Q,Xe,$_,-1,-1,0,0),Q}function Ne(Xe){Oe.push(Xe)}function Ve(Xe,Q,de,Fe,Qe,Me,at){Xe.buffer.bind();var Ce;if(Q){var je=at;!at&&(!t(Q)||Ii(Q)&&!t(Q.data))&&(je=T.oes_element_index_uint?kr:Sa),U._initBuffer(Xe.buffer,Q,de,je,3)}else m.bufferData(fc,Me,de),Xe.buffer.dtype=Ce||ba,Xe.buffer.usage=de,Xe.buffer.dimension=3,Xe.buffer.byteLength=Me;if(Ce=at,!at){switch(Xe.buffer.dtype){case ba:case q_:Ce=ba;break;case Sa:case Lf:Ce=Sa;break;case kr:case Pf:Ce=kr;break;default:p.raise("unsupported type for element array")}Xe.buffer.dtype=Ce}Xe.type=Ce,p(Ce!==kr||!!T.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Re=Qe;Re<0&&(Re=Xe.buffer.byteLength,Ce===Sa?Re>>=1:Ce===kr&&(Re>>=2)),Xe.vertCount=Re;var qe=Fe;if(Fe<0){qe=Rs;var _t=Xe.buffer.dimension;_t===1&&(qe=Y_),_t===2&&(qe=j_),_t===3&&(qe=Rs)}Xe.primType=qe}function $e(Xe){oe.elementsCount--,p(Xe.buffer!==null,"must not double destroy elements"),delete be[Xe.id],Xe.buffer.destroy(),Xe.buffer=null}function De(Xe,Q){var de=U.create(null,fc,!0),Fe=new Pe(de._buffer);oe.elementsCount++;function Qe(Me){if(!Me)de(),Fe.primType=Rs,Fe.vertCount=0,Fe.type=ba;else if(typeof Me=="number")de(Me),Fe.primType=Rs,Fe.vertCount=Me|0,Fe.type=ba;else{var at=null,Ce=Z_,je=-1,Re=-1,qe=0,_t=0;Array.isArray(Me)||t(Me)||Ii(Me)?at=Me:(p.type(Me,"object","invalid arguments for elements"),"data"in Me&&(at=Me.data,p(Array.isArray(at)||t(at)||Ii(at),"invalid data for element buffer")),"usage"in Me&&(p.parameter(Me.usage,Co,"invalid element buffer usage"),Ce=Co[Me.usage]),"primitive"in Me&&(p.parameter(Me.primitive,xa,"invalid element buffer primitive"),je=xa[Me.primitive]),"count"in Me&&(p(typeof Me.count=="number"&&Me.count>=0,"invalid vertex count for elements"),Re=Me.count|0),"type"in Me&&(p.parameter(Me.type,he,"invalid buffer type"),_t=he[Me.type]),"length"in Me?qe=Me.length|0:(qe=Re,_t===Sa||_t===Lf?qe*=2:(_t===kr||_t===Pf)&&(qe*=4))),Ve(Fe,at,Ce,je,Re,qe,_t)}return Qe}return Qe(Xe),Qe._reglType="elements",Qe._elements=Fe,Qe.subdata=function(Me,at){return de.subdata(Me,at),Qe},Qe.destroy=function(){$e(Fe)},Qe}return{create:De,createStream:Be,destroyStream:Ne,getElements:function(Xe){return typeof Xe=="function"&&Xe._elements instanceof Pe?Xe._elements:null},clear:function(){yi(be).forEach($e)}}}var Df=new Float32Array(1),J_=new Uint32Array(Df.buffer),Q_=5123;function Of(m){for(var T=bn.allocType(Q_,m.length),U=0;U<m.length;++U)if(isNaN(m[U]))T[U]=65535;else if(m[U]===1/0)T[U]=31744;else if(m[U]===-1/0)T[U]=64512;else{Df[0]=m[U];var oe=J_[0],be=oe>>>31<<15,ae=(oe<<1>>>24)-127,he=oe>>13&1023;if(ae<-24)T[U]=be;else if(ae<-14){var Pe=-14-ae;T[U]=be+(he+1024>>Pe)}else ae>15?T[U]=be+31744:T[U]=be+(ae+15<<10)+he}return T}function Tn(m){return Array.isArray(m)||t(m)}var Nf=function(m){return!(m&m-1)&&!!m},ev=34467,Xi=3553,hc=34067,Po=34069,zr=6408,dc=6406,Do=6407,Cs=6409,Oo=6410,If=32854,pc=32855,Uf=36194,tv=32819,nv=32820,iv=33635,rv=34042,mc=6402,No=34041,_c=35904,vc=35906,Ea=36193,gc=33776,yc=33777,xc=33778,bc=33779,Ff=35986,Bf=35987,Gf=34798,kf=35840,zf=35841,Hf=35842,Vf=35843,Wf=36196,Ma=5121,Sc=5123,Ec=5125,Ls=5126,av=10242,sv=10243,ov=10497,Mc=33071,lv=33648,cv=10240,uv=10241,Tc=9728,fv=9729,Ac=9984,Xf=9985,Yf=9986,wc=9987,hv=33170,Io=4352,dv=4353,pv=4354,mv=34046,_v=3317,vv=37440,gv=37441,yv=37443,jf=37444,Ps=33984,xv=[Ac,Yf,Xf,wc],Uo=[0,Cs,Oo,Do,zr],Ri={};Ri[Cs]=Ri[dc]=Ri[mc]=1,Ri[No]=Ri[Oo]=2,Ri[Do]=Ri[_c]=3,Ri[zr]=Ri[vc]=4;function Ta(m){return"[object "+m+"]"}var qf=Ta("HTMLCanvasElement"),$f=Ta("OffscreenCanvas"),Zf=Ta("CanvasRenderingContext2D"),Kf=Ta("ImageBitmap"),Jf=Ta("HTMLImageElement"),Qf=Ta("HTMLVideoElement"),bv=Object.keys(oc).concat([qf,$f,Zf,Kf,Jf,Qf]),Aa=[];Aa[Ma]=1,Aa[Ls]=4,Aa[Ea]=2,Aa[Sc]=2,Aa[Ec]=4;var jn=[];jn[If]=2,jn[pc]=2,jn[Uf]=2,jn[No]=4,jn[gc]=.5,jn[yc]=.5,jn[xc]=1,jn[bc]=1,jn[Ff]=.5,jn[Bf]=1,jn[Gf]=1,jn[kf]=.5,jn[zf]=.25,jn[Hf]=.5,jn[Vf]=.25,jn[Wf]=.5;function eh(m){return Array.isArray(m)&&(m.length===0||typeof m[0]=="number")}function th(m){if(!Array.isArray(m))return!1;var T=m.length;return!(T===0||!Tn(m[0]))}function Hr(m){return Object.prototype.toString.call(m)}function nh(m){return Hr(m)===qf}function ih(m){return Hr(m)===$f}function Sv(m){return Hr(m)===Zf}function Ev(m){return Hr(m)===Kf}function Mv(m){return Hr(m)===Jf}function Tv(m){return Hr(m)===Qf}function Rc(m){if(!m)return!1;var T=Hr(m);return bv.indexOf(T)>=0?!0:eh(m)||th(m)||Ii(m)}function rh(m){return oc[Object.prototype.toString.call(m)]|0}function Av(m,T){var U=T.length;switch(m.type){case Ma:case Sc:case Ec:case Ls:var oe=bn.allocType(m.type,U);oe.set(T),m.data=oe;break;case Ea:m.data=Of(T);break;default:p.raise("unsupported texture type, must specify a typed array")}}function ah(m,T){return bn.allocType(m.type===Ea?Ls:m.type,T)}function sh(m,T){m.type===Ea?(m.data=Of(T),bn.freeType(T)):m.data=T}function wv(m,T,U,oe,be,ae){for(var he=m.width,Pe=m.height,Oe=m.channels,Be=he*Pe*Oe,Ne=ah(m,Be),Ve=0,$e=0;$e<Pe;++$e)for(var De=0;De<he;++De)for(var Xe=0;Xe<Oe;++Xe)Ne[Ve++]=T[U*De+oe*$e+be*Xe+ae];sh(m,Ne)}function Fo(m,T,U,oe,be,ae){var he;if(typeof jn[m]<"u"?he=jn[m]:he=Ri[m]*Aa[T],ae&&(he*=6),be){for(var Pe=0,Oe=U;Oe>=1;)Pe+=he*Oe*Oe,Oe/=2;return Pe}else return he*U*oe}function Rv(m,T,U,oe,be,ae,he){var Pe={"don't care":Io,"dont care":Io,nice:pv,fast:dv},Oe={repeat:ov,clamp:Mc,mirror:lv},Be={nearest:Tc,linear:fv},Ne=n({mipmap:wc,"nearest mipmap nearest":Ac,"linear mipmap nearest":Xf,"nearest mipmap linear":Yf,"linear mipmap linear":wc},Be),Ve={none:0,browser:jf},$e={uint8:Ma,rgba4:tv,rgb565:iv,"rgb5 a1":nv},De={alpha:dc,luminance:Cs,"luminance alpha":Oo,rgb:Do,rgba:zr,rgba4:If,"rgb5 a1":pc,rgb565:Uf},Xe={};T.ext_srgb&&(De.srgb=_c,De.srgba=vc),T.oes_texture_float&&($e.float32=$e.float=Ls),T.oes_texture_half_float&&($e.float16=$e["half float"]=Ea),T.webgl_depth_texture&&(n(De,{depth:mc,"depth stencil":No}),n($e,{uint16:Sc,uint32:Ec,"depth stencil":rv})),T.webgl_compressed_texture_s3tc&&n(Xe,{"rgb s3tc dxt1":gc,"rgba s3tc dxt1":yc,"rgba s3tc dxt3":xc,"rgba s3tc dxt5":bc}),T.webgl_compressed_texture_atc&&n(Xe,{"rgb atc":Ff,"rgba atc explicit alpha":Bf,"rgba atc interpolated alpha":Gf}),T.webgl_compressed_texture_pvrtc&&n(Xe,{"rgb pvrtc 4bppv1":kf,"rgb pvrtc 2bppv1":zf,"rgba pvrtc 4bppv1":Hf,"rgba pvrtc 2bppv1":Vf}),T.webgl_compressed_texture_etc1&&(Xe["rgb etc1"]=Wf);var Q=Array.prototype.slice.call(m.getParameter(ev));Object.keys(Xe).forEach(function(P){var ce=Xe[P];Q.indexOf(ce)>=0&&(De[P]=ce)});var de=Object.keys(De);U.textureFormats=de;var Fe=[];Object.keys(De).forEach(function(P){var ce=De[P];Fe[ce]=P});var Qe=[];Object.keys($e).forEach(function(P){var ce=$e[P];Qe[ce]=P});var Me=[];Object.keys(Be).forEach(function(P){var ce=Be[P];Me[ce]=P});var at=[];Object.keys(Ne).forEach(function(P){var ce=Ne[P];at[ce]=P});var Ce=[];Object.keys(Oe).forEach(function(P){var ce=Oe[P];Ce[ce]=P});var je=de.reduce(function(P,ce){var re=De[ce];return re===Cs||re===dc||re===Cs||re===Oo||re===mc||re===No||T.ext_srgb&&(re===_c||re===vc)?P[re]=re:re===pc||ce.indexOf("rgba")>=0?P[re]=zr:P[re]=Do,P},{});function Re(){this.internalformat=zr,this.format=zr,this.type=Ma,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=jf,this.width=0,this.height=0,this.channels=0}function qe(P,ce){P.internalformat=ce.internalformat,P.format=ce.format,P.type=ce.type,P.compressed=ce.compressed,P.premultiplyAlpha=ce.premultiplyAlpha,P.flipY=ce.flipY,P.unpackAlignment=ce.unpackAlignment,P.colorSpace=ce.colorSpace,P.width=ce.width,P.height=ce.height,P.channels=ce.channels}function _t(P,ce){if(!(typeof ce!="object"||!ce)){if("premultiplyAlpha"in ce&&(p.type(ce.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),P.premultiplyAlpha=ce.premultiplyAlpha),"flipY"in ce&&(p.type(ce.flipY,"boolean","invalid texture flip"),P.flipY=ce.flipY),"alignment"in ce&&(p.oneOf(ce.alignment,[1,2,4,8],"invalid texture unpack alignment"),P.unpackAlignment=ce.alignment),"colorSpace"in ce&&(p.parameter(ce.colorSpace,Ve,"invalid colorSpace"),P.colorSpace=Ve[ce.colorSpace]),"type"in ce){var re=ce.type;p(T.oes_texture_float||!(re==="float"||re==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),p(T.oes_texture_half_float||!(re==="half float"||re==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),p(T.webgl_depth_texture||!(re==="uint16"||re==="uint32"||re==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),p.parameter(re,$e,"invalid texture type"),P.type=$e[re]}var lt=P.width,qt=P.height,R=P.channels,M=!1;"shape"in ce?(p(Array.isArray(ce.shape)&&ce.shape.length>=2,"shape must be an array"),lt=ce.shape[0],qt=ce.shape[1],ce.shape.length===3&&(R=ce.shape[2],p(R>0&&R<=4,"invalid number of channels"),M=!0),p(lt>=0&&lt<=U.maxTextureSize,"invalid width"),p(qt>=0&&qt<=U.maxTextureSize,"invalid height")):("radius"in ce&&(lt=qt=ce.radius,p(lt>=0&&lt<=U.maxTextureSize,"invalid radius")),"width"in ce&&(lt=ce.width,p(lt>=0&&lt<=U.maxTextureSize,"invalid width")),"height"in ce&&(qt=ce.height,p(qt>=0&&qt<=U.maxTextureSize,"invalid height")),"channels"in ce&&(R=ce.channels,p(R>0&&R<=4,"invalid number of channels"),M=!0)),P.width=lt|0,P.height=qt|0,P.channels=R|0;var k=!1;if("format"in ce){var J=ce.format;p(T.webgl_depth_texture||!(J==="depth"||J==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),p.parameter(J,De,"invalid texture format");var ee=P.internalformat=De[J];P.format=je[ee],J in $e&&("type"in ce||(P.type=$e[J])),J in Xe&&(P.compressed=!0),k=!0}!M&&k?P.channels=Ri[P.format]:M&&!k?P.channels!==Uo[P.format]&&(P.format=P.internalformat=Uo[P.channels]):k&&M&&p(P.channels===Ri[P.format],"number of channels inconsistent with specified format")}}function Pt(P){m.pixelStorei(vv,P.flipY),m.pixelStorei(gv,P.premultiplyAlpha),m.pixelStorei(yv,P.colorSpace),m.pixelStorei(_v,P.unpackAlignment)}function Ze(){Re.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function ke(P,ce){var re=null;if(Rc(ce)?re=ce:ce&&(p.type(ce,"object","invalid pixel data type"),_t(P,ce),"x"in ce&&(P.xOffset=ce.x|0),"y"in ce&&(P.yOffset=ce.y|0),Rc(ce.data)&&(re=ce.data)),p(!P.compressed||re instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ce.copy){p(!re,"can not specify copy and data field for the same texture");var lt=be.viewportWidth,qt=be.viewportHeight;P.width=P.width||lt-P.xOffset,P.height=P.height||qt-P.yOffset,P.needsCopy=!0,p(P.xOffset>=0&&P.xOffset<lt&&P.yOffset>=0&&P.yOffset<qt&&P.width>0&&P.width<=lt&&P.height>0&&P.height<=qt,"copy texture read out of bounds")}else if(!re)P.width=P.width||1,P.height=P.height||1,P.channels=P.channels||4;else if(t(re))P.channels=P.channels||4,P.data=re,!("type"in ce)&&P.type===Ma&&(P.type=rh(re));else if(eh(re))P.channels=P.channels||4,Av(P,re),P.alignment=1,P.needsFree=!0;else if(Ii(re)){var R=re.data;!Array.isArray(R)&&P.type===Ma&&(P.type=rh(R));var M=re.shape,k=re.stride,J,ee,V,z,Z,C;M.length===3?(V=M[2],C=k[2]):(p(M.length===2,"invalid ndarray pixel data, must be 2 or 3D"),V=1,C=1),J=M[0],ee=M[1],z=k[0],Z=k[1],P.alignment=1,P.width=J,P.height=ee,P.channels=V,P.format=P.internalformat=Uo[V],P.needsFree=!0,wv(P,R,z,Z,C,re.offset)}else if(nh(re)||ih(re)||Sv(re))nh(re)||ih(re)?P.element=re:P.element=re.canvas,P.width=P.element.width,P.height=P.element.height,P.channels=4;else if(Ev(re))P.element=re,P.width=re.width,P.height=re.height,P.channels=4;else if(Mv(re))P.element=re,P.width=re.naturalWidth,P.height=re.naturalHeight,P.channels=4;else if(Tv(re))P.element=re,P.width=re.videoWidth,P.height=re.videoHeight,P.channels=4;else if(th(re)){var G=P.width||re[0].length,w=P.height||re.length,K=P.channels;Tn(re[0][0])?K=K||re[0][0].length:K=K||1;for(var ie=Ro.shape(re),xe=1,Se=0;Se<ie.length;++Se)xe*=ie[Se];var me=ah(P,xe);Ro.flatten(re,ie,"",me),sh(P,me),P.alignment=1,P.width=G,P.height=w,P.channels=K,P.format=P.internalformat=Uo[K],P.needsFree=!0}P.type===Ls?p(U.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):P.type===Ea&&p(U.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Ee(P,ce,re){var lt=P.element,qt=P.data,R=P.internalformat,M=P.format,k=P.type,J=P.width,ee=P.height;Pt(P),lt?m.texImage2D(ce,re,M,M,k,lt):P.compressed?m.compressedTexImage2D(ce,re,R,J,ee,0,qt):P.needsCopy?(oe(),m.copyTexImage2D(ce,re,M,P.xOffset,P.yOffset,J,ee,0)):m.texImage2D(ce,re,M,J,ee,0,M,k,qt||null)}function wt(P,ce,re,lt,qt){var R=P.element,M=P.data,k=P.internalformat,J=P.format,ee=P.type,V=P.width,z=P.height;Pt(P),R?m.texSubImage2D(ce,qt,re,lt,J,ee,R):P.compressed?m.compressedTexSubImage2D(ce,qt,re,lt,k,V,z,M):P.needsCopy?(oe(),m.copyTexSubImage2D(ce,qt,re,lt,P.xOffset,P.yOffset,V,z)):m.texSubImage2D(ce,qt,re,lt,V,z,J,ee,M)}var Ft=[];function ct(){return Ft.pop()||new Ze}function jt(P){P.needsFree&&bn.freeType(P.data),Ze.call(P),Ft.push(P)}function Dt(){Re.call(this),this.genMipmaps=!1,this.mipmapHint=Io,this.mipmask=0,this.images=Array(16)}function Vt(P,ce,re){var lt=P.images[0]=ct();P.mipmask=1,lt.width=P.width=ce,lt.height=P.height=re,lt.channels=P.channels=4}function on(P,ce){var re=null;if(Rc(ce))re=P.images[0]=ct(),qe(re,P),ke(re,ce),P.mipmask=1;else if(_t(P,ce),Array.isArray(ce.mipmap))for(var lt=ce.mipmap,qt=0;qt<lt.length;++qt)re=P.images[qt]=ct(),qe(re,P),re.width>>=qt,re.height>>=qt,ke(re,lt[qt]),P.mipmask|=1<<qt;else re=P.images[0]=ct(),qe(re,P),ke(re,ce),P.mipmask=1;qe(P,P.images[0]),P.compressed&&(P.internalformat===gc||P.internalformat===yc||P.internalformat===xc||P.internalformat===bc)&&p(P.width%4===0&&P.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Dn(P,ce){for(var re=P.images,lt=0;lt<re.length;++lt){if(!re[lt])return;Ee(re[lt],ce,lt)}}var zn=[];function Kt(){var P=zn.pop()||new Dt;Re.call(P),P.mipmask=0;for(var ce=0;ce<16;++ce)P.images[ce]=null;return P}function Un(P){for(var ce=P.images,re=0;re<ce.length;++re)ce[re]&&jt(ce[re]),ce[re]=null;zn.push(P)}function pn(){this.minFilter=Tc,this.magFilter=Tc,this.wrapS=Mc,this.wrapT=Mc,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Io}function On(P,ce){if("min"in ce){var re=ce.min;p.parameter(re,Ne),P.minFilter=Ne[re],xv.indexOf(P.minFilter)>=0&&!("faces"in ce)&&(P.genMipmaps=!0)}if("mag"in ce){var lt=ce.mag;p.parameter(lt,Be),P.magFilter=Be[lt]}var qt=P.wrapS,R=P.wrapT;if("wrap"in ce){var M=ce.wrap;typeof M=="string"?(p.parameter(M,Oe),qt=R=Oe[M]):Array.isArray(M)&&(p.parameter(M[0],Oe),p.parameter(M[1],Oe),qt=Oe[M[0]],R=Oe[M[1]])}else{if("wrapS"in ce){var k=ce.wrapS;p.parameter(k,Oe),qt=Oe[k]}if("wrapT"in ce){var J=ce.wrapT;p.parameter(J,Oe),R=Oe[J]}}if(P.wrapS=qt,P.wrapT=R,"anisotropic"in ce){var ee=ce.anisotropic;p(typeof ee=="number"&&ee>=1&&ee<=U.maxAnisotropic,"aniso samples must be between 1 and "),P.anisotropic=ce.anisotropic}if("mipmap"in ce){var V=!1;switch(typeof ce.mipmap){case"string":p.parameter(ce.mipmap,Pe,"invalid mipmap hint"),P.mipmapHint=Pe[ce.mipmap],P.genMipmaps=!0,V=!0;break;case"boolean":V=P.genMipmaps=ce.mipmap;break;case"object":p(Array.isArray(ce.mipmap),"invalid mipmap type"),P.genMipmaps=!1,V=!0;break;default:p.raise("invalid mipmap type")}V&&!("min"in ce)&&(P.minFilter=Ac)}}function Fn(P,ce){m.texParameteri(ce,uv,P.minFilter),m.texParameteri(ce,cv,P.magFilter),m.texParameteri(ce,av,P.wrapS),m.texParameteri(ce,sv,P.wrapT),T.ext_texture_filter_anisotropic&&m.texParameteri(ce,mv,P.anisotropic),P.genMipmaps&&(m.hint(hv,P.mipmapHint),m.generateMipmap(ce))}var Bn=0,Wn={},qn=U.maxTextureUnits,An=Array(qn).map(function(){return null});function Bt(P){Re.call(this),this.mipmask=0,this.internalformat=zr,this.id=Bn++,this.refCount=1,this.target=P,this.texture=m.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new pn,he.profile&&(this.stats={size:0})}function $n(P){m.activeTexture(Ps),m.bindTexture(P.target,P.texture)}function un(){var P=An[0];P?m.bindTexture(P.target,P.texture):m.bindTexture(Xi,null)}function yt(P){var ce=P.texture;p(ce,"must not double destroy texture");var re=P.unit,lt=P.target;re>=0&&(m.activeTexture(Ps+re),m.bindTexture(lt,null),An[re]=null),m.deleteTexture(ce),P.texture=null,P.params=null,P.pixels=null,P.refCount=0,delete Wn[P.id],ae.textureCount--}n(Bt.prototype,{bind:function(){var P=this;P.bindCount+=1;var ce=P.unit;if(ce<0){for(var re=0;re<qn;++re){var lt=An[re];if(lt){if(lt.bindCount>0)continue;lt.unit=-1}An[re]=P,ce=re;break}ce>=qn&&p.raise("insufficient number of texture units"),he.profile&&ae.maxTextureUnits<ce+1&&(ae.maxTextureUnits=ce+1),P.unit=ce,m.activeTexture(Ps+ce),m.bindTexture(P.target,P.texture)}return ce},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&yt(this)}});function Zt(P,ce){var re=new Bt(Xi);Wn[re.id]=re,ae.textureCount++;function lt(M,k){var J=re.texInfo;pn.call(J);var ee=Kt();return typeof M=="number"?typeof k=="number"?Vt(ee,M|0,k|0):Vt(ee,M|0,M|0):M?(p.type(M,"object","invalid arguments to regl.texture"),On(J,M),on(ee,M)):Vt(ee,1,1),J.genMipmaps&&(ee.mipmask=(ee.width<<1)-1),re.mipmask=ee.mipmask,qe(re,ee),p.texture2D(J,ee,U),re.internalformat=ee.internalformat,lt.width=ee.width,lt.height=ee.height,$n(re),Dn(ee,Xi),Fn(J,Xi),un(),Un(ee),he.profile&&(re.stats.size=Fo(re.internalformat,re.type,ee.width,ee.height,J.genMipmaps,!1)),lt.format=Fe[re.internalformat],lt.type=Qe[re.type],lt.mag=Me[J.magFilter],lt.min=at[J.minFilter],lt.wrapS=Ce[J.wrapS],lt.wrapT=Ce[J.wrapT],lt}function qt(M,k,J,ee){p(!!M,"must specify image data");var V=k|0,z=J|0,Z=ee|0,C=ct();return qe(C,re),C.width=0,C.height=0,ke(C,M),C.width=C.width||(re.width>>Z)-V,C.height=C.height||(re.height>>Z)-z,p(re.type===C.type&&re.format===C.format&&re.internalformat===C.internalformat,"incompatible format for texture.subimage"),p(V>=0&&z>=0&&V+C.width<=re.width&&z+C.height<=re.height,"texture.subimage write out of bounds"),p(re.mipmask&1<<Z,"missing mipmap data"),p(C.data||C.element||C.needsCopy,"missing image data"),$n(re),wt(C,Xi,V,z,Z),un(),jt(C),lt}function R(M,k){var J=M|0,ee=k|0||J;if(J===re.width&&ee===re.height)return lt;lt.width=re.width=J,lt.height=re.height=ee,$n(re);for(var V=0;re.mipmask>>V;++V){var z=J>>V,Z=ee>>V;if(!z||!Z)break;m.texImage2D(Xi,V,re.format,z,Z,0,re.format,re.type,null)}return un(),he.profile&&(re.stats.size=Fo(re.internalformat,re.type,J,ee,!1,!1)),lt}return lt(P,ce),lt.subimage=qt,lt.resize=R,lt._reglType="texture2d",lt._texture=re,he.profile&&(lt.stats=re.stats),lt.destroy=function(){re.decRef()},lt}function Qt(P,ce,re,lt,qt,R){var M=new Bt(hc);Wn[M.id]=M,ae.cubeCount++;var k=new Array(6);function J(z,Z,C,G,w,K){var ie,xe=M.texInfo;for(pn.call(xe),ie=0;ie<6;++ie)k[ie]=Kt();if(typeof z=="number"||!z){var Se=z|0||1;for(ie=0;ie<6;++ie)Vt(k[ie],Se,Se)}else if(typeof z=="object")if(Z)on(k[0],z),on(k[1],Z),on(k[2],C),on(k[3],G),on(k[4],w),on(k[5],K);else if(On(xe,z),_t(M,z),"faces"in z){var me=z.faces;for(p(Array.isArray(me)&&me.length===6,"cube faces must be a length 6 array"),ie=0;ie<6;++ie)p(typeof me[ie]=="object"&&!!me[ie],"invalid input for cube map face"),qe(k[ie],M),on(k[ie],me[ie])}else for(ie=0;ie<6;++ie)on(k[ie],z);else p.raise("invalid arguments to cube map");for(qe(M,k[0]),U.npotTextureCube||p(Nf(M.width)&&Nf(M.height),"your browser does not support non power or two texture dimensions"),xe.genMipmaps?M.mipmask=(k[0].width<<1)-1:M.mipmask=k[0].mipmask,p.textureCube(M,xe,k,U),M.internalformat=k[0].internalformat,J.width=k[0].width,J.height=k[0].height,$n(M),ie=0;ie<6;++ie)Dn(k[ie],Po+ie);for(Fn(xe,hc),un(),he.profile&&(M.stats.size=Fo(M.internalformat,M.type,J.width,J.height,xe.genMipmaps,!0)),J.format=Fe[M.internalformat],J.type=Qe[M.type],J.mag=Me[xe.magFilter],J.min=at[xe.minFilter],J.wrapS=Ce[xe.wrapS],J.wrapT=Ce[xe.wrapT],ie=0;ie<6;++ie)Un(k[ie]);return J}function ee(z,Z,C,G,w){p(!!Z,"must specify image data"),p(typeof z=="number"&&z===(z|0)&&z>=0&&z<6,"invalid face");var K=C|0,ie=G|0,xe=w|0,Se=ct();return qe(Se,M),Se.width=0,Se.height=0,ke(Se,Z),Se.width=Se.width||(M.width>>xe)-K,Se.height=Se.height||(M.height>>xe)-ie,p(M.type===Se.type&&M.format===Se.format&&M.internalformat===Se.internalformat,"incompatible format for texture.subimage"),p(K>=0&&ie>=0&&K+Se.width<=M.width&&ie+Se.height<=M.height,"texture.subimage write out of bounds"),p(M.mipmask&1<<xe,"missing mipmap data"),p(Se.data||Se.element||Se.needsCopy,"missing image data"),$n(M),wt(Se,Po+z,K,ie,xe),un(),jt(Se),J}function V(z){var Z=z|0;if(Z!==M.width){J.width=M.width=Z,J.height=M.height=Z,$n(M);for(var C=0;C<6;++C)for(var G=0;M.mipmask>>G;++G)m.texImage2D(Po+C,G,M.format,Z>>G,Z>>G,0,M.format,M.type,null);return un(),he.profile&&(M.stats.size=Fo(M.internalformat,M.type,J.width,J.height,!1,!0)),J}}return J(P,ce,re,lt,qt,R),J.subimage=ee,J.resize=V,J._reglType="textureCube",J._texture=M,he.profile&&(J.stats=M.stats),J.destroy=function(){M.decRef()},J}function wn(){for(var P=0;P<qn;++P)m.activeTexture(Ps+P),m.bindTexture(Xi,null),An[P]=null;yi(Wn).forEach(yt),ae.cubeCount=0,ae.textureCount=0}he.profile&&(ae.getTotalTextureSize=function(){var P=0;return Object.keys(Wn).forEach(function(ce){P+=Wn[ce].stats.size}),P});function ji(){for(var P=0;P<qn;++P){var ce=An[P];ce&&(ce.bindCount=0,ce.unit=-1,An[P]=null)}yi(Wn).forEach(function(re){re.texture=m.createTexture(),m.bindTexture(re.target,re.texture);for(var lt=0;lt<32;++lt)if((re.mipmask&1<<lt)!==0)if(re.target===Xi)m.texImage2D(Xi,lt,re.internalformat,re.width>>lt,re.height>>lt,0,re.internalformat,re.type,null);else for(var qt=0;qt<6;++qt)m.texImage2D(Po+qt,lt,re.internalformat,re.width>>lt,re.height>>lt,0,re.internalformat,re.type,null);Fn(re.texInfo,re.target)})}function $r(){for(var P=0;P<qn;++P){var ce=An[P];ce&&(ce.bindCount=0,ce.unit=-1,An[P]=null),m.activeTexture(Ps+P),m.bindTexture(Xi,null),m.bindTexture(hc,null)}}return{create2D:Zt,createCube:Qt,clear:wn,getTexture:function(P){return null},restore:ji,refresh:$r}}var vr=36161,Bo=32854,oh=32855,lh=36194,ch=33189,uh=36168,fh=34041,hh=35907,dh=34836,ph=34842,mh=34843,Ui=[];Ui[Bo]=2,Ui[oh]=2,Ui[lh]=2,Ui[ch]=2,Ui[uh]=1,Ui[fh]=4,Ui[hh]=4,Ui[dh]=16,Ui[ph]=8,Ui[mh]=6;function _h(m,T,U){return Ui[m]*T*U}var Cv=function(m,T,U,oe,be){var ae={rgba4:Bo,rgb565:lh,"rgb5 a1":oh,depth:ch,stencil:uh,"depth stencil":fh};T.ext_srgb&&(ae.srgba=hh),T.ext_color_buffer_half_float&&(ae.rgba16f=ph,ae.rgb16f=mh),T.webgl_color_buffer_float&&(ae.rgba32f=dh);var he=[];Object.keys(ae).forEach(function(De){var Xe=ae[De];he[Xe]=De});var Pe=0,Oe={};function Be(De){this.id=Pe++,this.refCount=1,this.renderbuffer=De,this.format=Bo,this.width=0,this.height=0,be.profile&&(this.stats={size:0})}Be.prototype.decRef=function(){--this.refCount<=0&&Ne(this)};function Ne(De){var Xe=De.renderbuffer;p(Xe,"must not double destroy renderbuffer"),m.bindRenderbuffer(vr,null),m.deleteRenderbuffer(Xe),De.renderbuffer=null,De.refCount=0,delete Oe[De.id],oe.renderbufferCount--}function Ve(De,Xe){var Q=new Be(m.createRenderbuffer());Oe[Q.id]=Q,oe.renderbufferCount++;function de(Qe,Me){var at=0,Ce=0,je=Bo;if(typeof Qe=="object"&&Qe){var Re=Qe;if("shape"in Re){var qe=Re.shape;p(Array.isArray(qe)&&qe.length>=2,"invalid renderbuffer shape"),at=qe[0]|0,Ce=qe[1]|0}else"radius"in Re&&(at=Ce=Re.radius|0),"width"in Re&&(at=Re.width|0),"height"in Re&&(Ce=Re.height|0);"format"in Re&&(p.parameter(Re.format,ae,"invalid renderbuffer format"),je=ae[Re.format])}else typeof Qe=="number"?(at=Qe|0,typeof Me=="number"?Ce=Me|0:Ce=at):Qe?p.raise("invalid arguments to renderbuffer constructor"):at=Ce=1;if(p(at>0&&Ce>0&&at<=U.maxRenderbufferSize&&Ce<=U.maxRenderbufferSize,"invalid renderbuffer size"),!(at===Q.width&&Ce===Q.height&&je===Q.format))return de.width=Q.width=at,de.height=Q.height=Ce,Q.format=je,m.bindRenderbuffer(vr,Q.renderbuffer),m.renderbufferStorage(vr,je,at,Ce),p(m.getError()===0,"invalid render buffer format"),be.profile&&(Q.stats.size=_h(Q.format,Q.width,Q.height)),de.format=he[Q.format],de}function Fe(Qe,Me){var at=Qe|0,Ce=Me|0||at;return at===Q.width&&Ce===Q.height||(p(at>0&&Ce>0&&at<=U.maxRenderbufferSize&&Ce<=U.maxRenderbufferSize,"invalid renderbuffer size"),de.width=Q.width=at,de.height=Q.height=Ce,m.bindRenderbuffer(vr,Q.renderbuffer),m.renderbufferStorage(vr,Q.format,at,Ce),p(m.getError()===0,"invalid render buffer format"),be.profile&&(Q.stats.size=_h(Q.format,Q.width,Q.height))),de}return de(De,Xe),de.resize=Fe,de._reglType="renderbuffer",de._renderbuffer=Q,be.profile&&(de.stats=Q.stats),de.destroy=function(){Q.decRef()},de}be.profile&&(oe.getTotalRenderbufferSize=function(){var De=0;return Object.keys(Oe).forEach(function(Xe){De+=Oe[Xe].stats.size}),De});function $e(){yi(Oe).forEach(function(De){De.renderbuffer=m.createRenderbuffer(),m.bindRenderbuffer(vr,De.renderbuffer),m.renderbufferStorage(vr,De.format,De.width,De.height)}),m.bindRenderbuffer(vr,null)}return{create:Ve,clear:function(){yi(Oe).forEach(Ne)},restore:$e}},tr=36160,Cc=36161,Vr=3553,Go=34069,vh=36064,gh=36096,yh=36128,xh=33306,bh=36053,Lv=36054,Pv=36055,Dv=36057,Ov=36061,Nv=36193,Iv=5121,Uv=5126,Sh=6407,Eh=6408,Fv=6402,Bv=[Sh,Eh],Lc=[];Lc[Eh]=4,Lc[Sh]=3;var ko=[];ko[Iv]=1,ko[Uv]=4,ko[Nv]=2;var Gv=32854,kv=32855,zv=36194,Hv=33189,Vv=36168,Mh=34041,Wv=35907,Xv=34836,Yv=34842,jv=34843,qv=[Gv,kv,zv,Wv,Yv,jv,Xv],wa={};wa[bh]="complete",wa[Lv]="incomplete attachment",wa[Dv]="incomplete dimensions",wa[Pv]="incomplete, missing attachment",wa[Ov]="unsupported";function $v(m,T,U,oe,be,ae){var he={cur:null,next:null,dirty:!1,setFBO:null},Pe=["rgba"],Oe=["rgba4","rgb565","rgb5 a1"];T.ext_srgb&&Oe.push("srgba"),T.ext_color_buffer_half_float&&Oe.push("rgba16f","rgb16f"),T.webgl_color_buffer_float&&Oe.push("rgba32f");var Be=["uint8"];T.oes_texture_half_float&&Be.push("half float","float16"),T.oes_texture_float&&Be.push("float","float32");function Ne(Ze,ke,Ee){this.target=Ze,this.texture=ke,this.renderbuffer=Ee;var wt=0,Ft=0;ke?(wt=ke.width,Ft=ke.height):Ee&&(wt=Ee.width,Ft=Ee.height),this.width=wt,this.height=Ft}function Ve(Ze){Ze&&(Ze.texture&&Ze.texture._texture.decRef(),Ze.renderbuffer&&Ze.renderbuffer._renderbuffer.decRef())}function $e(Ze,ke,Ee){if(Ze)if(Ze.texture){var wt=Ze.texture._texture,Ft=Math.max(1,wt.width),ct=Math.max(1,wt.height);p(Ft===ke&&ct===Ee,"inconsistent width/height for supplied texture"),wt.refCount+=1}else{var jt=Ze.renderbuffer._renderbuffer;p(jt.width===ke&&jt.height===Ee,"inconsistent width/height for renderbuffer"),jt.refCount+=1}}function De(Ze,ke){ke&&(ke.texture?m.framebufferTexture2D(tr,Ze,ke.target,ke.texture._texture.texture,0):m.framebufferRenderbuffer(tr,Ze,Cc,ke.renderbuffer._renderbuffer.renderbuffer))}function Xe(Ze){var ke=Vr,Ee=null,wt=null,Ft=Ze;typeof Ze=="object"&&(Ft=Ze.data,"target"in Ze&&(ke=Ze.target|0)),p.type(Ft,"function","invalid attachment data");var ct=Ft._reglType;return ct==="texture2d"?(Ee=Ft,p(ke===Vr)):ct==="textureCube"?(Ee=Ft,p(ke>=Go&&ke<Go+6,"invalid cube map target")):ct==="renderbuffer"?(wt=Ft,ke=Cc):p.raise("invalid regl object for attachment"),new Ne(ke,Ee,wt)}function Q(Ze,ke,Ee,wt,Ft){if(Ee){var ct=oe.create2D({width:Ze,height:ke,format:wt,type:Ft});return ct._texture.refCount=0,new Ne(Vr,ct,null)}else{var jt=be.create({width:Ze,height:ke,format:wt});return jt._renderbuffer.refCount=0,new Ne(Cc,null,jt)}}function de(Ze){return Ze&&(Ze.texture||Ze.renderbuffer)}function Fe(Ze,ke,Ee){Ze&&(Ze.texture?Ze.texture.resize(ke,Ee):Ze.renderbuffer&&Ze.renderbuffer.resize(ke,Ee),Ze.width=ke,Ze.height=Ee)}var Qe=0,Me={};function at(){this.id=Qe++,Me[this.id]=this,this.framebuffer=m.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ce(Ze){Ze.colorAttachments.forEach(Ve),Ve(Ze.depthAttachment),Ve(Ze.stencilAttachment),Ve(Ze.depthStencilAttachment)}function je(Ze){var ke=Ze.framebuffer;p(ke,"must not double destroy framebuffer"),m.deleteFramebuffer(ke),Ze.framebuffer=null,ae.framebufferCount--,delete Me[Ze.id]}function Re(Ze){var ke;m.bindFramebuffer(tr,Ze.framebuffer);var Ee=Ze.colorAttachments;for(ke=0;ke<Ee.length;++ke)De(vh+ke,Ee[ke]);for(ke=Ee.length;ke<U.maxColorAttachments;++ke)m.framebufferTexture2D(tr,vh+ke,Vr,null,0);m.framebufferTexture2D(tr,xh,Vr,null,0),m.framebufferTexture2D(tr,gh,Vr,null,0),m.framebufferTexture2D(tr,yh,Vr,null,0),De(gh,Ze.depthAttachment),De(yh,Ze.stencilAttachment),De(xh,Ze.depthStencilAttachment);var wt=m.checkFramebufferStatus(tr);!m.isContextLost()&&wt!==bh&&p.raise("framebuffer configuration not supported, status = "+wa[wt]),m.bindFramebuffer(tr,he.next?he.next.framebuffer:null),he.cur=he.next,m.getError()}function qe(Ze,ke){var Ee=new at;ae.framebufferCount++;function wt(ct,jt){var Dt;p(he.next!==Ee,"can not update framebuffer which is currently in use");var Vt=0,on=0,Dn=!0,zn=!0,Kt=null,Un=!0,pn="rgba",On="uint8",Fn=1,Bn=null,Wn=null,qn=null,An=!1;if(typeof ct=="number")Vt=ct|0,on=jt|0||Vt;else if(!ct)Vt=on=1;else{p.type(ct,"object","invalid arguments for framebuffer");var Bt=ct;if("shape"in Bt){var $n=Bt.shape;p(Array.isArray($n)&&$n.length>=2,"invalid shape for framebuffer"),Vt=$n[0],on=$n[1]}else"radius"in Bt&&(Vt=on=Bt.radius),"width"in Bt&&(Vt=Bt.width),"height"in Bt&&(on=Bt.height);("color"in Bt||"colors"in Bt)&&(Kt=Bt.color||Bt.colors,Array.isArray(Kt)&&p(Kt.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),Kt||("colorCount"in Bt&&(Fn=Bt.colorCount|0,p(Fn>0,"invalid color buffer count")),"colorTexture"in Bt&&(Un=!!Bt.colorTexture,pn="rgba4"),"colorType"in Bt&&(On=Bt.colorType,Un?(p(T.oes_texture_float||!(On==="float"||On==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),p(T.oes_texture_half_float||!(On==="half float"||On==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):On==="half float"||On==="float16"?(p(T.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),pn="rgba16f"):(On==="float"||On==="float32")&&(p(T.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),pn="rgba32f"),p.oneOf(On,Be,"invalid color type")),"colorFormat"in Bt&&(pn=Bt.colorFormat,Pe.indexOf(pn)>=0?Un=!0:Oe.indexOf(pn)>=0?Un=!1:Un?p.oneOf(Bt.colorFormat,Pe,"invalid color format for texture"):p.oneOf(Bt.colorFormat,Oe,"invalid color format for renderbuffer"))),("depthTexture"in Bt||"depthStencilTexture"in Bt)&&(An=!!(Bt.depthTexture||Bt.depthStencilTexture),p(!An||T.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Bt&&(typeof Bt.depth=="boolean"?Dn=Bt.depth:(Bn=Bt.depth,zn=!1)),"stencil"in Bt&&(typeof Bt.stencil=="boolean"?zn=Bt.stencil:(Wn=Bt.stencil,Dn=!1)),"depthStencil"in Bt&&(typeof Bt.depthStencil=="boolean"?Dn=zn=Bt.depthStencil:(qn=Bt.depthStencil,Dn=!1,zn=!1))}var un=null,yt=null,Zt=null,Qt=null;if(Array.isArray(Kt))un=Kt.map(Xe);else if(Kt)un=[Xe(Kt)];else for(un=new Array(Fn),Dt=0;Dt<Fn;++Dt)un[Dt]=Q(Vt,on,Un,pn,On);p(T.webgl_draw_buffers||un.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),p(un.length<=U.maxColorAttachments,"too many color attachments, not supported"),Vt=Vt||un[0].width,on=on||un[0].height,Bn?yt=Xe(Bn):Dn&&!zn&&(yt=Q(Vt,on,An,"depth","uint32")),Wn?Zt=Xe(Wn):zn&&!Dn&&(Zt=Q(Vt,on,!1,"stencil","uint8")),qn?Qt=Xe(qn):!Bn&&!Wn&&zn&&Dn&&(Qt=Q(Vt,on,An,"depth stencil","depth stencil")),p(!!Bn+!!Wn+!!qn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var wn=null;for(Dt=0;Dt<un.length;++Dt)if($e(un[Dt],Vt,on),p(!un[Dt]||un[Dt].texture&&Bv.indexOf(un[Dt].texture._texture.format)>=0||un[Dt].renderbuffer&&qv.indexOf(un[Dt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Dt+" is invalid"),un[Dt]&&un[Dt].texture){var ji=Lc[un[Dt].texture._texture.format]*ko[un[Dt].texture._texture.type];wn===null?wn=ji:p(wn===ji,"all color attachments much have the same number of bits per pixel.")}return $e(yt,Vt,on),p(!yt||yt.texture&&yt.texture._texture.format===Fv||yt.renderbuffer&&yt.renderbuffer._renderbuffer.format===Hv,"invalid depth attachment for framebuffer object"),$e(Zt,Vt,on),p(!Zt||Zt.renderbuffer&&Zt.renderbuffer._renderbuffer.format===Vv,"invalid stencil attachment for framebuffer object"),$e(Qt,Vt,on),p(!Qt||Qt.texture&&Qt.texture._texture.format===Mh||Qt.renderbuffer&&Qt.renderbuffer._renderbuffer.format===Mh,"invalid depth-stencil attachment for framebuffer object"),Ce(Ee),Ee.width=Vt,Ee.height=on,Ee.colorAttachments=un,Ee.depthAttachment=yt,Ee.stencilAttachment=Zt,Ee.depthStencilAttachment=Qt,wt.color=un.map(de),wt.depth=de(yt),wt.stencil=de(Zt),wt.depthStencil=de(Qt),wt.width=Ee.width,wt.height=Ee.height,Re(Ee),wt}function Ft(ct,jt){p(he.next!==Ee,"can not resize a framebuffer which is currently in use");var Dt=Math.max(ct|0,1),Vt=Math.max(jt|0||Dt,1);if(Dt===Ee.width&&Vt===Ee.height)return wt;for(var on=Ee.colorAttachments,Dn=0;Dn<on.length;++Dn)Fe(on[Dn],Dt,Vt);return Fe(Ee.depthAttachment,Dt,Vt),Fe(Ee.stencilAttachment,Dt,Vt),Fe(Ee.depthStencilAttachment,Dt,Vt),Ee.width=wt.width=Dt,Ee.height=wt.height=Vt,Re(Ee),wt}return wt(Ze,ke),n(wt,{resize:Ft,_reglType:"framebuffer",_framebuffer:Ee,destroy:function(){je(Ee),Ce(Ee)},use:function(ct){he.setFBO({framebuffer:wt},ct)}})}function _t(Ze){var ke=Array(6);function Ee(Ft){var ct;p(ke.indexOf(he.next)<0,"can not update framebuffer which is currently in use");var jt={color:null},Dt=0,Vt=null,on="rgba",Dn="uint8",zn=1;if(typeof Ft=="number")Dt=Ft|0;else if(!Ft)Dt=1;else{p.type(Ft,"object","invalid arguments for framebuffer");var Kt=Ft;if("shape"in Kt){var Un=Kt.shape;p(Array.isArray(Un)&&Un.length>=2,"invalid shape for framebuffer"),p(Un[0]===Un[1],"cube framebuffer must be square"),Dt=Un[0]}else"radius"in Kt&&(Dt=Kt.radius|0),"width"in Kt?(Dt=Kt.width|0,"height"in Kt&&p(Kt.height===Dt,"must be square")):"height"in Kt&&(Dt=Kt.height|0);("color"in Kt||"colors"in Kt)&&(Vt=Kt.color||Kt.colors,Array.isArray(Vt)&&p(Vt.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),Vt||("colorCount"in Kt&&(zn=Kt.colorCount|0,p(zn>0,"invalid color buffer count")),"colorType"in Kt&&(p.oneOf(Kt.colorType,Be,"invalid color type"),Dn=Kt.colorType),"colorFormat"in Kt&&(on=Kt.colorFormat,p.oneOf(Kt.colorFormat,Pe,"invalid color format for texture"))),"depth"in Kt&&(jt.depth=Kt.depth),"stencil"in Kt&&(jt.stencil=Kt.stencil),"depthStencil"in Kt&&(jt.depthStencil=Kt.depthStencil)}var pn;if(Vt)if(Array.isArray(Vt))for(pn=[],ct=0;ct<Vt.length;++ct)pn[ct]=Vt[ct];else pn=[Vt];else{pn=Array(zn);var On={radius:Dt,format:on,type:Dn};for(ct=0;ct<zn;++ct)pn[ct]=oe.createCube(On)}for(jt.color=Array(pn.length),ct=0;ct<pn.length;++ct){var Fn=pn[ct];p(typeof Fn=="function"&&Fn._reglType==="textureCube","invalid cube map"),Dt=Dt||Fn.width,p(Fn.width===Dt&&Fn.height===Dt,"invalid cube map shape"),jt.color[ct]={target:Go,data:pn[ct]}}for(ct=0;ct<6;++ct){for(var Bn=0;Bn<pn.length;++Bn)jt.color[Bn].target=Go+ct;ct>0&&(jt.depth=ke[0].depth,jt.stencil=ke[0].stencil,jt.depthStencil=ke[0].depthStencil),ke[ct]?ke[ct](jt):ke[ct]=qe(jt)}return n(Ee,{width:Dt,height:Dt,color:pn})}function wt(Ft){var ct,jt=Ft|0;if(p(jt>0&&jt<=U.maxCubeMapSize,"invalid radius for cube fbo"),jt===Ee.width)return Ee;var Dt=Ee.color;for(ct=0;ct<Dt.length;++ct)Dt[ct].resize(jt);for(ct=0;ct<6;++ct)ke[ct].resize(jt);return Ee.width=Ee.height=jt,Ee}return Ee(Ze),n(Ee,{faces:ke,resize:wt,_reglType:"framebufferCube",destroy:function(){ke.forEach(function(Ft){Ft.destroy()})}})}function Pt(){he.cur=null,he.next=null,he.dirty=!0,yi(Me).forEach(function(Ze){Ze.framebuffer=m.createFramebuffer(),Re(Ze)})}return n(he,{getFramebuffer:function(Ze){if(typeof Ze=="function"&&Ze._reglType==="framebuffer"){var ke=Ze._framebuffer;if(ke instanceof at)return ke}return null},create:qe,createCube:_t,clear:function(){yi(Me).forEach(je)},restore:Pt})}var Zv=5126,Th=34962;function Pc(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Zv,this.offset=0,this.stride=0,this.divisor=0}function Kv(m,T,U,oe,be){for(var ae=U.maxAttributes,he=new Array(ae),Pe=0;Pe<ae;++Pe)he[Pe]=new Pc;var Oe=0,Be={},Ne={Record:Pc,scope:{},state:he,currentVAO:null,targetVAO:null,restore:$e()?Me:function(){},createVAO:at,getVAO:Xe,destroyBuffer:Ve,setVAO:$e()?Q:de,clear:$e()?Fe:function(){}};function Ve(Ce){for(var je=0;je<he.length;++je){var Re=he[je];Re.buffer===Ce&&(m.disableVertexAttribArray(je),Re.buffer=null)}}function $e(){return T.oes_vertex_array_object}function De(){return T.angle_instanced_arrays}function Xe(Ce){return typeof Ce=="function"&&Ce._vao?Ce._vao:null}function Q(Ce){if(Ce!==Ne.currentVAO){var je=$e();Ce?je.bindVertexArrayOES(Ce.vao):je.bindVertexArrayOES(null),Ne.currentVAO=Ce}}function de(Ce){if(Ce!==Ne.currentVAO){if(Ce)Ce.bindAttrs();else for(var je=De(),Re=0;Re<he.length;++Re){var qe=he[Re];qe.buffer?(m.enableVertexAttribArray(Re),m.vertexAttribPointer(Re,qe.size,qe.type,qe.normalized,qe.stride,qe.offfset),je&&qe.divisor&&je.vertexAttribDivisorANGLE(Re,qe.divisor)):(m.disableVertexAttribArray(Re),m.vertexAttrib4f(Re,qe.x,qe.y,qe.z,qe.w))}Ne.currentVAO=Ce}}function Fe(){yi(Be).forEach(function(Ce){Ce.destroy()})}function Qe(){this.id=++Oe,this.attributes=[];var Ce=$e();Ce?this.vao=Ce.createVertexArrayOES():this.vao=null,Be[this.id]=this,this.buffers=[]}Qe.prototype.bindAttrs=function(){for(var Ce=De(),je=this.attributes,Re=0;Re<je.length;++Re){var qe=je[Re];qe.buffer?(m.enableVertexAttribArray(Re),m.bindBuffer(Th,qe.buffer.buffer),m.vertexAttribPointer(Re,qe.size,qe.type,qe.normalized,qe.stride,qe.offset),Ce&&qe.divisor&&Ce.vertexAttribDivisorANGLE(Re,qe.divisor)):(m.disableVertexAttribArray(Re),m.vertexAttrib4f(Re,qe.x,qe.y,qe.z,qe.w))}for(var _t=je.length;_t<ae;++_t)m.disableVertexAttribArray(_t)},Qe.prototype.refresh=function(){var Ce=$e();Ce&&(Ce.bindVertexArrayOES(this.vao),this.bindAttrs(),Ne.currentVAO=this)},Qe.prototype.destroy=function(){if(this.vao){var Ce=$e();this===Ne.currentVAO&&(Ne.currentVAO=null,Ce.bindVertexArrayOES(null)),Ce.deleteVertexArrayOES(this.vao),this.vao=null}Be[this.id]&&(delete Be[this.id],oe.vaoCount-=1)};function Me(){var Ce=$e();Ce&&yi(Be).forEach(function(je){je.refresh()})}function at(Ce){var je=new Qe;oe.vaoCount+=1;function Re(qe){p(Array.isArray(qe),"arguments to vertex array constructor must be an array"),p(qe.length<ae,"too many attributes"),p(qe.length>0,"must specify at least one attribute");var _t={},Pt=je.attributes;Pt.length=qe.length;for(var Ze=0;Ze<qe.length;++Ze){var ke=qe[Ze],Ee=Pt[Ze]=new Pc,wt=ke.data||ke;if(Array.isArray(wt)||t(wt)||Ii(wt)){var Ft;je.buffers[Ze]&&(Ft=je.buffers[Ze],t(wt)&&Ft._buffer.byteLength>=wt.byteLength?Ft.subdata(wt):(Ft.destroy(),je.buffers[Ze]=null)),je.buffers[Ze]||(Ft=je.buffers[Ze]=be.create(ke,Th,!1,!0)),Ee.buffer=be.getBuffer(Ft),Ee.size=Ee.buffer.dimension|0,Ee.normalized=!1,Ee.type=Ee.buffer.dtype,Ee.offset=0,Ee.stride=0,Ee.divisor=0,Ee.state=1,_t[Ze]=1}else be.getBuffer(ke)?(Ee.buffer=be.getBuffer(ke),Ee.size=Ee.buffer.dimension|0,Ee.normalized=!1,Ee.type=Ee.buffer.dtype,Ee.offset=0,Ee.stride=0,Ee.divisor=0,Ee.state=1):be.getBuffer(ke.buffer)?(Ee.buffer=be.getBuffer(ke.buffer),Ee.size=(+ke.size||Ee.buffer.dimension)|0,Ee.normalized=!!ke.normalized||!1,"type"in ke?(p.parameter(ke.type,Gr,"invalid buffer type"),Ee.type=Gr[ke.type]):Ee.type=Ee.buffer.dtype,Ee.offset=(ke.offset||0)|0,Ee.stride=(ke.stride||0)|0,Ee.divisor=(ke.divisor||0)|0,Ee.state=1,p(Ee.size>=1&&Ee.size<=4,"size must be between 1 and 4"),p(Ee.offset>=0,"invalid offset"),p(Ee.stride>=0&&Ee.stride<=255,"stride must be between 0 and 255"),p(Ee.divisor>=0,"divisor must be positive"),p(!Ee.divisor||!!T.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in ke?(p(Ze>0,"first attribute must not be a constant"),Ee.x=+ke.x||0,Ee.y=+ke.y||0,Ee.z=+ke.z||0,Ee.w=+ke.w||0,Ee.state=2):p(!1,"invalid attribute spec for location "+Ze)}for(var ct=0;ct<je.buffers.length;++ct)!_t[ct]&&je.buffers[ct]&&(je.buffers[ct].destroy(),je.buffers[ct]=null);return je.refresh(),Re}return Re.destroy=function(){for(var qe=0;qe<je.buffers.length;++qe)je.buffers[qe]&&je.buffers[qe].destroy();je.buffers.length=0,je.destroy()},Re._vao=je,Re._reglType="vao",Re(Ce)}return Ne}var Ah=35632,Jv=35633,Qv=35718,eg=35721;function tg(m,T,U,oe){var be={},ae={};function he(Q,de,Fe,Qe){this.name=Q,this.id=de,this.location=Fe,this.info=Qe}function Pe(Q,de){for(var Fe=0;Fe<Q.length;++Fe)if(Q[Fe].id===de.id){Q[Fe].location=de.location;return}Q.push(de)}function Oe(Q,de,Fe){var Qe=Q===Ah?be:ae,Me=Qe[de];if(!Me){var at=T.str(de);Me=m.createShader(Q),m.shaderSource(Me,at),m.compileShader(Me),p.shaderError(m,Me,at,Q,Fe),Qe[de]=Me}return Me}var Be={},Ne=[],Ve=0;function $e(Q,de){this.id=Ve++,this.fragId=Q,this.vertId=de,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,oe.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function De(Q,de,Fe){var Qe,Me,at=Oe(Ah,Q.fragId),Ce=Oe(Jv,Q.vertId),je=Q.program=m.createProgram();if(m.attachShader(je,at),m.attachShader(je,Ce),Fe)for(Qe=0;Qe<Fe.length;++Qe){var Re=Fe[Qe];m.bindAttribLocation(je,Re[0],Re[1])}m.linkProgram(je),p.linkError(m,je,T.str(Q.fragId),T.str(Q.vertId),de);var qe=m.getProgramParameter(je,Qv);oe.profile&&(Q.stats.uniformsCount=qe);var _t=Q.uniforms;for(Qe=0;Qe<qe;++Qe)if(Me=m.getActiveUniform(je,Qe),Me)if(Me.size>1)for(var Pt=0;Pt<Me.size;++Pt){var Ze=Me.name.replace("[0]","["+Pt+"]");Pe(_t,new he(Ze,T.id(Ze),m.getUniformLocation(je,Ze),Me))}else Pe(_t,new he(Me.name,T.id(Me.name),m.getUniformLocation(je,Me.name),Me));var ke=m.getProgramParameter(je,eg);oe.profile&&(Q.stats.attributesCount=ke);var Ee=Q.attributes;for(Qe=0;Qe<ke;++Qe)Me=m.getActiveAttrib(je,Qe),Me&&Pe(Ee,new he(Me.name,T.id(Me.name),m.getAttribLocation(je,Me.name),Me))}oe.profile&&(U.getMaxUniformsCount=function(){var Q=0;return Ne.forEach(function(de){de.stats.uniformsCount>Q&&(Q=de.stats.uniformsCount)}),Q},U.getMaxAttributesCount=function(){var Q=0;return Ne.forEach(function(de){de.stats.attributesCount>Q&&(Q=de.stats.attributesCount)}),Q});function Xe(){be={},ae={};for(var Q=0;Q<Ne.length;++Q)De(Ne[Q],null,Ne[Q].attributes.map(function(de){return[de.location,de.name]}))}return{clear:function(){var Q=m.deleteShader.bind(m);yi(be).forEach(Q),be={},yi(ae).forEach(Q),ae={},Ne.forEach(function(de){m.deleteProgram(de.program)}),Ne.length=0,Be={},U.shaderCount=0},program:function(Q,de,Fe,Qe){p.command(Q>=0,"missing vertex shader",Fe),p.command(de>=0,"missing fragment shader",Fe);var Me=Be[de];Me||(Me=Be[de]={});var at=Me[Q];if(at&&(at.refCount++,!Qe))return at;var Ce=new $e(de,Q);return U.shaderCount++,De(Ce,Fe,Qe),at||(Me[Q]=Ce),Ne.push(Ce),n(Ce,{destroy:function(){if(Ce.refCount--,Ce.refCount<=0){m.deleteProgram(Ce.program);var je=Ne.indexOf(Ce);Ne.splice(je,1),U.shaderCount--}Me[Ce.vertId].refCount<=0&&(m.deleteShader(ae[Ce.vertId]),delete ae[Ce.vertId],delete Be[Ce.fragId][Ce.vertId]),Object.keys(Be[Ce.fragId]).length||(m.deleteShader(be[Ce.fragId]),delete be[Ce.fragId],delete Be[Ce.fragId])}})},restore:Xe,shader:Oe,frag:-1,vert:-1}}var ng=6408,Ds=5121,ig=3333,zo=5126;function rg(m,T,U,oe,be,ae,he){function Pe(Ne){var Ve;T.next===null?(p(be.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Ve=Ds):(p(T.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Ve=T.next.colorAttachments[0].texture._texture.type,ae.oes_texture_float?(p(Ve===Ds||Ve===zo,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Ve===zo&&p(he.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):p(Ve===Ds,"Reading from a framebuffer is only allowed for the type 'uint8'"));var $e=0,De=0,Xe=oe.framebufferWidth,Q=oe.framebufferHeight,de=null;t(Ne)?de=Ne:Ne&&(p.type(Ne,"object","invalid arguments to regl.read()"),$e=Ne.x|0,De=Ne.y|0,p($e>=0&&$e<oe.framebufferWidth,"invalid x offset for regl.read"),p(De>=0&&De<oe.framebufferHeight,"invalid y offset for regl.read"),Xe=(Ne.width||oe.framebufferWidth-$e)|0,Q=(Ne.height||oe.framebufferHeight-De)|0,de=Ne.data||null),de&&(Ve===Ds?p(de instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Ve===zo&&p(de instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),p(Xe>0&&Xe+$e<=oe.framebufferWidth,"invalid width for read pixels"),p(Q>0&&Q+De<=oe.framebufferHeight,"invalid height for read pixels"),U();var Fe=Xe*Q*4;return de||(Ve===Ds?de=new Uint8Array(Fe):Ve===zo&&(de=de||new Float32Array(Fe))),p.isTypedArray(de,"data buffer for regl.read() must be a typedarray"),p(de.byteLength>=Fe,"data buffer for regl.read() too small"),m.pixelStorei(ig,4),m.readPixels($e,De,Xe,Q,ng,Ve,de),de}function Oe(Ne){var Ve;return T.setFBO({framebuffer:Ne.framebuffer},function(){Ve=Pe(Ne)}),Ve}function Be(Ne){return!Ne||!("framebuffer"in Ne)?Pe(Ne):Oe(Ne)}return Be}function Ra(m){return Array.prototype.slice.call(m)}function Ca(m){return Ra(m).join("")}function ag(){var m=0,T=[],U=[];function oe(Ve){for(var $e=0;$e<U.length;++$e)if(U[$e]===Ve)return T[$e];var De="g"+m++;return T.push(De),U.push(Ve),De}function be(){var Ve=[];function $e(){Ve.push.apply(Ve,Ra(arguments))}var De=[];function Xe(){var Q="v"+m++;return De.push(Q),arguments.length>0&&(Ve.push(Q,"="),Ve.push.apply(Ve,Ra(arguments)),Ve.push(";")),Q}return n($e,{def:Xe,toString:function(){return Ca([De.length>0?"var "+De.join(",")+";":"",Ca(Ve)])}})}function ae(){var Ve=be(),$e=be(),De=Ve.toString,Xe=$e.toString;function Q(de,Fe){$e(de,Fe,"=",Ve.def(de,Fe),";")}return n(function(){Ve.apply(Ve,Ra(arguments))},{def:Ve.def,entry:Ve,exit:$e,save:Q,set:function(de,Fe,Qe){Q(de,Fe),Ve(de,Fe,"=",Qe,";")},toString:function(){return De()+Xe()}})}function he(){var Ve=Ca(arguments),$e=ae(),De=ae(),Xe=$e.toString,Q=De.toString;return n($e,{then:function(){return $e.apply($e,Ra(arguments)),this},else:function(){return De.apply(De,Ra(arguments)),this},toString:function(){var de=Q();return de&&(de="else{"+de+"}"),Ca(["if(",Ve,"){",Xe(),"}",de])}})}var Pe=be(),Oe={};function Be(Ve,$e){var De=[];function Xe(){var Me="a"+De.length;return De.push(Me),Me}$e=$e||0;for(var Q=0;Q<$e;++Q)Xe();var de=ae(),Fe=de.toString,Qe=Oe[Ve]=n(de,{arg:Xe,toString:function(){return Ca(["function(",De.join(),"){",Fe(),"}"])}});return Qe}function Ne(){var Ve=['"use strict";',Pe,"return {"];Object.keys(Oe).forEach(function(Xe){Ve.push('"',Xe,'":',Oe[Xe].toString(),",")}),Ve.push("}");var $e=Ca(Ve).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),De=Function.apply(null,T.concat($e));return De.apply(null,U)}return{global:Pe,link:oe,block:be,proc:Be,scope:ae,cond:he,compile:Ne}}var La="xyzw".split(""),wh=5121,Pa=1,Dc=2,Oc=0,Nc=1,Ic=2,Uc=3,Ho=4,Rh=5,Ch=6,Lh="dither",Ph="blend.enable",Dh="blend.color",Fc="blend.equation",Bc="blend.func",Oh="depth.enable",Nh="depth.func",Ih="depth.range",Uh="depth.mask",Gc="colorMask",Fh="cull.enable",Bh="cull.face",kc="frontFace",zc="lineWidth",Gh="polygonOffset.enable",Hc="polygonOffset.offset",kh="sample.alpha",zh="sample.enable",Vc="sample.coverage",Hh="stencil.enable",Vh="stencil.mask",Wc="stencil.func",Xc="stencil.opFront",Os="stencil.opBack",Wh="scissor.enable",Vo="scissor.box",nr="viewport",Ns="profile",Wr="framebuffer",Is="vert",Us="frag",Xr="elements",Yr="primitive",jr="count",Wo="offset",Xo="instances",Fs="vao",Yc="Width",jc="Height",Da=Wr+Yc,Oa=Wr+jc,sg=nr+Yc,og=nr+jc,Xh="drawingBuffer",Yh=Xh+Yc,jh=Xh+jc,lg=[Bc,Fc,Wc,Xc,Os,Vc,nr,Vo,Hc],Na=34962,cg=34963,ug=35632,fg=35633,qh=3553,hg=34067,dg=2884,pg=3042,mg=3024,_g=2960,vg=2929,gg=3089,yg=32823,xg=32926,bg=32928,qc=5126,Yo=35664,jo=35665,qo=35666,$c=5124,$o=35667,Zo=35668,Ko=35669,Zc=35670,Jo=35671,Qo=35672,el=35673,Bs=35674,Gs=35675,ks=35676,zs=35678,Hs=35680,$h=4,Vs=1028,qr=1029,Zh=2304,Kc=2305,Sg=32775,Eg=32776,Mg=519,gr=7680,Kh=0,Jh=1,Qh=32774,Tg=513,ed=36160,Ag=36064,Yi={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},td=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ia={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},yr={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},nd={frag:ug,vert:fg},Jc={cw:Zh,ccw:Kc};function tl(m){return Array.isArray(m)||t(m)||Ii(m)}function id(m){return m.sort(function(T,U){return T===nr?-1:U===nr?1:T<U?-1:1})}function ui(m,T,U,oe){this.thisDep=m,this.contextDep=T,this.propDep=U,this.append=oe}function xr(m){return m&&!(m.thisDep||m.contextDep||m.propDep)}function Pn(m){return new ui(!1,!1,!1,m)}function vi(m,T){var U=m.type;if(U===Oc){var oe=m.data.length;return new ui(!0,oe>=1,oe>=2,T)}else if(U===Ho){var be=m.data;return new ui(be.thisDep,be.contextDep,be.propDep,T)}else{if(U===Rh)return new ui(!1,!1,!1,T);if(U===Ch){for(var ae=!1,he=!1,Pe=!1,Oe=0;Oe<m.data.length;++Oe){var Be=m.data[Oe];if(Be.type===Nc)Pe=!0;else if(Be.type===Ic)he=!0;else if(Be.type===Uc)ae=!0;else if(Be.type===Oc){ae=!0;var Ne=Be.data;Ne>=1&&(he=!0),Ne>=2&&(Pe=!0)}else Be.type===Ho&&(ae=ae||Be.data.thisDep,he=he||Be.data.contextDep,Pe=Pe||Be.data.propDep)}return new ui(ae,he,Pe,T)}else return new ui(U===Uc,U===Ic,U===Nc,T)}}var rd=new ui(!1,!1,!1,function(){});function wg(m,T,U,oe,be,ae,he,Pe,Oe,Be,Ne,Ve,$e,De,Xe){var Q=Be.Record,de={add:32774,subtract:32778,"reverse subtract":32779};U.ext_blend_minmax&&(de.min=Sg,de.max=Eg);var Fe=U.angle_instanced_arrays,Qe=U.webgl_draw_buffers,Me={dirty:!0,profile:Xe.profile},at={},Ce=[],je={},Re={};function qe(R){return R.replace(".","_")}function _t(R,M,k){var J=qe(R);Ce.push(R),at[J]=Me[J]=!!k,je[J]=M}function Pt(R,M,k){var J=qe(R);Ce.push(R),Array.isArray(k)?(Me[J]=k.slice(),at[J]=k.slice()):Me[J]=at[J]=k,Re[J]=M}_t(Lh,mg),_t(Ph,pg),Pt(Dh,"blendColor",[0,0,0,0]),Pt(Fc,"blendEquationSeparate",[Qh,Qh]),Pt(Bc,"blendFuncSeparate",[Jh,Kh,Jh,Kh]),_t(Oh,vg,!0),Pt(Nh,"depthFunc",Tg),Pt(Ih,"depthRange",[0,1]),Pt(Uh,"depthMask",!0),Pt(Gc,Gc,[!0,!0,!0,!0]),_t(Fh,dg),Pt(Bh,"cullFace",qr),Pt(kc,kc,Kc),Pt(zc,zc,1),_t(Gh,yg),Pt(Hc,"polygonOffset",[0,0]),_t(kh,xg),_t(zh,bg),Pt(Vc,"sampleCoverage",[1,!1]),_t(Hh,_g),Pt(Vh,"stencilMask",-1),Pt(Wc,"stencilFunc",[Mg,0,-1]),Pt(Xc,"stencilOpSeparate",[Vs,gr,gr,gr]),Pt(Os,"stencilOpSeparate",[qr,gr,gr,gr]),_t(Wh,gg),Pt(Vo,"scissor",[0,0,m.drawingBufferWidth,m.drawingBufferHeight]),Pt(nr,nr,[0,0,m.drawingBufferWidth,m.drawingBufferHeight]);var Ze={gl:m,context:$e,strings:T,next:at,current:Me,draw:Ve,elements:ae,buffer:be,shader:Ne,attributes:Be.state,vao:Be,uniforms:Oe,framebuffer:Pe,extensions:U,timer:De,isBufferArgs:tl},ke={primTypes:xa,compareFuncs:Ia,blendFuncs:Yi,blendEquations:de,stencilOps:yr,glTypes:Gr,orientationType:Jc};p.optional(function(){Ze.isArrayLike=Tn}),Qe&&(ke.backBuffer=[qr],ke.drawBuffer=fn(oe.maxDrawbuffers,function(R){return R===0?[0]:fn(R,function(M){return Ag+M})}));var Ee=0;function wt(){var R=ag(),M=R.link,k=R.global;R.id=Ee++,R.batchId="0";var J=M(Ze),ee=R.shared={props:"a0"};Object.keys(Ze).forEach(function(G){ee[G]=k.def(J,".",G)}),p.optional(function(){R.CHECK=M(p),R.commandStr=p.guessCommand(),R.command=M(R.commandStr),R.assert=function(G,w,K){G("if(!(",w,"))",this.CHECK,".commandRaise(",M(K),",",this.command,");")},ke.invalidBlendCombinations=td});var V=R.next={},z=R.current={};Object.keys(Re).forEach(function(G){Array.isArray(Me[G])&&(V[G]=k.def(ee.next,".",G),z[G]=k.def(ee.current,".",G))});var Z=R.constants={};Object.keys(ke).forEach(function(G){Z[G]=k.def(JSON.stringify(ke[G]))}),R.invoke=function(G,w){switch(w.type){case Oc:var K=["this",ee.context,ee.props,R.batchId];return G.def(M(w.data),".call(",K.slice(0,Math.max(w.data.length+1,4)),")");case Nc:return G.def(ee.props,w.data);case Ic:return G.def(ee.context,w.data);case Uc:return G.def("this",w.data);case Ho:return w.data.append(R,G),w.data.ref;case Rh:return w.data.toString();case Ch:return w.data.map(function(ie){return R.invoke(G,ie)})}},R.attribCache={};var C={};return R.scopeAttrib=function(G){var w=T.id(G);if(w in C)return C[w];var K=Be.scope[w];K||(K=Be.scope[w]=new Q);var ie=C[w]=M(K);return ie},R}function Ft(R){var M=R.static,k=R.dynamic,J;if(Ns in M){var ee=!!M[Ns];J=Pn(function(z,Z){return ee}),J.enable=ee}else if(Ns in k){var V=k[Ns];J=vi(V,function(z,Z){return z.invoke(Z,V)})}return J}function ct(R,M){var k=R.static,J=R.dynamic;if(Wr in k){var ee=k[Wr];return ee?(ee=Pe.getFramebuffer(ee),p.command(ee,"invalid framebuffer object"),Pn(function(z,Z){var C=z.link(ee),G=z.shared;Z.set(G.framebuffer,".next",C);var w=G.context;return Z.set(w,"."+Da,C+".width"),Z.set(w,"."+Oa,C+".height"),C})):Pn(function(z,Z){var C=z.shared;Z.set(C.framebuffer,".next","null");var G=C.context;return Z.set(G,"."+Da,G+"."+Yh),Z.set(G,"."+Oa,G+"."+jh),"null"})}else if(Wr in J){var V=J[Wr];return vi(V,function(z,Z){var C=z.invoke(Z,V),G=z.shared,w=G.framebuffer,K=Z.def(w,".getFramebuffer(",C,")");p.optional(function(){z.assert(Z,"!"+C+"||"+K,"invalid framebuffer object")}),Z.set(w,".next",K);var ie=G.context;return Z.set(ie,"."+Da,K+"?"+K+".width:"+ie+"."+Yh),Z.set(ie,"."+Oa,K+"?"+K+".height:"+ie+"."+jh),K})}else return null}function jt(R,M,k){var J=R.static,ee=R.dynamic;function V(C){if(C in J){var G=J[C];p.commandType(G,"object","invalid "+C,k.commandStr);var w=!0,K=G.x|0,ie=G.y|0,xe,Se;return"width"in G?(xe=G.width|0,p.command(xe>=0,"invalid "+C,k.commandStr)):w=!1,"height"in G?(Se=G.height|0,p.command(Se>=0,"invalid "+C,k.commandStr)):w=!1,new ui(!w&&M&&M.thisDep,!w&&M&&M.contextDep,!w&&M&&M.propDep,function(mt,Gt){var ut=mt.shared.context,Et=xe;"width"in G||(Et=Gt.def(ut,".",Da,"-",K));var Nt=Se;return"height"in G||(Nt=Gt.def(ut,".",Oa,"-",ie)),[K,ie,Et,Nt]})}else if(C in ee){var me=ee[C],Ue=vi(me,function(mt,Gt){var ut=mt.invoke(Gt,me);p.optional(function(){mt.assert(Gt,ut+"&&typeof "+ut+'==="object"',"invalid "+C)});var Et=mt.shared.context,Nt=Gt.def(ut,".x|0"),ln=Gt.def(ut,".y|0"),En=Gt.def('"width" in ',ut,"?",ut,".width|0:","(",Et,".",Da,"-",Nt,")"),fi=Gt.def('"height" in ',ut,"?",ut,".height|0:","(",Et,".",Oa,"-",ln,")");return p.optional(function(){mt.assert(Gt,En+">=0&&"+fi+">=0","invalid "+C)}),[Nt,ln,En,fi]});return M&&(Ue.thisDep=Ue.thisDep||M.thisDep,Ue.contextDep=Ue.contextDep||M.contextDep,Ue.propDep=Ue.propDep||M.propDep),Ue}else return M?new ui(M.thisDep,M.contextDep,M.propDep,function(mt,Gt){var ut=mt.shared.context;return[0,0,Gt.def(ut,".",Da),Gt.def(ut,".",Oa)]}):null}var z=V(nr);if(z){var Z=z;z=new ui(z.thisDep,z.contextDep,z.propDep,function(C,G){var w=Z.append(C,G),K=C.shared.context;return G.set(K,"."+sg,w[2]),G.set(K,"."+og,w[3]),w})}return{viewport:z,scissor_box:V(Vo)}}function Dt(R,M){var k=R.static,J=typeof k[Us]=="string"&&typeof k[Is]=="string";if(J){if(Object.keys(M.dynamic).length>0)return null;var ee=M.static,V=Object.keys(ee);if(V.length>0&&typeof ee[V[0]]=="number"){for(var z=[],Z=0;Z<V.length;++Z)p(typeof ee[V[Z]]=="number","must specify all vertex attribute locations when using vaos"),z.push([ee[V[Z]]|0,V[Z]]);return z}}return null}function Vt(R,M,k){var J=R.static,ee=R.dynamic;function V(w){if(w in J){var K=T.id(J[w]);p.optional(function(){Ne.shader(nd[w],K,p.guessCommand())});var ie=Pn(function(){return K});return ie.id=K,ie}else if(w in ee){var xe=ee[w];return vi(xe,function(Se,me){var Ue=Se.invoke(me,xe),mt=me.def(Se.shared.strings,".id(",Ue,")");return p.optional(function(){me(Se.shared.shader,".shader(",nd[w],",",mt,",",Se.command,");")}),mt})}return null}var z=V(Us),Z=V(Is),C=null,G;return xr(z)&&xr(Z)?(C=Ne.program(Z.id,z.id,null,k),G=Pn(function(w,K){return w.link(C)})):G=new ui(z&&z.thisDep||Z&&Z.thisDep,z&&z.contextDep||Z&&Z.contextDep,z&&z.propDep||Z&&Z.propDep,function(w,K){var ie=w.shared.shader,xe;z?xe=z.append(w,K):xe=K.def(ie,".",Us);var Se;Z?Se=Z.append(w,K):Se=K.def(ie,".",Is);var me=ie+".program("+Se+","+xe;return p.optional(function(){me+=","+w.command}),K.def(me+")")}),{frag:z,vert:Z,progVar:G,program:C}}function on(R,M){var k=R.static,J=R.dynamic;function ee(){if(Xr in k){var w=k[Xr];tl(w)?w=ae.getElements(ae.create(w,!0)):w&&(w=ae.getElements(w),p.command(w,"invalid elements",M.commandStr));var K=Pn(function(xe,Se){if(w){var me=xe.link(w);return xe.ELEMENTS=me,me}return xe.ELEMENTS=null,null});return K.value=w,K}else if(Xr in J){var ie=J[Xr];return vi(ie,function(xe,Se){var me=xe.shared,Ue=me.isBufferArgs,mt=me.elements,Gt=xe.invoke(Se,ie),ut=Se.def("null"),Et=Se.def(Ue,"(",Gt,")"),Nt=xe.cond(Et).then(ut,"=",mt,".createStream(",Gt,");").else(ut,"=",mt,".getElements(",Gt,");");return p.optional(function(){xe.assert(Nt.else,"!"+Gt+"||"+ut,"invalid elements")}),Se.entry(Nt),Se.exit(xe.cond(Et).then(mt,".destroyStream(",ut,");")),xe.ELEMENTS=ut,ut})}return null}var V=ee();function z(){if(Yr in k){var w=k[Yr];return p.commandParameter(w,xa,"invalid primitve",M.commandStr),Pn(function(ie,xe){return xa[w]})}else if(Yr in J){var K=J[Yr];return vi(K,function(ie,xe){var Se=ie.constants.primTypes,me=ie.invoke(xe,K);return p.optional(function(){ie.assert(xe,me+" in "+Se,"invalid primitive, must be one of "+Object.keys(xa))}),xe.def(Se,"[",me,"]")})}else if(V)return xr(V)?V.value?Pn(function(ie,xe){return xe.def(ie.ELEMENTS,".primType")}):Pn(function(){return $h}):new ui(V.thisDep,V.contextDep,V.propDep,function(ie,xe){var Se=ie.ELEMENTS;return xe.def(Se,"?",Se,".primType:",$h)});return null}function Z(w,K){if(w in k){var ie=k[w]|0;return p.command(!K||ie>=0,"invalid "+w,M.commandStr),Pn(function(Se,me){return K&&(Se.OFFSET=ie),ie})}else if(w in J){var xe=J[w];return vi(xe,function(Se,me){var Ue=Se.invoke(me,xe);return K&&(Se.OFFSET=Ue,p.optional(function(){Se.assert(me,Ue+">=0","invalid "+w)})),Ue})}else if(K&&V)return Pn(function(Se,me){return Se.OFFSET="0",0});return null}var C=Z(Wo,!0);function G(){if(jr in k){var w=k[jr]|0;return p.command(typeof w=="number"&&w>=0,"invalid vertex count",M.commandStr),Pn(function(){return w})}else if(jr in J){var K=J[jr];return vi(K,function(Se,me){var Ue=Se.invoke(me,K);return p.optional(function(){Se.assert(me,"typeof "+Ue+'==="number"&&'+Ue+">=0&&"+Ue+"===("+Ue+"|0)","invalid vertex count")}),Ue})}else if(V)if(xr(V)){if(V)return C?new ui(C.thisDep,C.contextDep,C.propDep,function(Se,me){var Ue=me.def(Se.ELEMENTS,".vertCount-",Se.OFFSET);return p.optional(function(){Se.assert(me,Ue+">=0","invalid vertex offset/element buffer too small")}),Ue}):Pn(function(Se,me){return me.def(Se.ELEMENTS,".vertCount")});var ie=Pn(function(){return-1});return p.optional(function(){ie.MISSING=!0}),ie}else{var xe=new ui(V.thisDep||C.thisDep,V.contextDep||C.contextDep,V.propDep||C.propDep,function(Se,me){var Ue=Se.ELEMENTS;return Se.OFFSET?me.def(Ue,"?",Ue,".vertCount-",Se.OFFSET,":-1"):me.def(Ue,"?",Ue,".vertCount:-1")});return p.optional(function(){xe.DYNAMIC=!0}),xe}return null}return{elements:V,primitive:z(),count:G(),instances:Z(Xo,!1),offset:C}}function Dn(R,M){var k=R.static,J=R.dynamic,ee={};return Ce.forEach(function(V){var z=qe(V);function Z(C,G){if(V in k){var w=C(k[V]);ee[z]=Pn(function(){return w})}else if(V in J){var K=J[V];ee[z]=vi(K,function(ie,xe){return G(ie,xe,ie.invoke(xe,K))})}}switch(V){case Fh:case Ph:case Lh:case Hh:case Oh:case Wh:case Gh:case kh:case zh:case Uh:return Z(function(C){return p.commandType(C,"boolean",V,M.commandStr),C},function(C,G,w){return p.optional(function(){C.assert(G,"typeof "+w+'==="boolean"',"invalid flag "+V,C.commandStr)}),w});case Nh:return Z(function(C){return p.commandParameter(C,Ia,"invalid "+V,M.commandStr),Ia[C]},function(C,G,w){var K=C.constants.compareFuncs;return p.optional(function(){C.assert(G,w+" in "+K,"invalid "+V+", must be one of "+Object.keys(Ia))}),G.def(K,"[",w,"]")});case Ih:return Z(function(C){return p.command(Tn(C)&&C.length===2&&typeof C[0]=="number"&&typeof C[1]=="number"&&C[0]<=C[1],"depth range is 2d array",M.commandStr),C},function(C,G,w){p.optional(function(){C.assert(G,C.shared.isArrayLike+"("+w+")&&"+w+".length===2&&typeof "+w+'[0]==="number"&&typeof '+w+'[1]==="number"&&'+w+"[0]<="+w+"[1]","depth range must be a 2d array")});var K=G.def("+",w,"[0]"),ie=G.def("+",w,"[1]");return[K,ie]});case Bc:return Z(function(C){p.commandType(C,"object","blend.func",M.commandStr);var G="srcRGB"in C?C.srcRGB:C.src,w="srcAlpha"in C?C.srcAlpha:C.src,K="dstRGB"in C?C.dstRGB:C.dst,ie="dstAlpha"in C?C.dstAlpha:C.dst;return p.commandParameter(G,Yi,z+".srcRGB",M.commandStr),p.commandParameter(w,Yi,z+".srcAlpha",M.commandStr),p.commandParameter(K,Yi,z+".dstRGB",M.commandStr),p.commandParameter(ie,Yi,z+".dstAlpha",M.commandStr),p.command(td.indexOf(G+", "+K)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+G+", "+K+")",M.commandStr),[Yi[G],Yi[K],Yi[w],Yi[ie]]},function(C,G,w){var K=C.constants.blendFuncs;p.optional(function(){C.assert(G,w+"&&typeof "+w+'==="object"',"invalid blend func, must be an object")});function ie(ut,Et){var Nt=G.def('"',ut,Et,'" in ',w,"?",w,".",ut,Et,":",w,".",ut);return p.optional(function(){C.assert(G,Nt+" in "+K,"invalid "+V+"."+ut+Et+", must be one of "+Object.keys(Yi))}),Nt}var xe=ie("src","RGB"),Se=ie("dst","RGB");p.optional(function(){var ut=C.constants.invalidBlendCombinations;C.assert(G,ut+".indexOf("+xe+'+", "+'+Se+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var me=G.def(K,"[",xe,"]"),Ue=G.def(K,"[",ie("src","Alpha"),"]"),mt=G.def(K,"[",Se,"]"),Gt=G.def(K,"[",ie("dst","Alpha"),"]");return[me,mt,Ue,Gt]});case Fc:return Z(function(C){if(typeof C=="string")return p.commandParameter(C,de,"invalid "+V,M.commandStr),[de[C],de[C]];if(typeof C=="object")return p.commandParameter(C.rgb,de,V+".rgb",M.commandStr),p.commandParameter(C.alpha,de,V+".alpha",M.commandStr),[de[C.rgb],de[C.alpha]];p.commandRaise("invalid blend.equation",M.commandStr)},function(C,G,w){var K=C.constants.blendEquations,ie=G.def(),xe=G.def(),Se=C.cond("typeof ",w,'==="string"');return p.optional(function(){function me(Ue,mt,Gt){C.assert(Ue,Gt+" in "+K,"invalid "+mt+", must be one of "+Object.keys(de))}me(Se.then,V,w),C.assert(Se.else,w+"&&typeof "+w+'==="object"',"invalid "+V),me(Se.else,V+".rgb",w+".rgb"),me(Se.else,V+".alpha",w+".alpha")}),Se.then(ie,"=",xe,"=",K,"[",w,"];"),Se.else(ie,"=",K,"[",w,".rgb];",xe,"=",K,"[",w,".alpha];"),G(Se),[ie,xe]});case Dh:return Z(function(C){return p.command(Tn(C)&&C.length===4,"blend.color must be a 4d array",M.commandStr),fn(4,function(G){return+C[G]})},function(C,G,w){return p.optional(function(){C.assert(G,C.shared.isArrayLike+"("+w+")&&"+w+".length===4","blend.color must be a 4d array")}),fn(4,function(K){return G.def("+",w,"[",K,"]")})});case Vh:return Z(function(C){return p.commandType(C,"number",z,M.commandStr),C|0},function(C,G,w){return p.optional(function(){C.assert(G,"typeof "+w+'==="number"',"invalid stencil.mask")}),G.def(w,"|0")});case Wc:return Z(function(C){p.commandType(C,"object",z,M.commandStr);var G=C.cmp||"keep",w=C.ref||0,K="mask"in C?C.mask:-1;return p.commandParameter(G,Ia,V+".cmp",M.commandStr),p.commandType(w,"number",V+".ref",M.commandStr),p.commandType(K,"number",V+".mask",M.commandStr),[Ia[G],w,K]},function(C,G,w){var K=C.constants.compareFuncs;p.optional(function(){function me(){C.assert(G,Array.prototype.join.call(arguments,""),"invalid stencil.func")}me(w+"&&typeof ",w,'==="object"'),me('!("cmp" in ',w,")||(",w,".cmp in ",K,")")});var ie=G.def('"cmp" in ',w,"?",K,"[",w,".cmp]",":",gr),xe=G.def(w,".ref|0"),Se=G.def('"mask" in ',w,"?",w,".mask|0:-1");return[ie,xe,Se]});case Xc:case Os:return Z(function(C){p.commandType(C,"object",z,M.commandStr);var G=C.fail||"keep",w=C.zfail||"keep",K=C.zpass||"keep";return p.commandParameter(G,yr,V+".fail",M.commandStr),p.commandParameter(w,yr,V+".zfail",M.commandStr),p.commandParameter(K,yr,V+".zpass",M.commandStr),[V===Os?qr:Vs,yr[G],yr[w],yr[K]]},function(C,G,w){var K=C.constants.stencilOps;p.optional(function(){C.assert(G,w+"&&typeof "+w+'==="object"',"invalid "+V)});function ie(xe){return p.optional(function(){C.assert(G,'!("'+xe+'" in '+w+")||("+w+"."+xe+" in "+K+")","invalid "+V+"."+xe+", must be one of "+Object.keys(yr))}),G.def('"',xe,'" in ',w,"?",K,"[",w,".",xe,"]:",gr)}return[V===Os?qr:Vs,ie("fail"),ie("zfail"),ie("zpass")]});case Hc:return Z(function(C){p.commandType(C,"object",z,M.commandStr);var G=C.factor|0,w=C.units|0;return p.commandType(G,"number",z+".factor",M.commandStr),p.commandType(w,"number",z+".units",M.commandStr),[G,w]},function(C,G,w){p.optional(function(){C.assert(G,w+"&&typeof "+w+'==="object"',"invalid "+V)});var K=G.def(w,".factor|0"),ie=G.def(w,".units|0");return[K,ie]});case Bh:return Z(function(C){var G=0;return C==="front"?G=Vs:C==="back"&&(G=qr),p.command(!!G,z,M.commandStr),G},function(C,G,w){return p.optional(function(){C.assert(G,w+'==="front"||'+w+'==="back"',"invalid cull.face")}),G.def(w,'==="front"?',Vs,":",qr)});case zc:return Z(function(C){return p.command(typeof C=="number"&&C>=oe.lineWidthDims[0]&&C<=oe.lineWidthDims[1],"invalid line width, must be a positive number between "+oe.lineWidthDims[0]+" and "+oe.lineWidthDims[1],M.commandStr),C},function(C,G,w){return p.optional(function(){C.assert(G,"typeof "+w+'==="number"&&'+w+">="+oe.lineWidthDims[0]+"&&"+w+"<="+oe.lineWidthDims[1],"invalid line width")}),w});case kc:return Z(function(C){return p.commandParameter(C,Jc,z,M.commandStr),Jc[C]},function(C,G,w){return p.optional(function(){C.assert(G,w+'==="cw"||'+w+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),G.def(w+'==="cw"?'+Zh+":"+Kc)});case Gc:return Z(function(C){return p.command(Tn(C)&&C.length===4,"color.mask must be length 4 array",M.commandStr),C.map(function(G){return!!G})},function(C,G,w){return p.optional(function(){C.assert(G,C.shared.isArrayLike+"("+w+")&&"+w+".length===4","invalid color.mask")}),fn(4,function(K){return"!!"+w+"["+K+"]"})});case Vc:return Z(function(C){p.command(typeof C=="object"&&C,z,M.commandStr);var G="value"in C?C.value:1,w=!!C.invert;return p.command(typeof G=="number"&&G>=0&&G<=1,"sample.coverage.value must be a number between 0 and 1",M.commandStr),[G,w]},function(C,G,w){p.optional(function(){C.assert(G,w+"&&typeof "+w+'==="object"',"invalid sample.coverage")});var K=G.def('"value" in ',w,"?+",w,".value:1"),ie=G.def("!!",w,".invert");return[K,ie]})}}),ee}function zn(R,M){var k=R.static,J=R.dynamic,ee={};return Object.keys(k).forEach(function(V){var z=k[V],Z;if(typeof z=="number"||typeof z=="boolean")Z=Pn(function(){return z});else if(typeof z=="function"){var C=z._reglType;C==="texture2d"||C==="textureCube"?Z=Pn(function(G){return G.link(z)}):C==="framebuffer"||C==="framebufferCube"?(p.command(z.color.length>0,'missing color attachment for framebuffer sent to uniform "'+V+'"',M.commandStr),Z=Pn(function(G){return G.link(z.color[0])})):p.commandRaise('invalid data for uniform "'+V+'"',M.commandStr)}else Tn(z)?Z=Pn(function(G){var w=G.global.def("[",fn(z.length,function(K){return p.command(typeof z[K]=="number"||typeof z[K]=="boolean","invalid uniform "+V,G.commandStr),z[K]}),"]");return w}):p.commandRaise('invalid or missing data for uniform "'+V+'"',M.commandStr);Z.value=z,ee[V]=Z}),Object.keys(J).forEach(function(V){var z=J[V];ee[V]=vi(z,function(Z,C){return Z.invoke(C,z)})}),ee}function Kt(R,M){var k=R.static,J=R.dynamic,ee={};return Object.keys(k).forEach(function(V){var z=k[V],Z=T.id(V),C=new Q;if(tl(z))C.state=Pa,C.buffer=be.getBuffer(be.create(z,Na,!1,!0)),C.type=0;else{var G=be.getBuffer(z);if(G)C.state=Pa,C.buffer=G,C.type=0;else if(p.command(typeof z=="object"&&z,"invalid data for attribute "+V,M.commandStr),"constant"in z){var w=z.constant;C.buffer="null",C.state=Dc,typeof w=="number"?C.x=w:(p.command(Tn(w)&&w.length>0&&w.length<=4,"invalid constant for attribute "+V,M.commandStr),La.forEach(function(mt,Gt){Gt<w.length&&(C[mt]=w[Gt])}))}else{tl(z.buffer)?G=be.getBuffer(be.create(z.buffer,Na,!1,!0)):G=be.getBuffer(z.buffer),p.command(!!G,'missing buffer for attribute "'+V+'"',M.commandStr);var K=z.offset|0;p.command(K>=0,'invalid offset for attribute "'+V+'"',M.commandStr);var ie=z.stride|0;p.command(ie>=0&&ie<256,'invalid stride for attribute "'+V+'", must be integer betweeen [0, 255]',M.commandStr);var xe=z.size|0;p.command(!("size"in z)||xe>0&&xe<=4,'invalid size for attribute "'+V+'", must be 1,2,3,4',M.commandStr);var Se=!!z.normalized,me=0;"type"in z&&(p.commandParameter(z.type,Gr,"invalid type for attribute "+V,M.commandStr),me=Gr[z.type]);var Ue=z.divisor|0;"divisor"in z&&(p.command(Ue===0||Fe,'cannot specify divisor for attribute "'+V+'", instancing not supported',M.commandStr),p.command(Ue>=0,'invalid divisor for attribute "'+V+'"',M.commandStr)),p.optional(function(){var mt=M.commandStr,Gt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(z).forEach(function(ut){p.command(Gt.indexOf(ut)>=0,'unknown parameter "'+ut+'" for attribute pointer "'+V+'" (valid parameters are '+Gt+")",mt)})}),C.buffer=G,C.state=Pa,C.size=xe,C.normalized=Se,C.type=me||G.dtype,C.offset=K,C.stride=ie,C.divisor=Ue}}ee[V]=Pn(function(mt,Gt){var ut=mt.attribCache;if(Z in ut)return ut[Z];var Et={isStream:!1};return Object.keys(C).forEach(function(Nt){Et[Nt]=C[Nt]}),C.buffer&&(Et.buffer=mt.link(C.buffer),Et.type=Et.type||Et.buffer+".dtype"),ut[Z]=Et,Et})}),Object.keys(J).forEach(function(V){var z=J[V];function Z(C,G){var w=C.invoke(G,z),K=C.shared,ie=C.constants,xe=K.isBufferArgs,Se=K.buffer;p.optional(function(){C.assert(G,w+"&&(typeof "+w+'==="object"||typeof '+w+'==="function")&&('+xe+"("+w+")||"+Se+".getBuffer("+w+")||"+Se+".getBuffer("+w+".buffer)||"+xe+"("+w+'.buffer)||("constant" in '+w+"&&(typeof "+w+'.constant==="number"||'+K.isArrayLike+"("+w+".constant))))",'invalid dynamic attribute "'+V+'"')});var me={isStream:G.def(!1)},Ue=new Q;Ue.state=Pa,Object.keys(Ue).forEach(function(Et){me[Et]=G.def(""+Ue[Et])});var mt=me.buffer,Gt=me.type;G("if(",xe,"(",w,")){",me.isStream,"=true;",mt,"=",Se,".createStream(",Na,",",w,");",Gt,"=",mt,".dtype;","}else{",mt,"=",Se,".getBuffer(",w,");","if(",mt,"){",Gt,"=",mt,".dtype;",'}else if("constant" in ',w,"){",me.state,"=",Dc,";","if(typeof "+w+'.constant === "number"){',me[La[0]],"=",w,".constant;",La.slice(1).map(function(Et){return me[Et]}).join("="),"=0;","}else{",La.map(function(Et,Nt){return me[Et]+"="+w+".constant.length>"+Nt+"?"+w+".constant["+Nt+"]:0;"}).join(""),"}}else{","if(",xe,"(",w,".buffer)){",mt,"=",Se,".createStream(",Na,",",w,".buffer);","}else{",mt,"=",Se,".getBuffer(",w,".buffer);","}",Gt,'="type" in ',w,"?",ie.glTypes,"[",w,".type]:",mt,".dtype;",me.normalized,"=!!",w,".normalized;");function ut(Et){G(me[Et],"=",w,".",Et,"|0;")}return ut("size"),ut("offset"),ut("stride"),ut("divisor"),G("}}"),G.exit("if(",me.isStream,"){",Se,".destroyStream(",mt,");","}"),me}ee[V]=vi(z,Z)}),ee}function Un(R,M){var k=R.static,J=R.dynamic;if(Fs in k){var ee=k[Fs];return ee!==null&&Be.getVAO(ee)===null&&(ee=Be.createVAO(ee)),Pn(function(z){return z.link(Be.getVAO(ee))})}else if(Fs in J){var V=J[Fs];return vi(V,function(z,Z){var C=z.invoke(Z,V);return Z.def(z.shared.vao+".getVAO("+C+")")})}return null}function pn(R){var M=R.static,k=R.dynamic,J={};return Object.keys(M).forEach(function(ee){var V=M[ee];J[ee]=Pn(function(z,Z){return typeof V=="number"||typeof V=="boolean"?""+V:z.link(V)})}),Object.keys(k).forEach(function(ee){var V=k[ee];J[ee]=vi(V,function(z,Z){return z.invoke(Z,V)})}),J}function On(R,M,k,J,ee){var V=R.static,z=R.dynamic;p.optional(function(){var ut=[Wr,Is,Us,Xr,Yr,Wo,jr,Xo,Ns,Fs].concat(Ce);function Et(Nt){Object.keys(Nt).forEach(function(ln){p.command(ut.indexOf(ln)>=0,'unknown parameter "'+ln+'"',ee.commandStr)})}Et(V),Et(z)});var Z=Dt(R,M),C=ct(R),G=jt(R,C,ee),w=on(R,ee),K=Dn(R,ee),ie=Vt(R,ee,Z);function xe(ut){var Et=G[ut];Et&&(K[ut]=Et)}xe(nr),xe(qe(Vo));var Se=Object.keys(K).length>0,me={framebuffer:C,draw:w,shader:ie,state:K,dirty:Se,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(me.profile=Ft(R),me.uniforms=zn(k,ee),me.drawVAO=me.scopeVAO=Un(R),!me.drawVAO&&ie.program&&!Z&&U.angle_instanced_arrays){var Ue=!0,mt=ie.program.attributes.map(function(ut){var Et=M.static[ut];return Ue=Ue&&!!Et,Et});if(Ue&&mt.length>0){var Gt=Be.getVAO(Be.createVAO(mt));me.drawVAO=new ui(null,null,null,function(ut,Et){return ut.link(Gt)}),me.useVAO=!0}}return Z?me.useVAO=!0:me.attributes=Kt(M,ee),me.context=pn(J),me}function Fn(R,M,k){var J=R.shared,ee=J.context,V=R.scope();Object.keys(k).forEach(function(z){M.save(ee,"."+z);var Z=k[z],C=Z.append(R,M);Array.isArray(C)?V(ee,".",z,"=[",C.join(),"];"):V(ee,".",z,"=",C,";")}),M(V)}function Bn(R,M,k,J){var ee=R.shared,V=ee.gl,z=ee.framebuffer,Z;Qe&&(Z=M.def(ee.extensions,".webgl_draw_buffers"));var C=R.constants,G=C.drawBuffer,w=C.backBuffer,K;k?K=k.append(R,M):K=M.def(z,".next"),J||M("if(",K,"!==",z,".cur){"),M("if(",K,"){",V,".bindFramebuffer(",ed,",",K,".framebuffer);"),Qe&&M(Z,".drawBuffersWEBGL(",G,"[",K,".colorAttachments.length]);"),M("}else{",V,".bindFramebuffer(",ed,",null);"),Qe&&M(Z,".drawBuffersWEBGL(",w,");"),M("}",z,".cur=",K,";"),J||M("}")}function Wn(R,M,k){var J=R.shared,ee=J.gl,V=R.current,z=R.next,Z=J.current,C=J.next,G=R.cond(Z,".dirty");Ce.forEach(function(w){var K=qe(w);if(!(K in k.state)){var ie,xe;if(K in z){ie=z[K],xe=V[K];var Se=fn(Me[K].length,function(Ue){return G.def(ie,"[",Ue,"]")});G(R.cond(Se.map(function(Ue,mt){return Ue+"!=="+xe+"["+mt+"]"}).join("||")).then(ee,".",Re[K],"(",Se,");",Se.map(function(Ue,mt){return xe+"["+mt+"]="+Ue}).join(";"),";"))}else{ie=G.def(C,".",K);var me=R.cond(ie,"!==",Z,".",K);G(me),K in je?me(R.cond(ie).then(ee,".enable(",je[K],");").else(ee,".disable(",je[K],");"),Z,".",K,"=",ie,";"):me(ee,".",Re[K],"(",ie,");",Z,".",K,"=",ie,";")}}}),Object.keys(k.state).length===0&&G(Z,".dirty=false;"),M(G)}function qn(R,M,k,J){var ee=R.shared,V=R.current,z=ee.current,Z=ee.gl;id(Object.keys(k)).forEach(function(C){var G=k[C];if(!(J&&!J(G))){var w=G.append(R,M);if(je[C]){var K=je[C];xr(G)?w?M(Z,".enable(",K,");"):M(Z,".disable(",K,");"):M(R.cond(w).then(Z,".enable(",K,");").else(Z,".disable(",K,");")),M(z,".",C,"=",w,";")}else if(Tn(w)){var ie=V[C];M(Z,".",Re[C],"(",w,");",w.map(function(xe,Se){return ie+"["+Se+"]="+xe}).join(";"),";")}else M(Z,".",Re[C],"(",w,");",z,".",C,"=",w,";")}})}function An(R,M){Fe&&(R.instancing=M.def(R.shared.extensions,".angle_instanced_arrays"))}function Bt(R,M,k,J,ee){var V=R.shared,z=R.stats,Z=V.current,C=V.timer,G=k.profile;function w(){return typeof performance>"u"?"Date.now()":"performance.now()"}var K,ie;function xe(ut){K=M.def(),ut(K,"=",w(),";"),typeof ee=="string"?ut(z,".count+=",ee,";"):ut(z,".count++;"),De&&(J?(ie=M.def(),ut(ie,"=",C,".getNumPendingQueries();")):ut(C,".beginQuery(",z,");"))}function Se(ut){ut(z,".cpuTime+=",w(),"-",K,";"),De&&(J?ut(C,".pushScopeStats(",ie,",",C,".getNumPendingQueries(),",z,");"):ut(C,".endQuery();"))}function me(ut){var Et=M.def(Z,".profile");M(Z,".profile=",ut,";"),M.exit(Z,".profile=",Et,";")}var Ue;if(G){if(xr(G)){G.enable?(xe(M),Se(M.exit),me("true")):me("false");return}Ue=G.append(R,M),me(Ue)}else Ue=M.def(Z,".profile");var mt=R.block();xe(mt),M("if(",Ue,"){",mt,"}");var Gt=R.block();Se(Gt),M.exit("if(",Ue,"){",Gt,"}")}function $n(R,M,k,J,ee){var V=R.shared;function z(C){switch(C){case Yo:case $o:case Jo:return 2;case jo:case Zo:case Qo:return 3;case qo:case Ko:case el:return 4;default:return 1}}function Z(C,G,w){var K=V.gl,ie=M.def(C,".location"),xe=M.def(V.attributes,"[",ie,"]"),Se=w.state,me=w.buffer,Ue=[w.x,w.y,w.z,w.w],mt=["buffer","normalized","offset","stride"];function Gt(){M("if(!",xe,".buffer){",K,".enableVertexAttribArray(",ie,");}");var Et=w.type,Nt;if(w.size?Nt=M.def(w.size,"||",G):Nt=G,M("if(",xe,".type!==",Et,"||",xe,".size!==",Nt,"||",mt.map(function(En){return xe+"."+En+"!=="+w[En]}).join("||"),"){",K,".bindBuffer(",Na,",",me,".buffer);",K,".vertexAttribPointer(",[ie,Nt,Et,w.normalized,w.stride,w.offset],");",xe,".type=",Et,";",xe,".size=",Nt,";",mt.map(function(En){return xe+"."+En+"="+w[En]+";"}).join(""),"}"),Fe){var ln=w.divisor;M("if(",xe,".divisor!==",ln,"){",R.instancing,".vertexAttribDivisorANGLE(",[ie,ln],");",xe,".divisor=",ln,";}")}}function ut(){M("if(",xe,".buffer){",K,".disableVertexAttribArray(",ie,");",xe,".buffer=null;","}if(",La.map(function(Et,Nt){return xe+"."+Et+"!=="+Ue[Nt]}).join("||"),"){",K,".vertexAttrib4f(",ie,",",Ue,");",La.map(function(Et,Nt){return xe+"."+Et+"="+Ue[Nt]+";"}).join(""),"}")}Se===Pa?Gt():Se===Dc?ut():(M("if(",Se,"===",Pa,"){"),Gt(),M("}else{"),ut(),M("}"))}J.forEach(function(C){var G=C.name,w=k.attributes[G],K;if(w){if(!ee(w))return;K=w.append(R,M)}else{if(!ee(rd))return;var ie=R.scopeAttrib(G);p.optional(function(){R.assert(M,ie+".state","missing attribute "+G)}),K={},Object.keys(new Q).forEach(function(xe){K[xe]=M.def(ie,".",xe)})}Z(R.link(C),z(C.info.type),K)})}function un(R,M,k,J,ee){for(var V=R.shared,z=V.gl,Z,C=0;C<J.length;++C){var G=J[C],w=G.name,K=G.info.type,ie=k.uniforms[w],xe=R.link(G),Se=xe+".location",me;if(ie){if(!ee(ie))continue;if(xr(ie)){var Ue=ie.value;if(p.command(Ue!==null&&typeof Ue<"u",'missing uniform "'+w+'"',R.commandStr),K===zs||K===Hs){p.command(typeof Ue=="function"&&(K===zs&&(Ue._reglType==="texture2d"||Ue._reglType==="framebuffer")||K===Hs&&(Ue._reglType==="textureCube"||Ue._reglType==="framebufferCube")),"invalid texture for uniform "+w,R.commandStr);var mt=R.link(Ue._texture||Ue.color[0]._texture);M(z,".uniform1i(",Se,",",mt+".bind());"),M.exit(mt,".unbind();")}else if(K===Bs||K===Gs||K===ks){p.optional(function(){p.command(Tn(Ue),"invalid matrix for uniform "+w,R.commandStr),p.command(K===Bs&&Ue.length===4||K===Gs&&Ue.length===9||K===ks&&Ue.length===16,"invalid length for matrix uniform "+w,R.commandStr)});var Gt=R.global.def("new Float32Array(["+Array.prototype.slice.call(Ue)+"])"),ut=2;K===Gs?ut=3:K===ks&&(ut=4),M(z,".uniformMatrix",ut,"fv(",Se,",false,",Gt,");")}else{switch(K){case qc:p.commandType(Ue,"number","uniform "+w,R.commandStr),Z="1f";break;case Yo:p.command(Tn(Ue)&&Ue.length===2,"uniform "+w,R.commandStr),Z="2f";break;case jo:p.command(Tn(Ue)&&Ue.length===3,"uniform "+w,R.commandStr),Z="3f";break;case qo:p.command(Tn(Ue)&&Ue.length===4,"uniform "+w,R.commandStr),Z="4f";break;case Zc:p.commandType(Ue,"boolean","uniform "+w,R.commandStr),Z="1i";break;case $c:p.commandType(Ue,"number","uniform "+w,R.commandStr),Z="1i";break;case Jo:p.command(Tn(Ue)&&Ue.length===2,"uniform "+w,R.commandStr),Z="2i";break;case $o:p.command(Tn(Ue)&&Ue.length===2,"uniform "+w,R.commandStr),Z="2i";break;case Qo:p.command(Tn(Ue)&&Ue.length===3,"uniform "+w,R.commandStr),Z="3i";break;case Zo:p.command(Tn(Ue)&&Ue.length===3,"uniform "+w,R.commandStr),Z="3i";break;case el:p.command(Tn(Ue)&&Ue.length===4,"uniform "+w,R.commandStr),Z="4i";break;case Ko:p.command(Tn(Ue)&&Ue.length===4,"uniform "+w,R.commandStr),Z="4i";break}M(z,".uniform",Z,"(",Se,",",Tn(Ue)?Array.prototype.slice.call(Ue):Ue,");")}continue}else me=ie.append(R,M)}else{if(!ee(rd))continue;me=M.def(V.uniforms,"[",T.id(w),"]")}K===zs?(p(!Array.isArray(me),"must specify a scalar prop for textures"),M("if(",me,"&&",me,'._reglType==="framebuffer"){',me,"=",me,".color[0];","}")):K===Hs&&(p(!Array.isArray(me),"must specify a scalar prop for cube maps"),M("if(",me,"&&",me,'._reglType==="framebufferCube"){',me,"=",me,".color[0];","}")),p.optional(function(){function fi(Fi,fd){R.assert(M,Fi,'bad data or missing for uniform "'+w+'".  '+fd)}function Qc(Fi){p(!Array.isArray(me),"must not specify an array type for uniform"),fi("typeof "+me+'==="'+Fi+'"',"invalid type, expected "+Fi)}function Ci(Fi,fd){Array.isArray(me)?p(me.length===Fi,"must have length "+Fi):fi(V.isArrayLike+"("+me+")&&"+me+".length==="+Fi,"invalid vector, should have length "+Fi,R.commandStr)}function ud(Fi){p(!Array.isArray(me),"must not specify a value type"),fi("typeof "+me+'==="function"&&'+me+'._reglType==="texture'+(Fi===qh?"2d":"Cube")+'"',"invalid texture type",R.commandStr)}switch(K){case $c:Qc("number");break;case $o:Ci(2);break;case Zo:Ci(3);break;case Ko:Ci(4);break;case qc:Qc("number");break;case Yo:Ci(2);break;case jo:Ci(3);break;case qo:Ci(4);break;case Zc:Qc("boolean");break;case Jo:Ci(2);break;case Qo:Ci(3);break;case el:Ci(4);break;case Bs:Ci(4);break;case Gs:Ci(9);break;case ks:Ci(16);break;case zs:ud(qh);break;case Hs:ud(hg);break}});var Et=1;switch(K){case zs:case Hs:var Nt=M.def(me,"._texture");M(z,".uniform1i(",Se,",",Nt,".bind());"),M.exit(Nt,".unbind();");continue;case $c:case Zc:Z="1i";break;case $o:case Jo:Z="2i",Et=2;break;case Zo:case Qo:Z="3i",Et=3;break;case Ko:case el:Z="4i",Et=4;break;case qc:Z="1f";break;case Yo:Z="2f",Et=2;break;case jo:Z="3f",Et=3;break;case qo:Z="4f",Et=4;break;case Bs:Z="Matrix2fv";break;case Gs:Z="Matrix3fv";break;case ks:Z="Matrix4fv";break}if(M(z,".uniform",Z,"(",Se,","),Z.charAt(0)==="M"){var ln=Math.pow(K-Bs+2,2),En=R.global.def("new Float32Array(",ln,")");Array.isArray(me)?M("false,(",fn(ln,function(fi){return En+"["+fi+"]="+me[fi]}),",",En,")"):M("false,(Array.isArray(",me,")||",me," instanceof Float32Array)?",me,":(",fn(ln,function(fi){return En+"["+fi+"]="+me+"["+fi+"]"}),",",En,")")}else Et>1?M(fn(Et,function(fi){return Array.isArray(me)?me[fi]:me+"["+fi+"]"})):(p(!Array.isArray(me),"uniform value must not be an array"),M(me));M(");")}}function yt(R,M,k,J){var ee=R.shared,V=ee.gl,z=ee.draw,Z=J.draw;function C(){var Nt=Z.elements,ln,En=M;return Nt?((Nt.contextDep&&J.contextDynamic||Nt.propDep)&&(En=k),ln=Nt.append(R,En)):ln=En.def(z,".",Xr),ln&&En("if("+ln+")"+V+".bindBuffer("+cg+","+ln+".buffer.buffer);"),ln}function G(){var Nt=Z.count,ln,En=M;return Nt?((Nt.contextDep&&J.contextDynamic||Nt.propDep)&&(En=k),ln=Nt.append(R,En),p.optional(function(){Nt.MISSING&&R.assert(M,"false","missing vertex count"),Nt.DYNAMIC&&R.assert(En,ln+">=0","missing vertex count")})):(ln=En.def(z,".",jr),p.optional(function(){R.assert(En,ln+">=0","missing vertex count")})),ln}var w=C();function K(Nt){var ln=Z[Nt];return ln?ln.contextDep&&J.contextDynamic||ln.propDep?ln.append(R,k):ln.append(R,M):M.def(z,".",Nt)}var ie=K(Yr),xe=K(Wo),Se=G();if(typeof Se=="number"){if(Se===0)return}else k("if(",Se,"){"),k.exit("}");var me,Ue;Fe&&(me=K(Xo),Ue=R.instancing);var mt=w+".type",Gt=Z.elements&&xr(Z.elements);function ut(){function Nt(){k(Ue,".drawElementsInstancedANGLE(",[ie,Se,mt,xe+"<<(("+mt+"-"+wh+")>>1)",me],");")}function ln(){k(Ue,".drawArraysInstancedANGLE(",[ie,xe,Se,me],");")}w?Gt?Nt():(k("if(",w,"){"),Nt(),k("}else{"),ln(),k("}")):ln()}function Et(){function Nt(){k(V+".drawElements("+[ie,Se,mt,xe+"<<(("+mt+"-"+wh+")>>1)"]+");")}function ln(){k(V+".drawArrays("+[ie,xe,Se]+");")}w?Gt?Nt():(k("if(",w,"){"),Nt(),k("}else{"),ln(),k("}")):ln()}Fe&&(typeof me!="number"||me>=0)?typeof me=="string"?(k("if(",me,">0){"),ut(),k("}else if(",me,"<0){"),Et(),k("}")):ut():Et()}function Zt(R,M,k,J,ee){var V=wt(),z=V.proc("body",ee);return p.optional(function(){V.commandStr=M.commandStr,V.command=V.link(M.commandStr)}),Fe&&(V.instancing=z.def(V.shared.extensions,".angle_instanced_arrays")),R(V,z,k,J),V.compile().body}function Qt(R,M,k,J){An(R,M),k.useVAO?k.drawVAO?M(R.shared.vao,".setVAO(",k.drawVAO.append(R,M),");"):M(R.shared.vao,".setVAO(",R.shared.vao,".targetVAO);"):(M(R.shared.vao,".setVAO(null);"),$n(R,M,k,J.attributes,function(){return!0})),un(R,M,k,J.uniforms,function(){return!0}),yt(R,M,M,k)}function wn(R,M){var k=R.proc("draw",1);An(R,k),Fn(R,k,M.context),Bn(R,k,M.framebuffer),Wn(R,k,M),qn(R,k,M.state),Bt(R,k,M,!1,!0);var J=M.shader.progVar.append(R,k);if(k(R.shared.gl,".useProgram(",J,".program);"),M.shader.program)Qt(R,k,M,M.shader.program);else{k(R.shared.vao,".setVAO(null);");var ee=R.global.def("{}"),V=k.def(J,".id"),z=k.def(ee,"[",V,"]");k(R.cond(z).then(z,".call(this,a0);").else(z,"=",ee,"[",V,"]=",R.link(function(Z){return Zt(Qt,R,M,Z,1)}),"(",J,");",z,".call(this,a0);"))}Object.keys(M.state).length>0&&k(R.shared.current,".dirty=true;")}function ji(R,M,k,J){R.batchId="a1",An(R,M);function ee(){return!0}$n(R,M,k,J.attributes,ee),un(R,M,k,J.uniforms,ee),yt(R,M,M,k)}function $r(R,M,k,J){An(R,M);var ee=k.contextDep,V=M.def(),z="a0",Z="a1",C=M.def();R.shared.props=C,R.batchId=V;var G=R.scope(),w=R.scope();M(G.entry,"for(",V,"=0;",V,"<",Z,";++",V,"){",C,"=",z,"[",V,"];",w,"}",G.exit);function K(mt){return mt.contextDep&&ee||mt.propDep}function ie(mt){return!K(mt)}if(k.needsContext&&Fn(R,w,k.context),k.needsFramebuffer&&Bn(R,w,k.framebuffer),qn(R,w,k.state,K),k.profile&&K(k.profile)&&Bt(R,w,k,!1,!0),J)k.useVAO?k.drawVAO?K(k.drawVAO)?w(R.shared.vao,".setVAO(",k.drawVAO.append(R,w),");"):G(R.shared.vao,".setVAO(",k.drawVAO.append(R,G),");"):G(R.shared.vao,".setVAO(",R.shared.vao,".targetVAO);"):(G(R.shared.vao,".setVAO(null);"),$n(R,G,k,J.attributes,ie),$n(R,w,k,J.attributes,K)),un(R,G,k,J.uniforms,ie),un(R,w,k,J.uniforms,K),yt(R,G,w,k);else{var xe=R.global.def("{}"),Se=k.shader.progVar.append(R,w),me=w.def(Se,".id"),Ue=w.def(xe,"[",me,"]");w(R.shared.gl,".useProgram(",Se,".program);","if(!",Ue,"){",Ue,"=",xe,"[",me,"]=",R.link(function(mt){return Zt(ji,R,k,mt,2)}),"(",Se,");}",Ue,".call(this,a0[",V,"],",V,");")}}function P(R,M){var k=R.proc("batch",2);R.batchId="0",An(R,k);var J=!1,ee=!0;Object.keys(M.context).forEach(function(xe){J=J||M.context[xe].propDep}),J||(Fn(R,k,M.context),ee=!1);var V=M.framebuffer,z=!1;V?(V.propDep?J=z=!0:V.contextDep&&J&&(z=!0),z||Bn(R,k,V)):Bn(R,k,null),M.state.viewport&&M.state.viewport.propDep&&(J=!0);function Z(xe){return xe.contextDep&&J||xe.propDep}Wn(R,k,M),qn(R,k,M.state,function(xe){return!Z(xe)}),(!M.profile||!Z(M.profile))&&Bt(R,k,M,!1,"a1"),M.contextDep=J,M.needsContext=ee,M.needsFramebuffer=z;var C=M.shader.progVar;if(C.contextDep&&J||C.propDep)$r(R,k,M,null);else{var G=C.append(R,k);if(k(R.shared.gl,".useProgram(",G,".program);"),M.shader.program)$r(R,k,M,M.shader.program);else{k(R.shared.vao,".setVAO(null);");var w=R.global.def("{}"),K=k.def(G,".id"),ie=k.def(w,"[",K,"]");k(R.cond(ie).then(ie,".call(this,a0,a1);").else(ie,"=",w,"[",K,"]=",R.link(function(xe){return Zt($r,R,M,xe,2)}),"(",G,");",ie,".call(this,a0,a1);"))}}Object.keys(M.state).length>0&&k(R.shared.current,".dirty=true;")}function ce(R,M){var k=R.proc("scope",3);R.batchId="a2";var J=R.shared,ee=J.current;Fn(R,k,M.context),M.framebuffer&&M.framebuffer.append(R,k),id(Object.keys(M.state)).forEach(function(z){var Z=M.state[z],C=Z.append(R,k);Tn(C)?C.forEach(function(G,w){k.set(R.next[z],"["+w+"]",G)}):k.set(J.next,"."+z,C)}),Bt(R,k,M,!0,!0),[Xr,Wo,jr,Xo,Yr].forEach(function(z){var Z=M.draw[z];Z&&k.set(J.draw,"."+z,""+Z.append(R,k))}),Object.keys(M.uniforms).forEach(function(z){var Z=M.uniforms[z].append(R,k);Array.isArray(Z)&&(Z="["+Z.join()+"]"),k.set(J.uniforms,"["+T.id(z)+"]",Z)}),Object.keys(M.attributes).forEach(function(z){var Z=M.attributes[z].append(R,k),C=R.scopeAttrib(z);Object.keys(new Q).forEach(function(G){k.set(C,"."+G,Z[G])})}),M.scopeVAO&&k.set(J.vao,".targetVAO",M.scopeVAO.append(R,k));function V(z){var Z=M.shader[z];Z&&k.set(J.shader,"."+z,Z.append(R,k))}V(Is),V(Us),Object.keys(M.state).length>0&&(k(ee,".dirty=true;"),k.exit(ee,".dirty=true;")),k("a1(",R.shared.context,",a0,",R.batchId,");")}function re(R){if(!(typeof R!="object"||Tn(R))){for(var M=Object.keys(R),k=0;k<M.length;++k)if(bt.isDynamic(R[M[k]]))return!0;return!1}}function lt(R,M,k){var J=M.static[k];if(!J||!re(J))return;var ee=R.global,V=Object.keys(J),z=!1,Z=!1,C=!1,G=R.global.def("{}");V.forEach(function(K){var ie=J[K];if(bt.isDynamic(ie)){typeof ie=="function"&&(ie=J[K]=bt.unbox(ie));var xe=vi(ie,null);z=z||xe.thisDep,C=C||xe.propDep,Z=Z||xe.contextDep}else{switch(ee(G,".",K,"="),typeof ie){case"number":ee(ie);break;case"string":ee('"',ie,'"');break;case"object":Array.isArray(ie)&&ee("[",ie.join(),"]");break;default:ee(R.link(ie));break}ee(";")}});function w(K,ie){V.forEach(function(xe){var Se=J[xe];if(bt.isDynamic(Se)){var me=K.invoke(ie,Se);ie(G,".",xe,"=",me,";")}})}M.dynamic[k]=new bt.DynamicVariable(Ho,{thisDep:z,contextDep:Z,propDep:C,ref:G,append:w}),delete M.static[k]}function qt(R,M,k,J,ee){var V=wt();V.stats=V.link(ee),Object.keys(M.static).forEach(function(Z){lt(V,M,Z)}),lg.forEach(function(Z){lt(V,R,Z)});var z=On(R,M,k,J,V);return wn(V,z),ce(V,z),P(V,z),n(V.compile(),{destroy:function(){z.shader.program.destroy()}})}return{next:at,current:Me,procs:(function(){var R=wt(),M=R.proc("poll"),k=R.proc("refresh"),J=R.block();M(J),k(J);var ee=R.shared,V=ee.gl,z=ee.next,Z=ee.current;J(Z,".dirty=false;"),Bn(R,M),Bn(R,k,null,!0);var C;Fe&&(C=R.link(Fe)),U.oes_vertex_array_object&&k(R.link(U.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var G=0;G<oe.maxAttributes;++G){var w=k.def(ee.attributes,"[",G,"]"),K=R.cond(w,".buffer");K.then(V,".enableVertexAttribArray(",G,");",V,".bindBuffer(",Na,",",w,".buffer.buffer);",V,".vertexAttribPointer(",G,",",w,".size,",w,".type,",w,".normalized,",w,".stride,",w,".offset);").else(V,".disableVertexAttribArray(",G,");",V,".vertexAttrib4f(",G,",",w,".x,",w,".y,",w,".z,",w,".w);",w,".buffer=null;"),k(K),Fe&&k(C,".vertexAttribDivisorANGLE(",G,",",w,".divisor);")}return k(R.shared.vao,".currentVAO=null;",R.shared.vao,".setVAO(",R.shared.vao,".targetVAO);"),Object.keys(je).forEach(function(ie){var xe=je[ie],Se=J.def(z,".",ie),me=R.block();me("if(",Se,"){",V,".enable(",xe,")}else{",V,".disable(",xe,")}",Z,".",ie,"=",Se,";"),k(me),M("if(",Se,"!==",Z,".",ie,"){",me,"}")}),Object.keys(Re).forEach(function(ie){var xe=Re[ie],Se=Me[ie],me,Ue,mt=R.block();if(mt(V,".",xe,"("),Tn(Se)){var Gt=Se.length;me=R.global.def(z,".",ie),Ue=R.global.def(Z,".",ie),mt(fn(Gt,function(ut){return me+"["+ut+"]"}),");",fn(Gt,function(ut){return Ue+"["+ut+"]="+me+"["+ut+"];"}).join("")),M("if(",fn(Gt,function(ut){return me+"["+ut+"]!=="+Ue+"["+ut+"]"}).join("||"),"){",mt,"}")}else me=J.def(z,".",ie),Ue=J.def(Z,".",ie),mt(me,");",Z,".",ie,"=",me,";"),M("if(",me,"!==",Ue,"){",mt,"}");k(mt)}),R.compile()})(),compile:qt}}function Rg(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Cg=34918,Lg=34919,ad=35007,Pg=function(m,T){if(!T.ext_disjoint_timer_query)return null;var U=[];function oe(){return U.pop()||T.ext_disjoint_timer_query.createQueryEXT()}function be(Fe){U.push(Fe)}var ae=[];function he(Fe){var Qe=oe();T.ext_disjoint_timer_query.beginQueryEXT(ad,Qe),ae.push(Qe),De(ae.length-1,ae.length,Fe)}function Pe(){T.ext_disjoint_timer_query.endQueryEXT(ad)}function Oe(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Be=[];function Ne(){return Be.pop()||new Oe}function Ve(Fe){Be.push(Fe)}var $e=[];function De(Fe,Qe,Me){var at=Ne();at.startQueryIndex=Fe,at.endQueryIndex=Qe,at.sum=0,at.stats=Me,$e.push(at)}var Xe=[],Q=[];function de(){var Fe,Qe,Me=ae.length;if(Me!==0){Q.length=Math.max(Q.length,Me+1),Xe.length=Math.max(Xe.length,Me+1),Xe[0]=0,Q[0]=0;var at=0;for(Fe=0,Qe=0;Qe<ae.length;++Qe){var Ce=ae[Qe];T.ext_disjoint_timer_query.getQueryObjectEXT(Ce,Lg)?(at+=T.ext_disjoint_timer_query.getQueryObjectEXT(Ce,Cg),be(Ce)):ae[Fe++]=Ce,Xe[Qe+1]=at,Q[Qe+1]=Fe}for(ae.length=Fe,Fe=0,Qe=0;Qe<$e.length;++Qe){var je=$e[Qe],Re=je.startQueryIndex,qe=je.endQueryIndex;je.sum+=Xe[qe]-Xe[Re];var _t=Q[Re],Pt=Q[qe];Pt===_t?(je.stats.gpuTime+=je.sum/1e6,Ve(je)):(je.startQueryIndex=_t,je.endQueryIndex=Pt,$e[Fe++]=je)}$e.length=Fe}}return{beginQuery:he,endQuery:Pe,pushScopeStats:De,update:de,getNumPendingQueries:function(){return ae.length},clear:function(){U.push.apply(U,ae);for(var Fe=0;Fe<U.length;Fe++)T.ext_disjoint_timer_query.deleteQueryEXT(U[Fe]);ae.length=0,U.length=0},restore:function(){ae.length=0,U.length=0}}},Dg=16384,Og=256,Ng=1024,Ig=34962,sd="webglcontextlost",od="webglcontextrestored",ld=1,Ug=2,Fg=3;function cd(m,T){for(var U=0;U<m.length;++U)if(m[U]===T)return U;return-1}function Bg(m){var T=St(m);if(!T)return null;var U=T.gl,oe=U.getContextAttributes(),be=U.isContextLost(),ae=kt(U,T);if(!ae)return null;var he=At(),Pe=Rg(),Oe=ae.extensions,Be=Pg(U,Oe),Ne=Lt(),Ve=U.drawingBufferWidth,$e=U.drawingBufferHeight,De={tick:0,time:0,viewportWidth:Ve,viewportHeight:$e,framebufferWidth:Ve,framebufferHeight:$e,drawingBufferWidth:Ve,drawingBufferHeight:$e,pixelRatio:T.pixelRatio},Xe={},Q={elements:null,primitive:4,count:-1,offset:0,instances:-1},de=E_(U,Oe),Fe=G_(U,Pe,T,Me),Qe=Kv(U,Oe,de,Pe,Fe);function Me(yt){return Qe.destroyBuffer(yt)}var at=K_(U,Oe,Fe,Pe),Ce=tg(U,he,Pe,T),je=Rv(U,Oe,de,function(){_t.procs.poll()},De,Pe,T),Re=Cv(U,Oe,de,Pe,T),qe=$v(U,Oe,de,je,Re,Pe),_t=wg(U,he,Oe,de,Fe,at,je,qe,Xe,Qe,Ce,Q,De,Be,T),Pt=rg(U,qe,_t.procs.poll,De,oe,Oe,de),Ze=_t.next,ke=U.canvas,Ee=[],wt=[],Ft=[],ct=[T.onDestroy],jt=null;function Dt(){if(Ee.length===0){Be&&Be.update(),jt=null;return}jt=Tt.next(Dt),qn();for(var yt=Ee.length-1;yt>=0;--yt){var Zt=Ee[yt];Zt&&Zt(De,null,0)}U.flush(),Be&&Be.update()}function Vt(){!jt&&Ee.length>0&&(jt=Tt.next(Dt))}function on(){jt&&(Tt.cancel(Dt),jt=null)}function Dn(yt){yt.preventDefault(),be=!0,on(),wt.forEach(function(Zt){Zt()})}function zn(yt){U.getError(),be=!1,ae.restore(),Ce.restore(),Fe.restore(),je.restore(),Re.restore(),qe.restore(),Qe.restore(),Be&&Be.restore(),_t.procs.refresh(),Vt(),Ft.forEach(function(Zt){Zt()})}ke&&(ke.addEventListener(sd,Dn,!1),ke.addEventListener(od,zn,!1));function Kt(){Ee.length=0,on(),ke&&(ke.removeEventListener(sd,Dn),ke.removeEventListener(od,zn)),Ce.clear(),qe.clear(),Re.clear(),je.clear(),at.clear(),Fe.clear(),Qe.clear(),Be&&Be.clear(),ct.forEach(function(yt){yt()})}function Un(yt){p(!!yt,"invalid args to regl({...})"),p.type(yt,"object","invalid args to regl({...})");function Zt(ee){var V=n({},ee);delete V.uniforms,delete V.attributes,delete V.context,delete V.vao,"stencil"in V&&V.stencil.op&&(V.stencil.opBack=V.stencil.opFront=V.stencil.op,delete V.stencil.op);function z(Z){if(Z in V){var C=V[Z];delete V[Z],Object.keys(C).forEach(function(G){V[Z+"."+G]=C[G]})}}return z("blend"),z("depth"),z("cull"),z("stencil"),z("polygonOffset"),z("scissor"),z("sample"),"vao"in ee&&(V.vao=ee.vao),V}function Qt(ee,V){var z={},Z={};return Object.keys(ee).forEach(function(C){var G=ee[C];if(bt.isDynamic(G)){Z[C]=bt.unbox(G,C);return}else if(V&&Array.isArray(G)){for(var w=0;w<G.length;++w)if(bt.isDynamic(G[w])){Z[C]=bt.unbox(G,C);return}}z[C]=G}),{dynamic:Z,static:z}}var wn=Qt(yt.context||{},!0),ji=Qt(yt.uniforms||{},!0),$r=Qt(yt.attributes||{},!1),P=Qt(Zt(yt),!1),ce={gpuTime:0,cpuTime:0,count:0},re=_t.compile(P,$r,ji,wn,ce),lt=re.draw,qt=re.batch,R=re.scope,M=[];function k(ee){for(;M.length<ee;)M.push(null);return M}function J(ee,V){var z;if(be&&p.raise("context lost"),typeof ee=="function")return R.call(this,null,ee,0);if(typeof V=="function")if(typeof ee=="number")for(z=0;z<ee;++z)R.call(this,null,V,z);else if(Array.isArray(ee))for(z=0;z<ee.length;++z)R.call(this,ee[z],V,z);else return R.call(this,ee,V,0);else if(typeof ee=="number"){if(ee>0)return qt.call(this,k(ee|0),ee|0)}else if(Array.isArray(ee)){if(ee.length)return qt.call(this,ee,ee.length)}else return lt.call(this,ee)}return n(J,{stats:ce,destroy:function(){re.destroy()}})}var pn=qe.setFBO=Un({framebuffer:bt.define.call(null,ld,"framebuffer")});function On(yt,Zt){var Qt=0;_t.procs.poll();var wn=Zt.color;wn&&(U.clearColor(+wn[0]||0,+wn[1]||0,+wn[2]||0,+wn[3]||0),Qt|=Dg),"depth"in Zt&&(U.clearDepth(+Zt.depth),Qt|=Og),"stencil"in Zt&&(U.clearStencil(Zt.stencil|0),Qt|=Ng),p(!!Qt,"called regl.clear with no buffer specified"),U.clear(Qt)}function Fn(yt){if(p(typeof yt=="object"&&yt,"regl.clear() takes an object as input"),"framebuffer"in yt)if(yt.framebuffer&&yt.framebuffer_reglType==="framebufferCube")for(var Zt=0;Zt<6;++Zt)pn(n({framebuffer:yt.framebuffer.faces[Zt]},yt),On);else pn(yt,On);else On(null,yt)}function Bn(yt){p.type(yt,"function","regl.frame() callback must be a function"),Ee.push(yt);function Zt(){var Qt=cd(Ee,yt);p(Qt>=0,"cannot cancel a frame twice");function wn(){var ji=cd(Ee,wn);Ee[ji]=Ee[Ee.length-1],Ee.length-=1,Ee.length<=0&&on()}Ee[Qt]=wn}return Vt(),{cancel:Zt}}function Wn(){var yt=Ze.viewport,Zt=Ze.scissor_box;yt[0]=yt[1]=Zt[0]=Zt[1]=0,De.viewportWidth=De.framebufferWidth=De.drawingBufferWidth=yt[2]=Zt[2]=U.drawingBufferWidth,De.viewportHeight=De.framebufferHeight=De.drawingBufferHeight=yt[3]=Zt[3]=U.drawingBufferHeight}function qn(){De.tick+=1,De.time=Bt(),Wn(),_t.procs.poll()}function An(){je.refresh(),Wn(),_t.procs.refresh(),Be&&Be.update()}function Bt(){return(Lt()-Ne)/1e3}An();function $n(yt,Zt){p.type(Zt,"function","listener callback must be a function");var Qt;switch(yt){case"frame":return Bn(Zt);case"lost":Qt=wt;break;case"restore":Qt=Ft;break;case"destroy":Qt=ct;break;default:p.raise("invalid event, must be one of frame,lost,restore,destroy")}return Qt.push(Zt),{cancel:function(){for(var wn=0;wn<Qt.length;++wn)if(Qt[wn]===Zt){Qt[wn]=Qt[Qt.length-1],Qt.pop();return}}}}var un=n(Un,{clear:Fn,prop:bt.define.bind(null,ld),context:bt.define.bind(null,Ug),this:bt.define.bind(null,Fg),draw:Un({}),buffer:function(yt){return Fe.create(yt,Ig,!1,!1)},elements:function(yt){return at.create(yt,!1)},texture:je.create2D,cube:je.createCube,renderbuffer:Re.create,framebuffer:qe.create,framebufferCube:qe.createCube,vao:Qe.createVAO,attributes:oe,frame:Bn,on:$n,limits:de,hasExtension:function(yt){return de.extensions.indexOf(yt.toLowerCase())>=0},read:Pt,destroy:Kt,_gl:U,_refresh:An,poll:function(){qn(),Be&&Be.update()},now:Bt,stats:Pe});return T.onDone(null,un),un}return Bg}))})(Fl)),Fl.exports}var JT=KT();const QT=yf(JT),eA=PT();class tA{constructor({pb:e=null,width:t=1280,height:n=720,numSources:r=4,numOutputs:s=4,makeGlobal:l=!0,autoLoop:o=!0,detectAudio:c=!0,enableStreamCapture:u=!0,canvas:f,precision:h,extendTransforms:d={}}={}){if(u_.init(),this.pb=e,this.width=t,this.height=n,this.renderAll=!1,this.detectAudio=c,this._initCanvas(f),this.synth={time:0,bpm:30,width:this.width,height:this.height,fps:void 0,stats:{fps:0},speed:1,mouse:eA,render:this._render.bind(this),setResolution:this.setResolution.bind(this),update:y=>{},hush:this.hush.bind(this),tick:this.tick.bind(this)},l&&(window.loadScript=this.loadScript),this.timeSinceLastUpdate=0,this._time=0,h&&["lowp","mediump","highp"].includes(h.toLowerCase()))this.precision=h.toLowerCase();else{let y=(/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;this.precision=y?"highp":"mediump"}if(this.extendTransforms=d,this.saveFrame=!1,this.captureStream=null,this.generator=void 0,this._initRegl(),this._initOutputs(s),this._initSources(r),this._generateGlslTransforms(),this.synth.screencap=()=>{this.saveFrame=!0},u)try{this.captureStream=this.canvas.captureStream(25),this.synth.vidRecorder=new FT(this.captureStream)}catch(y){console.warn(`[hydra-synth warning]
new MediaSource() is not currently supported on iOS.`),console.error(y)}c&&this._initAudio(),o&&ET(this.tick.bind(this)).start(),this.sandbox=new kT(this.synth,l,["speed","update","bpm","fps"])}eval(e){this.sandbox.eval(e)}getScreenImage(e){this.imageCallback=e,this.saveFrame=!0}hush(){this.s.forEach(e=>{e.clear()}),this.o.forEach(e=>{this.synth.solid(0,0,0,0).out(e)}),this.synth.render(this.o[0]),this.sandbox.set("update",e=>{})}loadScript(e=""){return new Promise((n,r)=>{var s=document.createElement("script");s.onload=function(){console.log(`loaded script ${e}`),n()},s.onerror=l=>{console.log(`error loading script ${e}`,"log-error"),n()},s.src=e,document.head.appendChild(s)})}setResolution(e,t){this.canvas.width=e,this.canvas.height=t,this.width=e,this.height=t,this.sandbox.set("width",e),this.sandbox.set("height",t),console.log(this.width),this.o.forEach(n=>{n.resize(e,t)}),this.s.forEach(n=>{n.resize(e,t)}),this.regl._refresh(),console.log(this.canvas.width)}canvasToImage(e){const t=document.createElement("a");t.style.display="none";let n=new Date;t.download=`hydra-${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}-${n.getHours()}.${n.getMinutes()}.${n.getSeconds()}.png`,document.body.appendChild(t);var r=this;this.canvas.toBlob(s=>{r.imageCallback?(r.imageCallback(s),delete r.imageCallback):(t.href=URL.createObjectURL(s),console.log(t.href),t.click())},"image/png"),setTimeout(()=>{document.body.removeChild(t),window.URL.revokeObjectURL(t.href)},300)}_initAudio(){this.synth.a=new UT({numBins:4,parentEl:this.canvas.parentNode})}_initCanvas(e){e?(this.canvas=e,this.width=e.width,this.height=e.height):(this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.imageRendering="pixelated",document.body.appendChild(this.canvas))}_initRegl(){this.regl=QT({canvas:this.canvas,pixelRatio:1}),this.regl.clear({color:[0,0,0,1]}),this.renderAll=this.regl({frag:`
      precision ${this.precision} float;
      varying vec2 uv;
      uniform sampler2D tex0;
      uniform sampler2D tex1;
      uniform sampler2D tex2;
      uniform sampler2D tex3;

      void main () {
        vec2 st = vec2(1.0 - uv.x, uv.y);
        st*= vec2(2);
        vec2 q = floor(st).xy*(vec2(2.0, 1.0));
        int quad = int(q.x) + int(q.y);
        st.x += step(1., mod(st.y,2.0));
        st.y += step(1., mod(st.x,2.0));
        st = fract(st);
        if(quad==0){
          gl_FragColor = texture2D(tex0, st);
        } else if(quad==1){
          gl_FragColor = texture2D(tex1, st);
        } else if (quad==2){
          gl_FragColor = texture2D(tex2, st);
        } else {
          gl_FragColor = texture2D(tex3, st);
        }

      }
      `,vert:`
      precision ${this.precision} float;
      attribute vec2 position;
      varying vec2 uv;

      void main () {
        uv = position;
        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
      }`,attributes:{position:[[-2,0],[0,-2],[2,2]]},uniforms:{tex0:this.regl.prop("tex0"),tex1:this.regl.prop("tex1"),tex2:this.regl.prop("tex2"),tex3:this.regl.prop("tex3")},count:3,depth:{enable:!1}}),this.renderFbo=this.regl({frag:`
      precision ${this.precision} float;
      varying vec2 uv;
      uniform vec2 resolution;
      uniform sampler2D tex0;

      void main () {
        gl_FragColor = texture2D(tex0, vec2(1.0 - uv.x, uv.y));
      }
      `,vert:`
      precision ${this.precision} float;
      attribute vec2 position;
      varying vec2 uv;

      void main () {
        uv = position;
        gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
      }`,attributes:{position:[[-2,0],[0,-2],[2,2]]},uniforms:{tex0:this.regl.prop("tex0"),resolution:this.regl.prop("resolution")},count:3,depth:{enable:!1}})}_initOutputs(e){const t=this;this.o=Array(e).fill().map((n,r)=>{var s=new ma({regl:this.regl,width:this.width,height:this.height,precision:this.precision,label:`o${r}`});return s.id=r,t.synth["o"+r]=s,s}),this.output=this.o[0]}_initSources(e){this.s=[];for(var t=0;t<e;t++)this.createSource(t)}createSource(e){let t=new AT({regl:this.regl,pb:this.pb,width:this.width,height:this.height,label:`s${e}`});return this.synth["s"+this.s.length]=t,this.s.push(t),t}_generateGlslTransforms(){var e=this;this.generator=new jT({defaultOutput:this.o[0],defaultUniforms:this.o[0].uniforms,extendTransforms:this.extendTransforms,changeListener:({type:t,method:n,synth:r})=>{t==="add"&&(e.synth[n]=r.generators[n],e.sandbox&&e.sandbox.add(n))}}),this.synth.setFunction=this.generator.setFunction.bind(this.generator)}_render(e){e?(this.output=e,this.isRenderingAll=!1):this.isRenderingAll=!0}tick(e,t){if(this.sandbox.tick(),this.detectAudio===!0&&this.synth.a.tick(),this.sandbox.set("time",this.synth.time+=e*.001*this.synth.speed),this.timeSinceLastUpdate+=e,!this.synth.fps||this.timeSinceLastUpdate>=1e3/this.synth.fps){if(this.synth.stats.fps=Math.ceil(1e3/this.timeSinceLastUpdate),this.synth.update)try{this.synth.update(this.timeSinceLastUpdate)}catch(n){console.log(n)}for(let n=0;n<this.s.length;n++)this.s[n].tick(this.synth.time);for(let n=0;n<this.o.length;n++)this.o[n].tick({time:this.synth.time,mouse:this.synth.mouse,bpm:this.synth.bpm,resolution:[this.canvas.width,this.canvas.height]});this.isRenderingAll?this.renderAll({tex0:this.o[0].getCurrent(),tex1:this.o[1].getCurrent(),tex2:this.o[2].getCurrent(),tex3:this.o[3].getCurrent(),resolution:[this.canvas.width,this.canvas.height]}):this.renderFbo({tex0:this.output.getCurrent(),resolution:[this.canvas.width,this.canvas.height]}),this.timeSinceLastUpdate=0}this.saveFrame===!0&&(this.canvasToImage(),this.saveFrame=!1)}}class dm{constructor(e){e||(e=`
           osc(100)
           .out()
        `);let t=document.createElement("canvas");t.id="hydra",t.width=512,t.height=512,new tA({canvas:t,makeGlobal:!0,detectAudio:!1}).eval(e);let r=new rM(t);this.texture=r}}class nA{constructor(e){this.config=e;const{gui:t}=e;t.add(this,"reset").name("structure reset"),this.textures=[]}reset=()=>{console.log(this),this.group.children.forEach(e=>{console.log(e),e.geometry.dispose(),e.material.dispose()})};getBoxFrame(){const e=this.config,{dimensions:t,thickness:n}=e,{width:r,height:s,depth:l}=t;let o=new Ki(n,n,l);const c=new ls,u=[[1,1],[1,-1],[-1,-1],[-1,1]];for(let v=0;v<4;v++){const y=new ur({color:"red"}),S=new si(o,y),g=u[v][0]*.5,_=u[v][1]*.5,D=g*(r+n),E=_*(s+n);S.position.set(D,E),c.add(S)}o=new Ki(n,s,n);for(let v=0;v<4;v++){const y=new ur({color:"green"}),S=new si(o,y),g=u[v][0]*.5,_=u[v][1]*.5,D=g*(r+n),E=_*(l+n);S.position.set(D,0,E),c.add(S)}o=new Ki(r+2*n,n,n);for(let v=0;v<4;v++){const y=new ur({color:"blue"}),S=new si(o,y),g=u[v][0]*.5,_=u[v][1]*.5,D=g*(s+n),E=_*(l+n);S.position.set(0,D,E),c.add(S)}let f=new Ki(n,n,l);const h=new ur({color:"blue"}),d=new si(f,h);return d.position.set(r*.5+n*.5,0,0),c.add(d),this.group=c,c}getFloor(){const e=this.config,{dimensions:t,thickness:n}=e,{width:r,height:s,depth:l}=t,o=e.fov,c=Math.tan(o*.5),u=e.cameraDistance,f=new ls,h=-(l*.5+n),d=-(s*.5+n),v=-r*.5-n,y=r*.5+n,S=100,g=u+h,_=u-h,D=Math.hypot(y,d),B=D*_/g-D,H=Math.atan(s/r),te=B*Math.cos(H),X=B*Math.sin(H),L=y*_/g-y,W=y*S/g,Te={x:0,y:0,z:-S+h},We=e.aspect,O=u+h+S,b=2*c*O,F=b*We;Te.geometry=new Ql(F,b),Te.material=new ur({color:"#001044"}),Te.mesh=new si(Te.geometry,Te.material),Te.mesh.position.set(Te.x,Te.y,Te.z),f.add(Te.mesh),this.sky=Te;const j=(u+l*.5+S)*r*.5/(u+l*.5)-r*.5,ue=new $u().moveTo(v-L-W,S).lineTo(j+y,S).lineTo(y,0).lineTo(v,0).lineTo(v,-l-n).lineTo(v-L,-l-n).lineTo(v-L,0).lineTo(v-L-W,S),fe=new Wl(ue),ge=new ur,q=new si(fe,ge);q.rotateX(-Math.PI*.5),q.position.y=d+.01,q.position.z=h,f.add(q),this.floorBottomMaterial=ge,this.floorGroup=f;const se=new $u().moveTo(y,0).lineTo(y,d).lineTo(y+L,d).lineTo(y+L,X).lineTo(-te+v,X).lineTo(v,0).lineTo(y,0),Ie=new Wl(se),et=new ur,Ge=new si(Ie,et);return Ge.position.y=-d,Ge.position.z=h+.01,f.add(Ge),this.wallBottomMaterial=et,this.wallGroup=f,f}addHydra(){this.addSkyHydra(),this.addFloorHydra()}addSkyHydra(){const e=new dm;this.sky.mesh.material.color=new hn("white"),this.mapSky=this.sky.material.map=e.texture,this.sky.material.needsUpdate=!0,this.mapSky.name="sky",this.textures.push(this.mapSky)}addFloorHydra(){const e=`
        voronoi(10,2)
        .out()
        `,t=new dm(e);this.mapFloor=this.floorBottomMaterial.map=t.texture,this.mapFloor.name="floor",this.mapWall=this.wallBottomMaterial.map=t.texture.clone(),this.mapWall.name="wall",this.mapFloor.wrapS=ia,this.mapFloor.wrapT=ia,this.mapFloor.repeat.set(.5,.5),this.mapFloor.offset.set(.2,0),this.mapWall.offset.set(.2,0),this.mapWall.wrapS=ia,this.mapWall.wrapT=ia,this.mapFloor.magFilter=ai,this.mapFloor.magFilter=Si,this.wallBottomMaterial.needsUpdate=!0,this.floorBottomMaterial.needsUpdate=!0,this.textures.push(this.mapFloor,this.mapWall)}updateMaps(){this.mapSky&&(this.mapSky.needsUpdate=!0),this.mapFloor&&(this.mapFloor.needsUpdate=!0),this.mapWall&&(this.mapWall.needsUpdate=!0)}}const iA="https://alvarobyrne.github.io/escher-three/assets/anotherWorld-DXvSk6h-.jpg";class rA{constructor(e,t){this.texture=e,this.gui=t,this.API={offsetX:e.offset.x,offsetY:e.offset.y,repeatX:e.repeat.x,repeatY:e.repeat.y,rotation:e.rotation,centerX:e.center.x,centerY:e.center.y},this.initAPI={...this.API},this.initGui(e.name)}initGui(e){const t=this.gui.addFolder(e);t.open();const n=this.updateUvTransform.bind(this);t.add(this.API,"offsetX",-10,10,.01).name("offset.x").onChange(n),t.add(this.API,"offsetY",-10,10,.01).name("offset.y").onChange(n),t.add(this.API,"repeatX",0,2,.001).name("repeat.x").onChange(n),t.add(this.API,"repeatY",0,2,.001).name("repeat.y").onChange(n),t.add(this.API,"rotation",-2,2,.01).name("rotation").onChange(n),t.add(this.API,"centerX",0,1,.01).name("center.x").onChange(n),t.add(this.API,"centerY",0,1,.01).name("center.y").onChange(n),t.add({f:()=>{for(const r in this.initAPI)if(Object.hasOwnProperty.call(this.initAPI,r)){const s=this.initAPI[r];console.log(s),this.API[r]=s}t.__controllers.forEach(r=>{r.updateDisplay()}),n()}},"f").name("reset")}updateUvTransform(){const e=this.texture,t=this.API;e.matrixAutoUpdate===!0?(console.log("case true"),e.offset.set(t.offsetX,t.offsetY),e.repeat.set(t.repeatX,t.repeatY),e.center.set(t.centerX,t.centerY),e.rotation=t.rotation):(console.log("case false"),e.matrix.identity().translate(-t.centerX,-t.centerY).rotate(t.rotation).scale(t.repeatX,t.repeatY).translate(t.centerX,t.centerY).translate(t.offsetX,t.offsetY))}}console.log("perspectiveData : ",JSON.stringify(Es));const _a=new Xm;_a.setClearColor("black");document.body.appendChild(_a.domElement);const f_=innerWidth,h_=innerHeight;_a.setSize(f_,h_);const xf=45,nc=f_/h_,d_=.1,p_=1e3,Mi=new hT.GUI;Mi.add({toggleCamera:()=>{oa===gs?(oa=li,ys=fo,ds.enabled=!1,fo.enabled=!0):(ds.enabled=!0,fo.enabled=!1,oa=gs,ys=ds),mr()}},"toggleCamera");const Ti=new eM,li=new Ei(xf,nc,d_,p_);li.position.set(0,2,5);li.position.set(0,0,3);li.lookAt(Ti.position);Ti.add(li);const gs=new Ei(xf,nc,d_,p_);gs.position.set(-10,0,0);gs.lookAt(Ti.position);let oa;oa=gs;oa=li;const fo=new n_(li,_a.domElement),ds=new n_(gs,_a.domElement);let ys=ds;const aA=new HM(li);Ti.add(aA);const m_=Es.structure.dimensions.depth,ql=Es.structure.thickness,sA=li.position.z-(m_*.5+ql),__=Rm.degToRad(xf),bf=2*(Math.tan(__*.5)*sA-ql);Es.structure.dimensions.height=bf;const v_=nc*(bf+2*ql)-2*ql;Es.structure.dimensions.width=v_;const oA=li.position.z,lA={gui:Mi,fov:__,cameraDistance:oA,aspect:nc,...Es.structure},xs=new nA(lA),cA=xs.getBoxFrame();Ti.add(cA);const uA=xs.getFloor();Ti.add(uA);const fA=new UM({wireframe:!0}),hA=new Ki(v_,bf,m_),dA=new si(hA,fA);Ti.add(dA);const pA=new zM(20,20,"red","blue");Ti.add(pA);const mA=651/800,pm=2,_A=new Ym({map:new kM().load(iA)}),bs=new nM(_A);bs.scale.set(pm*mA,pm);bs.position.x=-2;Ti.add(bs);bs.visible=!1;let ku=0,ho=!1,Sf;const vA=()=>{ho=!0,Sf=setInterval(()=>{li.position.y=2+Math.sin(ku*.1),li.position.x=0+2*Math.sin(ku*.2),li.lookAt(Ti.position),ku+=.5,ys.update(),mr()},60)},g_=()=>{Sf=setInterval(()=>{ys.update(),mr()},60)};ho?g_():mr();function mr(i){_a.render(Ti,oa)}Mi.add({toggleAnimation:()=>{clearInterval(Sf),ho=!ho,ho?vA():(li.position.setX(0),li.position.setY(0),li.lookAt(Ti.position),g_())}},"toggleAnimation");Mi.add(ys,"reset");Mi.add(ds,"reset").onFinishChange(()=>{mr()}).name("orbCtrl2 reset");Mi.add(fo,"reset").onFinishChange(()=>{mr()}).name("orbCtrl1 reset");Mi.add({toggleSprite:()=>{bs.visible=!bs.visible,mr()}},"toggleSprite");Mi.add({render:()=>{mr()}},"render");Mi.hide();ys.addEventListener("change",()=>_a.render(Ti,oa));Mi.add(location,"reload");document.addEventListener("keydown",i=>{i.key==="q"&&(fo.reset(),ds.reset())});Mi.add(Mi,"hide").name("hide gui");const y_=function(){window.requestAnimationFrame(y_),xs.updateMaps(),mr()};xs.addHydra();y_();xs.textures&&xs.textures.forEach(i=>{new rA(i,Mi)});
