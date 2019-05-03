/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  AsyncStorage, 
  TouchableOpacity,
  StyleSheet, 
  Text, 
  View, 
  Button
} from 'react-native';
import {Grid} from './src/Grid';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)

    let size = 10;
    let tempMatrix = new Array(size);

    for (let index = 0; index < size; index++) {
      tempMatrix[index] = new Array(size).fill(false);
    }
    this.state = {
      matrix: tempMatrix,
      size: size
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('matrix')
    .then(result => {
      if (result !== null) {
        this.setState({
          matrix: JSON.parse(result)
        })
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  savePattern = async () => {
    const {matrix} = this.state;

    try {
      await AsyncStorage.setItem('matrix', JSON.stringify(matrix));
    } catch (error) {
      console.log(error);
    }
  }

  clickSquare = (row, column) => {
    const {matrix} = this.state;

    let tempMatrix = matrix;
    tempMatrix[row][column] = !matrix[row][column];

		this.setState({
      matrix: tempMatrix
    })
  }

  render() {
    const {matrix, size} = this.state;
    const {buttonStyle, buttonTextStyle} = styles;

    return (
      <View style={styles.container}>
        <Grid 
          matrix={matrix}
          size={size}
          clickSquare = {this.clickSquare}
        />
        <TouchableOpacity
          style={buttonStyle}
          onPress={this.savePattern}
          underlayColor='#fff'
        >
          <Text style={buttonTextStyle}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'blue',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonTextStyle:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  }
});
