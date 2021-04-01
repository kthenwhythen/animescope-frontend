import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as HomeIcon } from '../../../assets/images/home.svg'
import { ReactComponent as CreateIcon } from '../../../assets/images/create.svg'
import { ReactComponent as GithubIcon } from '../../../assets/images/github.svg'

const Item = styled.div`
    display: block;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 24px;

    &:last-child {
        border-bottom: none;
    }
`

const WrapIcon = styled.div`
    height: 24px;
    width: 24px;
    vertical-align: middle;
    display: inline-block;
`

const Text = styled.p`
    display: inline-block;
    margin: 0;
    height: 24px;
    vertical-align: middle;
    line-height: 26px;
    margin-left: 12px;
    color: #7F8DCC;
`

interface Props {
    link?: string
    icon: string
    clicked: () => void
    children: any
}

const NavigationItem: React.FC<Props> = ({ link, icon, children, clicked } : Props) => {
    let Icon: any
    if (icon === 'home') {
        Icon = HomeIcon
    }
    if (icon === 'create') {
        Icon = CreateIcon
    }
    if (icon === 'github') {
        Icon = GithubIcon
    }


    return (
        <Link to={{pathname: link}} onClick={clicked} target={icon === 'github' ? "_blank" : null}>
            <Item>
                <WrapIcon>
                    <Icon fill="#7F8DCC" />
                </WrapIcon>
                <Text>{children}</Text>
            </Item>
        </Link>
    )
}

export default NavigationItem
