function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];

  cars.forEach((item) => {
    if (item.available === true) result.push(item);
  });

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
