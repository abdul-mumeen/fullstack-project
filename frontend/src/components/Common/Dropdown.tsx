import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { IDropdown } from '../../interfaces';

const Dropdown: React.FC<IDropdown> = ({
	items,
	handleChange,
	selectedItem
}) => {
	return (
		<div>
			<FormControl>
				<NativeSelect value={selectedItem} onChange={handleChange}>
					<option value="">None</option>
					{items.map((item: string, index: number) => (
						<option key={`${item} ${index}]`} value={item}>
							{item}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default Dropdown;
