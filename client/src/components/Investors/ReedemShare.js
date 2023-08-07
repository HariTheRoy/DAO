import "./investors.css"
function ReedemShare({state,account}){

    async function transferShares(event){
        try{
        event.preventDefault();
        const {contract} = state;
        const share = document.querySelector("#shares").value;
        await contract.methods.reedemShare(share).send({from:account, gas: 480000});
        }
        catch(error){
            alert(error);
        }
       window.location.reload();
    }
   
    return<>
    <div className="form-box">
    <form onSubmit={transferShares}>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form>
    </div><br></br></>
}
export default ReedemShare;