import React, {Component} from 'react';
import {
    Animated,
    Easing,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ExpandableView extends React.Component {
    constructor(props) {
        super(props)
        this.maxHeight = new Animated.Value(4)
        this.changes = 0;
        this.prevShow = this.props.show
        this.skewCircle = new Animated.Value(0.5);
    }

    render() {
        if (this.prevShow != this.props.show) {
            this.changes++;
            this.prevShow = this.props.show
            Animated.spring(this.maxHeight,
                { toValue: this.props.show ? 100 : 4, duration: 500 }
            ).start()

            this.skewCircle = new Animated.Value(0.1);


            Animated.spring(this.skewCircle, {
                toValue: 0.4,   // Returns to the start
                velocity: 4,  // Velocity makes it move
                tension: -4, // Slow
                friction: 1,  // Oscillate a lot
            }).start();
        }

        var style = {
            maxHeight: this.maxHeight,
            marginTop: -4, paddingTop: 4,
            alignSelf: 'stretch',
            alignItems: 'center',
        };
        return (
            <Animated.View style={style}>
                <Text style={{ color: '#ccc' }}>{this.changes}</Text>
                {this.props.children}
                <Animated.View style={{
                    height: 150,
                    position: 'absolute',
                    right: 0,
                    transform: [{
                        rotateX: this.skewCircle.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '90deg'],
                        })
                    }]
                }}>
                    <Text onPress={this.animateCircle} style={{ color: '#ccc' }}>
                        <Icon name="circle" size={150}/>
                    </Text>
                </Animated.View>
                <Animated.View style={{
                    height: 150,
                    position: 'absolute',
                    left: 0,
                    transform: [{
                        rotateX: this.skewCircle.interpolate({
                            inputRange: [0, 1],
                            outputRange: [ '270deg', '360deg'],
                        })
                    }]
                }}>
                    <Text onPress={this.animateCircle} style={{ color: '#ccc' }}>
                        <Icon name="circle" size={150}/>
                    </Text>
                </Animated.View>


                {this.props.children}
                {this.props.children}
                {this.props.children}
            </Animated.View>
        );
    }
}