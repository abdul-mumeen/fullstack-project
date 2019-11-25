import React from 'react';
import { connect } from 'react-redux';
import { updateFilteredContributions } from '../../actions';

const filterCons = (contributions: any[]) => {
	return contributions.filter(con => con.currency === 'BTC');
};

const Dashboard: React.FC<any> = ({
	contributions,
	filteredContributions,
	updateFilteredContributions
}) => {
	return (
		<div className="App">
			<button
				onClick={() => updateFilteredContributions(filterCons(contributions))}
			>
				Click Me!
			</button>
			{/* <Header className="App-header"></Header>
			<Analytics></Analytics> */}
			{filteredContributions.map((con: any) => {
				return <div>{JSON.stringify(con)}</div>;
			})}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	contributions: state.contributions,
	filteredContributions: state.filteredContributions
});

const mapDispatchToProps = (dispatch: any) => ({
	updateFilteredContributions: (contributions: any) => {
		dispatch(updateFilteredContributions(contributions));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
