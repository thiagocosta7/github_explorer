import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Routes from './routes'

import Header from './components/Header'

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter
				basename={
					process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL
				}
			>
				<Header />
				<Routes />
			</BrowserRouter>
		</>
	)
}

export default App
