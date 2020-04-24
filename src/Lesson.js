import React from 'react';
import './css/bootstrap.css';

class Lesson extends React.Component {
  // Declare the constructor
  constructor(props){
    super(props);
    this.state = {isModaOpen: false};
  }
  handleClickLesson(){
    this.setState({isModalOpen:true});
  }

  handleClickClose(){
    this.setState({isModaOpen:false});
  }

  
  render() {
    //declare a modal variale
    let modal;
    if(this.state.isModaOpen){
     modal = (
     <div className='modal'>
      <div className='modal-inner'>
        <div className='modal-header'></div>
        <div className='modal-introduction'>
          <h2>{this.props.name}</h2>

         {/* display the lesson intoduction */}
         <p className="">{this.props.introduction}</p>
        </div>

        {/* Add the onClick event */}
        <button 
        className='modal-close-btn'
        onClick={() =>{this.handleClickClose()}}
        
        >
         Close
        </button>
      </div>
     </div>

     );
    }

    return (
      <div className='lesson-card'>
        {/* Add an onClick event */}
        <div 
        className='lesson-item'
        onClick={() =>{this.handleClickLesson()}}

        >

          <p className="mt-3">{this.props.name}</p>
          <img alt="" src={this.props.image} />
        </div>
       {/* <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>

              //{ display the lesson intoduction }
              <p className="">{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn'>
              Close
            </button>
          </div>
    </div> */}
        {modal}
      </div>
      
    );
  }
}

export default Lesson;



