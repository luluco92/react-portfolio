import React from 'react';
import Photo from '../../img/image-1.jpg';

export default function About() {
  return (
    <div className="reactab"><br/>
        <figure>
          <img src={Photo} alt="Joe Student Photo"/>
          <figcaption>Joe Student</figcaption>
        </figure>
      <h2>About Me</h2>
      <hr/>
      <p>
        Joe Student is a person with aptitude and attitude. He is prepared for any challenge on the job with plenty of experience on the subject matter within a controlled learning environment. Joe Student has over 20 years of experience in living his life and is fully qualified to continue his current endeavors as he tackles the next stage of his journey in the modern digital world. Joe Student's unassuming academic background includes a GPA of over 3.90 in high school and graduated cum laude from a prestigious university (UCLA). He has always been serious when it comes to learning, even when exhibiting little interest in the subject matter. He was proficient in rote memorization during that time which enabled him to absorb large amounts of material and regurgitate them expressly for the purpose of dealing with various assessments to his knowledge. Joe Student then went on to obtain a Master's Degree in a well known field that has become increasingly relevant in a post-COVID world. 
      </p>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}
