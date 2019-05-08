import React, {Component} from 'react';

class Breakdowns extends Component{
    timeConverter(time_recorded){
        var a = new Date(time_recorded * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = month + ' ' + date + ' '  + year + ' ' + hour + ':' + min  ;
    return time;
    }
    render(){
        const {breakdowns} = this.props;
        const breakdownList = breakdowns.sort(function (a, b) { return b.added - a.added })
            .map(breakdown => { 
            return (
                <div className="breakdown" key={breakdown.added}> {/*I don't like using a non-id value for a key, but for here this is the best given*/}
                    <div>Title: {breakdown.title}</div>
                    <div>Type: {breakdown.type}</div>
                    <div>Added: {this.timeConverter(breakdown.added)}</div>
                    <div>Casting Director: {breakdown.castingDirector}</div>
                    <div>Start Date: {this.timeConverter(breakdown.startDate)}</div>
                    <div>I'm Interested <input type="checkbox" /></div>
                </div>
            )
        })
        return(
            <div className="breakdown-list">
                { breakdownList }
            </div>
        )
    }
}

export default Breakdowns