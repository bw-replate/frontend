import React, { useState } from 'react';
import RequestForm from './pickuprequests/RequestForm';
import Requests from './pickuprequests/Requests';

function PickupRequest() {
    const [requests, setRequests] = useState([
        {
            food: '',
            quantity: '',
            time: ''
        }
    ]);
    const addRequest = request => {
        const newRequest = {
            id: Date.now(),
            food: request.food,
            quantity: request.quantity,
            time: request.time
        }
        setRequests([...requests, newRequest])
    }
    return (
        <div>
            <h1>Requests</h1>
            <RequestForm addRequest={addRequest} />
            <Requests requests={requests} />
        </div>
    )
}