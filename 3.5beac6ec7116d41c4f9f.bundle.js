(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1183:function(module,exports,__webpack_require__){var balanced=__webpack_require__(928);function reduceFunctionCall(string,functionRE,callback){var call=string;return function getFunctionCalls(call,functionRE){var expressions=[],fnRE="string"==typeof functionRE?new RegExp("\\b("+functionRE+")\\("):functionRE;do{var searchMatch=fnRE.exec(call);if(!searchMatch)return expressions;if(void 0===searchMatch[1])throw new Error("Missing the first couple of parenthesis to get the function identifier in "+functionRE);var fn=searchMatch[1],startIndex=searchMatch.index,matches=balanced("(",")",call.substring(startIndex));if(!matches||matches.start!==searchMatch[0].length-1)throw new SyntaxError(fn+"(): missing closing ')' in the value '"+call+"'");expressions.push({matches:matches,functionIdentifier:fn}),call=matches.post}while(fnRE.test(call));return expressions}(string,functionRE).reduce(function(string,obj){return string.replace(obj.functionIdentifier+"("+obj.matches.body+")",function evalFunctionCall(string,functionIdentifier,callback,call,functionRE){return callback(reduceFunctionCall(string,functionRE,callback),functionIdentifier,call)}(obj.matches.body,obj.functionIdentifier,callback,call,functionRE))},string)}module.exports=reduceFunctionCall},1184:function(module,exports,__webpack_require__){var Mexp=__webpack_require__(1185);Mexp.prototype.formulaEval=function(){"use strict";for(var pop1,pop2,pop3,disp=[],arr=this.value,i=0;i<arr.length;i++)1===arr[i].type||3===arr[i].type?disp.push({value:3===arr[i].type?arr[i].show:arr[i].value,type:1}):13===arr[i].type?disp.push({value:arr[i].show,type:1}):0===arr[i].type?disp[disp.length-1]={value:arr[i].show+("-"!=arr[i].show?"(":"")+disp[disp.length-1].value+("-"!=arr[i].show?")":""),type:0}:7===arr[i].type?disp[disp.length-1]={value:(1!=disp[disp.length-1].type?"(":"")+disp[disp.length-1].value+(1!=disp[disp.length-1].type?")":"")+arr[i].show,type:7}:10===arr[i].type?(pop1=disp.pop(),pop2=disp.pop(),"P"===arr[i].show||"C"===arr[i].show?disp.push({value:"<sup>"+pop2.value+"</sup>"+arr[i].show+"<sub>"+pop1.value+"</sub>",type:10}):disp.push({value:(1!=pop2.type?"(":"")+pop2.value+(1!=pop2.type?")":"")+"<sup>"+pop1.value+"</sup>",type:1})):2===arr[i].type||9===arr[i].type?(pop1=disp.pop(),pop2=disp.pop(),disp.push({value:(1!=pop2.type?"(":"")+pop2.value+(1!=pop2.type?")":"")+arr[i].show+(1!=pop1.type?"(":"")+pop1.value+(1!=pop1.type?")":""),type:arr[i].type})):12===arr[i].type&&(pop1=disp.pop(),pop2=disp.pop(),pop3=disp.pop(),disp.push({value:arr[i].show+"("+pop3.value+","+pop2.value+","+pop1.value+")",type:12}));return disp[0].value},module.exports=Mexp},1185:function(module,exports,__webpack_require__){var Mexp=__webpack_require__(1186);Mexp.prototype.postfixEval=function(UserDefined){"use strict";(UserDefined=UserDefined||{}).PI=Math.PI,UserDefined.E=Math.E;for(var pop1,pop2,pop3,stack=[],arr=this.value,bool=void 0!==UserDefined.n,i=0;i<arr.length;i++)1===arr[i].type?stack.push({value:arr[i].value,type:1}):3===arr[i].type?stack.push({value:UserDefined[arr[i].value],type:1}):0===arr[i].type?void 0===stack[stack.length-1].type?stack[stack.length-1].value.push(arr[i]):stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value):7===arr[i].type?void 0===stack[stack.length-1].type?stack[stack.length-1].value.push(arr[i]):stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value):8===arr[i].type?(pop1=stack.pop(),pop2=stack.pop(),stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)})):10===arr[i].type?(pop1=stack.pop(),void 0===(pop2=stack.pop()).type?(pop2.value=pop2.concat(pop1),pop2.value.push(arr[i]),stack.push(pop2)):void 0===pop1.type?(pop1.unshift(pop2),pop1.push(arr[i]),stack.push(pop1)):stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)})):2===arr[i].type||9===arr[i].type?(pop1=stack.pop(),void 0===(pop2=stack.pop()).type?(console.log(pop2),(pop2=pop2.concat(pop1)).push(arr[i]),stack.push(pop2)):void 0===pop1.type?(pop1.unshift(pop2),pop1.push(arr[i]),stack.push(pop1)):stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)})):12===arr[i].type?(void 0!==(pop1=stack.pop()).type&&(pop1=[pop1]),pop2=stack.pop(),pop3=stack.pop(),stack.push({type:1,value:arr[i].value(pop3.value,pop2.value,new Mexp(pop1))})):13===arr[i].type&&(bool?stack.push({value:UserDefined[arr[i].value],type:3}):stack.push([arr[i]]));if(stack.length>1)throw new Mexp.exception("Uncaught Syntax error");return stack[0].value>1e15?"Infinity":parseFloat(stack[0].value.toFixed(15))},Mexp.eval=function(str,tokens,obj){return void 0===tokens?this.lex(str).toPostfix().postfixEval():void 0===obj?void 0!==tokens.length?this.lex(str,tokens).toPostfix().postfixEval():this.lex(str).toPostfix().postfixEval(tokens):this.lex(str,tokens).toPostfix().postfixEval(obj)},module.exports=Mexp},1186:function(module,exports,__webpack_require__){var Mexp=__webpack_require__(1187);Mexp.prototype.toPostfix=function(){"use strict";for(var elem,popped,prep,pre,ele,post=[],stack=[{value:"(",type:4,pre:0}],arr=this.value,i=1;i<arr.length;i++)if(1===arr[i].type||3===arr[i].type||13===arr[i].type)1===arr[i].type&&(arr[i].value=Number(arr[i].value)),post.push(arr[i]);else if(4===arr[i].type)stack.push(arr[i]);else if(5===arr[i].type)for(;4!==(popped=stack.pop()).type;)post.push(popped);else if(11===arr[i].type){for(;4!==(popped=stack.pop()).type;)post.push(popped);stack.push(popped)}else{pre=(elem=arr[i]).pre,prep=(ele=stack[stack.length-1]).pre;var flag="Math.pow"==ele.value&&"Math.pow"==elem.value;if(pre>prep)stack.push(elem);else{for(;prep>=pre&&!flag||flag&&pre<prep;)popped=stack.pop(),ele=stack[stack.length-1],post.push(popped),prep=ele.pre,flag="Math.pow"==elem.value&&"Math.pow"==ele.value;stack.push(elem)}}return new Mexp(post)},module.exports=Mexp},1187:function(module,exports,__webpack_require__){var Mexp=__webpack_require__(1188);function inc(arr,val){for(var i=0;i<arr.length;i++)arr[i]+=val;return arr}var token=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],show=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],eva=[Mexp.math.sin,Mexp.math.cos,Mexp.math.tan,"PI","(",")",Mexp.math.P,Mexp.math.C,Mexp.math.asin,Mexp.math.acos,Mexp.math.atan,"7","8","9",Math.floor,Mexp.math.cosh,Mexp.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",Mexp.math.div,Mexp.math.fact,Mexp.math.tanh,Mexp.math.atanh,Mexp.math.mod,"1","2","3",Mexp.math.mul,Mexp.math.sinh,Mexp.math.asinh,"E",Mexp.math.log,"0",".",Mexp.math.add,Mexp.math.sub,",",Mexp.math.sigma,"n",Mexp.math.Pi,Math.pow],preced={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},type=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],type0={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},type1={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},type_1={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},empty={},type_3={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},type6={1:!0},newAr=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];function match(str1,str2,i,x){for(var f=0;f<x;f++)if(str1[i+f]!==str2[f])return!1;return!0}Mexp.addToken=function(tokens){for(i=0;i<tokens.length;i++){x=tokens[i].token.length;var temp=-1;if(x<newAr.length)for(y=0;y<newAr[x].length;y++)if(tokens[i].token===newAr[x][y]){temp=token.indexOf(newAr[x][y]);break}-1===temp?(token.push(tokens[i].token),type.push(tokens[i].type),newAr.length<=tokens[i].token.length&&(newAr[tokens[i].token.length]=[]),newAr[tokens[i].token.length].push(tokens[i].token),eva.push(tokens[i].value),show.push(tokens[i].show)):(token[temp]=tokens[i].token,type[temp]=tokens[i].type,eva[temp]=tokens[i].value,show[temp]=tokens[i].show)}},Mexp.lex=function(inp,tokens){"use strict";var key,i,x,y,str=[{type:4,value:"(",show:"(",pre:0}],ptc=[],inpStr=inp,pcounter=0,allowed=type0,bracToClose=0,asterick=empty,prevKey="";void 0!==tokens&&Mexp.addToken(tokens);var obj={};for(i=0;i<inpStr.length;i++)if(" "!=inpStr[i]){key="";sec:for(x=inpStr.length-i>newAr.length-2?newAr.length-1:inpStr.length-i;x>0;x--)for(y=0;y<newAr[x].length;y++)if(match(inpStr,newAr[x][y],i,x)){key=newAr[x][y];break sec}if(i+=key.length-1,""===key)throw new Mexp.exception("Can't understand after "+inpStr.slice(i));var index=token.indexOf(key),cToken=key,cType=type[index],cEv=eva[index],cPre=preced[cType],cShow=show[index],pre=str[str.length-1];for(j=ptc.length;j--;)if(0===ptc[j]&&-1!==[0,2,3,5,9,11,12,13].indexOf(cType)){if(!0!==allowed[cType])throw new Mexp.exception(key+" is not allowed after "+prevKey);str.push({value:")",type:5,pre:0,show:")"}),allowed=type1,asterick=type_3,inc(ptc,-1).pop()}if(!0!==allowed[cType])throw new Mexp.exception(key+" is not allowed after "+prevKey);if(!0===asterick[cType]&&(cType=2,cEv=Mexp.math.mul,cShow="&times;",cPre=3,i-=key.length),obj={value:cEv,type:cType,pre:cPre,show:cShow},0===cType)allowed=type0,asterick=empty,inc(ptc,2).push(2),str.push(obj),str.push({value:"(",type:4,pre:0,show:"("});else if(1===cType)1===pre.type?(pre.value+=cEv,inc(ptc,1)):str.push(obj),allowed=type1,asterick=type_1;else if(2===cType)allowed=type0,asterick=empty,inc(ptc,2),str.push(obj);else if(3===cType)str.push(obj),allowed=type1,asterick=type_3;else if(4===cType)pcounter+=ptc.length,ptc=[],bracToClose++,allowed=type0,asterick=empty,str.push(obj);else if(5===cType){if(!bracToClose)throw new Mexp.exception("Closing parenthesis are more than opening one, wait What!!!");for(;pcounter--;)str.push({value:")",type:5,pre:0,show:")"});pcounter=0,bracToClose--,allowed=type1,asterick=type_3,str.push(obj)}else if(6===cType){if(pre.hasDec)throw new Mexp.exception("Two decimals are not allowed in one number");1!==pre.type&&(pre={value:0,type:1,pre:0},str.push(pre),inc(ptc,-1)),allowed=type6,inc(ptc,1),asterick=empty,pre.value+=cEv,pre.hasDec=!0}else 7===cType&&(allowed=type1,asterick=type_3,inc(ptc,1),str.push(obj));8===cType?(allowed=type0,asterick=empty,inc(ptc,4).push(4),str.push(obj),str.push({value:"(",type:4,pre:0,show:"("})):9===cType?(9===pre.type?pre.value===Mexp.math.add?(pre.value=cEv,pre.show=cShow,inc(ptc,1)):pre.value===Mexp.math.sub&&"-"===cShow&&(pre.value=Mexp.math.add,pre.show="+",inc(ptc,1)):5!==pre.type&&7!==pre.type&&1!==pre.type&&3!==pre.type&&13!==pre.type?"-"===cToken&&(allowed=type0,asterick=empty,inc(ptc,2).push(2),str.push({value:Mexp.math.changeSign,type:0,pre:21,show:"-"}),str.push({value:"(",type:4,pre:0,show:"("})):(str.push(obj),inc(ptc,2)),allowed=type0,asterick=empty):10===cType?(allowed=type0,asterick=empty,inc(ptc,2),str.push(obj)):11===cType?(allowed=type0,asterick=empty,str.push(obj)):12===cType?(allowed=type0,asterick=empty,inc(ptc,6).push(6),str.push(obj),str.push({value:"(",type:4,pre:0})):13===cType&&(allowed=type1,asterick=type_3,str.push(obj)),inc(ptc,-1),prevKey=key}for(var j=ptc.length;j--;)0===ptc[j]&&(str.push({value:")",show:")",type:5,pre:3}),inc(ptc,-1).pop());if(!0!==allowed[5])throw new Mexp.exception("complete the expression");for(;bracToClose--;)str.push({value:")",show:")",type:5,pre:3});return str.push({type:5,value:")",show:")",pre:0}),new Mexp(str)},module.exports=Mexp},1188:function(module,exports){var Mexp=function(parsed){this.value=parsed};Mexp.math={isDegree:!0,acos:function(x){return Mexp.math.isDegree?180/Math.PI*Math.acos(x):Math.acos(x)},add:function(a,b){return a+b},asin:function(x){return Mexp.math.isDegree?180/Math.PI*Math.asin(x):Math.asin(x)},atan:function(x){return Mexp.math.isDegree?180/Math.PI*Math.atan(x):Math.atan(x)},acosh:function(x){return Math.log(x+Math.sqrt(x*x-1))},asinh:function(x){return Math.log(x+Math.sqrt(x*x+1))},atanh:function(x){return Math.log((1+x)/(1-x))},C:function(n,r){var pro=1,other=n-r,choice=r;choice<other&&(choice=other,other=r);for(var i=choice+1;i<=n;i++)pro*=i;return pro/Mexp.math.fact(other)},changeSign:function(x){return-x},cos:function(x){return Mexp.math.isDegree&&(x=Mexp.math.toRadian(x)),Math.cos(x)},cosh:function(x){return(Math.pow(Math.E,x)+Math.pow(Math.E,-1*x))/2},div:function(a,b){return a/b},fact:function(n){if(n%1!=0)return"NAN";for(var pro=1,i=2;i<=n;i++)pro*=i;return pro},inverse:function(x){return 1/x},log:function(i){return Math.log(i)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(n,r){for(var pro=1,i=Math.floor(n)-Math.floor(r)+1;i<=Math.floor(n);i++)pro*=i;return pro},Pi:function(low,high,ex){for(var pro=1,i=low;i<=high;i++)pro*=Number(ex.postfixEval({n:i}));return pro},pow10x:function(e){for(var x=1;e--;)x*=10;return x},sigma:function(low,high,ex){for(var sum=0,i=low;i<=high;i++)sum+=Number(ex.postfixEval({n:i}));return sum},sin:function(x){return Mexp.math.isDegree&&(x=Mexp.math.toRadian(x)),Math.sin(x)},sinh:function(x){return(Math.pow(Math.E,x)-Math.pow(Math.E,-1*x))/2},sub:function(a,b){return a-b},tan:function(x){return Mexp.math.isDegree&&(x=Mexp.math.toRadian(x)),Math.tan(x)},tanh:function(x){return Mexp.sinha(x)/Mexp.cosha(x)},toRadian:function(x){return x*Math.PI/180}},Mexp.exception=function(message){this.message=message},module.exports=Mexp},1654:function(module,__webpack_exports__,__webpack_require__){"use strict";var color=__webpack_require__(158);function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}var getSvgFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing;return{fill:color.b,stroke:"none",fontFamily:b,fontSize:c,letterSpacing:d}},fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",svgFont={fontFamily:fontFamily,light:{fontWeight:200},bold:{fontWeight:700},start:{textAnchor:"start"},middle:{textAnchor:"middle"},end:{textAnchor:"end"},tiny:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:10,letterSpacing:.4})),small:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:12,letterSpacing:.4})),regular:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:14,letterSpacing:.2})),large:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:18,spacing:0}))};function svgLabel_extends(){return(svgLabel_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}__webpack_require__.d(__webpack_exports__,"a",function(){return baseLabel}),__webpack_require__.d(__webpack_exports__,"c",function(){return tickLabels});var baseLabel=svgLabel_extends({},svgFont.small,svgFont.bold,svgFont.middle,{pointerEvents:"none"}),baseTickLabel=(svgLabel_extends({},svgFont.tiny,svgFont.bold,svgFont.middle,{pointerEvents:"none"}),svgLabel_extends({},svgFont.small,svgFont.light,svgFont.middle,{pointerEvents:"none"})),tickLabels={top:svgLabel_extends({},baseTickLabel,{dy:"-0.25em"}),right:svgLabel_extends({},baseTickLabel,svgFont.start,{dx:"0.25em",dy:"0.25em"}),bottom:svgLabel_extends({},baseTickLabel,{dy:"0.25em"}),left:svgLabel_extends({},baseTickLabel,svgFont.end,{dx:"-0.25em",dy:"0.25em"})};__webpack_exports__.b={baseLabel:baseLabel,baseTickLabel:baseTickLabel,tickLabels:tickLabels}},1683:function(module,__webpack_exports__,__webpack_require__){"use strict";var color=__webpack_require__(158);function _extends(){return(_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}var getFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing,e=void 0===d?0:d,f=a.lineHeight,g=a.padding;return{color:color.b,fontFamily:b,fontSize:c,letterSpacing:e,lineHeight:f+"px",paddingBottom:g,paddingTop:g}},fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",font_light={fontWeight:200},svgLabel=(_extends({},getFont({fontFamily:fontFamily,fontSize:10,lineHeight:12,letterSpacing:.4})),_extends({},getFont({fontFamily:fontFamily,fontSize:12,lineHeight:16,letterSpacing:.4})),_extends({},getFont({fontFamily:fontFamily,fontSize:14,lineHeight:18,letterSpacing:.2})),_extends({},getFont({fontFamily:fontFamily,fontSize:18,lineHeight:24,spacing:0})),__webpack_require__(1654));function chartTheme_extends(){return(chartTheme_extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c])Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}).apply(this,arguments)}var colors=color.a,labelStyles=chartTheme_extends({},svgLabel.a,font_light),gridStyles={stroke:colors.grid,strokeWidth:1},xAxisStyles={stroke:colors.gridDark,strokeWidth:2,label:{bottom:chartTheme_extends({},svgLabel.a),top:chartTheme_extends({},svgLabel.a)}},yAxisStyles={stroke:colors.grid,strokeWidth:1,label:{left:chartTheme_extends({},svgLabel.a),right:chartTheme_extends({},svgLabel.a)}},xTickStyles={stroke:colors.grid,length:8,label:{bottom:chartTheme_extends({},svgLabel.c.bottom),top:chartTheme_extends({},svgLabel.c.top)}},yTickStyles={stroke:colors.grid,length:8,label:{left:chartTheme_extends({},svgLabel.c.left),right:chartTheme_extends({},svgLabel.c.right)}};__webpack_exports__.a={colors:colors,labelStyles:labelStyles,gridStyles:gridStyles,xAxisStyles:xAxisStyles,xTickStyles:xTickStyles,yAxisStyles:yAxisStyles,yTickStyles:yTickStyles}},891:function(module,__webpack_exports__,__webpack_require__){"use strict";var classnames=__webpack_require__(3),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__(1),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(0),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Group(_ref){var _ref$top=_ref.top,top=void 0===_ref$top?0:_ref$top,_ref$left=_ref.left,left=void 0===_ref$left?0:_ref$left,transform=_ref.transform,className=_ref.className,children=_ref.children,restProps=_objectWithoutProperties(_ref,["top","left","transform","className","children"]);return react_default.a.createElement("g",_extends({className:classnames_default()("vx-group",className),transform:transform||"translate(".concat(left,", ").concat(top,")")},restProps),children)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function vx_legend_es_extends(){return(vx_legend_es_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}function vx_legend_es_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function vx_legend_es_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function LegendItem(_ref){var _ref$flexDirection=_ref.flexDirection,flexDirection=void 0===_ref$flexDirection?"row":_ref$flexDirection,_ref$alignItems=_ref.alignItems,alignItems=void 0===_ref$alignItems?"center":_ref$alignItems,_ref$margin=_ref.margin,margin=void 0===_ref$margin?"0":_ref$margin,_ref$display=_ref.display,display=void 0===_ref$display?"flex":_ref$display,children=_ref.children,restProps=vx_legend_es_objectWithoutProperties(_ref,["flexDirection","alignItems","margin","display","children"]);return react_default.a.createElement("div",vx_legend_es_extends({className:"vx-legend-item",style:{display:display,alignItems:alignItems,flexDirection:flexDirection,margin:margin}},restProps),children)}function LegendLabel(_ref){var _ref$flex=_ref.flex,flex=void 0===_ref$flex?"1":_ref$flex,label=_ref.label,_ref$margin=_ref.margin,margin=void 0===_ref$margin?"5px 0":_ref$margin,_ref$align=_ref.align,align=void 0===_ref$align?"left":_ref$align,children=_ref.children;return react_default.a.createElement("div",{className:"vx-legend-label",style:{justifyContent:align,display:"flex",flex:flex,margin:margin}},children||label)}function ShapeRect(_ref){var fill=_ref.fill,width=_ref.width,height=_ref.height,style=_ref.style;return react_default.a.createElement("div",{style:_objectSpread({width:width,height:height,background:fill},style)})}function ShapeCircle(_ref){var fill=_ref.fill,width=_ref.width,height=_ref.height,style=_ref.style;"string"==typeof width&&(width=0),"string"==typeof height&&(height=0);var size=Math.max(width,height),radius=size/2;return react_default.a.createElement("svg",{width:size,height:size},react_default.a.createElement(Group,{top:radius,left:radius},react_default.a.createElement("circle",{r:radius,fill:fill,style:style})))}function valueOrIdentity(x){return x&&x.value?x.value:x}function LegendShape(_ref){var _ref$shape=_ref.shape,shape=void 0===_ref$shape?ShapeRect:_ref$shape,width=_ref.width,height=_ref.height,margin=_ref.margin,label=_ref.label,fill=_ref.fill,size=_ref.size,shapeStyle=_ref.shapeStyle;return react_default.a.createElement("div",{className:"vx-legend-shape",style:{display:"flex",width:size?size(_objectSpread({},label)):width,height:size?size(_objectSpread({},label)):height,margin:margin}},function renderShape(_ref){var _ref$shape=_ref.shape,shape=void 0===_ref$shape?"rect":_ref$shape,_ref$fill=_ref.fill,fill=void 0===_ref$fill?valueOrIdentity:_ref$fill,_ref$size=_ref.size,size=void 0===_ref$size?valueOrIdentity:_ref$size,width=_ref.width,height=_ref.height,label=_ref.label,_ref$shapeStyle=_ref.shapeStyle,shapeStyle=void 0===_ref$shapeStyle?function(x){}:_ref$shapeStyle,props={width:width,height:height,label:label,fill:fill(_objectSpread({},label)),size:size(_objectSpread({},label)),style:shapeStyle(_objectSpread({},label))};return"string"==typeof shape?"rect"===shape?react_default.a.createElement(ShapeRect,props):react_default.a.createElement(ShapeCircle,props):react_default.a.isValidElement(shape)?react_default.a.cloneElement(shape,props):react_default.a.createElement(shape,props)}({shape:shape,label:label,width:width,height:height,fill:fill,shapeStyle:shapeStyle}))}Group.propTypes={top:prop_types_default.a.number,left:prop_types_default.a.number,transform:prop_types_default.a.string,className:prop_types_default.a.string,children:prop_types_default.a.any},__webpack_require__.d(__webpack_exports__,"c",function(){return LegendOrdinal}),__webpack_require__.d(__webpack_exports__,"a",function(){return LegendItem}),__webpack_require__.d(__webpack_exports__,"b",function(){return LegendLabel}),LegendItem.propTypes={flexDirection:prop_types_default.a.string,alignItems:prop_types_default.a.string,margin:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),children:prop_types_default.a.any},LegendLabel.propTypes={align:prop_types_default.a.string,label:prop_types_default.a.any,flex:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),margin:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.number]),children:prop_types_default.a.any},ShapeRect.propTypes={fill:prop_types_default.a.any,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),style:prop_types_default.a.object},ShapeCircle.propTypes={fill:prop_types_default.a.any,width:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),height:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),style:prop_types_default.a.object},LegendShape.propTypes={shape:prop_types_default.a.any,width:prop_types_default.a.any,height:prop_types_default.a.any,margin:prop_types_default.a.any,label:prop_types_default.a.any,fill:prop_types_default.a.any,size:prop_types_default.a.any,shapeStyle:prop_types_default.a.any},Legend.propTypes={className:prop_types_default.a.string,style:prop_types_default.a.any,domain:prop_types_default.a.array,scale:prop_types_default.a.oneOfType([prop_types_default.a.func,prop_types_default.a.object]).isRequired,shapeWidth:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),shapeHeight:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.string]),shapeMargin:prop_types_default.a.any,labelAlign:prop_types_default.a.string,labelFlex:prop_types_default.a.string,labelMargin:prop_types_default.a.string,itemMargin:prop_types_default.a.string,direction:prop_types_default.a.string,itemDirection:prop_types_default.a.string,fill:prop_types_default.a.any,size:prop_types_default.a.any,shape:prop_types_default.a.any,shapeStyle:prop_types_default.a.any,labelFormat:prop_types_default.a.func,labelTransform:prop_types_default.a.func,children:prop_types_default.a.func};var defaultStyle={display:"flex"};function Legend(_ref){var className=_ref.className,_ref$style=_ref.style,style=void 0===_ref$style?defaultStyle:_ref$style,shapeStyle=_ref.shapeStyle,scale=_ref.scale,shape=_ref.shape,domain=_ref.domain,_ref$fill=_ref.fill,fill=void 0===_ref$fill?valueOrIdentity:_ref$fill,_ref$size=_ref.size,size=void 0===_ref$size?valueOrIdentity:_ref$size,_ref$labelFormat=_ref.labelFormat,labelFormat=void 0===_ref$labelFormat?valueOrIdentity:_ref$labelFormat,_ref$labelTransform=_ref.labelTransform,labelTransform=void 0===_ref$labelTransform?defaultTransform:_ref$labelTransform,_ref$shapeWidth=_ref.shapeWidth,shapeWidth=void 0===_ref$shapeWidth?15:_ref$shapeWidth,_ref$shapeHeight=_ref.shapeHeight,shapeHeight=void 0===_ref$shapeHeight?15:_ref$shapeHeight,_ref$shapeMargin=_ref.shapeMargin,shapeMargin=void 0===_ref$shapeMargin?"2px 4px 2px 0":_ref$shapeMargin,_ref$labelAlign=_ref.labelAlign,labelAlign=void 0===_ref$labelAlign?"left":_ref$labelAlign,_ref$labelFlex=_ref.labelFlex,labelFlex=void 0===_ref$labelFlex?"1":_ref$labelFlex,_ref$labelMargin=_ref.labelMargin,labelMargin=void 0===_ref$labelMargin?"0 4px":_ref$labelMargin,_ref$itemMargin=_ref.itemMargin,itemMargin=void 0===_ref$itemMargin?"0":_ref$itemMargin,_ref$direction=_ref.direction,direction=void 0===_ref$direction?"column":_ref$direction,_ref$itemDirection=_ref.itemDirection,itemDirection=void 0===_ref$itemDirection?"row":_ref$itemDirection,children=_ref.children,restProps=vx_legend_es_objectWithoutProperties(_ref,["className","style","shapeStyle","scale","shape","domain","fill","size","labelFormat","labelTransform","shapeWidth","shapeHeight","shapeMargin","labelAlign","labelFlex","labelMargin","itemMargin","direction","itemDirection","children"]),labels=(domain=domain||scale.domain()).map(labelTransform({scale:scale,labelFormat:labelFormat}));return children?children(labels):react_default.a.createElement("div",{className:classnames_default()("vx-legend",className),style:_objectSpread({},style,{flexDirection:direction})},labels.map(function(label,i){var text=label.text;return react_default.a.createElement(LegendItem,vx_legend_es_extends({key:"legend-".concat(label,"-").concat(i),margin:itemMargin,flexDirection:itemDirection,label:label},restProps),react_default.a.createElement(LegendShape,{shape:shape,height:shapeHeight,width:shapeWidth,margin:shapeMargin,label:label,fill:fill,size:size,shapeStyle:shapeStyle}),react_default.a.createElement(LegendLabel,{label:text,flex:labelFlex,margin:labelMargin,align:labelAlign}))}))}function defaultTransform(_ref2){var scale=_ref2.scale,labelFormat=_ref2.labelFormat;return function(d,i){return{datum:d,index:i,text:"".concat(labelFormat(d,i)),value:scale(d)}}}function LegendOrdinal(_ref){var scale=_ref.scale,domain=_ref.domain,_ref$labelTransform=_ref.labelTransform,labelTransform=void 0===_ref$labelTransform?defaultTransform$3:_ref$labelTransform,_ref$labelFormat=_ref.labelFormat,labelFormat=void 0===_ref$labelFormat?valueOrIdentity:_ref$labelFormat,restProps=vx_legend_es_objectWithoutProperties(_ref,["scale","domain","labelTransform","labelFormat"]);return react_default.a.createElement(Legend,vx_legend_es_extends({scale:scale,domain:domain,labelFormat:labelFormat,labelTransform:labelTransform},restProps))}function defaultTransform$3(_ref2){var scale=_ref2.scale,labelFormat=_ref2.labelFormat;return function(d,i){return{datum:d,index:i,text:"".concat(labelFormat(d,i)),value:scale(d)}}}prop_types_default.a.func.isRequired,prop_types_default.a.array,prop_types_default.a.func,prop_types_default.a.func,prop_types_default.a.string,prop_types_default.a.func.isRequired,prop_types_default.a.array,prop_types_default.a.number,prop_types_default.a.func,prop_types_default.a.func,LegendOrdinal.propTypes={scale:prop_types_default.a.func.isRequired,domain:prop_types_default.a.array,labelTransform:prop_types_default.a.func,labelFormat:prop_types_default.a.func},prop_types_default.a.func.isRequired,prop_types_default.a.array,prop_types_default.a.func,prop_types_default.a.func,prop_types_default.a.string,prop_types_default.a.string,prop_types_default.a.string},896:function(module,exports,__webpack_require__){var stack,balanced=__webpack_require__(928),reduceFunctionCall=__webpack_require__(1183),mexp=__webpack_require__(1184),MAX_STACK=100,NESTED_CALC_RE=/(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;module.exports=function reduceCSSCalc(value,decimalPrecision){function evaluateExpression(expression,functionIdentifier,call){if(stack++>MAX_STACK)throw stack=0,new Error("Call stack overflow for "+call);if(""===expression)throw new Error(functionIdentifier+"(): '"+call+"' must contain a non-whitespace string");var units=function getUnitsInExpression(expression){var uniqueUnits=[],uniqueLowerCaseUnits=[],unitRegEx=/[\.0-9]([%a-z]+)/gi,matches=unitRegEx.exec(expression);for(;matches;)matches&&matches[1]&&(-1===uniqueLowerCaseUnits.indexOf(matches[1].toLowerCase())&&(uniqueUnits.push(matches[1]),uniqueLowerCaseUnits.push(matches[1].toLowerCase())),matches=unitRegEx.exec(expression));return uniqueUnits}(expression=function evaluateNestedExpression(expression,call){expression=expression.replace(/((?:\-[a-z]+\-)?calc)/g,"");var matches,evaluatedPart="",nonEvaluatedPart=expression;for(;matches=NESTED_CALC_RE.exec(nonEvaluatedPart);){matches[0].index>0&&(evaluatedPart+=nonEvaluatedPart.substring(0,matches[0].index));var balancedExpr=balanced("(",")",nonEvaluatedPart.substring([0].index));if(""===balancedExpr.body)throw new Error("'"+expression+"' must contain a non-whitespace string");var evaluated=evaluateExpression(balancedExpr.body,"",call);evaluatedPart+=balancedExpr.pre+evaluated,nonEvaluatedPart=balancedExpr.post}return evaluatedPart+nonEvaluatedPart}(expression,call));if(units.length>1||expression.indexOf("var(")>-1)return functionIdentifier+"("+expression+")";var unit=units[0]||"";"%"===unit&&(expression=expression.replace(/\b[0-9\.]+%/g,function(percent){return.01*parseFloat(percent.slice(0,-1))}));var result,toEvaluate=expression.replace(new RegExp(unit,"gi"),"");try{result=mexp.eval(toEvaluate)}catch(e){return functionIdentifier+"("+expression+")"}return"%"===unit&&(result*=100),(functionIdentifier.length||"%"===unit)&&(result=Math.round(result*decimalPrecision)/decimalPrecision),result+=unit}return stack=0,decimalPrecision=Math.pow(10,void 0===decimalPrecision?5:decimalPrecision),value=value.replace(/\n+/g," "),reduceFunctionCall(value,/((?:\-[a-z]+\-)?calc)\(/,evaluateExpression)}},928:function(module,exports){function balanced(a,b,str){a instanceof RegExp&&(a=maybeMatch(a,str)),b instanceof RegExp&&(b=maybeMatch(b,str));var r=range(a,b,str);return r&&{start:r[0],end:r[1],pre:str.slice(0,r[0]),body:str.slice(r[0]+a.length,r[1]),post:str.slice(r[1]+b.length)}}function maybeMatch(reg,str){var m=str.match(reg);return m?m[0]:null}function range(a,b,str){var begs,beg,left,right,result,ai=str.indexOf(a),bi=str.indexOf(b,ai+1),i=ai;if(ai>=0&&bi>0){for(begs=[],left=str.length;i>=0&&!result;)i==ai?(begs.push(i),ai=str.indexOf(a,i+1)):1==begs.length?result=[begs.pop(),bi]:((beg=begs.pop())<left&&(left=beg,right=bi),bi=str.indexOf(b,i+1)),i=ai<bi&&ai>=0?ai:bi;begs.length&&(result=[left,right])}return result}module.exports=balanced,balanced.range=range}}]);
//# sourceMappingURL=3.5beac6ec7116d41c4f9f.bundle.js.map