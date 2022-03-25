import { React, useContext, useState } from 'react';
import { UserContext, Card } from './context'


function Deposit() {
    const [ show, setShow ]         = useState(true);
    const [ status, setStatus ]     = useState('');
    const [ amount, setAmount ]     = useState(0);
    const ctx                       = useContext(UserContext);

    function validate(field) {

        if (!field) {
            setStatus('Error: enter a number');
            setTimeout(() => setStatus(''), 3000);
            return false;

        } else if (isNaN(amount)) {
            setStatus('Error: enter a valid number.');
            setTimeout(() => setStatus(''), 3000);
            return false;

        } else if (amount <=0) {
            setStatus('Error: deposit must be positive.');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }

        return true;
    }
    
    function handleDeposit() {
        console.log(amount);
        if (!validate(amount)) return;
        ctx.users[0].balance += parseInt(amount);
        setShow(false);
    }
    
    function clearForm(){
        setAmount(0);
        setShow(true);
    }

    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="DEPOSIT"
            status={status}
            body={show ? (
                <>
                Amount<br/>
                <input type="input" className="form-control" id="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-dark border-light" onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                    <h5>Success!</h5>
                    <div>You have deposited ${amount} to your account.</div>
                    <div>Your new balance is ${ctx.users[0].balance}.</div>
                    <button type="submit" className="btn btn-dark border-light" onClick={clearForm}>Make Another Deposit</button>
                </>
            )}
          
            text={`Account balance: $${ctx.users[0].balance}.`}
        />
    );
}

export default Deposit;