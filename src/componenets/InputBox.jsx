import { useId } from "react";
export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency,
  amountDisabled = false,
}) {
  const id = useId();

  return (
    <div className="sub-container">
      <div className="input-group">
        <div className="submit-button left">
          <span>{label.toUpperCase()}</span>
        </div>

        <input
          id={id}
          pattern="\d"
          className="input-field"
          name="text"
          type="number"
          placeholder={amount}
          value={amount.toFixed(2)}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />

        <select
          className="submit-button"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              <span> {currency.toUpperCase()}</span>
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
