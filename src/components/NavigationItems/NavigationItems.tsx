import {Fragment} from 'react'
import styled from 'styled-components'

import NavigationItem from './NavigationItem/NavigationItem'

interface Props {

}

const NavigationItems: React.FC<Props> = () => {
    return (
        <Fragment>
            <NavigationItem icon={'home'}>Главная</NavigationItem>
            <NavigationItem icon={'create'}>Создать пост</NavigationItem>
            <NavigationItem link={'https://github.com/null-architect'} icon={'github'}>Github repo</NavigationItem>
        </Fragment>
    )
}

export default NavigationItems

