import React, { Component } from 'react';
import {
    Animated,
    Easing
} from 'react-native';

export default class FadeInView extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
            marginTop: new Animated.Value(0)
        };
    }

    componentDidMount() {
        var duration = 500;
        var easing = Easing.inOut(Easing.bounce);
        Animated.sequence([ // One after the other
            Animated.timing(this.state.fadeAnim, { toValue: 1, duration: 0  }),
            Animated.timing(this.state.marginTop, { toValue: 0, duration: duration, easing }),
            Animated.timing(this.state.marginTop, { toValue: -100, duration: duration,  easing }),
            Animated.timing(this.state.marginTop, { toValue: 0, duration: duration,  easing }),
            // Animated.timing(this.state.fadeAnim, { toValue: 0, duration: 1000 }),
        ]).start();
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.fadeAnim, marginTop: this.state.marginTop }}>
                {this.props.children}
            </Animated.View>
        );
    }
}