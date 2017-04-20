import React, { Component } from 'react'
import { Button, AsyncStorage, View, StyleSheet } from 'react-native'
import List from '../components/animatedList/List';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/common';
import { connect } from 'react-redux';

const io = require('socket.io-client');

class Calculations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.onCaclucationBtnClick = this.onCaclucationBtnClick.bind(this);
    this.socket = new io('http://192.168.0.101:2222', {transports: ['websocket']});
  }

  static navigationOptions = {
    tabBar: {
      label: 'Calculations'
    },
  }

  componentWillMount() {
    this.socket.on('update', function (data) {
        this.setState({
          results: [...this.state.results, data]
        });
        this.props.actions.updateHistory(data);
    }.bind(this));
  }

  onCaclucationBtnClick() {
    this.socket.emit('calculate');
  }

  render() {
    const { results } = this.state;
    return (
      <View>
        <Button
          onPress={this.onCaclucationBtnClick}
          title="Calculate"
        />
        <List data={results}/>
      </View>
    );
  }
}

export default connect(state => ({}),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Calculations);

