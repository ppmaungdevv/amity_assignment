import './App.css';
import EntryForm from './components/EntryForm';
import ResultTable from './components/ResultTable';
import { calculate } from './helpers/calculate';
import { av_routes, cities } from './helpers/providedData'

function App() {
  // console.log(av_routes)
  calculate()
  return (
    <div className="p-2 bg-slate-100 min-h-screen">
      <h2 className='text-center text-3xl p-2'>Amity Assignment</h2>
      <EntryForm cities={cities} />
      <ResultTable />
    </div>
  );
}

export default App;
