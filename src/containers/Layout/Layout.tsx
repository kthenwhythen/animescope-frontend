import { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

const Main = styled.main`
    padding-top: 72px;
    padding-left: 12px;
    padding-right: 12px;
`

const Layout = (props) => (
    <Fragment>
        <Header />
        {/* <SideDrawer /> */}
        <Main>
            {props.children}
        </Main>
    </Fragment>
)

export default Layout
