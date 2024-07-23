import React, { useState } from "react";
import "./form.css";
import Crystal from '../assets/www.biotechpackages.com/crystal.png';
import Logo from '../assets/www.biotechpackages.com/logo.png';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Footer from "../components/Footer";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the data to send
        const templateParams = {
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects: JSON.stringify(subjects),
            resume: resume.name,
            url,
            selectedOption,
            about
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });

        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <>
            <div className="apply_job">
                <div className="left-Side">
                    <div className="left_inner">
                        <div className="logos">
                            <Link to="/">
                                <img
                                    loading="lazy"
                                    width="114"
                                    height="85"
                                    decoding="async"
                                    src={Logo}
                                    alt="logo"
                                    style={{ color: 'transparent', width: '100%' }}
                                />
                            </Link>
                        </div>
                        <h1 className="heading-form">Form for Accountant</h1>
                        <fieldset>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="firstname">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter First Name"
                                    required
                                />
                                <label htmlFor="lastname">Last Name*</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter Last Name"
                                    required
                                />
                                <label htmlFor="email">Enter Email* </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email"
                                    required
                                />
                                <label htmlFor="tel">Contact*</label>
                                <input
                                    type="tel"
                                    name="contact"
                                    id="contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="Enter Mobile number"
                                    required
                                />
                                <label htmlFor="gender">Gender*</label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    id="male"
                                    checked={gender === "male"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Male
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    id="female"
                                    checked={gender === "female"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    id="other"
                                    checked={gender === "other"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Other
                                <label htmlFor="lang">
                                    Your best Subject
                                </label>
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="english"
                                    checked={subjects.english}
                                    onChange={() => handleSubjectChange("english")}
                                />
                                English
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="maths"
                                    checked={subjects.maths}
                                    onChange={() => handleSubjectChange("maths")}
                                />
                                Maths
                                <input
                                    type="checkbox"
                                    name="lang"
                                    id="physics"
                                    checked={subjects.physics}
                                    onChange={() => handleSubjectChange("physics")}
                                />
                                Physics
                                <label htmlFor="file">Upload Resume*</label>
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    onChange={(e) => setResume(e.target.files[0])}
                                    required
                                />
                                <label htmlFor="url">Enter URL*</label>
                                <input
                                    type="url"
                                    name="url"
                                    id="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="Enter url"
                                    required
                                />
                                {/* <label>Select your choice</label> */}
                                {/* <select
                                    name="select"
                                    id="select"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select your Ans
                                    </option>
                                    <optgroup label="Beginers">
                                        <option value="1">HTML</option>
                                        <option value="2">CSS</option>
                                        <option value="3">JavaScript</option>
                                    </optgroup>
                                    <optgroup label="Advance">
                                        <option value="4">React</option>
                                        <option value="5">Node</option>
                                        <option value="6">Express</option>
                                        <option value="7">MongoDB</option>
                                    </optgroup>
                                </select> */}
                                <label htmlFor="about">About</label>
                                <textarea
                                    name="about"
                                    id="about"
                                    cols="30"
                                    rows="10"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="About yourself"
                                    required
                                >   
                                </textarea>
                                <button
                                    type="reset"
                                    value="reset"
                                    onClick={handleReset}
                                    className="form-btn"
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    value="Submit"
                                    className="form-btn"
                                >
                                    Submit
                                </button>
                            </form>
                        </fieldset>
                    </div>
                    <p style={{marginTop: 50}}>2024 Ayra Printing and Packaging Pvt Ltd. All rights reserved</p>
                </div>
                <div className="image_Apply_job" style={{ maxWidth: '40%' }}>
                    <img src={Crystal} alt="" style={{ width: '100%', height: '100vh' }} />
                </div>
            </div>
            
        </>
    );
}

export default App;