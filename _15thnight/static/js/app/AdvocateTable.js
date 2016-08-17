import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';


var Table=React.createClass({

  getInitialState: function() {
    return {}
  },

  generateHeaders: function() {
    var header = this.props.cols.map(function(colData) {
      return <th key={colData}>{colData}</th>
    });
   return <tr>{header}</tr> 
  },

  generateRows: function(data, cols) {
    return data.map(function(item) {
      var cells = cols.map(function(colData) {
        return <td>{item[colData]}</td>
      });
      return <tr key={item.id}>{cells}</tr>
    });
  },

  render:function(){
    var headerComponents = this.generateHeaders(), 
        rowComponents = this.generateRows(this.props.data, this.props.cols);

    var table = (<main>
  <h1>Alerts Data</h1> 
<table id="rwd-table">
  <thead>
    <tr>
      <td>Age</td>
      <td>Categories</td>
      <td>Created At</td>
      <td>Description</td>
      <td>Gender</td>
      <td>Responses</td>
    </tr>
  </thead>
  <tbody>
      {rowComponents}
  </tbody>
  </table>   
</main>);
        return (
            <div>
                {table}
            </div>
              
        );
    }
});


export default Table;