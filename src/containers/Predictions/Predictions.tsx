import {useEffect, useState} from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'


import Prediction from './Prediction/Prediction'
import Placeholder from '../../components/UI/Placeholder/Placeholder'


const Predictions = () => {
    const [isPredictionsLoaded, setIsPredictionsLoaded] = useState(false)
    const [predictionsData, setPredictionsData] = useState<any[]>([])
    useEffect(() => {
        if (!isPredictionsLoaded) {
            axios.get('/predictions')
                .then(response => {
                    setPredictionsData(response.data)
                    setIsPredictionsLoaded(true)
                })
        }
    })

    const predictions = predictionsData.map(prediction => (
        <LazyLoad key={prediction.id} height={300} offset={0} debounce={500} placeholder={<Placeholder />}>
            <Prediction
                key={prediction.id}
                img={prediction.img}
                text={prediction.text}
                source={prediction.source} />
        </LazyLoad>
    ))

    return (
        <div className="row center-xs">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                {predictions}
            </div>
        </div>
    )
}

export default Predictions
