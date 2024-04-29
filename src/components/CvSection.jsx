function CvSection({generalInfo, educationInfo, jobExperienceInfo}) {
    return (
        <div className="cv-section">
            <div className="banner-section">
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
                    <div className="date">
                        {educationInfo.startDate}
                        {educationInfo.endDate}
                    </div>
                    <div className="school">{educationInfo.school}</div>
                    <div className="degree">{educationInfo.degree}</div>
                </div>
                <div className="experience-section">
                    <h3>Experience</h3>
                    <div className="date">
                        {jobExperienceInfo.startDate}
                        {jobExperienceInfo.endDate}
                    </div>
                    <div className="company-name">{jobExperienceInfo.companyName}</div>
                    <div className="job-title">{jobExperienceInfo.jobTitle}</div>
                    <div className="description">{jobExperienceInfo.description}</div>
                </div>
            </div>
        </div>
    );
}

export default CvSection;