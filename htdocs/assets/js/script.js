document.addEventListener("DOMContentLoaded",function(){function e(){document.getElementsByTagName("body")[0].className+="js"}function t(e,t){window.scrollTo(e,t)}function n(e,t,n){var o=document.getElementById(t),s=document.getElementById(e),i=s.clientHeight+"px";s.classList.add("js-sticky"),o.style.setProperty(n,i)}function o(e){var t=document.getElementsByClassName(e);for(i=0;i<t.length;i++)t[i].onclick=function(e){var t=this.getAttribute("data-target");s(t,e)}}function s(e,t){var n=document.getElementById(e);n.classList.contains("js-hidden")?n.classList.remove("js-hidden"):n.classList.add("js-hidden"),c("content"),t.preventDefault()}function l(e){var t=document.getElementsByClassName(e);for(i=0;i<t.length;i++)t[i].onclick=function(e){var t=this.getAttribute("data-target");a(t,e)}}function a(e,t){var n=document.getElementById(e);n.classList.contains("js-closed")?n.classList.remove("js-closed"):n.classList.add("js-closed"),t.preventDefault()}function c(e){elementToFix=document.getElementById(e),scrollY=window.pageYOffset,elementToFix.classList.contains("js-fixed")?(elementToFix.classList.remove("js-fixed"),elementToFix.style.top="",t(0,scrollYMem)):(elementToFix.classList.add("js-fixed"),elementToFix.style.top="-"+scrollY+"px",scrollYMem=scrollY),console.log(scrollYMem)}function d(){n("application-header","content","padding-top"),n("application-footer","content","padding-bottom")}var r=document.getElementsByClassName("tab"),m=document.getElementsByClassName("tabbed-content");r.length!==m.length&&console.log("count of tabs and tabbed-contend isn't consistent");var g=function(e){markTabTrigger=document.getElementsByClassName("tab")[e].classList.add("active"),unhideSelectedContent=document.getElementsByClassName("tabbed-content")[e].classList.add("active"),localStorage.setItem("tabbedContentId",e),console.log("localStorage ID is: "+e)},u=function(){for(i=0;i<m.length;i++)r[i].classList.remove("active"),m[i].classList.remove("active")},f=localStorage.getItem("tabbedContentId");for(null!==f&&r.length>=f?g(f):(console.log("localStorage is empty or stored Id is no longer present - setting default"),g(0)),i=0;i<r.length;i++)!function(e){r[i].onclick=function(){return u(),g(e),!1}}(i);e(),d(),window.onresize=d,l("collapse-trigger"),o("overlay-trigger")});
//# sourceMappingURL=script.js.map
