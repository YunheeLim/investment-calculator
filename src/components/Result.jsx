import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result(props) {

  let results = calculateInvestmentResults({
    initialInvestment: Number(props.initial_investment),
    annualInvestment: Number(props.annual_investment),
    expectedReturn: Number(props.expected_return),
    duration: Number(props.duration),
  });

  let total_interest = 0;
  
  return (
    <div id="result">
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest &#40;Year&#41;</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            total_interest += result.interest;
            return (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(total_interest)}</td>
                <td>{formatter.format(result.valueEndOfYear - total_interest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}