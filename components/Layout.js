import Header from "./Header";
import {Container} from "semantic-ui-react";
import Head from "next/head";

function Layout ({children, title = 'Default'}) {
    return(
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <Header />
                {children}
            </Container>
        </div>
    )
}

export default Layout