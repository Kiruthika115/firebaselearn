import logo from './logo.svg';
import './App.css';
import algosdk from "algosdk";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import firedb from'./firebase.js';
import { getDatabase, ref, child, push, update } from "./firebase.js";
import { doc, updateDoc, deleteField } from "firebase/firestore";
const myAlgoConnect = new MyAlgoConnect();
const algodClient = new algosdk.Algodv2("",'https://testnet-api.algonode.cloud','');

function App() {
  const connect =async() => {
    try {
     const settings = {
         shouldSelectOneAccount: true,
         openManager: true
       };
     const accounts = await myAlgoConnect.connect(settings);
      localStorage.setItem("walletAddress", accounts[0].address);
      console.log(accounts);
      await createdata(accounts[0].address)
     }
     catch (err) {
       console.error(err);
     }
   }
   const createdata = async(address) =>{
    
    let ref=firedb.database().ref(`connectedaddr`);
    const db = ref.push().key;
    ref.set({
      id:db,
      txnhash:address,
      number:1,
      name:"kiruthika"
    }) .then(()=>{ 
      console.log("successfull")
    })
    
    .catch((err) => {                                                        
      //console.log(err);
    });
    await updatedata()
  
  }

 
  const updatedata = async() =>{
  let ref=firedb.database().ref(`connectedaddr`);
  const db = ref.push().key;
  ref.update({
    id:db,
  
    name:"kirsri"
  }) .then(()=>{ 
    console.log("successfully updated")

  })

  .catch((err) => {                                                        
    console.log(err);
  });
  // await deletedata()
}

// const deletedata = async()=>{
//   let ref=firedb.database().ref(`connectedaddr`);
//   const db = ref.push().key;
//   ref.remove({
//     id:db,
//     number:1
//   }).then(()=>{
//     console.log("successfully deleted")

//   })
// }
  return (
    <div className="App">
      <button onClick={()=>connect()}>connect</button>
      
    </div>
  );
}

export default App;
