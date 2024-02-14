import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { alertError, alertSuccess } from "../../../../utils/alerts";
import { updateExperience } from "../../../../utils/actions";

const industries = [
  { value: "Accounting", label: "Accounting" },
  { value: "Administrative and Office", label: "Administrative and Office" },
  { value: "Banking and Finance", label: "Banking and Finance" },
  { value: "Creative and Design", label: "Creative and Design" },
  {
    value: "Customer Service and Support",
    label: "Customer Service and Support",
  },
  {
    value: "Engineering and Construction",
    label: "Engineering and Construction",
  },
  { value: "Health and Safety", label: "Health and Safety" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Legal Services", label: "Legal Services" },
  { value: "Marketing and Sales", label: "Marketing and Sales" },
  {
    value: "Product and Project Management",
    label: "Product and Project Management",
  },
  { value: "Software and IT", label: "Software and IT" },
];

export default function Experience() {
  const [loading, setLoading] = useState(false);
  const [duties, setDuties] = useState([]);

  function handleChange(i, event) {
    const values = [...duties];
    values[i].value = event.target.value;
    setDuties(values);
  }

  function handleAdd() {
    const values = [...duties];
    values.push({ value: null });
    setDuties(values);
  }

  function handleRemove(i) {
    const values = [...duties];
    values.splice(i, 1);
    setDuties(values);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const job_duties = [];
    for (let i = 0; i < duties.length; i++) {
      job_duties.push(duties[i].value);
    }

    const data = {
      company: e.target.company.value,
      location: e.target.company_location.value,
      start_date: e.target.start_date.value,
      end_date: e.target.end_date.value,
      job_title: e.target.job_title.value,
      industry: e.target.industry.value,
      job_duties: JSON.stringify(job_duties),
    };
    setLoading(true);
    updateExperience(data)
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
        <h3>Update Work Experience</h3>
      </div>
      <form className="col-md-12 padding-small" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Company</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your employer name"
              name="company"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter employer location"
              name="company_location"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Start Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="From"
              name="start_date"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>End Date </label>
            <input
              type="date"
              className="form-control"
              placeholder="To"
              name="end_date"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Industry</label>
            <select
              className="form-control form-control-lg"
              id="exampleFormControlSelect2"
              name="industry"
            >
              <option>Please Select</option>
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>{industry.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Job Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your job title"
              name="job_title"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label> Responsibilities / Achievements</label>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            {duties.map((duty, idx) => {
              return (
                <div className="row mb-2" key={`${duty}-${idx}`}>
                  <div className="col-lg-12">
                    <input
                      id="job_duties"
                      type="text"
                      name="job_duties"
                      className="form-control"
                      value={duty.value || ""}
                      placeholder={duty.value}
                      onChange={(e) => handleChange(idx, e)}
                    />
                    <small
                      className="ml-1 mr-3 text-danger "
                      onClick={() => handleRemove(idx)}
                    >
                      <u>Remove</u>
                    </small>
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              color="primary"
              className="btn btn-primary"
              onClick={() => handleAdd()}
            >
              <i className="fas fa-plus-circle"></i> Add
            </button>
          </div>
        </div>

        <div className="form-group">
          {loading ? (
            // <button type="button" disabled={true} className="btn btn-dark">
              <Loader />
            // </button>
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
