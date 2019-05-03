import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import {Square} from './Square';



const Row = ({matrix, row, size, clickSquare}) => {
	const {rowViewStyle} = styles;

	let renderRow = [];
	for (let column = 0; column < size; column++) {
		renderRow.push(
			<Square 
				size = {size}
				clickSquare = {() => clickSquare(row,column)}
				color = {(matrix[row][column]) ? 'blue' : 'white'}
				key = {column}
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

const Grid = ({matrix, size, clickSquare}) => {
	const {columnViewStyle} = styles;

	let renderTable = [];
	for (let row = 0; row < size; row++) {
		renderTable.push(
			<Row
				matrix = {matrix}
				row = {row}
				size = {size}
				clickSquare = {clickSquare}
				key = {row}
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

const styles = StyleSheet.create({
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