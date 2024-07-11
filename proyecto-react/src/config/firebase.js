// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSrFjUCxY5tQPcLpXRzoedWWk3KDsG4qU",
  authDomain: "proyecto-scsm.firebaseapp.com",
  projectId: "proyecto-scsm",
  storageBucket: "proyecto-scsm.appspot.com",
  messagingSenderId: "909708941027",
  appId: "1:909708941027:web:300dabf35f3eb5de9c17d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/* productos.forEach((prod) => {
    addDoc(collection(db , 'productos'), prod)
    .then((data) => console.log(`Producto ${data.id} subido exitosamente`))
    .catch((error) => console.log(error))
}) *//* activar solo una vez y volver a comentar, porque sino se siguen subiendo productos duplicados */