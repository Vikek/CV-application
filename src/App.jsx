import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';

function App() {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', number: '', address: ''});
    const [educationInfo, setEducationInfo] = useState({school: '', degree: '', startDate: null, endDate: null});

    const handleChangeGeneralInfo = (e) => {
        const key = e.target.id;
        setGeneralInfo({...generalInfo, [key]: e.target.value});
    }

    const handleChangeEducation = (e) => {
        const key = e.target.id;
        setEducationInfo({...educationInfo, [key]: e.target.value});
    }

    return (
        <div>
            <GeneralInfo handleChange={handleChangeGeneralInfo}/>
            <div>{generalInfo.name}</div>
            <div>{generalInfo.email}</div>
            <div>{generalInfo.number}</div>
            <div>{generalInfo.address}</div>
            <Education handleChange={handleChangeEducation}/>
            <div>{educationInfo.school}</div>
            <div>{educationInfo.degree}</div>
            <div>{educationInfo.startDate}</div>
            <div>{educationInfo.endDate}</div>
        </div>
    )
}

export default App
