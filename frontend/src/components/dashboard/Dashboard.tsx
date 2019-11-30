import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { updateFilteredContributions } from '../../actions';
import { IContribution, IState } from '../../interfaces';
import Header from '../Header/Header';
import Analytics from '../analytics/Analytics';

import '../../App.scss';

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
		<div className="container">
			<Header
				contributions={contributions}
				updateFilteredContributions={updateFilteredContributions}
			/>
			{!!filteredContributions.length ? (
				<Fragment>
					<Analytics filteredContributions={filteredContributions} />
				</Fragment>
			) : (
				<span>No contributions matching your filter.</span>
			)}
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
