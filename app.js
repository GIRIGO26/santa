(()=>{var Sa="172";var Bu=0,Oc=1,zu=2;var Bc=1,ba=2,Wn=3,ri=0,Nt=1,Ot=2,Bn=0,qi=1,ci=2,zc=3,kc=4,Ea=5,Nn=100,ku=101,Hu=102,Gu=103,Vu=104,wa=200,Ys=201,Wu=202,Xu=203,Jo=204,$o=205,qu=206,Yu=207,Zu=208,Ju=209,$u=210,Ku=211,Qu=212,ju=213,ed=214,Ta=0,Aa=1,Ra=2,Yi=3,Ca=4,Pa=5,Ia=6,La=7,Hc=0,td=1,nd=2,hi=0,Da=1,Ua=2,Na=3,Zs=4,id=5,Fa=6,Oa=7;var Gc=300,ss=301,rs=302,Ba=303,za=304,Kr=306,Si=1e3,Mi=1001,Ko=1002,Sn=1003,sd=1004;var Qr=1005;var Fn=1006,ka=1007;var Ri=1008;var Xn=1009,Vc=1010,Wc=1011,Js=1012,Ha=1013,Ci=1014,qn=1015,jt=1016,Ga=1017,Va=1018,os=1020,Xc=35902,qc=1021,Yc=1022,Tn=1023,Zc=1024,Jc=1025,Xi=1026,Zi=1027,$c=1028,Wa=1029,Kc=1030,Xa=1031;var qa=1033,jr=33776,eo=33777,to=33778,no=33779,Ya=35840,Za=35841,Ja=35842,$a=35843,Ka=36196,Qa=37492,ja=37496,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,io=36492,pl=36494,ml=36495,Qc=36283,gl=36284,_l=36285,xl=36286;var Mr=2300,Qo=2301,Zo=2302,Ec=2400,wc=2401,Tc=2402;var rd=3200,od=3201;var jc=0,ad=1,ui="",Ft="srgb",Ji="srgb-linear",Sr="linear",ct="srgb";var Wi=7680;var Ac=519,ld=512,cd=513,hd=514,eh=515,ud=516,dd=517,fd=518,pd=519,Rc=35044;var th="300 es",Gn=2e3,br=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lu=1234567,_r=Math.PI/180,$i=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function xp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vp(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function yp(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function Mp(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function Sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ep(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wp(i,e){return i+Math.random()*(e-i)}function Tp(i){return i*(.5-Math.random())}function Ap(i){i!==void 0&&(lu=i);let e=lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rp(i){return i*_r}function Cp(i){return i*$i}function Pp(i){return(i&i-1)===0&&i!==0}function Ip(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ct={DEG2RAD:_r,RAD2DEG:$i,generateUUID:as,clamp:et,euclideanModulo:nh,mapLinear:xp,inverseLerp:vp,lerp:xr,damp:yp,pingpong:Mp,smoothstep:Sp,smootherstep:bp,randInt:Ep,randFloat:wp,randFloatSpread:Tp,seededRandom:Ap,degToRad:Rp,radToDeg:Cp,isPowerOfTwo:Pp,ceilPowerOfTwo:Ip,floorPowerOfTwo:Lp,setQuaternionFromProperEuler:Dp,normalize:rn,denormalize:Bs},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],x=s[0],d=s[3],f=s[6],S=s[1],y=s[4],_=s[7],P=s[2],T=s[5],L=s[8];return r[0]=o*x+a*S+l*P,r[3]=o*d+a*y+l*T,r[6]=o*f+a*_+l*L,r[1]=c*x+h*S+u*P,r[4]=c*d+h*y+u*T,r[7]=c*f+h*_+u*L,r[2]=p*x+m*S+g*P,r[5]=p*d+m*y+g*T,r[8]=p*f+m*_+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=t*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=p*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new Ze;function ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){let i=Er("canvas");return i.style.display="block",i}var cu={};function ls(i){i in cu||(cu[i]=!0,console.warn(i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _d(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var hu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let i={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?Sr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ji]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:hu,fromXYZ:uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var it=Up();function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ts,jo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=Er("canvas")),Ts.width=e.width,Ts.height=e.height;let n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,wr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fp=0,ln=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=Fn,o=Ri,a=Tn,l=Xn,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=as(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Gc;ln.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],x=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(m+1)/2,P=(f+1)/2,T=(h+p)/4,L=(u+x)/4,I=(g+d)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=L/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=L/r,s=I/r),this.set(n,s,r,t),this}let S=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-x)/S,this.z=(p-h)/S,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ea=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new wr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ut=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Tr=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==p||c!==m||h!==g){let d=1-a,f=l*p+c*m+h*g+u*x,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let P=Math.sqrt(y),T=Math.atan2(P,f*S);d=Math.sin(d*T)/P,a=Math.sin(a*T)/P}let _=a*S;if(l=l*d+p*_,c=c*d+m*_,h=h*d+g*_,u=u*d+x*_,d===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*p,e[t+1]=l*g+h*p+c*u-a*m,e[t+2]=c*g+h*m+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tc.copy(this).projectOnVector(e),this.sub(tc)}reflect(e){return this.sub(tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tc=new R,du=new Xt,bi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),To.subVectors(this.max,dr),As.subVectors(e.a,dr),Rs.subVectors(e.b,dr),Cs.subVectors(e.c,dr),pi.subVectors(Rs,As),mi.subVectors(Cs,Rs),ki.subVectors(As,Cs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!nc(t,As,Rs,Cs,To)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,As,Rs,Cs,To))?!1:(Ao.crossVectors(pi,mi),t=[Ao.x,Ao.y,Ao.z],nc(t,As,Rs,Cs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qn=[new R,new R,new R,new R,new R,new R,new R,new R],Ln=new R,wo=new bi,As=new R,Rs=new R,Cs=new R,pi=new R,mi=new R,ki=new R,dr=new R,To=new R,Ao=new R,Hi=new R;function nc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Op=new bi,fr=new R,ic=new R,Ki=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Op.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(ic)),this.expandByPoint(fr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new R,sc=new R,Ro=new R,gi=new R,rc=new R,Co=new R,oc=new R,Ei=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=gi.dot(this.direction),l=-gi.dot(Ro),c=gi.lengthSq(),h=Math.abs(1-o*o),u,p,m,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let x=1/h;u*=x,p*=x,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(Ro,p),m}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){rc.subVectors(t,e),Co.subVectors(n,e),oc.crossVectors(rc,Co);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(gi,Co));if(l<0)return null;let c=a*this.direction.dot(rc.cross(gi));if(c<0||l+c>o)return null;let h=-a*gi.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,p,m,g,x,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,p,m,g,x,d)}set(e,t,n,s,r,o,a,l,c,h,u,p,m,g,x,d){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=x,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,g=c*h,x=c*u;t[0]=p+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,g=c*h,x=c*u;t[0]=p-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+x,t[1]=l*u,t[5]=x*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-p*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=p-x*u}else if(e.order==="XZY"){let p=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bp,e,zp)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),Po.crossVectors(un,_i),s[0]=_i.x,s[4]=Po.x,s[8]=un.x,s[1]=_i.y,s[5]=Po.y,s[9]=un.y,s[2]=_i.z,s[6]=Po.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],x=n[6],d=n[10],f=n[14],S=n[3],y=n[7],_=n[11],P=n[15],T=s[0],L=s[4],I=s[8],b=s[12],v=s[1],C=s[5],N=s[9],B=s[13],U=s[2],W=s[6],G=s[10],Q=s[14],O=s[3],oe=s[7],me=s[11],_e=s[15];return r[0]=o*T+a*v+l*U+c*O,r[4]=o*L+a*C+l*W+c*oe,r[8]=o*I+a*N+l*G+c*me,r[12]=o*b+a*B+l*Q+c*_e,r[1]=h*T+u*v+p*U+m*O,r[5]=h*L+u*C+p*W+m*oe,r[9]=h*I+u*N+p*G+m*me,r[13]=h*b+u*B+p*Q+m*_e,r[2]=g*T+x*v+d*U+f*O,r[6]=g*L+x*C+d*W+f*oe,r[10]=g*I+x*N+d*G+f*me,r[14]=g*b+x*B+d*Q+f*_e,r[3]=S*T+y*v+_*U+P*O,r[7]=S*L+y*C+_*W+P*oe,r[11]=S*I+y*N+_*G+P*me,r[15]=S*b+y*B+_*Q+P*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],g=e[3],x=e[7],d=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*m-n*l*m)+x*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*p+s*o*u-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],x=e[13],d=e[14],f=e[15],S=u*d*c-x*p*c+x*l*m-a*d*m-u*l*f+a*p*f,y=g*p*c-h*d*c-g*l*m+o*d*m+h*l*f-o*p*f,_=h*x*c-g*u*c+g*a*m-o*x*m-h*a*f+o*u*f,P=g*u*l-h*x*l-g*a*p+o*x*p+h*a*d-o*u*d,T=t*S+n*y+s*_+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/T;return e[0]=S*L,e[1]=(x*p*r-u*d*r-x*s*m+n*d*m+u*s*f-n*p*f)*L,e[2]=(a*d*r-x*l*r+x*s*c-n*d*c-a*s*f+n*l*f)*L,e[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*m-n*l*m)*L,e[4]=y*L,e[5]=(h*d*r-g*p*r+g*s*m-t*d*m-h*s*f+t*p*f)*L,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*f-t*l*f)*L,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*L,e[8]=_*L,e[9]=(g*u*r-h*x*r-g*n*m+t*x*m+h*n*f-t*u*f)*L,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*L,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*L,e[12]=P*L,e[13]=(h*x*s-g*u*s+g*n*p-t*x*p-h*n*d+t*u*d)*L,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*d-t*a*d)*L,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*p+t*a*p)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,g=r*u,x=o*h,d=o*u,f=a*u,S=l*c,y=l*h,_=l*u,P=n.x,T=n.y,L=n.z;return s[0]=(1-(x+f))*P,s[1]=(m+_)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(m-_)*T,s[5]=(1-(p+f))*T,s[6]=(d+S)*T,s[7]=0,s[8]=(g+y)*L,s[9]=(d-S)*L,s[10]=(1-(p+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);let c=1/r,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),m,g;if(a===Gn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),p=(t+e)*c,m=(n+s)*h,g,x;if(a===Gn)g=(o+r)*u,x=-2*u;else if(a===br)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new R,Dn=new ht,Bp=new R(0,0,0),zp=new R(1,1,1),_i=new R,Po=new R,un=new R,fu=new ht,pu=new Xt,$t=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pu.setFromEuler(this),this.setFromQuaternion(pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kp=0,mu=new R,Is=new Xt,ei=new ht,Io=new R,pr=new R,Hp=new R,Gp=new Xt,gu=new R(1,0,0),_u=new R(0,1,0),xu=new R(0,0,1),vu={type:"added"},Vp={type:"removed"},Ls={type:"childadded",child:null},ac={type:"childremoved",child:null},Ht=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new $t,n=new Xt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(gu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return mu.copy(e).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Io.copy(e):Io.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(pr,Io,this.up):ei.lookAt(Io,pr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(ei),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vp),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Hp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new R(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new R,ti=new R,lc=new R,ni=new R,Ds=new R,Us=new R,yu=new R,cc=new R,hc=new R,uc=new R,dc=new at,fc=new at,pc=new at,yi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ti.subVectors(n,t),lc.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(ti),l=Un.dot(lc),c=ti.dot(ti),h=ti.dot(lc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(e,t),fc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ti.subVectors(e,t),Un.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ds.subVectors(s,n),Us.subVectors(r,n),cc.subVectors(e,n);let l=Ds.dot(cc),c=Us.dot(cc);if(l<=0&&c<=0)return t.copy(n);hc.subVectors(e,s);let h=Ds.dot(hc),u=Us.dot(hc);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ds,o);uc.subVectors(e,r);let m=Ds.dot(uc),g=Us.dot(uc);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Us,a);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return yu.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(yu,a);let f=1/(d+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Ds,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function mc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=nh(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mc(o,r,e+1/3),this.g=mc(o,r,e),this.b=mc(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return it.fromWorkingColorSpace(Jt.copy(this),e),Math.round(et(Jt.r*255,0,255))*65536+Math.round(et(Jt.g*255,0,255))*256+Math.round(et(Jt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ft){it.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Lo);let n=xr(xi.h,Lo.h,t),s=xr(xi.s,Lo.s,t),r=xr(xi.l,Lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ae;Ae.NAMES=vd;var Wp=0,Vn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=qi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=$o,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==$o&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Gt=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new R,Do=new le,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var Ar=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rr=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xp=0,Mn=new ht,gc=new Ht,Ns=new R,dn=new bi,mr=new bi,kt=new R,xt=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ih(e)?Rr:Ar)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return gc.lookAt(e),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,mr.min),dn.expandByPoint(kt),kt.addVectors(dn.max,mr.max),dn.expandByPoint(kt)):(dn.expandByPoint(mr.min),dn.expandByPoint(mr.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),kt.add(Ns)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;let c=new R,h=new R,u=new R,p=new le,m=new le,g=new le,x=new R,d=new R;function f(I,b,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),m.sub(p),g.sub(p);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(x),a[b].add(x),a[v].add(x),l[I].add(d),l[b].add(d),l[v].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,b=S.length;I<b;++I){let v=S[I],C=v.start,N=v.count;for(let B=C,U=C+N;B<U;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new R,_=new R,P=new R,T=new R;function L(I){P.fromBufferAttribute(s,I),T.copy(P);let b=a[I];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),_.crossVectors(T,b);let C=_.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,C)}for(let I=0,b=S.length;I<b;++I){let v=S[I],C=v.start,N=v.count;for(let B=C,U=C+N;B<U;B+=3)L(e.getX(B+0)),L(e.getX(B+1)),L(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),x=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new _t(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new ht,Gi=new Ei,Uo=new Ki,Su=new R,No=new R,Fo=new R,Oo=new R,_c=new R,Bo=new R,bu=new R,zo=new R,$e=class extends Ht{constructor(e=new xt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),o?Bo.addScaledVector(_c,h):Bo.addScaledVector(_c.sub(t),h))}t.add(Bo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Uo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Uo,Su)===null||Gi.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(Mu.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let d=p[g],f=o[d.materialIndex],S=Math.max(d.start,m.start),y=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let _=S,P=y;_<P;_+=3){let T=a.getX(_),L=a.getX(_+1),I=a.getX(_+2);s=ko(this,f,e,n,c,h,u,T,L,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){let S=a.getX(d),y=a.getX(d+1),_=a.getX(d+2);s=ko(this,o,e,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let d=p[g],f=o[d.materialIndex],S=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let _=S,P=y;_<P;_+=3){let T=_,L=_+1,I=_+2;s=ko(this,f,e,n,c,h,u,T,L,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){let S=d,y=d+1,_=d+2;s=ko(this,o,e,n,c,h,u,S,y,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function qp(i,e,t,n,s,r,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ri,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:i}}function ko(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,No),i.getVertexPosition(l,Fo),i.getVertexPosition(c,Oo);let h=qp(i,e,t,n,No,Fo,Oo,bu);if(h){let u=new R;yi.getBarycoord(bu,No,Fo,Oo,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,u,new le)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,u,new le)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new R,materialIndex:0};yi.getNormal(No,Fo,Oo,p.normal),h.face=p,h.barycoord=u}return h}var bn=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(x,d,f,S,y,_,P,T,L,I,b){let v=_/L,C=P/I,N=_/2,B=P/2,U=T/2,W=L+1,G=I+1,Q=0,O=0,oe=new R;for(let me=0;me<G;me++){let _e=me*C-B;for(let Le=0;Le<W;Le++){let Ce=Le*v-N;oe[x]=Ce*S,oe[d]=_e*y,oe[f]=U,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[d]=0,oe[f]=T>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(Le/L),u.push(1-me/I),Q+=1}}for(let me=0;me<I;me++)for(let _e=0;_e<L;_e++){let Le=p+_e+W*me,Ce=p+_e+W*(me+1),q=p+(_e+1)+W*(me+1),ue=p+(_e+1)+W*me;l.push(Le,Ce,ue),l.push(Ce,q,ue),O+=6}a.addGroup(m,O,b),m+=O,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Yp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var zn={clone:cs,merge:en},Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pt=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Cr=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new R,Eu=new le,wu=new le,Dt=class extends Cr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,wu),t.subVectors(wu,Eu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Os=1,na=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Fs,Os,e,t);r.layers=this.layers,this.add(r);let o=new Dt(Fs,Os,e,t);o.layers=this.layers,this.add(o);let a=new Dt(Fs,Os,e,t);a.layers=this.layers,this.add(a);let l=new Dt(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new pt({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Bn});r.uniforms.tEquirect.value=t;let o=new $e(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Fn),new na(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};var Gs=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var xc=new R,$p=new R,Kp=new Ze,on=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xc.subVectors(n,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kp.getNormalMatrix(e),s=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Ki,Ho=new R,Vs=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],x=s[10],d=s[11],f=s[12],S=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,p-c,d-m,_-f).normalize(),n[1].setComponents(l+r,p+c,d+m,_+f).normalize(),n[2].setComponents(l+o,p+h,d+g,_+S).normalize(),n[3].setComponents(l-o,p-h,d-g,_-S).normalize(),n[4].setComponents(l-a,p-u,d-x,_-y).normalize(),t===Gn)n[5].setComponents(l+a,p+u,d+x,_+y).normalize();else if(t===br)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ho.x=s.normal.x>0?e.max.x:e.min.x,Ho.y=s.normal.y>0?e.max.y:e.min.y,Ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var sa=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tu=new ht,Cc=new Ei,Go=new Ki,Vo=new R,ai=class extends Ht{constructor(e=new xt,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Tu.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(Tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,x=m;g<x;g++){let d=c.getX(g);Vo.fromBufferAttribute(u,d),Au(Vo,d,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,x=m;g<x;g++)Vo.fromBufferAttribute(u,g),Au(Vo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Au(i,e,t,n,s,r,o){let a=Cc.distanceSqToPoint(i);if(a<t){let l=new R;Cc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var vt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};var On=class extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ir=class extends ln{constructor(e,t,n,s,r,o,a,l,c,h=Xi){if(h!==Xi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=Ci),n===void 0&&h===Zi&&(n=os),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,s=[],r=[],o=[],a=new R,l=new ht;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(et(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ws=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ra=class extends Ws{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Wo=new R,vc=new rh,yc=new rh,Mc=new rh,Qi=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),c=Wo);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),vc.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,x,d),yc.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,x,d),Mc.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,x,d)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),yc.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Mc.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(vc.calc(l),yc.calc(l),Mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ru(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Qp(i,e){let t=1-i;return t*t*e}function jp(i,e){return 2*(1-i)*i*e}function em(i,e){return i*i*e}function vr(i,e,t,n){return Qp(i,e)+jp(i,t)+em(i,n)}function tm(i,e){let t=1-i;return t*t*t*e}function nm(i,e){let t=1-i;return 3*t*t*i*e}function im(i,e){return 3*(1-i)*i*i*e}function sm(i,e){return i*i*i*e}function yr(i,e,t,n,s){return tm(i,e)+nm(i,t)+im(i,n)+sm(i,s)}var Lr=class extends fn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,s.x,r.x,o.x,a.x),yr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends fn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,s.x,r.x,o.x,a.x),yr(e,s.y,r.y,o.y,a.y),yr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dr=class extends fn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends fn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(e,s.x,r.x,o.x),vr(e,s.y,r.y,o.y),vr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ru(a,l.x,c.x,h.x,u.x),Ru(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},la=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:Qi,CubicBezierCurve:Lr,CubicBezierCurve3:oa,EllipseCurve:Ws,LineCurve:Dr,LineCurve3:aa,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Nr,SplineCurve:Fr}),ca=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new la[s.type]().fromJSON(s))}return this}},ji=class extends ca{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Dr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ur(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Lr(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ws(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var wi=class i extends xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pt=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],g=0,x=[],d=n/2,f=0;S(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function S(){let _=new R,P=new R,T=0,L=(t-e)/n;for(let I=0;I<=r;I++){let b=[],v=I/r,C=v*(t-e)+e;for(let N=0;N<=s;N++){let B=N/s,U=B*l+a,W=Math.sin(U),G=Math.cos(U);P.x=C*W,P.y=-v*n+d,P.z=C*G,u.push(P.x,P.y,P.z),_.set(W,L,G).normalize(),p.push(_.x,_.y,_.z),m.push(B,1-v),b.push(g++)}x.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let v=x[b][I],C=x[b+1][I],N=x[b+1][I+1],B=x[b][I+1];(e>0||b!==0)&&(h.push(v,C,B),T+=3),(t>0||b!==r-1)&&(h.push(C,N,B),T+=3)}c.addGroup(f,T,0),f+=T}function y(_){let P=g,T=new le,L=new R,I=0,b=_===!0?e:t,v=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,d*v,0),p.push(0,v,0),m.push(.5,.5),g++;let C=g;for(let N=0;N<=s;N++){let U=N/s*l+a,W=Math.cos(U),G=Math.sin(U);L.x=b*G,L.y=d*v,L.z=b*W,u.push(L.x,L.y,L.z),p.push(0,v,0),T.x=W*.5+.5,T.y=G*.5*v+.5,m.push(T.x,T.y),g++}for(let N=0;N<s;N++){let B=P+N,U=C+N;_===!0?h.push(U,U+1,B):h.push(U+1,U,B),I+=3}c.addGroup(f,I,_===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends Pt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var En=class extends ji{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ji().fromJSON(s))}return this}},rm={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=yd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,p,m;if(n&&(r=hm(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],p=i[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Br(r,o,t,a,l,m,0),o}};function yd(i,e,t,n,s){let r,o;if(s===Mm(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Cu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Cu(r,i[r],i[r+1],o);return o&&vl(o,o.next)&&(kr(o),o=o.next),o}function es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vl(t,t.next)||Tt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mm(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?am(i,n,s,r):om(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lm(es(i),e,t),Br(i,e,t,n,s,r,2)):o===2&&cm(i,e,t,n,s,r):Br(es(i),e,t,n,s,r,1);break}}}function om(i){let e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=m&&zs(s,a,r,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function am(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>p?h:p:u>p?u:p,f=Pc(m,g,e,t,n),S=Pc(x,d,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=f&&_&&_.z<=S;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&zs(a,h,l,u,c,p,y.x,y.y)&&Tt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=m&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==o&&zs(a,h,l,u,c,p,_.x,_.y)&&Tt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&zs(a,h,l,u,c,p,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=S;){if(_.x>=m&&_.x<=x&&_.y>=g&&_.y<=d&&_!==s&&_!==o&&zs(a,h,l,u,c,p,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function lm(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!vl(s,r)&&Md(s,n,n.next,r)&&zr(s,r)&&zr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),kr(n),kr(n.next),n=i=r),n=n.next}while(n!==i);return es(n)}function cm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xm(o,a)){let l=Sd(o,a);o=es(o,o.next),l=es(l,l.next),Br(o,e,t,n,s,r,0),Br(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hm(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=yd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_m(c));for(s.sort(um),r=0;r<s.length;r++)t=dm(s[r],t);return t}function um(i,e){return i.x-e.x}function dm(i,e){let t=fm(i,e);if(!t)return e;let n=Sd(t,i);return es(n,n.next),es(t,t.next)}function fm(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&zs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),zr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&pm(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function pm(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function mm(i,e,t,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gm(s)}function gm(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Pc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _m(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vm(i,e)&&(zr(i,e)&&zr(e,i)&&ym(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||vl(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vl(i,e){return i.x===e.x&&i.y===e.y}function Md(i,e,t,n){let s=qo(Tt(i,e,t)),r=qo(Tt(i,e,n)),o=qo(Tt(t,n,i)),a=qo(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&Xo(i,t,e)||r===0&&Xo(i,n,e)||o===0&&Xo(t,i,n)||a===0&&Xo(t,e,n))}function Xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qo(i){return i>0?1:i<0?-1:0}function vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Md(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function ym(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sd(i,e){let t=new Ic(i.i,i.x,i.y),n=new Ic(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cu(i,e,t,n){let s=new Ic(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ic(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var si=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Pu(e),Iu(n,e);let o=e.length;t.forEach(Pu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Iu(n,t[l]);let a=rm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Pu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ts=class i extends xt{constructor(e=new En([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Sm,y,_=!1,P,T,L,I;f&&(y=f.getSpacedPoints(h),_=!0,p=!1,P=f.computeFrenetFrames(h,!1),T=new R,L=new R,I=new R),p||(d=0,m=0,g=0,x=0);let b=a.extractPoints(c),v=b.shape,C=b.holes;if(!si.isClockWise(v)){v=v.reverse();for(let J=0,re=C.length;J<re;J++){let A=C[J];si.isClockWise(A)&&(C[J]=A.reverse())}}let B=si.triangulateShape(v,C),U=v;for(let J=0,re=C.length;J<re;J++){let A=C[J];v=v.concat(A)}function W(J,re,A){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(re,A)}let G=v.length,Q=B.length;function O(J,re,A){let we,se,K,te=J.x-re.x,Me=J.y-re.y,fe=A.x-J.x,w=A.y-J.y,M=te*te+Me*Me,H=te*w-Me*fe;if(Math.abs(H)>Number.EPSILON){let j=Math.sqrt(M),ae=Math.sqrt(fe*fe+w*w),ne=re.x-Me/j,Oe=re.y+te/j,F=A.x-w/ae,Z=A.y+fe/ae,xe=((F-ne)*w-(Z-Oe)*fe)/(te*w-Me*fe);we=ne+te*xe-J.x,se=Oe+Me*xe-J.y;let $=we*we+se*se;if($<=2)return new le(we,se);K=Math.sqrt($/2)}else{let j=!1;te>Number.EPSILON?fe>Number.EPSILON&&(j=!0):te<-Number.EPSILON?fe<-Number.EPSILON&&(j=!0):Math.sign(Me)===Math.sign(w)&&(j=!0),j?(we=-Me,se=te,K=Math.sqrt(M)):(we=te,se=Me,K=Math.sqrt(M/2))}return new le(we/K,se/K)}let oe=[];for(let J=0,re=U.length,A=re-1,we=J+1;J<re;J++,A++,we++)A===re&&(A=0),we===re&&(we=0),oe[J]=O(U[J],U[A],U[we]);let me=[],_e,Le=oe.concat();for(let J=0,re=C.length;J<re;J++){let A=C[J];_e=[];for(let we=0,se=A.length,K=se-1,te=we+1;we<se;we++,K++,te++)K===se&&(K=0),te===se&&(te=0),_e[we]=O(A[we],A[K],A[te]);me.push(_e),Le=Le.concat(_e)}for(let J=0;J<d;J++){let re=J/d,A=m*Math.cos(re*Math.PI/2),we=g*Math.sin(re*Math.PI/2)+x;for(let se=0,K=U.length;se<K;se++){let te=W(U[se],oe[se],we);de(te.x,te.y,-A)}for(let se=0,K=C.length;se<K;se++){let te=C[se];_e=me[se];for(let Me=0,fe=te.length;Me<fe;Me++){let w=W(te[Me],_e[Me],we);de(w.x,w.y,-A)}}}let Ce=g+x;for(let J=0;J<G;J++){let re=p?W(v[J],Le[J],Ce):v[J];_?(L.copy(P.normals[0]).multiplyScalar(re.x),T.copy(P.binormals[0]).multiplyScalar(re.y),I.copy(y[0]).add(L).add(T),de(I.x,I.y,I.z)):de(re.x,re.y,0)}for(let J=1;J<=h;J++)for(let re=0;re<G;re++){let A=p?W(v[re],Le[re],Ce):v[re];_?(L.copy(P.normals[J]).multiplyScalar(A.x),T.copy(P.binormals[J]).multiplyScalar(A.y),I.copy(y[J]).add(L).add(T),de(I.x,I.y,I.z)):de(A.x,A.y,u/h*J)}for(let J=d-1;J>=0;J--){let re=J/d,A=m*Math.cos(re*Math.PI/2),we=g*Math.sin(re*Math.PI/2)+x;for(let se=0,K=U.length;se<K;se++){let te=W(U[se],oe[se],we);de(te.x,te.y,u+A)}for(let se=0,K=C.length;se<K;se++){let te=C[se];_e=me[se];for(let Me=0,fe=te.length;Me<fe;Me++){let w=W(te[Me],_e[Me],we);_?de(w.x,w.y+y[h-1].y,y[h-1].x+A):de(w.x,w.y,u+A)}}}q(),ue();function q(){let J=s.length/3;if(p){let re=0,A=G*re;for(let we=0;we<Q;we++){let se=B[we];Ue(se[2]+A,se[1]+A,se[0]+A)}re=h+d*2,A=G*re;for(let we=0;we<Q;we++){let se=B[we];Ue(se[0]+A,se[1]+A,se[2]+A)}}else{for(let re=0;re<Q;re++){let A=B[re];Ue(A[2],A[1],A[0])}for(let re=0;re<Q;re++){let A=B[re];Ue(A[0]+G*h,A[1]+G*h,A[2]+G*h)}}n.addGroup(J,s.length/3-J,0)}function ue(){let J=s.length/3,re=0;ye(U,re),re+=U.length;for(let A=0,we=C.length;A<we;A++){let se=C[A];ye(se,re),re+=se.length}n.addGroup(J,s.length/3-J,1)}function ye(J,re){let A=J.length;for(;--A>=0;){let we=A,se=A-1;se<0&&(se=J.length-1);for(let K=0,te=h+d*2;K<te;K++){let Me=G*K,fe=G*(K+1),w=re+we+Me,M=re+se+Me,H=re+se+fe,j=re+we+fe;Fe(w,M,H,j)}}}function de(J,re,A){l.push(J),l.push(re),l.push(A)}function Ue(J,re,A){Be(J),Be(re),Be(A);let we=s.length/3,se=S.generateTopUV(n,s,we-3,we-2,we-1);He(se[0]),He(se[1]),He(se[2])}function Fe(J,re,A,we){Be(J),Be(re),Be(we),Be(re),Be(A),Be(we);let se=s.length/3,K=S.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);He(K[0]),He(K[1]),He(K[3]),He(K[1]),He(K[2]),He(K[3])}function Be(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function He(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new la[s.type]().fromJSON(s)),new i(n,e.options)}},Sm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],x=e[r*3],d=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-u),new le(p,1-g),new le(x,1-f)]:[new le(a,1-l),new le(h,1-u),new le(m,1-g),new le(d,1-f)]}};function bm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Kt=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,m=[],g=[],x=[],d=[];for(let f=0;f<h;f++){let S=f*p-o;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-S,0),x.push(0,0,1),d.push(y/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let y=S+c*f,_=S+c*(f+1),P=S+1+c*(f+1),T=S+1+c*f;m.push(y,_,T),m.push(_,P,T)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xs=class i extends xt{constructor(e=new En([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(o,2));function c(h){let u=s.length/3,p=h.extractPoints(t),m=p.shape,g=p.holes;si.isClockWise(m)===!1&&(m=m.reverse());for(let d=0,f=g.length;d<f;d++){let S=g[d];si.isClockWise(S)===!0&&(g[d]=S.reverse())}let x=si.triangulateShape(m,g);for(let d=0,f=g.length;d<f;d++){let S=g[d];m=m.concat(S)}for(let d=0,f=m.length;d<f;d++){let S=m[d];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let d=0,f=x.length;d<f;d++){let S=x[d],y=S[0]+u,_=S[1]+u,P=S[2]+u;n.push(y,_,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Em(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Em(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ut=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,p=new R,m=[],g=[],x=[],d=[];for(let f=0;f<=n;f++){let S=[],y=f/n,_=0;f===0&&o===0?_=.5/t:f===n&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let T=P/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),d.push(T+_,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let y=h[f][S+1],_=h[f][S],P=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&m.push(y,_,T),(f!==n-1||l<Math.PI)&&m.push(_,P,T)}this.setIndex(m),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,p=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let x=g/s*r,d=m/n*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;o.push(x,d,S),o.push(d,f,S)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Hr=class i extends xt{constructor(e=new Nr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new le,h=new R,u=[],p=[],m=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(p,3)),this.setAttribute("uv",new tt(m,2));function x(){for(let y=0;y<t;y++)d(y);d(r===!1?t:0),S(),f()}function d(y){h=e.getPointAt(y/t,h);let _=o.normals[y],P=o.binormals[y];for(let T=0;T<=s;T++){let L=T/s*Math.PI*2,I=Math.sin(L),b=-Math.cos(L);l.x=b*_.x+I*P.x,l.y=b*_.y+I*P.y,l.z=b*_.z+I*P.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let P=(s+1)*(y-1)+(_-1),T=(s+1)*y+(_-1),L=(s+1)*y+_,I=(s+1)*(y-1)+_;g.push(P,T,I),g.push(T,L,I)}}function S(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new la[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Gr=class extends Vn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ae(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Vr=class extends pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rt=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},li=class extends rt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ha=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wc:r=e,a=2*t-n;break;case Tc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:o=e,l=2*n-t;break;case Tc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,d=x*g,f=-p*d+2*p*x-p*g,S=(1+p)*d+(-1.5-2*p)*x+(-.5+p)*g+1,y=(-1-m)*d+(1.5+m)*x+.5*g,_=m*d-m*x;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+S*o[c+P]+y*o[l+P]+_*o[u+P];return r}},fa=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},pa=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&wm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,p=u-n,m=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[p+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Qo;var Ti=class extends wn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Mr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends wn{};ma.prototype.ValueTypeName="color";var ga=class extends wn{};ga.prototype.ValueTypeName="number";var _a=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Xt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wr=class extends wn{InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends wn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Mr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends wn{};xa.prototype.ValueTypeName="vector";var va=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},bd=new va,ya=class{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Sc=new ht,Lu=new R,Du=new R,Xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lc=class extends Xr{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=$i*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},qr=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uu=new ht,gr=new R,bc=new R,Dc=class extends Xr{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}},Yr=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},is=class extends Cr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Xr{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ma=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Jr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Nu(){return performance.now()}var oh="\\[\\]\\.:\\/",Tm=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",Am="[^"+oh.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",ah),Cm=/(WCOD+)?/.source.replace("WCOD",Am),Pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Lm=new RegExp("^"+Rm+Cm+Pm+Im+"$"),Dm=["material","materials","bones","map"],Nc=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tm,"")}static parseTrackName(e){let t=Lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Nc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ry=new Float32Array(1);var Fu=new ht,$r=class{constructor(e,t,n=0,s=1/0){this.ray=new Ei(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return Fc(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fc(e[s],this,n,t);return n.sort(Ou),n}};function Ou(i,e){return i.distance-e.distance}function Fc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fc(r[o],e,t,!0)}}function lh(i,e,t,n){let s=Um(n);switch(t){case qc:return i*e;case Zc:return i*e;case Jc:return i*e*2;case $c:return i*e/s.components*s.byteLength;case Wa:return i*e/s.components*s.byteLength;case Kc:return i*e*2/s.components*s.byteLength;case Xa:return i*e*2/s.components*s.byteLength;case Yc:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case qa:return i*e*4/s.components*s.byteLength;case jr:case eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:case $a:return Math.max(i,16)*Math.max(e,8)/4;case Ya:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qc:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _l:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(i){switch(i){case Xn:case Vc:return{byteLength:1,components:1};case Js:case Wc:case jt:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case Ci:case Ha:case qn:return{byteLength:4,components:1};case Xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);function Yd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){let g=u[p],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,u[p]=x)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){let x=u[m];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d0="gl_FragColor = linearToOutputTexel( gl_FragColor );",f0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,R0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,N0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Wg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$g=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Kg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Qg=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,e_=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,t_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,n_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,s_=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,r_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,o_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,l_=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,c_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,h_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,p_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Ke={alphahash_fragment:Fm,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:zm,alphatest_fragment:km,alphatest_pars_fragment:Hm,aomap_fragment:Gm,aomap_pars_fragment:Vm,batching_pars_vertex:Wm,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:Jm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:a0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:d0,colorspace_pars_fragment:f0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:R0,envmap_vertex:x0,fog_vertex:v0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:b0,lightmap_pars_fragment:E0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:U0,lights_fragment_begin:N0,lights_fragment_maps:F0,lights_fragment_end:O0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:k0,logdepthbuf_vertex:H0,map_fragment:G0,map_pars_fragment:V0,map_particle_fragment:W0,map_particle_pars_fragment:X0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:$0,morphtarget_pars_vertex:K0,morphtarget_vertex:Q0,normal_fragment_begin:j0,normal_fragment_maps:eg,normal_pars_fragment:tg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:ag,iridescence_pars_fragment:lg,opaque_fragment:cg,packing:hg,premultiplied_alpha_fragment:ug,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:xg,shadowmap_vertex:vg,shadowmask_pars_fragment:yg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:bg,skinnormal_vertex:Eg,specularmap_fragment:wg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Rg,transmission_fragment:Cg,transmission_pars_fragment:Pg,uv_pars_fragment:Ig,uv_pars_vertex:Lg,uv_vertex:Dg,worldpos_vertex:Ug,background_vert:Ng,background_frag:Fg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:zg,cube_frag:kg,depth_vert:Hg,depth_frag:Gg,distanceRGBA_vert:Vg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:Jg,meshbasic_frag:$g,meshlambert_vert:Kg,meshlambert_frag:Qg,meshmatcap_vert:jg,meshmatcap_frag:e_,meshnormal_vert:t_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:l_,points_vert:c_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},be={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Yn={basic:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:en([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:en([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:en([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:en([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:en([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:en([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:en([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:en([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:en([be.common,be.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:en([be.lights,be.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Yn.physical={uniforms:en([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var yl={r:0,b:0,g:0},hs=new $t,m_=new ht;function g_(i,e,t,n,s,r,o){let a=new Ae(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,P=g(y);P===null?f(a,l):P&&P.isColor&&(f(P,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,_){let P=g(_);P&&(P.isCubeTexture||P.mapping===Kr)?(h===void 0&&(h=new $e(new bn(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:cs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(_.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(hs)),h.material.toneMapped=it.getTransfer(P.colorSpace)!==ct,(u!==P||p!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,p=P.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new $e(new Kt(2,2),new pt({name:"BackgroundMaterial",uniforms:cs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(P.colorSpace)!==ct,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||p!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,p=P.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(yl,sh(i)),n.buffers.color.setClear(yl.r,yl.g,yl.b,_,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:d,dispose:S}}function __(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(v,C,N,B,U){let W=!1,G=u(B,N,C);r!==G&&(r=G,c(r.object)),W=m(v,B,N,U),W&&g(v,B,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(v,C,N,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,N){let B=N.wireframe===!0,U=n[v.id];U===void 0&&(U={},n[v.id]=U);let W=U[C.id];W===void 0&&(W={},U[C.id]=W);let G=W[B];return G===void 0&&(G=p(l()),W[B]=G),G}function p(v){let C=[],N=[],B=[];for(let U=0;U<t;U++)C[U]=0,N[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function m(v,C,N,B){let U=r.attributes,W=C.attributes,G=0,Q=N.getAttributes();for(let O in Q)if(Q[O].location>=0){let me=U[O],_e=W[O];if(_e===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(v,C,N,B){let U={},W=C.attributes,G=0,Q=N.getAttributes();for(let O in Q)if(Q[O].location>=0){let me=W[O];me===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));let _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),U[O]=_e,G++}r.attributes=U,r.attributesNum=G,r.index=B}function x(){let v=r.newAttributes;for(let C=0,N=v.length;C<N;C++)v[C]=0}function d(v){f(v,0)}function f(v,C){let N=r.newAttributes,B=r.enabledAttributes,U=r.attributeDivisors;N[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),U[v]!==C&&(i.vertexAttribDivisor(v,C),U[v]=C)}function S(){let v=r.newAttributes,C=r.enabledAttributes;for(let N=0,B=C.length;N<B;N++)C[N]!==v[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function y(v,C,N,B,U,W,G){G===!0?i.vertexAttribIPointer(v,C,N,U,W):i.vertexAttribPointer(v,C,N,B,U,W)}function _(v,C,N,B){x();let U=B.attributes,W=N.getAttributes(),G=C.defaultAttributeValues;for(let Q in W){let O=W[Q];if(O.location>=0){let oe=U[Q];if(oe===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){let me=oe.normalized,_e=oe.itemSize,Le=e.get(oe);if(Le===void 0)continue;let Ce=Le.buffer,q=Le.type,ue=Le.bytesPerElement,ye=q===i.INT||q===i.UNSIGNED_INT||oe.gpuType===Ha;if(oe.isInterleavedBufferAttribute){let de=oe.data,Ue=de.stride,Fe=oe.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<O.locationSize;Be++)f(O.location+Be,de.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<O.locationSize;Be++)d(O.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Be=0;Be<O.locationSize;Be++)y(O.location+Be,_e/O.locationSize,q,me,Ue*ue,(Fe+_e/O.locationSize*Be)*ue,ye)}else{if(oe.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)f(O.location+de,oe.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<O.locationSize;de++)d(O.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let de=0;de<O.locationSize;de++)y(O.location+de,_e/O.locationSize,q,me,_e*ue,_e/O.locationSize*de*ue,ye)}}else if(G!==void 0){let me=G[Q];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(O.location,me);break;case 3:i.vertexAttrib3fv(O.location,me);break;case 4:i.vertexAttrib4fv(O.location,me);break;default:i.vertexAttrib1fv(O.location,me)}}}}S()}function P(){I();for(let v in n){let C=n[v];for(let N in C){let B=C[N];for(let U in B)h(B[U].object),delete B[U];delete C[N]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let N in C){let B=C[N];for(let U in B)h(B[U].object),delete B[U];delete C[N]}delete n[v.id]}function L(v){for(let C in n){let N=n[C];if(N[v.id]===void 0)continue;let B=N[v.id];for(let U in B)h(B[U].object),delete B[U];delete N[v.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:d,disableUnusedAttributes:S}}function x_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,p){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*p[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Tn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let I=L===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Xn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!I)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:T}}function y_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new on,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let S=r?0:n,y=S*4,_=f.clippingState||null;l.value=_,_=h(g,p,y,m);for(let P=0;P!==y;++P)_[P]=t[P];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let f=m+x*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<f)&&(d=new Float32Array(f));for(let y=0,_=m;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function M_(i){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=ss:a===za&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ba||a===za)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ia(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ks=4,Ed=[.125,.215,.35,.446,.526,.582],fs=20,ch=new is,wd=new Ae,hh=null,uh=0,dh=0,fh=!1,ds=(1+Math.sqrt(5))/2,$s=1/ds,Td=[new R(-ds,$s,0),new R(ds,$s,0),new R(-$s,0,ds),new R($s,0,ds),new R(0,ds,-$s),new R(0,ds,$s),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,uh,dh),this._renderer.xr.enabled=fh,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:jt,format:Tn,colorSpace:Ji,depthBuffer:!1},s=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=b_(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,ch)}_sceneToCubeUV(e,t,n,s){let a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(wd),h.toneMapping=hi,h.autoClear=!1;let m=new Gt({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new $e(new bn,m),x=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(wd),x=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;Ml(s,S*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ml(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ch)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Td[(s-r-1)%Td.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $e(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fs-1),x=r/g,d=isFinite(r)?1+Math.floor(h*x):fs;d>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${fs}`);let f=[],S=0;for(let L=0;L<fs;++L){let I=L/x,b=Math.exp(-I*I/2);f.push(b),L===0?S+=b:L<d&&(S+=2*b)}for(let L=0;L<f.length;L++)f[L]=f[L]/S;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-Ks?s-y+Ks:0),T=4*(this._cubeSize-_);Ml(t,P,T,3*_,2*_),l.setRenderTarget(t),l.render(u,ch)}};function S_(i){let e=[],t=[],n=[],s=i,r=i-Ks+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ks?l=Ed[o-i+Ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,d=2,f=1,S=new Float32Array(x*g*m),y=new Float32Array(d*g*m),_=new Float32Array(f*g*m);for(let T=0;T<m;T++){let L=T%3*2/3-1,I=T>2?0:-1,b=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];S.set(b,x*g*T),y.set(p,d*g*T);let v=[T,T,T,T,T,T];_.set(v,f*g*T)}let P=new xt;P.setAttribute("position",new _t(S,x)),P.setAttribute("uv",new _t(y,d)),P.setAttribute("faceIndex",new _t(_,f)),e.push(P),s>Ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(i,e,t){let n=new Ut(i,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ml(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function b_(i,e,t){let n=new Float32Array(fs),s=new R(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Rd(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Cd(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function E_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ba||l===za,h=l===ss||l===rs;if(c||h){let u=e.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new js(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new js(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T_(i,e,t,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(u){let p=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let S=m.array;x=m.version;for(let y=0,_=S.length;y<_;y+=3){let P=S[y+0],T=S[y+1],L=S[y+2];p.push(P,T,T,L,L,P)}}else if(g!==void 0){let S=g.array;x=g.version;for(let y=0,_=S.length/3-1;y<_;y+=3){let P=y+0,T=y+1,L=y+2;p.push(P,T,T,L,L,P)}}else return;let d=new(ih(p)?Rr:Ar)(p,1);d.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function A_(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*o,g),t.update(m,n,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];t.update(d,n,1)}function u(p,m,g,x){if(g===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],x[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,x,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S]*x[S];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C_(i,e,t){let n=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],y=0;m===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*P*4*u),L=new Tr(T,_,P,u);L.type=qn,L.needsUpdate=!0;let I=y*4;for(let v=0;v<u;v++){let C=d[v],N=f[v],B=S[v],U=_*P*4*v;for(let W=0;W<C.count;W++){let G=W*I;m===!0&&(s.fromBufferAttribute(C,W),T[U+G+0]=s.x,T[U+G+1]=s.y,T[U+G+2]=s.z,T[U+G+3]=0),g===!0&&(s.fromBufferAttribute(N,W),T[U+G+4]=s.x,T[U+G+5]=s.y,T[U+G+6]=s.z,T[U+G+7]=0),x===!0&&(s.fromBufferAttribute(B,W),T[U+G+8]=s.x,T[U+G+9]=s.y,T[U+G+10]=s.z,T[U+G+11]=B.itemSize===4?s.w:1)}}p={count:u,texture:L,size:new le(_,P)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function P_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Zd=new ln,Pd=new Ir(1,1),Jd=new Tr,$d=new ta,Kd=new Pr,Id=[],Ld=[],Dd=new Float32Array(16),Ud=new Float32Array(9),Nd=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function El(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Nd.set(n),i.uniformMatrix2fv(this.addr,!1,Nd),zt(t,n)}}function F_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),zt(t,n)}}function O_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Dd.set(n),i.uniformMatrix4fv(this.addr,!1,Dd),zt(t,n)}}function B_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function G_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pd.compareFunction=eh,r=Pd):r=Zd,t.setTexture2D(e||r,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$d,s)}function Z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kd,s)}function J_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jd,s)}function $_(i){switch(i){case 5126:return I_;case 35664:return L_;case 35665:return D_;case 35666:return U_;case 35674:return N_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function K_(i,e){i.uniform1fv(this.addr,e)}function Q_(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function j_(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function ex(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function tx(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nx(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ix(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sx(i,e){i.uniform1iv(this.addr,e)}function rx(i,e){i.uniform2iv(this.addr,e)}function ox(i,e){i.uniform3iv(this.addr,e)}function ax(i,e){i.uniform4iv(this.addr,e)}function lx(i,e){i.uniform1uiv(this.addr,e)}function cx(i,e){i.uniform2uiv(this.addr,e)}function hx(i,e){i.uniform3uiv(this.addr,e)}function ux(i,e){i.uniform4uiv(this.addr,e)}function dx(i,e,t){let n=this.cache,s=e.length,r=El(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Zd,r[o])}function fx(i,e,t){let n=this.cache,s=e.length,r=El(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$d,r[o])}function px(i,e,t){let n=this.cache,s=e.length,r=El(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kd,r[o])}function mx(i,e,t){let n=this.cache,s=e.length,r=El(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jd,r[o])}function gx(i){switch(i){case 5126:return K_;case 35664:return Q_;case 35665:return j_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Fd(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),o=ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(t,c===void 0?new mh(a,i,e):new gh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new _h(a),Fd(t,u)),t=u}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_x(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xx=37297,vx=0;function yx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Bd=new Ze;function Mx(i){it._getMatrix(Bd,it.workingColorSpace,i);let e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yx(i.getShaderSource(e),o)}else return s}function Sx(i,e){let t=Mx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bx(i,e){let t;switch(e){case Da:t="Linear";break;case Ua:t="Reinhard";break;case Na:t="Cineon";break;case Zs:t="ACESFilmic";break;case Fa:t="AgX";break;case Oa:t="Neutral";break;case id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sl=new R;function Ex(){it.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Tx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function so(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(Rx,Px)}var Cx=new Map;function Px(i,e){let t=Ke[e];if(t===void 0){let n=Cx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(Ix,Lx)}function Lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ba?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ux(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function Ox(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bx(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Dx(t),c=Ux(t),h=Nx(t),u=Fx(t),p=Ox(t),m=wx(t),g=Tx(r),x=s.createProgram(),d,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),f.length>0&&(f+=`
`)):(d=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),f=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==hi?bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),Ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=xh(o),o=kd(o,t),o=Hd(o,t),a=xh(a),a=kd(a,t),a=Hd(a,t),o=Gd(o),a=Gd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=S+d+o,_=S+f+a,P=Od(s,s.VERTEX_SHADER,y),T=Od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(P).trim(),U=s.getShaderInfoLog(T).trim(),W=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,T);else{let Q=zd(s,P,"vertex"),O=zd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Q+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||U==="")&&(G=!1);G&&(C.diagnostics={runnable:W,programLog:N,vertexShader:{log:B,prefix:d},fragmentShader:{log:U,prefix:f}})}s.deleteShader(P),s.deleteShader(T),I=new Qs(s,x),b=Ax(s,x)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,xx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var zx=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=zx++,this.code=e,this.usedTimes=0}};function kx(i,e,t,n,s,r,o){let a=new Hs,l=new vh,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function d(b,v,C,N,B){let U=N.fog,W=B.geometry,G=b.isMeshStandardMaterial?N.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),O=Q&&Q.mapping===Kr?Q.image.height:null,oe=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=me!==void 0?me.length:0,Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let Ce,q,ue,ye;if(oe){let gt=Yn[oe];Ce=gt.vertexShader,q=gt.fragmentShader}else Ce=b.vertexShader,q=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);let de=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,He=!!b.map,J=!!b.matcap,re=!!Q,A=!!b.aoMap,we=!!b.lightMap,se=!!b.bumpMap,K=!!b.normalMap,te=!!b.displacementMap,Me=!!b.emissiveMap,fe=!!b.metalnessMap,w=!!b.roughnessMap,M=b.anisotropy>0,H=b.clearcoat>0,j=b.dispersion>0,ae=b.iridescence>0,ne=b.sheen>0,Oe=b.transmission>0,F=M&&!!b.anisotropyMap,Z=H&&!!b.clearcoatMap,xe=H&&!!b.clearcoatNormalMap,$=H&&!!b.clearcoatRoughnessMap,Se=ae&&!!b.iridescenceMap,ee=ae&&!!b.iridescenceThicknessMap,he=ne&&!!b.sheenColorMap,ge=ne&&!!b.sheenRoughnessMap,ze=!!b.specularMap,Pe=!!b.specularColorMap,Xe=!!b.specularIntensityMap,D=Oe&&!!b.transmissionMap,ve=Oe&&!!b.thicknessMap,Y=!!b.gradientMap,ie=!!b.alphaMap,Ee=b.alphaTest>0,Re=!!b.alphaHash,Je=!!b.extensions,At=hi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=i.toneMapping);let Yt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:q,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ji,alphaToCoverage:!!b.alphaToCoverage,map:He,matcap:J,envMap:re,envMapMode:re&&Q.mapping,envMapCubeUVHeight:O,aoMap:A,lightMap:we,bumpMap:se,normalMap:K,displacementMap:p&&te,emissiveMap:Me,normalMapObjectSpace:K&&b.normalMapType===ad,normalMapTangentSpace:K&&b.normalMapType===jc,metalnessMap:fe,roughnessMap:w,anisotropy:M,anisotropyMap:F,clearcoat:H,clearcoatMap:Z,clearcoatNormalMap:xe,clearcoatRoughnessMap:$,dispersion:j,iridescence:ae,iridescenceMap:Se,iridescenceThicknessMap:ee,sheen:ne,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:ze,specularColorMap:Pe,specularIntensityMap:Xe,transmission:Oe,transmissionMap:D,thicknessMap:ve,gradientMap:Y,opaque:b.transparent===!1&&b.blending===qi&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ee,alphaHash:Re,combine:b.combine,mapUv:He&&x(b.map.channel),aoMapUv:A&&x(b.aoMap.channel),lightMapUv:we&&x(b.lightMap.channel),bumpMapUv:se&&x(b.bumpMap.channel),normalMapUv:K&&x(b.normalMap.channel),displacementMapUv:te&&x(b.displacementMap.channel),emissiveMapUv:Me&&x(b.emissiveMap.channel),metalnessMapUv:fe&&x(b.metalnessMap.channel),roughnessMapUv:w&&x(b.roughnessMap.channel),anisotropyMapUv:F&&x(b.anisotropyMap.channel),clearcoatMapUv:Z&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(b.sheenRoughnessMap.channel),specularMapUv:ze&&x(b.specularMap.channel),specularColorMapUv:Pe&&x(b.specularColorMap.channel),specularIntensityMapUv:Xe&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ve&&x(b.thicknessMap.channel),alphaMapUv:ie&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(K||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(He||ie),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:He&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:Me&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===Nt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&b.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function f(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)v.push(C),v.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(S(v,b),y(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let v=g[b.type],C;if(v){let N=Yn[v];C=zn.clone(N.uniforms)}else C=b.uniforms;return C}function P(b,v){let C;for(let N=0,B=h.length;N<B;N++){let U=h[N];if(U.cacheKey===v){C=U,++C.usedTimes;break}}return C===void 0&&(C=new Bx(i,v,b,r),h.push(C)),C}function T(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function L(b){l.remove(b)}function I(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:_,acquireProgram:P,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:I}}function Hx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,m,g,x,d){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:d},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=d),e++,f}function a(u,p,m,g,x,d){let f=o(u,p,m,g,x,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,p,m,g,x,d){let f=o(u,p,m,g,x,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||Gx),n.length>1&&n.sort(p||Wd),s.length>1&&s.sort(p||Wd)}function h(){for(let u=e,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Vx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Xd,i.set(n,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ae};break;case"SpotLight":t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qx=0;function Yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zx(i){let e=new Wx,t=Xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ht,o=new ht;function a(c){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,x=0,d=0,f=0,S=0,y=0,_=0,P=0,T=0,L=0;c.sort(Yx);for(let b=0,v=c.length;b<v;b++){let C=c[b],N=C.color,B=C.intensity,U=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*B,u+=N.g*B,p+=N.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);L++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,n.directionalShadow[m]=O,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=C.shadow.matrix,S++}n.directional[m]=G,m++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(N).multiplyScalar(B),G.distance=U,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;let Q=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Q.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[x]=Q.matrix,C.castShadow){let O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=W,_++}x++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(N).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=G,d++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let Q=C.shadow,O=t.get(C);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,O.shadowCameraNear=Q.camera.near,O.shadowCameraFar=Q.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==d||I.hemiLength!==f||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=L,I.directionalLength=m,I.pointLength=g,I.spotLength=x,I.rectAreaLength=d,I.hemiLength=f,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=L,n.version=qx++)}function l(c,h){let u=0,p=0,m=0,g=0,x=0,d=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let y=c[f];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),u++}else if(y.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(d),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(d),m++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(d),x++}}}return{setup:a,setupView:l,state:n}}function qd(i){let e=new Zx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Jx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new qd(i),e.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`;function Qx(i,e,t){let n=new Vs,s=new le,r=new le,o=new at,a=new ha({depthPacking:od}),l=new ua,c={},h=t.maxTextureSize,u={[ri]:Nt,[Nt]:ri,[Ot]:Ot},p=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $e(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let f=this.type;this.render=function(T,L,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Bn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=f!==Wn&&this.type===Wn,U=f===Wn&&this.type!==Wn;for(let W=0,G=T.length;W<G;W++){let Q=T[W],O=Q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let oe=O.getFrameExtents();if(s.multiply(oe),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,O.mapSize.y=r.y)),O.map===null||B===!0||U===!0){let _e=this.type!==Wn?{minFilter:Sn,magFilter:Sn}:{};O.map!==null&&O.map.dispose(),O.map=new Ut(s.x,s.y,_e),O.map.texture.name=Q.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let me=O.getViewportCount();for(let _e=0;_e<me;_e++){let Le=O.getViewport(_e);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(o),O.updateMatrices(Q,_e),n=O.getFrustum(),_(L,I,O.camera,Q,this.type)}O.isPointLightShadow!==!0&&this.type===Wn&&S(O,I),O.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(b,v,C)};function S(T,L){let I=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ut(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(L,null,I,p,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(L,null,I,m,x,null)}function y(T,L,I,b){let v=null,C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let N=v.uuid,B=L.uuid,U=c[N];U===void 0&&(U={},c[N]=U);let W=U[B];W===void 0&&(W=v.clone(),U[B]=W,L.addEventListener("dispose",P)),v=W}if(v.visible=L.visible,v.wireframe=L.wireframe,b===Wn?v.side=L.shadowSide!==null?L.shadowSide:L.side:v.side=L.shadowSide!==null?L.shadowSide:u[L.side],v.alphaMap=L.alphaMap,v.alphaTest=L.alphaTest,v.map=L.map,v.clipShadows=L.clipShadows,v.clippingPlanes=L.clippingPlanes,v.clipIntersection=L.clipIntersection,v.displacementMap=L.displacementMap,v.displacementScale=L.displacementScale,v.displacementBias=L.displacementBias,v.wireframeLinewidth=L.wireframeLinewidth,v.linewidth=L.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=i.properties.get(v);N.light=I}return v}function _(T,L,I,b,v){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let B=e.update(T),U=T.material;if(Array.isArray(U)){let W=B.groups;for(let G=0,Q=W.length;G<Q;G++){let O=W[G],oe=U[O.materialIndex];if(oe&&oe.visible){let me=y(T,oe,b,v);T.onBeforeShadow(i,T,L,I,B,me,O),i.renderBufferDirect(I,null,B,me,T,O),T.onAfterShadow(i,T,L,I,B,me,O)}}}else if(U.visible){let W=y(T,U,b,v);T.onBeforeShadow(i,T,L,I,B,W,null),i.renderBufferDirect(I,null,B,W,T,null),T.onAfterShadow(i,T,L,I,B,W,null)}}let N=T.children;for(let B=0,U=N.length;B<U;B++)_(N[B],L,I,b,v)}function P(T){T.target.removeEventListener("dispose",P);for(let I in c){let b=c[I],v=T.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var jx={[Ta]:Aa,[Ra]:Ia,[Ca]:La,[Yi]:Pa,[Aa]:Ta,[Ia]:Ra,[La]:Ca,[Pa]:Yi};function ev(i,e){function t(){let D=!1,ve=new at,Y=null,ie=new at(0,0,0,0);return{setMask:function(Ee){Y!==Ee&&!D&&(i.colorMask(Ee,Ee,Ee,Ee),Y=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,Re,Je,At,Yt){Yt===!0&&(Ee*=At,Re*=At,Je*=At),ve.set(Ee,Re,Je,At),ie.equals(ve)===!1&&(i.clearColor(Ee,Re,Je,At),ie.copy(ve))},reset:function(){D=!1,Y=null,ie.set(-1,0,0,0)}}}function n(){let D=!1,ve=!1,Y=null,ie=null,Ee=null;return{setReversed:function(Re){if(ve!==Re){let Je=e.get("EXT_clip_control");ve?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let At=Ee;Ee=null,this.setClear(At)}ve=Re},getReversed:function(){return ve},setTest:function(Re){Re?de(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(Re){Y!==Re&&!D&&(i.depthMask(Re),Y=Re)},setFunc:function(Re){if(ve&&(Re=jx[Re]),ie!==Re){switch(Re){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=Re}},setLocked:function(Re){D=Re},setClear:function(Re){Ee!==Re&&(ve&&(Re=1-Re),i.clearDepth(Re),Ee=Re)},reset:function(){D=!1,Y=null,ie=null,Ee=null,ve=!1}}}function s(){let D=!1,ve=null,Y=null,ie=null,Ee=null,Re=null,Je=null,At=null,Yt=null;return{setTest:function(gt){D||(gt?de(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(gt){ve!==gt&&!D&&(i.stencilMask(gt),ve=gt)},setFunc:function(gt,Pn,Kn){(Y!==gt||ie!==Pn||Ee!==Kn)&&(i.stencilFunc(gt,Pn,Kn),Y=gt,ie=Pn,Ee=Kn)},setOp:function(gt,Pn,Kn){(Re!==gt||Je!==Pn||At!==Kn)&&(i.stencilOp(gt,Pn,Kn),Re=gt,Je=Pn,At=Kn)},setLocked:function(gt){D=gt},setClear:function(gt){Yt!==gt&&(i.clearStencil(gt),Yt=gt)},reset:function(){D=!1,ve=null,Y=null,ie=null,Ee=null,Re=null,Je=null,At=null,Yt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,m=[],g=null,x=!1,d=null,f=null,S=null,y=null,_=null,P=null,T=null,L=new Ae(0,0,0),I=0,b=!1,v=null,C=null,N=null,B=null,U=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=Q>=1):O.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=Q>=2);let oe=null,me={},_e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ce=new at().fromArray(_e),q=new at().fromArray(Le);function ue(D,ve,Y,ie){let Ee=new Uint8Array(4),Re=i.createTexture();i.bindTexture(D,Re),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<Y;Je++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ie,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(ve+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Re}let ye={};ye[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Yi),se(!1),K(Oc),de(i.CULL_FACE),A(Bn);function de(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ue(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Fe(D,ve){return u[D]!==ve?(i.bindFramebuffer(D,ve),u[D]=ve,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Be(D,ve){let Y=m,ie=!1;if(D){Y=p.get(ve),Y===void 0&&(Y=[],p.set(ve,Y));let Ee=D.textures;if(Y.length!==Ee.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Je=Ee.length;Re<Je;Re++)Y[Re]=i.COLOR_ATTACHMENT0+Re;Y.length=Ee.length,ie=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ie=!0);ie&&i.drawBuffers(Y)}function He(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let J={[Nn]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Hu]:i.FUNC_REVERSE_SUBTRACT};J[Gu]=i.MIN,J[Vu]=i.MAX;let re={[wa]:i.ZERO,[Ys]:i.ONE,[Wu]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function A(D,ve,Y,ie,Ee,Re,Je,At,Yt,gt){if(D===Bn){x===!0&&(Ue(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),D!==Ea){if(D!==d||gt!==b){if((f!==Nn||_!==Nn)&&(i.blendEquation(i.FUNC_ADD),f=Nn,_=Nn),gt)switch(D){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,P=null,T=null,L.set(0,0,0),I=0,d=D,b=gt}return}Ee=Ee||ve,Re=Re||Y,Je=Je||ie,(ve!==f||Ee!==_)&&(i.blendEquationSeparate(J[ve],J[Ee]),f=ve,_=Ee),(Y!==S||ie!==y||Re!==P||Je!==T)&&(i.blendFuncSeparate(re[Y],re[ie],re[Re],re[Je]),S=Y,y=ie,P=Re,T=Je),(At.equals(L)===!1||Yt!==I)&&(i.blendColor(At.r,At.g,At.b,Yt),L.copy(At),I=Yt),d=D,b=!1}function we(D,ve){D.side===Ot?Ue(i.CULL_FACE):de(i.CULL_FACE);let Y=D.side===Nt;ve&&(Y=!Y),se(Y),D.blending===qi&&D.transparent===!1?A(Bn):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ie=D.stencilWrite;a.setTest(ie),ie&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function K(D){D!==Bu?(de(i.CULL_FACE),D!==C&&(D===Oc?i.cullFace(i.BACK):D===zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),C=D}function te(D){D!==N&&(G&&i.lineWidth(D),N=D)}function Me(D,ve,Y){D?(de(i.POLYGON_OFFSET_FILL),(B!==ve||U!==Y)&&(i.polygonOffset(ve,Y),B=ve,U=Y)):Ue(i.POLYGON_OFFSET_FILL)}function fe(D){D?de(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+W-1),oe!==D&&(i.activeTexture(D),oe=D)}function M(D,ve,Y){Y===void 0&&(oe===null?Y=i.TEXTURE0+W-1:Y=oe);let ie=me[Y];ie===void 0&&(ie={type:void 0,texture:void 0},me[Y]=ie),(ie.type!==D||ie.texture!==ve)&&(oe!==Y&&(i.activeTexture(Y),oe=Y),i.bindTexture(D,ve||ye[D]),ie.type=D,ie.texture=ve)}function H(){let D=me[oe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ce.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function ge(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function ze(D,ve){let Y=c.get(ve);Y===void 0&&(Y=new WeakMap,c.set(ve,Y));let ie=Y.get(D);ie===void 0&&(ie=i.getUniformBlockIndex(ve,D.name),Y.set(D,ie))}function Pe(D,ve){let ie=c.get(ve).get(D);l.get(ve)!==ie&&(i.uniformBlockBinding(ve,ie,D.__bindingPointIndex),l.set(ve,ie))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,me={},u={},p=new WeakMap,m=[],g=null,x=!1,d=null,f=null,S=null,y=null,_=null,P=null,T=null,L=new Ae(0,0,0),I=0,b=!1,v=null,C=null,N=null,B=null,U=null,Ce.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ue,bindFramebuffer:Fe,drawBuffers:Be,useProgram:He,setBlending:A,setMaterial:we,setFlipSided:se,setCullFace:K,setLineWidth:te,setPolygonOffset:Me,setScissorTest:fe,activeTexture:w,bindTexture:M,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:ae,texImage2D:Se,texImage3D:ee,updateUBOMapping:ze,uniformBlockBinding:Pe,texStorage2D:xe,texStorage3D:$,texSubImage2D:ne,texSubImage3D:Oe,compressedTexSubImage2D:F,compressedTexSubImage3D:Z,scissor:he,viewport:ge,reset:Xe}}function tv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Er("canvas")}function x(w,M,H){let j=1,ae=fe(w);if((ae.width>H||ae.height>H)&&(j=H/Math.max(ae.width,ae.height)),j<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let ne=Math.floor(j*ae.width),Oe=Math.floor(j*ae.height);u===void 0&&(u=g(ne,Oe));let F=M?g(ne,Oe):u;return F.width=ne,F.height=Oe,F.getContext("2d").drawImage(w,0,0,ne,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+Oe+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),w;return w}function d(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,H,j,ae=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ne=M;if(M===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),M===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),M===i.RGBA){let Oe=ae?Sr:it.getTransfer(j);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=Oe===ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(w,M){let H;return w?M===null||M===Ci||M===os?H=i.DEPTH24_STENCIL8:M===qn?H=i.DEPTH32F_STENCIL8:M===Js&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===os?H=i.DEPTH_COMPONENT24:M===qn?H=i.DEPTH_COMPONENT32F:M===Js&&(H=i.DEPTH_COMPONENT16),H}function P(w,M){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Sn&&w.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function T(w){let M=w.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&h.delete(M)}function L(w){let M=w.target;M.removeEventListener("dispose",L),v(M)}function I(w){let M=n.get(w);if(M.__webglInit===void 0)return;let H=w.source,j=p.get(H);if(j){let ae=j[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(w),Object.keys(j).length===0&&p.delete(H)}n.remove(w)}function b(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let H=w.source,j=p.get(H);delete j[M.__cacheKey],o.memory.textures--}function v(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ae=0;ae<M.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(M.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=w.textures;for(let j=0,ae=H.length;j<ae;j++){let ne=n.get(H[j]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(w)}let C=0;function N(){C=0}function B(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function U(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function W(w,M){let H=n.get(w);if(w.isVideoTexture&&te(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,w,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function G(w,M){let H=n.get(w);if(w.version>0&&H.__version!==w.version){q(H,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function Q(w,M){let H=n.get(w);if(w.version>0&&H.__version!==w.version){q(H,w,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function O(w,M){let H=n.get(w);if(w.version>0&&H.__version!==w.version){ue(H,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let oe={[Si]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},me={[Sn]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},_e={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[eh]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Le(w,M){if(M.type===qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===ka||M.magFilter===Qr||M.magFilter===Ri||M.minFilter===Fn||M.minFilter===ka||M.minFilter===Qr||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==Qr&&M.minFilter!==Ri||M.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",T));let j=M.source,ae=p.get(j);ae===void 0&&(ae={},p.set(j,ae));let ne=U(M);if(ne!==w.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ae[ne].usedTimes++;let Oe=ae[w.__cacheKey];Oe!==void 0&&(ae[w.__cacheKey].usedTimes--,Oe.usedTimes===0&&b(M)),w.__cacheKey=ne,w.__webglTexture=ae[ne].texture}return H}function q(w,M,H){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let ae=Ce(w,M),ne=M.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+H);let Oe=n.get(ne);if(ne.version!==Oe.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);let F=it.getPrimaries(it.workingColorSpace),Z=M.colorSpace===ui?null:it.getPrimaries(M.colorSpace),xe=M.colorSpace===ui||F===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let $=x(M.image,!1,s.maxTextureSize);$=Me(M,$);let Se=r.convert(M.format,M.colorSpace),ee=r.convert(M.type),he=y(M.internalFormat,Se,ee,M.colorSpace,M.isVideoTexture);Le(j,M);let ge,ze=M.mipmaps,Pe=M.isVideoTexture!==!0,Xe=Oe.__version===void 0||ae===!0,D=ne.dataReady,ve=P(M,$);if(M.isDepthTexture)he=_(M.format===Zi,M.type),Xe&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,Se,ee,null));else if(M.isDataTexture)if(ze.length>0){Pe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ve,he,ze[0].width,ze[0].height);for(let Y=0,ie=ze.length;Y<ie;Y++)ge=ze[Y],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ge.width,ge.height,Se,ee,ge.data):t.texImage2D(i.TEXTURE_2D,Y,he,ge.width,ge.height,0,Se,ee,ge.data);M.generateMipmaps=!1}else Pe?(Xe&&t.texStorage2D(i.TEXTURE_2D,ve,he,$.width,$.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,Se,ee,$.data)):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,Se,ee,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Pe&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,he,ze[0].width,ze[0].height,$.depth);for(let Y=0,ie=ze.length;Y<ie;Y++)if(ge=ze[Y],M.format!==Tn)if(Se!==null)if(Pe){if(D)if(M.layerUpdates.size>0){let Ee=lh(ge.width,ge.height,M.format,M.type);for(let Re of M.layerUpdates){let Je=ge.data.subarray(Re*Ee/ge.data.BYTES_PER_ELEMENT,(Re+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Re,ge.width,ge.height,1,Se,Je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,$.depth,Se,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,he,ge.width,ge.height,$.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ge.width,ge.height,$.depth,Se,ee,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,he,ge.width,ge.height,$.depth,0,Se,ee,ge.data)}else{Pe&&Xe&&t.texStorage2D(i.TEXTURE_2D,ve,he,ze[0].width,ze[0].height);for(let Y=0,ie=ze.length;Y<ie;Y++)ge=ze[Y],M.format!==Tn?Se!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ge.width,ge.height,Se,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,he,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ge.width,ge.height,Se,ee,ge.data):t.texImage2D(i.TEXTURE_2D,Y,he,ge.width,ge.height,0,Se,ee,ge.data)}else if(M.isDataArrayTexture)if(Pe){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,he,$.width,$.height,$.depth),D)if(M.layerUpdates.size>0){let Y=lh($.width,$.height,M.format,M.type);for(let ie of M.layerUpdates){let Ee=$.data.subarray(ie*Y/$.data.BYTES_PER_ELEMENT,(ie+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,$.width,$.height,1,Se,ee,Ee)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Se,ee,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,Se,ee,$.data);else if(M.isData3DTexture)Pe?(Xe&&t.texStorage3D(i.TEXTURE_3D,ve,he,$.width,$.height,$.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Se,ee,$.data)):t.texImage3D(i.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,Se,ee,$.data);else if(M.isFramebufferTexture){if(Xe)if(Pe)t.texStorage2D(i.TEXTURE_2D,ve,he,$.width,$.height);else{let Y=$.width,ie=$.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,he,Y,ie,0,Se,ee,null),Y>>=1,ie>>=1}}else if(ze.length>0){if(Pe&&Xe){let Y=fe(ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,he,Y.width,Y.height)}for(let Y=0,ie=ze.length;Y<ie;Y++)ge=ze[Y],Pe?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Se,ee,ge):t.texImage2D(i.TEXTURE_2D,Y,he,Se,ee,ge);M.generateMipmaps=!1}else if(Pe){if(Xe){let Y=fe($);t.texStorage2D(i.TEXTURE_2D,ve,he,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,ee,$)}else t.texImage2D(i.TEXTURE_2D,0,he,Se,ee,$);d(M)&&f(j),Oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ue(w,M,H){if(M.image.length!==6)return;let j=Ce(w,M),ae=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let ne=n.get(ae);if(ae.version!==ne.__version||j===!0){t.activeTexture(i.TEXTURE0+H);let Oe=it.getPrimaries(it.workingColorSpace),F=M.colorSpace===ui?null:it.getPrimaries(M.colorSpace),Z=M.colorSpace===ui||Oe===F?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let ie=0;ie<6;ie++)!xe&&!$?Se[ie]=x(M.image[ie],!0,s.maxCubemapSize):Se[ie]=$?M.image[ie].image:M.image[ie],Se[ie]=Me(M,Se[ie]);let ee=Se[0],he=r.convert(M.format,M.colorSpace),ge=r.convert(M.type),ze=y(M.internalFormat,he,ge,M.colorSpace),Pe=M.isVideoTexture!==!0,Xe=ne.__version===void 0||j===!0,D=ae.dataReady,ve=P(M,ee);Le(i.TEXTURE_CUBE_MAP,M);let Y;if(xe){Pe&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ze,ee.width,ee.height);for(let ie=0;ie<6;ie++){Y=Se[ie].mipmaps;for(let Ee=0;Ee<Y.length;Ee++){let Re=Y[Ee];M.format!==Tn?he!==null?Pe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Re.width,Re.height,he,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,Re.width,Re.height,he,ge,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,ze,Re.width,Re.height,0,he,ge,Re.data)}}}else{if(Y=M.mipmaps,Pe&&Xe){Y.length>0&&ve++;let ie=fe(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if($){Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Se[ie].width,Se[ie].height,he,ge,Se[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Se[ie].width,Se[ie].height,0,he,ge,Se[ie].data);for(let Ee=0;Ee<Y.length;Ee++){let Je=Y[Ee].image[ie].image;Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Je.width,Je.height,he,ge,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ze,Je.width,Je.height,0,he,ge,Je.data)}}else{Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he,ge,Se[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,he,ge,Se[ie]);for(let Ee=0;Ee<Y.length;Ee++){let Re=Y[Ee];Pe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,he,ge,Re.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,ze,he,ge,Re.image[ie])}}}d(M)&&f(i.TEXTURE_CUBE_MAP),ne.__version=ae.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ye(w,M,H,j,ae,ne){let Oe=r.convert(H.format,H.colorSpace),F=r.convert(H.type),Z=y(H.internalFormat,Oe,F,H.colorSpace),xe=n.get(M),$=n.get(H);if($.__renderTarget=M,!xe.__hasExternalTextures){let Se=Math.max(1,M.width>>ne),ee=Math.max(1,M.height>>ne);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,Z,Se,ee,M.depth,0,Oe,F,null):t.texImage2D(ae,ne,Z,Se,ee,0,Oe,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ae,$.__webglTexture,0,se(M)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ae,$.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(w,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let j=M.depthTexture,ae=j&&j.isDepthTexture?j.type:null,ne=_(M.stencilBuffer,ae),Oe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=se(M);K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,ne,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,w)}else{let j=M.textures;for(let ae=0;ae<j.length;ae++){let ne=j[ae],Oe=r.convert(ne.format,ne.colorSpace),F=r.convert(ne.type),Z=y(ne.internalFormat,Oe,F,ne.colorSpace),xe=se(M);H&&K(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Z,M.width,M.height):K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let ae=j.__webglTexture,ne=se(M);if(M.depthTexture.format===Xi)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Zi)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Fe(w){let M=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",ae)};j.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,w)}else if(H){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),de(M.__webglDepthbuffer[j],w,!1);else{let ae=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),de(M.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(w,M,H){let j=n.get(w);M!==void 0&&ye(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Fe(w)}function He(w){let M=w.texture,H=n.get(w),j=n.get(M);w.addEventListener("dispose",L);let ae=w.textures,ne=w.isWebGLCubeRenderTarget===!0,Oe=ae.length>1;if(Oe||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),ne){H.__webglFramebuffer=[];for(let F=0;F<6;F++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[F]=[];for(let Z=0;Z<M.mipmaps.length;Z++)H.__webglFramebuffer[F][Z]=i.createFramebuffer()}else H.__webglFramebuffer[F]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let F=0;F<M.mipmaps.length;F++)H.__webglFramebuffer[F]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let F=0,Z=ae.length;F<Z;F++){let xe=n.get(ae[F]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&K(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let F=0;F<ae.length;F++){let Z=ae[F];H.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[F]);let xe=r.convert(Z.format,Z.colorSpace),$=r.convert(Z.type),Se=y(Z.internalFormat,xe,$,Z.colorSpace,w.isXRRenderTarget===!0),ee=se(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Se,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,H.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),de(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Le(i.TEXTURE_CUBE_MAP,M);for(let F=0;F<6;F++)if(M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)ye(H.__webglFramebuffer[F][Z],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,Z);else ye(H.__webglFramebuffer[F],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);d(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let F=0,Z=ae.length;F<Z;F++){let xe=ae[F],$=n.get(xe);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),Le(i.TEXTURE_2D,xe),ye(H.__webglFramebuffer,w,xe,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,0),d(xe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(F=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,j.__webglTexture),Le(F,M),M.mipmaps&&M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)ye(H.__webglFramebuffer[Z],w,M,i.COLOR_ATTACHMENT0,F,Z);else ye(H.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,F,0);d(M)&&f(F),t.unbindTexture()}w.depthBuffer&&Fe(w)}function J(w){let M=w.textures;for(let H=0,j=M.length;H<j;H++){let ae=M[H];if(d(ae)){let ne=S(w),Oe=n.get(ae).__webglTexture;t.bindTexture(ne,Oe),f(ne),t.unbindTexture()}}}let re=[],A=[];function we(w){if(w.samples>0){if(K(w)===!1){let M=w.textures,H=w.width,j=w.height,ae=i.COLOR_BUFFER_BIT,ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(w),F=M.length>1;if(F)for(let Z=0;Z<M.length;Z++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Z=0;Z<M.length;Z++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Z]);let xe=n.get(M[Z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ae,i.NEAREST),l===!0&&(re.length=0,A.length=0,re.push(i.COLOR_ATTACHMENT0+Z),w.depthBuffer&&w.resolveDepthBuffer===!1&&(re.push(ne),A.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let Z=0;Z<M.length;Z++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Z]);let xe=n.get(M[Z]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function se(w){return Math.min(s.maxSamples,w.samples)}function K(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function te(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Me(w,M){let H=w.colorSpace,j=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Ji&&H!==ui&&(it.getTransfer(H)===ct?(j!==Tn||ae!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function fe(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=Be,this.setupRenderTarget=He,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=K}function nv(i,e){function t(n,s=ui){let r,o=it.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===Tn)return i.RGBA;if(n===Zc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Kc)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===jr||n===eo||n===to||n===no)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===Ja||n===$a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ka||n===Qa||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ka||n===Qa)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===gl||n===_l||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var iv={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let d=t.getJointPose(x,n),f=this._getHandJoint(c,x);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pt({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null,x=new Mh,d=t.getContextAttributes(),f=null,S=null,y=[],_=[],P=new le,T=null,L=new Dt;L.viewport=new at;let I=new Dt;I.viewport=new at;let b=[L,I],v=new Ma,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ue=y[q];return ue===void 0&&(ue=new ro,y[q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(q){let ue=y[q];return ue===void 0&&(ue=new ro,y[q]=ue),ue.getGripSpace()},this.getHand=function(q){let ue=y[q];return ue===void 0&&(ue=new ro,y[q]=ue),ue.getHandSpace()};function B(q){let ue=_.indexOf(q.inputSource);if(ue===-1)return;let ye=y[ue];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let q=0;q<y.length;q++){let ue=_[q];ue!==null&&(_[q]=null,y[q].disconnect(ue))}C=null,N=null,x.reset(),e.setRenderTarget(f),m=null,p=null,u=null,s=null,S=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),d.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let ye=null,de=null,Ue=null;d.depth&&(Ue=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=d.stencil?Zi:Xi,de=d.stencil?os:Ci);let Fe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(Fe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Ut(p.textureWidth,p.textureHeight,{format:Tn,type:Xn,depthTexture:new Ir(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{let ye={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ut(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(q){for(let ue=0;ue<q.removed.length;ue++){let ye=q.removed[ue],de=_.indexOf(ye);de>=0&&(_[de]=null,y[de].disconnect(ye))}for(let ue=0;ue<q.added.length;ue++){let ye=q.added[ue],de=_.indexOf(ye);if(de===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=_.length){_.push(ye),de=Fe;break}else if(_[Fe]===null){_[Fe]=ye,de=Fe;break}if(de===-1)break}let Ue=y[de];Ue&&Ue.connect(ye)}}let G=new R,Q=new R;function O(q,ue,ye){G.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(ye.matrixWorld);let de=G.distanceTo(Q),Ue=ue.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,Be=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),J=(Ue[9]+1)/Ue[5],re=(Ue[9]-1)/Ue[5],A=(Ue[8]-1)/Ue[0],we=(Fe[8]+1)/Fe[0],se=Be*A,K=Be*we,te=de/(-A+we),Me=te*-A;if(ue.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let fe=Be+te,w=He+te,M=se-Me,H=K+(de-Me),j=J*He/w*fe,ae=re*He/w*fe;q.projectionMatrix.makePerspective(M,H,j,ae,fe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,ue){ue===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ue.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ue=q.near,ye=q.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),v.near=I.near=L.near=ue,v.far=I.far=L.far=ye,(C!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,N=v.far),L.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,v.layers.mask=L.layers.mask|I.layers.mask;let de=q.parent,Ue=v.cameras;oe(v,de);for(let Fe=0;Fe<Ue.length;Fe++)oe(Ue[Fe],de);Ue.length===2?O(v,L,I):v.projectionMatrix.copy(L.projectionMatrix),me(q,v,de)};function me(q,ue,ye){ye===null?q.matrix.copy(ue.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ue.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ue.projectionMatrix),q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$i*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let _e=null;function Le(q,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){let ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let de=!1;ye.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let Fe=0;Fe<ye.length;Fe++){let Be=ye[Fe],He=null;if(m!==null)He=m.getViewport(Be);else{let re=u.getViewSubImage(p,Be);He=re.viewport,Fe===0&&(e.setRenderTargetTextures(S,re.colorTexture,p.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(S))}let J=b[Fe];J===void 0&&(J=new Dt,J.layers.enable(Fe),J.viewport=new at,b[Fe]=J),J.matrix.fromArray(Be.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Be.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(He.x,He.y,He.width,He.height),Fe===0&&(v.matrix.copy(J.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(J)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Fe=u.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(e,Fe,s.renderState)}}for(let ye=0;ye<y.length;ye++){let de=_[ye],Ue=y[ye];de!==null&&Ue!==void 0&&Ue.update(de,ue,c||o)}_e&&_e(q,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),g=null}let Ce=new Yd;Ce.setAnimationLoop(Le),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}},us=new $t,ov=new ht;function av(i,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,sh(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,S,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,_)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),x(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,S,y):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Nt&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Nt&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let S=e.get(f),y=S.envMap,_=S.envMapRotation;y&&(d.envMap.value=y,us.copy(_),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),d.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(us)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,S,y){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*S,d.scale.value=y*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,S){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function x(d,f){let S=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){let _=y.program;n.uniformBlockBinding(S,_)}function c(S,y){let _=s[S.id];_===void 0&&(g(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",d));let P=y.program;n.updateUBOMapping(S,P);let T=e.render.frame;r[S.id]!==T&&(p(S),r[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let _=i.createBuffer(),P=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let y=s[S.id],_=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,L=_.length;T<L;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,v=I.length;b<v;b++){let C=I[b];if(m(C,T,b,P)===!0){let N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value],U=0;for(let W=0;W<B.length;W++){let G=B[W],Q=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,N+U,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,y,_,P){let T=S.value,L=y+"_"+_;if(P[L]===void 0)return typeof T=="number"||typeof T=="boolean"?P[L]=T:P[L]=T.clone(),!0;{let I=P[L];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return P[L]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){let y=S.uniforms,_=0,P=16;for(let L=0,I=y.length;L<I;L++){let b=Array.isArray(y[L])?y[L]:[y[L]];for(let v=0,C=b.length;v<C;v++){let N=b[v],B=Array.isArray(N.value)?N.value:[N.value];for(let U=0,W=B.length;U<W;U++){let G=B[U],Q=x(G),O=_%P,oe=O%Q.boundary,me=O+oe;_+=oe,me!==0&&P-me<Q.storage&&(_+=P-me),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Q.storage}}}let T=_%P;return T>0&&(_+=P-T),S.__size=_,S.__cache={},this}function x(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function d(S){let y=S.target;y.removeEventListener("dispose",d);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var bl=class{constructor(e={}){let{canvas:t=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),x=new Int32Array(4),d=null,f=null,S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=hi,this.toneMappingExposure=1;let _=this,P=!1,T=0,L=0,I=null,b=-1,v=null,C=new at,N=new at,B=null,U=new Ae(0),W=0,G=t.width,Q=t.height,O=1,oe=null,me=null,_e=new at(0,0,G,Q),Le=new at(0,0,G,Q),Ce=!1,q=new Vs,ue=!1,ye=!1;this.transmissionResolutionScale=1;let de=new ht,Ue=new ht,Fe=new R,Be=new at,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function re(){return I===null?O:1}let A=n;function we(E,z){return t.getContext(E,z)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Re,!1),A===null){let z="webgl2";if(A=we(z,E),A===null)throw we(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,K,te,Me,fe,w,M,H,j,ae,ne,Oe,F,Z,xe,$,Se,ee,he,ge,ze,Pe,Xe,D;function ve(){se=new w_(A),se.init(),Pe=new nv(A,se),K=new v_(A,se,e,Pe),te=new ev(A,se),K.reverseDepthBuffer&&p&&te.buffers.depth.setReversed(!0),Me=new R_(A),fe=new Hx,w=new tv(A,se,te,fe,K,Pe,Me),M=new M_(_),H=new E_(_),j=new Nm(A),Xe=new __(A,j),ae=new T_(A,j,Me,Xe),ne=new P_(A,ae,j,Me),he=new C_(A,K,w),$=new y_(fe),Oe=new kx(_,M,H,se,K,Xe,$),F=new av(_,fe),Z=new Vx,xe=new Jx(se),ee=new g_(_,M,H,te,ne,m,l),Se=new Qx(_,ne,K),D=new lv(A,Me,K,te),ge=new x_(A,se,Me),ze=new A_(A,se,Me),Me.programs=Oe.programs,_.capabilities=K,_.extensions=se,_.properties=fe,_.renderLists=Z,_.shadowMap=Se,_.state=te,_.info=Me}ve();let Y=new Sh(_,A);this.xr=Y,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(G,Q,!1))},this.getSize=function(E){return E.set(G,Q)},this.setSize=function(E,z,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Q=z,t.width=Math.floor(E*O),t.height=Math.floor(z*O),V===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(G*O,Q*O).floor()},this.setDrawingBufferSize=function(E,z,V){G=E,Q=z,O=V,t.width=Math.floor(E*V),t.height=Math.floor(z*V),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_e)},this.setViewport=function(E,z,V,X){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,z,V,X),te.viewport(C.copy(_e).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,z,V,X){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,z,V,X),te.scissor(N.copy(Le).multiplyScalar(O).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){te.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){me=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,z=!0,V=!0){let X=0;if(E){let k=!1;if(I!==null){let pe=I.texture.format;k=pe===qa||pe===Xa||pe===Wa}if(k){let pe=I.texture.type,Te=pe===Xn||pe===Ci||pe===Js||pe===os||pe===Ga||pe===Va,De=ee.getClearColor(),Ne=ee.getClearAlpha(),We=De.r,qe=De.g,ke=De.b;Te?(g[0]=We,g[1]=qe,g[2]=ke,g[3]=Ne,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=We,x[1]=qe,x[2]=ke,x[3]=Ne,A.clearBufferiv(A.COLOR,0,x))}else X|=A.COLOR_BUFFER_BIT}z&&(X|=A.DEPTH_BUFFER_BIT),V&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),ee.dispose(),Z.dispose(),xe.dispose(),fe.dispose(),M.dispose(),H.dispose(),ne.dispose(),Xe.dispose(),D.dispose(),Oe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",tu),Y.removeEventListener("sessionend",nu),Bi.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=Me.autoReset,z=Se.enabled,V=Se.autoUpdate,X=Se.needsUpdate,k=Se.type;ve(),Me.autoReset=E,Se.enabled=z,Se.autoUpdate=V,Se.needsUpdate=X,Se.type=k}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){let z=E.target;z.removeEventListener("dispose",Je),At(z)}function At(E){Yt(E),fe.remove(E)}function Yt(E){let z=fe.get(E).programs;z!==void 0&&(z.forEach(function(V){Oe.releaseProgram(V)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,V,X,k,pe){z===null&&(z=He);let Te=k.isMesh&&k.matrixWorld.determinant()<0,De=dp(E,z,V,X,k);te.setMaterial(X,Te);let Ne=V.index,We=1;if(X.wireframe===!0){if(Ne=ae.getWireframeAttribute(V),Ne===void 0)return;We=2}let qe=V.drawRange,ke=V.attributes.position,st=qe.start*We,dt=(qe.start+qe.count)*We;pe!==null&&(st=Math.max(st,pe.start*We),dt=Math.min(dt,(pe.start+pe.count)*We)),Ne!==null?(st=Math.max(st,0),dt=Math.min(dt,Ne.count)):ke!=null&&(st=Math.max(st,0),dt=Math.min(dt,ke.count));let It=dt-st;if(It<0||It===1/0)return;Xe.setup(k,X,De,V,Ne);let Rt,ot=ge;if(Ne!==null&&(Rt=j.get(Ne),ot=ze,ot.setIndex(Rt)),k.isMesh)X.wireframe===!0?(te.setLineWidth(X.wireframeLinewidth*re()),ot.setMode(A.LINES)):ot.setMode(A.TRIANGLES);else if(k.isLine){let Ge=X.linewidth;Ge===void 0&&(Ge=1),te.setLineWidth(Ge*re()),k.isLineSegments?ot.setMode(A.LINES):k.isLineLoop?ot.setMode(A.LINE_LOOP):ot.setMode(A.LINE_STRIP)}else k.isPoints?ot.setMode(A.POINTS):k.isSprite&&ot.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ge=k._multiDrawStarts,Wt=k._multiDrawCounts,ft=k._multiDrawCount,In=Ne?j.get(Ne).bytesPerElement:1,ws=fe.get(X).currentProgram.getUniforms();for(let hn=0;hn<ft;hn++)ws.setValue(A,"_gl_DrawID",hn),ot.render(Ge[hn]/In,Wt[hn])}else if(k.isInstancedMesh)ot.renderInstances(st,It,k.count);else if(V.isInstancedBufferGeometry){let Ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wt=Math.min(V.instanceCount,Ge);ot.renderInstances(st,It,Wt)}else ot.render(st,It)};function gt(E,z,V){E.transparent===!0&&E.side===Ot&&E.forceSinglePass===!1?(E.side=Nt,E.needsUpdate=!0,Eo(E,z,V),E.side=ri,E.needsUpdate=!0,Eo(E,z,V),E.side=Ot):Eo(E,z,V)}this.compile=function(E,z,V=null){V===null&&(V=E),f=xe.get(V),f.init(z),y.push(f),V.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),E!==V&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();let X=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){let De=pe[Te];gt(De,V,k),X.add(De)}else gt(pe,V,k),X.add(pe)}),y.pop(),f=null,X},this.compileAsync=function(E,z,V=null){let X=this.compile(E,z,V);return new Promise(k=>{function pe(){if(X.forEach(function(Te){fe.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){k(E);return}setTimeout(pe,10)}se.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Pn=null;function Kn(E){Pn&&Pn(E)}function tu(){Bi.stop()}function nu(){Bi.start()}let Bi=new Yd;Bi.setAnimationLoop(Kn),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(E){Pn=E,Y.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},Y.addEventListener("sessionstart",tu),Y.addEventListener("sessionend",nu),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,z,I),f=xe.get(E,y.length),f.init(z),y.push(f),Ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,ue=$.init(this.clippingPlanes,ye),d=Z.get(E,S.length),d.init(),S.push(d),Y.enabled===!0&&Y.isPresenting===!0){let pe=_.xr.getDepthSensingMesh();pe!==null&&Kl(pe,z,-1/0,_.sortObjects)}Kl(E,z,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(oe,me),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&ee.addToRenderList(d,E),this.info.render.frame++,ue===!0&&$.beginShadows();let V=f.state.shadowsArray;Se.render(V,E,z),ue===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=d.opaque,k=d.transmissive;if(f.setupLights(),z.isArrayCamera){let pe=z.cameras;if(k.length>0)for(let Te=0,De=pe.length;Te<De;Te++){let Ne=pe[Te];su(X,k,E,Ne)}J&&ee.render(E);for(let Te=0,De=pe.length;Te<De;Te++){let Ne=pe[Te];iu(d,E,Ne,Ne.viewport)}}else k.length>0&&su(X,k,E,z),J&&ee.render(E),iu(d,E,z);I!==null&&L===0&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(_,E,z),Xe.resetDefaultState(),b=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],ue===!0&&$.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function Kl(E,z,V,X){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){X&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ue);let Te=ne.update(E),De=E.material;De.visible&&d.push(E,Te,De,V,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let Te=ne.update(E),De=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Ue)),Array.isArray(De)){let Ne=Te.groups;for(let We=0,qe=Ne.length;We<qe;We++){let ke=Ne[We],st=De[ke.materialIndex];st&&st.visible&&d.push(E,Te,st,V,Be.z,ke)}}else De.visible&&d.push(E,Te,De,V,Be.z,null)}}let pe=E.children;for(let Te=0,De=pe.length;Te<De;Te++)Kl(pe[Te],z,V,X)}function iu(E,z,V,X){let k=E.opaque,pe=E.transmissive,Te=E.transparent;f.setupLightsView(V),ue===!0&&$.setGlobalState(_.clippingPlanes,V),X&&te.viewport(C.copy(X)),k.length>0&&bo(k,z,V),pe.length>0&&bo(pe,z,V),Te.length>0&&bo(Te,z,V),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function su(E,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Ut(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?jt:Xn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let pe=f.state.transmissionRenderTarget[X.id],Te=X.viewport||C;pe.setSize(Te.z*_.transmissionResolutionScale,Te.w*_.transmissionResolutionScale);let De=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(U),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),J&&ee.render(V);let Ne=_.toneMapping;_.toneMapping=hi;let We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ue===!0&&$.setGlobalState(_.clippingPlanes,X),bo(E,V,X),w.updateMultisampleRenderTarget(pe),w.updateRenderTargetMipmap(pe),se.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,st=z.length;ke<st;ke++){let dt=z[ke],It=dt.object,Rt=dt.geometry,ot=dt.material,Ge=dt.group;if(ot.side===Ot&&It.layers.test(X.layers)){let Wt=ot.side;ot.side=Nt,ot.needsUpdate=!0,ru(It,V,X,Rt,ot,Ge),ot.side=Wt,ot.needsUpdate=!0,qe=!0}}qe===!0&&(w.updateMultisampleRenderTarget(pe),w.updateRenderTargetMipmap(pe))}_.setRenderTarget(De),_.setClearColor(U,W),We!==void 0&&(X.viewport=We),_.toneMapping=Ne}function bo(E,z,V){let X=z.isScene===!0?z.overrideMaterial:null;for(let k=0,pe=E.length;k<pe;k++){let Te=E[k],De=Te.object,Ne=Te.geometry,We=X===null?Te.material:X,qe=Te.group;De.layers.test(V.layers)&&ru(De,z,V,Ne,We,qe)}}function ru(E,z,V,X,k,pe){E.onBeforeRender(_,z,V,X,k,pe),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(_,z,V,X,E,pe),k.transparent===!0&&k.side===Ot&&k.forceSinglePass===!1?(k.side=Nt,k.needsUpdate=!0,_.renderBufferDirect(V,z,X,k,E,pe),k.side=ri,k.needsUpdate=!0,_.renderBufferDirect(V,z,X,k,E,pe),k.side=Ot):_.renderBufferDirect(V,z,X,k,E,pe),E.onAfterRender(_,z,V,X,k,pe)}function Eo(E,z,V){z.isScene!==!0&&(z=He);let X=fe.get(E),k=f.state.lights,pe=f.state.shadowsArray,Te=k.state.version,De=Oe.getParameters(E,k.state,pe,z,V),Ne=Oe.getProgramCacheKey(De),We=X.programs;X.environment=E.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(E.isMeshStandardMaterial?H:M).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,We===void 0&&(E.addEventListener("dispose",Je),We=new Map,X.programs=We);let qe=We.get(Ne);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===Te)return au(E,De),qe}else De.uniforms=Oe.getUniforms(E),E.onBeforeCompile(De,_),qe=Oe.acquireProgram(De,Ne),We.set(Ne,qe),X.uniforms=De.uniforms;let ke=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=$.uniform),au(E,De),X.needsLights=pp(E),X.lightsStateVersion=Te,X.needsLights&&(ke.ambientLightColor.value=k.state.ambient,ke.lightProbe.value=k.state.probe,ke.directionalLights.value=k.state.directional,ke.directionalLightShadows.value=k.state.directionalShadow,ke.spotLights.value=k.state.spot,ke.spotLightShadows.value=k.state.spotShadow,ke.rectAreaLights.value=k.state.rectArea,ke.ltc_1.value=k.state.rectAreaLTC1,ke.ltc_2.value=k.state.rectAreaLTC2,ke.pointLights.value=k.state.point,ke.pointLightShadows.value=k.state.pointShadow,ke.hemisphereLights.value=k.state.hemi,ke.directionalShadowMap.value=k.state.directionalShadowMap,ke.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ke.spotShadowMap.value=k.state.spotShadowMap,ke.spotLightMatrix.value=k.state.spotLightMatrix,ke.spotLightMap.value=k.state.spotLightMap,ke.pointShadowMap.value=k.state.pointShadowMap,ke.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function ou(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function au(E,z){let V=fe.get(E);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function dp(E,z,V,X,k){z.isScene!==!0&&(z=He),w.resetTextureUnits();let pe=z.fog,Te=X.isMeshStandardMaterial?z.environment:null,De=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ji,Ne=(X.isMeshStandardMaterial?H:M).get(X.envMap||Te),We=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color,It=hi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(It=_.toneMapping);let Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=Rt!==void 0?Rt.length:0,Ge=fe.get(X),Wt=f.state.lights;if(ue===!0&&(ye===!0||E!==v)){let sn=E===v&&X.id===b;$.setState(X,E,sn)}let ft=!1;X.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Wt.state.version||Ge.outputColorSpace!==De||k.isBatchedMesh&&Ge.batching===!1||!k.isBatchedMesh&&Ge.batching===!0||k.isBatchedMesh&&Ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ge.instancing===!1||!k.isInstancedMesh&&Ge.instancing===!0||k.isSkinnedMesh&&Ge.skinning===!1||!k.isSkinnedMesh&&Ge.skinning===!0||k.isInstancedMesh&&Ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ge.instancingMorph===!1&&k.morphTexture!==null||Ge.envMap!==Ne||X.fog===!0&&Ge.fog!==pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==$.numPlanes||Ge.numIntersection!==$.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==qe||Ge.morphTargets!==ke||Ge.morphNormals!==st||Ge.morphColors!==dt||Ge.toneMapping!==It||Ge.morphTargetsCount!==ot)&&(ft=!0):(ft=!0,Ge.__version=X.version);let In=Ge.currentProgram;ft===!0&&(In=Eo(X,z,k));let ws=!1,hn=!1,ur=!1,wt=In.getUniforms(),vn=Ge.uniforms;if(te.useProgram(In.program)&&(ws=!0,hn=!0,ur=!0),X.id!==b&&(b=X.id,hn=!0),ws||v!==E){te.buffers.depth.getReversed()?(de.copy(E.projectionMatrix),_d(de),xd(de),wt.setValue(A,"projectionMatrix",de)):wt.setValue(A,"projectionMatrix",E.projectionMatrix),wt.setValue(A,"viewMatrix",E.matrixWorldInverse);let an=wt.map.cameraPosition;an!==void 0&&an.setValue(A,Fe.setFromMatrixPosition(E.matrixWorld)),K.logarithmicDepthBuffer&&wt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,hn=!0,ur=!0)}if(k.isSkinnedMesh){wt.setOptional(A,k,"bindMatrix"),wt.setOptional(A,k,"bindMatrixInverse");let sn=k.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),wt.setValue(A,"boneTexture",sn.boneTexture,w))}k.isBatchedMesh&&(wt.setOptional(A,k,"batchingTexture"),wt.setValue(A,"batchingTexture",k._matricesTexture,w),wt.setOptional(A,k,"batchingIdTexture"),wt.setValue(A,"batchingIdTexture",k._indirectTexture,w),wt.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&wt.setValue(A,"batchingColorTexture",k._colorsTexture,w));let yn=V.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&he.update(k,V,In),(hn||Ge.receiveShadow!==k.receiveShadow)&&(Ge.receiveShadow=k.receiveShadow,wt.setValue(A,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vn.envMap.value=Ne,vn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(vn.envMapIntensity.value=z.environmentIntensity),hn&&(wt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&fp(vn,ur),pe&&X.fog===!0&&F.refreshFogUniforms(vn,pe),F.refreshMaterialUniforms(vn,X,O,Q,f.state.transmissionRenderTarget[E.id]),Qs.upload(A,ou(Ge),vn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qs.upload(A,ou(Ge),vn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(A,"center",k.center),wt.setValue(A,"modelViewMatrix",k.modelViewMatrix),wt.setValue(A,"normalMatrix",k.normalMatrix),wt.setValue(A,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let sn=X.uniformsGroups;for(let an=0,Ql=sn.length;an<Ql;an++){let zi=sn[an];D.update(zi,In),D.bind(zi,In)}}return In}function fp(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function pp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,V){fe.get(E.texture).__webglTexture=z,fe.get(E.depthTexture).__webglTexture=V;let X=fe.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){let V=fe.get(E);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0};let mp=A.createFramebuffer();this.setRenderTarget=function(E,z=0,V=0){I=E,T=z,L=V;let X=!0,k=null,pe=!1,Te=!1;if(E){let Ne=fe.get(E);if(Ne.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(A.FRAMEBUFFER,null),X=!1;else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(Ne.__hasExternalTextures)w.rebindTextures(E,fe.get(E.texture).__webglTexture,fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ke=E.depthTexture;if(Ne.__boundDepthTexture!==ke){if(ke!==null&&fe.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}let We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Te=!0);let qe=fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?k=qe[z][V]:k=qe[z],pe=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?k=fe.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?k=qe[V]:k=qe,C.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else C.copy(_e).multiplyScalar(O).floor(),N.copy(Le).multiplyScalar(O).floor(),B=Ce;if(V!==0&&(k=mp),te.bindFramebuffer(A.FRAMEBUFFER,k)&&X&&te.drawBuffers(E,k),te.viewport(C),te.scissor(N),te.setScissorTest(B),pe){let Ne=fe.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,V)}else if(Te){let Ne=fe.get(E.texture),We=z;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ne.__webglTexture,V,We)}else if(E!==null&&V!==0){let Ne=fe.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ne.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(E,z,V,X,k,pe,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){te.bindFramebuffer(A.FRAMEBUFFER,De);try{let Ne=E.texture,We=Ne.format,qe=Ne.type;if(!K.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-X&&V>=0&&V<=E.height-k&&A.readPixels(z,V,X,k,Pe.convert(We),Pe.convert(qe),pe)}finally{let Ne=I!==null?fe.get(I).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,z,V,X,k,pe,Te){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){let Ne=E.texture,We=Ne.format,qe=Ne.type;if(!K.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-X&&V>=0&&V<=E.height-k){te.bindFramebuffer(A.FRAMEBUFFER,De);let ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ke),A.bufferData(A.PIXEL_PACK_BUFFER,pe.byteLength,A.STREAM_READ),A.readPixels(z,V,X,k,Pe.convert(We),Pe.convert(qe),0);let st=I!==null?fe.get(I).__webglFramebuffer:null;te.bindFramebuffer(A.FRAMEBUFFER,st);let dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await gd(A,dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pe),A.deleteBuffer(ke),A.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,V=0){E.isTexture!==!0&&(ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);let X=Math.pow(2,-V),k=Math.floor(E.image.width*X),pe=Math.floor(E.image.height*X),Te=z!==null?z.x:0,De=z!==null?z.y:0;w.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,Te,De,k,pe),te.unbindTexture()};let gp=A.createFramebuffer(),_p=A.createFramebuffer();this.copyTextureToTexture=function(E,z,V=null,X=null,k=0,pe=null){E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],z=arguments[2],pe=arguments[3]||0,V=null),pe===null&&(k!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let Te,De,Ne,We,qe,ke,st,dt,It,Rt=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(V!==null)Te=V.max.x-V.min.x,De=V.max.y-V.min.y,Ne=V.isBox3?V.max.z-V.min.z:1,We=V.min.x,qe=V.min.y,ke=V.isBox3?V.min.z:0;else{let yn=Math.pow(2,-k);Te=Math.floor(Rt.width*yn),De=Math.floor(Rt.height*yn),E.isDataArrayTexture?Ne=Rt.depth:E.isData3DTexture?Ne=Math.floor(Rt.depth*yn):Ne=1,We=0,qe=0,ke=0}X!==null?(st=X.x,dt=X.y,It=X.z):(st=0,dt=0,It=0);let ot=Pe.convert(z.format),Ge=Pe.convert(z.type),Wt;z.isData3DTexture?(w.setTexture3D(z,0),Wt=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(w.setTexture2DArray(z,0),Wt=A.TEXTURE_2D_ARRAY):(w.setTexture2D(z,0),Wt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);let ft=A.getParameter(A.UNPACK_ROW_LENGTH),In=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ws=A.getParameter(A.UNPACK_SKIP_PIXELS),hn=A.getParameter(A.UNPACK_SKIP_ROWS),ur=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke);let wt=E.isDataArrayTexture||E.isData3DTexture,vn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let yn=fe.get(E),sn=fe.get(z),an=fe.get(yn.__renderTarget),Ql=fe.get(sn.__renderTarget);te.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let zi=0;zi<Ne;zi++)wt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(E).__webglTexture,k,ke+zi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(z).__webglTexture,pe,It+zi)),A.blitFramebuffer(We,qe,Te,De,st,dt,Te,De,A.DEPTH_BUFFER_BIT,A.NEAREST);te.bindFramebuffer(A.READ_FRAMEBUFFER,null),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||fe.has(E)){let yn=fe.get(E),sn=fe.get(z);te.bindFramebuffer(A.READ_FRAMEBUFFER,gp),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,_p);for(let an=0;an<Ne;an++)wt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,yn.__webglTexture,k,ke+an):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,yn.__webglTexture,k),vn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,sn.__webglTexture,pe,It+an):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,sn.__webglTexture,pe),k!==0?A.blitFramebuffer(We,qe,Te,De,st,dt,Te,De,A.COLOR_BUFFER_BIT,A.NEAREST):vn?A.copyTexSubImage3D(Wt,pe,st,dt,It+an,We,qe,Te,De):A.copyTexSubImage2D(Wt,pe,st,dt,We,qe,Te,De);te.bindFramebuffer(A.READ_FRAMEBUFFER,null),te.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else vn?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Wt,pe,st,dt,It,Te,De,Ne,ot,Ge,Rt.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Wt,pe,st,dt,It,Te,De,Ne,ot,Rt.data):A.texSubImage3D(Wt,pe,st,dt,It,Te,De,Ne,ot,Ge,Rt):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pe,st,dt,Te,De,ot,Ge,Rt.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pe,st,dt,Rt.width,Rt.height,ot,Rt.data):A.texSubImage2D(A.TEXTURE_2D,pe,st,dt,Te,De,ot,Ge,Rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,In),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ws),A.pixelStorei(A.UNPACK_SKIP_ROWS,hn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ur),pe===0&&z.generateMipmaps&&A.generateMipmap(Wt),te.unbindTexture()},this.copyTextureToTexture3D=function(E,z,V=null,X=null,k=0){return E.isTexture!==!0&&(ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,E=arguments[2],z=arguments[3],k=arguments[4]||0),ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,V,X,k)},this.initRenderTarget=function(E){fe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),te.unbindTexture()},this.resetState=function(){T=0,L=0,I=null,te.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var wl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cv=new is(-1,1,1,-1,0,1),Eh=class extends xt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},hv=new Eh,Pi=class{constructor(e){this._mesh=new $e(hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var tr=class extends pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zn.clone(e.uniforms),this.material=new pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oo=class extends pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Tl=class extends pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Al=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tr(wl),this.copyPass.material.blending=Bn,this.clock=new Jr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}oo!==void 0&&(o instanceof oo?n=!0:o instanceof Tl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rl=class extends pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Qd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var nr=class i extends pn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(r,o,{type:jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Ut(r,o,{type:jt});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Ut(r,o,{type:jt});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Qd;this.highPassUniforms=zn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=wl;this.copyUniforms=zn.clone(h.uniforms),this.blendMaterial=new pt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new Gt,this.fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};nr.BlurDirectionX=new le(1,0);nr.BlurDirectionY=new le(0,1);var jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Cl=class extends pn{constructor(){super();let e=jd;this.uniforms=zn.clone(e.uniforms),this.material=new Vr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Da?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oa&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ao=class i extends $e{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Dt;let n=this,s=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new on,u=new R,p=new R,m=new R,g=new ht,x=new R(0,0,-1),d=new at,f=new R,S=new R,y=new at,_=new ht,P=this.camera,T=new Ut(r,o,{samples:c,type:jt}),L=new pt({name:l.name!==void 0?l.name:"unspecified",uniforms:zn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});L.uniforms.tDiffuse.value=T.texture,L.uniforms.color.value=s,L.uniforms.textureMatrix.value=_,this.material=L,this.onBeforeRender=function(I,b,v){if(p.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),f.subVectors(p,m),f.dot(u)>0)return;f.reflect(u).negate(),f.add(p),g.extractRotation(v.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(m),S.subVectors(p,x),S.reflect(u).negate(),S.add(p),P.position.copy(f),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(u),P.lookAt(S),P.far=v.far,P.updateMatrixWorld(),P.projectionMatrix.copy(v.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(P.projectionMatrix),_.multiply(P.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,p),h.applyMatrix4(P.matrixWorldInverse),d.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let C=P.projectionMatrix;y.x=(Math.sign(d.x)+C.elements[8])/C.elements[0],y.y=(Math.sign(d.y)+C.elements[9])/C.elements[5],y.z=-1,y.w=(1+C.elements[10])/C.elements[14],d.multiplyScalar(2/d.dot(y)),C.elements[2]=d.x,C.elements[6]=d.y,C.elements[10]=d.z+1-a,C.elements[14]=d.w,n.visible=!1;let N=I.getRenderTarget(),B=I.xr.enabled,U=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(T),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(b,P),I.xr.enabled=B,I.shadowMap.autoUpdate=U,I.setRenderTarget(N);let W=v.viewport;W!==void 0&&I.state.viewport(W),n.visible=!0},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}};ao.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function cn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function wh(i,e,t,n,s,r){if(i.roundRect){i.roundRect(e,t,n,s,r);return}let o=Math.min(r,n/2,s/2);i.moveTo(e+o,t),i.arcTo(e+n,t,e+n,t+s,o),i.arcTo(e+n,t+s,e,t+s,o),i.arcTo(e,t+s,e,t,o),i.arcTo(e,t,e+n,t,o),i.closePath()}function ir(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Pl(i,e,t,n){let s=cn(i,i),r=s.getContext("2d"),o=ir(e);r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high";for(let a=0;a<n;a++){let l=t*2**a,c=cn(l,l),h=c.getContext("2d"),u=h.createImageData(l,l);for(let p=0;p<l*l;p++){let m=Math.floor(o()*256);u.data[p*4]=u.data[p*4+1]=u.data[p*4+2]=m,u.data[p*4+3]=255}h.putImageData(u,0,0),r.globalAlpha=a===0?1:1/(a+1.4),r.drawImage(c,0,0,i,i)}return r.globalAlpha=1,s}function Il(i,e){let{width:t,height:n}=i,s=i.getContext("2d").getImageData(0,0,t,n).data,r=cn(t,n),o=r.getContext("2d"),a=o.createImageData(t,n),l=(c,h)=>s[((h+n)%n*t+(c+t)%t)*4]/255;for(let c=0;c<n;c++)for(let h=0;h<t;h++){let u=(l(h+1,c)-l(h-1,c))*e,p=(l(h,c+1)-l(h,c-1))*e,m=Math.hypot(u,p,1),g=(c*t+h)*4;a.data[g]=-u/m*127.5+127.5,a.data[g+1]=p/m*127.5+127.5,a.data[g+2]=1/m*127.5+127.5,a.data[g+3]=255}return o.putImageData(a,0,0),r}function ms(i,{repeat:e=!1,srgb:t=!1}={}){let n=new On(i);return e&&(n.wrapS=n.wrapT=Si),t&&(n.colorSpace=Ft),n.anisotropy=8,n}function uv(i,e){let t=cn(Math.max(1,Math.round(i.width/e)),Math.max(1,Math.round(i.height/e))),n=t.getContext("2d");n.imageSmoothingQuality="high",n.drawImage(i,0,0,t.width,t.height);let s=cn(i.width,i.height),r=s.getContext("2d");return r.imageSmoothingQuality="high",r.drawImage(t,0,0,s.width,s.height),s}function ef(){let i=cn(64,64),e=i.getContext("2d"),t=e.createImageData(64,64);for(let n=0;n<64;n++)for(let s=0;s<64;s++){let r=(.5+.5*Math.sin(n/64*Math.PI*2*8))*255,o=(n*64+s)*4;t.data[o]=t.data[o+1]=t.data[o+2]=r,t.data[o+3]=255}return e.putImageData(t,0,0),ms(Il(i,1.6),{repeat:!0})}function tf(){return ms(Pl(256,23,6,4))}function nf(i,e){let t=cn(1100,300),n=t.getContext("2d"),s=220,r=(t.height-s)/2;n.fillStyle=i,n.beginPath(),wh(n,20,r,s,s,44),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=26,n.lineJoin="round",n.lineCap="round",n.beginPath(),n.moveTo(72,r+160),n.lineTo(72,r+70),n.lineTo(130,r+128),n.lineTo(188,r+70),n.lineTo(188,r+160),n.stroke();let o=String(e||"Musterfirma").replace(/\s+(GmbH|AG|KG|UG|SE|e\.K\.).*$/i,"").toUpperCase();n.fillStyle="#1b2421",n.textBaseline="middle","letterSpacing"in n&&(n.letterSpacing="6px");let a=110;do n.font=`600 ${a}px "Cormorant Garamond", Georgia, serif`,a-=4;while(n.measureText(o).width>t.width-s-90&&a>40);return n.fillText(o,s+62,t.height/2+4),t}function sf(i){let e=i.naturalWidth||i.width,t=i.naturalHeight||i.height,n=Math.min(1,1024/Math.max(e,t)),s=Math.max(8,Math.round(e*n)),r=Math.max(8,Math.round(t*n)),o=cn(s,r),a=o.getContext("2d",{willReadFrequently:!0});a.drawImage(i,0,0,s,r);let l=a.getImageData(0,0,s,r),c=l.data,h=s*r,u=0,p=0,m=0;for(let U=0;U<h;U++){if(c[U*4+3]<128){u++;continue}p++,Math.min(c[U*4],c[U*4+1],c[U*4+2])>232&&m++}let g=u>h*.02,x=p>0&&m/p>.85,d=[0,1,2].map(U=>(c[U]+c[(s-1)*4+U]+c[(h-s)*4+U]+c[(h-1)*4+U])/4),f=s,S=0,y=r,_=0;for(let U=0;U<h;U++){let W=c[U*4],G=c[U*4+1],Q=c[U*4+2],O=c[U*4+3]/255,oe;if(g)oe=!x&&Math.min(W,G,Q)>232?0:O;else{let _e=Math.hypot(W-d[0],G-d[1],Q-d[2]);oe=Math.max(0,Math.min(1,(_e-28)/60))}let me=Math.round(oe*255);if(c[U*4]=c[U*4+1]=c[U*4+2]=me,c[U*4+3]=255,me>40){let _e=U%s,Le=(U-_e)/s;_e<f&&(f=_e),_e>S&&(S=_e),Le<y&&(y=Le),Le>_&&(_=Le)}}a.putImageData(l,0,0),(S<=f||_<=y)&&(f=0,y=0,S=s-1,_=r-1);let P=S-f+1,T=_-y+1,L=Math.max(.4,Math.min(5,P/T)),I=384,b=Math.round(I*L),v=cn(b,I),C=v.getContext("2d");C.fillStyle="#000000",C.fillRect(0,0,b,I),C.imageSmoothingQuality="high";let N=.06;C.drawImage(o,f,y,P,T,b*N,I*N,b*(1-N*2),I*(1-N*2));let B=Il(uv(v,3),5);return{mask:ms(v),normal:ms(B),aspect:L}}function rf(i){let n=cn(1024,640),s=n.getContext("2d");s.fillStyle="#f7f0df",s.fillRect(0,0,1024,640),s.globalAlpha=.06,s.drawImage(Pl(256,91,64,2),0,0,1024,640),s.globalAlpha=1,s.strokeStyle="#b8924a",s.lineWidth=6,s.strokeRect(26,26,972,588),s.textAlign="center",s.textBaseline="alphabetic",s.fillStyle="#9a7530",s.font='500 44px Jost, "Helvetica Neue", Arial, sans-serif',"letterSpacing"in s&&(s.letterSpacing="16px"),s.fillText("F\xDCR",1024/2+8,128),"letterSpacing"in s&&(s.letterSpacing="0px");let r=String(i||"Sie").trim()||"Sie",o=g=>`italic 600 ${g}px "Cormorant Garamond", Georgia, serif`,a={width:904,top:150,bottom:588},l=r.split(" "),c=[[r]];l.length>1&&c.push([l.slice(0,-1).join(" "),l[l.length-1]]);let h=null;for(let g of c){let x=Math.floor((a.bottom-a.top)/(g.length===1?1.25:2));for(x=Math.min(x,300);x>40&&(s.font=o(x),!g.every(d=>s.measureText(d).width<=a.width));x-=4);(!h||x>h.size)&&(h={lines:g,size:x})}s.font=o(h.size),s.fillStyle="#17201c";let u=h.size*.96,p=u*h.lines.length,m=a.top+(a.bottom-a.top-p)/2+h.size*.78;return h.lines.forEach((g,x)=>s.fillText(g,1024/2,m+x*u)),ms(n,{srgb:!0})}function of(){let i=cn(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.8)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),ms(i)}function af(){let i=cn(256,256),e=i.getContext("2d"),t=e.createRadialGradient(128,128,20,128,128,128);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),ms(i)}var lo=new R;function An(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;lo.copy(e),lo[n]=0,lo.normalize();let c=.5*o/(o+a),h=1-lo.angleTo(i)/l;return Math.sign(lo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var kn=class extends bn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new R,l=new R,c=new R(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,m=h.length/6,g=new R,x=.5/s;for(let d=0,f=0;d<h.length;d+=3,f+=2)switch(a.fromArray(h,d),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[d+0]=c.x*Math.sign(a.x)+l.x*r,h[d+1]=c.y*Math.sign(a.y)+l.y*r,h[d+2]=c.z*Math.sign(a.z)+l.z*r,u[d+0]=l.x,u[d+1]=l.y,u[d+2]=l.z,Math.floor(d/m)){case 0:g.set(1,0,0),p[f+0]=An(g,l,"z","y",r,n),p[f+1]=1-An(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),p[f+0]=1-An(g,l,"z","y",r,n),p[f+1]=1-An(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),p[f+0]=1-An(g,l,"x","z",r,e),p[f+1]=An(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),p[f+0]=1-An(g,l,"x","z",r,e),p[f+1]=1-An(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),p[f+0]=1-An(g,l,"x","y",r,e),p[f+1]=1-An(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),p[f+0]=An(g,l,"x","y",r,e),p[f+1]=1-An(g,l,"y","x",r,t);break}}};var Zn={width:.2,height:.115,depth:.2,wall:.005,edge:.0045,lidHeight:.042,lidOver:.006,lidOverlap:.012,band:.03,bandThick:.0012,bauble:.056},gs=Zn.height,df=.008,lf="#cfa650";function Ll(i,e){let t=i.index?i.toNonIndexed():i,{position:n,normal:s,uv:r}=t.attributes,o=[],a=[],l=[];for(let h=0;h<n.count;h+=3)if(![0,1,2].every(u=>s.getY(h+u)*e>.999))for(let u=0;u<3;u++)o.push(n.getX(h+u),n.getY(h+u),n.getZ(h+u)),a.push(s.getX(h+u),s.getY(h+u),s.getZ(h+u)),l.push(r.getX(h+u),r.getY(h+u));let c=new xt;return c.setAttribute("position",new tt(o,3)),c.setAttribute("normal",new tt(a,3)),c.setAttribute("uv",new tt(l,2)),c}function cf(i,e,t,n,s){let r=new En;r.moveTo(-i/2,-e/2),r.lineTo(i/2,-e/2),r.lineTo(i/2,e/2),r.lineTo(-i/2,e/2),r.closePath();let o=new ji;o.moveTo(-t/2,-n/2),o.lineTo(-t/2,n/2),o.lineTo(t/2,n/2),o.lineTo(t/2,-n/2),o.closePath(),r.holes.push(o);let a=new Xs(r);return a.rotateX(s?-Math.PI/2:Math.PI/2),a}function hf(i,e,t){let n=new En,s=-i/2,r=-e/2;n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r);let o=new Xs(n,8),{position:a,uv:l}=o.attributes;for(let c=0;c<a.count;c++)l.setXY(c,(a.getX(c)+i/2)/i,(a.getY(c)+e/2)/e);return o}function dv(i){let e=new bn(Zn.band,Zn.bandThick,i),t=e.attributes.uv;for(let n=0;n<t.count;n++)t.setY(n,t.getY(n)*(i/df));return e}function fv(i,e,t,n){let s=new R().crossVectors(t,n);return i.quaternion.setFromRotationMatrix(new ht().makeBasis(s,t,n)),i.position.copy(e),i}function uf(i,{segments:e,widthAt:t,across:n,swallowTail:s=0}){let r=new Qi(i,!1,"catmullrom",.5),o=r.getLength(),a=[],l=[],c=[],h=3;for(let p=0;p<=e;p++){let m=p/e,g=r.getPoint(m),x=r.getTangent(m),d=n(x).normalize(),f=t(m)/2;for(let S=0;S<h;S++){let y=S/(h-1)*2-1,_=g.clone().addScaledVector(d,y*f);p===e&&s&&S!==1&&_.addScaledVector(x,s),a.push(_.x,_.y,_.z),l.push(S/(h-1),m*o/df)}if(p<e)for(let S=0;S<h-1;S++){let y=p*h+S;c.push(y,y+1,y+h,y+1,y+h+1,y+h)}}let u=new xt;return u.setAttribute("position",new tt(a,3)),u.setAttribute("uv",new tt(l,2)),u.setIndex(c),u.computeVertexNormals(),u}function pv(i){let e=new vt,t=(c,h,u)=>new R(c,h,u),n=[t(.003,.006,0),t(.022,.03,.002),t(.05,.046,.003),t(.079,.038,.002),t(.09,.018,0),t(.074,.003,-.002),t(.04,.001,-.002),t(.003,.004,0)],s=uf(n,{segments:64,widthAt:c=>Zn.band*(.42+.62*Math.sin(Math.PI*c)**.5),across:()=>new R(0,0,1)}),r=[[.1,.62,1],[Math.PI-.1,-.62,1],[-.98,.2,.76],[Math.PI+.98,-.2,.76],[.95,.9,.7],[Math.PI-.95,-.9,.7]];for(let[c,h,u]of r){let p=new $e(s,i);p.rotation.set(h,c,0,"YXZ"),p.scale.setScalar(u),e.add(p)}let o=[t(.002,.006,.004),t(.024,.0042,.03),t(.047,.0058,.062),t(.063,.0036,.093),t(.071,-.004,.112),t(.074,-.024,.1185)],a=uf(o,{segments:36,widthAt:c=>Zn.band*(.5+.42*Math.min(1,c*3)),across:c=>new R().crossVectors(c,new R(0,1,0)),swallowTail:.012});for(let c of[1,-1]){let h=new $e(a,i);h.scale.x=c,e.add(h)}let l=new $e(new ut(.0125,24,16),i);return l.scale.set(1.25,.9,1.5),l.position.y=.009,e.add(l),e}function ff(i){let{width:e,height:t,depth:n,wall:s,edge:r,lidHeight:o,lidOver:a,lidOverlap:l,band:c,bandThick:h}=Zn,u=new vt,p=[],m=ef(),g={paper:new li({roughness:.64,metalness:0,sheen:.15,sheenRoughness:.5}),ribbon:new li({color:lf,metalness:1,roughness:.34,side:Ot,normalMap:m,normalScale:new le(.1,.1),alphaMap:tf(),alphaTest:0}),lining:new rt({color:"#ecd9a8",roughness:.75,side:Nt,emissive:"#ffb752",emissiveIntensity:0}),lidLining:new rt({color:"#ecd9a8",roughness:.75,side:Nt,emissive:"#ffb752",emissiveIntensity:0}),gold:new rt({color:lf,metalness:1,roughness:.24}),tag:new rt({roughness:.8}),tagEdge:new rt({color:"#c9a55e",metalness:.3,roughness:.45}),bauble:new li({metalness:.92,roughness:.1,clearcoat:.7,clearcoatRoughness:.05}),foil:new rt({color:"#f6dc98",metalness:1,roughness:.26,emissive:"#c99a36",emissiveIntensity:.62,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,normalScale:new le(.7,.7)})},x=(J,re,A,we=!0)=>{let se=new $e(re,A);return se.castShadow=we,se.receiveShadow=!0,J.add(se),we&&p.push(se),se},d=Ll(new kn(e,t,n,5,r),1);d.translate(0,t/2,0),x(u,d,g.paper);let f=Ll(new bn(e-s*2,t-s,n-s*2),1);f.translate(0,s+(t-s)/2,0),x(u,f,g.lining,!1);let S=cf(e-r*2,n-r*2,e-s*2,n-s*2,!0);S.translate(0,t,0),x(u,S,g.paper,!1);let y=e+a*2,_=n+a*2,P=new vt;P.position.set(0,t-l,-_/2),u.add(P);let T=Ll(new kn(y,o,_,5,r),-1);T.translate(0,o/2,_/2),x(P,T,g.paper);let L=Ll(new bn(y-s*2,o-s,_-s*2),-1);L.translate(0,(o-s)/2,_/2),x(P,L,g.lidLining,!1);let I=cf(y-r*2,_-r*2,y-s*2,_-s*2,!1);I.translate(0,0,_/2),x(P,I,g.paper,!1);let b=[],v=(J,re,A,we,se)=>{let K=fv(x(J,dv(re),g.ribbon),A,we,se);return b.push(K),K},C=new R(1,0,0),N=new R(0,1,0),B=new R(0,0,1),U=t-l,W=h/2;v(u,U,new R(0,U/2,n/2+W),B,N),v(u,U,new R(0,U/2,-n/2-W),B.clone().negate(),N),v(u,U,new R(e/2+W,U/2,0),C,N),v(u,U,new R(-e/2-W,U/2,0),C.clone().negate(),N);let G=_/2;v(P,o,new R(0,o/2,_+W),B,N),v(P,o,new R(0,o/2,-W),B.clone().negate(),N),v(P,o,new R(y/2+W,o/2,G),C,N),v(P,o,new R(-y/2-W,o/2,G),C.clone().negate(),N),v(P,_+h*2,new R(0,o+W,G),N,B),v(P,y+h*2,new R(0,o+W+3e-4,G),N,C);let Q=pv(g.ribbon);Q.position.set(0,o+h,G),Q.traverse(J=>{J.isMesh&&(J.castShadow=!0,p.push(J),b.push(J))}),P.add(Q);let O=new vt,oe={width:.144,height:.09};O.position.set(0,U*.49,n/2+h+.0018),O.rotation.z=-.035,u.add(O);let me=x(O,hf(oe.width+.004,oe.height+.004,.0066),g.tagEdge,!1);me.position.z=-5e-4,x(O,hf(oe.width,oe.height,.005),g.tag,!1),x(O,new Qt(.0034,.001,8,24),g.gold,!1).position.set(0,oe.height/2-.0088,6e-4);let Le=new Qi([new R(0,oe.height/2-.0088,8e-4),new R(.003,oe.height/2+.004,.0016),new R(.0045,U-O.position.y-.001,6e-4)]);x(O,new Hr(Le,16,5e-4,6),g.gold,!1);let Ce=new vt;Ce.visible=!1,u.add(Ce);let q=Zn.bauble;x(Ce,new ut(q,72,48),g.bauble);let ue=x(Ce,new Pt(.0118,.0136,.015,32),g.gold);ue.position.y=q+.0052;let ye=x(Ce,new Qt(.0078,.0013,10,32),g.gold);ye.position.y=q+.019;let de=null,Ue=new Yr("#ffcf85",0,1.1,2);Ue.position.set(0,t*.55,0),u.add(Ue);function Fe(J){let re=new Ae(J);g.paper.color.copy(re),g.paper.sheenColor=re.clone().lerp(new Ae("#ffffff"),.22),g.bauble.color.copy(re)}function Be(J){let re=sf(J);for(let te of["alphaMap","normalMap"])g.foil[te]&&g.foil[te].dispose();g.foil.alphaMap=re.mask,g.foil.normalMap=re.normal,g.foil.needsUpdate=!0;let we=re.aspect>=1.25?Math.min(.92,.3*re.aspect+.25):.5,se=Math.max(.14,Math.min(.62,we/re.aspect));de&&(Ce.remove(de),de.geometry.dispose());let K=new ut(q*1.004,64,32,Math.PI/2-we,we*2,Math.PI/2-se,se*2);de=new $e(K,g.foil),Ce.add(de)}function He(J){g.tag.map&&g.tag.map.dispose(),g.tag.map=rf(J),g.tag.needsUpdate=!0}return Fe(i.colour),{group:u,lid:P,bow:Q,tag:O,bauble:Ce,glow:Ue,materials:g,ribbonParts:b,shadowCasters:p,setColour:Fe,setLogo:Be,setRecipient:He}}var Th=26,Ah={blending:Ea,blendEquation:Nn,blendSrc:Ys,blendDst:Ys,blendEquationAlpha:Nn,blendSrcAlpha:wa,blendDstAlpha:Ys},pf=60,Dl=["#ffd08a","#ffbe5c","#ffdca6","#ffab3d","#ffc978"];function mv(i){let e=new Gs;e.background=new Ae("#1c170e");let t=new R(0,.2,0),n=(l,c,h,u,p,m,g)=>{let x=new Gt({color:new Ae(h).multiplyScalar(u),side:Ot}),d=new $e(new Kt(l,c),x);d.position.set(p,m,g),d.lookAt(t),e.add(d)};n(4.2,2.4,"#fff1dc",3.4,0,4.4,1.4),n(1.5,3.4,"#ffd9a0",4.2,-4.2,1.7,1.6),n(1.1,3.2,"#cfe0ff",2.4,4.4,1.9,-.6),n(3.6,1.6,"#ffe7c2",2.6,.6,1,4.8),n(5,3,"#ffd9a0",.9,0,-1.6,3.2);let s=ir(11),r=new ut(1,10,8);for(let l=0;l<54;l++){let c=new Ae(Dl[l%Dl.length]).multiplyScalar(28+s()*46),h=new $e(r,new Gt({color:c})),u=s()*Math.PI*2,p=4+s()*2;h.position.set(Math.cos(u)*p,.15+s()*3.2,Math.sin(u)*p),h.scale.setScalar(.03+s()*.045),e.add(h)}let o=new js(i),a=o.fromScene(e,.03).texture;return o.dispose(),a}function gv(){let i=new pt({side:Nt,depthWrite:!1,uniforms:{uWarm:{value:0}},vertexShader:"varying vec3 vDirection; void main() { vDirection = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uWarm;
      varying vec3 vDirection;
      void main() {
        float height = normalize(vDirection).y;
        vec3 top = vec3(0.004, 0.007, 0.006);
        vec3 horizon = mix(vec3(0.014, 0.012, 0.009), vec3(0.04, 0.028, 0.014), uWarm);
        gl_FragColor = vec4(mix(horizon, top, smoothstep(-0.04, 0.5, height)), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new $e(new ut(30,32,16),i);return e.frustumCulled=!1,e}function _v(i){let t=ir(5),n=new Float32Array(78*3),s=new Float32Array(78*3),r=new Float32Array(78),o=new Float32Array(78),a=[];for(let p=0;p<78;p++)n.set([(t()*2-1)*3.4,.12+t()**1.3*2.7,-1.9-t()*2.9],p*3),r[p]=.05+t()**2*.2,o[p]=t(),t()<.14&&a.push(p),new Ae(Dl[p%Dl.length]).toArray(s,p*3);let l=new xt;l.setAttribute("position",new _t(n,3)),l.setAttribute("aColour",new _t(s,3)),l.setAttribute("aSize",new _t(r,1)),l.setAttribute("aSeed",new _t(o,1));let c=new pt({transparent:!0,depthWrite:!1,blending:ci,uniforms:{uTime:{value:0},uScale:{value:1},uStrength:{value:.26}},vertexShader:`
      attribute vec3 aColour;
      attribute float aSize;
      attribute float aSeed;
      uniform float uTime;
      uniform float uScale;
      varying vec3 vColour;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.x += sin(uTime * 0.11 + aSeed * 6.283) * 0.07;
        p.y += cos(uTime * 0.08 + aSeed * 4.1) * 0.035;
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = min(300.0, aSize * uScale / -view.z);
        vAlpha = 0.6 + 0.4 * sin(uTime * (0.5 + aSeed) + aSeed * 40.0);
        vColour = aColour;
      }`,fragmentShader:`
      uniform float uStrength;
      varying vec3 vColour;
      varying float vAlpha;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float disc = smoothstep(1.0, 0.9, d);
        float edge = smoothstep(0.7, 0.96, d) * 0.14;
        gl_FragColor = vec4(vColour * (0.6 + edge) * uStrength * vAlpha * disc, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),h=new ai(l,c);h.frustumCulled=!1;let u=p=>{let m=new Ae(p).lerp(new Ae("#ffffff"),.25);for(let g of a)m.toArray(s,g*3);l.attributes.aColour.needsUpdate=!0};return u(i),{points:h,material:c,setBrand:u}}function xv(i){let t=ir(3),n=new Float32Array(240*3),s=new Float32Array(240*2);for(let l=0;l<240;l++)n.set([(t()*2-1)*1.7,t()*2.1,-2.2+t()*3.2],l*3),s.set([t(),t()],l*2);let r=new xt;r.setAttribute("position",new _t(n,3)),r.setAttribute("aSeed",new _t(s,2));let o=new pt({transparent:!0,depthWrite:!1,...Ah,uniforms:{uTime:{value:0},uScale:{value:1},uSprite:{value:i}},vertexShader:`
      attribute vec2 aSeed;
      uniform float uTime;
      uniform float uScale;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * (0.045 + aSeed.x * 0.07), 2.1);
        p.x += sin(uTime * 0.5 + aSeed.y * 30.0) * 0.03;
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        // Flakes away from the gift are out of focus: larger and fainter.
        float blur = 1.0 + abs(p.z) * 0.9;
        gl_PointSize = min(48.0, (0.005 + aSeed.y * 0.005) * blur * uScale / -view.z);
        vAlpha = (0.42 / (blur * blur)) * smoothstep(0.0, 0.25, p.y) * smoothstep(2.1, 1.7, p.y);
      }`,fragmentShader:`
      uniform sampler2D uSprite;
      varying float vAlpha;
      void main() {
        gl_FragColor = vec4(vec3(0.9, 0.95, 1.0) * texture2D(uSprite, gl_PointCoord).a * vAlpha, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),a=new ai(r,o);return a.frustumCulled=!1,{points:a,material:o}}function vv(i){let n=ir(17),s=new Float32Array(620*3),r=new Float32Array(620*3),o=new Float32Array(620*4),a=Zn.width/2;for(let u=0;u<620;u++){if(o.set([n(),n(),n(),u<260?0:1],u*4),u>=260)continue;let p=n()<.45,m=(n()*2-1)*a,g=n()<.5,x=p?(n()*2-1)*.08:g?(n()*2-1)*.015:m,d=p?(n()*2-1)*.02:g?m:(n()*2-1)*.015;s.set([x,gs+.032+(p?n()*.04:0),d],u*3),r.set([(n()*2-1)*.16,.08+n()*.3,(n()*2-1)*.16],u*3)}let l=new xt;l.setAttribute("position",new _t(s,3)),l.setAttribute("aVelocity",new _t(r,3)),l.setAttribute("aSeed",new _t(o,4));let c=new pt({transparent:!0,depthWrite:!1,...Ah,uniforms:{uTime:{value:0},uReveal:{value:-1},uGlow:{value:0},uScale:{value:1},uSprite:{value:i},uBoxTop:{value:gs}},vertexShader:`
      attribute vec3 aVelocity;
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uReveal;
      uniform float uGlow;
      uniform float uScale;
      uniform float uBoxTop;
      varying float vAlpha;
      void main() {
        vec3 p;
        float alpha;
        float twinkle = 0.55 + 0.45 * sin(uTime * (7.0 + aSeed.y * 9.0) + aSeed.x * 60.0);
        if (aSeed.w < 0.5) {
          float age = uReveal - aSeed.x * 0.75;
          p = position + aVelocity * age + vec3(0.0, 0.06 * age * age, 0.0);
          p.x += sin(age * 4.0 + aSeed.z * 20.0) * 0.012;
          alpha = step(0.0, age) * smoothstep(1.9, 0.2, age);
        } else {
          float life = fract(uTime * (0.09 + 0.1 * aSeed.y) + aSeed.x);
          float spread = (0.012 + 0.07 * aSeed.z) * (1.0 + life * 1.5);
          float angle = aSeed.x * 6.283 + life * (1.2 + aSeed.y * 2.4) + uTime * 0.18;
          p = vec3(cos(angle) * spread, uBoxTop - 0.07 + life * 0.66, sin(angle) * spread);
          alpha = sin(3.14159 * life) * uGlow;
        }
        vec4 view = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = min(28.0, (0.003 + aSeed.y * 0.0052) * uScale / -view.z);
        vAlpha = alpha * twinkle;
      }`,fragmentShader:`
      uniform sampler2D uSprite;
      varying float vAlpha;
      void main() {
        gl_FragColor = vec4(vec3(1.0, 0.72, 0.3) * 1.25 * texture2D(uSprite, gl_PointCoord).a * vAlpha, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),h=new ai(l,c);return h.frustumCulled=!1,{points:h,material:c}}function yv(){let e=new Pt(.16,Zn.width/2-.014,.5,48,1,!0);e.translate(0,gs-.004+.5/2,0);let t=new pt({transparent:!0,depthWrite:!1,side:Ot,...Ah,uniforms:{uGlow:{value:0},uColour:{value:new Ae("#ffc978")}},vertexShader:`
      varying vec3 vNormalView;
      varying vec3 vToCamera;
      varying float vHeight;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        vNormalView = normalMatrix * normal;
        vToCamera = -view.xyz;
        vHeight = uv.y;
        gl_Position = projectionMatrix * view;
      }`,fragmentShader:`
      uniform float uGlow;
      uniform vec3 uColour;
      varying vec3 vNormalView;
      varying vec3 vToCamera;
      varying float vHeight;
      void main() {
        float facing = abs(dot(normalize(vNormalView), normalize(vToCamera)));
        float strength = pow(facing, 2.4) * pow(1.0 - vHeight, 1.7) * uGlow;
        gl_FragColor = vec4(uColour * strength, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new $e(e,t);return n.renderOrder=3,{mesh:n,material:t}}function Mv(){let i={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uStrength:{value:.42},uFloor:{value:new Ae("#050807")}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uStrength;
      uniform vec3 uFloor;
      varying vec4 vUv;
      varying vec3 vWorld;
      void main() {
        vec2 uv = vUv.xy / vUv.w;
        float distance = length(vWorld.xz);
        // Two fixed rings of samples: the mirror image stays smooth, without speckle.
        float spread = 0.006 + distance * 0.014;
        vec3 mirrored = min(texture2D(tDiffuse, uv).rgb, vec3(1.6)) * 2.0;
        for (int i = 0; i < 8; i++) {
          float angle = float(i) * 0.7853982;
          vec2 direction = vec2(cos(angle), sin(angle)) * spread;
          mirrored += min(texture2D(tDiffuse, uv + direction * 0.5).rgb, vec3(1.6)) * 1.5;
          mirrored += min(texture2D(tDiffuse, uv + direction).rgb, vec3(1.6));
        }
        mirrored /= 22.0;
        float near = smoothstep(1.7, 0.08, distance);
        float edge = smoothstep(3.4, 1.0, distance);
        gl_FragColor = vec4(uFloor + mirrored * uStrength * near, edge);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`},e=new ao(new Kt(9,9),{textureWidth:320,textureHeight:320,clipBias:.001,multisample:0,shader:i});return e.rotation.x=-Math.PI/2,e.material.transparent=!0,e.renderOrder=-2,e}var Sv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.55}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 colour = texture2D(tDiffuse, vUv);
      float centre = smoothstep(0.95, 0.25, length((vUv - 0.5) * vec2(1.0, 1.12)));
      colour.rgb *= mix(1.0 - uVignette, 1.0, centre);
      colour.rgb += (hash(vUv * vec2(1543.0, 977.0) + fract(uTime) * 91.0) - 0.5) * 0.02;
      gl_FragColor = colour;
    }`};function mf(i,{brand:e,pixelRatioCap:t=2,samples:n=4}){let s=new bl({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});if(!s.getContext().getExtension("EXT_color_buffer_float"))throw new Error("no float render targets");s.toneMapping=Zs,s.toneMappingExposure=1.05,s.shadowMap.enabled=!0,s.shadowMap.type=ba;let r=new Gs,o=new Ae("#040706");r.background=o,r.environment=mv(s),r.environmentIntensity=.78;let a=new Dt(Th,1,.05,80),l=new qr("#fff0dc",15,7,.4,.95,2);l.position.set(-.85,1.75,1.25),l.target.position.set(0,.08,0),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.radius=7,l.shadow.bias=-2e-4,l.shadow.normalBias=.015,l.shadow.camera.near=.5,l.shadow.camera.far=5;let c=new Zr("#d6e2ff",.4);c.position.set(1.4,1,-1.7),r.add(l,l.target,c);let h=of(),u=gv(),p=_v(e),m=xv(h),g=vv(h),x=yv(),d=Mv(),f=document.createElement("canvas");f.width=f.height=128;let S=f.getContext("2d"),y=S.createRadialGradient(64,64,8,64,64,64);y.addColorStop(0,"rgba(8, 11, 10, 1)"),y.addColorStop(.55,"rgba(6, 9, 8, 1)"),y.addColorStop(1,"rgba(5, 8, 7, 0)"),S.fillStyle=y,S.fillRect(0,0,128,128);let _=new On(f);_.colorSpace=Ft;let P=new $e(new Kt(9,9),new Gt({map:_,transparent:!0,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.renderOrder=-2,P.visible=!1;let T=d.onBeforeRender;d.onBeforeRender=()=>{},d.updateMatrixWorld(!0);function L(){d.visible&&(m.points.visible=g.points.visible=!1,T.call(d,s,r,a),m.points.visible=g.points.visible=!0,s.setRenderTarget(null))}let I=new $e(new Kt(9,9),new Gt({colorWrite:!1}));I.rotation.x=-Math.PI/2,I.renderOrder=-3,I.visible=!1,r.add(I);let b=new $e(new Kt(3,3),new Gr({opacity:.38}));b.rotation.x=-Math.PI/2,b.position.y=4e-4,b.receiveShadow=!0;let v=new $e(new Kt(.56,.56),new Gt({map:af(),transparent:!0,depthWrite:!1,opacity:.9}));v.rotation.x=-Math.PI/2,v.position.y=7e-4;let C=new $e(new Kt(1.5,1.5),new Gt({map:h,color:"#3b2a0e",transparent:!0,depthWrite:!1,blending:ci}));C.rotation.x=-Math.PI/2,C.position.y=.001;let N=new $e(new Kt(3.2,2.2),new Gt({map:h,color:"#2c1d09",transparent:!0,depthWrite:!1,blending:ci}));N.position.set(0,1.1,-1.1),r.add(u,N,p.points,d,P,b,v,C,m.points,x.mesh,g.points);let B=new Ut(4,4,{type:jt,samples:n}),U=new Al(s,B);U.addPass(new Rl(r,a));let W=new nr(new le(256,256),.4,.6,.96);U.addPass(W),U.addPass(new Cl);let G=new tr(Sv);U.addPass(G);let Q={width:1,height:1,ratio:1},O=2,oe=!1;function me(Ce,q){Q.width=Math.max(1,Ce),Q.height=Math.max(1,q),Q.ratio=Math.min(window.devicePixelRatio||1,[1.25,1.5,t][O]),s.setPixelRatio(Q.ratio),s.setSize(Q.width,Q.height,!1),U.setPixelRatio(Q.ratio),U.setSize(Q.width,Q.height),a.aspect=Q.width/Q.height,a.updateProjectionMatrix();let ue=Q.height*Q.ratio/(2*Math.tan(Ct.degToRad(a.fov/2)));for(let ye of[p,m,g,...Le.scaled])ye.material.uniforms.uScale.value=ue}function _e(Ce,q,ue){p.material.uniforms.uTime.value=Ce,m.material.uniforms.uTime.value=Ce,g.material.uniforms.uTime.value=Ce,g.material.uniforms.uReveal.value=q,g.material.uniforms.uGlow.value=ue,x.material.uniforms.uGlow.value=ue*(.055+.008*Math.sin(Ce*1.7)),u.material.uniforms.uWarm.value=ue,C.material.color.set("#3b2a0e").multiplyScalar(.5+ue*1.1),N.material.color.set("#2c1d09").multiplyScalar(.55+ue*.9),G.uniforms.uTime.value=Ce}let Le={renderer:s,scene:r,camera:a,size:Q,bokeh:p,sprite:h,resize:me,update:_e,scaled:[],fieldOfView:Th,cameraView:pf,render(){if(oe||O===0){s.render(r,a);return}L(),U.render()},setThroughCamera(Ce){oe=Ce,r.background=Ce?null:o;for(let q of[u,N,p.points,C])q.visible=!Ce;I.visible=Ce,d.visible=!Ce&&O>0,P.visible=!Ce&&O===0,a.fov=Ce?pf:Th,me(Q.width,Q.height)},quality:()=>O,setQuality(Ce){O=Math.max(0,Math.min(2,Ce)),d.visible=!oe&&O>0,P.visible=!oe&&O===0;let q=O===2?320:224;d.getRenderTarget().setSize(q,q),me(Q.width,Q.height)}};return Le}var bv={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function yt(i){let[,e,t,n]=/^([A-G])(#?)(\d)$/.exec(i);return 440*Math.pow(2,(bv[e]+(t?1:0)+(Number(n)-4)*12-9)/12)}var Ev={C:{bass:"C3",notes:["E4","G4","C5"]},F:{bass:"F3",notes:["F4","A4","C5"]},G:{bass:"G3",notes:["D4","G4","B4"]},D:{bass:"D3",notes:["D4","F#4","A4"]}},wv=[["C",[["E5",1],["E5",1],["E5",2]]],["C",[["E5",1],["E5",1],["E5",2]]],["C",[["E5",1],["G5",1],["C5",1.5],["D5",.5]]],["C",[["E5",4]]],["F",[["F5",1],["F5",1],["F5",1.5],["F5",.5]]],["C",[["F5",1],["E5",1],["E5",1],["E5",.5],["E5",.5]]],["D",[["E5",1],["D5",1],["D5",1],["E5",1]]],["G",[["D5",2],["G5",2]]],["C",[["E5",1],["E5",1],["E5",2]]],["C",[["E5",1],["E5",1],["E5",2]]],["C",[["E5",1],["G5",1],["C5",1.5],["D5",.5]]],["C",[["E5",4]]],["F",[["F5",1],["F5",1],["F5",1.5],["F5",.5]]],["C",[["F5",1],["E5",1],["E5",1],["E5",.5],["E5",.5]]],["G",[["G5",1],["G5",1],["F5",1],["D5",1]]],["C",[["C5",3]]],["C",[["G4",1],["E5",1],["D5",1],["C5",1]]],["C",[["G4",3],["G4",.5],["G4",.5]]],["C",[["G4",1],["E5",1],["D5",1],["C5",1]]],["F",[["A4",4]]],["F",[["A4",1],["F5",1],["E5",1],["D5",1]]],["G",[["B4",4]]],["G",[["G5",1],["G5",1],["F5",1],["D5",1]]],["C",[["E5",4]]],["C",[["G4",1],["E5",1],["D5",1],["C5",1]]],["C",[["G4",4]]],["C",[["G4",1],["E5",1],["D5",1],["C5",1]]],["F",[["A4",3],["A4",1]]],["F",[["A4",1],["F5",1],["E5",1],["D5",1]]],["C",[["G5",1],["G5",1],["G5",1],["G5",1]]],["G",[["A5",1],["G5",1],["F5",1],["D5",1]]],["C",[["C5",2],["G5",2]]]],Tv=[["C",[["G4",1.5],["A4",.5],["G4",1]]],["C",[["E4",3]]],["C",[["G4",1.5],["A4",.5],["G4",1]]],["C",[["E4",3]]],["G",[["D5",2],["D5",1]]],["G",[["B4",3]]],["C",[["C5",2],["C5",1]]],["C",[["G4",3]]],["F",[["A4",2],["A4",1]]],["F",[["C5",1.5],["B4",.5],["A4",1]]],["C",[["G4",1.5],["A4",.5],["G4",1]]],["C",[["E4",3]]],["F",[["A4",2],["A4",1]]],["F",[["C5",1.5],["B4",.5],["A4",1]]],["C",[["G4",1.5],["A4",.5],["G4",1]]],["C",[["E4",3]]],["G",[["D5",2],["D5",1]]],["G",[["F5",1.5],["D5",.5],["B4",1]]],["C",[["C5",3]]],["C",[["E5",3]]],["C",[["C5",1],["G4",1],["E4",1]]],["G",[["G4",1.5],["F4",.5],["D4",1]]],["C",[["C4",3]]],["C",[]]];function gf(){let i=null,e=null,t=null,n=null,s=null;function r(){if(i)return!0;let d=window.AudioContext||window.webkitAudioContext;if(!d)return!1;i=new d;let f=i.createDynamicsCompressor();f.threshold.value=-10,f.ratio.value=6,f.connect(i.destination),e=i.createGain(),e.gain.value=.9,e.connect(f),t=i.createGain(),t.gain.value=0,t.connect(f);let S=i.createDelay(1);S.delayTime.value=.24;let y=i.createGain();y.gain.value=.22;let _=i.createBiquadFilter();_.type="lowpass",_.frequency.value=3e3,e.connect(S),S.connect(_),_.connect(y),y.connect(S),_.connect(f),n=i.createBuffer(1,i.sampleRate,i.sampleRate);let P=n.getChannelData(0);for(let T=0;T<P.length;T++)P[T]=Math.random()*2-1;return!0}function o(d,f,S,y,{type:_="sine",to:P=f,out:T=e,wobble:L=0}={}){let I=i.createOscillator(),b=i.createGain();if(I.type=_,I.frequency.setValueAtTime(f,d),P!==f&&I.frequency.exponentialRampToValueAtTime(P,d+y),L){let v=i.createOscillator(),C=i.createGain();v.frequency.value=17,C.gain.setValueAtTime(L,d),C.gain.exponentialRampToValueAtTime(1,d+y),v.connect(C),C.connect(I.frequency),v.start(d),v.stop(d+y+.05)}b.gain.setValueAtTime(1e-4,d),b.gain.exponentialRampToValueAtTime(S,d+.006),b.gain.exponentialRampToValueAtTime(1e-4,d+y),I.connect(b),b.connect(T),I.start(d),I.stop(d+y+.05)}function a(d,f,S,{kind:y="bandpass",from:_=2e3,to:P=_,sharp:T=1,out:L=e}={}){let I=i.createBufferSource();I.buffer=n;let b=i.createBiquadFilter();b.type=y,b.Q.value=T,b.frequency.setValueAtTime(_,d),P!==_&&b.frequency.exponentialRampToValueAtTime(P,d+f);let v=i.createGain();v.gain.setValueAtTime(S,d),v.gain.exponentialRampToValueAtTime(1e-4,d+f),I.connect(b),b.connect(v),v.connect(L),I.start(d,Math.random()*.8,f+.02)}function l(d,f,S,y,_=e){o(d,f,S,y,{out:_}),o(d,f*2,S*.3,y*.55,{out:_}),o(d,f*4.2,S*.11,y*.22,{out:_})}function c(d,f,{lively:S}){let y=[],_=T=>y[Math.round(T*2)]=y[Math.round(T*2)]||[];d.forEach(([T,L],I)=>{let b=I*f,v=Ev[T],C=b;for(let[N,B]of L){let U=yt(N);_(C).push((W,G)=>l(W,U,S?.2:.16,Math.max(.35,B*G*(S?1.1:1.6)),t)),C+=B}if(S){for(let[N,B]of[[0,v.bass],[2,v.notes[1].replace(/\d/,"3")]]){let U=yt(B);_(b+N).push(W=>o(W,U,.2,.3,{type:"triangle",out:t}))}for(let N of[1,3])_(b+N).push(B=>{for(let U of v.notes)o(B,yt(U),.045,.17,{type:"triangle",out:t})});for(let N=0;N<f*2;N++)_(b+N/2).push(B=>a(B,.05,N%2?.035:.07,{from:7600,sharp:3.5,out:t}))}else[v.bass,v.notes[0],v.notes[1]].forEach((N,B)=>{let U=yt(N);_(b+B).push((W,G)=>o(W,U,.07,G*2.4,{out:t}))})});let P=d.length*f*2;for(let T=0;T<P;T++)y[T]=y[T]||[];return y}let h={fight:{steps:c(wv,4,{lively:!0}),beatsPerMinute:176,loop:!0,level:.34},calm:{steps:c(Tv,3,{lively:!1}),beatsPerMinute:80,loop:!1,level:.5}};function u(){if(s)for(s.time<i.currentTime&&(s.time=i.currentTime+.05);s&&s.time<i.currentTime+.3;){let d=60/(s.song.beatsPerMinute*s.tempo);for(let f of s.song.steps[s.step])f(s.time,d);s.time+=d/2,s.step++,s.step>=s.song.steps.length&&(s.song.loop?s.step=0:(clearInterval(s.timer),s=null))}}function p(){s&&(clearInterval(s.timer),s=null,t.gain.cancelScheduledValues(i.currentTime),t.gain.setTargetAtTime(0,i.currentTime,.12))}function m(d){if(!r())return;p();let f=h[d],S=i.currentTime+.5;t.gain.cancelScheduledValues(i.currentTime),t.gain.setValueAtTime(0,S-.05),t.gain.linearRampToValueAtTime(f.level,S),s={song:f,step:0,time:S,tempo:1,timer:setInterval(u,60)},u()}function g(d){r()&&(i.state==="suspended"&&i.resume(),d(i.currentTime+.01))}let x=["C6","D6","E6","G6","A6","C7","D7","E7"].map(yt);return{unlock(){g(()=>{})},music(d){d?m(d):i&&p()},hurry(d){s&&(s.tempo=d?1.13:1)},knock(){g(d=>{o(d,520,.22,.07,{type:"triangle",to:300}),a(d,.03,.12,{from:1800})})},giggle(){g(d=>{[760,920,760,980,1100].forEach((f,S)=>o(d+S*.08,f,.075,.07,{type:"triangle",to:f*.86}))})},bang(){g(d=>{a(d,.12,.4,{kind:"highpass",from:1500}),o(d,620,.3,.16,{to:170}),["C6","E6","G6","C7"].forEach((f,S)=>l(d+.06+S*.055,yt(f),.09,.5))})},caught(){g(d=>{a(d,.2,.3,{from:1300,to:420,sharp:.9}),o(d+.02,420,.16,.16,{type:"triangle",to:260,wobble:30}),o(d+.3,233,.11,.24,{type:"sawtooth",to:220}),o(d+.58,196,.11,.42,{type:"sawtooth",to:165})})},pop(){g(d=>{o(d,300,.16,.1,{type:"triangle",to:860}),l(d+.07,yt("G6"),.04,.25)})},swoosh(){g(d=>o(d,620,.06,.13,{to:1500}))},hit(d,f){g(S=>{if(o(S,250,.2,.34,{to:330,wobble:70}),o(S+.03,1500,.07,.08,{type:"triangle",to:2300}),a(S,.07,.12,{kind:"highpass",from:3e3}),l(S+.05,x[Math.min(x.length-1,Math.max(0,d-1))],.13,.5),f==="chef")for(let y of[311,370])o(S+.12,y,.07,.2,{type:"square"});f==="rund"&&(o(S+.02,640,.13,.5,{type:"triangle"}),o(S+.02,987,.07,.38),o(S+.02,1510,.04,.22)),f==="lang"&&o(S+.1,1900,.06,.14,{type:"triangle",to:2900,wobble:40})})},heat(d){g(f=>{o(f,300+d*90,.09,.28,{type:"sawtooth",to:900+d*420}),["C6","E6","G6"].slice(0,d).forEach((S,y)=>l(f+.2+y*.05,yt(S)*(d===3?2:1),.09,.6))})},rush(){g(d=>{for(let f of[0,.16])l(d+f,yt("A6"),.12,.35),o(d+f,yt("A5"),.07,.18,{type:"square"})})},nose(d){g(f=>o(f+.06,380+d*140,.08,.2,{to:700+d*260}))},longNose(){g(d=>{o(d+.05,500,.1,.3,{to:2200,wobble:25});for(let[f,S]of[[.34,"G5"],[.46,"C6"]])o(d+f,yt(S),.09,.2,{type:"square"})})},cocky(){g(d=>{[["G5",0],["E5",.13],["A5",.26],["G5",.39],["E5",.52]].forEach(([f,S])=>o(d+S,yt(f),.06,.12,{type:"triangle"}))})},toy(){g(d=>{o(d,380,.18,.12,{to:900}),["E6","G6","B6","E7"].forEach((f,S)=>l(d+.08+S*.06,yt(f),.07,.4))})},land(){g(d=>{a(d,.08,.1,{kind:"highpass",from:2400}),l(d+.02,yt("E7"),.06,.5)})},shovel(){g(d=>{a(d,.7,.45,{from:500,to:3200,sharp:.7}),o(d,180,.2,.55,{type:"triangle",to:420}),o(d+.32,150,.3,.35,{to:60}),a(d+.32,.5,.3,{kind:"lowpass",from:900,to:200})})},paint(){g(d=>{[330,262,392].forEach((f,S)=>o(d+S*.11,f,.14,.12,{to:f*1.6,wobble:20})),a(d+.34,.25,.25,{from:900,to:300,sharp:.8})})},team(){g(d=>{[["C5",0],["E5",.1],["G5",.2],["C6",.3],["E6",.44]].forEach(([f,S])=>l(d+S,yt(f),.13,.7));for(let f of["C4","G4","E5"])o(d+.44,yt(f),.06,.9,{type:"triangle"})})},sparkle(){g(d=>{for(let f=0;f<9;f++)l(d+f*.045,yt("C6")*Math.pow(2,f/6),.06,.5)})},star(d){g(f=>{["G6","B6","D7"].slice(0,d).forEach((S,y)=>l(f+y*.09,yt(S),.12,.8))})},record(){g(d=>{[["G5",0],["G5",.12],["G5",.24],["C6",.36]].forEach(([f,S])=>o(d+S,yt(f),.09,S>.3?.7:.11,{type:"square"})),l(d+.36,yt("E6"),.1,1),l(d+.36,yt("G6"),.08,1)})},ready(){g(d=>o(d,660,.1,.16,{type:"triangle"}))},go(){g(d=>{o(d,990,.14,.3,{type:"triangle"}),l(d,yt("E7"),.06,.4)})},puff(){g(d=>a(d,.09,.07,{kind:"highpass",from:2400}))},splat(){g(d=>{o(d,1e3,.07,.16,{to:320}),a(d+.12,.2,.3,{from:1300,to:420,sharp:.9}),o(d+.13,400,.13,.15,{type:"triangle",to:250,wobble:30})})},deflect(){g(d=>{o(d,880,.12,.09,{type:"triangle",to:1320}),l(d+.06,yt("E7"),.07,.3)})},tick(){g(d=>o(d,1250,.08,.05,{type:"triangle"}))},whistle(){g(d=>{for(let[f,S]of[[0,.2],[.27,.55]])for(let y=0;y<S;y+=.034)o(d+f+y,y%.068<.03?2500:2700,.07,.034,{type:"square"})})},reveal(){g(d=>{l(d,yt("C6"),.14,2.4),l(d+.14,yt("G6"),.09,1.8),l(d+.3,yt("C7"),.07,1.6);for(let f of["C4","G4","C5","E5"])o(d+.2,yt(f),.035,3.2);for(let f=0;f<12;f++)o(d+.4+Math.random()*1.6,2600+Math.random()*3600,.014,.5)})}}}var _s=.06,xf=new Ae("#f3f7ff"),vf=new Ae("#cfe2ff"),_f={chef:{body:[.062,.92,1],neck:.104,head:.046,scarf:[.104,.033,.0105,.05,.28],arm:[.053,.088],buttons:[.5,.15],eyes:[.36,1],cheek:.0092,stand:.014,top:.245},lang:{body:[.045,.95,1],waist:[.094,.035],neck:.131,head:.037,scarf:[.13,.0255,.0085,.074,.1],arm:[.035,.103],buttons:[.35],eyes:[.31,.9],cheek:.007,stand:0,top:.228},rund:{body:[.064,.78,1.14],neck:.08,head:.041,scarf:[.09,.038,.011,.034,.75],arm:[.064,.068],buttons:[.4,.08,-.24],eyes:[.42,1.12],cheek:.0118,stand:0,top:.186}};function yf(){let i=new On(Il(Pl(256,41,40,3),2.2));return i.wrapS=i.wrapT=Si,i.repeat.set(3,2),{snow:new li({color:xf,roughness:.9,sheen:1,sheenRoughness:.4,sheenColor:vf,normalMap:i,normalScale:new le(.3,.3)}),coal:new rt({color:"#16181b",roughness:.4}),glint:new Gt({color:"#ffffff"}),carrot:new rt({color:"#f07a1c",roughness:.55}),twig:new rt({color:"#4d3626",roughness:.9}),felt:new rt({color:"#17191c",roughness:.8}),gold:new rt({color:"#cfa650",metalness:1,roughness:.28}),tin:new rt({color:"#c3ccd6",metalness:1,roughness:.36}),spark:new rt({color:"#ff9a00",emissive:"#ff7a00",emissiveIntensity:1.1,roughness:.4}),cheek:new Gt({color:"#ff8d8d",transparent:!0,opacity:.42,depthWrite:!1}),cloth:new rt({color:"#fbfbf6",roughness:.9,side:Ot})}}function co(i,e,t,n){let s=Math.cos(n);return new R(i.x+s*Math.sin(t)*e.x,i.y+Math.sin(n)*e.y,i.z+s*Math.cos(t)*e.z)}var Ul=i=>new R(i,i,i);function sr(i,e,t,n){let s=new vt;return s.position.copy(e),s.rotation.set(-n,t,0,"YXZ"),i.add(s),s}function Av(i,e,t,n,s,r){let o=new vt;if(i==="chef")return r(o,new Pt(.046,.046,.0048,36),t.felt),r(o,new Pt(.0292,.031,.054,36),t.felt).position.y=.029,r(o,new Pt(.0316,.0318,.0105,36),t.gold).position.y=.009,o.position.x=.004,{hat:o,rest:e*.72+e*.8,lean:-.16,lumps:[[.006,.059,.004,.017],[-.03,.008,.024,.013]]};if(i==="rund"){r(o,new Pt(.0265,.0345,.044,32),t.tin).position.y=.022;let l=r(o,new Qt(.0345,.0023,8,32),t.tin);l.rotation.x=Math.PI/2,l.position.y=.001;for(let c of[-1,1])r(o,new ut(.0034,10,8),t.gold).position.set(c*.0335,.008,0);return{hat:o,rest:e*.72+e*.6,lean:.2,lumps:[[-.004,.047,.002,.016],[.023,.021,.022,.012]]}}for(let l of[-1,1]){let c=r(o,new ut(.0165,20,14),n);c.scale.x=.6,c.position.set(l*e*1.02,-e,0)}let a=r(o,new Qt(e*1.04,.0028,8,32,Math.PI),s);return a.position.y=-e,{hat:o,rest:e*.72+e,lean:.04,lumps:[[-e*1.04,-e+.015,.004,.012],[e*1.04,-e+.014,-.002,.011]]}}var ho=null;function Rv(){if(ho)return ho;let i=new En;for(let e=0;e<10;e++){let t=e%2?.0068:.0165,n=e/10*Math.PI*2+Math.PI/2;i[e?"lineTo":"moveTo"](Math.cos(n)*t,Math.sin(n)*t)}return i.closePath(),ho=new ts(i,{depth:.003,bevelEnabled:!1}),ho.translate(0,0,-.0015),ho}function Mf(i,e){let t=_f[e.kind]?e.kind:"rund",n=_f[t],s=n.head,r=new vt,o=new vt;r.add(o);let a=(K,te,Me)=>{let fe=new $e(te,Me);return fe.castShadow=!0,fe.receiveShadow=!0,K.add(fe),fe},l=i.snow.clone(),c=new rt({color:e.wool,roughness:.95}),h=new rt({color:e.trim,roughness:.95}),[u,p,m]=n.body,g=new R(u*m,u*p,u*m),x=new R(0,g.y*.95,0),d=a(o,new ut(u,44,30),l);d.scale.set(m,p,m),d.position.copy(x);let f=t==="rund"?.0068:.0056;for(let K of n.buttons)a(o,new ut(f,14,10),i.coal).position.copy(co(x,g.clone().multiplyScalar(.96),0,K));if(n.waist){let[K,te]=n.waist,Me=new R(0,K,0);a(o,new ut(te,40,28),l).position.copy(Me);for(let fe of[.25,-.4])a(o,new ut(.005,14,10),i.coal).position.copy(co(Me,Ul(te*.96),0,fe))}let[S,y,_,P,T]=n.scarf,L=a(o,new Qt(y,_,14,36),c);L.rotation.x=Math.PI/2,L.position.y=S;let I=a(o,new kn(.018,P,.008,2,.003),c);I.position.set(y*.66,S-P*.5-.002,y+.004+Math.sin(T)*P*.4),I.rotation.set(T,0,-.2);let b=new vt;b.position.y=n.neck,o.add(b);let v=new R(0,s*.72,0);a(b,new ut(s,44,30),l).position.copy(v);let C=new vt;b.add(C);let[N,B]=n.eyes;for(let K of[-1,1]){let te=a(C,new ut(.0064*B,18,12),i.coal);te.position.copy(co(v,Ul(s*.95),K*N,.2)),a(C,new ut(.0017*B,10,8),i.glint).position.copy(te.position).add(new R(K*-.0012,.0026,.0052).multiplyScalar(B));let fe=a(sr(C,v,K*.74,-.14),new wi(n.cheek,22),i.cheek);fe.castShadow=!1,fe.position.z=s*1.004}if(t==="chef"){for(let K of[-1,1]){let te=a(sr(C,v,K*N,.47),new kn(.019,.0046,.004,2,.0016),i.coal);te.position.z=s*.975,te.rotation.z=K*.4}if(a(sr(C,v,N,.2),new Qt(.0108,.0015,8,28),i.gold).position.z=s*.99,e.moustache!==!1)for(let K of[-1,1]){let te=a(sr(C,v,K*.2,-.2),new ut(1,16,12),i.felt);te.scale.set(.0155,.0058,.0062),te.position.z=s*.99,te.rotation.z=K*-.42}}if(t==="lang"){for(let K of[-1,1])a(sr(C,v,K*N,.2),new Qt(.0102,.0013,8,28),i.gold).position.z=s*.985;a(sr(C,v,0,.2),new ut(.0016,8,6),i.gold).position.z=s*1;for(let[K,te]of[[.5,.3],[-.45,.2],[.1,-.5]]){let Me=new Pt(9e-4,.0014,.03,6);Me.translate(0,.015,0);let fe=a(b,Me,i.twig);fe.position.set(0,v.y+s*.96,.008),fe.rotation.set(te,0,K)}}let U=new Or(.0078*(s/.043),.036,18);U.translate(0,.018,0);let W=a(C,U,i.carrot);W.rotation.x=Math.PI/2-.32,W.position.set(0,v.y-.002,s*.9);let G=[];for(let K=-2;K<=2;K++)G.push(a(C,new ut(.0034*(s/.043),12,8),i.coal));C.traverse(K=>{K.isMesh&&K!==W&&(K.castShadow=!1)});let Q=t==="rund"?.21:.17;function O(K){G.forEach((te,Me)=>{let fe=Me-2;if(K){let w=Me/G.length*Math.PI*2;te.position.copy(co(v,Ul(s*.98),Math.sin(w)*.1,-.42+Math.cos(w)*.09))}else te.position.copy(co(v,Ul(s*.98),fe*Q,-.47+.035*fe*fe))})}O(!1);let oe=new rt({roughness:.85,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),me=new $e(new ut(s*1.012,40,28,Math.PI/2-.98,1.96,Math.PI/2-.95,1.9),oe);me.position.copy(v),me.visible=!1,b.add(me);function _e(K){oe.map&&oe.map.dispose(),oe.map=K,oe.needsUpdate=!0,me.visible=!!K,C.visible=!K}let{hat:Le,rest:Ce,lean:q,lumps:ue}=Av(t,s,i,c,h,a);Le.position.y=Ce,Le.rotation.z=q,b.add(Le);let ye=[],de=(K,[te,Me,fe,w])=>{let M=a(K,new ut(w,14,10),i.snow);M.scale.set(1.15,.7,1.05),M.position.set(te,Me,fe),M.visible=!1,ye.push(M)};for(let K of ue)de(Le,K);de(o,[-y*.72,S+_*.75,y*.72,.013]);function Ue(K){ye.forEach((te,Me)=>{te.visible=Me<K})}let Fe=new vt;Fe.position.y=v.y+s*1.12,Fe.visible=!1,b.add(Fe);for(let K=0;K<3;K++){let te=a(Fe,Rv(),i.spark);te.castShadow=!1;let Me=K/3*Math.PI*2;te.position.set(Math.sin(Me)*s*1.55,K*.007,Math.cos(Me)*s*1.55)}let Be={};for(let[K,te]of[["left",-1],["right",1]]){let Me=new vt;Me.position.set(te*n.arm[0],n.arm[1],0),o.add(Me);let fe=new Pt(.0022,.003,_s,8);fe.translate(0,_s/2,0),a(Me,fe,i.twig);for(let w of[-1,1]){let M=new Pt(.0014,.0018,.018,6);M.translate(0,.009,0);let H=a(Me,M,i.twig);H.position.y=_s*.78,H.rotation.z=w*.7}Be[K]=Me}let He=a(Be.right,new ut(.0155,18,12),i.snow);He.position.y=_s+.011,He.visible=!1;let J=new vt;J.visible=!1,Be.left.add(J);let re=new Pt(.0013,.0013,.075,6);re.translate(0,_s+.03,0),a(J,re,i.twig),a(J,new Kt(.046,.03),i.cloth).position.set(.024,_s+.05,0);let we=new Ae("#ffffff");function se(K){l.color.copy(xf).lerp(we,K*.92),l.sheenColor.copy(vf).lerp(we,K)}return{root:r,figure:o,head:b,hat:Le,hatRest:Ce,hatLean:q,dizzy:Fe,arms:Be,held:He,flag:J,wool:c,trim:h,nose:W,kind:t,paintColour:we,stand:n.stand,hideDepth:n.top+.06,hatSlip:s*.56,headHeight:n.neck+s*.72,handHeight:n.arm[1]+_s+.012,labelHeight:n.top+.022,setMouth:O,setFace:_e,setPaint:se,setMarks:Ue}}var Cv=[1,1,2,3],Pv=[.05,.075,.11,.16],Iv=[.3,.34,.4,.46];function Sf(i,{phase:e=0,restYaw:t=0}={}){let n={model:i,up:0,speed:0,goal:0,hitAge:-1,wind:0,windGoal:0,cheer:0,cheerGoal:0,peek:!1,nose:1,noseSpeed:0,noseGoal:1,size:1,sizeSpeed:0,sizeGoal:1,paint:0,paintGoal:0,force:0,lean:0,leanGoal:0,dizzy:0,lift:0,look:0,tipAge:-1,hatDrop:0,hatDropGoal:0,isUp:()=>n.up>.6&&n.goal>.5,hit(s=0){n.hitAge=0,n.force=s,i.setMouth(!0),n.windGoal=0},update(s,r){n.speed+=((n.goal-n.up)*240-n.speed*17)*s,n.up+=n.speed*s;let{figure:o,head:a,hat:l,arms:c,held:h,nose:u}=i;i.root.visible=n.up>.01||n.goal>.5,o.position.y=i.stand+(Math.min(n.up,1.15)-1)*i.hideDepth+n.lift;let p=Ct.clamp(1+n.speed*.045,.72,1.32),m=0,g=0;if(n.hitAge>=0){n.hitAge+=s;let y=Math.sin(Math.min(1,n.hitAge/.28)*Math.PI);p*=1-y*Iv[n.force],m=(1-Math.pow(1-Math.min(1,n.hitAge/(.55+n.force*.09)),3))*Math.PI*2*Cv[n.force],g=Math.sin(Math.min(1,n.hitAge/(.55+n.force*.1))*Math.PI),n.hitAge>.95&&(n.hitAge=-1,i.setMouth(!1))}let x=1/Math.sqrt(p);o.scale.set(x,p,x),n.wind+=(n.windGoal-n.wind)*Math.min(1,s*9),n.cheer+=(n.cheerGoal-n.cheer)*Math.min(1,s*6),o.rotation.set(-.2*n.wind,t+m,0);let d=Math.max(0,Math.min(1,n.up));a.rotation.set(0,Math.sin(r*.9+e)*.28*d+n.look,Math.sin(r*2.1+e)*.07*d);let f=0;n.tipAge>=0&&(n.tipAge+=s,f=Math.sin(Math.min(1,n.tipAge/.8)*Math.PI),n.tipAge>.8&&(n.tipAge=-1)),n.hatDrop+=(n.hatDropGoal-n.hatDrop)*Math.min(1,s*9),l.position.y=i.hatRest+g*Pv[n.force]+f*.03-n.hatDrop*i.hatSlip,l.rotation.x=g*(.7+n.force*.25)+f*.5,l.scale.setScalar(1+n.hatDrop*.24),n.lean+=(n.leanGoal-n.lean)*Math.min(1,s*10),l.rotation.z=i.hatLean+Math.sign(i.hatLean)*n.lean,n.dizzy>0&&(n.dizzy-=s,i.dizzy.rotation.y=r*7.5,i.dizzy.position.y=i.hatRest-.004+Math.sin(r*11)*.003),i.dizzy.visible=n.dizzy>0,c.right.rotation.set(-1.25*n.wind,0,-1.05+.85*n.wind),c.left.rotation.set(0,0,1.05-n.cheer*(.75+Math.sin(r*9+e)*.3)),h.visible=n.wind>.35,n.noseSpeed+=((n.noseGoal-n.nose)*230-n.noseSpeed*9)*s,n.nose=Math.max(.3,n.nose+n.noseSpeed*s);let S=1+(n.nose-1)*.12;u.scale.set(S,n.nose,S),n.sizeSpeed+=((n.sizeGoal-n.size)*190-n.sizeSpeed*12)*s,n.size+=n.sizeSpeed*s,i.root.scale.setScalar(Math.max(.5,n.size)),Math.abs(n.paintGoal-n.paint)>.001&&(n.paint+=(n.paintGoal-n.paint)*Math.min(1,s*8),i.setPaint(n.paint))}};return n}function bf(i){let e=new $e(new ut(.092,32,14,0,Math.PI*2,0,Math.PI/2),i.snow);return e.castShadow=!0,e.receiveShadow=!0,e.userData.height=.5,e.scale.set(.001,.001,.001),e}function Ef(i){let e=new $e(new ut(.021,20,14),i.snow);return e.castShadow=!0,e.visible=!1,e}function wf(i){let t=new Float32Array(1560),n=new Float32Array(520*3),s=new Float32Array(520),r=new Float32Array(520),o=new Float32Array(520*3),a=new Float32Array(520),l=new Float32Array(520),c=new xt;c.setAttribute("position",new _t(t,3)),c.setAttribute("aColour",new _t(n,3)),c.setAttribute("aAlpha",new _t(s,1)),c.setAttribute("aSize",new _t(r,1));let h=new pt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1},uSprite:{value:i}},vertexShader:`
      attribute vec3 aColour;
      attribute float aAlpha;
      attribute float aSize;
      uniform float uScale;
      varying vec3 vColour;
      varying float vAlpha;
      void main() {
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * view;
        gl_PointSize = min(64.0, aSize * uScale / -view.z);
        vColour = aColour;
        vAlpha = aAlpha;
      }`,fragmentShader:`
      uniform sampler2D uSprite;
      varying vec3 vColour;
      varying float vAlpha;
      void main() {
        gl_FragColor = vec4(vColour, texture2D(uSprite, gl_PointCoord).a * vAlpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),u=new ai(c,h);u.frustumCulled=!1;let p=new Ae(.95,.97,1),m=0;return{points:u,material:h,emit(g,x,d,f=.5,S=p){for(let y=0;y<x;y++){let _=m;m=(m+1)%520;let P=Math.random()*Math.PI*2,T=Math.random()*d;t.set([g.x,g.y,g.z],_*3),n.set([S.r,S.g,S.b],_*3),o.set([Math.cos(P)*T,(.3+Math.random())*d*f*2,Math.sin(P)*T],_*3),l[_]=.45+Math.random()*.55,a[_]=l[_],r[_]=.006+Math.random()*.013}c.attributes.aColour.needsUpdate=!0},update(g){for(let x=0;x<520;x++){if(a[x]<=0){s[x]=0;continue}a[x]-=g,o[x*3+1]-=1.5*g;for(let d=0;d<3;d++)o[x*3+d]*=1-Math.min(1,g*2.2),t[x*3+d]+=o[x*3+d]*g;s[x]=Math.max(0,a[x]/l[x])*.85}c.attributes.position.needsUpdate=!0,c.attributes.aAlpha.needsUpdate=!0,c.attributes.aSize.needsUpdate=!0}}}function Tf(i){let e=i.getContext("2d"),t=[],n=0,s=0,r=1,o=!1;function a(){r=Math.min(window.devicePixelRatio||1,2),n=i.clientWidth,s=i.clientHeight,i.width=Math.round(n*r),i.height=Math.round(s*r),o=!0}function l(p,m,g,x=2){let d=[{angle:0,distance:0,radius:1}],f=9+Math.floor(Math.random()*5);for(let _=0;_<f;_++)d.push({angle:_/f*Math.PI*2+Math.random()*.5,distance:.6+Math.random()*.5,radius:.22+Math.random()*.3});for(let _=0;_<9;_++)d.push({angle:Math.random()*Math.PI*2,distance:1.25+Math.random()*.8,radius:.04+Math.random()*.1});let S=[];for(let _=0;_<4;_++)S.push({x:(Math.random()*2-1)*.75,length:.7+Math.random()*1.5,width:.1+Math.random()*.13,delay:Math.random()*.35});let y=[];for(let _=0;_<6;_++)y.push({x:(Math.random()*2-1)*.6,y:(Math.random()*2-1)*.6,radius:.12+Math.random()*.2});t.push({x:p,y:m,size:g,life:x,age:0,blobs:d,drips:S,clumps:y})}let c=document.createElement("canvas"),h=c.getContext("2d");function u(p){if(!(!t.length&&!o)){e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,i.width,i.height),o=t.length>0,(c.width!==i.width||c.height!==i.height)&&(c.width=i.width,c.height=i.height);for(let m=t.length-1;m>=0;m--){let g=t[m];if(g.age+=p,g.age>=g.life){t.splice(m,1);continue}let x=Math.min(1,g.age/.11)-1,d=(.5+.5*(1+2.4*x*x*x+1.4*x*x))*g.size,f=Math.max(0,(g.age-.55)/(g.life-.55));h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,c.width,c.height),h.setTransform(r,0,0,r,0,0),h.translate(g.x,g.y+f*f*g.size*1.7),h.shadowColor="rgba(140, 180, 255, 0.5)",h.shadowBlur=g.size*.14,h.fillStyle="#f5f9ff",h.beginPath();for(let S of g.drips){let y=Math.min(1,Math.max(0,g.age-S.delay)/1.1),_=S.width*d;wh(h,S.x*d-_/2,0,_,(.5+S.length*y)*d,_/2)}for(let S of g.blobs){let y=Math.cos(S.angle)*S.distance*d,_=Math.sin(S.angle)*S.distance*d;h.moveTo(y+S.radius*d,_),h.arc(y,_,S.radius*d,0,Math.PI*2)}h.fill(),h.shadowBlur=0,h.fillStyle="rgba(190, 212, 246, 0.16)";for(let S of g.clumps)h.beginPath(),h.arc(S.x*d,S.y*d,S.radius*d,0,Math.PI*2),h.fill();e.globalAlpha=1-f*f,e.drawImage(c,0,0)}e.globalAlpha=1}}return{add:l,draw:u,resize:a,clear:()=>{t.length=0},size:()=>({width:n,height:s})}}var Af=.17;function Rf(i){return{gold:new rt({color:"#dbb25c",metalness:1,roughness:.24,emissive:"#7a5512",emissiveIntensity:.4}),starGold:new rt({color:"#f2c766",metalness:.6,roughness:.3,emissive:"#c98a1e",emissiveIntensity:.85}),wood:new rt({color:"#a8713a",roughness:.7}),steel:new rt({color:"#c8d0da",metalness:1,roughness:.34,side:Ot}),snow:new rt({color:"#f3f7ff",roughness:.9}),paint:new rt({color:i,roughness:.3,emissive:i,emissiveIntensity:.3})}}function mn(i,e,t,n){let s=new $e(e,t);return s.castShadow=n,i.add(s),s}function Rh(i,{shadow:e=!0}={}){let t=new vt;mn(t,new Pt(.0048,.0048,.088,10),i.wood,e).position.y=.026,mn(t,new Qt(.0115,.0038,8,20),i.wood,e).position.y=.079,mn(t,new Pt(.0068,.0092,.016,12),i.gold,e).position.y=-.016;let n=mn(t,new kn(.076,.066,.006,3,.003),i.gold,e);n.position.set(0,-.052,.004),n.rotation.x=.16;for(let r of[-1,1]){let o=mn(t,new kn(.006,.062,.015,2,.002),i.gold,e);o.position.set(r*.036,-.051,.0095),o.rotation.x=.16}let s=mn(t,new ut(.03,20,14),i.snow,e);return s.scale.set(1.05,.82,.42),s.position.set(0,-.05,.012),s.rotation.x=.16,t}function Cf(i){let e=new vt,t=.031,n=l=>.032+(l+t)/(t*2)*.011;mn(e,new Pt(n(t),n(-t),t*2,32,1,!0),i.steel,!0);let s=mn(e,new wi(n(-t),28),i.steel,!0);s.rotation.x=Math.PI/2,s.position.y=-t;let r=mn(e,new Qt(n(t),.0026,8,32),i.steel,!0);r.rotation.x=Math.PI/2,r.position.y=t;let o=mn(e,new wi(n(t)-.0012,32),i.paint,!1);o.rotation.x=-Math.PI/2,o.position.y=t-.005;for(let[l,c]of[[.35,.034],[1.15,.02],[-.75,.027],[2.7,.022],[-2.2,.03]]){let h=mn(e,new ut(.0078,12,10),i.paint,!1);h.scale.set(1,c/.0156,.55);let u=t-c*.45;h.position.set(Math.sin(l)*(n(u)+.002),u,Math.cos(l)*(n(u)+.002)),h.rotation.y=l}let a=mn(e,new Qt(n(t)+.001,.0017,6,28,Math.PI),i.steel,!0);return a.position.y=t,a.rotation.x=-.55,e}function Pf(i){let e=new En;for(let s=0;s<12;s++){let r=s%2?.027:.052,o=s/12*Math.PI*2+Math.PI/2;e[s?"lineTo":"moveTo"](Math.cos(o)*r,Math.sin(o)*r)}e.closePath();let t=new ts(e,{depth:.011,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:3});t.center();let n=new vt;return mn(n,t,i.starGold,!0),n}var Nl=40,If=new R(0,1,0),Lv=[1,1.9,2.9,4.2],Ch=1.8,Lf=7,Df=6,Ph=.55,Dv=5,Uf=1.4,Ih=.62,Nf=.55,Lh=new Ae("#ffd98a"),Ii=i=>i>=8?3:i>=5?2:i>=3?1:0,Uv=[26,34,44,56],Nv=[.5,.6,.7,.85],Fv=[0,8,16,26],Ov=[0,.3,.65,1],Dh=[1,1.3,1.5],Uh=i=>Math.max(0,Math.min(1,i)),uo=i=>i[Math.floor(Math.random()*i.length)];function Ff(i){let{camera:e,cast:t,balls:n,puffs:s,splats:r,sound:o,show:a,toys:l,paint:c}=i,h=[],u=[],p=[],m=new R,g=new R,x=new Xt,d=new $t,f=new Ei,S=new on(If,-.03),y=new R,_=null,P=!1,T=0,L=0,I=0,b=0,v=0,C=0,N=0,B=0,U=-10,W=99,G=!1,Q=null,O=null,oe=0,me=-1,_e=0,Le=0,Ce=0,q=!1,ue=0,ye="",de=0,Ue="none",Fe=F=>{let{root:Z,figure:xe,headHeight:$}=F.model;return Z.position.clone().add(new R(0,(xe.position.y+$)*Z.scale.y,0))},Be=F=>{let{root:Z,figure:xe,handHeight:$}=F.model;return Z.position.clone().add(new R(.05,xe.position.y+$,.02).multiplyScalar(Z.scale.y))};function He(F){return m.copy(F).project(e),{x:(m.x*.5+.5)*i.size.width,y:(-m.y*.5+.5)*i.size.height,scale:i.size.height/(2*Math.tan(Ct.degToRad(e.fov/2))*Math.max(.05,e.position.distanceTo(F)))}}function J(F){let Z=n.find(xe=>!xe.visible);return Z&&(Z.visible=!0,Z.scale.setScalar(1),Z.material=F),Z}let re=(F,Z)=>p.push({at:T+F,action:Z});function A(F){F.winding=-1,F.actor.windGoal=0,F.cocky=0,F.actor.sizeGoal=1,F.nose=0,F.actor.noseGoal=1}function we(F,Z){_=F,P=!0,Q=Z,T=0,L=0,I=0,b=0,v=.3,C=0,N=0,B=0,U=-10,W=99,G=!1,oe=0,Le=0,Ce=0,q=!1,ye=F.lesson?"tap":"",de=0,Ue=F.lesson?"due":"none",p.length=0,o.hurry(!1);for(let xe of t)xe.until=0,xe.rest=.2+Math.random()*.5,xe.throwAt=-1,A(xe),xe.actor.goal=0,xe.actor.cheerGoal=0,xe.actor.paintGoal=0,xe.taken=0,xe.actor.leanGoal=0,xe.model.setMarks(0);a.score(0),a.stars(0),a.time(1),a.streak(0,0,0),a.rush(!1)}function se(){P=!1;for(let F of[...h,...u])F.mesh.visible=!1;h.length=0,u.length=0,p.length=0,O&&(O.model.visible=!1,O=null),me=-1,l.sweep.visible=!1,Le=0,Ce=0,a.power("farbe",0),a.power("stern",0),a.streak(0,0,0),a.rush(!1),N=0;for(let F of t)A(F)}function K(F){let Z=T<Ce?F*2:F;L+=Z,a.score(L);let xe=_.stars.filter($=>L>=$).length;return xe>I&&(I=xe,a.stars(I),o.star(I)),!q&&_.record>0&&L>_.record&&(q="unsaid"),Z}function te(){let F=K(75);o.team(),a.shake(),a.call("Ganzes Team in Firmenfarbe! +"+F,2,i.teamLine);for(let Z of t)s.emit(Fe(Z),34,.8,1,c.colour);re(1.8,()=>{for(let Z of t)Z.actor.paintGoal=0})}function Me(F,Z,{painted:xe=!1,shovel:$=!1,quiet:Se=!1}={}){b++,F.winding=-1,F.until=T+.5,F.rest=1;let ee=$?30:F.points,he="";if(!$){let Ee=Ii(N);N=T-U<Ch?N+1:1,B=Math.max(B,N),ee+=Math.min(25,(N-1)*5),Ii(N)>Ee&&o.heat(Ii(N))}U=T,F.cocky&&(ee+=30*F.cocky,F.cocky=0,F.actor.sizeGoal=1,he="Revanche!"),ye==="tap"&&(ye="",a.call("Los!"),o.go()),F.taken+=1,F.actor.leanGoal=Math.min(.42,F.taken*.06),F.model.setMarks(Math.floor(F.taken/2)),F.nose>=3&&(F.nose=0),F.nose+=1,F.actor.noseGoal=Lv[F.nose];let ge=F.nose===3;ge?(ee+=30,he="Lange Nase!",o.longNose()):o.nose(F.nose);let ze=xe&&F.actor.paintGoal<.5;ze&&(F.actor.paintGoal=1,ee+=15);let Pe=K(ee),Xe=ge?3:$?2:Ii(N);F.actor.hit(Xe),(ge||$)&&(F.actor.dizzy=1.7),s.emit(Z,Uv[Xe],Nv[Xe]),Xe&&s.emit(Z,Fv[Xe],.6,.8,Lh),xe&&s.emit(Z,22,.55,.6,c.colour),Xe===3&&a.shake(!0),o.hit($?1:N,F.model.kind);let D=He(Z);a.float("+"+Pe,D.x,D.y-28,"punkt h"+($?1:Ii(N))),he&&a.float(he,D.x,D.y-62,"bonus");let ve=ze&&t.every(Ee=>Ee.actor.paintGoal>.5),{lines:Y}=F,ie=Se||ve?"":ge?Y.nose:$?Y.shovel:ze?Y.paint:Math.random()<.5?uo(Y.hit):"";ie&&a.float(ie,D.x,D.y-100,"spruch"),ve&&te()}function fe(F,Z){F.actor.goal<.5&&F.model.root.position.copy(uo(F.places)),F.actor.goal=1,F.until=Math.max(F.until,T+Z),F.throwAt=-1,F.winding=-1,F.actor.windGoal=0,F.model.setMouth(!0)}function w(){let{kind:F,model:Z}=O;if(s.emit(Z.position,26,.5,.8,Lh),Z.visible=!1,O=null,F==="schaufel"){o.shovel(),a.call("Schneeschaufel!"),me=0,_e=0;let xe=uo(t);for(let $ of t)fe($,1.3),m.copy($.model.root.position).project(e),re(Ih*(1.3-m.x)/2.6,()=>Me($,Fe($),{shovel:!0,quiet:$!==xe}));re(Ih*.5,a.shake)}else F==="farbe"?(Le=T+Lf,o.paint(),a.call("Farbe frei!")):(Ce=T+Df,o.sparkle(),a.call("Sternstunde!",2,"Alles z\xE4hlt doppelt"))}function M(F,Z){if(!P)return;if(O){let Pe=He(O.model.position);if(Math.hypot(Pe.x-F,Pe.y-Z)<Math.max(52,Pe.scale*.075)){w();return}}for(let Pe=0;Pe<u.length;Pe++){let Xe=u[Pe],D=He(Xe.mesh.position);if(Math.hypot(D.x-F,D.y-Z)<44+D.scale*.03){s.emit(Xe.mesh.position,18,.45),Xe.mesh.visible=!1,u.splice(Pe,1),o.deflect(),a.float("Abgewehrt! +"+K(10),F,Z-30,"punkt");return}}if(C>0)return;let xe=T<Le,$=Ii(N),Se=J(xe?c.ball:$>=2?i.goldBall:i.snowBall);if(!Se)return;Se.scale.setScalar(1+$*.2),C=.15;let ee=null,he=Math.max(58,i.size.height*.085);for(let Pe of t){if(Pe.actor.goal<.5||Pe.actor.up<.3)continue;let Xe=He(Fe(Pe)),D=Math.hypot(Xe.x-F,Xe.y+8-Z);D<he&&(he=D,ee=Pe)}let ge=new R;if(ee)ge.copy(Fe(ee));else{let Pe=new $r;Pe.setFromCamera(new le(F/i.size.width*2-1,-(Z/i.size.height)*2+1),e),Pe.ray.intersectPlane(new on(If,-.05),ge)||ge.copy(e.position).addScaledVector(Pe.ray.direction,2)}let ze=e.localToWorld(new R(.05,-.12,-.42));h.push({mesh:Se,from:ze,to:ge,target:ee,painted:xe,hot:$,age:0,span:.24+ze.distanceTo(ge)*.06}),o.swoosh()}function H(F){let Z=J(i.snowBall);if(!Z)return;let xe=Dh[F.cocky||0];Z.scale.setScalar(xe);let $=Ue==="due";$&&(Ue="flying"),u.push({mesh:Z,from:Be(F),member:F,size:xe,slow:$,age:0,span:$?1.9:.82}),o.swoosh()}function j(F){O={kind:F,model:l[F],age:0,from:i.boxTop.clone(),to:i.toySpot(),landed:!1},O.model.visible=!0,o.toy()}function ae(F){if(!O)return;O.age+=F;let{model:Z}=O;if(O.age<Ph){let ee=O.age/Ph;Z.position.lerpVectors(O.from,O.to,ee),Z.position.y+=Math.sin(Math.PI*ee)*.2+ee*.085,Z.rotation.set(-.4,ee*12.566,.2),Z.scale.setScalar(Uf*(.4+.6*ee));return}O.landed||(O.landed=!0,s.emit(O.to,16,.35),o.land());let xe=O.age-Ph;Z.position.copy(O.to),Z.position.y+=.085+Math.sin(xe*3.2)*.01;let $=Math.atan2(e.position.x-O.to.x,e.position.z-O.to.z);Z.rotation.set(-.4,$+Math.sin(xe*2.4)*.55,.2),Z.scale.setScalar(Uf*(1+Math.exp(-xe*6)*Math.sin(xe*22)*.25));let Se=Dv-xe;Z.visible=Se>1.2||Math.floor(Se*9)%2===0,Se<=0&&(Z.visible=!1,O=null)}function ne(F){if(me<0)return;me+=F;let Z=me/Ih;if(Z>=1){me=-1,l.sweep.visible=!1;return}let xe=Math.tan(Ct.degToRad(e.fov/2))*Nf,$=xe*e.aspect;g.set(Ct.lerp($*1.3,-$*1.3,Z),-xe*.4+Math.sin(Math.PI*Z)*xe*.18,-Nf),l.sweep.position.copy(e.localToWorld(g)),d.set(-.3,0,Ct.lerp(-.8,.8,Z)),l.sweep.quaternion.copy(e.quaternion).multiply(x.setFromEuler(d)),l.sweep.scale.setScalar(xe*1.02/Af),l.sweep.visible=!0,_e+=F*300,f.origin.copy(e.position),f.direction.copy(l.sweep.position).sub(e.position).normalize(),_e>=1&&f.intersectPlane(S,y)&&(s.emit(y,Math.floor(_e),.7,.9),_e-=Math.floor(_e))}function Oe(F){C-=F;for(let ee=h.length-1;ee>=0;ee--){let he=h[ee];he.age+=F;let ge=Math.min(1,he.age/he.span);if(he.mesh.position.lerpVectors(he.from,he.to,ge),he.mesh.position.y+=Math.sin(Math.PI*ge)*.07,he.hot>=2&&!he.painted&&s.emit(he.mesh.position,1,.1,.2,Lh),ge<1)continue;he.mesh.visible=!1,h.splice(ee,1);let{target:ze}=he;ze&&ze.actor.goal>.5&&ze.actor.up>.5&&ze.actor.hitAge<0?Me(ze,he.to,{painted:he.painted}):(s.emit(he.to,10,.3,.5,he.painted?c.colour:void 0),o.puff())}for(let ee=u.length-1;ee>=0;ee--){let he=u[ee];he.age+=F;let ge=Math.min(1,he.age/he.span);if(he.mesh.position.lerpVectors(he.from,e.position,ge*ge*.9),he.mesh.position.y+=Math.sin(Math.PI*ge)*.05,ge<1)continue;let ze=He(he.mesh.position);he.mesh.visible=!1,u.splice(ee,1);let{width:Pe,height:Xe}=i.size,D=Ct.clamp(ze.x,Pe*.25,Pe*.75),ve=Ct.clamp(ze.y,Xe*.3,Xe*.6);if(r.add(D,ve,Math.min(Pe,Xe)*.2*he.size,1.9),o.splat(),a.shake(),a.float("Treffer von "+he.member.name+"!",D,ve,"treffer"),P){let Y=he.member;Y.cocky=Math.min(Dh.length-1,(Y.cocky||0)+1),Y.actor.sizeGoal=Dh[Y.cocky],N=0}}if(ue+=(Ov[P?Ii(N):0]-ue)*Math.min(1,F*2.5),ne(F),!P)return;if(ye==="tap"){de+=F;let ee=t[t.length-1];de>.6&&ee.actor.goal<.5&&(ee.model.root.position.copy(ee.places[ee.places.length-1]),ee.actor.goal=1,o.pop()),ee.until=1.5,de>9&&(ye="");return}T+=F;for(let ee of p.filter(he=>T>=he.at))p.splice(p.indexOf(ee),1),ee.action();N>0&&T-U>=Ch&&(N=0),a.streak(N,Ii(N),N>1?1-(T-U)/Ch:0),q==="unsaid"&&a.call("Neuer Rekord!",1.5)&&(q="said",o.record()),a.time(Math.max(0,1-T/Nl)),a.power("farbe",Uh((Le-T)/Lf)),a.power("stern",Uh((Ce-T)/Df));let Z=Nl-T;if(Z<=10&&!G&&(G=!0,o.hurry(!0),o.rush(),a.rush(!0),a.call("Endspurt!")),Z<=5&&Math.ceil(Z)!==W&&Z>0&&(W=Math.ceil(Z),o.tick()),T>=Nl){let ee={score:L,stars:I,hits:b,streak:B};se(),Q&&Q(ee);return}!O&&oe<_.drops.length&&T>=_.drops[oe][0]&&(j(_.drops[oe][1]),oe++),ae(F),v+=F;let xe=1-Uh(T/(_.number===1?10:4)),$=(G?_.pace*.68:_.pace)*(1+xe*(_.number===1?.9:.4)),Se=t.filter(ee=>ee.actor.goal>.5).length;if(v>$&&Se<t.length){let ee=t.filter(he=>he.actor.goal<.5&&he.rest<=0);if(ee.length){let he=uo(ee),ge=uo(he.places);he.model.root.position.copy(ge),he.actor.goal=1,he.until=T+(_.stay+Math.random())*he.style.stay*(1+xe*.5);let ze=(_.throws+T/Nl*.3)*he.style.throws;if(he.throwAt=T>_.calm&&Math.random()<ze?T+.5+Math.random()*.5:-1,v=0,o.pop(),he.cocky){let Pe=He(ge.clone().setY(ge.y+he.model.headHeight*1.3));a.float(he.lines.cocky,Pe.x,Pe.y-96,"spruch"),o.cocky()}}}for(let ee of t)ee.rest-=F,!(ee.actor.goal<.5)&&(ee.throwAt>0&&T>=ee.throwAt&&ee.actor.hitAge<0&&(ee.winding=0,ee.actor.windGoal=1,ee.throwAt=-1),ee.winding>=0&&(ee.winding+=F,ee.until=Math.max(ee.until,T+.35),ee.winding>ee.style.windup&&(H(ee),ee.winding=-1,ee.actor.windGoal=0)),T>=ee.until&&ee.winding<0&&(ee.actor.goal=0,ee.rest=.45,ee.nose>=3&&(ee.nose=0,ee.actor.noseGoal=1)))}return{start:we,stop:se,tap:M,update:Oe,launchAt:H,toScreen:He,headOf:Fe,handOf:Be,isRunning:()=>P,score:()=>L,stars:()=>I,incoming:()=>u.map(F=>He(F.mesh.position)),hint:()=>{if(!P)return null;let F=t[t.length-1];if(ye==="tap")return F.actor.goal>.5&&F.actor.up>.6?{text:"Antippen",...He(Fe(F))}:null;let Z=u.find(xe=>xe.slow);return Z?{text:"Wegtippen",...He(Z.mesh.position)}:null},toy:()=>O&&O.model.visible?{kind:O.kind,landed:O.landed,...He(O.model.position)}:null,state:()=>({time:T,streak:N,paint:T<Le,double:T<Ce,noses:t.map(F=>F.nose),cocky:t.map(F=>F.cocky||0),taken:t.map(F=>F.taken)}),warmth:()=>ue,skipLesson:()=>{ye="",Ue="none"},setStreak:F=>{N=F,U=T},dropToy:F=>{P&&!O&&j(F)}}}var xs={schaufel:{name:"Schneeschaufel",tag:"Schaufel antippen",hint:"Sie fliegt aus der Schachtel. Antippen, und das ganze Team bekommt eine Ladung Schnee ab."},farbe:{name:"Farbeimer",tag:"Farbe antippen",hint:"Antippen, dann f\xE4rbt jeder Treffer einen Schneemann. Alle drei gef\xE4rbt: Bonus."},stern:{name:"Zimtstern",tag:"Stern antippen",hint:"Antippen, dann z\xE4hlt sechs Sekunden lang alles doppelt."}},fo=[{title:"Schneeballschlacht",neu:"",drops:[],pace:.62,stay:1.5,throws:.45,calm:6,stars:[100,600,1600]},{title:"Die Schneeschaufel",neu:"schaufel",drops:[[8,"schaufel"],[24,"schaufel"]],pace:.58,stay:1.4,throws:.5,calm:2,stars:[150,750,1700]},{title:"Der Farbeimer",neu:"farbe",drops:[[6,"farbe"],[16,"schaufel"],[25,"farbe"]],pace:.55,stay:1.35,throws:.52,calm:2,stars:[200,800,1800]},{title:"Die Sternstunde",neu:"stern",drops:[[5,"farbe"],[12,"stern"],[19,"schaufel"],[26,"farbe"],[32,"stern"]],pace:.52,stay:1.3,throws:.55,calm:2,stars:[250,900,2100]}];function rr(i){let e=fo[fo.length-1];if(i<=fo.length)return{...fo[Math.max(0,i-1)],number:i};let t=i-fo.length;return{...e,number:i,title:"Alles erlaubt",neu:"",pace:Math.max(.4,e.pace-t*.02),stay:Math.max(1,e.stay-t*.05)}}function Of(i,e){return i.number===1?"Das Team von "+e+" fordert zur Schneeballschlacht heraus. Schneem\xE4nner antippen, bevor sie werfen. 40 Sekunden f\xFCr drei Sterne.":i.neu?"Neu: "+xs[i.neu].name+". "+xs[i.neu].hint:"Schaufel, Farbeimer und Zimtstern fliegen aus der Schachtel, und die Schneem\xE4nner werden schneller."}var Bf=["Schneeball-Azubi","Schneeball-Geselle","Schneeball-Profi","Schneeball-Legende"];function zf(i){let e={runde:1,rekord:0};try{let t=JSON.parse(localStorage.getItem(i)||"null");t&&Number.isInteger(t.runde)&&t.runde>=1&&t.runde<1e3&&(e.runde=t.runde),t&&Number.isFinite(t.rekord)&&t.rekord>=0&&(e.rekord=Math.round(t.rekord))}catch{}return e}function Fl(i,e){try{localStorage.setItem(i,JSON.stringify({runde:e.runde,rekord:e.rekord}))}catch{}}var qt=window.GRUSS,tp=!!window.GRUSS_VORSCHAU,go=window.GRUSS_BASIS||"",$l="weihnachtsgruss-vorschau-3",cr="schneeball-1",Bv=[["#7a1422","Bordeaux"],["#0f3d2e","Tannengr\xFCn"],["#14274f","Nachtblau"],["#0d5560","Petrol"],["#1b1d20","Schwarz"],["#e9e1d0","Elfenbein"]],zv="#f1e9d6",ql=.32,kf=.9,Ol=.95,Nh=1.42,Ui=1.85,Bl=[3.15,3.4,3.7],kv=4.5,Hf=3.5,Vt={tall:2.6,round:5.4,all:8.5,card:9.9},Hv=["Zeigt sich nur kurz. Z\xE4hlt dreifach.","Taucht oft auf. Wirft schnell.","Bleibt lange stehen. Wirft selten."],Gv=["chef","lang","rund"],Gf=[{hit:["Nicht auf den Zylinder!","Das gibt Revanche!","Hier bestimme ich!"],nose:"Meine sch\xF6ne Nase!",paint:"Die Farbe kenne ich doch!",shovel:"Wer hat die Schaufel liegen lassen?",cocky:"Chefsache!"},{hit:["Na warte!","Hey!","Guter Wurf!"],nose:"Ich schw\xF6re, die war schon so!",paint:"Steht mir das?",shovel:"Das ist unfair!",cocky:"Volltreffer!"},{hit:["Ich war abgelenkt!","Aua!","Das z\xE4hlt nicht!"],nose:"Nicht die Karotte!",paint:"Sogar der Eimer!",shovel:"Schon wieder Schnee!",cocky:"Ha!"}],Vv=[{stay:.8,windup:.62,throws:1},{stay:1,windup:.48,throws:1.15},{stay:1.25,windup:.7,throws:.7}],Wv=["Serie","L\xE4uft!","Schneesturm!","Lawine!"],Xv="\u201EEndlich alle im Corporate Design!\u201C",Vf=["Na gut. Pause!","Die Schaufel war unfair!","Die Farbe geht nie wieder raus!","Das waren ja Sternstunden!","Wir \xFCben noch."],Yl=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ce=i=>document.getElementById(i),$n=ce("app"),xn=ce("buehne"),Hn=ce("gruss"),Ms=ce("anpassen"),Zl=ce("schilder");document.documentElement.lang="de";var bs=i=>Math.max(0,Math.min(1,i)),gn=Ct.lerp,Wh=i=>i*i*(3-2*i),Wf=i=>1-Math.pow(1-i,3),Ie=JSON.parse(JSON.stringify(qt));Ie.logoImage=null;var lr="",Rn=null,qv=i=>String(i||"").replace(/[<>{}[\]\\/|^`"=?#]/g,"").replace(/\s+/g," ").trim().slice(0,40);function Yv(){let i=new URLSearchParams(location.search),e=qv(i.get("marke"));if(!e)return;lr=e,qt.firma=e,qt.unterschrift="Ihr Team von "+e,qt.logo="",qt.team=[{name:"Chef",rolle:""},{name:"Vertrieb",rolle:""},{name:"Service",rolle:""}];let t=/^#?([0-9a-f]{6})$/i.exec(i.get("farbe")||"");if(t&&(qt.farbe="#"+t[1].toLowerCase()),i.get("logo")==="lokal")try{let s=JSON.parse(localStorage.getItem("schneeball-vorschau-logo")||"null");s&&typeof s.bild=="string"&&s.bild.length<2e6&&/^data:image\/(png|jpeg|webp|svg\+xml)[;,]/.test(s.bild)&&(qt.logo=s.bild)}catch{}let n=e.toLowerCase().replace(/[^a-z0-9äöüß]+/g,"-").slice(0,30);$l+="-v-"+n,cr+="-v-"+n}async function Zv(){try{let i=await fetch(go+"angebot.json",{cache:"no-cache"});if(!i.ok)return;let e=await i.json(),t=n=>typeof n!="string"?"":/^https:\/\/[^\s"'<>]+$/i.test(n)?n:/^[a-z0-9][\w\-./]*$/i.test(n)&&!n.includes("..")?go+n:"";e&&(Rn={seite:t(e.seite),impressum:t(e.impressum),datenschutz:t(e.datenschutz)})}catch{}}async function Jv(){let i=new URLSearchParams(location.search),e=i.get("firma")||"";if(!e){for(let[t,n]of i)if(n===""&&t!=="standbild"&&t!=="neu"){e=t;break}}e=e.toLowerCase().replace(/[^a-z0-9-]/g,"")||"standard";try{let t=await fetch(go+"firmen/"+e+".json",{cache:"no-cache"});if(!t.ok&&e!=="standard"&&(e="standard",t=await fetch(go+"firmen/standard.json",{cache:"no-cache"})),!t.ok)return;let n=await t.json();for(let s of["firma","titel","text","unterschrift","empfaenger"])typeof n[s]=="string"&&(qt[s]=n[s]);typeof n.farbe=="string"&&/^#[0-9a-f]{6}$/i.test(n.farbe)&&(qt.farbe=n.farbe),Array.isArray(n.team)&&n.team.slice(0,3).forEach((s,r)=>{!s||typeof s!="object"||(qt.team[r]={name:String(s.name||"").slice(0,18),rolle:String(s.rolle||"").slice(0,18)},s.bart===!1&&(qt.team[r].bart=!1))}),Array.isArray(n.team)&&n.team.slice(0,3).forEach((s,r)=>{if(!s||!Array.isArray(s.sprueche))return;let o=s.sprueche.filter(a=>typeof a=="string"&&a.trim()).slice(0,4).map(a=>a.trim().slice(0,44));o.length&&(qt.team[r].sprueche=o)}),n.werbung===!1&&(qt.werbung=!1),qt.logo=typeof n.logo=="string"&&/^[\w.-]+\.(svg|png|jpe?g|webp)$/i.test(n.logo)?go+"firmen/"+n.logo:"",e!=="standard"&&($l+="-"+e,cr+="-"+e)}catch{}}function $v(){if(Object.assign(Ie,JSON.parse(JSON.stringify(qt)),{logoImage:null}),tp)try{let e=JSON.parse(localStorage.getItem($l)||"null");if(e){for(let t of["firma","farbe","empfaenger","titel","text","unterschrift"])typeof e[t]=="string"&&(Ie[t]=e[t]);Array.isArray(e.team)&&e.team.slice(0,3).forEach((t,n)=>Object.assign(Ie.team[n],t))}}catch{}let i=np();i&&(Ie.empfaenger=i)}function np(){let i=n=>{if(!n)return"";let s=n;try{s=decodeURIComponent(n)}catch{}return s=s.replace(/--/g,"\0").replace(/[-_+]+/g," ").replace(/\u0000/g,"-"),s=s.replace(/[<>{}[\]\\/|^`"=&?#]/g,"").replace(/\s+/g," ").trim().slice(0,40),s&&s===s.toLowerCase()&&(s=s.replace(/(^|[\s-])\S/g,r=>r.toUpperCase())),s},e=i(location.hash.replace(/^#/,""));if(e)return e;let t=new URLSearchParams(location.search);return i(t.get("name")||t.get("fuer")||"")}window.addEventListener("hashchange",()=>{let i=np();!i||i===Ie.empfaenger||(Ie.empfaenger=i,di(),ar({recipient:!0}))});function zl(){if(tp)try{let{firma:i,farbe:e,empfaenger:t,titel:n,text:s,unterschrift:r,team:o}=Ie;localStorage.setItem($l,JSON.stringify({firma:i,farbe:e,empfaenger:t,titel:n,text:s,unterschrift:r,team:o}))}catch{}}var lt=null,Mt=null,mt=[],yo=[],Bh=[],Jn=null,Et=null,zh=null,or=null,Di=null,St={runde:1,rekord:0},Cn=null,Xh=!1,Li={colour:new Ae("#ffffff"),ball:null},Ye=gf(),vo=Tf(ce("klatsch")),ip=[[-.215,-.165],[.225,-.15],[-.2,.175],[.215,.19]],Kv=[[-.14,-.25],[.15,-.24],[-.14,.23],[.15,.25]],ys=ip.map(([i,e])=>new R(i,0,e)),Ni=()=>lt.size.width/lt.size.height<.8;function Qv(){let i=Ni()?Kv:ip;ys.forEach((e,t)=>{e.set(i[t][0],0,i[t][1]),yo[t].mesh.position.copy(e)});for(let e of mt.slice(1)){let t=e.model.root.position.z>=0?1:0;e.model.root.position.copy(e.places[t])}}var jv=()=>new R(.005,0,Ni()?.35:.25),sp=new R(0,.006,0),Wl=new R(0,gs+.02,0);function Xf(){let i=Ie.empfaenger.trim().split(/\s+/);return/^(herr|frau|dr\.?|prof\.?|familie)$/i.test(i[0])?i.join(" "):i[0]||""}function ey(){let i=new Ae(Ie.farbe),e={h:0,s:0,l:0};return i.getHSL(e),e.l>.72?i.set("#c9992e"):(e.l<.2&&i.setHSL(e.h,e.s,.2),i)}function qh(){let i=Ie.farbe.toLowerCase()==="#e9e1d0";return Ie.logoImage||nf(i?"#7a1422":Ie.farbe,Ie.firma)}function di(){let i=Ie.empfaenger.trim();ce("gruss-fuer").textContent=i?"F\xFCr "+i:"",ce("gruss-titel").textContent=Ie.titel;let e=ce("gruss-text");e.textContent="";let t=String(Ie.text).replace(/\s*\{name\}/g,i?" "+i:"");for(let s of t.split(/\n\s*\n/)){if(!s.trim())continue;let r=document.createElement("p");r.textContent=s.trim(),e.appendChild(r)}ce("gruss-unterschrift").textContent=Ie.unterschrift,Yh(),ce("erwischt-titel").textContent=Xf()?"Erwischt, "+Xf()+"!":"Erwischt!",ce("erwischt-wer").textContent="Das war das Team von "+Ie.firma+".";let n=qh();ce("kopf-logo").src=n instanceof HTMLCanvasElement?n.toDataURL("image/png"):n.src,ce("kopf-logo").alt=Ie.firma,xn.setAttribute("aria-label","Ein Geschenk von "+Ie.firma+(i?" f\xFCr "+i:"")),ce("vorschau-marke").hidden=!lr,by(),mt.forEach((s,r)=>{s.name=Ie.team[r].name||"Team",s.label.firstChild.textContent=s.name,s.label.lastChild.textContent=Ie.team[r].rolle||"",s.label.lastChild.hidden=!Ie.team[r].rolle})}function Yh(){let i=rr(St.runde),e=Ie.empfaenger.trim(),t=i.number===1;ce("start-fuer").textContent=t?e?"F\xFCr "+e:"":"Runde "+i.number+(St.rekord?" \xB7 Rekord "+St.rekord:""),ce("start-titel").textContent=i.title,ce("start-text").textContent=Of(i,Ie.firma)}function rp(){if(Li.colour.copy(ey()),$n.style.setProperty("--brand","#"+Li.colour.getHexString()),!!Mt){for(let i of mt)i.model.wool.color.set(Ie.farbe),i.model.paintColour.copy(Li.colour);for(let i of[Li.ball,or.paint])i.color.copy(Li.colour),i.emissive.copy(Li.colour)}}var qf=0;function ar(i){Mt&&(i.colour&&(Mt.setColour(Ie.farbe),lt.bokeh.setBrand(Ie.farbe),rp()),i.recipient&&Mt.setRecipient(Ie.empfaenger),i.logo&&(clearTimeout(qf),qf=setTimeout(()=>Mt.setLogo(qh()),i.now?0:260)))}function kh(i){return new Promise(e=>{if(!i)return e(null);let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=i})}function ty(i){let t=cn(256,256),n=t.getContext("2d"),s=Math.min(i.naturalWidth,i.naturalHeight);n.drawImage(i,(i.naturalWidth-s)/2,(i.naturalHeight-s)/2,s,s,0,0,256,256),n.globalCompositeOperation="destination-in",n.translate(256/2,256/2),n.scale(.84,1);let r=n.createRadialGradient(0,0,256*.36,0,0,256*.49);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(-256,-256,256*2,256*2);let o=new On(t);return o.colorSpace=Ft,o}function Zh(i,e){[...i.children].forEach((t,n)=>t.classList.toggle("an",n<e))}var Yf={farbe:-1,stern:-1},kl={count:0,left:-1},Ss={weight:0,until:0},Mo={score(i){ce("treffer").textContent=String(i)},time(i){ce("zeit-balken").style.transform="scaleX("+i.toFixed(3)+")"},stars(i){Zh(ce("anzeige-sterne"),i)},power(i,e){let t=Math.round(e*50);if(Yf[i]===t)return;Yf[i]=t;let n=ce("kraft-"+i);n.hidden=t<=0,n.querySelector("b").style.transform="scaleX("+(t/50).toFixed(2)+")",i==="stern"&&ce("anzeige").classList.toggle("doppelt",t>0)},float(i,e,t,n){let s=document.createElement("div");s.className="schwebe "+n,s.textContent=i,s.style.left=Math.max(80,Math.min(lt.size.width-80,e))+"px",s.style.top=Math.max(70,t)+"px",Zl.appendChild(s),setTimeout(()=>s.remove(),n==="blase"?3e3:1400)},call(i,e=2,t=""){if(e<Ss.weight&&tn<Ss.until)return!1;let n=ce("ansage");return n.firstElementChild.textContent=i,n.lastElementChild.textContent=t,n.lastElementChild.hidden=!t,n.className="ansage"+(e<=1?" klein":""),n.hidden=!1,n.offsetWidth,n.classList.add("an"),Ss.weight=e,Ss.until=tn+1.5,!0},shake(i){Yl||($n.classList.remove("wackeln","beben"),$n.offsetWidth,$n.classList.add(i?"beben":"wackeln"))},streak(i,e,t){let n=ce("serie");i!==kl.count&&(kl.count=i,n.hidden=i<2,n.dataset.hitze=String(e),n.firstElementChild.textContent="\xD7"+i,n.children[1].textContent=Wv[e],i>=2&&!Yl&&(n.classList.remove("pump"),n.offsetWidth,n.classList.add("pump")));let s=Math.round(t*30);s!==kl.left&&(kl.left=s,n.lastElementChild.firstElementChild.style.transform="scaleX("+(s/30).toFixed(3)+")")},rush(i){ce("anzeige").classList.toggle("endspurt",i)}},nt="verpackt",nn=0,tn=0,Hh=-1,Xl=0,hr=new Set,Es=[],_o=[],Fi=[],je=(i,e,t)=>{nn<e||hr.has(i)||(hr.add(i),t())};function fi(i){nt=i,nn=0,$n.dataset.phase=i,ce("einstieg").hidden=i!=="verpackt",ce("startkarte").hidden=i!=="karte",ce("anzeige").hidden=i!=="schlacht",ce("vorstellung").hidden=i!=="vorstellung"}function Jh(i){Mt.materials.ribbon.alphaTest=i*1.02;for(let e of Mt.ribbonParts)e.visible=i<.999}function Gh(){let i=Bh.find(e=>!e.visible);return i&&(i.visible=!0,i.scale.setScalar(1),i.material=zh),i}function ny(){Hh=tn,Ye.bang(),Jn.emit(Wl,150,1,.9),Mo.shake(),ys.forEach((e,t)=>{let n=Gh();n&&Es.push({mesh:n,from:Wl.clone(),to:e.clone().setY(.03),age:-t*.06,span:.5,pile:t})});let i=Gh();i&&Es.push({mesh:i,from:Wl.clone(),age:0,span:.5,atViewer:!0})}function iy(i){for(let e=Es.length-1;e>=0;e--){let t=Es[e];t.age+=i;let n=bs(t.age/t.span);if(t.atViewer?t.mesh.position.lerpVectors(t.from,lt.camera.position,n*n*.92):(t.mesh.position.lerpVectors(t.from,t.to,n),t.mesh.position.y+=Math.sin(Math.PI*n)*(t.height||.16)),!(n<1))if(t.mesh.visible=!1,Es.splice(e,1),t.onLand)t.onLand();else if(t.atViewer){let{width:s,height:r}=lt.size;vo.add(s/2,r*.44,Math.min(s,r)*.34,1.65),Ye.caught(),Mo.shake(),ce("erwischt").hidden=!1,Xl=tn+1.5}else yo[t.pile].goal=1,Jn.emit(t.to,14,.35),Ye.puff()}}function sy(i){let e=mt[0],t=i<kf?Math.sin(Math.PI*i/kf):0;Mt.group.rotation.z=Math.sin(i*41)*.04*t,Mt.group.position.y=Math.abs(Math.sin(i*20.5))*.007*t,je("klopf1",.05,Ye.knock),je("klopf2",.3,Ye.knock),je("klopf3",.55,Ye.knock),je("kichern",.6,Ye.giggle);let n=0,s=i>=Ol&&i<Nh;if(s){let o=(i-Ol)/(Nh-Ol);n=.27*Math.sin(Math.min(1,o*2.4)*Math.PI*.5)*(o>.86?(1-o)/.14:1)}if(i>=Ui){let o=Math.min(1,(i-Ui)/.38)-1;n=1.9*(1+2.6*o*o*o+1.6*o*o)}Mt.lid.rotation.x=-n;let r=St.runde===1;if(i<(r?Hf:Bl[2])&&(e.actor.goal=s?.8:0,e.model.hat.visible=!1),Mt.glow.intensity=s?.012:0,je("kichern2",Ol+.12,Ye.giggle),je("zu",Nh,Ye.knock),je("knall",Ui,ny),Jh(bs((i-Ui)/.28)),r){je("vorstellung",Hf,()=>fi("vorstellung"));return}je("pop1",Bl[0],()=>{mt[1].actor.goal=1,Ye.pop(),Ye.music("fight")}),je("pop2",Bl[1],()=>{mt[2].actor.goal=1,Ye.pop()}),je("pop3",Bl[2],()=>{e.model.hat.visible=!0,e.actor.goal=1,Ye.pop(),Ye.giggle()}),je("karte",kv,()=>fi("karte"))}function op(i,e,t){let n=ce("vorstellung");ce("vor-rolle").textContent=i,ce("vor-name").textContent=e,ce("vor-art").textContent=t,n.classList.remove("neu"),n.offsetWidth,n.classList.add("neu")}function Fh(i){let{name:e,rolle:t}=Ie.team[i];op(t||"Das Team von "+Ie.firma,e||"Team",Hv[i]);for(let n of Fi.splice(0))n.note.remove()}function vs(i,e,t=2.2){let n=document.createElement("div");n.className="schwebe blase fest",n.textContent=e,n.style.visibility="hidden",Zl.appendChild(n),Fi.push({member:i,note:n,until:tn+t,spot:null})}var Hl=i=>Et.headOf(i).add(new R(0,.05*i.model.root.scale.y,0));function Zf(i,e,t,n,s){let r=Gh();r&&Es.push({mesh:r,from:i,to:e,age:0,span:t,height:n,onLand:s}),Ye.swoosh()}function Jf(i,e,t){_o.push({member:i,from:i.model.root.position.clone(),to:e.clone(),age:0,span:t}),Ye.pop()}function ry(i){for(let e=_o.length-1;e>=0;e--){let t=_o[e],{model:n,actor:s}=t.member;t.age+=i;let r=bs(t.age/t.span);n.root.position.lerpVectors(t.from,t.to,Wh(r)),n.root.position.x+=Math.sign(t.from.x)*Math.sin(Math.PI*r)*.07,s.lift=Math.abs(Math.sin(Math.PI*2*r))*.075,!(r<1)&&(s.lift=0,s.speed=-3.5,Jn.emit(t.to,12,.3),Ye.puff(),_o.splice(e,1))}}function oy(i){let[e,t,n]=mt;je("v-chef",0,()=>{e.model.hat.visible=!0,e.actor.goal=1,e.actor.sizeGoal=1.12,Ye.pop(),Ye.giggle(),Ye.music("fight"),Fh(0)}),je("v-chef-sagt",.55,()=>vs(e,"Hier bestimme ich!",1.7)),je("v-chef-hut",1.15,()=>{e.actor.tipAge=0,e.actor.cheerGoal=1}),je("v-chef-ruhig",2,()=>{e.actor.cheerGoal=0}),je("v-lang",Vt.tall,()=>{t.model.root.position.copy(t.places[1]),t.actor.goal=1,t.actor.cheerGoal=1,Ye.pop(),Fh(1)}),je("v-lang-sagt",Vt.tall+.45,()=>vs(t,"Und ich treffe immer!",1.25)),je("v-lang-holt-aus",Vt.tall+1.25,()=>{t.actor.cheerGoal=0,t.actor.windGoal=1}),je("v-lang-wirft",Vt.tall+1.75,()=>{t.actor.windGoal=0,Zf(Et.handOf(t),Hl(e),.42,.08,()=>{e.actor.hit(2),e.actor.sizeGoal=1,e.actor.leanGoal=.22,Jn.emit(Hl(e),32,.55),Ye.hit(1,"chef"),Mo.shake(!0),vs(e,"Nicht auf den Zylinder!",1.5),t.actor.cheerGoal=1})}),je("v-lang-freut",Vt.tall+2.3,()=>vs(t,"Volltreffer!",.9)),je("v-rund",Vt.round,()=>{t.actor.cheerGoal=0,n.model.root.position.copy(n.places[1]),n.actor.hatDropGoal=1,n.actor.hatDrop=1,n.actor.goal=1,Ye.pop(),Fh(2)});let s=i-Vt.round;n.actor.look=s>.3&&s<1.7?Math.sin((s-.3)*4.5)*.8:0,je("v-rund-sagt",Vt.round+.4,()=>vs(n,"Wer hat das Licht ausgemacht?",1.45)),je("v-rund-sieht",Vt.round+1.75,()=>{n.actor.hatDropGoal=0,n.actor.cheerGoal=1,Ye.pop()}),je("v-rund-holt-aus",Vt.round+2.1,()=>{n.actor.cheerGoal=0,n.actor.windGoal=1}),je("v-rund-wirft",Vt.round+2.45,()=>{n.actor.windGoal=0,Zf(Et.handOf(n),Hl(n),.62,.3,()=>{n.actor.hit(1),n.actor.dizzy=1.9,Jn.emit(Hl(n),26,.5),Ye.hit(1,"rund"),vs(n,"Aua!",.8)})}),je("v-alle",Vt.all,()=>{op("","Das Team von "+Ie.firma,"Gleich geht es los."),Ye.giggle(),e.actor.cheerGoal=1,Jf(t,t.places[0],.6)}),je("v-rund-los",Vt.all+.4,()=>Jf(n,n.places[0],.65)),je("v-karte",Vt.card,$h)}function $h(){if(nt==="vorstellung"){_o.length=0;for(let i of Es.splice(0))i.mesh.visible=!1;for(let i of Fi.splice(0))i.note.remove();mt[0].model.hat.visible=!0;for(let i of mt)i.model.root.position.copy(i.places[0]),Object.assign(i.actor,{goal:1,cheerGoal:0,windGoal:0,sizeGoal:1,hatDropGoal:0,look:0,lift:0,leanGoal:0,dizzy:0});hr.has("v-chef")||Ye.music("fight"),fi("karte")}}function ap(i,e){Mt.bauble.visible=i>0,Mt.bauble.position.set(0,gn(.052,gs+.158,i)+Math.sin(tn*1.15)*.005*i,0),Mt.bauble.scale.setScalar(gn(.5,1,e)),Mt.bauble.rotation.y=gn(-2.7,ql,i)+Math.sin(tn*.55)*.2*i}function ay(i){let e=mt[0],t=Cn.first,n=t?2.5:1.3,s=t?5.1:2.1;je("frieden",0,()=>{Ye.music(null),Ye.whistle();for(let o of mt)o.actor.goal=1,o.actor.cheerGoal=1;e.model.flag.visible=t}),je("ansage",t?.5:.3,()=>{let o=t?"Waffenstillstand! Es ist ja Weihnachten.":Cn.passed?Cn.record?"Rekord! Respekt.":Vf[Math.min(Vf.length,Cn.round)-1]:"Das \xFCben wir noch einmal!";vs(e,o,t?2.6:1.9)}),je("chef-runter",n,()=>{e.actor.goal=0,e.actor.cheerGoal=0}),je("fahne-weg",n+.4,()=>{e.model.flag.visible=!1}),je("klang",n+.3,Ye.reveal),je("text",s,My);for(let o=1;o<=Cn.stars;o++)je("stern"+o,s+.25+o*.3,()=>{Zh(ce("bilanz-sterne"),o),Ye.star(o)});Cn.record&&je("rekord",s+.55+Cn.stars*.3,Ye.record),je("spieluhr",s+(Cn.record?2.2:1.6),()=>Ye.music("calm"));let r=n+.6;return ap(Wf(bs((i-r)/(t?2.1:1.3))),Wf(bs((i-r)/(t?1.3:.9)))),Wh(bs((i-n-.3)/1.2))}function ly(i){let e=1-Wh(bs(i/.45));return ap(e,e),je("runde",.15,()=>{let t=rr(St.runde);Ye.ready(),Mo.call("Runde "+t.number,2,t.neu?"Neu: "+xs[t.neu].name:"Rekord: "+St.rekord)}),je("los",1.25,()=>{Ye.go(),jh()}),e}function cy(i){let e=.92+.08*Math.sin(tn*1.4);Mt.materials.lining.emissiveIntensity=i*.42*e,Mt.materials.lidLining.emissiveIntensity=i*.1*e,nt!=="knall"&&(Mt.glow.intensity=i*.03*e)}var Qe={azimuth:0,azimuthGoal:0,tilt:0,tiltGoal:0,touched:0,shiftX:0,shiftY:0,roomV:1,roomH:1,width:.41,height:.37,lookY:.088,polar:1.14,base:ql,sway:.1,lookX:0,lookZ:0},po=new R;function hy(){let i=Ni()?{width:.325,height:.37,lookY:.07,polar:1.2,base:.2,sway:.06}:{width:.41,height:.37,lookY:.088,polar:1.14,base:ql,sway:.1},e=Ni()?{width:.53,height:.7,lookY:.1,polar:.9,base:.1,sway:.02}:{width:.84,height:.66,lookY:.12,polar:.98,base:.16,sway:.03};if(nt==="verpackt")return i;if(nt==="knall")return nn<Ui+.45?i:e;if(nt==="vorstellung"){let t=(n,s)=>Ni()?{width:.33,height:.46,lookY:s,polar:1.02,base:.1,sway:.02,x:n.x,z:n.z}:{width:.6,height:.5,lookY:s+.02,polar:1.08,base:.14,sway:.03,x:n.x,z:n.z};return nn<Vt.tall?t(sp,.14):nn<Vt.tall+1.2?t(mt[1].places[1],.12):nn>=Vt.round&&nn<Vt.all?t(mt[2].places[1],.1):e}return nt==="frieden"&&nn>(Cn.first?2.6:1.4)?Ni()?{width:.53,height:.62,lookY:.17,polar:1.05,base:.14,sway:.05}:{width:.82,height:.6,lookY:.19,polar:1.16,base:ql,sway:.06}:e}var xo=ce("kamera"),Ve={on:!1,stream:null,sensed:!1,anchored:!1,following:!1,yaw:0,pitch:.5,reach:1,device:new Xt,away:new Xt,eye:new R},uy=new R(0,0,1),dy=new Xt(-Math.sqrt(.5),0,0,Math.sqrt(.5)),$f=new $t,fy=new Xt,Oi=new R,Kf=new Xt,lp=new $t,py=.09,my=.16;function Jl(i){let e=ce("hinweis");e.textContent=i,e.hidden=!1,clearTimeout(Jl.timer),Jl.timer=setTimeout(()=>{e.hidden=!0},8e3)}function cp(){let e=nt==="verpackt"||nt==="knall"&&nn<Ui+.45?.36:Ni()?.58:.9,t=lt.size.width/lt.size.height;return Math.max(.5,e/(2*Math.tan(Ct.degToRad(lt.cameraView/2))*t))}function Kh(i){if(i.alpha===null||i.beta===null||i.gamma===null)return;let e=Ct.degToRad,t=window.screen.orientation&&typeof window.screen.orientation.angle=="number"?window.screen.orientation.angle:window.orientation||0;$f.set(e(i.beta),e(i.alpha),-e(i.gamma),"YXZ"),Ve.device.setFromEuler($f).multiply(dy).multiply(fy.setFromAxisAngle(uy,-e(t))),Ve.sensed=!0}function Qf(){return Kf.setFromEuler(lp.set(-Ve.pitch,-Ve.yaw,0,"YXZ")),Ve.away.copy(Kf).invert().multiply(Ve.device),Oi.set(0,0,-1).applyQuaternion(Ve.away),[Math.atan2(Oi.x,-Oi.z),Math.asin(Ct.clamp(-Oi.y,-1,1))]}function gy(i){Ve.anchored||(Oi.set(0,0,-1).applyQuaternion(Ve.device),Ve.yaw=Math.atan2(Oi.x,-Oi.z),Ve.pitch=Ct.clamp(Math.asin(Ct.clamp(-Oi.y,-1,1)),-.6,1.25),Ve.anchored=!0);let[e,t]=Qf();if((Math.abs(e)>py||Math.abs(t)>my)&&(Ve.following=!0),!Ve.following)return;let n=1-Math.exp(-i*8);Ve.yaw+=e*n/Math.max(.35,Math.cos(Ve.pitch)),Ve.pitch=Ct.clamp(Ve.pitch+t*n,-.6,1.25),[e,t]=Qf(),Math.abs(e)<.012&&Math.abs(t)<.012&&(Ve.following=!1)}function _y(){if(Ve.stream)for(let i of Ve.stream.getTracks())i.stop();Ve.stream=null,Ve.on=!1,xo.srcObject=null,xo.hidden=!0,window.removeEventListener("deviceorientation",Kh),lt.setThroughCamera(!1),$n.classList.remove("kamera"),eu()}async function Qh(){if(Ve.on)return!0;let i=typeof DeviceOrientationEvent!="undefined";try{i&&typeof DeviceOrientationEvent.requestPermission=="function"&&(i=await DeviceOrientationEvent.requestPermission()==="granted")}catch{i=!1}try{if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("no camera");Ve.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}}})}catch{return Jl("Die Kamera ist hier nicht freigegeben. Es geht ohne sie weiter."),!1}return xo.srcObject=Ve.stream,xo.hidden=!1,xo.play().catch(()=>{}),Ve.on=!0,Ve.sensed=!1,Ve.anchored=!1,Ve.following=!1,Ve.pitch=.5,Ve.reach=cp(),lt.setThroughCamera(!0),$n.classList.add("kamera"),eu(),i&&window.addEventListener("deviceorientation",Kh),Jl(i?"Das Geschenk steht jetzt im Raum. Beim Wegdrehen wandert es mit.":"Ohne Bewegungssensor bleibt das Geschenk in der Bildmitte."),!0}function xy(i,e){let{camera:t}=lt;Ve.sensed&&gy(e);let n=Ct.clamp(Ve.pitch,.3,1.15),s=nt==="knall"&&nn>Ui+.45?Math.min(1,i*4):i;Ve.reach=gn(Ve.reach,cp(),s),Ve.eye.set(0,.1+Ve.reach*Math.sin(n),Ve.reach*Math.cos(n)),t.position.copy(Ve.eye),Ve.sensed?t.quaternion.setFromEuler(lp.set(-n,0,0,"YXZ")).multiply(Ve.away):t.lookAt(0,.1,0),t.clearViewOffset(),t.updateMatrixWorld()}function vy(i,e){if(Ve.on){xy(i,e);return}let{camera:t,size:n,fieldOfView:s}=lt,r=n.width/n.height,o=Hn.hidden?Ms&&!Ms.hidden?Ms:null:Hn,a=o||(nt==="vorstellung"?ce("vorstellung"):null),l={x:0,y:0,v:1,h:1};if(o&&n.width>=900)l={x:.22,y:0,v:1,h:.5};else if(a&&n.width>=900)l={x:0,y:.06,v:.74,h:1};else if(a){let d=122/n.height,f=Math.max(d+.2,1-(a.getBoundingClientRect().height-60)/n.height);l={x:0,y:.52-(d+f)/2,v:(f-d)*.86,h:1}}else(nt==="schlacht"||nt==="anlauf")&&Ni()&&(l={x:0,y:-.06,v:1,h:1});let c=hy(),h=nt==="knall"&&nn>Ui+.45?Math.min(1,i*4):nt==="vorstellung"?Math.min(1,i*1.9):i;for(let d of["width","height","lookY","polar","base","sway"])Qe[d]=gn(Qe[d],c[d],h);Qe.lookX=gn(Qe.lookX,c.x||0,h),Qe.lookZ=gn(Qe.lookZ,c.z||0,h),Qe.shiftX=gn(Qe.shiftX,l.x,i),Qe.shiftY=gn(Qe.shiftY,l.y,i),Qe.roomV=gn(Qe.roomV,l.v,i),Qe.roomH=gn(Qe.roomH,l.h,i),Qe.azimuth=gn(Qe.azimuth,Qe.azimuthGoal,Math.min(1,i*1.6)),Qe.tilt=gn(Qe.tilt,Qe.tiltGoal,Math.min(1,i*1.6));let u=Math.tan(Ct.degToRad(s/2)),p=Math.max(Qe.height/(2*u*Qe.roomV),Qe.width/(2*u*r*Qe.roomH)),m=Yl?0:Math.sin(tn*.27)*Qe.sway*(1-Qe.touched),g=Qe.base+Qe.azimuth+m,x=Qe.polar+Qe.tilt;po.set(Qe.lookX,Qe.lookY,Qe.lookZ),t.position.set(po.x+p*Math.sin(x)*Math.sin(g),po.y+p*Math.cos(x),po.z+p*Math.sin(x)*Math.cos(g)),t.lookAt(po),t.setViewOffset(n.width,n.height,Qe.shiftX*n.width,Qe.shiftY*n.height,n.width,n.height),t.updateMatrixWorld()}function mo(i,e){tn+=i,nn+=i;let t=0;nt==="verpackt"?(Jh(0),Mt.lid.rotation.x=0,Mt.group.rotation.z=0,Mt.group.position.y=0):nt==="knall"?sy(nn):nt==="vorstellung"?oy(nn):nt==="frieden"?t=ay(nn):nt==="anlauf"&&(t=ly(nn)),t=Math.max(t,Et.warmth()*.4),cy(t),vy(e,i),Et.update(i),iy(i),ry(i);for(let n=Fi.length-1;n>=0;n--)tn<Fi[n].until||(Fi[n].note.remove(),Fi.splice(n,1));for(let n of mt)n.actor.update(i,tn);for(let n of yo){n.speed+=((n.goal-n.size)*210-n.speed*15)*i,n.size+=n.speed*i;let s=Math.max(.001,n.size);n.mesh.scale.set(s,s*.52,s)}Jn.update(i),vo.draw(i),Xl&&tn>=Xl&&(ce("erwischt").hidden=!0,Xl=0),Ss.until&&tn>=Ss.until&&(ce("ansage").hidden=!0,Ss.until=0),lt.update(tn,Hh<0?-1:tn-Hh,t)}function Vh(){lt.render();let i=nt==="karte"||nt==="schlacht"||nt==="frieden"&&Hn.hidden;for(let n of mt){let s=i&&n.actor.up>.6&&n.actor.goal>.5;if(n.label.hidden=!s,!s)continue;let{root:r,figure:o,labelHeight:a}=n.model,l=r.position.clone();l.y+=(o.position.y+a)*r.scale.y;let c=Et.toScreen(l);n.label.classList.toggle("frech",n.cocky>0),n.cocky>0&&(n.label.dataset.bonus="Revanche +"+n.cocky*30);let h=nt==="schlacht"?Math.max(c.y,216):c.y;n.label.style.transform="translate("+c.x.toFixed(1)+"px,"+h.toFixed(1)+"px) translate(-50%,-100%)"}for(let n of Fi){let{member:s,note:r}=n;if(!n.spot||s.actor.goal>.5){let{root:o,figure:a,labelHeight:l}=s.model,c=o.position.clone();c.y+=(a.position.y+l-.012)*o.scale.y,n.spot=Et.toScreen(c)}r.style.left=Math.max(120,Math.min(lt.size.width-120,n.spot.x)).toFixed(1)+"px",r.style.top=Math.max(158,n.spot.y).toFixed(1)+"px",r.style.visibility=""}let e=nt==="schlacht"?Et.toy():null,t=nt==="schlacht"&&!e?Et.hint():null;if(Di.hidden=!(e?e.landed:t),e||t){let n=e||t;Di.style.transform="translate("+n.x.toFixed(1)+"px,"+n.y.toFixed(1)+"px)",Di.lastChild.textContent=e?xs[e.kind].tag:t.text}}var jf=0,Gl=0,Oh=0,Vl=0;function hp(i){let e=(i-jf)/1e3||.016,t=Math.min(.1,e);jf=i,mo(t,1-Math.exp(-t*3.2)),Vh(),!document.hidden&&e<.5&&(Gl++,Oh+=e,Gl===75&&(Vl=Oh/Gl>.03?Vl+1:0,Vl>=2&&lt.quality()>0&&(lt.setQuality(lt.quality()-1),Vl=0),Gl=0,Oh=0)),requestAnimationFrame(hp)}function So(){if(!(nt!=="verpackt"||!Mt)){if(Ye.unlock(),hr.clear(),Yl){Jh(1),Mt.lid.rotation.x=-1.9;for(let i of yo)i.goal=1;for(let i of mt)i.actor.goal=1;Ye.music("fight"),fi("karte");return}fi("knall")}}function jh(){nt!=="karte"&&nt!=="anlauf"||(Ye.unlock(),fi("schlacht"),Et.start({...rr(St.runde),record:St.rekord,lesson:St.runde===1&&!Xh},yy))}function yy(i){let e=rr(St.runde),t=i.stars>0,n=i.score>St.rekord,s=rr(St.runde+1);Cn={...i,round:e.number,passed:t,record:n,first:!Xh,unlocked:t?s.neu:"",missing:i.stars<3?e.stars[i.stars]-i.score:0},n&&(St.rekord=i.score),t&&(St.runde+=1),Fl(cr,St),hr.clear(),fi("frieden")}function My(){let{score:i,stars:e,passed:t,record:n,first:s,unlocked:r,missing:o}=Cn;Xh=!0,Hn.classList.toggle("kurz",!s),ce("bilanz").hidden=!1,ce("aktionen").hidden=!1,ce("botschaft").hidden=!s,ce("lesen").hidden=s,ce("lesen").textContent="Gru\xDF lesen",Zh(ce("bilanz-sterne"),0),ce("bilanz-sterne").setAttribute("aria-label",e+" von 3 Sternen"),ce("bilanz-punkte").textContent=String(i),ce("bilanz-rang").textContent=Bf[e];let a=ce("bilanz-hinweis");a.textContent="";let l=document.createElement("b");l.textContent=n?"Neuer Rekord!":"Rekord: "+St.rekord+".";let c=document.createElement("span");c.textContent=e===3?" Drei Sterne!":" Noch "+o+" Punkte bis zum "+["ersten","zweiten","dritten"][e]+" Stern.",a.append(l,c);let h=ce("bilanz-neu");h.hidden=t&&!r,r?(h.firstChild.textContent="Freigeschaltet: "+xs[r].name,h.lastChild.textContent=xs[r].hint):t||(h.firstChild.textContent="Noch "+o+" Punkte bis zum ersten Stern",h.lastChild.textContent="Mit einem Stern geht es in die n\xE4chste Runde."),ce("nochmal").textContent=t?"Runde "+St.runde+" spielen":"Nochmal versuchen",Sy(),Hn.scrollTop=0,Hn.hidden=!1}function Sy(){let i=ce("werbung"),e=ce("werbung-link"),t=Rn?Rn.seite:"",n=lr||t&&Ie.werbung!==!1;i.hidden=!n,n&&(i.firstElementChild.textContent=lr?"Das ist eine Vorschau f\xFCr "+lr+". Mit Ihrem Logo, Ihrem Team und Ihrem Text wird daraus Ihr Gru\xDF an Ihre Kunden."+(t?"":" Antworten Sie einfach auf die Nachricht, mit der dieser Link kam."):"",e.hidden=!t,t&&(e.href=t,e.textContent=lr?"Jetzt bestellen":"Auch so einen Gru\xDF verschicken?"))}function by(){let i=ce("rechtliches"),[e,t]=i.querySelectorAll("a");i.hidden=!(Rn&&(Rn.impressum||Rn.datenschutz)),!i.hidden&&(e.hidden=!Rn.impressum,t.hidden=!Rn.datenschutz,Rn.impressum&&(e.href=Rn.impressum),Rn.datenschutz&&(t.href=Rn.datenschutz))}function up(){if(nt==="frieden"){Hn.hidden=!0,mt[0].model.flag.visible=!1;for(let i of mt)i.actor.goal=0,i.actor.cheerGoal=0;hr.clear(),Ye.unlock(),Ye.music("fight"),Yh(),fi("anlauf")}}var _n=null;xn.addEventListener("pointerdown",i=>{if(nt==="schlacht"){let e=xn.getBoundingClientRect();Et.tap(i.clientX-e.left,i.clientY-e.top);return}_n={x:i.clientX,y:i.clientY,time:performance.now(),moved:0},xn.setPointerCapture(i.pointerId)});xn.addEventListener("pointermove",i=>{if(!_n)return;let e=i.clientX-_n.x,t=i.clientY-_n.y;_n.moved+=Math.hypot(e,t),_n.x=i.clientX,_n.y=i.clientY,_n.moved>8&&(nt==="verpackt"||nt==="frieden")&&(Qe.touched=1,Qe.azimuthGoal=Math.max(-1.3,Math.min(.9,Qe.azimuthGoal-e*.006)),Qe.tiltGoal=Math.max(-.3,Math.min(.14,Qe.tiltGoal-t*.004)))});xn.addEventListener("pointerup",()=>{_n&&_n.moved<=8&&performance.now()-_n.time<450&&So(),_n=null});xn.addEventListener("pointercancel",()=>{_n=null});xn.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),So())});ce("auspacken").addEventListener("click",So);ce("los").addEventListener("click",jh);ce("nochmal").addEventListener("click",up);ce("lesen").addEventListener("click",()=>{let i=ce("botschaft");i.hidden=!i.hidden,Hn.classList.toggle("kurz",i.hidden),Hn.scrollTop=0,ce("lesen").textContent=i.hidden?"Gru\xDF lesen":"Gru\xDF schlie\xDFen"});ce("ueberspringen").addEventListener("click",$h);var Ey=window.matchMedia("(pointer: coarse)").matches,wy=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)&&(!document.featurePolicy||document.featurePolicy.allowsFeature("camera"));function eu(){let i=Ey&&wy,e=i&&!Ve.on;ce("tisch").hidden=!e,ce("einstieg-hinweis").hidden=!e;let t=ce("auspacken");t.textContent=e?"Auf dem Handy auspacken":"Jetzt auspacken",t.className=e?"knopf-fein gross":"knopf-gold gross";let n=ce("start-tisch");n.hidden=!i,n.textContent=Ve.on?"Ohne Kamera spielen":"Auf dem Tisch spielen"}ce("tisch").addEventListener("click",async()=>{Ye.unlock(),ce("tisch").disabled=!0,await Qh(),ce("tisch").disabled=!1,setTimeout(So,Ve.on?1200:500)});ce("start-tisch").addEventListener("click",()=>{Ve.on?_y():Qh()});eu();if(Ms){let i={empfaenger:ce("f-empfaenger"),firma:ce("f-firma"),titel:ce("f-titel"),text:ce("f-text"),unterschrift:ce("f-unterschrift")},e=[0,1,2].map(u=>({name:ce("f-name-"+u),rolle:ce("f-rolle-"+u)})),t=ce("farben"),n=document.createElement("input");n.type="color",n.id="f-farbe",n.setAttribute("aria-label","Eigene Farbe w\xE4hlen");let s=document.createElement("input");s.type="text",s.id="f-hex",s.className="hex",s.maxLength=7,s.spellcheck=!1,s.autocomplete="off",s.placeholder="#1f4da7",s.setAttribute("aria-label","Farbwert, zum Beispiel #1f4da7");let r=()=>{for(let u of Object.keys(i))i[u].value=Ie[u];e.forEach((u,p)=>{u.name.value=Ie.team[p].name,u.rolle.value=Ie.team[p].rolle}),n.value=Ie.farbe,document.activeElement!==s&&(s.value=Ie.farbe);for(let u of t.querySelectorAll("button"))u.setAttribute("aria-pressed",String(u.dataset.farbe===Ie.farbe))},o=u=>{Ie.farbe=u,r(),di(),ar({colour:!0,logo:!Ie.logoImage}),zl()};for(let[u,p]of Bv){let m=document.createElement("button");m.type="button",m.className="farbe",m.dataset.farbe=u,m.style.background=u,m.title=p,m.setAttribute("aria-label",p),m.addEventListener("click",()=>o(u)),t.appendChild(m)}t.append(n,s),n.addEventListener("input",()=>o(n.value)),s.addEventListener("input",()=>{let u=/^#?([0-9a-f]{6})$/i.exec(s.value.trim());u&&o("#"+u[1].toLowerCase())});for(let u of Object.keys(i))i[u].addEventListener("input",()=>{u==="firma"&&Ie.unterschrift==="Ihr Team von "+Ie.firma&&(Ie.unterschrift="Ihr Team von "+i.firma.value,i.unterschrift.value=Ie.unterschrift),Ie[u]=i[u].value,di(),ar({recipient:u==="empfaenger",logo:u==="firma"&&!Ie.logoImage}),zl()});e.forEach((u,p)=>{for(let m of["name","rolle"])u[m].addEventListener("input",()=>{Ie.team[p][m]=u[m].value,di(),zl()})}),ce("f-logo").addEventListener("change",u=>{let p=u.target.files&&u.target.files[0];if(!p)return;let m=new FileReader;m.onload=async()=>{Ie.logoImage=await kh(String(m.result)),di(),ar({logo:!0,now:!0})},m.readAsDataURL(p)}),ce("logo-beispiel").addEventListener("click",()=>{Ie.logoImage=null,ce("f-logo").value="",di(),ar({logo:!0,now:!0})}),ce("f-gesicht").addEventListener("change",u=>{let p=u.target.files&&u.target.files[0];if(!p)return;let m=new FileReader;m.onload=async()=>{let g=await kh(String(m.result));g&&mt.length&&mt[0].model.setFace(ty(g))},m.readAsDataURL(p)}),ce("gesicht-weg").addEventListener("click",()=>{ce("f-gesicht").value="",mt.length&&mt[0].model.setFace(null)}),ce("zuruecksetzen").addEventListener("click",()=>{Object.assign(Ie,JSON.parse(JSON.stringify(qt)),{logoImage:null}),St={runde:1,rekord:0},Fl(cr,St),ce("f-logo").value="",ce("f-gesicht").value="",mt.length&&mt[0].model.setFace(null),r(),di(),ar({colour:!0,recipient:!0,logo:!0,now:!0}),zl()});let a=ce("konfig"),l=()=>JSON.stringify({firma:Ie.firma,logo:"logo-datei.svg",farbe:Ie.farbe,team:Ie.team,titel:Ie.titel,text:Ie.text,unterschrift:Ie.unterschrift},null,2);ce("konfig-zeigen").addEventListener("click",()=>{a.value=l(),ce("konfig-feld").hidden=!1,a.focus(),a.select()}),ce("konfig-kopieren").addEventListener("click",()=>{a.value=l();let u=()=>{ce("konfig-kopieren").textContent="Kopiert",setTimeout(()=>{ce("konfig-kopieren").textContent="Kopieren"},1600)},p=()=>{a.focus(),a.select()};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(a.value).then(u,p):p()});let c=ce("tafel-auf"),h=u=>{Ms.hidden=!u,$n.classList.toggle("anpassen",u),c.setAttribute("aria-expanded",String(u)),u&&r()};c.addEventListener("click",()=>h(Ms.hidden)),ce("tafel-zu").addEventListener("click",()=>h(!1)),Ms.addEventListener("submit",u=>u.preventDefault())}function ep(){$n.classList.add("ohne-3d"),ce("einstieg").hidden=!0;for(let i of["startkarte","anzeige","bilanz","aktionen"])ce(i).hidden=!0;ce("botschaft").hidden=!1,Hn.classList.remove("kurz"),Hn.hidden=!1}function Ty(){let i=window.matchMedia("(pointer: coarse)").matches||Math.min(window.screen.width,window.screen.height)<700;lt=mf(xn,{brand:Ie.farbe,pixelRatioCap:2,samples:i?0:4}),Mt=ff({colour:Ie.farbe}),lt.scene.add(Mt.group);let e=yf();yo=ys.map(r=>{let o=bf(e);return o.position.copy(r),lt.scene.add(o),{mesh:o,size:0,speed:0,goal:0}}),zh=e.snow,Bh=Array.from({length:12},()=>{let r=Ef(e);return lt.scene.add(r),r}),or=Rf(Ie.farbe),Li.ball=new rt({roughness:.35,emissiveIntensity:.25});let t=new rt({color:"#f6d27a",roughness:.3,metalness:.4,emissive:"#d9952a",emissiveIntensity:.9}),n={schaufel:Rh(or),farbe:Cf(or),stern:Pf(or),sweep:Rh(or,{shadow:!1})};for(let r of Object.values(n))r.visible=!1,lt.scene.add(r);Di=document.createElement("div"),Di.className="fund",Di.hidden=!0,Di.append(document.createElement("i"),document.createElement("em")),Zl.appendChild(Di),Jn=wf(lt.sprite),lt.scene.add(Jn.points),lt.scaled.push(Jn);let s=[[sp],[ys[0],ys[2]],[ys[1],ys[3]]];mt=Gv.map((r,o)=>{let a=Mf(e,{kind:r,wool:Ie.farbe,trim:zv,moustache:Ie.team[o].bart!==!1});a.root.position.copy(s[o][0]),lt.scene.add(a.root);let l=document.createElement("div");return l.className="schild",l.hidden=!0,l.append(document.createElement("strong"),document.createElement("span")),Zl.appendChild(l),{model:a,label:l,actor:Sf(a,{phase:o*2.1,restYaw:.2}),places:s[o],points:o===0?30:10,style:Vv[o],name:"",lines:{...Gf[o],hit:(Ie.team[o].sprueche||[]).length?Ie.team[o].sprueche:Gf[o].hit}}}),rp(),Et=Ff({camera:lt.camera,size:lt.size,cast:mt,balls:Bh,snowBall:zh,goldBall:t,puffs:Jn,splats:vo,sound:Ye,show:Mo,toys:n,paint:Li,toySpot:jv,boxTop:Wl,teamLine:Xv})}async function Ay(){await Promise.all([Jv(),Zv()]),Yv(),St=zf(cr),/[?&]neu\b/.test(location.search)&&(St={runde:1,rekord:0},Fl(cr,St));let i=/[?&]runde=(\d{1,2})\b/.exec(location.search);i&&(St.runde=Math.max(1,Number(i[1]))),$v(),di();let e=Promise.all([document.fonts.load('italic 600 96px "Cormorant Garamond"'),document.fonts.load('600 96px "Cormorant Garamond"'),document.fonts.load("500 46px Jost")]).catch(()=>{});await Promise.race([e,new Promise(s=>setTimeout(s,2500))]),Ie.logoImage=await kh(qt.logo);try{Ty()}catch{ep();return}di(),Mt.setRecipient(Ie.empfaenger),Mt.setLogo(qh());let t=()=>{lt.resize(xn.clientWidth,xn.clientHeight),vo.resize(),Qv()};xn.addEventListener("webglcontextlost",s=>{s.preventDefault(),ep()});let n=/[?&]qualitaet=([012])/.exec(location.search);n&&lt.setQuality(Number(n[1])),new ResizeObserver(t).observe(xn),t(),fi("verpackt"),$n.classList.add("bereit"),window.grussTest={vor(s){for(let r=0;r<s-1e-6;r+=1/60)mo(1/60,.2);Vh()},rechne(s){for(let r=0;r<s-1e-6;r+=1/60)mo(1/60,.2)},tippe:So,los:jh,wirf:(s,r)=>Et.tap(s,r),wurf:s=>Et.launchAt(mt[s]),phase:()=>nt,kopf:s=>Et.toScreen(Et.headOf(mt[s])),oben:()=>mt.map(s=>s.actor.goal>.5&&s.actor.up>.6),stand:()=>Et.score(),anflug:()=>Et.incoming(),fund:()=>Et.toy(),lage:()=>Et.state(),wirfAus:s=>Et.dropToy(s),runde:s=>(s&&(St.runde=s,Yh()),St.runde),fortschritt:()=>({...St}),ergebnis:()=>Cn,weiter:up,figur:s=>mt[s],serie:s=>Et.setStreak(s),ohneKlatsch:()=>{vo.add=()=>{}},ton:Ye,kamera:Qh,kameraAn:()=>Ve.on,drehe:(s,r,o)=>Kh({alpha:s,beta:r,gamma:o}),mitte:()=>Et.toScreen(new R(0,.1,0)),bisKarte:()=>{for(let s=0;s<3e3&&nt!=="karte";s++)mo(1/60,.2);return nt},ueberspringe:$h,ohneLektion:()=>Et.skipLesson(),hinweis:()=>Et.hint()},/[?&]standbild\b/.test(location.search)?(mo(0,1),Vh()):requestAnimationFrame(hp)}Ay();})();
