import React, {Component} from 'react';
import {
 Text,
  View,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

const inputButton = [
['7','8','9','/'],
['4','5','6','*'],
['1','2','3','-'],
['0','.','=','+']
]
export default class Calculator extends Component{

	constructor(props){
		super(props);

		this.state = {
			currentiput: "",
			previnput: '0',	
			operator: null,
		}
	}
	render(){
		return (
			<View style = {styles.container}>
				<View style = {styles.containerDisplay}>
					<Text style = {styles.textDisplayinput}>{this.state.currentiput}</Text>                        
				</View> 
				<View style = {styles.containerInput}>
					{this._renderButton()}
				</View>
			 </View>
			);
	}
	_saveOperator(value){
		this.setState({
					operator: value,
					previnput: this.state.currentiput,
					currentiput: ''
				})
	}
	_saveResult(value){
		let previnput = this.state.previnput;
				let currentiput = this.state.currentiput;
				let operator = this.state.operator;

				let result = eval(previnput + operator + currentiput);
				this.setState({currentiput: result});
	}
	_saveNumber(value){
		this.setState({
				currentiput: this.state.currentiput + value
			})
	}
	_onPress(value){
		switch(value){
			case "/":
			case "*":
			case "+":
			case "-":
				this._saveOperator(value);
			break;

			case "=":
				this._saveResult(value);
			break;

			default:
				this._saveNumber(value);
			break;
		}

	}
	_renderButton(){
		let views = [];
		let countRow = inputButton.length;
		for(let i = 0; i < countRow; i++){
			let input = [];
			let column = inputButton[i];
			for(let j = 0; j < column.length; j++){
				
				input.push(
					<TouchableHighlight key = {'row'+ i + ' - ' + 'column'+ j} underlayColor ={"#00BFA5"} style = {styles.inputButton} onPress= {this._onPress.bind(this,column[j])} >
					<Text style ={styles.textinputButton}>{column[j]}</Text>
				</TouchableHighlight>
					)
			}
			views.push(<View style={styles.inputRow} key = {'row'+ i}>{input}</View>)
		}
		return views;
	
	}

}