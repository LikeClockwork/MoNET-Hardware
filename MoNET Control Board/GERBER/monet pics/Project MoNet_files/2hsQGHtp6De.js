if (self.CavalryLogger) { CavalryLogger.start_js(["C8muJ"]); }

__d("FeedbackReactionType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NONE:0,LIKE:1,LOVE:2,WOW:3,HAHA:4,YAY:5,OUCH:6,SORRY:7,ANGER:8,CONFUSED:10,DOROTHY:11,TOTO:12,SELFIE:13};}),null);
__d('ReactTransitionEvents',['ExecutionEnvironment','getVendorPrefixedEventName'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=[];function i(){var m=c('getVendorPrefixedEventName')('animationend'),n=c('getVendorPrefixedEventName')('transitionend');if(m)h.push(m);if(n)h.push(n);}if(c('ExecutionEnvironment').canUseDOM)i();function j(m,n,o){m.addEventListener(n,o,false);}function k(m,n,o){m.removeEventListener(n,o,false);}var l={addEndEventListener:function m(n,o){if(h.length===0){window.setTimeout(o,0);return;}h.forEach(function(p){j(n,p,o);});},removeEndEventListener:function m(n,o){if(h.length===0)return;h.forEach(function(p){k(n,p,o);});}};f.exports=l;}),null);
__d("XLtgPostTranslationController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/intl\/see_translation\/",{ftid:{type:"String",required:true},text_size:{type:"Enum",defaultValue:"medium",enumType:1}});}),null);