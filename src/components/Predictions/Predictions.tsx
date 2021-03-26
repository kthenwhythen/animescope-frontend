import {useEffect, useState} from 'react'
import axios from 'axios'

import Prediction from './Prediction/Prediction'

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
        <Prediction
            img={prediction.img}
            text={prediction.text}
            source={prediction.source} />
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
