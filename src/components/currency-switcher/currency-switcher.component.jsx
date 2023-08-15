import { useContext } from "react";
import "./currency-switcher.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CurrencySwitcher = () => {
  const currencyArray = [
    "EUR",
    "USD",
    "GBP",
    "AED",
    "AUD",
    "BGN",
    "CAD",
    "CHF",
    "CZK",
    "DKK",
    "HKD",
    "HUF",
    "ILS",
    "ISK",
    "JPY",
    "MXN",
    "NOK",
    "NZD",
    "PLN",
    "QAR",
    "RON",
    "SAR",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "ZAR",
  ];
  const { setCurrency } = useContext(CartContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="currency-switcher-container">
      <select onChange={handleCurrencyChange} name="currencies">
        {currencyArray.map((currency, idx) => {
          return (
            <option key={idx} value={currency}>
              {currency}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencySwitcher;
