import React, { Component } from "react";
// import { connect } from 'react-redux'
import "./style.css";

export class Pools extends Component {
  render() {
    return (
      <div className="pools-main">
        <div className="pools-container">
          <h1 className="heading">Pools</h1>
          <div className="pools-details">
            <h1 className="prize-amount">$1,000</h1>
            <p>This week's prize value*</p>
            <button className="get-ticket-button">Get Ticket</button>
            <p className="view-pools-detail">
              View pool details
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 20"
                fill="#341664"
                stroke="#35f0d0"
                stroke-width="0.1rem"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <g>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </g>
              </svg>
            </p>
            <p className="last-text">
              *Prize value is comprised of many dynamic assets.
            </p>
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

// export default connect(mapStateToProp, mapDispatchToProp)(Pools);
