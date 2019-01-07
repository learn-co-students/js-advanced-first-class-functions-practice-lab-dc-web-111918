// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
});
};

// array1.forEach(function(element) {
//   console.log(element);
// });

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location)
      console.log(driver.name);
  })
};

// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
};

// items.sort(function (a, b) {
//   return a.value - b.value;
// });

// driversByName() — Receives an array of driver objects and returns a new array of
// driver objects sorted by their name attribute from A to Z. Here, you may have to
// use the String.prototype.localeCompare() method.

const driversByName = function(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
};

// var str1 = "ab";
// var str2 = "cd";
// var n = str1.localeCompare(str2);

// totalRevenue() — Receives an array of driver objects and returns the sum of the
// revenue earned by each driver.

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, driver){
      return driver.revenue + total;
  }, 0);
};

// averageRevenue() — Receives an array of driver objects and returns the average
// revenue earned by each driver.
//average = total / number of

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length
};
