import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { alertError, alertSuccess } from "../../../../utils/alerts";
import { updateEducation } from "../../../../utils/actions";

const quals = [
  { value: "ssce", label: "School Leaving Certificate" },
  { value: "diploma", label: "National Diploma (OND/HND)" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Post Graduate Degree" },
];

export default function Education() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      institution: e.target.institution.value,
      location: e.target.location.value,
      qualification: e.target.qualification.value,
      degree_obtained: e.target.degree_obtained.value,
      class_of_degree: e.target.class_of_degree.value,
      grad_year: e.target.grad_year.value,
    };
    setLoading(true);
    updateEducation(data)
      .then((res) => {
        setLoading(false);
        alertSuccess(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        alertError(err.response.data.error);
      });
  };

  return (
    <div className="row col-md-12" style={{ margin: "30px 0" }}>
      <div className="text-left" style={{ paddingLeft: "12px" }}>
        <h3>Update Education</h3>
      </div>
      <form className="col-md-12 padding-small" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Institution Attended</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter institution name"
              name="institution"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              name="location"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Qualification</label>
            <select
              className="form-control form-control-lg"
              id="exampleFormControlSelect2"
              name="qualification"
            >
              <option>Please Select</option>
              {quals.map((qual) => (
                <option key={qual.value} value={qual.value}>{qual.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Course of Study</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course of study"
              name="degree_obtained"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Grade Obtained</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter grade obtained"
              name="class_of_degree"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Graduation Year</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter graduation year"
              name="grad_year"
            />
          </div>
        </div>

        <div className="form-group">
          {loading ? (
            <button type="button" disabled={true} className="btn btn-dark">
              <Loader />
            </button>
          ) : (
            <button type="submit" className="btn btn-dark">
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
