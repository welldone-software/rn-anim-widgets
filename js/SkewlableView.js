import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        this.skewX = new Animated.Value(0);
        this.initExpanted = this.props.expanded
    }

    render() {
        if (this.initExpanted !== this.props.expanded) {
            this.initExpanted = this.props.expanded
            Animated.spring(this.skewX, {
                toValue: this.props.expanded ? 1 : 0,   // Returns to the start
                velocity: 3,  // Velocity makes it move
                tension: -2, // Slow
                friction: 5,  // Oscillate a lot
            }).start();
        }

        return (
            <Animated.View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 5,
                paddingRight: 10,
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignSelf: 'stretch',
                marginLeft: this.skewX.interpolate({ inputRange: [0, 1], outputRange: [1, 4]}),
                marginRight: this.skewX.interpolate({ inputRange: [0, 1], outputRange: [1, 4]}),
                height: this.skewX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 90],
                }),
                marginBottom: this.skewX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 6],
                }),
                marginTop: this.skewX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 3],
                }),
                transform: [{
                    rotateX: this.skewX.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '3deg'],
                    }),
                }]
            }}>
                {this.props.children}
                <Text onPress={this.props.onPress}>
                    <Icon name={this.props.expanded ? 'chevron-up' : 'chevron-down'} size={10}/>
                </Text>
            </Animated.View>
        );
    }
}