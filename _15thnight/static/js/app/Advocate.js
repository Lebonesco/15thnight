import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import AdvocateTable from './AdvocateTable';
import AdvocateRow from './AdvocateRow';

var Advocate=React.createClass({
    getInitialState:function(){
        return {user: '', data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: 'http://localhost:5000/sent_alerts',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    },

    render:function(){

        return (
            <div>
               
                <AdvocateRow data={this.state.data}/>
            
            </div>
        );
    }
});

export default Advocate;
