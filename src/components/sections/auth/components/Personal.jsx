import React, { useState } from "react";
import Loader from "../../../../utils/Loader";
import { alertError, alertSuccess } from "../../../../utils/alerts";
import { updatePersonal } from "../../../../utils/actions";

const genders = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export default function Personal(props) {
  const user = props.data;
  const [loading, setLoading] = useState(false);
  const [picture, setProfilePicture] = useState("");
  const [picture_preview, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      state: e.target.state.value,
      gender: e.target.gender.value,
      date_of_birth: e.target.date_of_birth.value,
      profile_picture: picture,
    };
    setLoading(true);
    updatePersonal(data)
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
      <div className="text-left">
        <h3>Update Personal Information</h3>
      </div>
      <form className="col-md-12 padding-small" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              name="first_name"
              defaultValue={user.first_name}
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              name="last_name"
              defaultValue={user.last_name}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              defaultValue={user.email}
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Contact Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your contact phone"
              name="phone"
              defaultValue={user.phone}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-6 form-group">
            <label>Resident City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the city you live in"
              name="city"
              defaultValue={user.city}
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Resident State</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the state you live in"
              name="state"
              defaultValue={user.state}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label>Gender</label>
            <select
              className="form-control form-control-lg"
              id="exampleFormControlSelect2"
              name="gender"
            >
              <option>Please Select</option>
              {genders.map((gender) => (
                <option
                key={gender.value}
                  value={gender.value}
                  selected={user.gender === gender.value ? "selected" : ""}
                >
                  {gender.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group">
            <label
              htmlFor="date_of_birth"
              className="font-size-4 font-weight-semibold text-black-2 line-height-reset"
            >
              Date of Birth
            </label>

            <input
              type="text"
              className="form-control bg-light text-dark"
              id="date_of_birth"
              onFocus={(e) => {
                e.currentTarget.type = "date";
                e.currentTarget.focus();
              }}
              placeholder={new Date(user.date_of_birth).toLocaleDateString()}
              name="date_of_birth"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 form-group square-72">
        
            {user.profile_picture && !picture_preview ? (
              <img className="img-fluid mb-2" src={user.profile_picture} alt="Profile" />
            ) : (
              <img className="img-fluid mb-2" src={picture_preview} alt="Profile Preview" />
            )}

            <input
              type="file"
              className="form-control"
              name="profile_picture"
              id="profile-photo"
              onChange={(e) => {
                setProfilePicture(e.target.files[0]);
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <label
              htmlFor="profile-photo"
              className="font-size-4 font-weight-semibold text-black-2 line-height-reset"
            >
              Upload profile picture
            </label>
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
