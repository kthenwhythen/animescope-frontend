import {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import LazyLoad from 'react-lazyload'

import loading from '../../assets/images/loading.svg'

import Prediction from './Prediction/Prediction'
import Placeholder from '../../components/UI/Placeholder/Placeholder'

const Loading = styled.img`
    margin-top: 34vh;
    width: 64px;
    height: 64px;
`

const Predictions = () => {
    const [isPredictionsLoaded, setIsPredictionsLoaded] = useState(false)
    const [isPredictionsLoading, setIsPredictionsLoading] = useState(false)
    const [predictionsData, setPredictionsData] = useState<any[]>([])
    useEffect(() => {
        if (!isPredictionsLoaded && !isPredictionsLoading) {
            setIsPredictionsLoading(true)
            axios.get('/predictions')
                .then(response => {
                    setPredictionsData(response.data)
                    setIsPredictionsLoaded(true)
                    setIsPredictionsLoading(false)
                })
        }
    })

    const predictionDeleteHandler = (id) => {
        axios.delete(`/prediction/${id}`)
            .then(() => {
                setIsPredictionsLoaded(false)
            })
    }
    const predictions = predictionsData.slice(0).reverse().map(prediction => (
        <LazyLoad key={prediction.id} height={300} offset={0} debounce={500} placeholder={<Placeholder />}>
            <Prediction
                key={prediction.id}
                img={prediction.img}
                text={prediction.text}
                source={prediction.source}
                id={prediction.id}
                click={predictionDeleteHandler} />
        </LazyLoad>
    ))

    return (
        <div className="row center-xs">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                {isPredictionsLoaded ? predictions : <Loading src={loading} />}
            </div>
        </div>
    )
}

export default Predictions
