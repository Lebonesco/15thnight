import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

var cols = [
    { key: 'firstName', label: 'First Name'},
    { key: 'lastName', label: 'Last Name' }
];

var Table=React.createClass({

    getInitialState: function() {
        return {cols: [
    { key: 'sent', label: 'Sent'},
    { key: 'description', label: 'Description'},
    { key: 'gender', label: 'Gender'},
    { key: 'age', label: 'Age'},
    { key: 'needs', label: 'Needs'},
    { key: 'responses', label: 'Responses' }], 
    data: []};
    },

    render:function(){
        if(this.props.data['user_list']){
        var data = this.props.data['user_list'].map(function(row, i) {
            return { 
                    id: i, 
                    sent: row.created_at,
                    description: row.description,
                    gender: row.gender,
                    age: row.age,
                    needs: row.needs,
                    responses: row.responses }
        })
        var headerComponents = this.generateHeaders(), 
            rowComponents = this.generateRows(data);
        }
        return (
            <table id="rwd_table">
                <thead>
                    {headerComponents}
                </thead>
                <tbody>
                    {rowComponents}
                </tbody>
            </table>
              
        );
    },

    generateHeaders: function() {
        var headerStyle = {
            
        };
        var cols = this.state.cols;
        var header =  cols.map(function(colData) {
            return <th style={headerStyle} key={colData.key}>{colData.label}</th>;
        });
        return <tr>{header}</tr>
    },

    generateRows: function(data) {
        var rowStyle = {
            color: 'blue',
            marginRight: '10px',
            background: 'green'
        };

        var cols = this.state.cols,
            data = data;

        return data.map(function(item) {
            var colStyle = {
                color: 'black'
            };

            var cells = cols.map(function(colData) {
                return <td style={colStyle}> {item[colData.key]}</td>;
            });
            return <tr style={rowStyle} key={item.id}>{cells} </tr>;
        });
    }
});


export default Table;