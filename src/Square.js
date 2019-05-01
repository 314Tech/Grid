import React from 'react';
import { View } from 'react-native';

export const Square = ({size, color, clickSquare}) => {
	return(
		<TouchableOpacity
			onPress = {clickSquare}
		>
			<View
				style = {[squareStyle, {width: size, height: size, backgroundColor: color}]}
			/>
		</TouchableOpacity>
	)
}