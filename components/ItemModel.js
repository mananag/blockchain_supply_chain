import { Modal, Button, Header, Icon, Message, List } from "semantic-ui-react"
import { useState } from "react"
import supplyChain from "../ethereum/supplyChain";
import web3 from "../ethereum/web3";
// import { address } from '../../config.json'
import { useRouter } from "next/router";

async function fetchData() {
    await window.ethereum.send('eth_requestAccounts')
    const accounts = await web3.eth.getAccounts()
    return accounts
}

const ItemModel = ({address, index}) => {
    const [open, setOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [orderHistory, setOrderHistory] = useState([])

    const router = useRouter()

    const handleMoveProduct = async (e) => {
        e.preventDefault()
        console.log(address)
        setLoading(true)
        try {
            let accounts = await fetchData()
            await supplyChain.methods.moveProduct(index)
                .send({
                    from: accounts[0]
                })
            await router.push(`/`)
        } catch (e) {
            setErrorMessage(e.message)
            console.log(e)
        }
        setOpen(false)
        setLoading(false)
    }
    const fetchOrderHistory = async () => {
        const orders = await supplyChain.methods.getOrderHistory(index).call();
        setOrderHistory(orders)
        return <></>
    }

    const handleOrderHistory = () => {
        if (address.norders == 0) {
            return (
                <Message warning>
                    No Orders placed for this item.
                </Message>
            )
        }else{
            fetchOrderHistory()
            return(
                <List ordered items={orderHistory} />
            )
        }
    }

    return(
        <Modal
            closeIcon
            open={open}
            trigger={<Button>Order Details</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size='tiny'
        >
            <Header icon='archive' content={address[0]} />
            <Modal.Content>
                <p>
                    <b>Item Owner: </b>
                    {address.itemOwner}
                </p>
                <p>
                    <b>Cost: </b>
                    {address.cost}
                </p>
                <u><h4>Orders History</h4></u>
                {handleOrderHistory()}
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Close
                </Button>
                <Button loading={loading} color='green' onClick={handleMoveProduct}>
                    <Icon name='checkmark' /> Buy Product
                </Button>
            </Modal.Actions>
        </Modal>
    )
}
ItemModel.getInitialProps = async () => {
    const numItems = await supplyChain.methods.ic().call();
    let items = [];
    for (let i = 0; i < numItems; i++) {
        let item = await supplyChain.methods.Items(i).call();
        items.push(item);
    }
    // console.log( "", numItems)

    return { items, numItems }
}

export default ItemModel