const logDriverNames = function (drivers) {
  for (const driver of drivers) {
    console.log(driver.name);
  };
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.filter(function (drivers) {
    return drivers.hometown === hometown;
  })
  .map(function(driver){
    console.log(driver.name);
  });
};

const driversByRevenue = function (drivers) {
  driversCopy = drivers.slice(0);
  return driversCopy.sort(function (a, b) {
      return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  driversCopy = drivers.slice(0);
  return driversCopy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (drivers) {
  let total = 0;
  drivers.forEach(function (driver) {
    total += driver.revenue;
  });
  return total;
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
