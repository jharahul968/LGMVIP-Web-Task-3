import React, { useState } from 'react';

const StudentEnrollmentForm = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [website, setWebsite] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSkillChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new student object
    const newStudent = {
      name: name,
      email: email,
      photo: photo,
      website: website,
      gender: gender,
      skills: skills,
    };

    // Add the new student to the students array
    setStudents([...students, newStudent]);

    // Clear the form inputs
    setName('');
    setEmail('');
    setPhoto('');
    setWebsite('');
    setGender('');
    setSkills([]);
  };

  return (
    <div className="container mx-auto flex">
      <div className="w-1/2 p-8">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-4">Student Enrollment</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 px-3 py-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 px-3 py-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block mb-1">
              Photo:
            </label>
            <input
              type="file" // Changed to file input
              accept="image/*" // Specify accepted file types
              id="photo"
              onChange={handlePhotoChange} // Modified event handler
              className="border border-gray-300 px-3 py-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block mb-1">
              Website:
            </label>
            <input
              type="text"
              id="website"
              value={website}
              onChange={handleWebsiteChange}
              className="border border-gray-300 px-3 py-2 w-full rounded"/>
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block mb-1">
                  Gender:
                </label>
                <div>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="radio"
                      value="male"
                      checked={gender === 'male'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label className="inline-flex items-center mr-2">
                    <input
                      type="radio"
                      value="female"
                      checked={gender === 'female'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Female
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="other"
                      checked={gender === 'other'}
                      onChange={handleGenderChange}
                      className="mr-1"
                    />
                    Others
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Skills:</label>
                <div>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value="html"
                      checked={skills.includes('html')}
                      onChange={handleSkillChange}
                      className="mr-1"
                    />
                    HTML
                  </label>
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value="css"
                      checked={skills.includes('css')}
                      onChange={handleSkillChange}
                      className="mr-1"
                    />
                    CSS
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value="java"
                      checked={skills.includes('java')}
                      onChange={handleSkillChange}
                      className="mr-1"
                    />
                    Java
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll
              </button>
            </form>
          </div>
          <div className="w-1/2 p-8">
            {students.map((student, index) => (
              <div className="bg-white rounded shadow p-4 mb-4" key={index}>
                <h3 className="text-xl mb-2">{student.name}</h3>
                <p className="mb-2">Email: {student.email}</p>
                <p className="mb-2">Website: {student.website}</p>
                <p className="mb-2">Gender: {student.gender}</p>
                <p className="mb-2">Skills: {student.skills.join(', ')}</p>
                <img src={student.photo} alt={student.name} className="w-32 h-32 object-cover" />
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default StudentEnrollmentForm;
    