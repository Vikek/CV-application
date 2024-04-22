function Education({handleChange}) {
    return (
        <form className="education-form">
            <h2>Education</h2>
            <div className="form-section">
                <label htmlFor="school">School</label>
                <input type="text" id="school" placeholder="Enter school name" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" placeholder="Enter degree / field of study" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="startDate">Start date</label>
                <input type="date" id="startDate" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="startDate">End date</label>
                <input type="date" id="endDate" onChange={handleChange}/>
            </div>
        </form>
    )
}

export default Education;