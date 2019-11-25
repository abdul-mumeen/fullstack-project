import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { setContributions } from './actions';
import Dashboard from './components/dashboard/Dashboard';

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

const renderDashboard = (contributions: any[], setContributions: any) => {
	setContributions(contributions);
	return <Dashboard />;
};

const App: React.FC<any> = ({ setContributions }) => {
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
							: renderDashboard(data.contributions, setContributions)}
					</div>
				);
			}}
		</Query>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	setContributions: (contributions: any) => {
		dispatch(setContributions(contributions));
	}
});

export default connect(null, mapDispatchToProps)(App);
