import React from 'react';
import { 
	View,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

const Button = ({onPress}) => {
	const {buttonViewStyle, textStyle} = style;

	return (
		<TouchableOpacity
			onPress = {onPress}
		>
			<View
				style={buttonViewStyle}
			>
				<Text
					style = {textStyle}
				> 
					SAVE
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonViewStyle: {
		
	},
	textStyle:{ 

	}
})