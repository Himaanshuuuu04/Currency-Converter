import "./styles.css";
import useCurrencyInfo from "./componenets/hooks/useCurrencyInfo";
import { useState, useEffect } from "react";
import InputBox from "./componenets/InputBox";
export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="container">
      <div className="container-2">
        <form
          className="card"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div>
            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>

          <div>
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              amountDisabled
              selectedCurrency={to}
            />
          </div>
          <div className="btnclass">
            <button className="btn" onClick={swap}>
              Swap
            </button>

            <button type="submit" className="btn">
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
