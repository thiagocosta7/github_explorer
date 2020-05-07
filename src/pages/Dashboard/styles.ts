import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
	hasError: boolean
}

export const Title = styled.h1`
	margin-top: 40px;
	font-size: 36px;
	line-height: 44px;
	color: #3a3a3a;
`

export const Form = styled.form<FormProps>`
	margin-top: 40px;
	max-width: 700px;

	display: flex;
	flex-wrap: wrap;

	& > div {
		flex-basis: 100%;
		border: none;
		display: flex;

		label {
			display: block;
			position: relative;
			padding-left: 35px;
			margin-bottom: 12px;
			cursor: pointer;
			font-size: 22px;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			color: #3a3a3a;

			& + label {
				margin-left: 16px;
			}

			&:hover {
				input {
					& ~ span {
						background-color: #e1e1e1;
					}
				}
			}

			input {
				position: absolute;
				opacity: 0;
				cursor: pointer;
				height: 0;
				width: 0;
			}

			input:checked {
				& ~ span {
					background-color: #2196f3;
					&:after {
						display: block;
					}
				}
			}

			span {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				left: 0;
				height: 25px;
				width: 25px;
				background-color: #ffffff;
				border-radius: 50%;
				transition: 0.2s background-color;
				&:after {
					content: '';
					position: absolute;
					display: none;
					top: 9px;
					left: 9px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					background: white;
				}
			}
		}
	}

	& > input {
		flex: 1;
		height: 50px;
		padding: 0 16px;
		border: 2px solid transparent;
		border-right: 0;
		border-radius: 5px 0 0 5px;
		color: #3a3a3a;

		${({ hasError }) =>
			hasError &&
			css`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}

		@media (min-width: 1024px) {
			height: 70px;
			padding: 0 24px;
		}
	}

	button {
		flex: 1;
		background: #2196f3;
		border: 0;
		height: 50px;
		color: #ffffff;
		font-weight: bold;
		border-radius: 0 5px 5px 0;
		transition: 0.2s background-color;
		&:hover {
			background: ${shade(0.2, '#2196f3')};
		}

		@media (min-width: 1024px) {
			height: 70px;
			flex: none;
			width: 210px;
		}
	}
`
export const Repositories = styled.div`
	margin-top: 80px;
	max-width: 700px;

	/* Repository item */
	a {
		background: #ffffff;
		border-radius: 5px;
		width: 100%;
		padding: 24px;
		flex-direction: column;
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

		img {
			width: 64px;
			height: 64px;
			border-radius: 50%;
			margin-bottom: 16px;
		}

		div {
			margin: 0 16px;
			flex: 1;

			strong {
				font-size: 20px;
				color: #3d3d4d;

				span {
					font-size: 16px;
					font-weight: normal;
				}
			}

			p {
				font-size: 18px;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}

		svg {
			margin: 16px 0 0 0;
			color: #cbcbd6;
		}
	}

	@media (min-width: 1024px) {
		a {
			flex-direction: row;

			img {
				margin-bottom: 0;
			}

			svg {
				margin: 0 0 0 auto;
			}
		}
	}
`

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`
