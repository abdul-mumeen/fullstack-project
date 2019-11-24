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

const renderLoading = () => {
	return <div>Loading.....</div>;
};

const renderEmptyState = () => {
	return <div>Empty State.....</div>;
};

const renderDashboard = (contributions: any[]) => {
	return <div>Dashboard.....</div>;
};

const App: React.FC = () => {
	return (
		<Query query={GET_ICU_CONTRIBUTIONS}>
			{({ data, loading }: { data: any; loading: boolean }) => {
				const isEmptyData = !loading && !data.contributions;
				return (
					<div className="App">
						{loading
							? renderLoading()
							: isEmptyData
							? renderEmptyState()
							: renderDashboard(data.contributions)}
					</div>
				);
			}}
		</Query>
	);
};

export default App;
