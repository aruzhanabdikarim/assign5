 var begin=500;
 function storeEduc(){
	 var EducationDegreeValue = Number(document.getElementById("education").value); 
 }
 function storeFam (){
	 var FamilyNetValue = Number(document.getElementById("family").value); 
 }
 function storeSkills(){
	  var SkillsValue = 0;
 }
function clickOn(){
	 var button = document.getElementById("submit");
button.addEventListener("click", calculate);
}
function calculate(){
	storeEduc();
	begin*=EducationDegreeValue;
	storeFam();
	begin*=FamilyNetValue;
	var s = document.getElementsByClassName('skills');
  console.log(begin);
  for (var i=0; i<s.length; i++) {
    if (s[i].checked ===true){
        begin += parseFloat(s[i].value);
     }
  }

  var age = document.getElementsByClassName("age")

  for (var i=0; i < age.length; i++) {
    if (age[i].checked) {
      begin*=age[i].value;
    }
  }

   var r = document.getElementsByClassName('reputation');
   console.log(r);
   for (var i = 0; i < r.length; i++) {
     if (r[i].checked === true) {
      begin *= parseFloat(r[i].value);
     }
   }
   if (r[2].checked === true){
     begin-= parseFloat(r[2].value);
   }
    
   document.getElementById("adema").innerHTML = "Qalyn mal price: " + begin;
}


