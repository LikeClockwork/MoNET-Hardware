if (self.CavalryLogger) { CavalryLogger.start_js(["FwCoY"]); }

__d("VideoBroadcastAPIStatus",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNPUBLISHED:"UNPUBLISHED",LIVE:"LIVE",LIVE_STOPPED:"LIVE_STOPPED",PROCESSING:"PROCESSING",VOD:"VOD",SCHEDULED:"SCHEDULED",SCHEDULED_PREVIEW:"SCHEDULED_PREVIEW",SCHEDULED_LIVE:"SCHEDULED_LIVE",SCHEDULED_EXPIRED:"SCHEDULED_EXPIRED"};}),null);
__d('InsightsTabbedSection.react',['React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.getTabHref=function(l){'use strict';return l.tabHref;};k.getKey=function(l){'use strict';return l.sectionKey;};k.getTitle=function(l){'use strict';return l.title;};k.getSubtitle=function(l){'use strict';return l.subtitle;};k.prototype.render=function(){'use strict';return (c('React').createElement('div',{className:this.props.className},this.props.children));};function k(){'use strict';h.apply(this,arguments);}k.propTypes={className:j.string,tabHref:j.string,sectionKey:j.string.isRequired,title:j.string.isRequired,subtitle:j.string};f.exports=k;}),null);
__d("InsightsSectionUtils",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={areSectionsEqual:function i(j,k){return (j.type.getKey(j.props)===k.type.getKey(k.props));},getSectionByKey:function i(j,k){for(var l=k.length-1;l>=0;--l){var m=k[l];if(m.type.getKey(m.props)===j)return m;}}};f.exports=h;}),null);
__d("XReactComposerRestrictionTabNuxController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/react_composer\/edit\/restriction_tab_nux\/",{});}),null);
__d('InsightsTabbedSectionsMixin',['fbt','cx','AsyncRequest','Image.react','InsightsSectionUtils','React','ReactLayeredComponentMixin_DEPRECATED','XReactComposerRestrictionTabNuxController','XUIAmbientNUX.react','XUIText.react','XUICard.react','XUIPageNavigation.react','joinClasses','PagesComposerAudiencesConstants'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('XUIPageNavigation.react').Group,k=c('XUIPageNavigation.react').Item,l=c('PagesComposerAudiencesConstants').TABS,m=-22,n=50,o=220,p={mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],getActiveSection:function q(){var r=null,s=c('React').Children.toArray(this.props.children);if(this.props.activeKey){r=c('InsightsSectionUtils').getSectionByKey(this.props.activeKey,s);if(!r)r=s[0];}else r=s[0];return r;},onTabClick:function q(r){var s=this.getActiveSection();if(!c('InsightsSectionUtils').areSectionsEqual(r,s)){this.props.onTabClick&&this.props.onTabClick(r);if(r.type.getKey(r.props)===l.GATING&&this.state&&this.state.showRestrictionTabNux)this._onRestrictionTabNuxClose();var t=r.props.nuxProp;if(t&&this.state.nuxShownStates[t.name])this._closeSectionNUX(t);}},getTabContent:function q(r){var s=r.type.getSubtitle(r.props);if(s){return (c('React').createElement('div',{className:this.theme.subtitledBlockClass},c('React').createElement('div',null,r.type.getTitle(r.props)),c('React').createElement('div',{className:this.theme.subtitleClass},s)));}else return (c('React').createElement('span',null,r.type.getTitle(r.props)));},componentDidMount:function q(){if(this.state&&this.state.showRestrictionTabNux){var r=c('XReactComposerRestrictionTabNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(r).setMethod('POST').setData({impression:true}).send();}},componentWillUnmount:function q(){if(this.state&&this.state.showRestrictionTabNux)this.setState({showRestrictionTabNux:false});},_onRestrictionTabNuxClose:function q(){this.setState({showRestrictionTabNux:false});var r=c('XReactComposerRestrictionTabNuxController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(r).setMethod('POST').setData({acked:true}).send();},_renderRestrictionTabNux:function q(){return (c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:function(){return this.refs.restrictionTab;}.bind(this),onCloseButtonClick:this._onRestrictionTabNuxClose,offsetY:m,offsetX:n,position:'below',shown:true,width:'custom',customwidth:o},c('React').createElement('div',null,c('React').createElement(c('XUIText.react'),null,h._("Limit who can see this post.")))));},renderLayers:function q(){if(this.state&&this.state.showRestrictionTabNux)return this._renderRestrictionTabNux();return {};},render:function q(){var r=this.getActiveSection(),s=c('React').Children.toArray(this.props.children),t=s.map(function(u,v){var w=c('InsightsSectionUtils').areSectionsEqual(u,r),x=this.props.smallTitle?this.theme.smallNavLinkClass:this.theme.navLinkClass;if(w)x=c('joinClasses')(x,this.theme.activeNavLinkClass);var y=null;if(w){var z=null;if(u.props.nubSource){z=u.props.nubSource;}else z=this.theme.nubSrc;y=c('React').createElement('noscript',null);if(z)y=c('React').createElement(c('Image.react'),{className:this.theme.nubClass,src:z});}if(z===undefined&&this.theme.activeSelector)y=c('React').createElement('span',{className:this.theme.activeSelector});var aa=this.getTabContent(u),ba=null;if(u.type.getKey(u.props)===l.GATING)ba='restrictionTab';if(this.props.useCenteredTabsStyle){return (c('React').createElement(k,{href:u.type.getTabHref(u.props),key:'section'+u.type.getKey(u.props)},c('React').createElement('span',{onClick:this.onTabClick.bind(this,u),className:"_fjc"},aa)));}else return (c('React').createElement('a',{className:x,href:u.type.getTabHref(u.props),key:'section'+u.type.getKey(u.props),title:u.type.getTitle(u.props),onClick:this.onTabClick.bind(this,u),ref:ba},y,aa));},this);if(this.props.useCenteredTabsStyle){return (c('React').createElement('div',null,c('React').createElement(c('XUICard.react'),{className:"_fjd"},c('React').createElement('div',{className:"_fje _5vx1"},c('React').createElement(c('XUIPageNavigation.react'),{activeTabKey:'section'+r.type.getKey(r.props)},c('React').createElement(j,null,t)))),c('React').createElement('div',{className:"_2pie _2pio"},r)));}else return (c('React').createElement('div',{className:this.props.className},c('React').createElement('div',{className:this.props.longNav?this.theme.longNavClass:this.theme.navClass},t),r));},_closeSectionNUX:function q(r){this.state.nuxShownStates[r.name]=false;this.forceUpdate();r.onCloseButtonClick();}};f.exports=p;}),null);
__d('InsightsTabbedSections.react',['cx','ix','InsightsTabbedSectionsMixin','React'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').createClass({displayName:'InsightsTabbedSections',mixins:[c('InsightsTabbedSectionsMixin')],theme:{activeNavLinkClass:"_5cmg",navClass:"_5cmi",longNavClass:"_3bxh",navLinkClass:"_5cmf",smallNavLinkClass:"_4d7-",nubClass:"_5cmh",nubSrc:i('/images/components/Insights/InsightsTabbedSections/nub.png'),subtitledBlockClass:"_1fkz",subtitleClass:"_1fk-"}});f.exports=j;}),null);
__d('AbstractTextArea.react',['cx','AbstractTextField.react','React'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').Component;i=babelHelpers.inherits(l,k);j=i&&i.prototype;l.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractTextField.react'),this.props,c('React').createElement('textarea',{className:"_58an",onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,rows:this.props.rows,tabIndex:this.props.tabIndex,ref:function(m){return this.$AbstractTextArea1=m;}.bind(this)})));};l.prototype.focusInput=function(){'use strict';this.$AbstractTextArea1&&this.$AbstractTextArea1.focus();};l.prototype.blurInput=function(){'use strict';this.$AbstractTextArea1&&this.$AbstractTextArea1.blur();};l.prototype.getTextFieldDOM=function(){'use strict';return this.$AbstractTextArea1;};l.prototype.getValue=function(){'use strict';return this.$AbstractTextArea1?this.$AbstractTextArea1.value:'';};function l(){'use strict';i.apply(this,arguments);}l.propTypes=c('AbstractTextField.react').propTypes;f.exports=l;}),null);
__d("Collection",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){if(!i.__collection__){var k=new Function();for(var l in i.prototype)k.prototype[l]=h._call.bind(null,l);i.__collection__=k;}var m=new i.__collection__();m._elements=j;return m;}h._call=function(i){var j=Array.prototype.slice.call(arguments,1);this._elements.forEach(function(k){k[i].apply(k,j);});return this;};f.exports=h;}),null);
__d('Drag',['Event','Arbiter','DOM','Style','Vector'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};h.currentDraggable=null;h.grab=function(i){if(h.currentDraggable)h._onmouseup();i.lastDragOver=null;h.attachDragEvents();h.currentDraggable=i;};h.attachDragEvents=function(){document.onselectstart=function(){document.onselectstart=null;return false;};if(h.dragEventsAttached)return;h.dragEventsAttached=true;c('Arbiter').subscribe('scroller/scroll',h._onmousemove);c('Event').listen(document,{mousemove:h._onmousemove,mouseup:h._onmouseup});};h.droppables={};h.addDroppable=function(i,j){(h.droppables[i]=h.droppables[i]||[]).push(j);};h.removeDroppable=function(i,j){h.droppables[i]=h.droppables[i].filter(function(k){return k!=j;});};h.getOffsetParent=function(i){if(c('DOM').isNodeOfType(i,['body','html']))return document.body;while((i=i.parentNode)&&i!==document.body)if(c('Style').get(i,'position')!=='static')return i;return document.body;};h._onmousemove=function(event,i){if(!h.currentDraggable)return;var j=i||c('Vector').getEventPosition(event),k=h.currentDraggable,l=h.droppables[k.namespace];if(k.namespace&&k.active&&l){var m={};l.forEach(function(s){m[s.zIndex]=s.zIndex;});var n=[];for(var o in m)n.push(m[o]);n.sort();var p=k.lastDragOver,q=null;for(var r=n.length-1;r>=0;r--)if(p&&p.dom!=null&&p.zIndex==n[r]&&p.isDraggedOver(j)){q=p;break;}else for(o=0;o<l.length;o++){if(n[r]!=l[o].zIndex)continue;if(p!=l[o]&&k.dom!=l[o].dom&&l[o].isDraggedOver(j)){q=l[o];r=-1;break;}}if(q&&q!=p){q.ondragover(k);h.currentDraggable.adjustCursorPosition();}if(q)q.ondragmove(k,j.sub(c('Vector').getElementPosition(q.dom)));k.lastDragOver=q;}h.currentDraggable._onmousemove(j);};h._onmouseup=function(i){document.onselectstart=null;if(h.currentDraggable){h.currentDraggable._ondrop();h.currentDraggable=null;}};f.exports=h;}),null);
__d('Draggable',['Event','Arbiter','Collection','DOM','Drag','Rect','Style','Vector','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){'use strict';this.canvas=j;this.scrollZone=50;this.velocity=100;this.coefficient=1;}h.prototype.activate=function(){'use strict';this.activate=c('emptyFunction');this.event=c('Event').listen(document,'mousemove',this._onmousemove.bind(this));this.interval=setInterval(this._intervalHandler.bind(this),50);this.cursor=null;};h.prototype.deactivate=function(){'use strict';delete this.activate;this.event&&this.event.remove();this.event=null;clearInterval(this.interval);};h.prototype._onmousemove=function(event){'use strict';this.cursor=c('Vector').getEventPosition(event);};h.prototype._intervalHandler=function(){'use strict';if(!this.cursor)return;var j=this.canvas==document.body?c('Rect').getViewportBounds():new (c('Rect'))(this.canvas),k=new (c('Rect'))(this.cursor.y-j.t,j.r-this.cursor.x,j.b-this.cursor.y,this.cursor.x-j.l),l=new (c('Vector'))(0,0);if(k.t<k.b&&k.t<this.scrollZone){l.y=-this.scrollZone+k.t;}else if(k.b<this.scrollZone)l.y=this.scrollZone-k.b;l.y=this._doMath(l.y);if(k.l<k.r&&k.l<this.scrollZone){l.x=-this.scrollZone+k.l;}else if(k.r<this.scrollZone)l.x=this.scrollZone-k.r;l.x=this._doMath(l.x);if(l.x||l.y){l.scrollElementBy(this.canvas);if(document.body==this.canvas){var m=c('Vector').getScrollPosition();l.scrollElementBy(this.canvas);var n=c('Vector').getScrollPosition();this.cursor=this.cursor.add(n.sub(m));}else l.scrollElementBy(this.canvas);c('Arbiter').inform('scroller/scroll',this.cursor);}};h.prototype._doMath=function(j){'use strict';j=j>=0?Math.min(j,this.scrollZone):Math.max(j,-this.scrollZone);return Math.floor(Math.pow(j/this.scrollZone*this.velocity,this.coefficient));};h.findScrollParent=function(j){'use strict';var k;j=j.parentNode;while(j){if(j.scrollHeight!=j.offsetTop){k=c('Style').get(j,'overflowY');if(k=='scroll'||k=='auto')return j;}j=j.parentNode;}return document.body;};function i(j){'use strict';if(!j)throw new Error('Element should be a DOM node');if(!(this instanceof i)){if(j instanceof Array){var k=[];j.forEach(function(l){k.push(new i(l));});return new (c('Collection'))(i,k);}else return new i(j);}else{this.data={};this.handles=[];this.dom=j;this.boundingBox=null;this.useScroller=true;this.grabPctX=this.grabPctY=0;this._shouldKillEvents=true;this.addHandle(this.dom);}}i.prototype.destroy=function(){'use strict';this.handles.forEach(function(j){this.removeHandle(j.obj);}.bind(this));this.data=this.dom=null;};i.prototype.adjustCursorPosition=function(){'use strict';var j=c('Vector').getElementDimensions(this.dom);this.cursorPositionVector=new (c('Vector'))(parseInt(this.grabPctX*j.x,10),parseInt(this.grabPctY*j.y,10));};i.prototype._onclick=function(event){'use strict';if(!this._shouldKillEvents)return true;if(this.active)return c('Event').kill(event);};i.prototype._ongrab=function(j){'use strict';this.ongrab();if(this.useScroller){if(!this.scroller)this.scroller=new h(h.findScrollParent(this.dom));this.scroller.activate();}if(this.active){if(!this.oldPosition)this.oldPosition=this.dom.style.position;var k=c('Drag').getOffsetParent(this.dom);if(k!==document.body)j=j.sub(c('Vector').getElementPosition(k));this.dom.style.position=this.absolute?'absolute':'relative';j.sub(this.cursorPositionVector).setElementPosition(this.dom);}};i.prototype._onmousedown=function(event){'use strict';if(!(event.which&&event.which===1||event.button&&event.button===1))return;var j=event.getTarget();if(c('DOM').isNodeOfType(j,['input','select','textarea','object','embed']))return true;var k=c('Vector').getEventPosition(event),l=c('Vector').getElementDimensions(this.dom);this.draggableInitialVector=c('Vector').getElementPosition(this.dom);this.cursorPositionVector=k.sub(this.draggableInitialVector);this.grabPctX=l.x===0?0:this.cursorPositionVector.x/l.x;this.grabPctY=l.y===0?0:this.cursorPositionVector.y/l.y;c('Drag').grab(this,event);if(this.gutter){this.cursorInitialVector=k;}else{this._setActive(true);this._ongrab(k);}if(!this._shouldKillEvents)return true;return c('Event').kill(event);};i.prototype._onmousemove=function(j){'use strict';if(!this.active)if(j.distanceTo(this.cursorInitialVector)>=this.gutter){this._setActive(true);this._ongrab(j);}if(this.active){var k=j.sub(this.cursorPositionVector),l;if(this.boundingBox){var m=c('Rect').newFromVectors(k,c('Vector').getElementDimensions(this.dom));m=m.boundWithin(this.boundingBox);k=m.getPositionVector();if(this.boundingBox.w()===0){l=new (c('Vector'))(this.draggableInitialVector.x,k.y,'document');}else if(this.boundingBox.h()===0){l=new (c('Vector'))(k.x,this.draggableInitialVector.y,'document');}else l=k;}else l=k;var n=c('Drag').getOffsetParent(this.dom);if(n!==document.body)l=l.sub(c('Vector').getElementPosition(n));l.setElementPosition(this.dom);this.ondrag(j);}};i.prototype._ondrop=function(){'use strict';this.scroller&&this.scroller.deactivate();if(this.active){setTimeout(function(){this._setActive(false);}.bind(this),0);this.ondrop(this.scroller&&this.scroller.cursor);if(this.lastDragOver)this.lastDragOver.ondrop(this);}};i.prototype.killDrag=function(){'use strict';this._setActive(false);c('Drag')._onmouseup();};i.prototype.forceDrop=function(){'use strict';c('Drag')._onmouseup();};i.prototype.setBoundingBox=function(j){'use strict';this.boundingBox=j;return this;};i.prototype.resetPosition=function(){'use strict';this.dom.style.position=this.oldPosition;this.oldPosition=null;this.dom.style.left='';this.dom.style.top='';return this;};i.prototype.setUseAbsolute=function(j){'use strict';this.absolute=j;return this;};i.prototype.setDragHandler=function(j){'use strict';this.ondrag=j;return this;};i.prototype.setGrabHandler=function(j){'use strict';this.ongrab=j;return this;};i.prototype.setDropHandler=function(j){'use strict';this.ondrop=j;return this;};i.prototype.setGutter=function(j){'use strict';this.gutter=j;return this;};i.prototype.setNamespace=function(j){'use strict';this.namespace=j;return this;};i.prototype.setUseScroller=function(j){'use strict';this.useScroller=j;return this;};i.prototype.setAvoidKillingEvents=function(j){'use strict';this._shouldKillEvents=!j;return this;};i.prototype.addHandle=function(j){'use strict';if(this.handles.length==1&&this.handles[0].obj==this.dom)this.removeHandle(this.dom);this.handles.push({obj:j,evt:[c('Event').listen(j,'mousedown',this._onmousedown.bind(this)),c('Event').listen(j,'click',this._onclick.bind(this)),c('Event').listen(j,'drag',this._killUnlessActive.bind(this)),c('Event').listen(j,'selectstart',this._killUnlessActive.bind(this))]});return this;};i.prototype.removeHandle=function(j){'use strict';this.handles=this.handles.filter(function(k){if(k.obj!=j){return true;}else{k.evt.forEach(function(l){l.remove();});return false;}});};i.prototype.getDOM=function(){'use strict';return this.dom;};i.prototype.setKey=function(j,k){'use strict';this.data[j]=k;return this;};i.prototype.getKey=function(j){'use strict';return this.data[j];};i.prototype._setActive=function(j){'use strict';if(!this.dom)return;this.dom.activeDrag=this.active=j;for(var k=0;k<this.handles.length;k++)this.handles[k].obj.activeDrag=j;};i.prototype._killUnlessActive=function(j){'use strict';if(!this._shouldKillEvents)return;if(j.getTarget()!==document.activeElement)return j.kill();};i.prototype.ondrag=c('emptyFunction');i.prototype.ongrab=c('emptyFunction');i.prototype.ondrop=c('emptyFunction');i.prototype.gutter=0;i.prototype.handles=null;f.exports=i;}),null);
__d('DialogExpansion',['Animation','DialogPosition','LoadingDialogDimensions','Style'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=400,i=100;function j(k){'use strict';this._dialog=k;this._fixedTopMargin=k.getFixedTopPosition();this._ignoreFixedTopInShortViewport=k.shouldIgnoreFixedTopInShortViewport();}j.prototype.enable=function(){'use strict';this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};j.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};j.prototype.setTargetWidth=function(k){'use strict';this._targetWidth=k;};j.prototype._onAfterShow=function(){'use strict';this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(c('Style').get(this._inner,'height'),10)))return;var k=this._getWidth(),l=c('LoadingDialogDimensions').HEIGHT,m=c('DialogPosition').calculateTopMargin(k,l);c('Style').apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});c('Style').apply(this._outer,{width:k+'px',height:l+'px',marginTop:m+'px',overflow:'hidden'});setTimeout(function(){var n=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)n=this._targetWidth;var o=parseInt(c('Style').get(this._inner,'height'),10),p=c('DialogPosition').calculateTopMargin(n,o,this._fixedTopMargin,this._ignoreFixedTopInShortViewport);this._growThenFade(n,o,p);}.bind(this),100);};j.prototype._growThenFade=function(k,l,m){'use strict';new (c('Animation'))(this._outer).to('width',k).to('height',l).to('marginTop',m).duration(h).ease(c('Animation').ease.both).ondone(this._fadeIn.bind(this)).go();};j.prototype._fadeIn=function(){'use strict';c('Style').set(this._outer,'overflow','');c('Style').set(this._outer,'height','');new (c('Animation'))(this._inner).from('opacity',0).to('opacity',1).ondone(function(){this._dialog.inform('afterexpand');}.bind(this)).duration(i).go();};j.prototype._getWidth=function(){'use strict';return c('LoadingDialogDimensions').WIDTH;};f.exports=j;}),null);