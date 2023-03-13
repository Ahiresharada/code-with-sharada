function Maximum(No1:number, No2:number, No3:number): number
 {
    let max = No1;
    if (No2 > max) 
    {
      max = No2;
    }
    
    if (No3> max) {
      max = No3;
    }
    
    return max;
  }
  
  var a=23;
  var b=89;
  var c=6;
  var result= Maximum(a,b,c);
  console.log("Maximum no is "+ result); 
  