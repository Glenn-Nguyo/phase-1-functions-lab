// Code your solution in this file!
var block = 42
function distanceFromHqInBlocks(pickupPoint){
    if(pickupPoint > block){
        return pickupPoint - block
    }
  return block - pickupPoint;

}
function distanceFromHqInFeet(pickupPoint){
 return distanceFromHqInBlocks(pickupPoint) * 264
}
 function distanceTravelledInFeet(start, destination){
     if(start > destination){
         return (start - destination)*264
     }
 return (destination - start)*264;
 
}

function calculatesFarePrice(start, destination){
    var total;
    if(destination > start){
        total = (destination - start)*264;
    }
    else{
        total = (start - destination)*264;
    }
  
   if(total < 400){
       return 0;
   }
   if(total >= 400 && total <= 2000){
   return (2/100) * (total - 400);
   }
   if (total > 2000 && total < 2500){
 return 25
   }
   if(total > 2500){
       return "cannot travel that far";
   }
}
