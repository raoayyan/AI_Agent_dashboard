"use client"
import React from "react";
import BarChart from "@/container/barchart/chart";
import Header from "@/container/header/header";
import { useState,useEffect } from "react";



interface CallData {
  call_handle_by: string;
  callId:string;
  taskCompleted:boolean;
  salesConversion:boolean
}

const Dashboard = () => {
  // Sample data - replace with your actual data
  const [data,setData] = useState<CallData[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [calldata,setCallData] = useState<any[]>([]);
// useEffect (()=>{
//   async function GetData(){
//     try {
     
//       const response = await fetch("you api gateay eng point",{
//         method: 'GET',
//       });
//       if (!response.ok) { // Check for successful response
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const res = await response.json();
//       setData(res);
//       // Process and display the data
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
//   }
//   GetData();
// },[count])

async function GeneareRandonCallData(){
  try {
    setLoading(true);
    const response = await fetch("/api/getData",{
      method: 'POST',
      // mode: 'no-cors'
    }) .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setCallData(prevData => [...prevData, data]);
    });;
    
    
    // If POST is successful, increment the count to trigger the re-fetch
    setCount(prevCount => prevCount + 1);
} catch (error:any) {
    console.error('Error fetching data:', error.message);
}
finally {
  setLoading(false); // Set loading back to false after the request completes
}
}
console.log("this calldata1",calldata)
  
  //use with lambda function
  //const totalCalls = data.length;
//   const AIhandle = data.filter(e => e.call_handle_by === "AI").length;
//   const humanhandle = data.filter(e => e.call_handle_by === "human").length;
//   const AIhandlesales = data.filter(e => e.call_handle_by === "AI" && e.salesConversion===true).length;
//   const AIhandletask = data.filter(e => e.call_handle_by === "AI" && e.taskCompleted===true).length;
//   const overAIhandlsuccess = data.filter(e => e.call_handle_by === "AI" && e.taskCompleted===true && e.salesConversion===true).length;
  

