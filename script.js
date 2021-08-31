function compute()
{
	var principal= document.getElementById("principal").value;
  if(principal<=0){
  	alert("Please enter a positive number")
    document.getElementById("principal").focus();
    return
  }
  var rate= document.getElementById("rate").value;
  var years=document.getElementById("years").value;
  var year=new Date().getFullYear()+parseInt(years);
  var interest=principal*rate*years/100;
  document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate+"%.\</mark>\<br\>You will receive an amount of \<mark>"+interest+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>.\<br\>";
    
}

function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
