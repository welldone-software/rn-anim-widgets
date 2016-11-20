import React, { Component } from 'react';
import {
    Animated,
    Easing,
    Text,
    StyleSheet
} from 'react-native';

import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

export default class AnimatedIconButtons extends React.Component {
    render() {
        return (
            <ActionButton buttonColor="rgba(231,76,60,1)">
                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Icon name="android-create" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                    <Text >2</Text>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                    <Text >3</Text>
                </ActionButton.Item>
            </ActionButton>

//             <ActionButton buttonColor="rgba(231,76,60,1)">
//                 <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>

//                 </ActionButton.Item>
//                 <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
//                     <Icon name="android-notifications-none" style={styles.actionButtonIcon}/>
//                 </ActionButton.Item>
//                 <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
//                     <Icon name="android-done-all" style={styles.actionButtonIcon}/>
//                 </ActionButton.Item>
//             </ActionButton>
        )
    }
}
