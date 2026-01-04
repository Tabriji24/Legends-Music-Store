function beli(album) {
    alert("🎸 Album dipilih:\n" + album + "\n\nLanjutkan ke checkout (simulasi)");
}

function filterAlbum(genre) {
    const albums = document.querySelectorAll(".album");

    albums.forEach(album => {
        if (genre === "all" || album.dataset.genre === genre) {
            album.style.display = "block";
        } else {
            album.style.display = "none";
        }
    });
}

function validasiForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("⚠️ Semua field wajib diisi!");
        return false;
    }

    alert("✅ Pesan berhasil dikirim!\nTerima kasih telah menghubungi kami.");
    return false; // biar tidak reload halaman
}

// Efek teks muncul pelan
window.onload = () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = 0;
    heroText.style.transition = "1.5s";

    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 300);
};
