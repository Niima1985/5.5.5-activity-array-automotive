//this includes the vehicle class as a module
const vehicleModule = require("./vehicle")
//Create a Car class that extends the vehicleModule
//Add a constructor
//Add the super keyword to call the parent class constructor
class Car extends vehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
	    // Add the properties listed in the properties chart
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
	
    
    //Add the methods with psuedo logic in the methods chart

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
        console.log(`${this.model} ${this.make} have no available seats to take all passengers `);
            return this.passenger = true; 
        } else {
            console.log(`${this.model} ${this.make} is full`);
            return this.passenger = false;
        }
    }
    start() {
        if (this.fuel > 0) {            
            console.log("Engine has started.");
            return this.started = true
        } else {
            console.log("Engine cannot start");
            return this.started = false;
        }
    }

    serviceTime(mileage) {
        if (this.mileage > 30000) {
            console.log(`${this.model} need maintenance`) 
            return this.scheduleService = true;
        }
    }
}

// this shows how to call from this module
let myCar = new Car('mercury', 'sedan', '2002', 'white', 50000)

myCar.start(20)
myCar.loadPassenger(10)

myCar.serviceTime(50000)

console.log(myCar)