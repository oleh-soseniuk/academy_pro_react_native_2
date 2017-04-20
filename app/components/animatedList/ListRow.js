
import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default class ListRow extends Component {

    _defaultHeightValue = 60;
    _defaultTransition  = 500;

    constructor(props) {
        super(props);
        this._defaultHeightValue = 60;
        this._defaultTransition  = 500;
        this.state = {
            rowHeight  : new Animated.Value(this._defaultHeightValue),
            rowOpacity : new Animated.Value(0)
        };
    }
  
   componentDidMount() {
       Animated.timing(this.state.rowOpacity, {
           toValue  : 1,
           duration : this._defaultTransition
       }).start();
   }

   render() {
       const {rowHeight, rowOpacity} = this.state;
       return (
           <Animated.View 
               style={[{height: rowHeight, opacity: rowOpacity}, styles.item]}>
               {this.props.children}
           </Animated.View>
       );
   }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 3
  }
});