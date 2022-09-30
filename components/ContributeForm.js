import {Button, Form, Input, Message} from "semantic-ui-react";
import {useState} from "react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import {useRouter} from "next/router";

async function fetchData() {
    await window.ethereum.send('eth_requestAccounts')
    return await web3.eth.getAccounts()
}

function ContributeForm({address}) {
    const [value, setValue] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const campaign = Campaign(address)

        try {
            let accounts = await fetchData()
            console.log(campaign.methods)
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(value, 'ether')
            })
            await router.push(`/campaigns/${address}`)
        }catch (e){
            setErrorMessage(e.message)
            console.log(e)
        }
        setLoading(false)
    };
    return (
        <Form onSubmit={onSubmit} error={!!errorMessage}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input label={'ether'} labelPosition={'right'} type={'number'}
                    value={value} onChange={(e) => setValue(e.target.value)}
                />
            </Form.Field>
            <Message error>
                <Message.Header>Oops!</Message.Header>
                <Message.Content>{errorMessage.toString()}</Message.Content>
            </Message>
            <Button loading={loading} primary>Contribute!</Button>
        </Form>
    )
}

export default ContributeForm