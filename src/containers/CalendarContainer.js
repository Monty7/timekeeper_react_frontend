import React, {Component} from 'react'
import InputTimes from '../components/InputTimes'
import { connect } from 'react-redux'
import BASEURL from '../baseUrl'

//Component Did mount to fetch to the database

class CalendarContainer extends Component{
    // componentWillMount() {
    //     
    // }

    state = {
        userId: null,
        clockIn: '',
        clockOut: '',
        name: ''
    }

    checkForUser(){
        console.log(this.props)
        //if redux store has logged in user object
        //if redux store has no logged in user object but localStorage does 
        //if redux store has no loggied in user object and localStorage doesn't either
        let userID = localStorage.getItem('loggedInUserID');
        console.log(userID)
        if(userID != 'undefined'){
            console.log(userID)
    
            fetch(`${BASEURL}/users/${userID}`)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                console.log(data)
                this.setState({userID: data.id})
                // let user = new User(data)
                
                // user.login();
            })
            .catch(function(err){
                console.log(err);
            })
    
        }
    }


    
    renderInputs(){
        let inputs = []
        for(let i = 1; i <= 31; i++ ){
            inputs.push(<InputTimes day={i} key={i}/>)
        }        
        return inputs
    }

    render(){ 
        return(
        <div className="container">
            {this.renderInputs()}
        </div>
        )
    }
}
//mapStateToProps = 

export default CalendarContainer
//connect(mapStateToProps, mapDispatchToProps)