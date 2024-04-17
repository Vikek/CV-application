import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'

function App() {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', number: '', address: ''});

    const handleChangeGeneralInfo = (e) => {
        const key = e.target.id;
        setGeneralInfo({...generalInfo, [key]: e.target.value});
    }

    return (
        <div>
            <GeneralInfo handleChange={handleChangeGeneralInfo}/>
            <div>{generalInfo.name}</div>
            <div>{generalInfo.email}</div>
            <div>{generalInfo.number}</div>
            <div>{generalInfo.address}</div>
        </div>
    )
}

export default App
