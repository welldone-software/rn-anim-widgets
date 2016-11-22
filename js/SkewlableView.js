import React, { Component } from 'react';
import {
    Animated,
    Easing,
    Text
} from 'react-native';

export default class FadeInView extends React.Component {
    constructor( props ) {
        super(props);
        this.state = { hiddenContent: true }
        this.anim = new Animated.Value(0);
    }

    click() {
        this.props.onPress()
        Animated.spring(this.anim, {
            toValue: 0,   // Returns to the start
            velocity: 3,  // Velocity makes it move
            tension: -2, // Slow
            friction: 1,  // Oscillate a lot
        }).start();
        this.setState({ hiddenContent: false })
    }

    render() {
        return (
            <Animated.View style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 1,
                marginLeft: 1,
                marginRight: 1,
                padding: 15,
                flexDirection: 'row',
                backgroundColor: '#fff',
                alignSelf: 'stretch',
                transform: [ {
                    skewX: this.anim.interpolate({
                        inputRange: [ 0, 1 ],
                        outputRange: [ '0deg', '180deg' ],
                    })
                } ]
            }}>
                {this.props.children}
                <Text style={{ color: '#000', backgroundColor: '#ccc', height: 80 }} onPress={this.click.bind(this)}>
                      >
                </Text>
            </Animated.View>
        );
    }
}