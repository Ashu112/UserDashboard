import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./User.css";
import axios from "axios";
import { useState } from "react";

const User = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
  );

  const getApiData = async (id) => {
    try {
      const url = `https://reqres.in/api/users/${id}`;
      const response = await axios.get(url);
      setEmail(response.data.data.email);
      setName(
        `${response.data.data.first_name} ${response.data.data.last_name}`
      );
      setImage(response.data.data.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = (id) => {
    if (id === 100) {
      setEmail("");
      setName("");
      setImage(
        "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
      );
      alert("failed to load data");
    } else {
      getApiData(id);
    }
  };

  const user = [
    {
      user: 1,
    },
    {
      user: 2,
    },
    {
      user: 3,
    },
    {
      user: 100,
    },
  ];
  return (
    <>
      <Box className="button">
        {user.map((id) => (
          <Button
            key={id.user}
            variant="contained"
            onClick={() => handleButtonClick(id.user)}
          >
            {id.user}
          </Button>
        ))}
      </Box>

      <Box className="user-detail">
        <ul>
          <li>Email: {email}</li>
          <li>Name: {name}</li>
        </ul>
      </Box>
      <Box className="image-box">
        <img src={image} alt="User Pic" />
      </Box>
    </>
  );
};

export default User;
