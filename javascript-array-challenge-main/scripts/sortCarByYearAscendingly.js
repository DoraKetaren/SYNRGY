// function sortCarByYearAscendingly(cars) {
//   // Sangat dianjurkan untuk console.log semua hal hehe
//   console.log(cars);

//   // Clone array untuk menghindari side-effect
//   // Apa itu side effect?
//   const result = [...cars];

//   // Tulis code-mu disini

//   // Rubah code ini dengan array hasil sorting secara ascending
//   return result;
// }

function sortCarByYearAscendingly(cars) {
  // Menduplikasi array cars untuk menghindari perubahan pada array asli
  const result = [...cars];

  // Mengurutkan mobil berdasarkan tahun dengan urutan ascending
  result.sort((a, b) => a.year - b.year);

  // Mengembalikan hasil sorting
  return result;
}
