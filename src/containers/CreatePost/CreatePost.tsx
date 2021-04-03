import styled from 'styled-components'

import Card from '../../components/UI/Card/Card'
import Input from '../../components/UI/Input/Input'
import Textarea from '../../components/UI/Textarea/Textarea'
import Button from '../../components/UI/Button/Button'

const Wrap = styled.div`
    padding-top: 24px;
`

const CreatePost = () => {
    return (
        <div className="row center-xs">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <Card topText1={"Создание поста"} topText2={"Творите"}>
                    <Wrap>
                        <form action={'https://api-animescope.herokuapp.com/predictions'} method="POST">
                            <Input name={"img"} topText1={"Изображение"} topText2={"URL"} />
                            <Input name={"source"} topText1={"Источник"} topText2={"URL"} />
                            <Textarea name={"text"} topText1={"Описание"} topText2={"Поле для текста"} />
                            <Button />
                        </form>
                    </Wrap> 
                </Card>
            </div>
        </div>
    )
}

export default CreatePost
