import styled from 'styled-components'

export const RepositoryInfo = styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;
		flex-direction: column;

		img {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			margin-bottom: 16px;
		}

		div {
			flex: 1;
			strong {
				font-size: 26px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}

		@media (min-width: 1024px) {
			flex-direction: row;

			img {
				width: 120px;
				height: 120px;
				margin-bottom: 0;
			}

			div {
				margin-left: 24px;

				strong {
					font-size: 36px;
				}

				p {
					font-size: 28px;
				}
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 26px;
			}
			strong {
				display: block;
				font-size: 26px;
				color: #3d3d4d;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
		@media (min-width: 1024px) {
			li {
				& + li {
					margin-left: 80px;
				}
				strong {
					font-size: 36px;
				}
			}
		}
	}
`

export const Issues = styled.div`
	margin-top: 80px;
	max-width: 700px;

	/* Repository item */
	a {
		background: #ffffff;
		border-radius: 5px;
		width: 100%;
		padding: 16px;
		display: block;
		text-decoration: none;
		display: flex;
		align-items: center;
		transition: 0.2s transform;

		& + a {
			margin-top: 16px;
		}

		&:hover {
			transform: translateX(10px);
		}

		@media (min-width: 1024px) {
			padding: 24px;
		}
	}

	div {
		margin: 0 8px;
		flex: 1;

		strong {
			font-size: 18px;
			color: #3d3d4d;
		}

		p {
			font-size: 16px;
			color: #a8a8b3;
			margin-top: 4px;
		}

		@media (min-width: 1024px) {
			margin: 0 16px;

			strong {
				font-size: 20px;
			}

			p {
				font-size: 18px;
			}
		}
	}

	svg {
		margin-left: auto;
		color: #cbcbd6;
	}
`
