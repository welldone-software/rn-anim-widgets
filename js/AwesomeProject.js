import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing
} from 'react-native';
import TimerMixin from 'react-timer-mixin';


class FadeInView extends React.Component {
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

export default class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FadeInView>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>

                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </FadeInView>
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
});