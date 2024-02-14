import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { alertError, alertSuccess } from "../../../../utils/alerts";
import { updateAdditional } from "../../../../utils/actions";

const notices = [
  { value: "7", label: "One Week" },
  { value: "14", label: "Two Weeks" },
  { value: "21", label: "Three Weeks" },
  { value: "30", label: "One Month" },
  { value: "others", label: "Others" },
];

export default function Additional(props) {
  const user = props.data;
  const [loading, setLoading] = useState(false);
  const [cv_file, setCV] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      current_job_title: e.target.current_job_title.value,
      years_of_experience: e.target.years_of_experience.value,
      career_summary: e.target.career_summary.value,
      current_net_pay: e.target.current_net_pay.value,
      expected_net_pay: e.target.expected_net_pay.value,
      notice_period: e.target.notice_period.value,
      linkedin: e.target.linkedin.value,
      cv: cv_file,
    };
    setLoading(true);
    updateAdditional(data)
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
      <form className="col-md-12 padding-small" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Current Job Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your current job title"
              name="current_job_title"
              defaultValue={user.current_job_title}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Total Years Of Experience</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your total years of experience"
              name="years_of_experience"
              defaultValue={user.years_of_experience}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Career Summary</label>
            <textarea
              className="form-control"
              placeholder="Enter summary here"
              rows="4"
              name="career_summary"
              defaultValue={user.career_summary}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Current Net Salary Per Month</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your current net pay - numbers only"
              name="current_net_pay"
              defaultValue={user.current_net_pay}
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Expected Net Salary Per Month</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your expected net pay - numbers only"
              name="expected_net_pay"
              defaultValue={user.expected_net_pay}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Notice Period</label>
            <select
              className="form-control bg-light text-dark"
              id="notice"
              name="notice_period"
            >
              <option>Please select</option>
              {notices.map((notice) => (
                <option
                key={notice.value}
                  value={notice.value}
                  selected={
                    user.notice_period === notice.value ? "selected" : ""
                  }
                >
                  {notice.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>LinkedIn</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter linkedin profile link"
              name="linkedin"
              defaultValue={user.linkedin}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 form-group square-72">
            <label
              htmlFor="profile-photo"
              className="font-size-4 font-weight-semibold text-black-2 line-height-reset"
            >
              Upload CV
            </label>
            <input
              type="file"
              className="form-control"
              name="profile_picture"
              id="profile-photo"
              onChange={(e) => setCV(e.target.files[0])}
            />
            <small>
              {user.cv && cv_file === "" ? (
                <a href="/" className="text-primary">
                  <u>{user.cv.substr(47)}</u>
                </a>
              ) : (
                <a href="/" className="text-primary">
                  <u>{cv_file.name}</u>
                </a>
              )}
            </small>
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
