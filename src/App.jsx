import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education';
import JobExperience from './components/JobExperience';
import CvSection from './components/CvSection';

function App() {
    const [generalInfo, setGeneralInfo] = useState({name: '', email: '', number: '', address: ''});

    const educationDefault = {school: '', degree: '', startDate: null, endDate: null};
    const [educationInfo, setEducationInfo] = useState(educationDefault);
    const [educations, setEducations] = useState([]);

    const jobExperienceDefault = {companyName: '', jobTitle: '', startDate: null, endDate: null, description: ''};
    const [jobExperienceInfo, setJobExperienceInfo] = useState(jobExperienceDefault);
    const [jobExperiences, setJobExperiences] = useState([])

    const handleSubmitEducation = (e) => {
        e.preventDefault();
        setEducations([...educations, educationInfo]);
        //reset education info
        setEducationInfo(educationDefault);
        e.target.reset();
    };

    const handleSubmitJobExperience = (e) => {
        e.preventDefault();
        setJobExperiences([...jobExperiences, jobExperienceInfo]);
        //reset jobExperience info
        setJobExperienceInfo(jobExperienceDefault);
        e.target.reset();
    }

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
            <Education handleChange={handleChangeEducation} handleSubmit={handleSubmitEducation}/>
            <JobExperience handleChange={handleChangeJobExperience} handleSubmit={handleSubmitJobExperience}/>
            <CvSection generalInfo={generalInfo} educationCurrent={educationInfo} educations={educations} jobExperienceCurrent={jobExperienceInfo} jobExperiences={jobExperiences}/>
        </div>
    )
}

export default App
