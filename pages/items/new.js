import Layout from "../../components/Layout";
import {Button, Form, Input, Message} from "semantic-ui-react";
import {useState} from "react";
import supplyChain from "../../ethereum/supplyChain";
import web3 from "../../ethereum/web3";
import {address} from '../../config.json'
import {useRouter} from "next/router";

async function fetchData() {
    await window.ethereum.send('eth_requestAccounts')
    const accounts = await web3.eth.getAccounts()
    return accounts
}

function CampaignNew () {
    const [itemName, setItemName] = useState('')
    const [cost, setCost] = useState()
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(address)
        setLoading(true)
        try{
            let accounts = await fetchData()
            await supplyChain.methods.addItem(itemName, cost)
                .send({
                    from: accounts[0]
                })
            await router.push(`/`)
        }catch (e){
            setErrorMessage(e.message)
            console.log(errorMessage)
        }
        setLoading(false)
    }

    return (
        <Layout title={'Create Campaign'}>
            <h2>Create a New Campaign!</h2>
            <Form onSubmit={onSubmit} error={!!errorMessage}>
                <Form.Field>
                    <label>Item Name</label>
                    <Input 
                        value={itemName}
                        onChange={event => setItemName(event.target.value)}
                        required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Item Cost</label>
                    <Input label={"wei"}
                        type={'number'}
                        labelPosition={"right"}
                        value={cost}
                        onChange={event => setCost(event.target.value)}
                        required
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

export default CampaignNew