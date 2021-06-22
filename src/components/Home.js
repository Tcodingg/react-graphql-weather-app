import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

export default function Home() {
	const [getWeather, { loading, error }] = useLazyQuery(GET_WEATHER_QUERY, {
		variables: {
			name: 'Vancouver',
		},
	});
	return (
		<div className='home'>
			<h1>Search for Weather</h1>
			<input type='text' placeholder='City Name....' />
			<button onClick={() => getWeather()}>Search</button>
		</div>
	);
}
