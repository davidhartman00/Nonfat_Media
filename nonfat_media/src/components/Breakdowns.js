import React, {Component} from 'react';
// {
// "added": 1485174060,
// "title": "BELLEVILLE COP",
// "type": "Feature Film",
// "castingDirector": "Lori Wyman",
// "startDate": 1492560000
// }
class Breakdowns extends Component{
    render(){
        const { breakdown } = this.props
        const {breakdownList} = breakdown.map(breakdown =>{
            return (
                <div className="breakdowns">
                    <div>Title:</div>
                    <div>Type:</div>
                    <div>Added:</div>
                    <div>Casting Director:</div>
                    <div>Start Date:</div>
                    <div>Select <input type="checkbox" /></div>
                </div>
            )}
        )
    }
}

export default Breakdowns