function ubahForm() {
  const allForms = ["luasSegitiga", "kelilingSegitiga", "luasPersegi", "kelilingPersegi"];
  const selected = document.getElementById("mode").value;
  allForms.forEach(id => {
    document.getElementById(id).style.display = (id === selected) ? "block" : "none";
  });
}

function hitungLuasSegitiga() {
  const a = parseFloat(document.getElementById("alas").value);
  const t = parseFloat(document.getElementById("tinggi").value);
  const result = 0.5 * a * t;
  document.getElementById("hasilLuasSegitiga").innerText = "Luas: " + result  + " cm²";
}

function hitungKelilingSegitiga() {
  const a = parseFloat(document.getElementById("sisiA").value);
  const b = parseFloat(document.getElementById("sisiB").value);
  const c = parseFloat(document.getElementById("sisiC").value);
  const result = a + b + c;
  document.getElementById("hasilKelilingSegitiga").innerText = "Keliling: " + result + " cm";
}

function hitungLuasPersegi() {
  const s = parseFloat(document.getElementById("sisiLuas").value);
  const result = s * s;
  document.getElementById("hasilLuasPersegi").innerText = "Luas: " + result + " cm²";
}

function hitungKelilingPersegi() {
  const s = parseFloat(document.getElementById("sisiKeliling").value);
  const result = 4 * s;
  document.getElementById("hasilKelilingPersegi").innerText = "Keliling: " + result +" cm";
}

function resetOutput(id) {
  document.getElementById(id).innerText = "";
}

document.addEventListener("DOMContentLoaded", ubahForm);