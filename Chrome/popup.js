
array=[]
function genericOnClick(info, tab) {
  //console.log("item " + info.menuItemId + " was clicked");
  //console.log("tab: " + JSON.stringify(tab));
  //console.log(info.selectionText)
array=[]
chrome.storage.local.get('links', function (result) 
{
   link=result['links'];
   if(link==undefined){
  array.push(info.linkUrl);

 }
 else{
  array=link.slice()
  array.push(info.linkUrl);
 }

chrome.storage.local.set({'links':array},function(){console.log("saved")});
});
}



// Create one test item for each context type.
var contexts = ["page","selection","link","editable","image","video",
                "audio"];

var ida = chrome.contextMenus.create({id:"parent",title:"Bookmark Link", 
                             contexts:["link"]});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  genericOnClick(info,tab)
   chrome.tabs.executeScript({
    file: "content.js"
  });
});/*
chrome.commands.onCommand.addListener(function(command) {
  
     chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
 
    localStorage.setItem('_selecti', selection[0]);

 chrome.tabs.create({url:"hello.html"});
      });

*/