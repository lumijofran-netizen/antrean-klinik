const firebaseConfig = {
    apiKey: "AIzaSyAPAGTMJ_G7gsQVwp_wZz3Hq0EoMNDDeJ8",
    authDomain: "antreanklinik1.firebaseapp.com",
    projectId: "antreanklinik1",
    storageBucket: "antreanklinik1.firebasestorage.app",
    messagingSenderId: "243781732589",
    appId: "1:243781732589:web:79e3f7ff1c0ca00044e4e4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 1. Ambil data real-time
db.collection("antrean").doc("current").onSnapshot((doc) => {
    if (doc.exists) {
        document.getElementById("nomor").innerText = doc.data().lastNumber;
    }
});

// 2. Fungsi ambil antrean dengan pencegahan klik ganda
function ambilAntrean() {
    const btn = document.querySelector('button');
    btn.disabled = true; // Matikan tombol sementara agar tidak dobel klik
    btn.innerText = "Memproses...";

    const docRef = db.collection("antrean").doc("current");
    
    db.runTransaction((transaction) => {
        return transaction.get(docRef).then((sfDoc) => {
            const newNumber = sfDoc.data().lastNumber + 1;
            transaction.update(docRef, { lastNumber: newNumber });
            return newNumber;
        });
    }).then(() => {
        btn.disabled = false;
        btn.innerText = "Ambil Nomor Antrean";
    }).catch((err) => {
        console.error(err);
        btn.disabled = false;
        btn.innerText = "Gagal, Coba Lagi";
    });
}
