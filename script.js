// =====================================
// HALAMAN 1 → HALAMAN 2
// =====================================

function bukaWebsite() {

    const pembuka = document.getElementById("pembuka");
    const utama = document.getElementById("utama");

    // Sembunyikan halaman pembuka
    pembuka.hidden = true;

    // Tampilkan halaman utama
    utama.hidden = false;
}


// =====================================
// TOMBOL LANJUT → PESAN
// =====================================

function bukaPesan() {

    const pesan = document.getElementById("pesan");

    // Tampilkan pesan
    pesan.hidden = false;
}
