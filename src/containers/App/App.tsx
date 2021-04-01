import { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'


import Layout from '../Layout/Layout'
import Predictions from '../Predictions/Predictions'

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Layout>
					<Route path="/" exact component={Predictions} />
					<Route path="/new-post" exact render={() => <h1>new post</h1>} />
				</Layout>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
