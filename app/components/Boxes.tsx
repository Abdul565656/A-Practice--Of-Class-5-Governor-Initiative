import React from 'react'

const Boxes = () => {
  return (
    <div>
        <div  className='flex justify-center space-x-4 m-4'>

            {/* Box 1 */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-semibold mb-2">Card 1</h2>
    <p className="text-gray-600">This is my Card 1.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Learn More
    </button>
  </div>
  <br />


          {/* Box 2 */}

          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-semibold mb-2">Card 2</h2>
    <p className="text-gray-600">This is my Card 2.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Learn More
    </button>
  </div>
<br />


         {/* Box 3 */}
         <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-semibold mb-2">Card 3</h2>
    <p className="text-gray-600">This is my  Card 3.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Learn More
    </button>
  </div>
  </div>



       <div className='flex justify-center space-x-6 m-6'>

                    {/* Box 1 */}
       <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border  border-orange-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-semibold mb-2">Card 1</h2>
    <p className="text-gray-600">This is my Card 1.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Learn More
    </button>
  </div>
                    {/* Box 2 */}
  <div className="flex-1 bg-white shadow-lg rounded-lg p-6 text-center border border-orange-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <h2 className="text-xl font-semibold mb-2">Card 2</h2>
    <p className="text-gray-600">This is my Card 2.</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
      Learn More
    </button>
  </div>

       </div>
    </div>
  )
}

export default Boxes