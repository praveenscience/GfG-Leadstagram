import Axios from "axios";

export const GetUsers = () => Axios.get("/api/users");
