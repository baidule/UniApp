!function(){var t=function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){var o=n(127),i=n(128),a=n(129);$app_define$("@app-component/index",[],function(t,e,n){a(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=i}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},127:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"shortcut"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"input",attr:{type:"button",name:"shortcut_hasInstalled",value:"桌面图标是否创建"},classList:["item-group-button"],events:{click:"hasInstalledShortcut"}},{type:"input",attr:{type:"button",name:"shortcut_install",value:"创建桌面图标"},classList:["item-group-button"],events:{click:"installShortcut"}}]}]}},128:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column"},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"}}},129:function(t,e){t.exports=function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n("@app-module/system.shortcut"),a=o(i),p=n("@app-module/system.prompt"),r=o(p);t.exports={onInit:function(t){this.$page.setTitleBar({text:"Shortcut"})},hasInstalledShortcut:function(){a.default.hasInstalled({success:function(t){r.default.showToast({message:t?"已创建":"未创建"})}})},installShortcut:function(){a.default.install({success:function(){r.default.showToast({message:"创建成功"})},fail:function(t){201==t&&r.default.showToast({message:"获取创建桌面图标权限失败"})}})}}}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();