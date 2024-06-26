import React from 'react';

const CalculatedWage = ({netWage}) => {
  const formatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    currencyDisplay: 'narrowSymbol', // Use narrow symbol for currency display
  });
  let formattedWage = formatter.format(netWage);
  return (
    <>
        <h2 className="text-2xl text-blue-500 font-bold">Nettó bér</h2>
        <div className="bg-blue-600 text-white p-4 rounded-lg mt-4">
        <p className="text-xl">{formattedWage}</p>
        </div>
    </>
  );
}

export default CalculatedWage;
