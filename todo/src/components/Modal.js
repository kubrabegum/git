import React from 'react'

export const Modal = () => {
  return (
  
    <>
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

          <div className="modal-content py-4 text-left px-6">
            <div className="modal-header flex justify-between border-b-2 border-gray-300">
              <h4 className="modal-title font-bold">Add Task</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="taskname">
                  Your Task
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskname" type="text" name="taskname" placeholder="Enter a task" required />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="deadline">
                  Deadline
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="deadline" type="datetime-local" name="deadline" required />
              </div>
            </div>

            <div className="modal-footer flex justify-center">
              <button className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" data-toggle="modal" data-target="#addtask">
          Add Task
        </button>
      </div>
    </>


  )
}
