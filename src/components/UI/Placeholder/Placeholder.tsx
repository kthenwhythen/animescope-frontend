import styled from 'styled-components'

const CardWrap = styled.div`
    margin-bottom: 24px;
    z-index: 100;
`
const TopInfo = styled.div`
    height: 16px;
    margin-bottom: 6px;
`
const Body = styled.div`
    border-radius: 16px;
    overflow: hidden;
    height: 200px;

    background: linear-gradient(0deg, #2d2d2d, #3d3d3d);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 1s ease infinite;

    @-webkit-keyframes AnimationName {
        0%{background-position:50% 0%}
        50%{background-position:50% 100%}
        100%{background-position:50% 0%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:50% 0%}
        50%{background-position:50% 100%}
        100%{background-position:50% 0%}
    }
    @keyframes AnimationName {
        0%{background-position:50% 0%}
        50%{background-position:50% 100%}
        100%{background-position:50% 0%}
    }
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

const Placeholder = () => {
    return (
        <CardWrap>
            <TopInfo className="row">
                <TopText1 className="col-xs-6"></TopText1>
                <TopText2 className="col-xs-6"></TopText2>
            </TopInfo>
            <Body>
            </Body>
        </CardWrap>
    )
}

export default Placeholder