import React, { Component } from 'react'
import { Button, AsyncStorage, View, ListView, Text, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/common';
import { connect } from 'react-redux';

class History extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'History'
    },
  }
  
  constructor(props){
    super(props);
    this.state = {
       dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2})
    };
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {history} = nextProps.state;
    AsyncStorage.setItem('history', JSON.stringify(history));
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(history)
    });
  }

  componentWillMount() {
    AsyncStorage.getItem('history', (err, value) => {
        if (err) {
            console.log('Cannot save to AsyncStorage: ', error);
        } else {
            const history = JSON.parse(value);
            this.props.actions.restoreHistory(history || []);
        }
    });
  }
  renderRow(rowData, sectionID, rowID) {
      return (
          <View key={rowID} style={styles.item}>
              <Text>Number: {rowData.number}</Text>
              <Text>Result: {rowData.result}</Text>
          </View>
      );
  }

  render() {
    return (
       <View>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
       </View>
    );
  }
}

export default connect(state => ({
    state: state.common
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(History);


const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 3
  }
});