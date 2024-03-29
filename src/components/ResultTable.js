import React from 'react'

function ResultTable(props) {
    const {table, data } = props
    const {total, route, route_not_exist} = data
  return (
        <div className='p-2'>
            <table className='min-w-full border-t border-b border-gray-600 text-left'>
                <thead className=''>
                    <tr>
                        <th className='p-2 w-2/3 border border-gray-600'>Input</th>
                        <th className='p-2 w-1/3 border border-gray-600'>Output</th>
                    </tr>
                </thead>
                {
                    JSON.stringify(data) !== '{}' 
                    ? 
                        <tbody>
                            <tr>
                                <td className='p-2 w-2/3 border border-gray-600'>{
                                    table === 1 ?
                                    `the delivery cost for route ${route}` :
                                    `The number of possible delivery routes from ${route}`
                                }</td>
                                <td className='p-2 w-1/3 border border-gray-600'>
                                    {
                                        route_not_exist && total === 0 ?
                                        'No Such Route' :
                                        total
                                    }
                                </td>
                            </tr>
                        </tbody>
                    :
                        <tbody></tbody>
                }
            </table>
        </div>
  )
}

export default ResultTable