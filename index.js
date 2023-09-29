// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(filePath) {
  if (!filePath) {
    return "";
  } else {
    const pathPieces = filePath.split("/");
    console.log(pathPieces);
    const fileName = pathPieces[pathPieces.length - 1];
    return fileName;
  }
}
console.log(
  "Görev 1:",
  dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3")
);

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(numberArray) {
  /*{
  if (numberArray.length === 0) {
    return null;
  }
  const topla = numberArray.reduce((toplam, number) => toplam + number, 0);
  const aritmetikOrt = topla / numberArray.length;
  return aritmetikOrt;
}
*/

  let arrayOrtalama;
  if (numberArray.length === 0) {
    return null;
  }
  let arrayToplam = 0;
  for (let i = 0; i < numberArray.length; i++) {
    arrayToplam += numberArray[i];
  }
  arrayOrtalama = arrayToplam / numberArray.length;
  return arrayOrtalama;
}
console.log("Görev 2:", ortalamaBul([4]));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aş amasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arr, ortalamaFonk) {
  if (arr.length === 0) {
    return null;
  }
  const ortalamasi = ortalamaFonk(arr);
  const buyukler = arr.filter((sayi) => sayi >= ortalamasi);
  return buyukler;
}

console.log(
  "Görev 3:",
  ortalamadanBuyukleriBul([50, -26, 153, 7], ortalamaBul)
);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
