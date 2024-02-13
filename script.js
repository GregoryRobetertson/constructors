"use strict";

// Function for telivision
function Television() {
  this.powerStatus = false; // Tv is off
  this.currentChannel = 0;
}

// Method to turn telivision on
Television.prototype.turnOn = function() {
    this.powerStatus = true; // Tv is on
    console.log('Tv is now On');
} 

// Method to turn telivision off
Television.prototype.turnOff = function() A{
    this.powerStatus = false; // Tv is off
    console.log('Tv is now Off');
} 

// Change channel function
Television.prototype.changeChannel = function(newChannel) {
    if (this.powerStatus) {
      this.currentChannel = newChannel;
      console.log("Channel changed to " + newChannel);
    } else {
      console.log("Cannot change channel. TV is off.");
    }
}

// Getstate method
Television.prototype.getState = function() {
     const powerStatusText = this.powerStatus ? "ON" : "OFF";
    console.log("TV is currently " + powerStatusText + " and tuned to channel " + this.currentChannel);
}

// Instantiate Television objects
const tv1 = new Television();
const tv2 = new Television();
const tv3 = new Television();

// Change state and channels of TVs
tv1.turnOn();
tv1.changeChannel(10);

tv2.turnOn();
tv2.changeChannel(20);

tv3.turnOff();

// Display states of TVs
console.log("Television 1 State:");
tv1.getState();

console.log("\nTelevision 2 State:");
tv2.getState();

console.log("\nTelevision 3 State:");
tv3.getState();