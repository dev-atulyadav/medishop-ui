import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../../user/UserState";
import axios from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";


export const CustomerContext = createContext();

export default function CustomerState({ children }) {
  const [response, setResponse] = useState(false);
  const { data } = useContext(UserContext);
  useEffect(() => {
    let url = `http://localhost:8181/customer/login/${data.email}/${data.password}`;

    const loginApi = async () => {
      let result;
      try {
        result = await axios.get(url);
        if(result.data.status===200){
          console.log(result.data.status);
          return redirect('/')

        }
        if (result.data.status === 404) {
          toast.error("Invalid email or password!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      } catch (err) {
        toast.error("Inputs can't be empty!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    };
    if (response) {
      loginApi();
      setResponse(!response)
    }
  }, [response]);

  const handleResponse = (e) => {
    e.preventDefault();
    setResponse(!response);
  };
  return (
    <CustomerContext.Provider value={{ handleResponse }}>
      {children}
    </CustomerContext.Provider>
  );
}
