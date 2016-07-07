import React from 'react';
import {render} from 'react-dom';
import LineChart from './LineChart';
import DonuteChart from './DonuteChart';
import { ButtonGroup, MenuItem, DropdownButton } from 'react-bootstrap';

var Browser = React.createClass({

    getInitialState:function(){
        return {filter_resource: 'admin', data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: 'http://localhost:8000/users',
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
        return(
        <div>
            <h3></h3>
            <div className="pad bottom-left-svg">
                <DonuteChart id={"bs_chart"} padAngle={0.03} data={this.state.data} />
            </div>

        </div>
        )
    }
});

var Visitors = React.createClass({

    getInitialState:function(){
        return {filter_resource: 'admin', data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: 'http://localhost:8000/users',
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

    onResourceChanged: function(e) {
        this.setState({
            filter_resource: e.currentTarget.value
        });
    },

    render:function(){
        return (
            <div>
                
                <h3></h3>
                <div className="bottom-right-svg">
                    <LineChart filter={this.state.filter_resource} data={this.state.data}/>
                    </div>
                    <DropdownButton title="Filters" id="bg-vertical-dropdown-1">
                        <MenuItem eventKey="2" value="admin" onClick={this.onResourceChanged}>Admins</MenuItem>
                        <MenuItem eventKey="2" value="student" onClick={this.onResourceChanged}>Students</MenuItem>
                        <MenuItem eventKey="2" value="pants" onClick={this.onResourceChanged}>pants</MenuItem>
                        <MenuItem eventKey="2" value="shoes" onClick={this.onResourceChanged}>shoes</MenuItem>
                    </DropdownButton>
            </div>
        )
    }
});
render(<Browser/>, document.getElementById('browser'))
render(<Visitors/>,document.getElementById('top-line-chart'));