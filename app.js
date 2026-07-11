const firebaseConfig = { /* Copy dari Firebase Console kamu */ };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Tampilkan nomor antrean
db.collection("antrean").doc("current").onSnapshot((doc) => {
    document.getElementById("nomor").innerText = "Nomor: " + doc.data().lastNumber;
});

// Fungsi ambil nomor
function ambilAntrean() {
    db.collection("antrean").doc("current").get().then((doc) => {
        let n = doc.data().lastNumber + 1;
        db.collection("antrean").doc("current").update({ lastNumber: n });
    });
}