import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import {Button, Card, Grid} from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import Link from "next/link";

function Details ({address, minimumContribution, balance, requestsCount, approversCount, manager}) {
    const renderCards = () => {
        const items = [
            {
                header: manager + '100',
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create request to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimumContribution,
                meta: 'Minimum contribution',
                description: 'You must contribute at least this much wei to become an approver'
            },
            {
                header: requestsCount,
                meta: 'Number of request',
                description: 'A request tries to withdraw money from the contract'
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated for the Campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'Balance of money left by campaign'
            }
        ]

        return <Card.Group items={items}></Card.Group>
    }

    return(
        <Layout title={'Campaign Details'}>
            <div>
                <h2>Campaign Details</h2>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address = {address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link href={`/campaigns/${address}/requests`}>
                                <Button primary>View Requests</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Layout>
    )
}

Details.getInitialProps = async ({query}) => {
    const campaign = Campaign(query.address)

    const summary = await campaign.methods.getSummary().call()

    return {
        address: query.address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    }
}

export default Details