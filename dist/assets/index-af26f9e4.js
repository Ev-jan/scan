import{s as i,j as t,N as B,c as ke,H as tt,E as nt,z as a,f as ot,a as it,b as H,u as rt,d as st,e as G,r as y,g as N,n as g,h as at,O as Se,i as ct,k as lt,p as dt,l as pt,m as mt,o as xt,F as ht,R as ut,P as gt,q as ft,t as bt,v as wt,w as jt,x as yt,X as kt,y as St,A as At,L as vt,S as Ae,B as Ct,C as Dt,D as ve,G as F,I as V,J as Ce,K as Ft,U as Bt,M as Tt,Q as It,T as zt,V as Rt,W as Et,Y as Mt,Z as Wt,_ as Pt}from"./vendor-22aeb4c5.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function Ut({links:e,closeMenu:n}){return t.jsx(Ht,{className:"NavLinks",children:t.jsx("ul",{children:e.map((o,r)=>t.jsx("li",{children:t.jsx(Gt,{to:o.url,onClick:n,children:o.label})},r))})})}const Ht=i.nav`


& ul {
    all: unset;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 49px;

    @media screen and (max-width: 910px) {
        column-gap: 26px;
    }
    @media screen and (max-width: 768px) {
        column-gap: 13px;
    }

    @media screen and (max-width: 650px) {
        flex-flow: column nowrap;
        align-items: center;
        row-gap: 26px;
        margin-top: 141px;
    }
}

& ul>li {
    all: unset;
`,Gt=i(B)`
font-family: ${e=>e.theme.fonts[0]};
color: ${e=>e.theme.colors.primary.black};
font-size: 14px;
text-decoration: none;

&:hover {
    opacity: .7;
}

&.active {
    font-weight: bold;
  }

@media screen and (max-width: 650px) {
color: ${e=>e.theme.colors.primary.white};
    
}

`;function Nt(){return t.jsxs(Vt,{className:"AuthBlock",children:[t.jsx(Yt,{to:"auth/signup",children:"Зарегистрироваться"}),t.jsx(Qt,{to:"auth/signin",children:"Войти"})]})}const Vt=i.div`
flex-shrink: 0;
display: flex;
flex-flow: row nowrap;

@media screen and (max-width: 650px) {
flex-flow: column nowrap;
row-gap: 20.52px;
align-items: center;
max-width: 18.4375rem;
width: 100%;
}
`,Yt=i(B)`
all: unset;
display: inline-block;
text-align: center;
vertical-align: middle;
height: 1.625rem;
border: none;
border-right: solid 2px #029491;
padding-right: 1.125rem;
margin-right: 1.25rem;
background-color: ${e=>e.theme.colors.primary.white};
font-size: ${e=>e.theme.fontSizes[14]};
font-weight: 500;
line-height: 1.625rem;
opacity: 0.4;

@media screen and (max-width: 650px) {
margin-right: 0;
padding-right: 0;
background-color: transparent;
font-size: ${e=>e.theme.fontSizes[16]};
letter-spacing: 0.16px;
font-weight: 400;
color: ${e=>e.theme.colors.primary.white};
        }

&:hover {
    opacity: 1;
    cursor: pointer;
}

`,Qt=i(B)`
all: unset;
display: inline-block;
text-align: center;
vertical-align: middle;
line-height: 1.625rem;
width: 4.0625rem;
height: 1.625rem;
border: none;
border-radius: 5px;
background: ${e=>e.theme.colors.accent.aqua};
font-size: ${e=>e.theme.fontSizes[14]};
font-weight: 500;

@media screen and (max-width: 650px) {
width: 100%;
height: 3.25rem;
line-height: 3.25rem;
    }

&:hover {
    opacity: .4;
    cursor: pointer;
}
`,Lt=ke`
0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }`,Kt=i.svg`
animation: ${Lt} 1s linear infinite;
width: ${e=>e.$size?e.$size:30}px;
height: ${e=>e.$size?e.$size:30}px;
`;function D({size:e=30}){return t.jsxs(Kt,{$size:e,children:[t.jsx("rect",{opacity:"0.5",width:`${e}`,height:`${e}`,fill:"url(#pattern0)",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}),t.jsxs("defs",{children:[t.jsx("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:t.jsx("use",{xlinkHref:"#image0_1_959",transform:"scale(0.01)"})}),t.jsx("image",{id:"image0_1_959",width:"100",height:"100",xlinkHref:"data:image/png;base64,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"})]})]})}const k={baseUrl:"https://gateway.scan-interfax.ru/api/v1",endpoints:{account:{info:"/account/info",login:"/account/login"},objectsearch:{histograms:"/objectsearch/histograms",objectsearch:"/objectsearch"},documents:{documents:"/documents"}}},L={beginner:"beginner",pro:"pro",business:"business"},ee={isTechNews:"Технические новости",isAnnouncement:"Анонс",isDigest:"Сводка"},De=e=>e.replace(/\s/g,""),Fe=e=>/^\+?\d+$/.test(e),$t=e=>{const n=e.match(/^(\+\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/);return n?`${n[1]} ${n[2]} ${n[3]} ${n[4]} ${n[5]}`:De(e)},Ot=e=>Fe(e)?$t(e):De(e),qt=e=>{switch(e){case"sf_student1":return{name:"Алексей К.",image:"/images/user1.png",tariff:"beginner"};case"sf_student2":return{name:"Ибрагим Ж.",image:"/images/user2.png",tariff:"pro"};case"sf_student3":return{name:"Владимир К.",image:"/images/user5.png",tariff:"business"};case"sf_student4":return{name:"Вальдемар К.",image:"/images/user6.png",tariff:"beginner"};case"sf_student5":return{name:"Дмитрий Д.",image:"/images/user1.png",tariff:"pro"};case"sf_student6":return{name:"Евгений П.",image:"/images/user2.png",tariff:"business"};case"sf_student7":return{name:"Иван Ф.",image:"/images/user5.png",tariff:"beginner"};case"sf_student8":return{name:"Илья С.",image:"/images/user6.png",tariff:"pro"};case"sf_student9":return{name:"Кирилл С.",image:"/images/user1.png",tariff:"business"};case"sf_student10":return{name:"Максим С.",image:"/images/user2.png",tariff:"beginner"};default:return{name:"Пользователь",image:"/images/userpic.png",tariff:"pro"}}};function S(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1 ")}function Jt(e){const n=e%10,o=e%100;return n===1&&o!==11?`Найден ${S(e)} вариант`:n>=2&&n<=4&&(o<10||o>=20)?`Найдено ${S(e)} варианта`:`Найдено ${S(e)} вариантов`}function Xt(e){const n=e%10,o=e%100;return n===1&&o!==11?`${S(e)} слово`:n>=2&&n<=4&&(o<10||o>=20)?`${S(e)} слова`:`${S(e)} слов`}function Be(e){const n=new Date(e),o=n.getDate(),r=n.getMonth()+1,s=n.getFullYear();return`${o}.${r}.${s}`}const Zt=e=>{const r=new DOMParser().parseFromString(e,"text/xml").getElementsByTagName("sentence");let s="";const c={replace:l=>{if(l&&l instanceof nt&&l.attribs&&l.attribs.src)return t.jsx(t.Fragment,{})}};return[...r].forEach(l=>{s+=l.textContent+`

