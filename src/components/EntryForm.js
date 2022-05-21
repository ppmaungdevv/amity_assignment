import React from 'react'

function EntryForm(props) {
    const { cities } = props
    const select_box_class_name = 'form-select appearance-none w-2/3 block px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
    console.log(cities)
  return (
    <div className="h-1/5 p-2 text-center items-center flex">
        <div className='flex-1'>
            <div className='flex justify-center w-full'>
                <select className={select_box_class_name} name="cars" id="cars">
                {/* <select className='' name="cars" id="cars"> */}
                    <option defaultValue className='text-slate-400'>Select start city...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <div className='flex-1'>
            <div className='flex justify-center w-full'>
                <select className={select_box_class_name} name="cars" id="cars">
                {/* <select className='' name="cars" id="cars"> */}
                    <option defaultValue className='text-slate-400'>Select end city...</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default EntryForm