import React, { useEffect, useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from './../../services/api-client'

import { Title, Form, Error, Repositories } from './styles'

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
	const [inputError, setInputError] = useState('')
	const [repositories, setRepositories] = useState<Repository[]>(() => {
		const storagedRepositories = localStorage.getItem(
			'@GitHubExplorer:repositories'
		)
		if (storagedRepositories) {
			return JSON.parse(storagedRepositories)
		} else {
			return []
		}
	})

	useEffect(() => {
		localStorage.setItem(
			'@GitHubExplorer:repositories',
			JSON.stringify(repositories)
		)
	}, [repositories])

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()

		if (!newRepo) {
			setInputError(
				'Enter the repository name in the following format: author/name '
			)
			return
		}

		try {
			const response = await api.get<Repository>(`repos/${newRepo}`)
			const repository = response.data

			setRepositories([...repositories, repository])
			setNewRepo('')
			setInputError('')
		} catch (error) {
			setInputError(`Error while searching for: ${newRepo}`)
		}
	}

	return (
		<>
			<Title> Explore repositories on GitHub </Title>

			<Form hasError={!!inputError} onSubmit={handleAddRepository}>
				<input
					value={newRepo}
					placeholder="Search for repository name..."
					onChange={e => setNewRepo(e.target.value)}
				/>
				<button type="submit"> Search </button>
			</Form>

			{inputError && <Error> {inputError} </Error>}

			<Repositories>
				{repositories.map(repository => (
					<Link
						to={`/repositories/${repository.full_name}`}
						key={repository.full_name}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong> {repository.full_name} </strong>
							<p> {repository.description} </p>
						</div>

						<FiChevronRight size={20} />
					</Link>
				))}
			</Repositories>
		</>
	)
}

export default Dashboard
