import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units'

class HelloWorld extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<View
				style={{
					display: 'flex',
					width: '100%',
					height: vh(100),
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'red' }}>你好世界</Text>
			</View>
		)
	}
}

export default HelloWorld
