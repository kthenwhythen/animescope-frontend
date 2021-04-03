import styled from 'styled-components'

const Wrap = styled.div`
    padding: 0 24px 24px 24px;
`

const TopInfo = styled.div`
    height: 12px;
    margin-bottom: 4px;
`

const TopText1 = styled.p`
    margin: 0;
    padding-left: 24px;
    font-size: 12px;
    line-height: 12px;
    text-align: left;
    color: #F3AF68;
`
const TopText2 = styled.p`
    margin: 0;
    padding-right: 24px;
    font-size: 12px;
    line-height: 12px;
    text-align: right;
    color: #8A8A8A;
`

const Icon = styled.img`

`

const InputBody = styled.input`
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 18px;
    border: none;
    background-color: rgba(255, 255, 255, 0.05);
    color: #EEEEEE;
    font-size: 14px;
    padding-left: 12px;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;

    &:focus {
        outline: none;
        border: 1px solid #F3AF68;
    }
`

interface Props {
    name: string
	topText1: string
    topText2: string
}

const Input: React.FC<Props> = ({name, topText1, topText2}) => {
    return (
        <Wrap>
            <TopInfo className="row">
                <TopText1 className="col-xs-6">{topText1}</TopText1>
                <TopText2 className="col-xs-6">{topText2}</TopText2>
            </TopInfo>
            <Icon />
            <InputBody required name={name} type="text" />
        </Wrap>
    )
}

export default Input
