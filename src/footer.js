import React from 'react';
import './css/bootstrap.css';
class Footer extends React.Component {
  render() {
    return (
      
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo mt-3'>
            <img alt="" src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' />
            <p>Learn to code, learn to creative.</p>
          </div>
          <ul className='footer-list'>
            <li className="">SERVICES</li>
            <li>SUPPORT</li>
            <li>CONNECT WITH US</li>
          </ul>
        </div>
      </div>
      
    );
  }
}

export default Footer;