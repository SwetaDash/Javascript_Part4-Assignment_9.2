var flight1 , flight2 , flight3;
function airplane(model,seatingCapacity,max_speed){  // Create airplane constructor
    this.model= model ;
    this.seatingCapacity = seatingCapacity;
    this.max_speed = max_speed;
    this.print = function (){   //Print object properties
        return "Model : " +this.model + "\nSeating Capacity : " + this.seatingCapacity
             + "\nMax_speed : " + this.max_speed +" km/hr";
   }
   this.updateProperty = function (){   // function to increase seating capacity and delete max_speed
        this.seatingCapacity = seatingCapacity + 10;
        delete this.max_speed;  //Delete max speed
        return "\nSeating Capacity :" + this.seatingCapacity + "\nmax_speed deleted :" + this.max_speed;     
   }
   this.avgSpeed = function (){   //Print average speed
       console.log("Average Speed for all objects : 600 km/hr");
   }
}
//Create object for airplane
flight1 = new airplane("AirAsia",75,80); 
flight2 = new airplane("AirIndia",80,75);
flight3 = new airplane("GoAir",60,85);
console.log(flight1.print());  // call print function
console.log(flight2.print());
console.log(flight3.print());
console.log("\nINCREASED SPEED OF FLIGHTS");
console.log(flight1.updateProperty());  //call updateProperty function
console.log(flight2.updateProperty());
console.log(flight3.updateProperty());
flight1.avgSpeed();  // call average speed function

