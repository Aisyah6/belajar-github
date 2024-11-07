function myFirst() {
  myDisplayer("Good bye");
}

function mySecond(callback) {
  myDisplayer("Hello");
  callback();
}

function myDisplayer(message) {
  console.log(message);
}

function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");

function divideNumbers(num1, num2, callback) {
  try {
      // Cek apakah input adalah angka
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
          throw new Error("Input harus berupa angka.");
      }

      // Cek apakah pembagian dengan nol
      if (num2 === 0) {
          throw new Error("Tidak bisa membagi dengan nol.");
      }

      // Lakukan pembagian
      const result = num1 / num2;
      callback(result); // Panggil callback dengan hasil
  } catch (error) {
      // Tangkap dan tampilkan pesan kesalahan
      console.error(error.message);
      callback(null); // Kembalikan null jika terjadi kesalahan
  }
}

// Contoh penggunaan
divideNumbers(10, 2, myDisplayer); // Output: 5
divideNumbers(20, 10, myDisplayer); // Output: 2
divideNumbers(10, 'a', myDisplayer); // Output: Input harus berupa angka.
divideNumbers(20, 0, myDisplayer); // Output: Tidak bisa membagi dengan nol.
