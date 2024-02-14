import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { alertError, alertSuccess } from "../../../../utils/alerts";
import { updateSkills } from "../../../../utils/actions";

export default function Skills() {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [certifications, setCert] = useState([]);
  const [languages, setLang] = useState([]);

  // Skills
  function handleChange(i, event) {
    const values = [...skills];
    values[i].value = event.target.value;
    setSkills(values);
  }

  function handleAdd() {
    const values = [...skills];
    values.push({ value: null });
    setSkills(values);
  }

  function handleRemove(i) {
    const values = [...skills];
    values.splice(i, 1);
    setSkills(values);
  }

  // certifications
  function handleChangeCert(i, event) {
    const values = [...certifications];
    values[i].value = event.target.value;
    setCert(values);
  }

  function handleAddCert() {
    const values = [...certifications];
    values.push({ value: null });
    setCert(values);
  }

  function handleRemoveCert(i) {
    const values = [...certifications];
    values.splice(i, 1);
    setCert(values);
  }

  // languages
  function handleChangeLang(i, event) {
    const values = [...languages];
    values[i].value = event.target.value;
    setLang(values);
  }

  function handleAddLang() {
    const values = [...languages];
    values.push({ value: null });
    setLang(values);
  }

  function handleRemoveLang(i) {
    const values = [...languages];
    values.splice(i, 1);
    setLang(values);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // skills
    const skillsArr = [];
    for (let i = 0; i < skills.length; i++) {
      skillsArr.push(skills[i].value);
    }
    // certifications
    const certArr = [];
    for (let i = 0; i < certifications.length; i++) {
      certArr.push(certifications[i].value);
    }
    // language
    const langArr = [];
    for (let i = 0; i < languages.length; i++) {
      langArr.push(languages[i].value);
    }

    const data = {
      skills: JSON.stringify(skillsArr),
      certifications: JSON.stringify(certArr),
      languages: JSON.stringify(langArr),
    };
    setLoading(true);
    updateSkills(data)
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
        <h3>Update Skills</h3>
      </div>
      <form className="col-md-12 padding-small" onSubmit={handleSubmit}>
        <div className="skill-add mb-4">
          <div className="form-row">
            <div className="col-md-12 form-group">
              <label className="font-weight-bold">Professional Skills</label>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 form-group">
              {skills.map((skill, idx) => {
                return (
                  <div className="row mb-2" key={`${skill}-${idx}`}>
                    <div className="col-lg-12">
                      <input
                        id="skills"
                        type="text"
                        name="skills"
                        className="form-control"
                        value={skill.value || ""}
                        placeholder={skill.value}
                        onChange={(e) => handleChange(idx, e)}
                      />
                      <small
                        className="ml-1 mr-3 text-danger "
                        onClick={() => handleRemove(idx)}
                      >
                        <u>Remove Skill</u>
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
                <i className="fas fa-plus-circle"></i> Add New Skill
              </button>
            </div>
          </div>
        </div>
        <div className="skill-add mb-4">
          <div className="form-row">
            <div className="col-md-12 form-group">
              <label className="font-weight-bold">Professional Certfications</label>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 form-group">
              {certifications.map((cert, idx) => {
                return (
                  <div className="row mb-2" key={`${cert}-${idx}`}>
                    <div className="col-lg-12">
                      <input
                        id="certs"
                        type="text"
                        name="certs"
                        className="form-control"
                        value={cert.value || ""}
                        placeholder={cert.value}
                        onChange={(e) => handleChangeCert(idx, e)}
                      />
                      <small
                        className="ml-1 mr-3 text-danger "
                        onClick={() => handleRemoveCert(idx)}
                      >
                        <u>Remove Certification</u>
                      </small>
                    </div>
                  </div>
                );
              })}
              <button
                type="button"
                color="primary"
                className="btn btn-primary"
                onClick={() => handleAddCert()}
              >
                <i className="fas fa-plus-circle"></i> Add New Certification
              </button>
            </div>
          </div>
        </div>
        <div className="skill-add mb-4">
          <div className="form-row">
            <div className="col-md-12 form-group">
              <label className="font-weight-bold">Languages</label>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-12 form-group">
              {languages.map((lang, idx) => {
                return (
                  <div className="row mb-2" key={`${lang}-${idx}`}>
                    <div className="col-lg-12">
                      <input
                        id="langs"
                        type="text"
                        name="langs"
                        className="form-control"
                        value={lang.value || ""}
                        placeholder={lang.value}
                        onChange={(e) => handleChangeLang(idx, e)}
                      />
                      <small
                        className="ml-1 mr-3 text-danger "
                        onClick={() => handleRemoveLang(idx)}
                      >
                        <u>Remove Language</u>
                      </small>
                    </div>
                  </div>
                );
              })}
              <button
                type="button"
                color="primary"
                className="btn btn-primary"
                onClick={() => handleAddLang()}
              >
                <i className="fas fa-plus-circle"></i> Add New Language
              </button>
            </div>
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
