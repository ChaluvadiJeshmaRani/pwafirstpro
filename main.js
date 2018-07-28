// function Loadjson(file,callback){
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange =function(){
//   if(xhr.readyState===4&& xhr.status=="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
//
//   var data=JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   skills(data.skills);
//   achievements(data.achievements)
// })
function loadjson(file)
{
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if (response.ok) {
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }

    })
  })
}
var newfile=loadjson("data.json");
newfile.then(data=>{

  console.log(data);
    basics(data.details);
    careerinfo(data.career);
    education(data.education);
    skills(data.skills);
    achievements(data.achievements)
})
var child1=document.querySelector(".child1");
function basics(det){
  var image=document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name=document.createElement("h4");
  name.textContent=det.name;
  child1.appendChild(name);

  var phone=document.createElement("h4");
  phone.textContent=det.phoneno;
  child1.appendChild(phone);

  var mailto=document.createElement("a");
  mailto.href= "mailto:jeshmachaluvadi@gmail.com";
  mailto.textContent=det.email;
  child1.appendChild(mailto);

  var add =document.createElement("h4");
  add.textContent="address:";
  child1.appendChild(add);

   var hr=document.createElement("hr");
   child1.appendChild(hr);

    var p=document.createElement("p");
    p.textContent=det.address;
    child1.appendChild(p);
}
    var child2=document.querySelector(".child2");
    function careerinfo(info){
    var heading=document.createElement("h3");
    heading.textContent="carrer Objective:";
    child2.appendChild(heading);

    var c=document.createElement("h4");
    c.textContent=info.info;
    child2.appendChild(c);
}
function education(edu){
  var hd=document.createElement("h3");
  hd.textContent="Eductaional Qualification";
  child2.appendChild(hd);

 var hr=document.createElement("hr");
 child2.appendChild(hr);

var table1=document.createElement("table");
table1.border="1";
child2.appendChild(table1);
tabledata="";
for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
}
table1.innerHTML=tabledata;
}

function skills(skillinfo)
{
  var hd=document.createElement("h3");
  hd.textContent="Techincal skills";
  child2.appendChild(hd);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for(var i=0;i<skillinfo.length;i++)
  {
    var title=document.createElement("h3");
    title.textContent=skillinfo[i].tittle;
    child2.appendChild(title);

    var eduul=document.createElement("ul");
    var eduli=document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);

}
}
function achievements(coact)
{
  var hd=document.createElement("h3");
  hd.textContent="Achievements";
  child2.appendChild(hd);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  for (var i = 0; i < coact.length; i++) {
   var tit=document.createElement("h3");
   tit.textContent=coact[i].tittle;
   child2.appendChild(tit);

   var eduul=document.createElement("ul");
   var eduli=document.createElement("li");
   eduli.textContent=coact[i].info;
   eduul.appendChild(eduli);
   child2.appendChild(eduul);


  }

}
function openpage(){
window.open("resume.html","_self",true)  
}
