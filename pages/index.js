import supplyChain from "../ethereum/supplyChain";
import {useEffect} from "react";
import {Button, Card, Modal} from 'semantic-ui-react'
import Layout from "../components/Layout";
import Link from "next/link";
import ItemModel from "../components/ItemModel";

function Home({items, numItems}) {

  useEffect(() => {

  }, [])

  const renderCards = () => {
    console.log(items, numItems)
    const itemsCard = items.map((address, index) => {
      return{
        header : address[0],
        description : <ItemModel address = {address} index = {index} />,
        fluid: true,
        key: index
      }
    })

    return <Card.Group items={itemsCard}/>
  }

  return (
    <div>
      <Layout title={'Blockchain Supply Chain'}>

        <h2>Items List</h2>
        <Link href={'/items/new'}>
          <Button
              content={"Create New Item"}
              icon={"add circle"}
              primary
              floated={'right'}
          />
        </Link>
        {renderCards()}
      </Layout>
    </div>
  )
}

Home.getInitialProps = async () => {
  const numItems = await supplyChain.methods.ic().call();
  let items = [];
  for(let i = 0; i < numItems; i++){
    let item = await supplyChain.methods.Items(i).call();
    items.push(item);
  }
  // console.log( "", numItems)

  return { items, numItems }
}

export default Home
