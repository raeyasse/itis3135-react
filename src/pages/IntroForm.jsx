import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
export default function IntroForm() {
    useTitle("Raey Assefa's Ambitious Rabbit | ITIS 3135 | Intro Form");
    const [courses, setCourses] = useState([]);

    const addCourse = () => {
        setCourses([...courses, { id: Date.now(), prefix: "", number: "", name: "", reason: "" }]);
    };

    const removeCourse = (id) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    const updateCourse = (id, field, value) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    return <>
        <h2>Introduction Form</h2>
        <main className="container">
            <h3>Please submit the form below.</h3>

            <form id="introForm" noValidate>
                <fieldset>
                    <legend>Name</legend>
                    <div className="row">
                        <label>First Name
                            <input type="text" id="firstName" name="firstName" defaultValue="Raey" placeholder="First name" required />
                        </label>
                        <label className="small">Middle Name / Initial
                            <input type="text" id="middleName" name="middleName" placeholder="Middle name or initial" />
                        </label>
                        <label>Last Name
                            <input type="text" id="lastName" name="lastName" defaultValue="Assefa" placeholder="Last name" required />
                        </label>
                    </div>
                    <div className="row">
                        <label>Nickname / Preferred Name
                            <input type="text" id="nickname" name="nickname" placeholder="Preferred name" />
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Acknowledgment</legend>
                    <div className="row">
                        <label>Acknowledgment Statement
                            <input type="text" id="ack" name="ack" defaultValue="I acknowledge that this work is my own." placeholder="Acknowledgment statement" required />
                        </label>
                        <label>Acknowledgment Date
                            <input type="date" id="ackDate" name="ackDate" defaultValue="2026-03-26" required />
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Mascot</legend>
                    <div className="row">
                        <label>Mascot Adjective
                            <input type="text" id="mascotAdj" name="mascotAdj" defaultValue="Ambitious" placeholder="Mascot adjective" required />
                        </label>
                        <label>Mascot Animal
                            <input type="text" id="mascotAnimal" name="mascotAnimal" defaultValue="Rabbit" placeholder="Mascot animal" required />
                        </label>
                        <label>Divider
                            <input type="text" id="divider" name="divider" defaultValue="|" placeholder="Divider symbol" required />
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Picture</legend>
                    <div className="row">
                        <label>Picture
                            <input type="file" id="image" name="image" accept="image/*" />
                        </label>
                        <label>Picture Caption
                            <input type="text" id="caption" name="caption" defaultValue="Mr Marlowe under a Christmas tree." placeholder="Picture caption" required />
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Introduction Content</legend>
                    <label className="stacked-label">Personal Statement
                        <textarea id="personalStatement" name="personalStatement" placeholder="Personal statement" required
                            defaultValue="I'm a junior at UNC Charlotte studying Computer Science with a concentration in Web/Mobile Development & Software Engineering. I'm excited to build creative and responsive webpages this semester." />
                    </label>
                    <label className="stacked-label">Personal Background
                        <textarea id="personalBackground" name="personalBackground" placeholder="Personal background" required
                            defaultValue="I'm currently 21 years old and I enjoy building computers and editing videos using Adobe CC." />
                    </label>
                    <label className="stacked-label">Professional Background
                        <textarea id="professionalBackground" name="professionalBackground" placeholder="Professional background" required
                            defaultValue="I previously interned as a computer IT tech/productions intern at a non profit and was a technology instructor with the same company after. My last job experience was my community college where I worked as their first Energy Intern." />
                    </label>
                    <label className="stacked-label">Academic Background
                        <textarea id="academicBackground" name="academicBackground" placeholder="Academic background" required
                            defaultValue="I'm currently a Junior at UNC Charlotte studying computer science. Before that I attended Wake Technical Community College and graduated with my associate in Science." />
                    </label>
                    <label className="stacked-label">Background in this Subject
                        <textarea id="subjectBackground" name="subjectBackground" placeholder="Background in this subject" required
                            defaultValue="I am completely new to this subject." />
                    </label>
                    <label className="stacked-label">Primary Work Computer
                        <textarea id="primaryComputer" name="primaryComputer" placeholder="Primary computer" required
                            defaultValue="The laptop I use for university is an M1 Macbook Pro. I also use a custom built Windows 11 Pro computer at home." />
                    </label>
                    <label className="stacked-label">Backup Work Computer &amp; Location Plan
                        <textarea id="backupPlan" name="backupPlan" placeholder="Backup plan" required
                            defaultValue="I will go to the Atkins Library and get a loaner laptop. Apartment and McEniry 116." />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Courses</legend>
                    <div id="coursesList" className="courses-list">
                        {courses.map(course => (
                            <div key={course.id} className="course-row">
                                <input placeholder="Prefix" value={course.prefix} onChange={e => updateCourse(course.id, "prefix", e.target.value)} />
                                <input placeholder="Number" value={course.number} onChange={e => updateCourse(course.id, "number", e.target.value)} />
                                <input placeholder="Course Name" value={course.name} onChange={e => updateCourse(course.id, "name", e.target.value)} />
                                <input placeholder="Reason" value={course.reason} onChange={e => updateCourse(course.id, "reason", e.target.value)} />
                                <button type="button" className="delete-course" onClick={() => removeCourse(course.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <button className="secondary" type="button" onClick={addCourse}>Add Course</button>
                </fieldset>

                <fieldset>
                    <legend>Quote</legend>
                    <label className="stacked-label">Quote
                        <input type="text" id="quote" name="quote" defaultValue="There's no learning without trying lots of ideas and failing lots of times." placeholder="Quote" required />
                    </label>
                    <label className="stacked-label">Quote Author
                        <input type="text" id="quoteAuthor" name="quoteAuthor" defaultValue="Johny Ive" placeholder="Quote author" required />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Extra</legend>
                    <label className="stacked-label">Funny Thing
                        <input type="text" id="funny" name="funny" defaultValue="I can communicate proficiently in four different languages." placeholder="Funny thing" />
                    </label>
                    <label className="stacked-label">Something I Would Like to Share
                        <input type="text" id="extra" name="extra" defaultValue="I just moved to Charlotte." placeholder="Something to share" />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Links</legend>
                    <label className="stacked-label">LinkedIn / Link 1
                        <input type="url" id="link1" name="link1" defaultValue="https://webpages.charlotte.edu/rassefa/itis3135/" placeholder="https://example.com" required />
                    </label>
                    <label className="stacked-label">Link 2
                        <input type="url" id="link2" name="link2" defaultValue="https://github.com/raeyasser/" placeholder="https://example.com" required />
                    </label>
                    <label className="stacked-label">Link 3
                        <input type="url" id="link3" name="link3" defaultValue="https://webpages.charlotte.edu/rassefa" placeholder="https://example.com" required />
                    </label>
                    <label className="stacked-label">Link 4
                        <input type="url" id="link4" name="link4" defaultValue="https://raeyasse.github.io" placeholder="https://example.com" required />
                    </label>
                    <label className="stacked-label">Link 5
                        <input type="url" id="link5" name="link5" defaultValue="https://www.linkedin.com/in/raey-asse/" placeholder="https://example.com" required />
                    </label>
                </fieldset>

                <div className="button-row">
                    <button type="submit">Submit</button>
                    <button type="reset" className="secondary">Reset</button>
                </div>
            </form>
        </main>
    </>;
}
