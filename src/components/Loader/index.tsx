import React from 'react'
import Lottie from 'react-lottie'

import { LoaderContainer } from './styles'

import animationData from './loaderLottie.json'

const Loader: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<LoaderContainer>
			<Lottie options={defaultOptions} height={200} width={200} />
		</LoaderContainer>
	)
}

export default Loader
