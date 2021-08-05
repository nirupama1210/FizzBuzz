function play()
{
  let n1=parseInt(document.getElementById('num1').value);
  if(n1%3===0 && n1%5===0)
    {
       document.getElementById("d2").innerHTML="FIZZ BUZZ";
    }
  else if(n1%3===0)
    { 
      document.getElementById("d2").innerHTML="FIZZ";
    }
  else if(n1%5===0){
    document.getElementById("d2").innerHTML="BUZZ";
  }
  else{
    document.getElementById("d2").innerHTML=n1;
  }
  
}