import "./investors.css"
function VoteProposal({state,account}){

    async function voting(event){
        try{
            event.preventDefault();
        const {contract} = state;
        const id = document.querySelector("#voteId").value;
        await contract.methods. voteProposal(id).send({from:account, gas: 300000});
        }  
        catch(error){
            alert(error);
        }
         window.location.reload();
        }
  
    return<>
    <div className="form-box">
    <form onSubmit={voting}>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <br />
    <button className ="button" type="submit">Vote</button>
    
    </form>
    </div><br></br></>
   
    
   }
   export default VoteProposal;