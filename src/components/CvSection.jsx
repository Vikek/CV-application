function CvSection({generalInfo, educationCurrent, educations, jobExperienceCurrent, jobExperiences}) {
    return (
        <div className="cv-section">
            <div className="cv-banner">
                <h1>{generalInfo.name}</h1>
                <div className="contact-info">
                    <div className="email">{generalInfo.email}</div>
                    <div className="phone-number">{generalInfo.number}</div>
                    <div className="address">{generalInfo.address}</div>
                </div>
            </div>
            <div className="cv-content">
                <div className="education-section">
                    <h3>Education</h3>
                    <div className="education-current">
                        <div className="date">
                            {educationCurrent.startDate}
                            {educationCurrent.endDate}
                        </div>
                        <div className="school">{educationCurrent.school}</div>
                        <div className="degree">{educationCurrent.degree}</div>
                    </div>
                    {educations.map((education, index) => (
                        <div key={index} className="education-saved">
                            <div className="date">
                                {education.startDate}
                                {education.endDate}
                            </div>
                            <div className="school">{education.school}</div>
                            <div className="degree">{education.degree}</div>
                        </div>
                    ))}
                </div>
                <div className="experience-section">
                    <h3>Experience</h3>
                    <div className="experience-current">
                        <div className="date">
                            {jobExperienceCurrent.startDate}
                            {jobExperienceCurrent.endDate}
                        </div>
                        <div className="company-name">{jobExperienceCurrent.companyName}</div>
                        <div className="job-title">{jobExperienceCurrent.jobTitle}</div>
                        <div className="description">{jobExperienceCurrent.description}</div>
                    </div>
                    {jobExperiences.map((jobExperience, index) => (
                        <div key={index} className="experience-saved">
                            <div className="date">
                                {jobExperience.startDate}
                                {jobExperience.endDate}
                            </div>
                            <div className="company-name">{jobExperience.companyName}</div>
                            <div className="job-title">{jobExperience.jobTitle}</div>
                            <div className="description">{jobExperience.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CvSection;