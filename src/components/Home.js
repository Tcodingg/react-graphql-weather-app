import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

export default function Home() {
	const [citySearched, setCitySearched] = useState('');

	const [getWeather, { loading, error, data }] = useLazyQuery(
		GET_WEATHER_QUERY,
		{
			variables: {
				name: citySearched,
			},
		}
	);

	useEffect(() => {
		if (error) return <h1>Error found</h1>;
		if (data) {
			console.log(data);
		}
	}, [data]);
	return (
		<div className='home'>
			<h1>Search for Weather</h1>
			<input
				type='text'
				placeholder='City Name....'
				onChange={(event) => {
					setCitySearched(event.target.value);
				}}
			/>
			<button onClick={() => getWeather()}>Search</button>

			<div>
				<h1>City Name: {data.getCityByName.name}</h1>
				<h1>Temperature: {data.getCityByName.weather.temperature.actual}</h1>
				<h1>Description: {data.getCityByName.weather.summary.description}</h1>
				<h1>Wind: {data.getCityByName.weather.wind.speed}</h1>
			</div>
		</div>
	);
}
