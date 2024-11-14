import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://newsdata.io/api/1/latest?country=vi&apikey=pub_474824b746e202c2a0b43d792d0ffd0831b79"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchData };
