import styled from 'styled-components'

const Wrap = styled.div`
    padding: 0 24px 24px 24px;
`

const ButtonBody = styled.input`
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 18px;
    border: none;
    background-color: #7F8DCC;
    color: #EEEEEE;
    font-size: 14px;
    padding-left: 12px;
    font-weight: bold;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;

    &:focus {
        outline: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
`

const Button = () => {
    return (
        <Wrap>
            <ButtonBody type="submit"></ButtonBody>
        </Wrap>
    )
}

export default Button
