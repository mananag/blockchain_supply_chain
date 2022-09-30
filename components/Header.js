import {useState} from 'react'
import {Menu} from 'semantic-ui-react'
import {useRouter} from "next/router";

export default function Header() {

    const handleItemClick = (e, {name}) => {
        router.push(name)
    }
    const router = useRouter()

    return (
        <Menu pointing secondary style={{marginTop : '10px'}}>
            <Menu.Item
                name='/'
                active={router.pathname === ''}
                onClick={handleItemClick}
            >
                Crowd Coin
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='/'
                    active={router.pathname === '/'}
                    onClick={handleItemClick}
                >
                    Items
                </Menu.Item>

                <Menu.Item
                    name='/campaigns/new'
                    active={router.pathname === '/campaigns/new'}
                    onClick={handleItemClick}
                >
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}