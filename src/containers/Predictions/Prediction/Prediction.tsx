import styled from 'styled-components'

import PostCard from '../../../components/UI/PostCard/PostCard'

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
    id: string
    click: (id) => void
    img: string
    text: string
    source: string
}


const Prediction = ({ id, click, img, text, source }: Props) => {
    return (
        <PostCard click={click} id={id} link={source} topText1={"14 марта / 2021"} topText2={"Новое"}>
            <Image src={img} />
            <BodyText>
                {text}
            </BodyText>
        </PostCard>
    )
}

export default Prediction
