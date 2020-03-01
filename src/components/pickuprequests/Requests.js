import React from 'react';

const Requests = props => {
    return(
        <div className="request-list">
            {props.requests.map(request => (
                <div className="request" key={request.id}>
                    <h2>Business Profile</h2>
                    <p>{request.food}</p>
                    <p>{request.quantity}</p>
                    <p>{request.time}</p>
                </div>
            ))}
        </div>
    )
}
export default Requests;