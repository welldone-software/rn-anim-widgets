import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated,
    Easing
} from 'react-native';

import SkewlableView from './SkewlableView'
import ipsumArray from './ipsumArray'


export default class AwesomeProject extends Component {
    constructor( props ) {
        super(props);
        this.state = { data: ipsumArray.map(text => ({ text: text, expanded: false })) }
    }

    change( item ) {
        return () => {
            var prevExpanded = item.expanded;
            this.state.data.forEach(item => item.expanded = false)
            item.expanded = !prevExpanded;
            this.setState({ data: this.state.data })
        }
    }

    static hiddenItem( item ) {
        if ( item.expanded ) {
            return (
                <Text style={{ color: '#fff' }}>
                    {item.text}
                </Text>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.data.map(item => (
                    <View style={styles.container}>
                        <SkewlableView item={item} onPress={this.change(item)}>
                            <Text style={styles.mainBlocks}>{item.text}</Text>
                        </SkewlableView>
                        {AwesomeProject.hiddenItem(item)}
                    </View>
                ))}
            </View>
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