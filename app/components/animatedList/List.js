import React, { Component } from 'react';
import { ListView, Text } from 'react-native'
import ListRow from './ListRow';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource  : new ListView.DataSource({
                rowHasChanged : (row1, row2) => true 
            })
        };
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.data)
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
        });
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <ListRow key={rowID}>
                <Text>Number: {rowData.number}</Text>
                <Text>Result: {rowData.result}</Text>
            </ListRow>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

