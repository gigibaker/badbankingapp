import { React, useContext } from 'react';
import { UserContext, Card } from './context';

const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="ALL DATA HISTORY"
            text="All Your Data:"
           
            body= {ctx.users.map((user, i) => (
                <ol key={i}>
                 <div>
                    <tr>
                    Name:     {user.name}<br/>
                    Email:    {user.email}<br/>
                    Password: {user.password}<br/>
                    </tr>
                 </div>
               </ol>
                ))}
        />
    );
}

export default AllData;