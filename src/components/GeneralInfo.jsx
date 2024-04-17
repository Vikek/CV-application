function GeneralInfo({ handleChange }) {
    return (
        <form className="general-info-form">
            <h2>General Info</h2>
            <div className="form-section">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter full name" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter email" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="number">Phone number</label>
                <input type="tel" id="number" placeholder="Enter phone number" onChange={handleChange}/>
            </div>
            <div className="form-section">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Enter address" onChange={handleChange}/>
            </div>
        </form>
    )
}

export default GeneralInfo;