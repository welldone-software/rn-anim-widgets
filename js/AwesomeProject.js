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
import ExpandableView from './ExpandableView'

export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolling: false,
            data: ipsumArray.map(item => ({
                time: item.time,
                location: item.location,
                expanded: false
            }))
        }
    }

    change(item) {
        return () => {
            var willBeExpanded = !item.expanded;
            if (willBeExpanded) {
                this.state.data.forEach(item => item.expanded = false)
            }
            item.expanded = willBeExpanded;
            this.setState({ data: this.state.data })
        }
    }

    onScroll = ()=> {
        this.setState({ isScrolling: true })
    }

    onUnScroll = () => {
        this.setState({ isScrolling: false })
    }

    render() {
        return (
            <ScrollView onScrollBeginDrag={this.onScroll} showsHorizontalScrollIndicator={false}
                        onScrollEndDrag={this.onUnScroll}>
                {this.state.data.map(item => (
                    <View style={styles.container}>
                        <SkewlableView item={item} onPress={this.change(item)} expanded={item.expanded} isScrolling={this.state.isScrolling}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.time}>{item.time}</Text>
                                <View>
                                    <Text style={styles.headerText}>{item.location} {this.isScrolling + ''}</Text>
                                    <Text style={styles.headerText}>Munich</Text>
                                    <Text style={styles.headerText}>Something else</Text>
                                </View>
                            </View>
                        </SkewlableView>
                        <ExpandableView show={item.expanded}>
                            <Text style={styles.contentText}>{item.time}</Text>
                        </ExpandableView>
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
    time: {
        fontSize: 60,
        marginRight: 10,
        color: '#000'
    },
    headerText: {
        fontSize: 15,
        color: '#000'
    },

    contentText: {
        color: '#fff'
    }
});