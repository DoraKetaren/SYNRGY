// function sortCarByYearDescendingly(cars) {
//   // Sangat dianjurkan untuk console.log semua hal hehe
//   console.log(cars);

//   // Clone array untuk menghindari side-effect
//   // Apa itu side effect?
//   const result = [...cars];

//   // Tulis code-mu disini

//   // Rubah code ini dengan array hasil sorting secara descending
//   return result;
// }

function sortCarByYearDescendingly(cars) {
  // Menduplikasi array cars untuk menghindari perubahan pada array asli
  // Clone array to avoid side-effects
  const result = [...cars];

  // Mengurutkan mobil berdasarkan tahun dengan urutan descending
  result.sort((a, b) => b.year - a.year);

  // Mengembalikan hasil sorting
  return result;
}
