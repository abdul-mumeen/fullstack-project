import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { setContributions } from './actions';
import Dashboard from './components/dashboard/Dashboard';
import { IContribution } from './interfaces';
import './App.css';

interface IApp {
	setContributions: (contributions: IContribution[]) => void;
}

interface IApiData {
	contributions?: IContribution[] | [];
}

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

const renderLoading = (): React.ReactNode => {
	return <div>Loading.....</div>;
};

const renderEmptyState = (): React.ReactNode => {
	return <div>Empty State.....</div>;
};

const renderDashboard = (
	contributions: IContribution[],
	setContributions: (contributions: IContribution[]) => void
): React.ReactNode => {
	setContributions(contributions);
	return <Dashboard />;
};

const App: React.FC<IApp> = ({ setContributions }) => {
	return (
		<Query query={GET_ICU_CONTRIBUTIONS}>
			{({ data, loading }: { data: IApiData; loading: boolean }) => {
				const isEmptyData = !loading && !data.contributions;
				return (
					<div className="App">
						{loading
							? renderLoading()
							: isEmptyData
							? renderEmptyState()
							: renderDashboard(data.contributions || [], setContributions)}
					</div>
				);
			}}
		</Query>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	setContributions: (contributions: IContribution[]) => {
		dispatch(setContributions(contributions));
	}
});

export default connect(null, mapDispatchToProps)(App);
