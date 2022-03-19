import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [experience, setExperience] = useState([]);
  const [value, setValue] = useState(0);

  const fetchExperience = async () => {
    try {
      const response = await fetch(url);
      const experience = await response.json();
      setExperience(experience);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchExperience();
  }, [])


  if (loading) {
    return <h3>Loading..</h3>
  }

  const { company, dates, duties, title } = experience[value]

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
      </div>
      <div className="underline"></div>
      <div className='jobs-center'>

        {/* button container */}
        <div className='btn-container'>
          {
            experience.map((job, index) => {
              return (
                <button className={`job-btn ${index === value && 'active-btn'}`} key={job.id} onClick={() => setValue(index)}>{job.company}</button>
              );
            })
          }
        </div>

        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              )
            })
          }
          <button className='btn'>More info</button>
        </article>
      </div>
    </section>
  )
}

export default App
