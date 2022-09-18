function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
 
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("kosong");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        console.log(i);
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Ujang", ["kalianda", "bakauheni"], [], 0);
var angkot2 = new Angkot("Udin", ["Sidomulyo", "katibung"], [], 0);

//// membuat obejek

//objek literal
var mahs1 = {
  nama: 'asda',
  umur: 30
}
var mahs2 = {
  nama: 'asda',
  umur: 30
}

//func declaration

function buatObjekMahasiswa(nama,umur){
  var mhs ={}
  mhs.nama = nama
  mhs.umur = umur
  return mhs
}
//cara pake harus panggil func
var mah = buatObjekMahasiswa("iday",22)
var mah1 = buatObjekMahasiswa("iday",22)


///func constructor
function MembuatConstructor(nama,umur){
  // var this = {}
  this.nama = nama
  this.umur = umur
  //return this
}
//cara jalanain
const siswa2 = new MembuatConstructor("rahmad",22)
const siswa3 = new MembuatConstructor("rahmad",22)
