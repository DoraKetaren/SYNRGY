// function filterCarByAvailability(cars) {
//   // Sangat dianjurkan untuk console.log semua hal hehe
//   console.log(cars);

//   // Tempat penampungan hasil
//   const result = [];

//   // Tulis code-mu disini

//   // Rubah code ini dengan array hasil filter berdasarkan availablity
//   return result;
// }

function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  const result = [];

  // Iterate melalui setiap mobil
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    // Check apakah mobil tersedia (available true)
    if (car.available) {
      result.push(car);
    }
  }

  // Log hasil filter
  console.log("Mobil yang tersedia:", result);

  return result;
}

// Contoh penggunaan
const cars = [
  {
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    plate: "DBH-3491",
    transmission: "Automatic",
    manufacture: "Ford",
    model: "F150",
    available: true,
    type: "Sedan",
    year: 2022,
    options: ["Cruise Control", "Tinted Glass", "AM/FM Stereo"],
    specs: [
      "Brake assist",
      "Leather-wrapped shift knob",
      "Glove box lamp",
      "Air conditioning w/in-cabin microfilter",
      "Body color folding remote-controlled pwr mirrors",
      "Dual-stage front airbags w/occupant classification system",
    ],
  },
  // ...Tambahkan mobil lainnya di sini
];

const availableCars = filterCarByAvailability(cars);
