var angkot = ["yadi", undefined, "iday"];
const tambahPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length != 0) {
    for (let i = 0; i <= penumpang.length; i++) {
      // if (penumpang[i] != namaPenumpang) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (i == penumpang.length) {
        penumpang.push(namaPenumpang);
        return penumpang;
        // }
      } else if (penumpang[i] == namaPenumpang) {
        console.log("penumpang udah di dalem mank!");
        return penumpang;
      }
    }
  } else {
    penumpang.push(namaPenumpang);
    return penumpang;
  }
};

const hapusPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    console.log("belum dapet penumpang mhank!!");
  } else {
    for (let i = 0; i <= penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i]= undefined
        return penumpang
      }
    }
  }
};

// console.log(tambahPenumpang());
