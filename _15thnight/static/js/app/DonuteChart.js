import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

var DonutChartPath=React.createClass({
    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        data:React.PropTypes.array,
        pie:React.PropTypes.func,
        color:React.PropTypes.func
    },
    componentWillMount:function(){
 
        var radius=this.props.height;
 
        var outerRadius=radius/4;
        var innerRadius=radius/8;
 
        this.arc=d3.svg.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);
 
        this.transform='translate('+radius/2+','+radius/2+')';
 
    },
    createChart:function(_self){
 
        var paths = (this.props.pie(this.props.data)).map(function(d, i) {
 
            return (
                <path fill={_self.props.color(i)} d={_self.arc(d)} key={i}/>
            )
        });
        return paths;
    },
 
    render:function(){
 
        var paths = this.createChart(this);
 
        return(
            <g transform={this.transform}>
                {paths}
            </g>
        )
    }
});
 
var DonutChart=React.createClass({
    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        padAngle:React.PropTypes.number,
        id:React.PropTypes.string.isRequired
    },
 
    getDefaultProps: function() {
        return {
            width: 450,
            height: 250,
            padAngle:0
        };
    },
    getInitialState:function(){
        return {
            data:[],
            width:0
        };
    },
 
    componentWillMount:function(){
 
        this.pie=d3.layout.pie()
            .value(function(d){return d.count})
            .padAngle(this.props.padAngle)
            .sort(null);
 
        this.color = d3.scale.ordinal()
            .range(['#68c8d7','#eccd63','#bb8cdd','#de6942','#52b36e','#bbc7d9']);
 
        this.setState({width:this.props.width});
    },
 
    updateData:function(){
        // var data = [
        //     { name: 'IE', count: Math.random() },
        //     { name: 'Chrome', count: Math.random() },
        //     { name: 'Safari', count: Math.random() },
        //     { name: 'Firefox', count: Math.random() },
        //     { name: 'Others', count: Math.random() },
        //     { name: 'Opera', count: Math.random() }
 
        // ];
 
        // this.setState({'data':data });
    },
    render:function(){
        var i;
        var array = [];
        for (i in this.props.data){
            for (var j in this.props.data[i]){
                array.push(this.props.data[i][j])
            };
        };
       
        var admin_count = array.filter(person => person.role == "admin").length;
        var student_count = array.filter(person => person.role == "student").length
        ;
        var data = [
            { name: 'Socks', count: admin_count},
            { name: 'Shoes', count: 10},
            { name: 'Pants', count: 10},
            { name: 'Room', count: 10},
            { name: 'Therapy', count: 10}
        ];
 
        return (
            <div>
                <svg id={this.props.id} width={this.state.width}
 
                     height={this.props.height} className="shadow" onClick={this.updateData}>
 
                    <DonutChartPath width={this.state.width} height={this.props.height}
                                    pie={this.pie} color={this.color} data={data}/>
 
            
                </svg>
            </div>
        );
    }
});
 
window.DonutChart = DonutChart;
export default DonutChart;