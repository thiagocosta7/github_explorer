import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { FiChevronRight, FiGlobe } from 'react-icons/fi'

import api from './../../services/api-client'

import { RepositoryInfo, Issues } from './styles'

import Loader from './../../components/Loader'

interface UserParams {
	user: string
}

interface User {
	name: string
	login: string
	avatar_url: string
	location: string
	blog: string
	public_repos: number
	followers: number
	following: number
}

interface Repository {
	id: number
	name: string
	description: string
	html_url: string
}

const User: React.FC = () => {
	const { params } = useRouteMatch<UserParams>()

	const [user, setUser] = useState<User | null>(null)
	const [repositories, setRepositories] = useState<Repository[]>([])

	useEffect(() => {
		api.get(`users/${params.user}`).then(response => {
			setUser(response.data)
		})
		api.get(`users/${params.user}/repos`).then(response => {
			setRepositories(response.data)
		})
	}, [params.user])

	return user && repositories ? (
		<>
			<RepositoryInfo>
				<header>
					<img src={user.avatar_url} alt={user.name} />
					<div>
						<strong>
							{user.name} <span> {user.login} </span>
						</strong>
						<p>
							{user.location}
							{user.blog && (
								<a href={user.blog} target="_blank" rel="noopener noreferrer">
									<FiGlobe />
									{user.blog}
								</a>
							)}
						</p>
					</div>
				</header>
				<ul>
					<li>
						<strong> {user.followers} </strong>
						<span> followers </span>
					</li>
					<li>
						<strong> {user.following} </strong>
						<span> following </span>
					</li>
					<li>
						<strong> {user.public_repos} </strong>
						<span> public repos </span>
					</li>
				</ul>
			</RepositoryInfo>
			<Issues>
				{repositories.map(repository => (
					<a
						key={repository.id}
						href={repository.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<strong> {repository.name} </strong>
							<p> {repository.description} </p>
						</div>

						<FiChevronRight size={20} />
					</a>
				))}
			</Issues>
		</>
	) : (
		<Loader />
	)
}

export default User
