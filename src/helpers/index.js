import { useDispatch } from "react-redux";
import Axios from "axios";
import { toast } from "react-toastify";

//custom dispatcher hook
export const useLoadBasicData = () => {
  const dispatch = useDispatch();
  return (payload) => {
    // dispatch(fetchFacility());
  };
};

export const handleAuthError = (error) => {
  if (error?.response?.status === 401) {
    window.location = "/logout";
  }
};

export const randomNumber = () => {
  const max = 99999;
  const min = 11111;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("file", file, file.name);
    Axios.post(process.env.REACT_APP_BACKEND_FILE_UPLOAD_URL, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.type === "success") {
          resolve({ data: { fileName: res.data.fileName } });
        } else {
          reject(res.data.msg);
        }
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export const toastMessage = (type, message) => {
  if (type === "info") {
    toast.info(message);
  }
  if (type === "error") {
    toast.error(message);
  }
  if (type === "success") {
    toast.success(message);
  }
};

export const errorHandler = (error) => {
  if (error?.response?.data?.msg) {
    toastMessage("error", error.response.data.msg);
  } else if (error.message) {
    toastMessage("error", error.message);
  } else {
    toastMessage("error", JSON.stringify(error));
  }
  handleAuthError(error);
};
