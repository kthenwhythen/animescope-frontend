import { Fragment } from 'react'

import Layout from '../Layout/Layout'
import Predictions from '../../components/Predictions/Predictions'

const App = () => {
	return (
		<Fragment>
			<Layout>
				<Predictions />
			</Layout>
		</Fragment>
	)
}

export default App
