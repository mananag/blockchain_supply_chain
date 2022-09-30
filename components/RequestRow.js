import {Button, Table} from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import {useRouter} from "next/router";

function RequestRow({id, requests, address, approversCount}) {
    const router = useRouter()
    const {Row, Cell} = Table

    const onApprove = async () => {
        const campaign = Campaign(address)
        await window.ethereum.send('eth_requestAccounts')
        const accounts = await web3.eth.getAccounts()

        await campaign.methods.approveRequest(id).send({
            from: accounts[0]
        })

        await router.push(`/campaigns/${address}/requests`)
    }

    const onFinalize = async () => {
        const campaign = Campaign(address)
        await window.ethereum.send('eth_requestAccounts')
        const accounts = await web3.eth.getAccounts()

        await campaign.methods.finalizeRequest(id).send({
            from: accounts[0]
        })

        await router.push(`/campaigns/${address}/requests`)
    }

    console.log(requests)

    const readyToFinalize = requests.approvalsCount > approversCount / 2

    return(
        <Row positive={!requests.complete && readyToFinalize}>
            <Cell>{id}</Cell>
            <Cell>{requests.description}</Cell>
            <Cell>{web3.utils.fromWei(requests.value, 'ether')}</Cell>
            <Cell>{requests.recipient}</Cell>
            <Cell>{requests.approvalsCount}/{approversCount}</Cell>
            <Cell>
                <Button color={'green'} disabled={requests.complete} basic onClick={onApprove}>Approve</Button>
            </Cell>
            <Cell><Button color={'teal'} disabled={requests.complete && readyToFinalize} basic onClick={onFinalize}>Finalize</Button> </Cell>
        </Row>
    )
}

export default RequestRow