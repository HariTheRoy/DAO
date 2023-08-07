// import "./manager.css"
import "./executeProposal.css"
function ExecuteProposal({state,account}){

    async function ExecuteProposal(event){
        try{
        event.preventDefault();
        const {contract} = state;
        const proposalId = document.querySelector("#id").value;
        await contract.methods.executeProposal(proposalId).send({from: account, gas: 480000});
        }
        catch(error){
            alert(error);
        }
       window.location.reload();

    }

    return<>
    <div className="form-box">
    <form onSubmit={ExecuteProposal}>
    <label className="label1" htmlFor="proposalId">
    <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="id"></input>
    <br />
    <button className="button" type="submit">Execute</button>
    </form>
    </div><br></br></>
    
   }
   export default ExecuteProposal;