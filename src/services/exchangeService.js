import axios from "axios";

export const getExchange = async (amount = 0, exchangeCurrency = []) => {
  const exchangeConfig = { amount, exchangeCurrency };
  const { data } = await axios.post(
    "http://localhost:3131/exchange",
    exchangeConfig
  );
  console.log("La data: ", data);
  return data;
};
