/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const accelaration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelburnrate = 0.5; // fuel burn rate (kg/s)

// acceleration conversion 
const accInKmPerHourSquared = accelaration * 12.96;

const distance2 = distance + (velocity * (time / 3600)) //calculates new distance

const remainingfuel = Math.max(fuel- (fuelburnrate * time), 0)//calculates remaining fuel

//calculates new velocity based on acceleration
const calcNewVel = ({ velocity, acceleration, time }) => {

  //ensures valid inputs 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input values.');
  };

  // Converts time to hours for velocity calculation
  return velocity + (acceleration * (time / 3600));
}; 

// Pick up an error with how the function below is called and make it robust to such errors
const velocity2 = calcNewVel({ velocity: velocity, acceleration: accInKmPerHourSquared, time });

console.log(`Corrected New Velocity: ${velocity2.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${distance2.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingfuel.toFixed(2)} kg`);





