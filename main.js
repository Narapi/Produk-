import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAQhFoRf_4ecIp-b7pclOk29ncMXpjzELE",
  authDomain: "insan-cemerlang-58879.firebaseapp.com",
  projectId: "insan-cemerlang-58879",
  storageBucket: "insan-cemerlang-58879.appspot.com",
  messagingSenderId: "704155633968",
  appId: "1:704155633968:web:42d7eeff6bb87ae7af60f5",
  measurementId: "G-PPMEB42GMS"
};

// Inisialisasi firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilDaftarProduk(){
  const refDokumen = collection(db, "produk");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikankueri = await getDocs(kueri);
  
  let hasil = [];
  cuplikankueri.forEach((dok) => {
    hasil.push({ 
      id: dok.id, 
      nama: dok.data().nama,
      harga: dok.data().harga,
      stok: dok.data().stok,
    });
  });
  
  return hasil;
}