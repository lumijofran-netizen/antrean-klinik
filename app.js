const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_ID"
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
