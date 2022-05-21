import React from 'react'

function ResultTable() {
  return (
    <div className='h-auto bg-white rounded'>
        <div className='flex p-2'>
            <div className='p-1 mr-5'>
                <input className='mr-1' type="radio" id="delivery_cost" name="result_table" value="1" />
                <label className='' for="delivery_cost">Delievery Cost</label>
            </div>
            <div className='p-1'>
                <input className='mr-1' type="radio" id="possible_routes" name="result_table" value="2" />
                <label for="possible_routes">Number of possible delivery routes</label>
            </div>
        </div>
        <div className='p-2'>
            <table className='min-w-full border-t border-b border-gray-600 text-left'>
                <thead className=''>
                    <tr>
                        <th className='p-2 w-2/3 border border-gray-600'>Input</th>
                        <th className='p-2 w-1/3 border border-gray-600'>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                    <tr>
                        <td className='p-2 w-2/3 border border-gray-600'>January</td>
                        <td className='p-2 w-1/3 border border-gray-600'>$100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ResultTable