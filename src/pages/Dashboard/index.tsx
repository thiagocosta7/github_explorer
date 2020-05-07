import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import api from './../../services/api-client'

import logoImg from './../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

interface Repository {
	full_name: string
	description: string
	owner: {
		login: string
		avatar_url: string
	}
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState('')
	const [repositories, setRepositories] = useState<Repository[]>([])

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()

		const response = await api.get<Repository>(`repos/${newRepo}`)
		const repository = response.data

		setRepositories([...repositories, repository])
	}

	return (
		<>
			<img src={logoImg} alt="GitHub Explorer" />
			<Title> Explore repositories on GitHub </Title>

			<Form onSubmit={handleAddRepository}>
				<input
					value={newRepo}
					placeholder="Search for repository name..."
					onChange={e => setNewRepo(e.target.value)}
				/>
				<button type="submit"> Search </button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars2.githubusercontent.com/u/33267164?s=460&u=67edf471f038ac6596cfa92f7e18e71fd25d6a62&v=4"
						alt="Thiago Costa"
					/>
					<div>
						<strong> thiagocosta7/github_explorer </strong>
						<p> Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	)
}

export default Dashboard
