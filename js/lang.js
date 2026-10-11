// lang.js
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navProducts: "Products",
    navProjects: "Projects",
    navContact: "Contact Us",
    bannerTitle: "SINOGRAND | Reliable Global Industrial Supply Partner",
    bannerSub: "SINOGRAND specializes in international trade of mineral resources & industrial raw materials. We deliver stable supply, competitive pricing and full-chain logistics service for global manufacturers.",
    aboutShort: "Founded on the principle of integrity and long-term win-win cooperation, SINOGRAND connects overseas mineral resources with global industrial markets. With rich sourcing experience and professional supply chain management, we provide consistent quality inspection, flexible shipment and one-stop trade solutions for our partners worldwide.",
    feature1Title:"Stable Supply",
    feature1Text:"Reliable overseas mineral sources for consistent supply",
    feature2Title:"Strict Quality Control",
    feature2Text:"Full-process quality inspection to guarantee specifications",
    feature3Title:"Professional Logistics",
    feature3Text:"Door-to-door cross-border logistics & customs support",
    feature4Title:"Customized Service",
    feature4Text:"Tailored products & trade solutions for your demands",
    ctaText:"Contact us today for product catalog & quotation."
  },
  zh: {
    navHome: "首页",
    navAbout: "关于我们",
    navProducts: "产品中心",
    navProjects: "项目案例",
    navContact: "联系我们",
    bannerTitle: "中泰国际｜值得信赖的全球工业供应链合作伙伴",
    bannerSub: "中泰国际专注于矿产资源与工业原材料国际贸易，为全球生产企业提供稳定货源、优势价格及全链条物流配套服务。",
    aboutShort: "中泰国际秉持诚信经营、长期共赢的合作理念，搭建海外矿产资源对接全球工业市场的贸易桥梁。依托成熟的货源渠道与专业供应链管理能力，我们为全球合作伙伴提供稳定品质核验、灵活出货方案以及一站式贸易配套服务。我们坚持透明沟通、稳定交付与定制化服务，助力合作伙伴业务持续增长。",
    feature1Title:"稳定货源",
    feature1Text:"可靠海外矿源渠道，持续稳定供货",
    feature2Title:"品质管控",
    feature2Text:"全流程质检，保障产品品质",
    feature3Title:"专业物流",
    feature3Text:"门到门跨境物流方案，高效清关",
    feature4Title:"定制服务",
    feature4Text:"按需匹配产品与贸易方案",
    ctaText:"立即联系我们，获取产品目录与报价"
  }
};

let currentLang = "en";
document.addEventListener('DOMContentLoaded', ()=>{
  loadLang(currentLang);
  document.getElementById('lang-en').onclick = ()=>{loadLang('en');currentLang='en'};
  document.getElementById('lang-zh').onclick = ()=>{loadLang('zh');currentLang='zh'};
})

function loadLang(langKey){
  const t = translations[langKey];
  for(let key in t){
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if(el) el.innerText = t[key];
  }
}
