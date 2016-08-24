
 chrome.storage.local.get('des', function (result) {
       des=result['des'];
       for(i=0;i<des.length;i++)
       {
       document.getElementById("link").innerHTML+='<tr id="'+i+'"><td style="font-size:20px;font-family:calibri;font-weight:400;height:45px;width:94%;border-right: 1px solid #c74444;border-bottom: 1px solid #c75151;"><div>'+des[i]+'</div><td></tr>'
   	   }     
    });

  chrome.storage.local.get('links', function (result) {
       link=result['links'];
  		for(i=0;i<link.length;i++)
       {
       document.getElementById(i).innerHTML+='<td style="height:45px;border-bottom:1px solid #c75151;"><a style="text-decoration:none;color:#c75151;font-size:25px;" href="'+link[i]+'"><div>></div></a><td>'
   	   }     
    });

  


  /*
  for(i=0;i<obj.l.length;i++)
       {
       document.getElementById("output").innerHTML+='<div>'+obj.l[i]+'</div><br><div>'+obj1.d[i]+'</div>'
   	   }
 */
//localStorage.remove('_selecti')

