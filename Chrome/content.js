function submitFunction()
{ array=[]
  var val=document.getElementById("des").value
  chrome.storage.local.get('des', function (result) 
  {
    des=result['des'];
    if(des==undefined)
    {
      array.push(val);
    }
    else
    {
      array=des.slice()
      array.push(val);
    }
  chrome.storage.local.set({'des':array},function(){console.log("saved")});

  });
  var e=document.getElementById("sub")
  e.parentNode.parentNode.removeChild(e.parentNode)
}

function addDes()
{
  document.documentElement.style.height = '100%';
  document.body.style.height = '100%';
  document.documentElement.style.width = '100%';
  document.body.style.width = '100%';

  var div = document.createElement( 'div' );
  var btnForm = document.createElement( 'form' );
  var btn = document.createElement( 'TEXTAREA' );
  var butn = document.createElement( 'DIV' );
  
  btn.setAttribute("id","des")
  btn.style.height='115px'
  btn.style.width='271px'
  butn.setAttribute("id","sub")
  butn.style.height='37px'
  butn.style.width='inherit'
  butn.style.position='fixed'
  butn.style.top='41%'
//append all elements
  document.body.appendChild( div);
  div.appendChild( btnForm );
  btnForm.appendChild( btn );
  div.appendChild( butn );
//set attributes for div
  div.id = 'myDivId';
  div.style.position = 'fixed';
  div.style.top = '22%';
  div.style.left = '80%';
  div.style.width = 'inherit';   
  div.style.height = '24%';
  div.style.backgroundColor = '#c75151';
}
addDes()
document.getElementById("sub").addEventListener("click",submitFunction);
/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });*/


