import React from 'react';
import { connect } from 'react-redux';
import { updateFilteredContributions } from '../../actions';
import { IContribution, IState } from '../../interfaces';

interface IDashboard {
	contributions: IContribution[];
	filteredContributions: IContribution[];
	updateFilteredContributions: (contributions: IContribution[]) => void;
}

const filterCons = (contributions: IContribution[]): IContribution[] | [] => {
	return contributions.filter(con => con.currency === 'BTC');
};

const Dashboard: React.FC<IDashboard> = ({
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

const mapStateToProps = (state: IState) => ({
	contributions: state.contributions,
	filteredContributions: state.filteredContributions
});

const mapDispatchToProps = (dispatch: any) => ({
	updateFilteredContributions: (contributions: IContribution[]) => {
		dispatch(updateFilteredContributions(contributions));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
