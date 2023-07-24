import axios from "axios"
import { useState } from "react"


const Job = () => {
    const [jobs, setJobs] = useState([])
    const handleJob = () => {
        axios.get("http://localhost:8000/api/job")
            .then(res => {
                console.log(res.data)
                setJobs(res.data)
            })
    }


    return <>
        {/* <button onClick={handleJob}>Get Jobs</button>
        {
            jobs.map(job=>{
                return <>
                <h2>Title</h2>
                <p key={job._id}>{job.title}</p>
                <h3>Description</h3>
                <p key={job._id}>{job.description}</p>
                </>
            })
        }
        
        <hr />*/}
        <section class="py-24 lg:pb-36 bg-gray-100 overflow-hidden">
  <div class="container px-4 mx-auto">
    <div class="max-w-xl text-center mx-auto mb-16">
      <h2 class="font-heading mb-5 text-6xl tracking-tighter">Open Positions</h2>
      <p class="text-xl text-gray-600 tracking-tight">Use and re-use tons of responsive sections too a main create the perfect layout. Sections are ready.</p>
    </div>
    <div class="max-w-3xl mx-auto">
      <div class="flex flex-wrap -m-1">
        <div class="w-full p-1">
          <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <h3 class="mb-1 font-semibold tracking-tight">Software Engineer</h3>
                <span class="text-gray-600 tracking-tight">Full Time / Remote</span>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-row justify-center">
                  <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full p-1">
          <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <h3 class="mb-1 font-semibold tracking-tight">Product Designer</h3>
                <span class="text-gray-600 tracking-tight">Full Time / London, UK</span>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-row justify-center">
                  <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full p-1">
          <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <h3 class="mb-1 font-semibold tracking-tight">VP of Marketing</h3>
                <span class="text-gray-600 tracking-tight">Full Time / London, UK</span>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-row justify-center">
                  <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full p-1">
          <a class="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500" href="#">
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <h3 class="mb-1 font-semibold tracking-tight">Graphic Designer</h3>
                <span class="text-gray-600 tracking-tight">Full Time / Melbourne, Australia</span>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-row justify-center">
                  <button class="inline-block mx-auto px-4 py-2 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#">Check Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
     </> 
}
export default Job