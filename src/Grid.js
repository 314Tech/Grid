import React from 'rect';
import {
	View,
	TouchableOpacity
} from 'react-native';
import Square from './Square';

const Row = ({matrix, row, size}) => {
	const {rowViewStyle} = styles;

	let renderRow = [];
	for (let column = 0; column < size; column++) {
		renderRow.push(
			<Square 
				size = {size}
				color = {(matrix[row][column]) ? 'blue' : 'white'}
			/>
		);
	}

	return (
		<View 
			style = {rowViewStyle}
		>
			{renderRow}
		</View>
	)
}

const Grid = ({matrix, size}) => {
	const {columnViewStyle} = styles;

	let renderTable = [];
	for (let row = 0; row < size; row++) {
		renderTable.push(
			<Row
				matrix = {matrix}
				row = {row}
				size = {size}
			/>
		);
	}
	
	return (
		<View 
			style = {columnViewStyle}
		>
			{renderTable}
		</View>
	)
}

const styles = Stylesheet.create({
	rowViewStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
	},
	columnViewStyle: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
	}
})

export {Grid};