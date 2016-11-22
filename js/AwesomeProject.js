import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Animated,
    Easing
} from 'react-native';

import SkewlableView from './SkewlableView'
import ipsumArray from './ipsumArray'


export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ipsumArray.map(text => ({
                anim: new Animated.Value(0),
                text: text,
                expanded: false
            }))
        }
    }

    change(item) {
        return () => {
            var prevExpanded = item.expanded;
            this.state.data.forEach(item => item.expanded = false)
            item.expanded = !prevExpanded;

            Animated.spring(item.anim, {
                toValue: 0,   // Returns to the start
                velocity: 3,  // Velocity makes it move
                tension: -2, // Slow
                friction: 1,  // Oscillate a lot
            }).start();
            this.setState({ hiddenContent: false })

            this.setState({ data: this.state.data })
        }
    }

    static hiddenItem(item) {
            return (
                <Text style={{ color: '#fff',
                    transform: [ {
                        skewX: item.anim.interpolate({
                            inputRange: [ 0, 1 ],
                            outputRange: [ '0deg', '180deg' ],
                        })
                    } ]

                }}>
                    {item.text}
                    {item.text}
                    {item.text}
                    {item.text}
                    {item.text}
                    {item.text} {item.text}
                    {item.text}
                    {item.text}
                    {item.text}
                    {item.text}
                    {item.text}
                </Text>
            )
    }

    render() {
        return (
            <ScrollView >
                {this.state.data.map(item => (
                    <View style={styles.container}>
                        <SkewlableView item={item} onPress={this.change(item)}>
                            <Text style={styles.mainBlocks}>{item.text}</Text>
                        </SkewlableView>
                        {AwesomeProject.hiddenItem(item)}
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#000'
    },
    mainBlocks: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000'
    }
});