import{d as m,o as c,f as r,a as t,b as l,w as i,h as u,F as _,g as v,e as h,t as o,r as d,i as b}from"./runtime-core.esm-bundler.638065378913190000.js";const w={class:"w-full shadow-lg hover:shadow-2xl transition-all delay-100 ease-in rounded-md px-4 h-full mt-14"},y={class:"card px-4 py-8 flex flex-wrap h-full"},z={class:"h-[300px] overflow-hidden"},k=["width","height","alt"],T={class:"mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"},L={class:"mb-2 text-2xl font-semibold tracking-tight text-black"},B=["innerHTML"],C={class:"flex items-center mt-auto"},D=["alt"],N=m({__name:"article-card",props:{article:null},setup(e){return(x,g)=>{const a=d("tez-link"),s=b("tez-src");return c(),r("div",w,[t("div",y,[t("div",z,[l(a,{class:"no-underline",to:e.article.slug,title:e.article.title},{default:i(()=>[u(t("img",{width:e.article.image.width,height:e.article.image.height,alt:e.article.image.alternativeText},null,8,k),[[s,e.article.image.url]])]),_:1},8,["to","title"])]),t("div",T,[t("div",null,[(c(!0),r(_,null,v(e.article.categories,n=>(c(),r("div",{class:"mb-4 inline-block",key:n.name},[l(a,{to:n.slug,class:"rounded-sm bg-[#eeeeee] px-2 py-1 text-black text-xs leading-4 inline-flex mr-4 mb-0"},{default:i(()=>[h(o(n.name),1)]),_:2},1032,["to"])]))),128)),l(a,{class:"no-underline",to:e.article.slug,title:e.article.title},{default:i(()=>[t("h5",L,o(e.article.title),1)]),_:1},8,["to","title"]),t("div",{class:"text-gray-700 text-base my-4",innerHTML:[e.article.content.slice(0,220).concat("...")]},null,8,B)])]),t("div",C,[l(a,{to:e.article.author.slug,class:"flex items-center text-black no-underline"},{default:i(()=>[u(t("img",{class:"rounded-full mr-4",alt:e.article.author.picture.alternativeText,height:"50",width:"50"},null,8,D),[[s,e.article.author.picture.url]]),h(" "+o(e.article.author.name),1)]),_:1},8,["to"])])])])}}}),P={class:"container mx-auto p-5 sm:p-10 md:p-16 relative"},F=m({__name:"articles",props:{data:null},setup(e){return(x,g)=>{const a=d("tez-iterator"),s=d("TezLazy");return c(),r("div",P,[t("div",null,[l(s,{class:"tezLazy",sourcePath:e.data.dynamicSourcePath},{default:i(n=>[l(a,{class:"tezIterator flex flex-wrap -mx-4",items:n.items},{default:i(f=>[l(N,{article:f},null,8,["article"])]),_:2},1032,["items"])]),_:1},8,["sourcePath"])])])}}});export{F as default};
