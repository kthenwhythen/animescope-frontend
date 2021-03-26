import {Fragment} from 'react'

import styled from 'styled-components'

import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'

const HeaderWrap = styled.header`
	margin: 12px;
`
const Logo = styled.img`
	width: 36px;
	height: 36px;
	display: inline-block;
	vertical-align: top;
`
const LogoTitle = styled.p`
	line-height: 36px;
	font-size: 24px;
	font-weight: bold;
	margin: 0;
	display: inline-block;
	vertical-align: middle;
	color: #F3AF68;
	margin-left: 6px;
`
const Menu = styled.img`
	width: 36px;
	height: 36px;
	float: right;
	align-self: right;
`

function Header() {
	return (
		<HeaderWrap className="row between-xs">
			<div className="col-xs-8">
				<Logo src={logo} />
				<LogoTitle>Animescope</LogoTitle>
			</div>
			<div className="col-xs-4">
				<Menu src={menu} />
			</div>
		</HeaderWrap>
	)
}

export default Header
