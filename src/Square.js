import React from 'react';
import { 
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions
 } from 'react-native';

const Square = ({size, color, clickSquare}) => {
	const {squareStyle} = styles;

	let width = (Dimensions.get('screen').width - 40)/size;
	return(
		<TouchableOpacity
			onPress = {clickSquare}
		>
			<View
				style = {[squareStyle, {width: width, height: width, backgroundColor: color}]}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	squareStyle: {
		borderWidth: 1,
		borderColor: 'blue',
	}
});

export {Square};
