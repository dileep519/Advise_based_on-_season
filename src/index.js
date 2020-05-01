import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App=()=>{
//     var lat="1234",long="4567";
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>{ lat=position.coords.latitude;long=position.coords.longitude},
//         (err)=>{ console.log(err);}
//     );
//     return (
//         <div>
//             <div>hiii</div>
//             <div>{lat}</div>
//             <div>{long}</div>
//             <SeasonDisplay/>
//         </div>
//     );
// }

//class component

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         lat:null,
    //         ErrorMessage:''
    //     };
    // }

    //or
    state={lat:null,ErrorMessage:''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({lat:position.coords.latitude});},
            (err)=>{this.setState({ErrorMessage:err.message})}
        );
    }
    renderContent(){
        if(this.state.ErrorMessage){
            return(
                <div>
                    Error:{this.state.ErrorMessage}
                </div>);
        }
        else if(this.state.lat){
            return(
                <div>
                    <SeasonDisplay lat={this.state.lat}/>
                </div>
            );
        }
        else{
            return (
                <Spinner message="Please accept loaction request"/>
            );
        }
    }
    render(){
        return(
            <div>
            {this.renderContent()}
        </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);