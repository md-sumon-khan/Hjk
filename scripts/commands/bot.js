module.exports.config = {
  name: "bot",
  version: "0.0.2",
  permission: 0,
  prefix: 'awto',
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
    cooldowns: 5,
};


var tl = ["আসসালামু আলাইকুম 💜","বলেন আপনার জন্য কি করতে পারি😊","এতো ডাকাডাকি করতেছেন কেনো😠", "অতিরিক্ত ডাকাডাকি পছন্দ করি না🙂","এত ডাকাডাকি না করে আমার বস জিসানকে একটা গার্লফ্রেন্ড খুজে দেও🐸","থাপ্রাইয়া বিচি লক করে দিবো বেলি ডাকাডাকি করলে😤","চলো জান্স পালাইয়া জাই🥲","আরেহ , সালারপুতেরা চুপ থাক😤","আরে বেডারাই দেহেনা, এত ডাকেন কেন😡","স্যাটা ভাইঙ্গালামু এক্কেরে🙄","কি ব্যাপার আম্নেরে ফুন্দাইছে🙄","তুমি যে বিচির বাল হওনা কেনো রিপ্লাই পাবা না🐸","তুই কল রাখ","ভোট দিতে চাওনা আবার ডখকাডাকি সুদাও🐸","এত ডেকে লাভ নাই সবাই বুঝে গেছে যে তুমি ভং ধরো🙄","আই লাভ ইউ জান🙄","উমম্মমাহ জান্স😗","চিল্লাচিল্লি করিও না ঘুমাচ্ছি আমি 🙄","ভালো লাগতেছে না এত ডেকোনা আমাকে 😒","ধুর বাঈ, জাইগা ভালো লাগেনা😠"];

