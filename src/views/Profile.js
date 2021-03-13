import { useState, useEffect } from "react";
import { useAuthInfo } from "../hooks/authContext";
import styled from 'styled-components';
import {
  Avatar,
  Upload,
  Input,
  message,
} from "antd";
import { updateAvatar, editUser } from "../services/auth";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";


const Box = styled.div`
 max-width:500px;
`;

const FormH1 = styled.h1`
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #333333;
        font-size: 17px;
        font-weight: 400;
    `;
   
   export const Text = styled.span`
    text-align: ClientRect;
    font-family:'Montserrat', sans-serif;
    margin-top: 24px;
    color: #333333;
    font-size: 13px;
`;

export const Title = styled.span`
    text-align: ClientRect;
    font-family:'Montserrat', sans-serif;
    margin-top: 24px;
    color: #333333;
    font-size: 13px;
`;

const CardContent = styled.div`
background: #ffff;
    height: auto;
    margin-top:20px;
    margin-bottom:20px;
    margin-rigth:20px;
    margin-left:20px;
    padding: 10px 32px;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
    `;

const CardItem = styled.div`
margin-bottom: 8px;
font-family: 'Montserrat', sans-serif;
font-size: 13px;
`;


export const CardButton = styled.button`
        background: rgb(211,232,186);
        max-width: 130px;
        padding: 10px 40px;
        border: none;
        border-radius: 50px;
        color: black;
        font-size: 12px;
        font-family:'Montserrat', sans-serif;
        border:none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #c6aa8e;
            color: white;
        }
        `;

function Profile() {
  const history = useHistory();
  const { user, setUser } = useAuthInfo();
  const [loading, setLoading] = useState(false);
  const [datauser, setDatauser] = useState({});

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  function onChange(name, value) {
    setDatauser({ ...datauser, [name]: value });
    console.log(datauser);
  }

  const handleChange = async (file) => {
    const fdata = new FormData();
    fdata.append("file", file);
    //                                            cloudname 👇    👇 tipo de recurso
    const cloudinaryApi =
      "https://api.cloudinary.com/v1_1/drugv5pqc/image/upload";
    fdata.append("upload_preset", "moving_out");
    setLoading(true);
    const { data } = await axios.post(cloudinaryApi, fdata);
    const { data: user } = await updateAvatar(data.secure_url);
    setLoading(false);
    setUser(user);
  };

  const updateUser = async () => {
    try {
      const { data } = await editUser(datauser, user._id);
      setUser(data);
      message.success("User Updated");
      history.push("/myservices");
    } catch (error) {
      //message.error(error);
    }
  };

  return (
         <Box>
        <CardContent>
          <FormH1>Mi perfil</FormH1>
          <CardItem>
              <Avatar size={10} src={user.avatar} />
          </CardItem>
            <CardItem>
              <Upload
                name="avatar"
                showUploadList={false}
                beforeUpload={handleChange}
                listType="picture-card"
                className="avatar-uploader"
              >
                {uploadButton}
              </Upload>
            </CardItem>
            <CardItem>
              <Text placeholder="Username:">{user.username}</Text>
            </CardItem>
            <CardItem>
              <Input
                defaultValue={user["phone"] ? user["phone"] : ""}
                placeholder="Phone:"
                onChange={(e) => onChange("phone", e.target.value)}
              ></Input>
            </CardItem>
            <CardItem>
              <CardButton type="primary" block onClick={() => updateUser()}>
                Save
              </CardButton>
              </CardItem>
        </CardContent>
        </Box>
  );
}

export default Profile;