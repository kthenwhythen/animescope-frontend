import {Fragment} from 'react'
import styled from 'styled-components'

import Backdrop from '../UI/Backdrop/Backdrop'
import Card from '../UI/Card/Card'
import NavigationItems from '../NavigationItems/NavigationItems'

const MenuPosition = styled.div`
	width: 280px;
	right: 12px;
	margin-top: 72px;
	position: fixed;
	z-index: 50;
	opacity: 0;
	transition: all 0.4s ease-in-out;
`

interface Props {
    show: boolean
    clicked: () => void
}

const SideDrawer : React.FC<Props> = ({show, clicked} : Props) => {
	let style = {transform: `translate(${show ? '0' : '-50px'})`, opacity: `${show ? '1' : '0'}`}
	return (
		<Fragment>
			<Backdrop show={show} clicked={clicked} move={-292} />
			<MenuPosition style={style}>
				<Card topText1={'Меню'} topText2={'Обычное'}>
					<nav>
						<NavigationItems />
					</nav>
				</Card>
			</MenuPosition>
		</Fragment>
	)
}

export default SideDrawer