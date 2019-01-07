// Code your solution in this file!function(cerealData)
const logDriverNames = function(drivers){
  return drivers.map(function(driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers,hometown){
  return drivers.forEach(function(driver){
      if(driver.hometown === hometown){
        console.log(driver.name)
      }
  })
}



const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(driverA,driverB){
    //use .slice() to make non-destructive
    return driverA.revenue - driverB.revenue
  })
}

const driversByName = function(drivers){
  return drivers.slice().sort(function(driverA,driverB){
    //use .slice() to make non-destructive
    return driverA.name.localeCompare(driverB.name)
  })
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(accumulator,currentDriver){
    return accumulator + currentDriver.revenue
  },0);

}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/(drivers.length);
}
