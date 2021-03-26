import styled from 'styled-components'

const Card = styled.div`
    margin-bottom: 24px;
`
const TopInfo = styled.div`
    height: 16px;
    margin-bottom: 6px;
`
const Body = styled.div`
    border-radius: 16px;
    overflow: hidden;
    background-color: #2D2D2D;
`
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
const TopText1 = styled.p`
    margin: 0;
    padding: 0 20px;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
    color: #F3AF68;
`
const TopText2 = styled.p`
    margin: 0;
    padding: 0 20px;
    font-size: 14px;
    line-height: 14px;
    text-align: right;
    color: #7F8DCC;
`

export interface Props {
  img: string
  text: string
  source: string
}

const Prediction = ({ img, text, source }: Props) => (
    <Card>
        <TopInfo className="row">
            <TopText1 className="col-xs-6">14 марта 2021</TopText1>
            <TopText2 className="col-xs-6">Новое</TopText2>
        </TopInfo>
        <Body>
            <Image src={img} />
            <BodyText>
                {text}
            </BodyText>
        </Body>
    </Card>
)

export default Prediction
