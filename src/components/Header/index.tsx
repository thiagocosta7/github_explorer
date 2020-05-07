import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import logo from './../../assets/logo.svg'

import { Header } from './styles'

const HeaderComponent: React.FC = () => {
	const { pathname } = useLocation()
	return (
		<Header>
			<img src={logo} alt="GitHub Explorer" />
			{pathname !== '/' && (
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			)}
		</Header>
	)
}

export default HeaderComponent
