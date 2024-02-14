import axios from "axios";
import instance from "../api";

// career
const getAllCareers = async () => {
  const response = await instance.get("/careers/all");
  return response;
};
const getOneCareer = async (id) => {
  const response = await instance.get(`/careers/one/${id}`);
  return response;
};

// restaurant
const restaurantSignup = async (data) => {
  const response = await instance.post("/restaurant/register", data);
  return response;
};
const restaurantLogin = async (data) => {
  const response = await instance.post("/restaurant/login", data);
  return response;
};
const getCurrentRestaurant = async (token) => {
  const response = await axios.get(
    `https://kracada-v2-api.herokuapp.com/api/restaurant/current`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
const getRestaurants = async (cat) => {
  const response = await instance.get(`/restaurant/category/${cat}`);
  return response;
};
const getRestaurant = async (slug) => {
  const response = await instance.get(`/restaurant/${slug}`);
  return response;
};
const getRestaurantById = async (id) => {
  const response = await instance.get(`/restaurant/id/${id}`);
  return response;
};
const getRecentRestaurants = async () => {
  const response = await instance.get("/restaurant/recent/added");
  return response;
};
const postMenu = async (data) => {
  const response = await instance.post(`/restaurant/menu/${data.id}`, data);
  return response;
};
const postReview = async (data) => {
  const response = await instance.post("/restaurant/review", data);
  return response;
};
// news
const getAllNews = async () => {
  const response = await instance.get("/news/all");
  return response;
};
const getTopSectionNews = async () => {
  const response = await instance.get("/news/top");
  return response;
};
const getNews = async (id) => {
  const response = await instance.get(`/news/category/single/${id}`);
  return response;
};
const getNewsCategory = async (category, page) => {
  const response = await instance.get(`/news/category/${category}/?page=${page}`);
  return response;
};
const postNewsComment = async (data) => {
  const response = await instance.post("/news/comment", data);
  return response;
};
// lifestyle
const getAllLifestyles = async () => {
  const response = await instance.get("/lifestyle/all");
  return response;
};
const getLifestyle = async (id) => {
  const response = await instance.get(`/lifestyle/single/${id}`);
  return response;
};
const getCategoryLifestyle = async (cat) => {
  const response = await instance.get(`/lifestyle/category/${cat}`);
  return response;
};
// jobs
const getAllJobs = async (limit) => {
  const response = await instance.get(`/jobs/?limit=${limit}`);
  return response;
};
const getApprovedKRJobs = async (limit) => {
  const response = await instance.get(`/jobs/krjobs`);
  return response;
};
const getJob = async (id) => {
  const response = await instance.get(`/jobs/${id}`);
  return response;
};
const getJobById = async (id) => {
  const response = await instance.get(`/jobs/jobid/${id}`);
  return response;
};
const applyToJob = async (job_id) => {
  const response = await instance.post(`/jobs/${job_id}/apply`);
  return response;
};
const postJob = async (data) => {
  const response = await instance.post("/jobs/employer", data);
  return response;
};
// employer
const employerSignup = async (data) => {
  const response = await instance.post("/employers/signup", data);
  return response;
};
const employerLogin = async (data) => {
  const response = await instance.post("/employers/login", data);
  return response;
};
const getForgotPasswordCodeEmployer = async (data) => {
  const response = await instance.put("/employers/forgot_password", data);
  return response;
};
const resetPasswordEmployer = async (data) => {
  const response = await instance.put("/employers/reset_password", data);
  return response;
};
const getAllEmployers = async (limit) => {
  const response = await instance.get(`/employers/all`);
  return response;
};
const getCurrentEmployer = async (token) => {
  const response = await axios.get(
    `https://kracada-v2-api.herokuapp.com/api/employers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
// user
const userSignup = async (data) => {
  const response = await instance.post("/user/signup", data);
  return response;
};
const userLogin = async (data) => {
  const response = await instance.post("/user/login", data);
  return response;
};
const getForgotPasswordCode = async (data) => {
  const response = await instance.put("/user/forgot_password", data);
  return response;
};
const resetPassword = async (data) => {
  const response = await instance.put("/user/reset_password", data);
  return response;
};

const getCurrentUser = async (token) => {
  const response = await axios.get(
    `https://kracada-v2-api.herokuapp.com/api/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
const getUserAppliedJobs = async () => {
  const response = await instance.get("/user/applied_jobs");
  return response;
};
const updatePersonal = async (data) => {
  const formData = new FormData();
  for (const property in data) {
    formData.append(property, data[property]);
  }
  const response = await instance.put("/user/personal", formData);
  return response;
};
const updateExperience = async (data) => {
  const response = await instance.post("/user/experience", data);
  return response;
};
const updateSkills = async (data) => {
  const response = await instance.put("/user/skills", data);
  return response;
};
const updateEducation = async (data) => {
  const response = await instance.post("/user/education", data);
  return response;
};
const updateAdditional = async (data) => {
  const formData = new FormData();
  for (const property in data) {
    formData.append(property, data[property]);
  }
  const response = await instance.put("/user/additional", formData);
  return response;
};
const userSearch = async (data) => {
  const response = await instance.post("/user/search", data);
  return response;
};

const subscribeToMail = async (data) => {
  const response = await instance.post("/user/subscribe", data);
  return response;
};

export {
  restaurantSignup,
  restaurantLogin,
  getCurrentRestaurant,
  getRestaurants,
  getRestaurant,
  getRestaurantById,
  getRecentRestaurants,
  postMenu,
  // news
  getAllNews,
  getTopSectionNews,
  getNews,
  getNewsCategory,
  postReview,
  postNewsComment,
  // lifestyle
  getAllLifestyles,
  getLifestyle,
  getCategoryLifestyle,
 // jobs
  getAllJobs,
  getApprovedKRJobs,
  getJob,
  getJobById,
  applyToJob,
  //employer
  employerSignup,
  employerLogin,
  getForgotPasswordCodeEmployer,
  resetPasswordEmployer,
  getCurrentEmployer,
  getAllEmployers,
  postJob,
  //user
  userSignup,
  userLogin,
  getForgotPasswordCode,
  resetPassword,
  getCurrentUser,
  getUserAppliedJobs,
  updatePersonal,
  updateExperience,
  updateSkills,
  updateEducation,
  updateAdditional,
  userSearch,
  subscribeToMail,
  // careers
  getAllCareers,
  getOneCareer,
};
