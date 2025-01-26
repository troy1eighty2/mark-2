/*! For license information please see radiant-feed.js.LICENSE.txt */
(self.webpackChunksource=self.webpackChunksource||[]).push([[47],{81367:e=>{e.exports={Agent:function(){}}},52954:e=>{e.exports={useRouter:()=>{const{location:e}=window;return{query:function(e){const t={};for(const[n,o]of e)t[n]=o;return t}(new URLSearchParams(e.search)),pathname:e.pathname,asPath:`${e.pathname}${e.search}`}}}},2872:(e,t,n)=>{"use strict";n.d(t,{queryClient:()=>y,renderFeed:()=>ie});var o=n(64180),r=n(77810),a=n(22483),i=n(73892),l=n(2851),c=n(73470),s=n(33944),u=n(52166),d=n(59102),m=n(7775),p=n(98298),f=n(70372),h=n(1534),b=n(35832),g=n(80326),Y=n(261),v=n(4337),w=n(50339),k=n(10519);function x({trackEvent:e,children:t}){return(0,w.BD)("segment",{trackEvent:e}),(0,k.Y)(r.Fragment,null,t)}const y=new i.QueryClient({defaultOptions:{queries:{refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,staleTime:3e5}}});var C=n(33868),A=n(10399),E=n(38734),_=n(5741);const S=e=>e?.includes("-xfas"),P=e=>{if(!e||!S(e))return e;const t={tb:"yes",sourceName:_.cW,eeid:23509,channel:_.zg.DEFAULT,tb_v:A.A.extension.version},n=self.popup?self.popup.$store.state:self.EBATES;return(0,E.Rz)(e,{...t,ebtoken:n.settings.ebToken})},D=({children:e})=>{const t=({url:e})=>{const t=P(e);window.open(t,"_blank","noopener")};return(0,k.Y)(C.p,{value:{openNewWindow:t,pushUrl:e=>t(e)}},e)};var R=n(89322),T=n(53923),F=n(13809);const M=(0,R.Rf)((({href:e,onClick:t,...n},r)=>(0,k.Y)(T.N_,(0,o.A)({href:e,ref:r},n,{target:"_blank",onClick:async n=>{n.preventDefault(),S(e)||await Y.m.track("Visit Page",{preceding_screen_name:"radiant_feed",url:e}),t?.(n);const o=P(e);o&&(await(0,F.o)(o),self.popup&&self.popup.close())}}))));b.A.setSource?.({feedApiHost:g.$.get("feed_api")});const N="99999999px",O={base:"0px",large:N,largeLg:N,largeMd:N,largeSm:N,medium:N,mediumLg:N,mediumMd:N,mediumSm:N,smallLg:N,smallMd:N},$={device:"Button"},z=g.$.region,H=({container:e,children:t})=>{const n=(0,c.A)({container:e,key:"c"});s.A.breakpoints=O;return(0,k.Y)(r.StrictMode,null,(0,k.Y)(l.C,{value:n},(0,k.Y)(i.QueryClientProvider,{client:y},(0,k.Y)(f.cF,{value:{regionId:z}},(0,k.Y)(f.Ph,{value:$},(0,k.Y)(h.mY,null,(0,k.Y)(u.A,{theme:s.A,disablePolyfills:!0},(0,k.Y)(D,null,(0,k.Y)(d.ID,{value:M},(0,k.Y)(x,{trackEvent:(e,t={})=>{Y.m.track(e,{...(0,v.Bs)()&&{url:window.popup.$store.state.currentUrl},...t})}},(0,k.Y)(m.Ay,null,(0,k.Y)(p.A,null),t)))))))))))};var L=n(11940),B=n(16100),I=n(44133),U=n(30447),W=n(19692),q=n.n(W),V=n(10886),j=n(38422),G=n(67207),Q=n(4936),J=n(25385),K=n(62273),X=n(3282),Z=n(94042);const ee=({topicData:e,node:t})=>{const{radii:n}=(0,R.DP)(),{itemData:a}=t,i=a.body_text,l=a.headline_text,c=a.cta_buttontext,s=a.promotional_imageurl,u=a.cta_ctaurl,m=a.tc_linktext,p=a.tc_linkurl,f=a.badge_text;return(0,r.useEffect)((()=>{const e={action:"render",title:l,description:i},t=new CustomEvent(_.Pc,{detail:e});window.dispatchEvent(t)}),[]),(0,k.Y)(V.Ay,(0,o.A)({},e,{backgroundProps:{mb:e.backgroundProps?.mb??"large"}}),(0,k.Y)(T.so,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",pl:"16",pr:"6",height:48},(0,k.Y)(j.A,{h:"20px",w:"67px",variant:"solid"}),(0,k.Y)(G.J,{color:"text.secondary",onClick:function(){const e=new CustomEvent(_.Pc,{detail:{action:"clickClose"}});window.dispatchEvent(e)}})),(0,k.Y)(T.so,{mb:"medium",ml:"medium",mr:"medium"},(0,k.Y)(Q._V,{w:"64px",h:"64px",src:s,borderRadius:n.ui}),(0,k.Y)(T.az,{w:"100%",ml:"medium"},f?(0,k.Y)(T.az,{border:"1px solid",borderRadius:n.tag,borderColor:"border.divider",display:"inline-block"},(0,k.Y)(T.az,{mx:"8",my:"4",color:"text.cashback",fontWeight:"bold",textStyle:"tagSmall"},f)):null,(0,k.Y)(J.A,{as:"h3",mb:"xxsmall",textStyle:"descriptorSmall"},l),(0,k.Y)(K.A,{textStyle:"body",color:"text.secondary"},i),m&&p?(0,k.Y)(d.N_,{variant:"tertiary",textStyle:"finePrint",href:(0,Z.V)(p),target:"_blank"},m):null)),(0,k.Y)(T.so,{mb:"medium",mx:"medium",justifyContent:"right"},(0,k.Y)(X.$,{onClick:function(){const e={action:"clickCTA",cta_type:"see all",url:u},t=new CustomEvent(_.Pc,{detail:e});window.dispatchEvent(t)},variant:"primary",fontSize:"buttonSmall",lineHeight:"buttonSmall"},c)))},te={PAGE_HERO:L.Ay,SECTION_HERO:B.A,GENERIC:({items:e,topicData:t})=>{const n={extension_promotion_notification:{component:ee}};return(0,k.Y)(r.Fragment,null,e?.edges?.map((o=>{const r=n[o?.node?.itemData?.template]?.component;if(r){const a={key:o?.node?.id,items:e,topicData:t,node:o?.node,...n[o?.node?.itemData.template].props||{}};return(0,k.Y)(r,a)}return null})))}},ne={Carousel:{hidePagers:!1},PageHeroCarouselTopic:{itemSpan:8,itemContainerProps:{pb:28}},SectionHeroCarouselTopic:{itemSpan:8,itemContainerProps:{pb:28}}};function oe({topicTemplateMap:e,componentDefaultProps:t,...n}){const r={...te,...e};return(0,k.Y)(U.oR,{value:q()({},ne,t)},(0,k.Y)(I.A,(0,o.A)({topicTemplateMap:r,notFoundElement:null,systemErrorElement:null,pt:0,mb:0,disablePagination:!0,removeLastTopicBottomSpacing:!0},n)))}const re="react-root";function ae(e,t){const n=document.createElement("div");n.id=re,e.appendChild(n),function(e,t){const n=e.attachShadow({mode:"open"}),o=document.createElement("main");n.appendChild(o),a.render((0,k.Y)(H,{container:n},t),o)}(n,t)}function ie(e,t,n){ae(e,(0,k.Y)(oe,(0,o.A)({},n,{feedSlugName:t})))}}}]);