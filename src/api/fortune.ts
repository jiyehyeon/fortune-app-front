import Axios from "axios";

export const getFortune = async (
  birthYear: string,
  birthMonth: string,
  birthDay: string,
  calander: string
) => {
  const res = await Axios.post(`${process.env.REACT_APP_API_URL}/fortune/get`, {
    birthYear,
    birthMonth,
    birthDay,
    calander,
  });
  return res.data.fortune;
};
