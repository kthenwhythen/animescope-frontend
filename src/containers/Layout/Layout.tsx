import { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

const Main = styled.main`
    padding: 0 12px
`

const Layout = (props) => (
    <Fragment>
        <Header />
        <SideDrawer />
        <Main>
            {props.children}
        </Main>
    </Fragment>
)

export default Layout
