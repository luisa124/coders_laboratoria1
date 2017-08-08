
var promosion4_chile =document.getElementById('promosion4_chile');
var promosion5_lima =document.getElementById('promosion5_lima');
var promosion6_lima =document.getElementById('promosion6_lima');

var select = document.getElementById("select");

select.onchange = function(){
if(select.value == "promosion4_chile"){
   displayImage();
    promosion4_chile.style.display ='block';
   }
   if(select.value == "promosion5_lima"){
      displayImage();
       promosion5_lima.style.display ='block';
      }
    if(select.value == "promosion6_lima"){
        displayImage();
        promosion6_lima.style.display = 'block';
    }
}

function displayImage(){
    promosion4_chile.style.display ='';
    promosion5_lima.style.display='';
    promosion6_lima.style.display='';
}
