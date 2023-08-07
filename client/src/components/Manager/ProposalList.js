import { useState,useEffect } from "react";
import "./proposalList.css";

function ProposalList({state}){
   const [list, setList] = useState([]);
   useEffect(()=>{
      if (!state) {
         // Handle the case where 'state' is undefined or null
         return null; // or show a loading message, error message, etc.
       }
      const {contract} = state;
      async function proposals(){
         const arrayProposal = await contract.methods.ProposalList().call();
         // console.log(arrayProposal);
         setList(arrayProposal);
      }
      contract && proposals();
   },[state])

   return<>
 
    <h3>Proposal List</h3>
    <div className="table-container">
    <table>
      <tbody>
      <tr>
        
        <th>ID</th>
        
        
        <th>Description</th>
        
        <th>Amount</th>
        <th>Receipient</th>
        <th>Votes</th>
        <th>End</th>
        {/* <th>Is Executed</th> */}
    </tr>
      {list.map((proposal)=>{
            return (
               <tr key={proposal.id}>
                  <td>{proposal.id}</td>
                  <td>{proposal.description}</td>
                  <td>{proposal.amount}</td>
                  <td>{proposal.receipient}</td>
                  <td>{proposal.votes}</td>
                  <td>{proposal.end}</td>
                  {/* <td>{proposal.isExecuted}</td> */}
                  </tr>
            )
      })}
       </tbody>
      </table>
      </div>
   </>
  }
  export default ProposalList;