`}),tt(s,c)},_t=e=>{const n=e.indexOf('src="https://storage');if(n===-1)return null;const o=e.indexOf('"',n+5);return e.substring(n+5,o)},en=e=>{for(const[n,o]of Object.entries(e))if(o&&n in ee)return ee[n];return null},tn=a.object({login:a.string({required_error:"Введите логин"}).superRefine((e,n)=>{e.startsWith("+")?(e[1]&&+e[1]!=7&&(console.log(e[1]),n.addIssue({code:a.ZodIssueCode.custom,message:"Только номера c кодом +7"})),(e.length!==12||!Fe(e))&&n.addIssue({code:a.ZodIssueCode.custom,message:"Введите корректные данные"})):e.length<3&&n.addIssue({code:a.ZodIssueCode.custom,message:"Введите корректные данные"})}),password:a.string({required_error:"Введите пароль"}).nonempty().min(7,"Пароль должен быть не менее 7 знаков").superRefine((e,n)=>{/\s/.test(e)&&n.addIssue({code:a.ZodIssueCode.custom,message:"Пароль не должен содержать пробелы"})})});a.object({accessToken:a.string(),expire:a.string()});const nn=a.object({eventFiltersInfo:a.object({usedCompanyCount:a.number(),companyLimit:a.number()})}),Te=a.object({inn:a.string({required_error:"Введите ИНН"}).regex(/^[\s\d]+$/,"Недопустимый символ").superRefine((e,n)=>{const o=e.replace(/\s/g,"");o.length>10&&n.addIssue({code:a.ZodIssueCode.custom,message:"Не более 10 цифр"}),o.length<10&&n.addIssue({code:a.ZodIssueCode.custom,message:"Не менее 10 цифр"});const r=o.split("").map(Number);let s=0,c;const d=[2,4,10,3,5,9,4,6,8,0];for(let l=0;l<r.length;l++)s+=r[l]*d[l];c=s%11,c>9&&(c=0),r[9]!=c&&n.addIssue({code:a.ZodIssueCode.custom,message:"Неверный ИНН"}),r.every(l=>l===0)&&n.addIssue({code:a.ZodIssueCode.custom,message:"Неверный ИНН"})}),tonality:a.string(),limit:a.string({required_error:"Введите количество"}).superRefine((e,n)=>{const o=Number(e);e&&(isNaN(o)&&n.addIssue({code:a.ZodIssueCode.custom,message:"Некорректное количество"}),o<1&&n.addIssue({code:a.ZodIssueCode.custom,message:"Некорректное количество"}),o>1e3&&n.addIssue({code:a.ZodIssueCode.custom,message:"Некорректное количество"}),o%1!==0&&n.addIssue({code:a.ZodIssueCode.custom,message:"Некорректное количество"}))}),startDate:a.date().nullable(),endDate:a.date().nullable(),maxFullness:a.boolean(),inBusinessNews:a.boolean(),onlyMainRole:a.boolean(),onlyWithRiskFactors:a.boolean(),excludeTechNews:a.boolean(),excludeAnnouncements:a.boolean(),excludeDigests:a.boolean()}).superRefine((e,n)=>{if((!e.startDate||!e.endDate)&&n.addIssue({code:a.ZodIssueCode.custom,message:"Введите дату",path:["startDate"]}),e.startDate&&e.endDate){const o=new Date,r=o.getFullYear(),s=o.getMonth(),c=o.getDate(),d=o.getHours(),l=o.getMinutes(),p=o.getSeconds(),m=o.getMilliseconds(),x=new Date(r,s,c,d,l,p,m).getTime(),w=e.startDate.getTime(),C=e.endDate.getTime();w>x&&n.addIssue({code:a.ZodIssueCode.custom,message:"Дата начала не может быть позже текущей даты",path:["startDate"]}),C>x&&n.addIssue({code:a.ZodIssueCode.custom,message:"Дата окончания не может быть позже текущей даты",path:["endDate"]}),(e.endDate<e.startDate||e.startDate>e.endDate)&&n.addIssue({code:a.ZodIssueCode.custom,message:"Дата окончания не может быть раньше даты начала",path:["endDate"]})}}),on=Te.transform(e=>{var n,o;return{issueDateInterval:{startDate:(n=e.startDate)==null?void 0:n.toISOString(),endDate:(o=e.endDate)==null?void 0:o.toISOString()},searchContext:{targetSearchEntitiesContext:{targetSearchEntities:[{type:"company",sparkId:null,entityId:null,inn:e.inn.replace(/\s/g,""),maxFullness:e.maxFullness,inBusinessNews:e.inBusinessNews}],onlyMainRole:e.onlyMainRole,tonality:e.tonality,onlyWithRiskFactors:e.onlyWithRiskFactors,riskFactors:{and:[],or:[],not:[]},themes:{and:[],or:[],not:[]}},themesFilter:{and:[],or:[],not:[]}},searchArea:{includedSources:[],excludedSources:[],includedSourceGroups:[],excludedSourceGroups:[]},attributeFilters:{excludeTechNews:!e.excludeTechNews,excludeAnnouncements:!e.excludeAnnouncements,excludeDigests:!e.excludeDigests},similarMode:"duplicates",limit:Number(e.limit),sortType:"sourceInfluence",sortDirectionType:"desc",intervalType:"month",histogramTypes:["totalDocuments","riskFactors"]}}),rn=a.array(a.object({data:a.array(a.object({date:a.string(),value:a.number()})),histogramType:a.string()})).transform(e=>{var d,l;const n=(d=e.find(p=>p.histogramType==="riskFactors"))==null?void 0:d.data.sort((p,m)=>{const f=new Date(p.date),x=new Date(m.date);return f.getTime()-x.getTime()}),o=(l=e.find(p=>p.histogramType==="totalDocuments"))==null?void 0:l.data.sort((p,m)=>{const f=new Date(p.date),x=new Date(m.date);return f.getTime()-x.getTime()});let r=0,s=0;const c=[];for(;r<n.length&&s<o.length;){const p=new Date(n[r].date),m=new Date(o[s].date);p<m?r++:(p>m||(c.push({date:n[r].date,docs:o[s].value,risks:n[r].value}),r++),s++)}return c}),sn=a.object({items:a.array(a.object({encodedId:a.string(),influence:a.number(),similarCount:a.number()}))}),an=sn.transform(e=>e.items.map(n=>n.encodedId)),cn=a.object({id:a.string(),issueDate:a.string(),url:a.string(),source:a.object({name:a.string()}),title:a.object({text:a.string(),markup:a.string()}),content:a.object({markup:a.string()}),attributes:a.object({isTechNews:a.boolean(),isAnnouncement:a.boolean(),isDigest:a.boolean(),wordCount:a.number()}),language:a.string()}),ln=a.object({errorCode:a.number(),errorMessage:a.string()}),dn=a.object({ok:cn}),pn=a.object({fail:ln}),mn=a.union([dn,pn]),xn=a.array(mn),hn=xn.transform(e=>e.filter(o=>"ok"in o).map(o=>{const r=Zt(o.ok.content.markup),s=_t(o.ok.content.markup),c=Xt(o.ok.attributes.wordCount),d=en(o.ok.attributes),l=Be(o.ok.issueDate);return{id:o.ok.id,title:o.ok.title.text,sourceUrl:o.ok.url,sourceName:o.ok.source.name,date:l,content:r,imgUrl:s,wordCountString:c,wordCountNum:o.ok.attributes.wordCount,publicationType:d}})),un=ot({baseUrl:k.baseUrl,prepareHeaders:(e,{getState:n})=>{const o=n().auth.JWT;return o&&e.set("Authorization",`Bearer ${o}`),e.set("Content-Type","application/json"),e.set("Accept","application/json"),e}}),P=it({reducerPath:"scanApi",baseQuery:un,endpoints:e=>({login:e.mutation({query:({login:n,password:o})=>({url:k.endpoints.account.login,method:"POST",body:{login:n,password:o}})}),getAccountInfo:e.query({query:()=>k.endpoints.account.info})})}),{useLoginMutation:gn,useGetAccountInfoQuery:fn}=P,W=H("histogram/getObjectSearchHistograms",async(e,n)=>{const{JWT:o}=n.getState().auth;try{const r=await fetch(`${k.baseUrl}${k.endpoints.objectsearch.histograms}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...e})});if(!r.ok){const d=await r.json();return n.rejectWithValue(d)}const s=await r.json();return Array.isArray(s.data)&&s.data.length===0?n.fulfillWithValue([]):rn.parse(s.data)}catch(r){return n.rejectWithValue({error:r.message})}}),$=H("documents/getPublicationIds",async(e,n)=>{const{JWT:o}=n.getState().auth;try{const r=await fetch(`${k.baseUrl}${k.endpoints.objectsearch.objectsearch}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...e})});if(!r.ok){const d=await r.json();return console.error(d),n.rejectWithValue(d)}const s=await r.json();return an.parse(s)}catch(r){return n.rejectWithValue({error:r.message})}}),O=H("documents/setCurrentPageIds",async(e,n)=>{const o=n.getState().documents,{pageSize:r,publicationIds:s,currentPage:c}=o,d=c*r,l=d+r;return s.slice(d,l)}),U=H("documents/getPublications",async(e,n)=>{const{JWT:o}=n.getState().auth,{currentPageIds:r}=n.getState().documents,{idsStatus:s}=n.getState().documents;if(s==="success"&&r.length!==0)try{const c=await fetch(`${k.baseUrl}${k.endpoints.documents.documents}`,{method:"POST",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({ids:r})});if(!c.ok){const p=await c.json();return console.error(p),n.rejectWithValue(p)}const d=await c.json();return hn.parse(d)}catch(c){return console.error(c),n.rejectWithValue({error:c.message})}else return n.rejectWithValue({error:"No ids to fetch"})}),T=rt,h=st,q=e=>e.profile.user,bn=e=>e.profile.usedCompanyCount,wn=e=>e.profile.companyLimit,Ie=e=>e.histogram.histograms,ze=e=>e.histogram.status,Re=e=>e.histogram.error,jn=e=>e.documents.docs,yn=e=>e.documents.docStatus,kn=e=>e.documents.pageSize,Sn=e=>e.documents.allDocsShown,An={user:null,usedCompanyCount:null,companyLimit:null},Ee=G({name:"profile",initialState:An,reducers:{setUserData:(e,{payload:{login:n}})=>{e.user=qt(n)},setAccountData:(e,{payload:{usedCompanyCount:n,companyLimit:o}})=>{e.usedCompanyCount=n,e.companyLimit=o},clearProfileData:e=>{e.user=null,e.usedCompanyCount=null,e.companyLimit=null}}}),{setUserData:vn,setAccountData:Cn,clearProfileData:Dn}=Ee.actions,Fn=Ee.reducer;function Bn(){const{data:e,isLoading:n}=fn(),o=T();y.useEffect(()=>{if(e)try{const c=nn.parse(e),{usedCompanyCount:d,companyLimit:l}=c.eventFiltersInfo;o(Cn({usedCompanyCount:d,companyLimit:l}))}catch(c){console.error("Error parsing data:",c)}},[e,o]);const r=h(bn),s=h(wn);return t.jsx(Tn,{className:"StatsBlock",children:n?t.jsx(D,{}):t.jsxs(In,{children:[t.jsx(te,{children:"Использовано компаний"}),t.jsx(zn,{children:r}),t.jsx(te,{children:"Лимит по компаниям"}),t.jsx(Rn,{children:s})]})})}const Tn=i.div`
display: flex;
justify-content: center;
width: 175px;
height: 100%;
max-height: 100%;
border-radius: 5px;
background: rgba(217, 217, 217, .3);

& > svg {
  align-self: center;
  margin: 0 auto;
}


@media screen and (max-width: 910px) {
  align-items: start;
  justify-content: start;
  max-width: 132px;
  padding: 5px 10px;
  min-height: 75px;
  max-height: 75px;
}

@media screen and (max-width: 650px) {
  margin-bottom: -141px;
}

`,In=i.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);
justify-content: space-between;
row-gap: 2px;
column-gap: 9px;
background: transparent;

&>*{
    background: transparent;
    padding: 0;
    margin: 0;
}

&>p:nth-of-type(1) {
grid-column: 1/2;
grid-row: 1/2;
align-self: end;
margin-bottom: 3.5px;
justify-self: end;
}

&>p:nth-of-type(2) {
grid-column: 1/2;
grid-row: 2/3;
align-self: start;
margin-top: 3.5px;
justify-self: end;
}

&>div:nth-of-type(1) {
grid-column: 2/3;
grid-row: 1/2;
align-self: end;
}

&>div:nth-of-type(2) {
grid-column: 2/3;
grid-row: 2/3;
align-self: start;
}

@media screen and (max-width: 910px) {
  display: flex;
  flex-flow: column wrap;
  column-gap: 0px;
  & > p {
    font-size: 8px;

  }

  & p:nth-of-type(1) {
    align-self: start;
  }

  &>div:nth-of-type(1) {
  align-self: start;
  }
  
  &>div:nth-of-type(2) {
  align-self: start;
  }
}

`,te=i.p`
font-size: 10px;
font-weight: 400;
opacity: 0.4;
`,zn=i.div`
font-size: 14px;
font-weight: 700;

`,Rn=i.div`
font-size: 14px;
font-weight: 700;
color: #8AC540;
`,En={login:null,JWT:null,expire:null},Me=G({name:"auth",initialState:En,reducers:{setCredentials:(e,{payload:{login:n,JWT:o,expire:r}})=>{e.login=n,e.JWT=o,e.expire=r},clearCredentials:e=>{e.login=null,e.JWT=null,e.expire=null}}}),{clearCredentials:Mn,setCredentials:Wn}=Me.actions,Pn=Me.reducer;function Un({user:e}){const n=N(),o=T(),r=()=>{o(Mn()),o(Dn()),n("/auth/signin")};return t.jsxs(Hn,{className:"UserBlock",children:[t.jsx(Vn,{children:e.name}),t.jsx(Gn,{src:e.image}),t.jsx(Nn,{onClick:r,children:"Выйти"})]})}const Hn=i.div`
display: grid;
grid-template-columns: repeat(2, auto);
grid-template-rows: repeat(2, auto);
grid-template-areas:
    "name avatar"
    "signout avatar";
justify-items: end;
column-gap: 3px;
height: 2rem;
width: 7.5rem;

@media screen and (max-width: 650px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    "avatar"
    "name";
    "signout";
    justify-items: center;
    row-gap: 5px;
}
`,Gn=i.img`
grid-area: avatar;
border-radius: 50px;
width: 32px;
height: 32px;
`,Nn=i.button`
grid-area: signout;
all: unset;
cursor: pointer;
color: rgba(0, 0, 0, .4);
font-size: ${e=>e.theme.fontSizes[10]};
font-weight: 400;

@media screen and (max-width: 650px) {
        color: ${e=>e.theme.colors.primary.white};
    }
`,Vn=i.div`
grid-area: name;
color: rgba(0, 0, 0, .7);
font-size: ${e=>e.theme.fontSizes[14]};
font-weight: 400;
text-align: end;
min-width: 4.6875rem;
@media screen and (max-width: 650px) {
    color: ${e=>e.theme.colors.primary.white};
}
`;function Yn({toggleMenu:e,isMenuHidden:n}){const o=()=>{e()};return t.jsxs(Qn,{htmlFor:"openSidebarMenu",onClick:o,children:[t.jsx(On,{type:"checkbox",$checked:n,defaultChecked:n}),t.jsx(Kn,{$hidden:n}),t.jsx(Ln,{$hidden:n}),t.jsx($n,{$hidden:n})]})}const Qn=i.label`

display: none;
@media (max-width: 650px) {
    position: absolute;
    top: calc(47px - 17px);
    display: block;
    width: 30px;
    height: 25px;
    transition: all 0.3s;
    cursor: pointer;
}

`,J=i.div`
@media (max-width: 650px) {
    transition: all 0.3s;
    position: fixed;
    height: 5px;
    width: 100%;
    background-color: ${e=>e.theme.colors.primary.blue};
}
`,Ln=i(J)`
@media (max-width: 650px) {
    transition: all 0.3s;
    position: relative;
    margin-top: 3px;
    ${e=>e.$hidden&&g`
        transition: all 0.3s;
        box-sizing: border-box;
        opacity: 0;
        background-color: ${n=>n.theme.colors.primary.white};
        `}
}
`,Kn=i(J)`
@media (max-width: 650px) {
    position: relative;
    transition: all 0.3s;
    ${e=>e.$hidden&&g`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(135deg);
        margin-top: 6px;
        background-color: ${n=>n.theme.colors.primary.white};
        `}
}
`,$n=i(J)`
@media (max-width: 650px) {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    margin-top: 3px;
    ${e=>e.$hidden&&g`
        transition: all 0.3s;
        box-sizing: border-box;
        transform: rotate(-135deg);
        margin-top: -13px;
        background-color: ${n=>n.theme.colors.primary.white};
        `}
}
`,On=i.input`
transition: all 0.3s;
box-sizing: border-box;
display: none;
`,qn="/assets/logoFilled-c9064768.svg",We="/assets/logo-a78471d1.svg",Jn=[{label:"Главная",url:""},{label:"Тарифы",url:"tariffs"},{label:"FAQ",url:"faq"}];function Xn(){const e=h(q),o=at().pathname,s=["/auth/signin","/auth/signup"].includes(o),[c,d]=y.useState(!1);return t.jsxs(Zn,{$extend:c,children:[t.jsxs(_n,{$toggle:c,children:[t.jsx(Ut,{links:Jn,closeMenu:()=>d(!1)}),e?t.jsxs(t.Fragment,{children:[t.jsx(Bn,{})," ",t.jsx(Un,{user:e})]}):!s&&t.jsx(Nt,{})]}),t.jsx(Yn,{toggleMenu:()=>d(l=>!l),isMenuHidden:c})]})}const Zn=i.header`
display: flex;
width: 100%;
height: ${e=>e.theme.height.header};
padding: clamp(0.5625rem, 2vh, 0.9375rem) ${e=>e.theme.padding.right} clamp(0.5625rem, 2vh, 0.9375rem) ${e=>e.theme.padding.left};
align-items: center;
justify-content: end;
box-sizing: border-box;
max-width: 90rem;
margin: 0 auto;
overflow: hidden;
background-color: ${e=>e.theme.colors.primary.white};
background-image: url(${qn});
background-repeat: no-repeat;
background-position: -5px -27px;
background-origin: content-box;
background-size: 8.8125rem;
transition: all 0.3s ease-in-out;
align-items: start;
${e=>e.$extend&&g`
    height: 494px;
    background-color: ${e.theme.colors.primary.blue};
    background-image: url(${We});
`}


@media screen and (max-width: 600px) {
    background-size: 6.9375rem;
    background-position: -5px -14px;
}
`,_n=i.div`
display: flex;
width: 60%;
max-width: calc(1440px / 2 + 118px);
height: 100%;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
column-gap: 29px;

@media screen and (max-width: 1100px) {
    column-gap: 13px;
    width: 77%;

    
    & > .StatsBlock {
        order: 1;
    }

    & > .UserBlock {
        order: 3;
    }
    & > .AuthBlock {
        order: 3;
    }
    & > .NavLinks {
        order: 2;
    }
}

@media screen and (max-width: 650px) {
    flex-flow: column nowrap;
    width: max-content;
    margin: 0 auto;
    height: 401px;
    row-gap: 75px;
    padding-bottom: 77px;
    transition: all 0.3s ease-in-out;
}


@media screen and (max-width: 375px) {
    & > .StatsBlock {
        opacity: 0;
    }
`;function eo(){return t.jsx(to,{children:t.jsxs(no,{children:[t.jsxs(oo,{children:[t.jsx("p",{children:"г. Москва, Цветной б-р, 40"}),t.jsx("p",{children:t.jsx("a",{href:"tel:+74957712111",children:"+7 495 771 21 11"})}),t.jsx("p",{children:t.jsx("a",{href:"mailto:info@company.com",children:"info@company.com"})})]}),t.jsx("div",{children:"Copyright 2022"})]})})}const to=i.footer`
display: flex;
width: 100%;
height: ${e=>e.theme.height.footer};
padding: 25px 60px;
padding: 1.5625rem ${e=>e.theme.padding.right} 1.5625rem ${e=>e.theme.padding.left};
align-items: center;
justify-content: space-between;
background-color: ${e=>e.theme.colors.primary.blue};
box-sizing: border-box;
max-width: 1440px;
margin: 0 auto;
background-image: url(${We});
background-repeat: no-repeat;
background-position: 0 -27px;
background-origin: content-box;
background-size: 8.8125rem;

@media screen and (max-width: 600px) {
    background-size: 6.9375rem;
}
`,no=i.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
height: 100%;
width: 77%;
margin-left: auto;
text-align: right;
font-size: ${e=>e.theme.fontSizes[14]};
font-weight: 400;

& > div {
    color: ${e=>e.theme.colors.primary.white};
}
`,oo=i.address`

& > p, & > p > a {
margin: 0;
text-decoration: none;
font-style: normal;
color: ${e=>e.theme.colors.primary.white};
}
`,io=i.div`
max-width: 1440px;
margin: 0 auto;
`,ro=i.div`
position: fixed;
width: 100%;
z-index: 100;
height: auto;
background-color: ${e=>e.theme.colors.primary.white};
`,so=i.div`
height: ${e=>e.theme.height.footer};
background-color: ${e=>e.theme.colors.primary.blue};
`;function ao({children:e}){return t.jsxs(t.Fragment,{children:[t.jsx(ro,{children:t.jsx(Xn,{})}),t.jsx(io,{children:e}),t.jsx(so,{children:t.jsx(eo,{})})]})}function co(){return t.jsx(ao,{children:t.jsx(Se,{})})}const lo={colors:{primary:{blue:"#029491",black:"#000000",white:"#FFFFFF"},accent:{orange:"#FFB64F",aqua:"#7CE3E1",royalBlue:"#5970FF"},disabled:"#D2D2D2"},fonts:["Inter","sans-serif","Ferry Black"],fontSizes:{10:"0.625rem",12:"0.75rem",14:"0.875rem",16:"1rem",18:"1.125rem",20:"1.25rem",25:"1.5625rem",30:"1.875rem"},padding:{top:"clamp(7.625rem, 6vw, 16.2rem)",left:"clamp(0.875rem, 4vw, 3.75rem)",right:"clamp(1.625rem, 6vw, 3.75rem)"},margin:{bottom:"clamp(2.5rem, 6.25vw, 10rem)"},height:{header:"5.8125rem",footer:"8.5625rem"},breakpoints:{s:"375px",m:"650px",l:"1110px"}},po="/assets/Ferry-Black-4687193d.ttf",mo=ct`

@charset 'UTF-8';
@font-face {
    font-family: 'Ferry Black';
    src: url(${po}) format('truetype');
}


* {
    font-family: ${e=>e.theme.fonts[0]}, sans-serif;
    box-sizing: border-box;
    scrollbar-width: none;
}

::-webkit-scrollbar {
    display: none;
  }
  

.fade-enter {
    opacity: 0.01;
  }
  
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

/* Arrows */
.slick-prev,
.slick-next
{
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus
{
    color: transparent;
    outline: none;
    background: transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before
{
    opacity: 1;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before
{
    opacity: .25;
}

.slick-prev:before,
.slick-next:before
{
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;

    opacity: .75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.slick-prev
{
    left: -25px;
}
[dir='rtl'] .slick-prev
{
    right: -25px;
    left: auto;
}
.slick-prev:before
{
    content: '←';
}
[dir='rtl'] .slick-prev:before
{
    content: '→';
}

.slick-next
{
    right: -25px;
}
[dir='rtl'] .slick-next
{
    right: auto;
    left: -25px;
}
.slick-next:before
{
    content: '→';
}
[dir='rtl'] .slick-next:before
{
    content: '←';
}

/* Dots */
.slick-dotted.slick-slider
{
    margin-bottom: 30px;
}

.slick-dots
{
    position: absolute;
    bottom: -25px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
}
.slick-dots li
{
    position: relative;

    display: inline-block;

    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;

    cursor: pointer;
}
.slick-dots li button
{
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus
{
    outline: none;
}
.slick-dots li button:hover:before,
.slick-dots li button:focus:before
{
    opacity: 1;
}
.slick-dots li button:before
{
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: .25;
    color: black;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.slick-dots li.slick-active button:before
{
    opacity: .75;
    color: black;
}


.slick-list
{
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
}
.slick-track:before,
.slick-track:after
{
    display: table;

    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;

    height: auto;

    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

.slick-arrow {
    display: none !important;
    display: block;
}

.slick-dots {
    display: none !important;
}

.slick-track {
    display: flex;
    align-items: stretch;

}`,ne={histograms:[],status:"idle",error:null},Pe=G({name:"histogram",initialState:ne,reducers:{resetHistogramState:()=>ne},extraReducers:e=>{e.addCase(W.pending,n=>{n.status="loading"}).addCase(W.rejected,(n,o)=>{n.status="failed",n.error=o.error.message!==void 0?o.error.message:null}).addCase(W.fulfilled,(n,o)=>{n.status="success",n.histograms=o.payload,console.log(n.histograms,n.status)})}}),{resetHistogramState:xo}=Pe.actions,ho=Pe.reducer,oe={docs:[],docStatus:"idle",docError:null,allDocsShown:!1,publicationIds:[],currentPageIds:[],pageSize:10,currentPage:0,idsStatus:"idle",idsError:null},Ue=G({name:"documents",initialState:oe,reducers:{resetDocState:()=>oe},extraReducers:e=>{e.addCase($.rejected,(n,o)=>{n.idsStatus="failed",n.idsError=o.error.message!==void 0?o.error.message:null}).addCase($.fulfilled,(n,o)=>{n.idsStatus="success",n.publicationIds=o.payload}).addCase(U.rejected,(n,o)=>{n.docStatus="failed",n.docError=o.error.message!==void 0?o.error.message:null}).addCase(U.fulfilled,(n,o)=>{n.docStatus="success";const r=o.payload.filter(s=>!n.docs.some(c=>c.id===s.id));n.docs=[...n.docs,...r]}).addCase(O.fulfilled,(n,o)=>{n.currentPageIds=o.payload;const{pageSize:r,currentPage:s}=n;s*r+r>n.currentPageIds.length?n.allDocsShown=!0:n.currentPage+=1})}}),{resetDocState:uo}=Ue.actions,go=Ue.reducer,fo=lt({histogram:ho,documents:go,auth:Pn,profile:Fn,[P.reducerPath]:P.reducer}),bo={key:"root",storage:xt},wo=dt(bo,fo),He=pt({reducer:wo,middleware:e=>e({serializableCheck:{ignoredActions:[ht,ut,gt,ft,bt,wt]}}).concat(P.middleware)}),jo=mt(He);function yo({children:e}){return t.jsx(jt,{store:He,children:t.jsx(yt,{loading:null,persistor:jo,children:t.jsxs(kt,{theme:lo,children:[t.jsx(mo,{}),e]})})})}function j(){var o;const e=St();let n;return At(e)?n=((o=e.error)==null?void 0:o.message)||e.statusText:e instanceof Error?n=e.message:typeof e=="string"?n=e:(console.error(e),n="Unknown error"),t.jsxs("div",{className:"error-container",style:{minHeight:"100vmin",textAlign:"center"},children:[t.jsx("h2",{children:"Что-то пошло не так 😢"}),t.jsxs("p",{children:["Ошибка: ",n]}),t.jsx("p",{children:"Попробуйте перезагрузить страницу или вернитесь на главную"}),t.jsx(vt,{to:"/",children:"На главную"})]})}const Ge="/assets/hero-f9d09310.png";function A({children:e,className:n,elementType:o,hue:r,isLoading:s,disabled:c,onClick:d,to:l,type:p,target:m}){if(o==="button")return t.jsx(ko,{className:n,disabled:c,onClick:d,type:p,children:s?t.jsx(D,{}):e});if(o==="link"&&r==="light")return t.jsx(Ao,{to:l,className:n,$disabled:c||!1,target:m,children:s?t.jsx(D,{}):e});if(o==="link")return t.jsx(So,{to:l,className:n,$disabled:c||!1,target:m,children:s?t.jsx(D,{}):e})}const X=g`
all: unset;
position: relative;
width: 100%;
max-width: 335px;
height: 59px;
isolation: isolate;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
cursor: pointer;

&:disabled {
    background: rgba(210, 210, 210, 1);
    color: ${e=>e.theme.colors.primary.black};
    cursor: not-allowed;
}
&::after {
    content: "";
    border-radius: 5px;
    position: absolute;
    z-index: -1;
    background: ${e=>e.theme.colors.primary.white};
    opacity: 0.4;
    transform-origin: right;
    inset: 0;
    scale: 0 1;
    transition: scale 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

&:hover::after {
    scale: 1 1;
    transform-origin: left;
}

&:hover {
  filter: hue-rotate(310deg);
}

&:active::after {
    transform-origin: center;
    transition: 0s;
    transform: scale(0, 0);
}
`,ko=i.button`
${X}
background: ${e=>e.theme.colors.accent.royalBlue};
color: ${e=>e.$isLoading?"transparent":e.theme.colors.primary.white};
`,So=i(B)`
${X}
color: ${e=>e.$disabled?e.theme.colors.primary.black:e.theme.colors.primary.white};
background: ${e=>e.$disabled?e.theme.colors.disabled:e.theme.colors.accent.royalBlue};
`,Ao=i(B)`
${X}
color: ${e=>(e.$disabled,e.theme.colors.primary.black)};
background: ${e=>e.$disabled?e.theme.colors.disabled:e.theme.colors.accent.aqua};
`,vo=i.h1`
color: ${e=>e.theme.colors.primary.black};
font-family: ${e=>e.theme.fonts[2]};
font-size: 60px;
font-weight: 900;
text-transform: uppercase;
margin: 0;
margin-bottom: 20px;

@media screen and (max-width: 768px){
    font-size: 28px;
}
`,v=i.p`
display: flex;
max-width: 534px;
margin: 0;
padding: 0;
color: ${e=>e.theme.colors.primary.black};
font-family: ${e=>e.theme.fonts[0]};
font-size: 20px;
font-weight: 400;

@media screen and (max-width: 768px){
    font-size: ${e=>e.theme.fontSizes[18]};
}
`,Co=i.section`
display: flex;
width: 100%;
background: url(${Ge}) no-repeat right;
background-size: contain;
margin-bottom: 109px;

@media screen and (max-width: 1175px){
    flex-direction: column;
    background: none;
}
`,Do=i(v)`
margin-bottom: 70px;
`,Fo=i.div`
display: flex;
flex-direction: column;`,Bo=i.div`
display: none;
  position: relative;
  width: 100%;
  padding-top: calc((327 / 351) * 100%);

  @media screen and (max-width: 1175px) {
    display: block;
    padding-top: calc((327 / 375) * 100%);
  }
`,To=i.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;function Io(){const e=h(q);return t.jsxs(Co,{children:[t.jsxs(Fo,{children:[t.jsxs(vo,{children:["сервис по поиску ",t.jsx("br",{}),"публикаций",t.jsx("br",{}),"о компании ",t.jsx("br",{}),"по ее ИНН"]}),t.jsx(Do,{children:"Комплексный анализ публикаций, получение данных в формате PDF на электронную почту."}),t.jsx(A,{elementType:"link",to:e?"/search":"/auth/signin",children:"Запросить данные"})]}),t.jsx(Bo,{children:t.jsx(To,{src:Ge})})]})}const zo="/assets/heroWhyWe-7dde0615.png",Ne=i.h2`
color: ${e=>e.theme.colors.primary.black};
font-family: ${e=>e.theme.fonts[2]};
font-size: 45px;
font-weight: 900;
text-transform: uppercase;
margin: 0;
margin-bottom: 70px;

@media screen and (max-width: 768px){
    font-size: 28px;
}
`,Ve="/assets/chevron-06a7492a.svg",Ro={dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:1020,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]},Eo=i.div`
position: relative;
display: flex;
flex-flow: row nowrap; 
align-items: center;
width: 100%;
height: auto;
@media screen and (max-width: 768px) {

}
`,Mo=i(Ae)`
width: 100%;
position: relative;
padding: 0 20px;
display: block;


@media screen and (max-width: 768px) {
padding: 0 10px;
}

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

-webkit-touch-callout: none;
-khtml-user-select: none;
-ms-touch-action: pan-y;
touch-action: pan-y;
-webkit-tap-highlight-color: transparent;

`,Ye=i.button`
all: unset;
position: absolute;
top: calc(50% - 19.5px);
right: 0;
width: 39px;
height: 39px;
background: url(${Ve}) no-repeat center;
opacity: .4;
cursor: pointer;
z-index: 1;

@media screen and (max-width: 768px) {
  right: -10px;
}
`,Wo=i(Ye)`
transform: rotate(180deg);
left: 0;
@media screen and (max-width: 768px) {
  left: -10px;
}
`;function Po({slides:e}){const n=y.useRef(null),o=()=>{var s;(s=n==null?void 0:n.current)==null||s.slickNext()},r=()=>{var s;(s=n==null?void 0:n.current)==null||s.slickPrev()};return t.jsxs(Eo,{children:[t.jsx(Wo,{onClick:r}),t.jsx(Mo,{ref:n,...Ro,children:e}),t.jsx(Ye,{onClick:o})]})}const ie={dots:!1,infinite:!1,speed:500,slidesToShow:8,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1307,settings:{slidesToShow:7,slidesToScroll:3,infinite:!1,dots:!1}},{breakpoint:1174,settings:{slidesToShow:6,slidesToScroll:2,infinite:!1,dots:!1}},{breakpoint:1041,settings:{slidesToShow:5,slidesToScroll:2,infinite:!1,dots:!1}},{breakpoint:908,settings:{slidesToShow:4,slidesToScroll:2,infinite:!1,dots:!1}},{breakpoint:775,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,dots:!1}},{breakpoint:610,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!1}}]};function Uo({slides:e,loading:n}){const o=y.useRef(null),[r,s]=y.useState(0),c=()=>{var l;(l=o==null?void 0:o.current)==null||l.slickNext()},d=()=>{var l;(l=o==null?void 0:o.current)==null||l.slickPrev()};return t.jsxs(Ho,{children:[t.jsx(Vo,{onClick:d,disabled:r===0||n}),t.jsxs(Go,{children:[t.jsx("span",{children:"Период"}),t.jsx("span",{children:"Всего"}),t.jsx("span",{children:"Риски"})]}),t.jsx(No,{ref:o,...ie,afterChange:l=>s(l),children:n?t.jsxs(t.Fragment,{children:[t.jsx(Yo,{children:t.jsx(D,{})}),t.jsx(Qo,{children:"Загружаем данные"})]}):e}),t.jsx(Qe,{onClick:c,disabled:r>=e.length-ie.slidesToShow||n})]})}const Ho=i.div`
position: relative;
display: flex;
flex-flow: row nowrap; 
align-items: center;
width: 94%;
margin: 0 auto;
margin-bottom: 107px;
height: auto;
border-radius: 10px;
border: 2px solid ${e=>e.theme.colors.primary.blue};

@media screen and (max-width: 600px) {
  width: 92%;
  }

@media screen and (max-width: 600px) {
  flex-flow: column nowrap;
  width: 86%;
  border: none;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
  margin-bottom: 57px;
  }
`,Go=i.div`
display: flex;
flex-flow: column nowrap;
flex-shrink: 0;
align-items: start;
justify-content: space-between;
width: 133px;
height: 158px;
padding: 20px 0 28px 17px;
background-color: ${e=>e.theme.colors.primary.blue};
color: ${e=>e.theme.colors.primary.white};
font-family: ${e=>e.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
border-radius: 6px 0 0 6px;

@media screen and (max-width: 600px) {
  flex-flow: row nowrap;
  height: 70px;
  width: 100%;
  padding: 0 15px;
  align-items: center;
  height: 70px;
  border-radius: 6px 6px 0 0;
  }

`,No=i(Ae)`
width: calc(100% - 133px);
position: relative;
padding-right: 10px;
display: block;



@media screen and (max-width: 600px) {
  width: 100%;
  padding: 0 10px;
}

-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

-webkit-touch-callout: none;
-khtml-user-select: none;
-ms-touch-action: pan-y;
touch-action: pan-y;
-webkit-tap-highlight-color: transparent;

`,Qe=i.button`
all: unset;

position: absolute;
top: calc(50% - 19.5px);
right: -41px;
width: 39px;
height: 39px;
background: url(${Ve}) no-repeat center;
background-color: transparent;
cursor: pointer;
z-index: 1;

&:disabled {
  cursor: default;
  opacity: 0.2;
}

@media screen and (max-width: 600px) {
  top: calc(75% - 19.5px);
}
`,Vo=i(Qe)`
transform: rotate(180deg);
left: -41px;
`,Yo=i.div`
margin: 0 auto;
width: 200px;
text-align: center;

& > svg, rect {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 600px) {
  & > svg, rect {
    width: 36px;
    height: 36px;
  }
}
`,Qo=i.div`
margin: 0 auto;
width: 200px;
font-size: 18px;
font-weight: 400;
text-align: center;

@media screen and (max-width: 600px) {
display: none;
}
`;function Le({slides:e,views:n="Main",loading:o}){return n==="Main"?t.jsx(Po,{slides:e}):t.jsx(Uo,{slides:e,loading:o})}const re="/assets/clock-478e8446.svg",se="/assets/search-eb173a68.svg",ae="/assets/shield-33543671.svg",Lo=i.div`
display: flex;
flex-flow: column nowrap;
justify-content: start;
align-items: start;
height: 100%;
min-height: 12.6875rem;
margin: 20px 20px;
padding: 22px 20px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

@media screen and (max-width: 1325px){
min-height: 14.5rem;

}

@media screen and (max-width: 1020px){
  min-height: 12.75rem;
  
  }

@media screen and (max-width: 870px){
  min-height: 230px;
  
  }

@media screen and (max-width: 830px){
  min-height: 240px;
  
  }

@media screen and (max-width: 666px){
  min-height: 270px;
  
  }

@media screen and (max-width: 600px){
  min-height: 203px;

}
@media screen and (max-width: 430px){
  min-height: 223px;
}

@media screen and (max-width: 390px){
  min-height: 280px;
}
`,Ko=i.p`
  margin: 0;
  font-size: ${e=>e.theme.fontSizes[16]};
  inherit;
`,$o=i.img`
width: 64px;
height: 64px;
margin-bottom: 12px;
`,Oo=({icon:e,text:n})=>t.jsxs(Lo,{children:[t.jsx($o,{src:e}),t.jsx(Ko,{children:n})]}),qo=[{icon:re,text:"Высокая и оперативная скорость обработки заявки"},{icon:se,text:"Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"},{icon:ae,text:"Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"},{icon:re,text:"Удобный сайт с интуитивно понятным пользовательским интерфейсом"},{icon:se,text:"Техническая поддержка пользователей 24/7"},{icon:ae,text:"Гибкие тарифные планы под любые потребности клиента"}],Jo=qo.map((e,n)=>t.jsx(Oo,{icon:e.icon,text:e.text},n));function Xo(){return t.jsxs(Zo,{children:[t.jsxs(_o,{children:[t.jsx(Ne,{children:"Почему именно мы"}),t.jsx(Le,{views:"Main",slides:Jo,loading:!1})]}),t.jsx(ei,{children:t.jsx(ti,{src:zo})})]})}const Zo=i.section`
display: flex;
width: 100%;
flex-direction: column;`,_o=i.div`
display: flex;
flex-direction: column;`,ei=i.div`
position: relative;
width: 100%;
padding-top: calc((575.52 / 1440) * 100%);
margin-bottom: 100.48px;
  
    @media screen and (max-width: 768px){
        margin-bottom: 80.48px;
    }
`,ti=i.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHWSURBVDhPY/wPBAxUBExQmmqAIgNPfN3PsP79Iobv/75CRRgYyPby7Z/XGCa+qmf49e8ngxq7DkOGaAUDDzMfeS58+vsBQ9/LarBhIHDn53WGh7/ugtkkG/j81xOGCS/rGf7++8PAAPIcEPsLRjNocxqC5eEG/gfCZW9mMFz9dg4qggne/XnN0P+8huHtz5cMf/7+BmM33kAGT74QqAqkMFz1ahbDlvcrwYLRYlkM7oLBYDYM/Pj/jaH5YS7D458PoCIMQDVBQLXZUB4EgF348tdThnWvFjD8+v0djBc87WNY9XIWWAEIfP37maH9XiHD3S/X4Wo02PUYwkXToCoQAO7C7a9XMSx80svw6/8vsAQI2Ap5MCRIFzPMedzBcPzDXqgoA4MKtxZDl/oSIIsRIoAEUJLN8fd7GGY8aAaG0SuoCAODCJs4w5tfL6E8BgYFbjWGFo35DAKsQlARVICRDu9/u8HQeC2d4dn3h1ARBJDklGPo1FnKIMEhCxXBBFgT9uufzxmqLsUx3P50ESrCwMDLIsgw1XQrgxyXClQEBwAZiA28+/n6f9XZmP8WW7n/e+yW+3/1wxmoDH6A00AQACbe/1ffn/7/7c8XqAhhgNXL5AMGBgBPxlKUQWpytQAAAABJRU5ErkJggg==",ni="/assets/target-665faeee.svg",oi="/assets/cellphone-589e294f.svg",ce="/assets/bulb-483f85c6.svg",ii=i.header`
position: relative;
display: flex;
flex-direction: inherit;
width: 100%;
height: 132px;
padding: 30px 10px 30px 30px;
background-color: ${e=>e.$tariff==="beginner"?e.theme.colors.accent.orange:e.$tariff==="pro"?e.theme.colors.accent.aqua:e.$tariff==="business"?e.theme.colors.primary.black:"transparent"};
color: ${e=>e.$tariff==="business"?e.theme.colors.primary.white:e.theme.colors.primary.black};
@media screen and (max-width: 768px){
    padding: 30px 24px 34px 24px;
}
`,ri=i.h4`
text-transform: capitalize;
color: ${e=>e.$tariff==="business"?e.theme.colors.primary.white:e.theme.colors.primary.black};
margin: 0;    
margin-bottom: 10px;
font-size: 30px;
font-weight: 500;


@media screen and (max-width: 768px){
    font-size: 20px;
    margin-bottom: 22px;
}
`,si=i.p`
font-size: 18px;
padding: 0;
margin: 0;
`,ai=i.div`
  position: absolute;
  top: 5px;
  right:  5px;
  width: 92px;
  height: 92px;
  background-image: url(${e=>e.$tariff==="beginner"?ce:e.$tariff==="pro"?ni:e.$tariff==="business"?oi:ce});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 1378px) {
    width: 60px;
    height: 60px;
  }
`;function ci({tariff:e,tagline:n}){return t.jsxs(ii,{$tariff:e,children:[t.jsx(ri,{$tariff:e,children:e}),t.jsx(si,{children:n}),t.jsx(ai,{$tariff:e})]})}function li({tariff:e,tagline:n,priceCurrent:o,pricePrev:r,priceMonth:s,features:c,userCurrentTariff:d}){const l=d===e;return t.jsxs(di,{$isTarifActive:l,$tariff:e,children:[t.jsx(ci,{tariff:e,tagline:n}),t.jsxs(pi,{children:[l&&t.jsx(mi,{children:"Текущий тариф"}),t.jsxs(xi,{children:[t.jsxs(hi,{children:[t.jsxs(ui,{children:[S(o)," ₽"]}),t.jsxs(gi,{children:[S(r)," ₽"]})]}),s&&t.jsxs(yi,{children:["или ",s," ₽/мес. при рассрочке на 24 мес."]})]}),t.jsx(fi,{children:"В тариф входит:"}),t.jsx(bi,{children:c.map(p=>t.jsx(wi,{children:p},p))})]}),t.jsx(ji,{children:t.jsx(A,{elementType:"link",hue:"dark",to:l?"":"/tariffs",isLoading:!1,disabled:l,children:l?"Перейти в личный кабинет":"Подробнее"})})]})}const di=i.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
box-sizing: content-box;
overflow: hidden;
width: 100%;
max-width: 415px;
background: #FFF;
border-radius: 10px;
border: ${e=>e.$isTarifActive?`2px solid ${e.$tariff==="beginner"?e.theme.colors.accent.orange:e.$tariff==="pro"?e.theme.colors.accent.aqua:e.$tariff==="business"?e.theme.colors.primary.black:"transparent"}`:"none"};
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
`,pi=i.div`
position: relative;
font-size: ${e=>e.theme.fontSizes[16]};
margin-bottom: 55px;
padding: 33px 15px 0 30px;
width: 100%;
`,mi=i.div`
position: absolute;
top: 12px;
right: 10px;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
width: 134px;
height: 24px;
color: ${e=>e.theme.colors.primary.white};
font-size: ${e=>e.theme.fontSizes[14]};
font-weight: 400;
border-radius: 10px;
background: #3BA5E0;
`,xi=i.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 10px;
height: 127px;
`,hi=i.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
gap: 19px;
`,ui=i.span`
color: ${e=>e.theme.colors.primary.black};
font-size: ${e=>e.theme.fontSizes[30]};
font-weight: 500;
`,gi=i.span`
color: rgba(0, 0, 0, .5);
font-size: ${e=>e.theme.fontSizes[25]};
font-weight: 500;
text-decoration-line: line-through;
`,fi=i.h4`
margin: 0;
padding: 0;
font-size: ${e=>e.theme.fontSizes[20]};
font-weight: 500;
margin-bottom: 10px;
`,bi=i.ul`
list-style: none;
padding: 0;
margin: 0;
`,wi=i.li`
margin-bottom: 5px;

&::before {
content: url(${Ke});
vertical-align: middle;
margin-right: 8px;

}
`,ji=i.footer`
display: flex;
width: 100%;
justify-content: center;
padding: 0 30px 24px;
`,yi=i.p`
font-size: ${e=>e.theme.fontSizes[18]};
padding: 0;
margin: 0;
`,ki=[{tariff:L.beginner,tagline:"Для небольшого исследования",priceCurrent:799,pricePrev:1200,priceMonth:150,features:["Безлимитная история запросов","Безопасная сделка","Поддержка 24/7"]},{tariff:L.pro,tagline:"Для HR и фрилансеров",priceCurrent:1299,pricePrev:2600,priceMonth:279,features:["Все пункты тарифа Beginner","Экспорт истории","Рекомендации по приоритетам"]},{tariff:L.business,tagline:"Для корпоративных клиентов",priceCurrent:2379,pricePrev:3700,priceMonth:null,features:["Все пункты тарифа Pro","Безлимитное количество запросов","Приоритетная поддержка"]}];function Si(){const e=h(q),n=e==null?void 0:e.tariff;return t.jsxs(Ai,{children:[t.jsx(Ne,{children:"Наши тарифы"}),t.jsx(vi,{children:ki.map(o=>t.jsx(li,{...o,userCurrentTariff:n},o.tariff))})]})}const Ai=i.section`
display: flex;
width: 100%;
flex-direction: column;`,vi=i.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  column-gap: 37px;
  row-gap: 43px;

  &&>* {
    width: 33.3%;
  }

  @media screen and (max-width: 1144px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 990px) {
    flex-flow: column wrap;
    &&>* {
        width: 100%;
      }
  }
`,$e=i(Ct.main)`
padding: ${e=>e.theme.padding.top} ${e=>e.theme.padding.right} 0 ${e=>e.theme.padding.left};
margin-bottom: ${e=>e.theme.margin.bottom};
min-height: calc(100vh  - ${e=>e.theme.height.footer});
`,I=({children:e})=>t.jsx($e,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:e});function Ci(){return t.jsxs(I,{children:[t.jsx(Io,{}),t.jsx(Xo,{}),t.jsx(Si,{})]})}const b=i.h3`
display: flex;
color: ${e=>e.theme.colors.primary.black};
font-family: ${e=>e.theme.fonts[2]};
padding: 0;
margin: 0;
font-size: 40px;
font-weight: 900;
text-transform: lowercase;

@media screen and (max-width: 960px){
    font-size: 28px;
    }

@media screen and (max-width: 768px){
    font-size: 22px;
}
`;function Di(){return t.jsx(I,{children:t.jsx(Ii,{children:t.jsxs(Fi,{children:[t.jsx(Bi,{children:"Наши тарифы"}),t.jsx(Ti,{children:"Более подробная информация о тарифах на нашем новом сайте"}),t.jsx(A,{elementType:"link",hue:"dark",to:"https://scan-interfax.ru/",target:"_blank",children:"Перейти"})]})})})}const Fi=i.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 47px;
`,Bi=i(b)`
max-width: 817px;
margin-bottom: clamp(19px, 5vw, 25px);
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Ti=i(v)`
margin-bottom: 47px;
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Ii=i.section`
display: flex;
flex-flow: row wrap;
`;function zi(){return t.jsxs(I,{children:[t.jsxs(Ri,{children:[t.jsx(Ei,{children:"Частые вопросы"}),t.jsx(Mi,{children:"Возможно, на ваш вопрос уже есть ответ"})]}),t.jsx(Wi,{children:t.jsxs(Pi,{children:[t.jsxs(R,{children:[t.jsx(E,{children:'Какие данные можно найти в "СКАН"?'}),t.jsx(M,{children:"В нашей базе представлена информация о более чем 20 миллионах компаний. Вы можете найти здесь сведения о любой организации, зарегистрированной в России."})]}),t.jsxs(R,{children:[t.jsx(E,{children:'Как "СКАН" помогает выбирать лучших подрядчиков?'}),t.jsx(M,{children:"Мы предоставляем информацию о прошлых работах и отзывах других клиентов о контрагентах. Это позволяет принимать взвешенное решение при выборе подрядчика."})]}),t.jsxs(R,{children:[t.jsx(E,{children:"Как работает сервис поиска публикаций по ИНН?"}),t.jsx(M,{children:"Наш сервис позволяет найти все публикации о компании по её ИНН в интернете. Это важный инструмент для контроля репутации бизнеса."})]}),t.jsxs(R,{children:[t.jsx(E,{children:'Как связаться с поддержкой "СКАН" в случае возникновения вопросов?'}),t.jsx(M,{children:"Вы можете связаться с нами через форму обратной связи на сайте или по указанным контактам. Наша команда готова помочь вам в решении любых вопросов."})]})]})})]})}const Ri=i.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 47px;
`,Ei=i(b)`
max-width: 817px;
margin-bottom: clamp(19px, 5vw, 25px);
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Mi=i(v)`

@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Wi=i.section`
display: flex;
flex-flow: row wrap;
`,Pi=i.ul`
display: flex;
flex-direction: column;
width: 100%;
`,R=i.li`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 24px;
`,E=i.h4`
font-size: ${e=>e.theme.fontSizes[16]};
font-family: ${e=>e.theme.fonts[2]};
font-weight: 600;
`,M=i.p`
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin: 0;
`,Ui="/assets/authHero-e467c2b4.png",Oe=i.div`
display: flex;
flex-flow: column nowrap;
padding: 25px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;function Hi(){return t.jsxs(Gi,{children:[t.jsxs(Ni,{children:["Для оформления подписки",t.jsx("br",{}),"на тариф необходимо",t.jsx("br",{}),"авторизоваться"]}),t.jsx(Vi,{src:Ui}),t.jsx(Yi,{children:t.jsx(Se,{})})]})}const Gi=i($e)`
display: grid;
grid-template-areas:
"title form"
"img form";
grid-template-rows: auto 1fr;
grid-template-columns: 1fr minmax(340px, 429px);
padding-top: 162px;

@media screen and (max-width: 960px){
    column-gap: 10px;
    }

@media screen and (max-width: 768px){
grid-template-rows: auto auto auto;
grid-template-columns: 1fr;
row-gap: 45px;
grid-template-areas:
"title"
"form"
"img";
}
`,Ni=i(b)`
grid-area: title;
max-width: 817px;
`,Vi=i.img`
grid-area: img;
padding-top: 13px;
padding-left: 112px;
@media screen and (max-width: 850px){
    padding-left: 40px;
    }
@media screen and (max-width: 768px){
    margin-bottom: 81px;
    padding-left: 0;

    }
@media screen and (max-width: 450px){
    height: 100vmin;
    }
`,Yi=i(Oe)`
grid-area: form;
@media screen and (max-width: 768px){
    padding: 15px;
    max-width: 429px;
        margin-top: 81px;
    }
`,Qi="/assets/authGoogle-ce85d876.svg",Li="/assets/authFace-1ac0b435.svg",Ki="/assets/authYandex-6e5be76f.svg";function $i(){const e=N(),n=T(),[o,{isLoading:r}]=gn(),[s,c]=y.useState(null),d=async(m,f)=>{try{const x=await o({login:m,password:f});if("data"in x){const w=x.data.accessToken,C=x.data.expire;n(Wn({login:m,JWT:w,expire:C})),n(vn({login:m})),e("/")}if("error"in x){const w=x.error;console.error(w),c(w.data.message)}}catch(x){console.log(x)}},l=Dt({initialValues:{login:"",password:""},onSubmit:(m,{setSubmitting:f})=>{d(m.login,m.password),f(!1)},validationSchema:ve(tn)}),p=m=>{l.handleChange(m),c(null)};return t.jsxs(qi,{onSubmit:l.handleSubmit,children:[t.jsx(le,{htmlFor:"login",children:"Логин или номер телефона:"}),t.jsx(de,{autoComplete:"off",$error:l.touched.login&&!!l.errors.login,placeholder:"+7... или логин",type:"text",name:"login",id:"login",onChange:p,onBlur:l.handleBlur,value:Ot(l.values.login)}),t.jsx(pe,{children:l.touched.login&&l.errors.login?l.errors.login:""}),t.jsx(le,{htmlFor:"password",children:"Пароль:"}),t.jsx(de,{$error:l.touched.password&&!!l.errors.password,type:"password",name:"password",id:"password",onChange:p,onBlur:l.handleBlur,value:l.values.password}),t.jsx(pe,{children:s||l.touched.password&&l.errors.password?s||l.errors.password:""}),t.jsx(Oi,{elementType:"button",hue:"dark",type:"submit",isLoading:r,disabled:l.isSubmitting||Object.keys(l.errors).length>0,children:"Войти"}),t.jsx(Ji,{children:"Восстановить пароль"}),t.jsx(Xi,{children:"Войти через:"}),t.jsxs(Zi,{children:[t.jsx(K,{disabled:!0,children:t.jsx("img",{src:Qi,title:"this feature is under development"})}),t.jsx(K,{disabled:!0,children:t.jsx("img",{src:Li,title:"this feature is under development"})}),t.jsx(K,{disabled:!0,children:t.jsx("img",{src:Ki,title:"this feature is under development"})})]})]})}const Oi=i(A)`
height: 59px;
margin-top: 14px;
margin-bottom: 15px;
font-size: 20px;
max-width: 100%;

&:disabled {
    background: #5970FF;
    opacity: .7;
    color: ${e=>e.theme.colors.primary.white};
    cursor: not-allowed;
}
`,qi=i.form`
display: flex;
flex-flow: column nowrap;
width: 100%;
height: 100%;
`,le=i.label`
color: #949494;
font-family: ${e=>e.theme.fonts[0]};
font-size: ${e=>e.theme.fontSizes[16]};
font-weight: 400;
margin-bottom: 15px;
`,de=i.input`
padding: 12px 15px;
margin-bottom: 6px;
height: 43px;
border-radius: 5px;
border: 1px solid #C7C7C7;
outline: 1px solid #C7C7C7;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
${e=>e.$error&&g`
border-radius: 5px;
border: 1px solid #FF5959;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(255, 89, 89, 0.20);
color: #FF5959;
outline: 1px solid #FF5959;
`}'

`,pe=i.div`
color: #FF5959;
font-size: 14px;
font-weight: 400;
text-align: center;
height: 16px;
`,Ji=i.a`
color: #5970FF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
text-align: center;
margin-bottom: 30px;

&:hover {
    opacity: .5;
    cursor: pointer;
}
`,Xi=i.span`
color: #949494;
font-size: 16px;
font-weight: 400;
margin-bottom: 15px;
`,Zi=i.div`
display: flex;
flex-flow: row nowrap;
gap: 10px;
`,K=i.button`
all: unset;
cursor: not-allowed;
`,_i=i(A)`
height: 59px;
margin-top: 14px;
margin-bottom: 15px;
font-size: 20px;

&:disabled {
    background: #5970FF;
    opacity: .7;
    color: ${e=>e.theme.colors.primary.white};
    cursor: not-allowed;
}
`,er=i.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
gap: 30px;
`,tr=i.p`
font-size: ${e=>e.theme.fontSizes[18]};
font-weight: 400;
text-align: center;
color: ${e=>e.theme.colors.primary.black};
`;function nr(){return t.jsxs(er,{children:[t.jsx(tr,{children:"Регистрация новых пользователей осуществляется на нашем новом сайте"}),t.jsx(_i,{hue:"dark",elementType:"link",to:"https://scan-interfax.ru/#form-access",children:"Перейти"})]})}const me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABdCAYAAAAPHYAVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4SSURBVHgB7Zx9cBT1Gcef3XvJ5S6BCwlJePUgRBCpWapYIArrjOjY0jGZwZYCM0bFP9qZtmE6dto/LPJXnbFTwapthY6gWOsoijqOVhA2GhDlJUuQ95dcIIS855Lc+93u9vcsXOa427cL2bsg/TDL3u1uNj+++/ye3/N7nt9CwRilpaXF7b3UXnOpra3KVZDvcTldjIWi3DRtcRe4nNDZ1Q35+Q5fNB73hiNh78WLbQ2vbHmDP8cf4MBEKBhDoEg9PX2/PXn2LLtk8UI2EAhCYWEBWCwWeRNFEWialvfJWzLtVzq8TcePc/yRY5s2v7qRh1FmTAhGhGIHhobWu8eNY/F7Xl4eUNTVpqEg8Xg8TRg90AI7u3q43oG+dU+sXj1qwuVUMBSKCLP+fEsrW142EYrcbtmSBEGAaDQKowEKd6i5eesLL2/e4OUPeOEGyYlg2PVI13rxSmdXXSAQgNmVs8DpdEIwGJStyQxOnTnnPXi46Yln//gMBzeABbIMEctDrOpr8pHF5zV96hS5Cw4NDWXc7TKhpHiCu7ystM4XEeDE0aYGGCFZFeyaWHsDwaAnFovBxJJikCQJQqGQ7s/6yQBw6fJlOMQfhfPeVnnDYwUuF9jtNjACXrv43gUsOArh4NeNIxItq13S6/W2kJ0HP7tI4yORiGYX7CD+58DBw95jJ099yDXu5wSg+VQ/VMksYO5fXM3Mvb3i0cpZFTVV8+aCHij0S//cXPfaSy9ugwzJmmCtra3ric96Dn/hNNINE6OfEijUljfe4rjGAxsyiavmMAs98+bNrfvTH373+LgCl0frWhwMPv+CeyBTn5aVLoldkex2Ylw1ZfIkeSRUGwX3NDR6t729o3b7llc39HW0eSEDejrafCeam7i9+498WFExs2hC0XjGblPurtg9S0qK2T2Hz23zdXjDBn9FdiyMWNfr/LHjddhd8vPzFX0WdpPXtr7Jf7Rrb+1oDP/IijVPPvfMb365vqx0ouo1J06f3fjjh5etA4NkxcLq6+s3FrpcJC4tVAxCUaznN72ybfPf/vqIj1gJjBJobaLN1TqnsqIGLUoJ8gAXdg1GGk40H/Eauafpgl0LTutxJLNarYpd8Y133uVf/svzj4AJNB08wF/u8x9dUr1oYZ7d7k49j+1yOOyeD3a8Z2gAoMF8WHSwdrtd0cmjz9q+46NaMJFPd7y9c+OrmzeQj16l8z+suout+1U9AwYw3cLuWbho/dw5sz024nxTrQtHw5f+sXndkS93cWAy/bGwFyS6k/nBnSz56kg+h1ZWWjwh8tb2Nz/Tu4/pFlYxc6b85JSi+Pc//sS76+P3t0IW8PK8b/s773tJoLxB6Tx5oI8buY+pgmE4EQoG3Uq+C63rg48/2wBZJA5h/qHan3HkY9rAUlkxw71izVpW7x6mCrbp7/9iKmZ45BxWKs3HT0AMHDshi6CV4Z5YmaKDX1H7E10/ZqpgU6dMYnGv5OzPnLvAeXlu1EKIDOGUDlbO9FSBDqYKVlpaLDdAyX+ROeKIMwY3Asnd+s6fP694rqOzK7cWNqm0lFHqjiRhSHxYDwc54BSZRbR3druVzk2dMln3500T7GkS10yeVO7G+CuVju4u4oAdo55vN0q+06EoWDgUzp2FuQoKSKXHicN12rnL7R18Dv0XSSYWL4URYppg86vmsrjHRGEqF8hsHHJIns2uaEk4p9XDNMGKityyww+H0zMnp06d4yCHhMJhj9LxfEeeF3Qwr0s6nazScXT4bVc6cua/KpnFcmyoBBHsKOhgimA1a+rY8tJSxXPnvV4wuzqtxbPP/FrVsZM6ZgvoYIpgK2sfZdDhK9Ha1pYz60JKJharCnby7AVd32qFDFn22NOMZJHc8XCc53ZuVRzpenv7VCPmtrbLORVscnm5atv2HTio2zbDgrEr6zw22raXzMQ8mNe2Oa2wbNVanpIor0gLDSDQfEJEz/Rpqk9x/zdHchLhJyAPkyWp37Tj6Fvf276F0/t5w4IlxEo5zEiUxFASXYOdOyHinm+OMAPBEEybVE62suGLm787Qf4WcmZhK4hvVXP4xcUTODCAIcHYx+oYBbHUYJpPnwPcEsyecRtMnVwGfd3d4Klk4Cx/EHJB9cJ7VS2/vf2K7giJGBLMZqMNpW8Rl8sJBflkc+WDRP50dvfBaWLuuF29GTQ9uHqtjxKBJ12bWJvUEJUEnvvPVi+YzKTySar+q7O315DlGyqzLVv11Ovk0joYARW3TZP3OGriL0MRA6S7nm+9lNoULyUBL1LSURCB0xpURkrjvv1NZIKt+PDZmpUzjJT3jAm2em0T+XcatjI9UERcRehy5hMFKfAHAyoiguKgAiMAVwx1dff0K9Uo2zu7fIt/dG+RkfvoCsbW1bltUWs/mAyKWF5SQvSTZBGxZZ3dPYoikgvkrgwxC7/r3c2GutJzf36BrfvFY3uVzl281MYtuf++B8AAuj7MGrYy2SjGoTCp4pRNLIbqu+fL+hEZAbX0B4NM88nTjOwibBKOyniSS/hDKU57lUScc/ss1R7ScrHNkMNH9J0+NXpdMVM6u3vlLRkcVKrumC37QlwBhIvwJAlYIiJLGluPIioNKjaLVTWlM+j3c2AQ3S754KqnPqCAqoExDopIrI+kaEKyKfqJTwwkpWuKi9wwvbxMDm9mz7xNjhGdjjw5pbN89ZMzjK7n0BVstB3+WAJFc9itcObixXW+zi6+oKBEd1DRFCxbDn8sEPD1QzAwBBRN8RRFka5MN4jhGM/v33WdP9R057LDv0VwjhsPFEWDJEqMKIh1ohB/HWxUE7P0oZbqn/68PnGd9vhH48LdWwOKVLcsVsUx0BP0D7x43/IVLH7RCRgk3cLmrYBE6qqRSFge+DQFo4C+ZbokihKPqb9MEYtE5L2qYJj/yiBDcdMTi2m/eRKNRb7FvapgFsqSNetSS2dnk4QFqUEq+GfkveoVlPkO/y4SbMrZjGvBjRCPy10jF8Sj6oJJkhT4bh93CD+rTo1oiqqSJ3AmgBZVNXc2HD15Gvr7+iA4NEAaHCMNuyqWxWIFW14euArHA23NuOwwImIaglEUDGc8VVtD5meMGWvSr4p1O+z79jAMDfZDJBBIu0YQ4iAE4xAJh+T4yOkqBDMRiWXj76RplRWsEgxPzhW7JKakiVhuMIGHlyyC/Yd4GOrvVRQrGeyeGIGHg34wk2gkrC4WQlPc8Eel8xarxQMmUFZSDOda24gAAdl6jOIf8IEomefbojptiYTCxxOflZ2+SQ5/pmc6kDQMBAcHMvo5tLTQ0BCYRSwe0zrtO/nNl2cTXxQFkx2+CRSSlDSaP/qLTMnEIjNFiGkJJhmYfEvmWBgmA0VBgJEgCua8qYvhhFYoIwrSvuTvaYJdrUGag5H1V2qYFZ/FolGgLeoOX4I4l/w9TbBMapCZ4g8F5Vf/RoLFZgcz0IvwI6EhvS5JjXg5ox6YNraSfzjmnTLFZjP2mnKmaAWsxH2cOXP4cE/ysfSWU5RpFoY5dsw75RdkHohiAGsGsZhWhE+dTT12nWCYks5G/t5JBLNmYDE4RcLp0miDIzalkaUnoV/aSqPrBMtGShon21V33gHjiicSZ6svAoplmnWR7qjl8GkbpK2aub7FWahBYrEWa4toMcXlk8HX00Ucb/rCYVueQxYLJ+FmEQ3rveodTysIpwgmLc3Ga+CJemHIP5gmVsH4IsgjBVp6BANDpgjaSUOe59LfJbiuVcTJeSBLYIYgMDiYdhwzStkQS05JR9UjfFI5OqF0fLhl2XL4CDYWu6KkMKHWeeqjBk61KC3/RVkUV/0NC5bNGmSAJAzV5pMxzXnd6IEFD5rWcD8W5aWldNInFrIA+q2QXz3zYNacMRW9yTzP7W5UOp7kLMyvQar5rWSwu5qZ+xpGELXagGIpPrlhwcyuQWr5rVSEuLlWhhmTeFzDV0qS6noxWbBs1CD9A/2G82CCyX5MjvA1UtIxIbZf7Zwch5ldg0TrynM45XlknIihFKgmc7UC7QKzwJR04v9YVCJRg1TiauBqcg0ShbLn58tbAhQtIV6UpFiSu6pgsuOPajyw5BqkErJgZtYg1cCpD26JzAVaVUJAUTK3MQLJ4atViZJrkErIgplVg8wEzJPh5nCa1xUR2bq0nkdSDVIJ2swa5FgEBxStDEVyDVLxtFk1yLFKVGfASa5BKpGFFfhji3jMeA1SCVrIEzhKkrxwixDXnNxLum+V0NzWrT6JomtvBdHkgFUj/kqtQSqR/NO2pbVrWFu+o5ocXUoExNdTvleDQWhoEPyD6svwBSG67Fgjt1vrHprRxLJVTzNkIuwhjo6VaBKrCcICMqUwd9w3kcHebs0sRdDfOzG1rJZKxuEXikhslxFF8R6JphkLTVfDTUJf5xU5aFUCa5DNjV/M1rvHqMSrD65cywIlMiSFufTaS/RjcvV158UW1RiMzHc/OfrV7uV69zAlwGdr6txWh5UhPmGBxZa3mJZERspivUCJaDQMA91dqufFuPj75n27XwAdsjYjuptdXlJQ5J6fq0EFs7yYYlKFEh8gWVYOdMjpFDKbg8pgXw+J4jVWD1HRIqWyWtplMMYwa1Dp7+rQClp5vuHz+WCAMSeYEjc6qGAtobezXf28IP67uXH3ajDATSFYKpkMKigW1hI0k5IitY7/6r8bwQA3pWBKpA4qsXC4MhaNTMHFxHqFF5vdOf/grp2j9x993KzMXcTOsudZ5olx6h7aQlWTROkCMpe8blAhcdmmI3s+rTd6z++1YEow7DJGFGKzaMo+D2iRMxJK/J8b4H9o1Y6yyxetvQAAAABJRU5ErkJggg==",or=i.div`
display: flex;
margin-bottom: 40px;
gap: 10px;

& > button:nth-of-type(1) {
    width: 40.4%;
}
& > button:nth-of-type(2) {
    width: 59.6%;
}

@media  screen and (max-width: 768px){
    &>*font-size: 14px;
}
`,xe=i.button`
all: unset;
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 35px;
font-size: 16px;
${e=>e.$isActive?g`
color: #029491;
&>img {
    display: block;
}
border-bottom: 2px solid #029491;
`:g`
color: #C7C7C7;
border-bottom: 2px solid #C7C7C7;
`};


`,he=i.img`
display: none;
position: absolute;
inset: -80px -65px;

@media  screen and (max-width: 768px){
    inset: -80px 70%;
}
`;function ue({view:e}){const[n,o]=y.useState(e||"signup"),r=()=>{o(s=>s==="signin"?"signup":"signin")};return t.jsxs(t.Fragment,{children:[t.jsxs(or,{children:[t.jsxs(xe,{$isActive:n==="signin",onClick:r,children:[t.jsx(he,{src:me}),"Войти"]}),t.jsxs(xe,{$isActive:n==="signup",onClick:()=>o("signup"),children:[t.jsx(he,{src:me}),"Зарегистрироваться"]})]}),n==="signin"?t.jsx($i,{}):t.jsx(nr,{})]})}const ir="data:image/png;base64,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",ge="data:image/png;base64,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",rr="/assets/heroSearch-8e339adc.png",sr="/assets/arrowSelect-59b5edc5.svg",ar="/assets/unchecked-fe4de7c3.svg",qe=i.fieldset`
  display: flex;
  flex-flow: column nowrap;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`,Y=i.label`
  position: relative;
  font-family: ${e=>e.theme.fonts[0]};
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`,Je=g`
position: relative;
padding: 12px 15px;
margin-bottom: 6px;
height: 43px;
max-width: 242px;
border-radius: 5px;
border: 1px solid #C7C7C7;
outline: 1px solid #C7C7C7;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
text-align: start;

@media screen and (max-width: 400px) {
    max-width: 335px;
}

&::placeholder {
    text-align: center;
    color: #949494;
    font-family: ${e=>e.theme.fonts[0]};
    font-size: 14px;
    font-weight: 400;
}
`,Xe=g`
  background-image: url(${sr});
  background-repeat: no-repeat;
  background-position: 95% 50%;
`,Z=i.input`
${Je}

${e=>e.$error&&g`
    border-radius: 5px;
    border: 1px solid #ff5959;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(255, 89, 89, 0.2);
    color: #ff5959;
    outline: 1px solid #ff5959;
  `}'
`,cr=i.select`
${Je}
${Xe}
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
`,lr=i(Z)`
${Xe}
width: 100%;
`,dr=i.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  margin-right: 25px;

  &::after {
    content: "";
    border: none;
    display: inline-block;
    background-image: url(${ar});
    width: 20px;
    height: 20px;
  }

  &:checked::after {
    content: "";
    display: inline-block;
    border: 1px solid #000;
    background-color: #fff;
    background-image: url(${Ke});
    background-position: center;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
`,pr=i(Y)`
color: rgba(0, 0, 0, 0.4);
  margin-bottom: 15px;
  padding-left: 37px;
  &:has(input[type="checkbox"]:checked) {
    color: rgba(0, 0, 0, 1);
  }
`,mr=i.div`
  display: flex;
  position: relative;
`,Q=i.div`
  color: #ff5959;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  height: 16px;
  max-width: 242px;

@media screen and (max-width: 400px) {
    max-width: 335px;
}
`,_=i.span`
  color: ${e=>e.$error?"#ff5959":"#000"};
  content: "*";
`,xr=e=>e.replace(/\s/g,""),hr=e=>{const n=e.match(/^(\d{2})(\d{3})(\d{3})(\d{2})$/);return n?`${n[1]} ${n[2]} ${n[3]} ${n[4]}`:xr(e)};function ur({...e}){const[n,o]=F(e),{setFieldValue:r}=V();return t.jsxs(t.Fragment,{children:[t.jsxs(Y,{htmlFor:"inn",children:["ИНН компании ",t.jsx(_,{$error:o.touched&&!!o.error,children:"*"})]}),t.jsx(Z,{...n,...e,type:"text",id:n.name,onChange:s=>{r(n.name,hr(s.target.value))},$error:o.touched&&!!o.error}),t.jsx(Q,{children:o.touched&&o.error?o.error:""})]})}function gr(){const{setFieldValue:e}=V();return t.jsxs(t.Fragment,{children:[t.jsx(Y,{htmlFor:"tonality",children:"Тональность"}),t.jsxs(Ce,{as:"select",type:"select",name:"tonality",id:"tonality",component:cr,onChange:n=>{const o=n.target.value;e("tonality",o)},children:[t.jsx("option",{value:"any",children:"Любая"},"any"),t.jsx("option",{value:"positive",children:"Позитивная"},"positive"),t.jsx("option",{value:"negative",children:"Негативная"},"negative")]}),t.jsx(Q,{children:t.jsx(Ft,{name:"tonality"})})]})}function fr(e){const[n,o]=F(e),{setFieldValue:r}=V();return t.jsxs(t.Fragment,{children:[t.jsxs(Y,{htmlFor:"limit",children:["Количество документов в выдаче ",t.jsx(_,{$error:o.touched&&!!o.error,children:"*"})]}),t.jsx(Z,{...n,...e,type:"text",id:e.name,$error:o.touched&&!!o.error,onChange:s=>{const c=s.target.value;r("limit",c)}}),t.jsx(Q,{children:o.touched&&o.error?o.error:""})]})}Bt("ru",Tt);function fe({...e}){const{setFieldValue:n}=V(),[o]=F(e);return t.jsx(It,{...o,...e,selected:o.value,onChange:r=>{n(o.name,r)},dateFormat:"dd.MM.yyyy",locale:"ru",autoComplete:"off",showYearDropdown:!0,customInput:t.jsx(lr,{$error:e.error})})}const br=i(qe)`
border: none;
flex-flow: row nowrap;
padding: 0;
margin: 0;

& .react-datepicker-wrapper:first-of-type {
margin-right: 20px;
}

@media screen and (max-width: 930px){
    flex-flow: column nowrap;
    & .react-datepicker-wrapper:first-of-type {
        margin-right: 0;
        margin-bottom: 20px;
        }
}

}

`,wr=i(Q)`
max-width: 100%;
margin-bottom: 10px;

@media screen and (max-width: 930px){
text-align: start;
}
@media screen and (max-width: 400px){
text-align: center;
}
`,jr=i.legend`
color: #000;
font-family: ${e=>e.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
margin-bottom: 20px;
`;function yr(){const[,e]=F("startDate"),[,n]=F("endDate"),o=e.touched&&!!e.error||n.touched&&!!n.error,r=e.touched&&e.error?e.error:n.touched&&n.error?n.error:"";return t.jsxs(t.Fragment,{children:[t.jsxs(br,{children:[t.jsxs(jr,{children:["Диапазон поиска",t.jsx(_,{$error:o,children:" *"})]}),t.jsx(fe,{name:"startDate",placeholderText:"Дата начала",error:o}),t.jsx(fe,{name:"endDate",placeholderText:"Дата конца",error:o})]}),t.jsx(wr,{children:r})]})}function kr(e){const[n]=F(e),{name:o,label:r}=e;return t.jsx(mr,{children:t.jsxs(pr,{htmlFor:o,children:[r,t.jsx(Ce,{...n,type:"checkbox",id:o,value:o,component:dr})]})})}const Ze={inn:"",tonality:"any",limit:"",startDate:null,endDate:null,maxFullness:!1,inBusinessNews:!1,onlyMainRole:!1,onlyWithRiskFactors:!1,excludeTechNews:!0,excludeAnnouncements:!0,excludeDigests:!0},Sr=Object.keys(Ze).slice(5),Ar=["Признак максимальной полноты","Упоминания в бизнес-контексте","Главная роль в публикации","Публикации только с риск-факторами","Включать технические новости рынков","Включать анонсы и календари","Включать сводки новостей"],vr=Ar.map((e,n)=>({name:Sr[n],label:e}));function Cr(){const e=T(),n=N(),o=async(r,s)=>{e(uo()),e(xo()),n("/results");try{const c=on.parse(r);await e(W(c)),await e($(c)),await e(O()).unwrap(),await e(U()).unwrap(),s.setSubmitting(!1)}catch(c){console.error(c),s.setSubmitting(!1)}};return t.jsx(zt,{initialValues:Ze,validationSchema:ve(Te),validateOnChange:!0,onSubmit:(r,s)=>{o(r,s)},children:r=>t.jsxs(Dr,{onSubmit:r.handleSubmit,children:[t.jsx(Fr,{children:t.jsx(ur,{name:"inn",placeholder:"10 цифр"})}),t.jsx(Br,{children:t.jsx(gr,{})}),t.jsx(Tr,{children:t.jsx(fr,{name:"limit",placeholder:"От 1 до 1000"})}),t.jsx(Ir,{children:t.jsx(yr,{})}),t.jsx(zr,{children:vr.map(s=>t.jsx(kr,{...s},s.name))}),t.jsxs(Rr,{children:[t.jsx(Er,{elementType:"button",type:"submit",disabled:Object.keys(r.errors).length!==0||r.isSubmitting||!r.touched,children:"Поиск"}),t.jsx(Mr,{children:"* Обязательные к заполнению поля"})]})]})})}const Dr=i(Rt)`
display: grid;
grid-template-areas: 
"inn checkboxes"
"tonality checkboxes"
"qty checkboxes"
"range submit"
;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(3, 115px) auto;
width: 100%;
height: 100%;
column-gap: 4px;

@media screen and (max-width: 768px){
    column-gap: 10px;
}
@media screen and (max-width: 600px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: 
    "inn"
    "tonality"
    "qty"
    "range"
    "checkboxes"
    "submit"
;
}
@media screen and (max-width: 400px){
    grid-template-rows: repeat(5, auto);
    }
}
`,z=i.div`
display: flex;
flex-direction: column;
`,Fr=i(z)`
grid-area: inn;
`,Br=i(z)`
grid-area: tonality;
`,Tr=i(z)`
grid-area: qty;
`,Ir=i(z)`
grid-area: range;
`,zr=i(qe)`
grid-area: checkboxes;
@media screen and (max-width: 400px){
    display: none;
    }

`,Rr=i(z)`
justify-content: start;
align-items: start;
grid-area: submit;
margin-left: auto;

@media screen and (max-width: 600px){
    margin-left: 0;
}
`,Er=i(A)`
margin-top: 40px;
margin-bottom: 10px;
height: 59px;
font-size: 20px;
width: 305px;


@media screen and (max-width: 400px) {
    width: 100%;
    max-width: 335px;
}

`,Mr=i.p`
margin: 0;
color: #949494;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.42px;
`;function Wr(){return t.jsxs(I,{children:[t.jsxs(Pr,{children:[t.jsx(Ur,{children:"Найдите необходимые данные в пару кликов."}),t.jsxs(Hr,{children:["Задайте параметры поиска.",t.jsx("br",{}),"Чем больше заполните, тем точнее поиск"]})]}),t.jsxs(Gr,{children:[t.jsx(Nr,{children:t.jsx(Cr,{})}),t.jsx(Vr,{src:rr})]})]})}const Pr=i.div`
display: flex;
flex-direction: column;
width: 100%;
margin-bottom: 47px;
background:  url(${ge}) 70% 80% no-repeat, url(${ir}) right bottom no-repeat;

@media screen and (max-width: 768px) {
    background:  url(${ge}) 100% 50% no-repeat;
    background-size: 58.242px 71.118px;
}

`,Ur=i(b)`
max-width: 817px;
margin-bottom: clamp(19px, 5vw, 25px);
@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Hr=i(v)`

@media screen and (max-width: 375px) {
    max-width: 80%;
}
`,Gr=i.section`
display: flex;
flex-flow: row wrap;
column-gap: 80px;
row-gap: 24px;
`,Nr=i(Oe)`
display: flex;
width: 872px;
max-width: 872px;
padding: 29px 39px 29px 44px;
flex-grow: 3;

@media screen and (max-width: 768px){
    padding: 32px 14px;
    margin: 0 -14px;
}
`,Vr=i.img`
flex: 0 0 calc(33.33% - 80px);
min-width: 340px;
max-width: 360px;
height: auto;
max-height: 368px;
margin-top: auto;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`,Yr="/assets/placeholderImage-3b1309a6.png";function be({title:e,date:n,sourceName:o,content:r,wordCountString:s,publicationType:c,imgUrl:d,sourceUrl:l}){return t.jsxs(Qr,{children:[t.jsxs(Lr,{children:[t.jsxs(Kr,{children:[t.jsx($r,{children:n}),t.jsx(Or,{children:o})]}),t.jsx(qr,{children:e}),c&&t.jsx(Jr,{children:c})]}),t.jsx(Zr,{$src:d,children:d&&t.jsx(_r,{src:d,alt:e})}),t.jsx(Xr,{children:r}),t.jsxs(es,{children:[l&&t.jsx(ns,{elementType:"link",hue:"light",to:l,target:"_blank",children:"Читать в источнике"}),t.jsx(ts,{children:s})]})]})}const _e=g`
color: #949494;
font-size: ${e=>e.theme.fontSizes[16]};
font-weight: 400;
vertical-align: middle;
margin-bottom: 24px;
@media (max-width: 900px) {
    font-size: ${e=>e.theme.fontSizes[14]};
    margin-bottom: 21px;
}
`,Qr=i.article`
max-width: 100%;
height: max-content;
padding: 19px 28px 30px 30px;
border-radius: 10px;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

@media (max-width: 900px) {
    padding: 19px 14px 19px 24px;
}
`,Lr=i.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`,Kr=i.div`
${_e};
`,$r=i.span`
margin-right: 9px;
`,Or=i.span`
text-decoration-line: underline;
text-underline-offset: 4px;
line-height: 1.5;
`,qr=i.h5`
max-width: 546px;
color: ${e=>e.theme.colors.primary.black};
font-size: 26px;
font-weight: 500;
padding: 0;
margin: 0;
margin-bottom: 14px;

@media (max-width: 900px) {
    font-size: 19px;
    margin-bottom: 20px;
}
`,Jr=i.div`
display: flex;
justify-content: center;
align-items: center;
height: 22px;
max-width: fit-content;
margin-bottom: 14px;
padding: 0 11px 0 14px;
border-radius: 5px;
background: #FFB64F;
font-size: 12px;

@media (max-width: 900px) {
    height: 20px;
    font-size: 10px;
    margin-bottom: 13px;

}
`,Xr=i.div`
color: #000;
opacity: 0.5;
font-family: Inter;
font-size: 16px;
font-weight: 400;
margin-bottom: 32px;

@media (max-width: 900px) {
    margin-bottom: 25px;
    font-size: 12px;
    }
`,Zr=i.div`
  position: relative;
  width: 100%;
  height: 158px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-image: url(${e=>e.$src||Yr});
  background-size: cover;
  background-position: center;


  @media (max-width: 900px) {
    margin-bottom: 18px;
    }
`,_r=i.img`
position: absolute;
top: 0;
left: 0;
object-fit: contain;
object-position: center;
height: 158px;
width: 100%;
border-radius: 10px;
margin-bottom: 20px;
backdrop-filter: blur(10px);
`,es=i.div`
display: flex;
flex-flow: row wrap-reverse;
row-gap: 6px;
justify-content: space-between;
align-items: start;
`,ts=i.span`
${_e};
margin: 0;
padding: 0;
margin-top: auto;
`,ns=i(A)`
max-width: 223px;
height: 46.539px;
`;function os(){return t.jsx(rs,{children:t.jsx(D,{})})}const is=ke`
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`,rs=i.div`
  position: relative;
  border-radius: 10px;
  max-width: 100%;
  min-height: 440px;
  margin-bottom: 20px;
  text-align: center;
padding-top: 35%;
  background-color: #fff;
  animation: ${is} 0.8s linear infinite alternate;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

  @media (max-width: 768px) {
    padding: 19px 14px 19px 24px;
}
`;function ss(){const e=N(),n=T(),o=h(yn),r=h(jn),s=h(Sn),c=h(kn),[d,l]=y.useState(!0);y.useEffect(()=>{const u=setTimeout(()=>{l(!1)},2e3);return()=>clearTimeout(u)},[]);const p=async()=>{await n(O()),await n(U())},m=()=>{e("/search")};let f=0,x=0;const w=[],C=[];return r.forEach(u=>{f<=x?(w.push(u),f+=u.wordCountNum):(C.push(u),x+=u.wordCountNum)}),t.jsxs(as,{children:[o==="success"&&r.length===0&&t.jsx(we,{children:"Список документов пуст"}),o==="success"&&r.length!==0&&t.jsx(we,{children:"Список документов"}),t.jsx(cs,{children:d?t.jsx(t.Fragment,{children:Array.from({length:c}).map((u,et)=>t.jsx(os,{},et))}):t.jsxs(t.Fragment,{children:[t.jsx(je,{children:w.map(u=>t.jsx(be,{...u},u.id))}),t.jsx(je,{children:C.map(u=>t.jsx(be,{...u},u.id))})]})}),s?t.jsx(ye,{elementType:"button",hue:"dark",onClick:m,children:"Вернуться к поиску"}):t.jsx(ye,{elementType:"button",isLoading:o==="loading",disabled:o==="loading",onClick:p,children:"Показать больше"})]})}const we=i(b)`
margin-bottom: 58px;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`,as=i.section`
margin-bottom: 107px;
width: 100%;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`,cs=i.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto;
width: 100%;
grid-column-gap: 38px;
margin-bottom: 38px;


@media (max-width: 900px) {
    column-gap: 20px;
    margin-bottom: 36px;
    flex-flow: column nowrap;

    }
@media (max-width: 650px) {
    grid-template-columns: 1fr;

    }
`,je=i.div`
display: flex;
flex-flow: column nowrap;
row-gap: 20px;
border-radius: 10px;
border-radius: 10px;
}
`,ye=i(A)`
margin: 0 auto;
max-width: 305px;
grid-column: 1 / 3;
`,ls="/assets/resultHero-08331d74.png";function ds(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsxs(ps,{children:["Ищем. Скоро ",t.jsx("br",{}),"будут результаты"]}),t.jsx(ms,{children:"Поиск может занять некоторое время, просим сохранять терпение."})]}),t.jsx(xs,{src:ls})]})}const ps=i(b)`
max-width: 509px;
margin-bottom: 36px;
`,ms=i(v)`
max-width: 447px;
margin-bottom: 21px;
`,xs=i.img`;
width: 100%;
height: auto;
max-width: 550px;

max-height: 490px;
margin-top: auto;
margin-bottom: 59.27px;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`,hs="/assets/notFound-704f872c.svg";function us(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx(gs,{children:"Ничего не найдено"}),t.jsx(fs,{children:"Попробуйте изменить параметры поиска"})]}),t.jsx(bs,{src:hs})]})}const gs=i(b)`
max-width: 509px;
margin-bottom: 36px;
`,fs=i(v)`
max-width: 447px;
margin-bottom: 21px;
`,bs=i.img`;
width: 100%;
height: auto;
max-width: 550px;

max-height: 490px;
margin-top: auto;
margin-bottom: 59.27px;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`,ws="/assets/success-a5557ccb.svg";function js(){return t.jsxs(t.Fragment,{children:[t.jsx(ys,{children:"Результаты поиска"}),t.jsx(ks,{src:ws})]})}const ys=i(b)`
max-width: 509px;
margin-bottom: 36px;
`,ks=i.img`;
width: 100%;
height: auto;
max-width: 550px;

max-height: 490px;
margin-top: auto;
margin-bottom: 59.27px;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`,Ss="/assets/error-508678c9.svg";function As(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx(vs,{children:"Ошибка при загрузке"}),t.jsx(Cs,{children:"Попробуйте повторить позже"})]}),t.jsx(Ds,{src:Ss})]})}const vs=i(b)`
max-width: 509px;
margin-bottom: 36px;
`,Cs=i(v)`
max-width: 447px;
margin-bottom: 21px;
`,Ds=i.img`;
width: 100%;
height: auto;
max-width: 550px;

max-height: 490px;
margin-top: auto;
margin-bottom: 59.27px;

  @media screen and (max-width: 375px){
    min-width: unset;
    width: 100%;
}
`;function Fs(){const e=h(ze),n=h(Re),o=h(Ie);return t.jsxs(Bs,{children:[e==="loading"&&t.jsx(ds,{}),e==="success"&&(o==null?void 0:o.length)===0&&t.jsx(us,{}),e==="success"&&(o==null?void 0:o.length)!==0&&t.jsx(js,{}),n&&t.jsx(As,{})]})}const Bs=i.section`
display: flex;
flex-flow: row wrap;
column-gap: 217px;
`;function Ts({totalFound:e}){return t.jsx(Is,{children:Jt(e)})}const Is=i.p`
color: #949494;
font-family:${e=>e.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
letter-spacing: 0.36px;
padding: 0;
margin: 0;
margin-bottom: 27px;

@media (max-width: 768px) {
    margin-bottom: 34px;
}
`;function zs({date:e,docs:n,risks:o}){return t.jsxs(Rs,{children:[t.jsx("span",{children:Be(e)}),t.jsx("span",{children:n}),t.jsx("span",{children:o})]})}const Rs=i.div`
position: relative;
display: flex;
flex-flow: column nowrap;
align-items: center;
justify-content: space-between;

width: 133px;
height: 113px;
margin: 17px 0 17px;
background-color: ${e=>e.theme.colors.primary.white};
color: ${e=>e.theme.colors.primary.black};
font-family: ${e=>e.theme.fonts[0]};
font-size: 18px;
font-weight: 400;
border-right: 2px solid rgba(148, 148, 148, 0.4);



@media screen and (max-width: 600px) {
    flex-flow: row nowrap;
    width: 100%;
    justiy-content: center;
    align-items: center;
    height: 70px;
    border: none;
    margin: 0;
    }
`;function Es(){const e=h(Ie),n=h(ze),o=h(Re),r=n==="success"&&(e==null?void 0:e.length)===0,s=(e==null?void 0:e.length)||0;let c=[t.jsx("div",{})];return o||r?null:(r||(c=e.map((d,l)=>t.jsx(zs,{...d},l))),t.jsxs(Ms,{children:[t.jsx(Ws,{children:"Общая сводка"}),t.jsx(Ts,{totalFound:s}),t.jsx(Le,{views:"Results",slides:c,loading:n==="loading"})]}))}const Ms=i.section`
margin-bottom: 107px;

@media (max-width: 768px) {
    margin-bottom: 57px;
}
`,Ws=i(b)`
margin-bottom: 17px;
@media (max-width: 768px) {
    margin-bottom: 10px;
}
`;function Ps(){return t.jsxs(I,{children:[t.jsx(Fs,{}),t.jsx(Es,{}),t.jsx(ss,{})]})}const Us=Et([{element:t.jsx(co,{}),errorElement:t.jsx(j,{}),children:[{path:"/",element:t.jsx(Ci,{}),errorElement:t.jsx(j,{})},{path:"/tariffs",element:t.jsx(Di,{}),errorElement:t.jsx(j,{})},{path:"/faq",element:t.jsx(zi,{}),errorElement:t.jsx(j,{})},{path:"/auth",element:t.jsx(Hi,{}),errorElement:t.jsx(j,{}),children:[{path:"/auth/signup",element:t.jsx(ue,{view:"signup"}),errorElement:t.jsx(j,{})},{path:"/auth/signin",element:t.jsx(ue,{view:"signin"}),errorElement:t.jsx(j,{})}]},{path:"/results",element:t.jsx(Ps,{}),errorElement:t.jsx(j,{})},{path:"/search",element:t.jsx(Wr,{}),errorElement:t.jsx(j,{})}]}]);Mt.createRoot(document.getElementById("root")).render(t.jsx(Wt.StrictMode,{children:t.jsx(yo,{children:t.jsx(Pt,{router:Us,fallbackElement:t.jsx("p",{children:"Loading..."})})})}));
