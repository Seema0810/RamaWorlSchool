import React from "react";
import Title from "./Title";

const Academics = () => {
  return (
    <div className="bg-light text-secondary pl-1" id="academics">
      <Title title='Academics'/>
      {/* <h1 className="d-flex justify-content-center pt-2 pb-3">Academics</h1> */}
      <h3 className="text-info">Curriculam:</h3>
      <p>
        Since B.K. Birla Public School is affiliated to CBSE, it follows the
        syllabi of National Council of Education Research and Training(NCERT).
        NCERT is a nodal agency at the national level in the area of school
        education. It developed National Curriculum framework, syllabi and text
        books based on the national educational policy documents of 1968 and
        1986. The NCERT curriculum articulates the goals and objectives of the
        national system of education with built in flexibility and it ensures
        greater adaptability.{" "}
      </p>
      <p>
        At the Secondary Stage (STD IX & X) the main objective of learning is to
        develop higher order communication skills with grammatical accuracy and
        appropriateness of style.
      </p>
      <p>
        {" "}
        As per CBSE, students are offered a common scheme of studies up to ten
        plus two years of general education.
      </p>
      <h3 className="text-info">Teaching Methods and experiential learning:</h3>
      <p>
        The evolving educational environment at B.K. Birla Public School, Kalyan
        offers tremendous opportunities for applying creativity and innovation
        in the teaching learning process.
      </p>
      <ul>
        <li>
          Regular field trips and educational tours are arranged in every
          subject to get a thorough and in depth learning experience.
        </li>
        <li>
          Theme based teaching and celebration of color days; object talk,
          puppet show, role play etc. are a regular part of the curriculum in
          the pre- primary section so that children learn by play-way technique.
        </li>
        <li>
          Students participate in various activities throughout the year based
          on the annual theme and get a thorough understanding of the concept of
          the theme.
        </li>
        <li>
          Video conferencing and flip classes are used to aid learning using
          technology wherein the students can learn few topics from home.
        </li>
        <li>
          Providing opportunity to the students through projects, workshops,
          seminar, counseling sessions, expert talks, etc which really help the
          students to develop their interactive skills and helps them to get an
          in-depth insight of the topic.
        </li>
      </ul>
      <h3 className="text-info">Evaluation and Assessment:</h3>
      <div class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Class</th>
            <th scope="col">Mode Of Assessment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nursery to Sr. KG</td>
            <td>
              1) No formal examinations.
              <br />
              2) Teachers will evaluate the students through worksheets, oral
              questions, activities and their involment in the learning process
              throughout the year.
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>I and II</td>
            <td>
              1) No formal examinations.
              <br />
              2) Teachers will evaluate the students through comprehensive
              worksheets.
              <br />
              3) There are total seven evaluations in a year.
              <br />
              4) Parents will be giving regular feedback during open days.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>III and V</td>
            <td>
              1) No formal examinations.
              <br />
              2) weekly tests will be conducted every Tuesday as per the
              schedule given in the diary.
              <br />
              3) Four evaluations will be conducted every year. 2nd evaluation
              (Sep/Oct) will be based on the entire syllabus of 1st term and 4th
              evaluation will be based on the entire syllabus coverded in the
              2nd term.
              <br />
              4) Time table and syllabus will be provided accordingly well in
              advance.
              <br />
              5) Evaluations will be done through comprehensive worksheets based
              on subjectwise criteria.
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>VI to VIII</td>
            <td>
              Class VI - 10% of the 1st term syllabus of significant topics +
              entire syllabus of 2nd term.
              <br />
              Class VII - 20% of the 1st term syllabus of significant topics +
              entire syllabus of 2nd term.
              <br />
              Class VIII - 30% of the 1st term syllabus of significant topics +
              entire syllabus of 2nd term.
            </td>
          </tr>
         
        </tbody>
      </div>
    </div>
  );
};

export default Academics;
