import React, {useState} from 'react'

function EntryForm(props) {
    const { cities, calculate_cost, calculate_routes, input_type } = props
    const select_box_class_name = 'form-select appearance-none w-2/3 block px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
    const [selected_cities, set_selected_cities] = useState([])
    const [from, set_from] = useState('')
    const [to, set_to] = useState('')

    const check_selected = (event) => {
        let chk_value = event.target.value
        if (event.target.checked && !selected_cities.includes(chk_value)) {
            set_selected_cities([...selected_cities, event.target.value])
        }
        if (!event.target.checked && selected_cities.includes(chk_value)) {
            let index_of_uncheked = selected_cities.indexOf(chk_value)
            selected_cities.splice(index_of_uncheked, 1)
            set_selected_cities([...selected_cities])
        }
    }

    const on_from_change = (event) => set_from(event.target.value)
    const on_to_change = (event) => set_to(event.target.value)

  return (
    <div className="h-1/5 p-2 text-center items-center flex">
        {
            input_type === 1 
            ?   
                <>
                    <div className='flex w-1/3 text-left' onChange={check_selected}>
                        {
                            cities.map((city,index) => (
                                <React.Fragment key={index}>
                                    <span className='p-2'>
                                        <input className='mr-1' type="checkbox" value={city} id={city} name="city" /> 
                                        <label htmlFor={city}>{city}</label>
                                    </span>
                                </React.Fragment>
                            ))
                        }
                    </div>
                    <button className='ml-2.5 inline-block bg-green-600 px-4 py-2 leading-tight shadow-md rounded-md text-white font-medium text-sm uppercase' onClick={() => calculate_cost(selected_cities)}>Submit</button>
                </>
            : 
                <React.Fragment>
                    <div className='flex-1'>
                        <div className='flex justify-center w-full'>
                            <select className={select_box_class_name} name="from" id="from" onChange={on_from_change}>
                                <option defaultValue className='text-slate-400'>Select start city...</option>
                                {
                                    cities.map((city,index) => (
                                        <React.Fragment key={index}>
                                            <option value={city}>{city}</option>
                                        </React.Fragment>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-center w-full'>
                            <select className={select_box_class_name} name="to" id="to" onChange={on_to_change}>
                                <option defaultValue className='text-slate-400'>Select end city...</option>
                                {
                                    cities.map((city,index) => (
                                        <React.Fragment key={index}>
                                            <option value={city}>{city}</option>
                                        </React.Fragment>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex-1 text-left'>
                        <button className='ml-2.5 inline-block bg-sky-600 px-4 py-2 leading-tight shadow-md rounded-md text-white font-medium text-sm uppercase' onClick={() => calculate_routes(from, to)}>Submit</button>
                    </div>

                </React.Fragment>
        }
    </div>
  )
}

export default EntryForm