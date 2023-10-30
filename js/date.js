function get_date()
{
if (!document.all && !document.getElementById) return
var Elm = (document.getElementById) ? document.getElementById("datetime_div") : document.all.datetime_div;
var dat = new Date();
var month = dat.getMonth();
var year = dat.getFullYear();
var day = dat.getDate();
switch(month){
   case 0: mon = 'Yanvar'; break;
   case 1: mon = 'Fevral'; break;
   case 2: mon = 'Mart'; break;
   case 3: mon = 'Aprel'; break;
   case 4: mon = 'May'; break;
   case 5: mon = 'Iyun'; break;
   case 6: mon = 'Iyul'; break;
   case 7: mon = 'Avqust'; break;
   case 8: mon = 'Sentyabr'; break;
   case 9: mon = 'Oktyabr'; break;
   case 10: mon = 'Noyabr'; break;
   case 11: mon = 'Dekabr'; break;
}
var hours = dat.getHours();
var minutes = dat.getMinutes();
var seconds = dat.getSeconds();
if (minutes<=9) minutes = "0"+minutes
if (seconds<=9) seconds = "0"+seconds
var time = day+" "+mon+" "+year+" "+hours+":"+minutes+":"+seconds;
Elm.innerHTML = ""+time+""
setTimeout("get_date()",1000)
}
window.onload = get_date;

