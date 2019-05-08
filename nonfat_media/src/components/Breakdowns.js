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
                <div className="breakdown-item" key={breakdown.added}> {/*I don't like using a non-id value for a key, but for here this is the best given*/}
                    <div className="breakdown row" >
                        <div className="col-1"></div>
                        <div className="col-3">
                            Title: 
                        </div>
                        <div className="col-6">
                            {breakdown.title}
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="breakdown row">
                        <div className="col-1"></div>
                        <div className="col-3">
                            Type:
                        </div>
                        <div className="col-6">
                            {breakdown.type}
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="breakdown row" >
                        <div className="col-1"></div>
                        <div className="col-3">
                            Added:
                        </div>
                        <div className="col-6">
                            {this.timeConverter(breakdown.added)}
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="breakdown row" >
                        <div className="col-1"></div>
                        <div className="col-3">
                            Casting Director:
                        </div>
                        <div className="col-6">
                            {breakdown.castingDirector}
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="breakdown row" >
                        <div className="col-1"></div>
                        <div className="col-3">
                            Start Date:
                        </div>
                        <div className="col-6">
                            {this.timeConverter(breakdown.startDate)}
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="breakdown row" >
                        <div className="col-1"></div>
                        <div className="col-3">
                            I'm Interested
                        </div>
                        <div className="col-6">
                            <input type="checkbox" />
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            )
        })
        return(
            <div className="breakdown-list container-fluid">
                { breakdownList }
            </div>
        )
    }
}

export default Breakdowns