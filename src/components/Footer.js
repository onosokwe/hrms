import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { subscribeToMail } from "../utils/actions";

const categories = [
    { value: "Jobs", label: "Jobs" },
    { value: "News", label: "News" },
    { value: "Lifestyle", label: "Lifestyle & Entertainment" },
    { value: "Hotels", label: "Hotels & Restaurants" },
    { value: "Travel", label: "Travel & Tourism" },
  ];
  
  // a basic form
  const CustomForm = ({ status, message, onValidated }) => {
    let email, category;
  
    const submit = async () => {
      email &&
      category &&
      email.value.indexOf("@") > -1 &&
      
      onValidated({
        EMAIL: email.value,
        CATEGORY: category.value,
      });
  
      if(email.value && category.value){
        let data = {
          email: email.value,
          category: category.value,
          message: "You have successfully subscribed",
        }
        subscribeToMail(data)
      }
    }
  
    return (
      <div>
        {status === "sending" && <div style={{ color: "#f60" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
  
        <form className="form-row">
          <div className="col-md-9 col-sm-12 mb-2">
            <div className="row">
              <div className="col-md-6 mb-2">
                <input
                  className="form-control border-0"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  id="email"
                  ref={(node) => (email = node)}
                />
              </div>
              <div className="col-md-6">
                <select
                  className="form-control border-0"
                  id="exampleFormControlSelect2"
                  name="category"
                  ref={(node) => (category = node)}
                >
                  <option>Please select category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <button
              onClick={submit}
              type="button"
              className="btn btn-block btn-warning"
            >
              {" "}
              <i className="fa fa-envelope"></i> Subscribe{" "}
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default function Footer() {
    return (
        <>
        <section className="section-subscribe padding-y-lg">
            <div className="container">
                <p className="pb-2 text-center text-white">
                    Delivering the latest lifestyle content straight to your inbox
                </p>

                <div className="row justify-content-md-center">
                    <div className="col-lg-7 col-md-6">
                        <MailchimpSubscribe
                            url={process.env.REACT_APP_MAILCHIMP_URL}
                            render={({ subscribe, status, message }) => (
                            <CustomForm
                                status={status}
                                message={message}
                                onValidated={(formData) => subscribe(formData)}
                            />
                            )}
                        />
                        <small className="form-text text-white-50">
                            We'll never share your email address with a third-party.{" "}
                        </small>
                    </div>
                </div>
            </div>
        </section>

        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="container">

                    <div className="row g-5">
                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/"><i className="bi bi-chevron-right"></i> Home</a></li>
                                <li><a href="/privacy-policy"><i className="bi bi-chevron-right"></i> Privacy Policy</a></li>
                                <li><a href="/contact-us"><i className="bi bi-chevron-right"></i> Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Jobs</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/jobs"><i className="bi bi-chevron-right"></i> Job Opportunities</a></li>
                                <li><a href="/cv-review"><i className="bi bi-chevron-right"></i> CV Review</a></li>
                                <li><a href="/job-search"><i className="bi bi-chevron-right"></i> Job Search Advice</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Lifestyle</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/lifestyle"><i className="bi bi-chevron-right"></i> Lifestyle</a></li>
                                <li><a href="/hotels-restaurants"><i className="bi bi-chevron-right"></i> Hotels and Restaurants</a></li>
                                <li><a href="/travel-tourism"><i className="bi bi-chevron-right"></i> Travel and Tourism</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h3 className="footer-heading">Accounts</h3>
                            <ul className="footer-links list-unstyled">
                                <li><a href="/account/register"><i className="bi bi-chevron-right"></i> Create Account </a></li>
                                <li><a href="/account/login"><i className="bi bi-chevron-right"></i> Login</a></li>
                                <li><a href="/account/password"><i className="bi bi-chevron-right"></i> Forgot Password</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>

                <div className="footer-legal">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                <div className="copyright">
                                    &copy; 2021 - 2024 <strong><span>Kracada</span></strong>. All Rights Reserved
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                    <a href="https://x.com/officialkracada" rel="noreferrer" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="https://facebook.com/kracada" rel="noreferrer" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="https://instagram.com/kracada_official" rel="noreferrer" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="https://linkedin.com/kracada" rel="noreferrer" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                    <a href="https://youtube.com/@krtv8876" rel="noreferrer" target="_blank" className="youtube"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer> 


        <a href="#"  rel="noreferrer" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


</>
    );
}
