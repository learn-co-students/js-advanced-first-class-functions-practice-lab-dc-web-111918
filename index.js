// Code your solution in this file!
const logDriverNames = function (drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);

  });
};

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if(location === driver.hometown){
      console.log(driver.name);
    };
  });
};

const driversByRevenue = function(drivers){
  return foo = drivers.slice().sort(function (a,b){
      return a.revenue - b.revenue
  });
};

const driversByName = function(drivers){
  return foo = drivers.slice().sort(function (a,b){
    if (a.name < b.name) { return -1;}
    if (a.name > b.name) { return 1;}
    return 0;
  });
};

const totalRevenue = function(drivers){
  return foo = drivers.reduce(function (total, driver){
    total += driver.revenue;
    return total;
  }, 0);
};

const averageRevenue = function(drivers){
  return average = totalRevenue(drivers)/drivers.length;


};
