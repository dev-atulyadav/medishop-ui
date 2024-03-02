import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../../user/UserState";
import axios from "axios";

export const CustomerContext = createContext();

export default function CustomerState({ children }) {
  const [response, setResponse] = useState(false);
  const { data } = useContext(UserContext);
  useEffect(() => {
    let url = `http://localhost:8181/customer/login/${data.email}/${data.password}`;

    const loginApi = async () => {
      let response = await axios.get(url);
      console.log(response);
    };
    if (response) {
      loginApi();
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
