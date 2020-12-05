import React, { Component } from "react";
import "./style.css";
// import { connect } from 'react-redux'

export class Vote extends Component {
  render() {
    return (
      <div className="vote-main">
        <div className="vote-container">
          {/* <h1 className="heading">Vote</h1> */}
          <div className="bottom">
          <img src='https://app.pooltogether.com/_next/static/images/pt-illustration-chill@2x-ad0941031465d48734777c80957bc8c6.png' className="image" alt="image" />
            <h1 className="heading">Direct the future of PoolTogether!</h1>
            <p className="bottom-text">
              Community is at the heart of our success. Therefore, only those
              with tickets will be able participate.
            </p>
            <button className="vote-button">Vote Now</button>
            <p className="bottom-text-last">The more you pool, the more you save, the more you win.</p>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProp(state) {
//     return ({

//     })
// }
// function mapDispatchToProp(dispatch) {
//     return ({

//         // adminLogin: (admin)=>{
//         //     dispatch(adminLogin(admin))
//         // }
//     })
// }

// export default connect(mapStateToProp, mapDispatchToProp)(Vote);
