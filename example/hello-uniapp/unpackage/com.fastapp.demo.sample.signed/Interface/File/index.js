!function(){var t=function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var n=i(97),o=i(98),l=i(99);$app_define$("@app-component/index",[],function(t,e,i){l(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=n,i.exports.style=o}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},97:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"file"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"下载文件："+this.downloadfile}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"download",value:"下载文件"},classList:["item-group-button"],events:{click:"downloadFile"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"复制文件："+this.copyfile}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"copy",value:"复制文件"},classList:["item-group-button"],events:{click:"copyFile"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"获取文件信息："+this.getfile}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"get",value:"获取文件信息"},classList:["item-group-button"],events:{click:"getFile"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:"文件列表："},classList:["item-group-text"]},{type:"text",attr:{value:function(){return this.$item.uri+"---"+this.$item.length+"---"+this.$item.lastModifiedTime}},classList:["item-group-text"],repeat:function(){return this.listfile}},{type:"input",attr:{type:"button",name:"list",value:"文件列表"},classList:["item-group-button"],events:{click:"listFile"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"移动文件："+this.movefile}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"move",value:"移动文件"},classList:["item-group-button"],events:{click:"moveFile"}}]},{type:"div",attr:{},classList:["item-group"],children:[{type:"text",attr:{value:function(){return"删除文件："+this.deletefile}},classList:["item-group-text"]},{type:"input",attr:{type:"button",name:"delete",value:"删除文件"},classList:["item-group-button"],events:{click:"deleteFile"}}]}]}]}},98:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column"},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"}}},99:function(t,e){t.exports=function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=i("@app-module/system.request"),l=n(o),a=i("@app-module/system.file"),r=n(a);t.exports={data:function(){return{downloadfile:"",movefile:"",copyfile:"",listfile:[],getfile:"",deletefile:""}},onInit:function(t){this.$page.setTitleBar({text:"File"})},downloadFile:function(){var t=this;l.default.download({url:"http://img-cdn-qiniu.dcloud.net.cn/icon3.png",success:function(e){l.default.onDownloadComplete({token:e.token,success:function(e){t.downloadfile=e.uri},fail:function(t,e){console.log("...fail...")}})},fail:function(t,e){console.log("...fail...")}})},moveFile:function(){var t=this,e="internal://mass/imgs/temp/";r.default.move({srcUri:t.downloadfile,dstUri:e,success:function(i){t.movefile=e},fail:function(i,n){t.movefile=n+"..."+e}})},copyFile:function(){var t=this,e="internal://mass/imgs/";r.default.copy({srcUri:t.downloadfile,dstUri:e,success:function(i){t.copyfile=e},fail:function(i,n){t.copyfile=n+"..."+e}})},listFile:function(){var t=this,e="internal://mass/imgs";r.default.list({uri:e,success:function(e){for(var i=JSON.parse(e),n=i.fileList,o=[],l=0;l<n.length;l++)o.push({uri:"路径:"+n[l].uri,length:"大小:"+n[l].length,lastModifiedTime:"创建时间:"+t.getDate(n[l].lastModifiedTime)});t.listfile=[].concat(o)},fail:function(e,i){t.listfile=i+"..."+t.downloadfile}})},getFile:function(){var t=this;r.default.get({uri:t.downloadfile,success:function(e){var e=JSON.parse(e);t.getfile="路径:"+e.uri+"---大小:"+e.length+"---创建时间:"+t.getDate(e.lastModifiedTime)},fail:function(e,i){t.getfile=i+"..."+t.downloadfile}})},deleteFile:function(){var t=this;r.default.delete({uri:t.downloadfile,success:function(){t.deletefile="删除成功"},fail:function(e,i){t.deletefile=i+"..."+t.downloadfile}})},getDate:function(t){var e=new Date(t);return e.toLocaleString()}}}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();