import styled from 'styled-components'

import NavigationItem from './NavigationItem/NavigationItem'

const Wrap = styled.div`
    & a:last-child > div {
        border-bottom: none;
    }
`

interface Props {
    clicked: () => void
}

const NavigationItems: React.FC<Props> = ({clicked} : Props) => {
    return (
        <Wrap>
            <NavigationItem link={'/'} icon={'home'} clicked={clicked}>Главная</NavigationItem>
            <NavigationItem link={'/new-post'} icon={'create'} clicked={clicked}>Создать пост</NavigationItem>
            <NavigationItem link={'https://github.com/null-architect'} icon={'github'} clicked={clicked}>Github repo</NavigationItem>
        </Wrap>
    )
}

export default NavigationItems
