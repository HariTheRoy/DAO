import "./investors.css"
function Contribute({state,account}){

  async function contribute(event){
    try{
    event.preventDefault();
    const {contract} = state;
    const amount = document.querySelector("#weiValue").value;
    console.log(await contract.methods.contribution().send({from:account, gas: 300000, value: amount}));
    }
    catch(error){
      alert(error);
  }
  window.location.reload();
  }

 return<>
 <div className="form-box">
 <form onSubmit={contribute}>
   <label className="label1" htmlFor="weiValue">
   <span className="font">Contribution Amount: </span>
        </label>
    <input type="text" id="weiValue" ></input>
    <button type="submit" className="button">Contribute</button>
    </form>
    </div>
    <br></br></>
}
export default Contribute;