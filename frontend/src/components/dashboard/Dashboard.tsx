import React from 'react';
import { connect } from 'react-redux';
import { updateFilteredContributions } from '../../actions';
import { IContribution, IState } from '../../interfaces';
import Header from '../Header/Header';

interface IDashboard {
	contributions: IContribution[];
	filteredContributions: IContribution[];
	updateFilteredContributions: (contributions: IContribution[]) => void;
}

const Dashboard: React.FC<IDashboard> = ({
	contributions,
	filteredContributions,
	updateFilteredContributions
}) => {
	return (
		<div className="App">
			<Header
				contributions={contributions}
				updateFilteredContributions={updateFilteredContributions}
			/>
			{/* <Analytics></Analytics>  */}
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