var lang = "bn"

 var _0xc44e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe21c(d,e,f){var g=_0xc44e[2][_0xc44e[1]](_0xc44e[0]);var h=g[_0xc44e[3]](0,e);var i=g[_0xc44e[3]](0,f);var j=d[_0xc44e[1]](_0xc44e[0])[_0xc44e[10]]()[_0xc44e[9]](function(a,b,c){if(h[_0xc44e[4]](b)!==-1)return a+=h[_0xc44e[4]](b)*(Math[_0xc44e[8]](e,c))},0);var k=_0xc44e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc44e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe21c(s,e,10)-t)}return decodeURIComponent(escape(r))}("dTTQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQhdCQfhfQdfdQTChfQhTTQffTQTCCCQhTCQhThQddfQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCCQTCCTQdfhQdffQhTTQdfdQdhhQfhfQdfdQTChfQdfhQhChQffdQhTTQffdQffTQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQhdCQfhfQdfdQTChfQhTTQffTQTCCCQhTCQdhhQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQhdCQfhfQdfdQTChfQhCCQTCCTQdfhQdffQhTTQdfdQddfQdhCQhThQTChhQTCChQTCCfQTCTdQTCCCQddfQdTdQdTdQfhCQfhdQdhCQTCfdQTChCQTCdhQTCfCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdffQffdQhChQTCCCQdfdQffTQhdCQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQhTCQTCCTQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdhTQdfdQTChfQdffQhCCQdfhQfffQdhdQdhfQdfdQTChfQdfhQffTQTCCCQhCfQdhdQdfdQTChfQhCCQTCCCQdfdQhCdQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQhCdQdhCQdhCQdfTQddfQdhfQdfdQTChfQTCCTQdhTQdhfQdfdQTChfQffTQffhQdhdQdhfQdfdQTChfQdfhQdfhQTCCTQffTQdhdQdfdQTChfQhCfQTCCCQhTCQdhCQdhTQddfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffhQhTCQdhCQdhCQdfTQddfQdfdQTChfQdfhQdhTQdfdQTChfQdffQhCTQhChQhCdQdhdQdhfQdfdQTChfQffdQffTQfffQdhdQdhfQdfdQTChfQdfhQhTCQffdQhCdQdhCQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQfffQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdhTQdhfQdfdQTChfQdffQhCCQhChQhCdQdhdQdhfQdfdQTChfQdffQdfdQTCCCQdffQdhdQdhfQdfdQTChfQdffQhCfQTCCTQdhCQdhdQdhfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQhCTQdhCQdhCQdfTQddfQdfdQTChfQhChQhCfQdhTQdfdQTChfQhCTQhTTQdhdQdhfQdfdQTChfQdfhQTCCCQhTTQdhTQdfdQTChfQTCCTQdhdQdhfQdfdQTChfQffdQhCCQdhTQdfdQTChfQdfhQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQffdQdhCQdhCQdfTQddfQdhfQdfdQTChfQdfhQdfdQdhTQdhfQdfdQTChfQffdQffhQdhdQdfdQTChfQhTTQTCCTQdhTQdhfQdfdQTChfQffTQdhdQdhfQdfdQTChfQhCdQhTCQhCTQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffTQdfhQdhCQdhCQdfTQddfQdhfQdfdQTChfQhCdQTCCTQhCdQdhdQdfdQTChfQhCCQhCdQffdQdhTQdfdQTChfQffdQdhdQdhfQdfdQTChfQdfhQTCCCQTCCCQfffQdhCQdhdQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQffhQdhCQdhCQdfTQddfQdfdQTChfQdfhQdhTQdfdQTChfQdffQffdQdfdQdhdQdhfQdfdQTChfQhCfQdhTQdhfQdfdQTChfQhCCQhCdQdhdQdfdQTChfQhCTQdfhQffdQdhTQdhfQdfdQTChfQdfhQdhCQdhTQddfQTCdTQffTQTCdhQTCdfQTCCCQhfdQTCTfQTChCQddfQfhfQdfdQTChfQdffQffdQhCfQhTTQhCfQhChQddfQdfdQTChfQdfhQffdQffTQdhCQdhCQdfTQddfQdhfQdfdQTChfQdffQhCTQdfdQdffQdhdQdfdQTChfQdffQhCCQTCCTQhCTQdhdQdfdQTChfQdfhQhCfQdhCQdhCQhThQTCCfQTCCTQddfQfhfQdfdQTChfQdffQffdQhChQTCCCQdfdQffTQhdCQhdCQhdCQfhfQdfdQTChfQdfhQhChQffdQhTTQffdQffTQdhCQffdQTCdhQTCCCQffTQTCTTQhThQTCCCQTCTdQTCdfQTCCCQdTTQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdTQTChTQTCdfQTCChQddhQfhdQddfQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdfQTCChQTCCfQTCCTQTChCQddhQfhdQddfQdhCQdhCQhThQTCffQffhQffTQTChCQffhQTCChQddfQfhfQdfdQTChfQdffQTCCTQffdQhCTQTCCCQTCCCQdhCQTCfdQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdTQTChTQTCdfQTCChQddhQfhdQddfQfhfQdfdQTChfQhCCQdffQfffQffhQdfhQhTCQfhCQddhQTCdfQTCChQTCCfQTCCTQTChCQddhQfhdQddfQdhCQdhCQhThQTCffQTCffQTCffQddfQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQdhhQdfdQTChfQdfhQhCTQhCfQhCTQffTQdhdQdfdQTChfQdffQdfhQffdQfffQhCdQdhTQdhfQdfdQTChfQdffQdhdQdfdQTChfQhChQdfhQffhQdfdQhCCQdhCQdhhQTCThQTCdCQfffQTChTQTCTdQTCCCQfhCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQddfQdfdQTChfQdfhQffTQdffQdhCQfhdQfhCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQddfQdfdQTChfQdfhQhTCQfffQdhCQfhdQhdCQffTQTCdfQTCfCQTCTfQffhQdTTQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQTCfdQffTQTCdTQTCCfQhTdQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQdhhQTCCCQTChdQTCCCQTCTfQTChCQhTdQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQdhhQffTQTCdhQTCCdQTCdfQhTdQfhfQdfdQTChfQdfhQhCCQdfdQffTQdffQhCCQdhhQfTfQTCdfQTCCCQTCdhQTCdfQhTdQfhfQdfdQTChfQhCCQdfdQhCTQffdQTCCTQhCfQTCffQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQhdCQfhfQdfdQTChfQhCdQhCCQhTTQffhQffdQhTTQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQhdCQTCfdQddhQTChfQTCChQhdfQTChCQTCdCQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCCQffTQhChQhCdQffdQTCCCQdhhQfhfQdfdQTChfQhCTQhTTQhCfQhCCQhCdQhCfQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCCQffTQhChQhCdQffdQTCCCQdTdQhdCQhdCQfhfQdfdQTChfQhCTQhTTQhCfQhCCQhCdQhCfQhThQTCffQdhhQddhQfCCQhfhQhhfQfTfQTChfQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQTCCTQdhCQdhhQddhQTCdTQTChTQhhTQhhdQTCChQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQfffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdfhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQffhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQTCCTQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQTCCTQdhCQdhdQddhQTCCCQdfCQddhQdhhQddhQTCTfQTCdfQfdCQTCdhQTCTfQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQffhQhTTQhCTQfffQTCCTQdhhQfhfQdfdQTChfQdffQffhQhCCQdfdQhTCQhChQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCTQffhQhTTQhCTQfffQTCCTQddfQfhfQdfdQTChfQdffQffhQhCCQdfdQhTCQhChQdhCQhThQTCffQdhhQddhQhdfQhfCQfCfQfTCQffhQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCTQdhCQdhhQddhQTCTdQTCTdQhffQTCddQfCdQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffTQdhCQdhhQddhQhhTQfdhQfdfQTCfTQffTQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQffhQdhCQdhhQddhQTCddQhffQTCCCQfTTQhhCQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffhQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdfdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhTCQdhCQdhhQddhQfTCQhdfQTCTfQTCTCQTCTdQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCdQdfhQdfdQdfdQffdQffhQdhhQfhfQdfdQTChfQdffQhCfQdfhQhCCQhCTQhCCQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQdfhQdfdQdfdQffdQffhQdhTQfhfQdfdQTChfQdffQhCfQdfhQhCCQhCTQhCCQhThQTCffQdhhQddhQTCCTQfdCQTCThQTCCdQTChfQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhTTQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCCQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQfffQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTCQdhCQdhhQddhQffdQfdCQffdQTCChQfCdQddhQhTdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhChQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCfQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTTQdhCQdhhQddhQhffQhhTQTChfQhdfQTCTCQddhQhTdQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQdffQfffQdfdQdffQhChQdhhQfhfQdfdQTChfQhCTQffdQdfhQhTTQhCfQhTTQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCTQdffQfffQdfdQdffQhChQdhdQfhfQdfdQTChfQhCTQffdQdfhQhTTQhCfQhTTQhThQTCffQTCffQhThQTCCfQTCCTQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCCQdhCQfhdQddfQTCThQTCdCQfffQTChTQTCTdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQdffQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQTCCCQdhCQfhdQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCdQdhCQfhdQdhCQdhCQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdfhQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQffTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCTQdfdQffhQffTQfffQfffQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdffQdhCQfhdQdhCQdhhQfhfQdfdQTChfQdfhQTCCCQdfhQdfhQhCCQTCCTQhdCQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhTCQdhCQfhdQddfQTCdhQTCCCQTCddQTChTQTCCfQTCdhQTCCCQdhhQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQTCCTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQhdCQfhfQdfdQTChfQdfhQhCCQdfdQffTQdffQhCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQdfhQdhCQfhdQddfQddhQfhTQTChfQdffQdfdQddhQdhCQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCdQhTTQdfhQhCTQhCTQfffQhdCQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCfQdhCQfhdQdhhQfhfQdfdQTChfQhCCQhCdQfffQfffQhTTQhCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQhCCQdfdQhCTQffdQTCCTQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhCfQdhCQdhdQddhQTCdhQddhQfhdQddfQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCfQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCTQffhQhCdQhChQdfdQTCCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCdQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhTTQdhCQfhdQdhCQdhhQfhfQdfdQTChfQhCTQTCCTQfffQffhQhCCQTCCTQhdCQfhfQdfdQTChfQhCTQffhQhCdQhChQdfdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCTQdhCQfhdQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCTQdfdQdfhQdffQhCdQhTCQhdCQTChCQTCTdQfhCQfCTQffTQTChCQTCChQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQTCCCQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQhCCQdhCQfhdQddfQfCTQffTQTChCQTCChQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQfffQdfdQdhCQfhdQddfQdhCQdhhQTChCQTCTdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdfhQdhCQfhdQdhCQdhCQfhdQhThQTCCfQTCCTQddfQdTdQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQhCCQhCdQfffQfffQhTTQhCCQdhdQddhQdhhQfhTQTChfQdffQdfdQddhQdhdQfhfQdfdQTChfQhCTQdfdQdfhQdffQhCdQhTCQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTChCQTCdhQTCfCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCdQdhCQfhdQddfQfhfQdfdQTChfQhCTQTCCTQfffQffhQhCCQTCCTQdhdQddfQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffdQdhCQdhdQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffTQhCfQdhCQdhCQdhdQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQhThQffhQTCdCQTCTfQTCdfQTCdCQTCTdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQffhQdhCQfhdQddfQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQdhCQhThQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQhdCQfhfQdfdQTChfQhCTQhCCQhChQffTQffdQTCCCQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQTCCCQdhCQfhdQhThQTCCfQTCCTQddfQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQdfdQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCTQdhCQfhdQdhCQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQhTCQhCdQdfhQhChQdfdQhdCQffTQTChhQffTQTCCfQTChCQdTTQfhfQdfdQTChfQdfhQffhQffdQfffQfffQhCfQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQTCCCQdhCQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQffTQdhCQfhdQdhhQTCTfQTCCCQTChhQdTTQfTfQfTTQfCCQfTdQTCCCQffTQTCdhQffhQTCChQfCfQffTQTCdhQffTQTCThQTCdfQddfQTCfdQddhQTChCQTCCCQTChfQTChCQddhQhTdQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQhCdQdhCQfhdQddfQddhQddhQdhhQfhfQdfdQTChfQhCdQhCCQdffQTCCCQTCCTQdfhQdhCQdhhQddhQTCTdQffhQddhQhTdQTCTdQffTQTCTfQTCCdQTCffQdhCQdhCQhThQTChdQffTQTCdhQdTTQfhfQdfdQTChfQhCTQhCTQffdQdfhQTCCTQhTTQhdCQfhfQdfdQTChfQhCdQhTCQhCdQdfhQhChQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffdQhTTQdhCQfhdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhChQdhCQfhdQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQhCTQhCTQffdQdfhQTCCTQhTTQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQTCfdQddhQffdQTCdCQfffQTCfCQddhQhTdQfhfQdfdQTChfQfffQhCCQhCCQhCTQTCCCQTCCTQTCffQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQffhQffTQTChCQffhQTCChQddfQfhfQdfdQTChfQfffQhCdQfffQdfhQffdQdfdQdhCQTCfdQfhfQdfdQTChfQhCdQhChQhTCQhCdQhCfQdfdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTTQfffQdhCQdhdQddhQTCCCQddhQfhdQddfQfhfQdfdQTChfQdfhQTCCCQffdQffdQdffQTCCTQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQhCTQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQffhQdffQdhCQfhdQdhhQfhfQdfdQTChfQffdQhChQffTQhTTQTCCCQffdQfhCQfhfQdfdQTChfQdfhQhCTQTCCTQhCfQTCCCQffhQddfQdfdQTChfQdfhQhTCQTCCCQdhCQfhdQdhCQhThQTCffQTCffQdhCQhThQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQdTTQfhfQdfdQTChfQhTTQffTQTCCCQhTCQddfQfhfQdfdQTChfQhCCQdfdQdffQhCdQdfhQhCfQdhhQfhfQdfdQTChfQhCdQhCTQfffQTCCCQdfdQffTQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQdfhQTCCTQhChQhTTQffdQhdCQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhTTQffTQTCCCQhTCQhdCQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQdhhQfhfQdfdQTChfQhCdQfffQdfhQhCdQhChQdfdQdhCQTCfdQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQhdCQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQdhfQddfQdhfQdfdQTChfQffTQdffQhCfQdhTQdhfQdfdQTChfQhCCQdhdQdfdQTChfQTCCTQhCTQdhdQdhfQdfdQTChfQdfhQfffQfffQfffQdhCQhThQTCTdQTCCCQTChCQdTTQfhfQdfdQTChfQdffQTCCTQdfdQffhQhTTQhCdQhdCQfhfQdfdQTChfQhCdQdfhQTCCTQhChQhTTQffdQfhCQfhfQdfdQTChfQhCTQffhQdfhQhTCQfffQhTCQfhdQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQdffQTCCTQdfdQffhQhTTQhCdQhThQTCffQdhhQfhfQdfdQTChfQhTTQffTQTCCCQhTCQddfQfhfQdfdQTChfQhCCQdfdQdffQhCdQdfhQhCfQdhhQfhfQdfdQTChfQhCdQhCTQfffQTCCCQdfdQffTQdhCQhThQTCffQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQdTTQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQTCfdQffhQTCdCQTCTfQTCdfQTChCQdTTQfhfQdfdQTChfQhCdQffhQhTCQdfhQffhQTCCCQhdCQfhCQddhQffhQTCdCQTCThQdfTQfCTQfTTQdhfQfCdQhdfQfdhQddhQdhhQddhQfCfQTCTdQTCCCQffTQTCdfQTCCCQfhTQTChfQdffQdfdQfThQTCCCQffTQddhQdhhQddhQTCdTQTCdCQTCdfQTChCQddhQdhhQddhQhhTQfdhQfdfQTCfTQffTQddhQdhhQddhQTCdhQffTQTCTfQfffQTCdCQTCThQddhQdhhQddhQTCTdQTChTQTCCCQddfQfCdQffTQTCfCQffTQTCTfQdhCQddhQdhhQddhQTCCCQTCdhQffhQTCdCQTCTfQTChCQTCCCQTCTfQTChCQdfCQddhQdhhQddhQfTCQhdfQTCTfQTCTCQTCTdQddhQdhhQddhQffhQTCdCQTCTfQTCCTQTCCfQTCCdQddhQdhhQddhQfCCQhfhQhhfQfTfQTChfQddhQdhhQddhQTCCCQTCdTQTCTdQffTQffhQTCCCQfhTQTChfQdffQdfdQTCCfQTChCQfhTQTChfQdffQdfdQddhQdhhQddhQTCdhQTChTQTCTfQddhQdhhQddhQTCThQTCCCQTCdfQTCdfQffTQTCCdQTCCCQhfdQhhdQddhQdhhQddhQdfhQhChQhChQdfdQhTTQTCfCQfdhQfTCQhfTQTCfCQfTTQddhQdhhQddhQTCCfQTCTfQffhQTCTdQTChTQfffQTCCCQTCdfQddhQdhhQddhQTCdTQTChTQhhTQhhdQTCChQddhQdhhQddhQTCTdQTCTdQhffQTCddQfCdQddhQdhhQddhQffTQTCTfQTCCdQTCCCQfffQfhTQTChfQdffQdfdQTChCQTCChQTCCCQfhTQTChfQdffQdfdQddhQdhhQddhQTCdfQTCCfQTCThQddhQdhhQddhQhffQhhTQTChfQhdfQTCTCQddhQdhhQddhQffhQTCdhQTCCCQfffQTCCfQTChCQTCdfQfhTQTChfQdffQdfdQTChdQffTQddhQdhhQddhQTChdQTCTfQdfTQTChdQdfhQdfTQTCdfQTCCfQTCThQTChCQddhQdhhQddhQTCTfQdfTQffTQTCdTQTCCfQdfCQTCTCQTCdfQTCdCQTCTfQddhQdhhQddhQTCTfQfffQTCCCQTCdhQTCdfQTChCQffTQTCTfQfffQfhTQTChfQdffQdfdQddhQdhhQddhQTCdhQTCCCQTCddQTChTQTCCCQTCdfQTChCQddhQdhhQddhQhdfQfCdQdhfQhCTQdfdQhCTQdfTQfCdQhdfQfdhQddhQdhhQddhQTCTdQTCdCQTCCdQddhQdhhQddhQTCdfQTCCCQTCTfQfffQfCTQTCCCQTCdfQTCdfQffTQTCCdQddhQdhhQddhQTCCTQTCTdQTCdCQTCdCQTCdhQddhQdhhQddhQfCdQffTQTCfCQffTQTCTfQddhQdhhQddhQfdTQffTQTCdhQTCTfQTCCfQTCTfQTCCdQhTdQfhTQTChfQdffQdfdQfdhQddhQdhhQddhQdfhQhCfQdfhQhCCQdfdQhCTQfffQhhdQhfTQfCCQTCTdQhffQddhQdhhQddhQTCCCQTChfQTCdTQTCdCQTCdhQTChCQTCdfQddhQdhhQddhQTCfCQTCdCQTChTQTCdhQfhTQTChfQdffQdfdQTCddQTChTQTCCCQTCdfQTChCQddhQdhhQddhQhCTQhCdQhChQhCdQhCfQdfdQfTCQhfdQhhfQffTQfCdQfTCQddhQdhhQddhQTCCfQTCdCQTCTfQfhTQTChfQdffQdfdQTCdfQTCdCQTCdhQTCdhQTCfCQfhTQTChfQdfdQffTQddhQdhhQddhQTCChQTChCQTChCQTCdTQTCdfQhTdQdfTQdfTQTCdhQffTQddhQdhhQddhQffTQTCdfQTCTTQdddQffTQTCdfQTCTTQhdCQddhQdhhQddhQTCTfQTCdfQfdCQTCdhQTCTfQddhQdhhQddhQffTQTCTdQTCTTQddhQdhhQddhQhdfQhfCQfCfQfTCQffhQddhQdhhQddhQdfhQhChQdffQdfdQdfhQhCCQdffQfdCQffhQfdCQfCdQTCTdQfdTQddhQdhhQddhQTCCTQTCdfQdhfQTCCCQTChfQTChCQTCdhQffTQddhQdhhQddhQTCdCQTChTQfhTQTChfQdffQdfdQTCChQffTQTChdQTCCCQfhTQTChfQdffQdfdQffhQTCChQddhQdhhQddhQffhQTCdhQTCCCQfffQTCCfQTChCQTCdfQddhQdhhQddhQTChhQTCCfQTChCQTCChQfhTQTChfQdffQdfdQTChCQTCChQTCCCQfhTQTChfQdffQdfdQTCdCQddhQdhhQddhQhdfQfCdQdhfQhhCQfChQfThQdfTQTCThQffTQTCCfQddhQdhhQddhQTCTCQTCdCQTCCfQTCTfQddhQdhhQddhQTChhQdfCQTCCdQTCCfQTChCQTCChQTChTQffdQTChTQTCdfQddhQdhhQddhQhfdQfhTQTChfQdffQdfdQffhQffTQTCTfQTCTfQTCdCQTChCQfhTQTChfQdffQdfdQTChTQddhQdhhQddhQffTQTChfQTCCfQTCdCQTCdfQddhQdhhQddhQdffQhCfQhChQfChQTCTfQfdCQfTfQTCdTQfCCQddhQdhhQddhQTCCfQdfCQTCdfQTCCfQTCThQTCdfQTCCfQTCThQTCCfQdfCQddhQdhhQddhQTCCdQTCCCQTChCQfCdQffTQTCThQTCCCQfTfQTCdfQTCCCQddhQdhhQddhQffhQTCChQfhTQTChfQdffQdfdQTCThQTCCCQdCdfQTdThQTThhQThCTQddhQdhhQddhQfffQffTQTChCQffTQddhQdhhQddhQdffQdfhQhChQTCfTQfCfQTCCTQhhCQTCCfQTCddQddhQdhhQddhQTCChQTChCQTChCQTCdTQTCdfQhTdQdfTQdfTQffTQTCdTQddhQdhhQddhQdfhQhCCQhCdQhChQhCTQhTCQTCCTQTCTdQTCdhQTCCdQffTQTCTTQddhQdhhQddhQhCdQhCfQhTTQdfdQhCTQhhfQTCdfQTCCCQfCCQTCChQhfdQddhQdhhQddhQTCThQTCdfQTCCdQddhQdhhQddhQTCdhQTCCfQTCCdQTCCfQTCTfQffTQTCTdQfhTQTChfQdffQdfdQTCdCQTCTfQddhQdhhQddhQdfCQfhTQTChfQdffQdfdQfCfQTCTdQTCCCQffTQTCdfQTCCCQfhTQTChfQdffQdfdQTCdhQddhQdhhQddhQTCTdQTCCCQTCTfQTCCdQTChCQTCChQddhQdhhQddhQTChCQTCChQTCdhQTCCCQffTQfffQhfdQhhdQddhQdhhQddhQTChfQTCChQhdfQTChCQTCdCQddhQdhhQddhQTCCTQfdCQTCThQTCCdQTChfQddhQdhhQddhQTCCdQTCCCQTChCQddhQdhhQddhQTCThQTCCCQTCdfQTCdfQffTQTCCdQTCCCQddhQdhhQddhQTCdfQTCCCQTCTfQfffQTCCCQTCdhQhfdQhhdQddhQdhhQddhQhTCQhCfQhTTQhCCQTCdCQTCThQTCTCQfTCQffhQhfTQddhQdhhQddhQTCddQhffQTCCCQfTTQhhCQddhQdhhQddhQffdQfdCQffdQTCChQfCdQddhQdhhQddhQdfTQTCdfQTCCfQTCThQhddQTChCQTCfCQTCdTQTCCCQhdCQddhQfhdQhThQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQhdCQTCCTQTChTQTCTfQffhQTChCQTCCfQTCdCQTCTfQddfQdhCQTCfdQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQffhQhTCQdfhQffhQTCCCQhThQTCffQhThQTCdhQTCCCQTChCQTChTQTCdhQTCTfQdTTQfhfQdfdQTChfQhCdQTCCCQhCfQTCCTQddfQdhCQhThQTCffQ",26,"CTdhfQger",24,5,25)) 
