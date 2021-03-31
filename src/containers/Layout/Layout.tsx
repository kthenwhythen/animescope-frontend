import { Fragment, useState } from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

interface Props {
	show?: boolean
	clicked?: () => void
}

const Main = styled.main`
    padding-top: 72px;
    padding-left: 12px;
    padding-right: 12px;
    transition: all 0.4s ease-in-out;
    z-index: 100;
`   

const Layout: React.FC<Props> = ({show, clicked, children}) => {
    const [toggleSideDrawer, setToggleSideDrawer] = useState(false)

	const toggleSideDrawerHandler = () => {
		setToggleSideDrawer(!toggleSideDrawer)
	}
    let style = {transform: `translate(${toggleSideDrawer ? '-314px' : '0'})`}
    return (
        <Fragment>
            <Header active={toggleSideDrawer} clicked={toggleSideDrawerHandler} />
            <SideDrawer show={toggleSideDrawer} clicked={toggleSideDrawerHandler} />
            <Main style={style}>
                {children}
            </Main>
        </Fragment>
    )
}

export default Layout
