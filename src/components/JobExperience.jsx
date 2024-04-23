function JobExperience ({handleChange}) {
    return (
        <form className="job-experience-form">
            <h2>Job Experience</h2>
            <div className="form-section">
                <label htmlFor="companyName">Company name</label>
                <input type="text" id="companyName" placeholder="Enter company name" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="jobTitle">Job title</label>
                <input type="text" id="jobTitle" placeholder="Enter job title" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="startDate">Start date</label>
                <input type="date" id="startDate" placeholder="Enter start date" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="endDate">End date</label>
                <input type="date" id="endDate" placeholder="Enter end date" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Enter descripton" onChange={handleChange}/>
            </div>
        </form>
    )
}

export default JobExperience;