//hard coded 
const totalCalls = calldata.length;
const AIhandle = calldata.filter(e => e.call_handle_by === "AI Agent").length;
const humanhandle = calldata.filter(e => e.call_handle_by === "Human Agent").length;
const AIhandlesales =calldata.filter(e => e.call_handle_by === "AI Agent" && e.salesConversion===true).length;
const AIhandletask = calldata.filter(e => e.call_handle_by === "AI Agent" && e.taskCompleted===true).length;
const overAIhandlsuccess = calldata.filter(e => e.call_handle_by === "AI Agent" && e.taskCompleted===true && e.salesConversion===true).length;
const aISalesPerformance = ((AIhandlesales/AIhandle)*100).toFixed(0)
const aiTaskSuccess = ((AIhandletask/AIhandle)*100).toFixed(0)
const overAllAiPerformance = ((Number(overAIhandlsuccess) / Number(AIhandle)) * 100).toFixed(0);
const AIcallcuration = calldata.filter(e => e.call_handle_by === "AI Agent")
const totalDuration = AIcallcuration.reduce((acc, cur) => acc + cur.duration, 0);
const avgDuration = (totalDuration/AIhandle).toFixed(2)
  // const callData = [
  //   {
  //     callId: "CALL001",
  //     taskCompleted: true,
  //     salesConversion: true,
  //     call_handle_by: "AI Agent",
  //   },
  //   {
  //     callId: "CALL002",
  //     taskCompleted: false,
  //     salesConversion: false,
  //     call_handle_by: "Human Agent",
  //   },
  //   {
  //     callId: "CALL003",
  //     taskCompleted: true,
  //     salesConversion: true,
  //     call_handle_by: "AI Agent",
  //   },
  //   {
  //     callId: "CALL004",
  //     taskCompleted: false,
  //     salesConversion: false,
  //     call_handle_by: "Human Agent",
  //   },
  //   {
  //     callId: "CALL005",
  //     taskCompleted: true,
  //     salesConversion: true,
  //     call_handle_by: "AI Agent",
  //   },
  //   {
  //     callId: "CALL006",
  //     taskCompleted: false,
  //     salesConversion: false,
  //     call_handle_by: "Human Agent",
  //   },
  //   {
  //     callId: "CALL007",
  //     taskCompleted: true,
  //     salesConversion: true,
  //     call_handle_by: "AI Agent",
  //   },
  //   {
  //     callId: "CALL008",
  //     taskCompleted: false,
  //     salesConversion: false,
  //     call_handle_by: "Human Agent",
  //   },
  //   {
  //     callId: "CALL009",
  //     taskCompleted: true,
  //     salesConversion: true,
  //     call_handle_by: "AI Agent",
  //   },
  
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8">
     
      <br />
      <div className="flex justify-between items-baseline">
        {" "}
        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          Call Center performance Dashboard
        </h1>
        <button onClick={GeneareRandonCallData} disabled={loading} className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200">
        {loading ? 'Loading...' : 'Make a call'}
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main stats */}
        <div className="lg:col-span-2 sm:col-span-1 bg-gray-700 rounded-xl p-6 text-yellow-200 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Overall Performance</h2>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-5xl font-bold">{totalCalls}</div>
              <div className="text-gray-400">Total Calls</div>
            </div>
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-5xl font-bold">{AIhandle}</div>
              <div className="text-gray-400">Calls Handled by AI</div>
            </div>
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-5xl font-bold">{humanhandle}</div>
              <div className="text-gray-400">Calls Handled by Human</div>
            </div>
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-5xl font-bold">{avgDuration} min</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
          </div>

          {/* AI Performance Circle */}
          {/* <div className="mt-8 flex justify-center">
            <div className="relative">
              <svg className="w-48 h-48">
                <circle
                  className="text-gray-600"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="96"
                  cy="96"
                />
                <circle
                  className="text-blue-400"
                  strokeWidth="10"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * aiPerformance) / 100}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="96"
                  cy="96"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
                
              </div>
            </div>
          </div>
          <div className="text-center mt-2 text-gray-400">
            AI Agent Performance
          </div> */}

          {/* Monthly Performance Bar Chart */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Monthly Performance</h3>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              
                <BarChart
                  month={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                  calls={[65, 59, 80, 81, 56, 55, 40]}
                  title="Monthly Performance"
                />
              
            </div>
          </div>
        </div>

        {/* Smaller stats */}
        <div className="space-y-8 text-yellow-400">
          

          <div className="bg-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Overall performance</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-600"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-yellow-400"
                    strokeWidth="10"
                    strokeDasharray={314}
                    strokeDashoffset={314 - (314 * Number(overAllAiPerformance)) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  {overAllAiPerformance}%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sales Performance</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-600"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-green-400"
                    strokeWidth="10"
                    strokeDasharray={314}
                    strokeDashoffset={314 - (314 * Number(aISalesPerformance)) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  {aISalesPerformance}%
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Task Completion</h3>
            <div className="flex items-center justify-center">
              <div className="relative">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-600"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-yellow-400"
                    strokeWidth="10"
                    strokeDasharray={314}
                    strokeDashoffset={314 - (314 * Number(aiTaskSuccess)) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  {aiTaskSuccess}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call Data Table */}
      <div className="mt-12 bg-gray-700 rounded-xl p-6 shadow-lg overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Recent Call Data</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-3">Call ID</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Task Completed</th>
              <th className="p-3">Sales Conversion</th>
              <th className="p-3">Handled By</th>
            </tr>
          </thead>
          <tbody>
            {calldata.map((call) => (
              <tr
                key={call.callId}
                className="border-b border-gray-600 hover:bg-gray-600 transition-colors"
              >
                <td className="p-3">{call.callId}</td>
                <td className="p-3">{call.duration}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      call.taskCompleted ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {call.taskCompleted ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded ${
                      call.salesConversion ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {call.salesConversion ? "Yes" : "No"}
                  </span>
                </td>
                <td className="p-3">{call.call_handle_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
