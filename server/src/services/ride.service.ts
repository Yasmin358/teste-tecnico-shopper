import Driver from '../database/models/driverModel';
import Review from '../database/models/rideModel';


export const findAll = async (distance: number) => {
  const km = distance/1000;
  console.log(km);
  const drivers = await Driver.findAll();
  console.log(drivers[0].KmMinimo);
  const result = drivers.filter((e) => km > e.KmMinimo  );
  let values: number[] = [];
  result.map((e, index) => {
     values[index] = e.rate * km
  });
  
  return {result, values }
};

module.exports = {
  findAll,
}