import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends React.Component {
  componentWillMount = () => {
    this.props.employeesFetch();

    this.creatDataSource(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    this.creatDataSource(nextProps);
  }

  creatDataSource = ({employees}) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !==r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow = employee => {
    return <ListItem employee={employee} />
  }

  render() {
    console.log(this.props)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}

      />
    )
  }
}

mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}
  })

  return {employees}
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
