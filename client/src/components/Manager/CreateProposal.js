import "./manager.css"
function CreateProposal({state,account}){
    
        async function creationOfProposal(event){
            try{
                event.preventDefault(); //page will not reload if form get submitted
                const {contract} = state;
                const description = document.querySelector("#description").value;
                const amount = document.querySelector("#amount").value;
                const recipient = document.querySelector("#recipient").value;
                await contract.methods.createProposal(description, amount, recipient).send({from: account, gas:480000});
            }
            catch(error){
                alert(error);
            }
           window.location.reload();
            // console.log(description,amount,recipient);
        }

    return<>
    <div className="form-box">
    <form onSubmit={creationOfProposal}>
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <br />
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Neeed(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <br />
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <br />
    <button className="button" type="submit">Create Proposal</button>
    </form>
    </div>
    <br></br>
{/* <div className="container">
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>    
</div> */}
    </>
   }
   export default CreateProposal;