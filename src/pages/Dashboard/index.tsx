import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from './../../services/api-client'

import Loader from './../../components/Loader'

import { Title, Form, Error, Repositories } from './styles'

interface SearchResult {
	id: number
	type?: string
	name?: string
	full_name?: string
	description?: string
	login?: string
	avatar_url?: string
	owner: {
		avatar_url?: string
		login?: string
	}
}

const Dashboard: React.FC = () => {
	const [searchType, setSearchType] = useState('repositories')
	const [searchTerm, setSearchTerm] = useState('')
	const [status, setStatus] = useState({
		loading: false,
		error: ''
	})
	const [results, setResults] = useState<SearchResult[]>([])

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()

		if (!searchTerm) {
			setStatus({
				...status,
				error: `You must type a ${
					searchType === 'repositories' ? 'repository' : 'user'
				} name to search`
			})
			return
		}

		setStatus({ ...status, loading: true })

		try {
			const response = await api.get(`search/${searchType}?q=${searchTerm}`)
			const result = response.data.items

			setResults(result)
			setSearchTerm('')
			setStatus({ loading: false, error: '' })
		} catch (error) {
			setStatus({
				loading: true,
				error: `Error while searching for: ${searchTerm}`
			})
		}
	}

	return (
		<>
			<Title> Explore repositories or users on GitHub: </Title>

			<Form hasError={!!status.error} onSubmit={handleAddRepository}>
				<div>
					<label>
						Repositories
						<input
							type="radio"
							value="repositories"
							id="repositories"
							name="searchType"
							checked={searchType === 'repositories'}
							onChange={e => setSearchType(e.target.value)}
						/>
						<span></span>
					</label>
					<label>
						Users
						<input
							type="radio"
							value="users"
							id="users"
							name="searchType"
							checked={searchType === 'users'}
							onChange={e => setSearchType(e.target.value)}
						/>
						<span></span>
					</label>
				</div>
				<input
					value={searchTerm}
					placeholder={`Search for ${searchType.toLocaleLowerCase()}...`}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<button type="submit"> Search </button>
			</Form>

			{status.error && <Error> {status.error} </Error>}

			<Repositories>
				{status.loading ? (
					<Loader />
				) : (
					results.map(result => {
						if (result.type === 'User') {
							return (
								<Link to={`/users/${result.login}`} key={result.id}>
									<img src={result.avatar_url} alt={result.login} />
									<div>
										<strong> {result.login} </strong>
									</div>

									<FiChevronRight size={20} />
								</Link>
							)
						} else {
							return (
								<Link to={`/repositories/${result.full_name}`} key={result.id}>
									<div>
										<strong>
											{' '}
											{result.name} <span> [{result.owner.login}] </span>
										</strong>
										<p> {result.description} </p>
									</div>

									<FiChevronRight size={20} />
								</Link>
							)
						}
					})
				)}
			</Repositories>
		</>
	)
}

export default Dashboard
