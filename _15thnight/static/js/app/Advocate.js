import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import AdvocateTable from './AdvocateTableTest';

var Advocate=React.createClass({
    getInitialState:function(){
        return {user: '', data: [], cols: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: 'http://localhost:5000/api/v1/alert',
            dataType: 'json',
            cache: false,
            success: function(data) {
                var cols = (Object.keys(data[0]));
                var data = data
                this.setState({data: data, cols: cols});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    },

    render:function(){
        return (
            <div>
               
                <AdvocateTable data={this.state.data} cols={this.state.cols}/>
            
            </div>
        );
    }
});

export default Advocate;
