import './App.css';
import EntryForm from './components/EntryForm';
import ResultTable from './components/ResultTable';
import { calculate_cost, calculate_routes } from './helpers/calculate';
import { cities } from './helpers/providedData'
import React, { useState } from 'react';

function App() {
  const [data, set_data] = useState({})
  const [table, set_table] = useState(1)
  const calculate_delivery_cost = (cities) => {
    set_data(calculate_cost(cities))
  }
  const calculate_possible_routes = (from, to) => {
    set_data(calculate_routes(from, to))
  }
  const toggle_table = (event) => {
    set_table(event.target.value)
    set_data({})
  }
  return (
    <div className="p-2 bg-slate-100 min-h-screen">
      <h2 className='text-center text-3xl p-2'>Amity Assignment</h2>
      <div className='flex p-2' onChange={toggle_table}>
          <div className='p-1 mr-5'>
              <input className='mr-1' defaultChecked type="radio" id="delivery_cost" name="result_table" value="1" />
              <label className='' htmlFor="delivery_cost">Delivery Cost</label>
          </div>
          <div className='p-1'>
              <input className='mr-1' type="radio" id="possible_routes" name="result_table" value="2" />
              <label htmlFor="possible_routes">Number of possible delivery routes</label>
          </div>
      </div>
      <div className='h-auto bg-white rounded'>
        <EntryForm input_type={table} cities={cities} calculate_cost={calculate_delivery_cost} calculate_routes={calculate_possible_routes} />
        <ResultTable table={table} data={data} cities={cities} />
      </div>
    </div>
  );
}

export default App;
