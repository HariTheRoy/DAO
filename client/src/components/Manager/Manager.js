import CreateProposal from "./CreateProposal";
import ExecuteProposal from "./ExecuteProposal";
import ProposalList from "./ProposalList";


function Manager({state,account}) {
    return <> 
    <p className="font">For Manager</p>
     <CreateProposal state={state} account={account}></CreateProposal>
     <ExecuteProposal state={state} account={account}></ExecuteProposal>
     <ProposalList state={state}></ProposalList>
    </>
}
export default Manager;