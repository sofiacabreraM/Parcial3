import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const SaveRecipesInBD = (()=>{
    try {
     await addDoc(collection(db, "receta"), receta )
       
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
})


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);