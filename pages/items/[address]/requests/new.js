import Layout from "../../../../components/Layout";
import {useRouter} from "next/router";
import {Button, Form, Input, Message} from "semantic-ui-react";
import {useState} from "react";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";

function RequestNew () {
    const router = useRouter()
    const address = router.query.address

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [recipient, setRecipient] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        const campaign = Campaign(address)
        try {
            await window.ethereum.send('eth_requestAccounts')
            const accounts = await web3.eth.getAccounts()
            await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
                .send({from: accounts[0]})
            await router.push(`/campaigns/${address}/requests`)
        }
        catch (e) {
            setErrorMessage(e.message)
            console.log(e)
        }
        setLoading(false)
    }

    return(
        <Layout title={'Create Request'}>
            <h3>Create a Request : {address}</h3>
            <Form onSubmit={onSubmit} error={!!errorMessage} >
                <Form.Field>
                    <label>Description</label>
                    <Input
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value (in ether)</label>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Recipient</label>
                    <Input
                        value={recipient}
                        onChange={e => setRecipient(e.target.value)}
                    />
                </Form.Field>

                <Message error>
                    <Message.Header>Oops!</Message.Header>
                    <Message.Content>{errorMessage.toString()}</Message.Content>
                </Message>
                <Button loading={loading} primary>Create!</Button>
            </Form>
        </Layout>
    )
}

export default RequestNew