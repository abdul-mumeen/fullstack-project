import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './App.css';

const GET_ICU_CONTRIBUTIONS = gql`
	{
		contributions {
			currency
			value
			txid
			address
		}
	}
`;

const App: React.FC = () => {
	return (
		<Query query={GET_ICU_CONTRIBUTIONS}>
			{({ data, loading }: { data: any; loading: boolean }) => {
				{
					console.log(data, 'data', loading);
				}
				if (loading) {
					return <div>Loading ...</div>;
				}
				return (
					<div className="App">
						<header className="App-header">
							{data.contributions.map((c: any) => (
								<div>{JSON.stringify(c)}</div>
							))}
						</header>
					</div>
				);
			}}
		</Query>
	);
};

export default App;
