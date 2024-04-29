import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import CvSection from './components/CvSection';

function App() {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', number: '', address: ''});
    const [educationInfo, setEducationInfo] = useState({school: '', degree: '', startDate: null, endDate: null});
    const [jobExperienceInfo, setJobExperienceInfo] = useState({companyName: '', jobTitle: '', startDate: null, endDate: null, description: ''});

    const handleChangeGeneralInfo = (e) => {
        const key = e.target.id;
        setGeneralInfo({...generalInfo, [key]: e.target.value});
    }

    const handleChangeEducation = (e) => {
        const key = e.target.id;
        setEducationInfo({...educationInfo, [key]: e.target.value});
    }

    const handleChangeJobExperience = (e) => {
        const key = e.target.id;
        setJobExperienceInfo({...jobExperienceInfo, [key]: e.target.value});
    }

    return (
        <div>
            <GeneralInfo handleChange={handleChangeGeneralInfo}/>
            <Education handleChange={handleChangeEducation}/>
            <JobExperience handleChange={handleChangeJobExperience}/>
            <CvSection generalInfo={generalInfo} educationInfo={educationInfo} jobExperienceInfo={jobExperienceInfo}/>
        </div>
    )
}

export default App
