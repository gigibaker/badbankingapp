import { React } from 'react';
import { Card } from './components/context'
import bankImage from './bank.png'



export default function Home() {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="BAD BANK"
            title="WELCOME!"
            body={(<img src={bankImage} className="img-fluid" alt="Responsive image" />)}
        />
    );
}
