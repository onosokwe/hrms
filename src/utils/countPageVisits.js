import axios from "axios";

const getPageViews = async (url) => {
  try {
    const response = await axios.get(
      `https://api.countapi.xyz/hit/${url}/visits`
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default getPageViews;
