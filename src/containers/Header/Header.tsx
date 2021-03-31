import { useEffect, useState } from 'react'
import styled from 'styled-components'
import hamburger from '../../assets/css/hamburgers.module.css'

import logo from '../../assets/images/logo.png'

const HeaderWrap = styled.header`
	padding: 12px 4px;
	margin: 0;
	position: fixed;
	background-color: rgba(37, 37, 37, 0.75);
	backdrop-filter: blur(4px);
	width: 100%;
	z-index: 150;
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

interface Props {
	active?: boolean
	clicked?: () => void
}

const Header: React.FC<Props> = ({active, clicked}) => {
	return (
		<HeaderWrap className="row">
			<div className="col-xs-8">
				<Logo src={logo} />
				<LogoTitle>Animescope</LogoTitle>
			</div>
			<div className="col-xs-4">
				<div className={`${hamburger.Hamburger} ${hamburger.HamburgerArrowR} ${active ? hamburger.isActive : ''}`} onClick={clicked}>
					<span className={hamburger.HamburgerBox}>
						<span className={hamburger.HamburgerInner}></span>
					</span>
				</div>
			</div>
		</HeaderWrap>
	)
}

export default Header
