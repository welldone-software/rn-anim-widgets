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
                toValue: this.props.expanded ? 0.15 : 0,   // Returns to the start
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
                marginBottom: 1,
                marginLeft: 1,
                marginRight: 1,
                paddingLeft: 5,
                paddingRight: 10,
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignSelf: 'stretch',
                transform: [{
                    skewX: this.skewX.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                    })
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