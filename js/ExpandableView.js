import React, {Component} from 'react';
import {
    Animated,
    Easing,
    Text
} from 'react-native';

export default class ExpandableView extends React.Component {
    constructor(props) {
        super(props)
        this.maxHeight = new Animated.Value(4)
        this.changes = 0;
        this.prevShow = this.props.show
    }

    render() {
        if (this.prevShow != this.props.show) {
            this.changes++;
            this.prevShow = this.props.show
            Animated.spring(this.maxHeight,
                { toValue: this.props.show ? 100 : 4, duration: 500 }
            ).start();
        }

        var style = { maxHeight: this.maxHeight, marginTop: -4, paddingTop: 4 };
        return (
            <Animated.View style={style}>
                <Text style={{color: '#ccc'}}>{this.changes}</Text>
                {this.props.children}
                {this.props.children}
                {this.props.children}
                {this.props.children}
                {this.props.children}
            </Animated.View>
        );
    }
}