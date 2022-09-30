import Layout from "../../../components/Layout";
import Link from "next/link";
import {Button, Table} from "semantic-ui-react";
import {useRouter} from "next/router";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

function RequestsIndex ({requests, approversCount, numRequests}) {
    const router = useRouter()
    const address = router.query.address

    const {Header, Row, HeaderCell, Body} = Table

    const renderRow = () => {
        return requests.map((requests, index) => {
            return <RequestRow key={index} id={index} requests={requests} address={address} approversCount={approversCount} />
        })
    }

    return(
        <Layout title={'Requests'}>
            <Link href={`/campaigns/${address}/requests/new`}>
                <Button primary floated={'right'} style={{margin:'8px 0'}}>
                    Add Request
                </Button>
            </Link>
            <h2>
                Requests
            </h2>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {renderRow()}
                </Body>
            </Table>
            <div>Found {numRequests} requests</div>
        </Layout>
    )
}

RequestsIndex.getInitialProps = async ({query}) => {
    const campaign = Campaign(query.address)

    const numRequests = await campaign.methods.numRequests().call()
    const approversCount = await campaign.methods.approversCount().call()

    const requests = await Promise.all(
        Array(parseInt(numRequests)).fill(undefined, undefined, undefined).map((element, index) => {
            return campaign.methods.requests(index).call()
        })
    )

    return {
        numRequests,
        requests,
        approversCount
    }
}

export default RequestsIndex