function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  console.log(result.length - 1);

  let swapValue = true;

  while (swapValue) {
    swapValue = false; // berubah swap value

    for (let i = 0; i < result.length - 1; i++) {
      //length 24 , index 0-23
      if (result[i].year > result[i + 1].year) {
        //[0].year > [1]. year
        // 1.year > 2.year (2021)
        // 2022 > 3.year (2018)

        swapValue = true;
        const temp = result[i]; // 2022, 2022 , 2022
        result[i] = result[i + 1]; // 2022 => 2019 , 2022 => 2021, 2022 => 2018
        result[i + 1] = temp; // 2019 => 2022 , 2021 ,2022, 2018 => 2022
      }
    }
  }

  //urutan by tahun 2019 2021 2018 2022

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
