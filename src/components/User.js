import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./User.css";
import axios from "axios";
import { useEffect } from "react";

const User = () => {
  const getApiData = async (id) => {
    const url = `https://reqres.in/api/users/${id}`;
    const response = await axios.get(url);
    console.log(response.data);
  };

  useEffect(() => {
    getApiData(1);
  }, []);

  return (
    <>
      <Box className="button">
        <Button variant="contained">1</Button>
        <Button variant="contained">2</Button>
        <Button variant="contained">3</Button>
        <Button variant="contained">100</Button>
      </Box>

      <Box className="user-detail">
        <ul>
          <li>Email:</li>
          <li>Name:</li>
        </ul>
      </Box>
      <Box className="image-box">
        <img
          src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
          alt="User Pic"
        />
      </Box>
    </>
  );
};

export default User;
