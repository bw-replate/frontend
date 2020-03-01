import React, {useState} from 'react';

const RequestForm = props => {
    const [request, setRequest] = useState({
        food: '',
        quantity: '',
        time: ''
    })
    const handleChanges = e => {
        setRequest({...request, [e.target.name]: e.target.value});
    };
    const submitForm = e => {
        e.preventDefault();
        props.addRequest(request);
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="food">Food</label>
            <input
                onChange = {handleChanges}
                id="food"
                type="text"
                name="food"
                value={request.food}
            />
            <label htmlFor="quantity">Amount</label>
            <input
                onChange = {handleChanges}
                id="quantity"
                type="number"
                name="quantity"
                value={request.quantity}
            />
            <label htmlFor="time">Time</label>
            <input
                onChange = {handleChanges}
                id="time"
                type="number"
                name="time"
                value={request.time}
            />
            <button type="submit">Add Request</button>
        </form>
    )
}