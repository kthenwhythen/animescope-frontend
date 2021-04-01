import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import Card from '../../../components/UI/Card/Card'
import { useState } from 'react'

const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`
const BodyText = styled.p`
    padding: 6px 12px 12px 12px;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
`

export interface Props {
  img: string
  text: string
  source: string
}


const Prediction = ({ img, text, source }: Props) => {
    const [showImg, setShowImg] = useState(false)

    return (
        <Card topText1={"14 марта / 2021"} topText2={"Новое"}>
            <Image src={img} />
            <BodyText>
                {text}
            </BodyText>
        </Card>
    )
}

export default Prediction