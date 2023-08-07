import {useState,useEffect} from "react"
function InvestorList({state}){
   const [list,setList] =useState([]);
   useEffect(()=>{
      if (!state) {
         // Handle the case where 'state' is undefined or null
         return null; // or show a loading message, error message, etc.
       }
      const {contract} = state;
      async function listOfInvestors(){
         const lists = await contract.methods.InvestorList().call();
         setList(lists);
      
      }
      contract && listOfInvestors();
   },[state])
   
   return<>
    <div className="list">
    <h3>Investor's List</h3>
      {list.map((investorAddress)=>{
         return <p key={investorAddress}>{investorAddress}</p>
      })}
    </div>
   </>
  }
  export default InvestorList;