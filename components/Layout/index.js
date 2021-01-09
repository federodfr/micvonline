import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'



const Layout = ({ children }) => {
    return(
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </Container>
    )
}

export default Layout


const Container = styled.div`
    margin: -8px;
`
const Content = styled.div`
    margin: 0 10%;
`