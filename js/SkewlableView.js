import React, {Component} from 'react';
import {
    Animated,
    Easing,
    View,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        this.skewX = new Animated.Value(0);
        this.isScrolling = this.props.isScrolling
    }

    render() {
        if (this.isScrolling !== this.props.isScrolling) {
            this.isScrolling = this.props.isScrolling
            Animated.timing(this.skewX, {
                duration: this.props.isScrolling ?  800:800,
                toValue: this.props.isScrolling ? (this.props.item.pressed ? 1.5 : 0.5) : 0,
                easing: this.props.isScrolling ? Easing.out(Easing.cubic) : Easing.in(Easing.elastic(1))
            }).start();
        }
        return (
            <TouchableWithoutFeedback onPressIn={this.props.setPressed}>
                <Animated.View style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 5,
                    paddingRight: 10,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    alignSelf: 'stretch',
                    marginLeft: this.skewX.interpolate({ inputRange: [0, 1], outputRange: [1, 7] }),
                    marginRight: this.skewX.interpolate({ inputRange: [0, 1], outputRange: [1, 7] }),
                    height: this.skewX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [100, 90],
                    }),
                    marginBottom: this.skewX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 3],
                    }),
                    marginTop: this.skewX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 7],
                    }),
                    transform: [{
                        rotateX: this.skewX.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '5deg'],
                        }),
                    }]
                }}>
                    {this.props.children}
                    <Text onPress={this.props.onPress}>
                        <Icon name={this.props.item.expanded ? 'chevron-up' : 'chevron-down'} size={10}/>
                    </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}