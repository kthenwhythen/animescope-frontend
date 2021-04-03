import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

const CardWrap = styled.div`
    margin-bottom: 24px;
    z-index: 100;
`

const Wrap = styled.div`
    &.fade-appear {
        opacity: 0;
    }

    &.fade-appear-done {
        opacity: 1;
        transition: opacity 200ms;
    }
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
    color: #8A8A8A;
`

interface Props {
	topText1: string
    topText2: string
}

const Card: React.FC<Props> = ({children, topText1, topText2}) => {
    return (
        <CardWrap>
            <CSSTransition
                in
                appear
                classNames="fade"
                timeout={100}
            >
                <Wrap>
                    <TopInfo className="row">
                        <TopText1 className="col-xs-6">{topText1}</TopText1>
                        <TopText2 className="col-xs-6">{topText2}</TopText2>
                    </TopInfo>
                    <Body>
                        {children}
                    </Body>
                </Wrap>
            </CSSTransition>
        </CardWrap>
    )
}

export default Card