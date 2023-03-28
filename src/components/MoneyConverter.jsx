import { getExchange } from "@/services/exchangeService";
import { useEffect, useState } from "react";

const MoneyConverter = () => {
  const [baseCurrent, setBaseCurrent] = useState(0);
  const [currentExchange, setCurrentExchange] = useState(0);
  //   useEffect(() => {}, []);

  return (
    <div className="p-5">
      <h2 className="mb-5">Conversión de Monedas</h2>
      <div className="mb-5">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="divisa dominicana"
        >
          Pesos Dominicanos
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="baseExchange"
          data-exchange="DOP"
          type="number"
          placeholder="0.00"
          onChange={async (e) => {
            let currentValue = e.target.value;
            let value = await getExchange(currentValue, ["DOP", "EUR"]);
            setCurrentExchange(value.amountExchange);
            setBaseCurrent(currentValue);
          }}
          value={baseCurrent}
        />
      </div>
      <div className="mb-10">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Euro
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="currentExchange"
          type="number"
          data-exchange="EUR"
          placeholder="0.00"
          onChange={async (e) => {
            let currentValue = e.target.value;
            let value = await getExchange(currentValue, ["EUR", "DOP"]);
            setBaseCurrent(value.amountExchange);
            setCurrentExchange(currentValue);
          }}
          value={currentExchange}
        />
      </div>
      <button>Convertir divisas</button>
    </div>
  );
};

export default MoneyConverter;
