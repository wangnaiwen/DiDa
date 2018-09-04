import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';

import FontsSize from '../../res/Fonts/size';
import Colors from '../../res/Colors';
import FontsWeight from '../../res/Fonts/weight';

export default class BriefInfo extends React.Component{

    render(){
        return(
            <View style={styles.overAll}>
                <View style={styles.centerContent}>
                    <Text style={styles.title}> {this.props.name}</Text>

                    <Rating
                        fractions={1}
                        ratingCount={5}
                        imageSize={this.props.ratingSize}
                        readonly={false}
                        startingValue={this.props.star}
                    />
                    <View style={styles.labelLayout}>
                        <Text style={styles.label}>{this.props.label1}</Text>
                        <Text style={styles.label}>{this.props.label2}</Text>
                        <Text style={styles.label}>{this.props.label3}</Text>
                        <Text style={styles.label}>{this.props.label4}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        borderColor: Colors.primary,
        color: Colors.primary,
        fontSize: FontsSize.tiny,
        marginRight: 10,
        fontWeight: FontsWeight.blod,
    },
    labelLayout: {
        flexDirection: 'row',
        marginTop: 3,
    },
    overAll: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 3,
        position: 'relative',
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    title: {
        fontSize: FontsSize.medium,
        marginBottom: 3,
        fontWeight: FontsWeight.blod,
    },
});
