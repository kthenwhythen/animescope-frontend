import styled from 'styled-components'

const BackdropBody = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 150;
    left: 0;
    top: 0;
    /* background-color: rgba(0, 0, 0, 0.5); */
`

interface Props {
	show: boolean
	clicked: () => void
    move?: number
}

const Backdrop : React.FC<Props> = ({ show, clicked, move } : Props) => {
	return (
		show ? <BackdropBody onClick={clicked} style={{transform: `translate(${move}px)`}} /> : null
	)
}

export default Backdrop