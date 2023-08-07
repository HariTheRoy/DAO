import "./investors.css"
function TransferShare({state,account}){

    async function transferringShares(event){
        try{
        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#amount").value;
        const address = document.querySelector("#to").value;
        await contract.methods.transferShare(amount, address).send({from:account, gas: 300000});
        }
        catch(error){
            alert(error);
        }
       window.location.reload();
    }

    return<>
    <div className="form-box">
    <form onSubmit={transferringShares}>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
    <input type="text" id="amount"></input>
    <br />
    <label className="label1" htmlFor="to">
    <span className="font">Address:</span>
        </label>
    <input type="text" id="to"></input>
    <br />
    
    <button className="button" type="submit">Transfer Share</button>
    </form>
    </div><br></br></>
   }
   export default TransferShare;