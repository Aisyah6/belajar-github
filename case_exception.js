function bagiDuaAngka(a, b) {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input harus berupa angka.");
      }
  
      if (b === 0) {
        throw new Error("Tidak dapat membagi dengan nol.");
      }
  
      return a / b;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return null; // Atau kembalikan nilai default lain
    }
  }
  
 
  console.log(bagiDuaAngka(10, 2)); 
  console.log(bagiDuaAngka(10, "2")); 
  console.log(bagiDuaAngka(10, 0));
  