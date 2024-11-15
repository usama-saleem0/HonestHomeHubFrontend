// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const MyChart = () => {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const data = {
//             labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Days of the week
//             datasets: [
//                 {
//                     label: 'Cleaning',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [100, 200, 150, 250, 180, 220, 300] // Sample cleaning data for each day
//                 },
//                 {
//                     label: 'HVAC',
//                     backgroundColor: '#E5E5EF',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1,
//                     data: [120, 210, 160, 280, 190, 230, 320] // Sample heating data for each day
//                 },
//                 {
//                     label: 'Landscaping',
//                     backgroundColor: '#002758',
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     borderWidth: 1,
//                     data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                 }
//                 ,
//                 {
//                     label: 'Plumbing',
//                     backgroundColor: '#01BAF2',
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     borderWidth: 1,
//                     data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                 }
//                 ,
//                 {
//                     label: 'Remodeling',
//                     backgroundColor: 'yellow',
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     borderWidth: 1,
//                     data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                 }
//                 ,
//                 {
//                     label: 'Fencing',
//                     backgroundColor: 'red',
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     borderWidth: 1,
//                     data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                 }
             
//             ]
//         };

//         const config = {
//             type: 'bar',
//             labels:['Money'],
//             data: data,
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true // Start y-axis from zero
//                     }
//                 }
//             }
//         };

//         const myChart = new Chart(chartRef.current, config);

//         return () => myChart.destroy(); // Cleanup
//     }, []);

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;



// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const MyChart = () => {
//     const chartRef = useRef(null);

//     useEffect(() => {
//         const data = {
//             labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // Days of the week
//             datasets: [
//                 {
//                                         label: 'Cleaning',
//                                         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                                         borderColor: 'rgba(255, 99, 132, 1)',
//                                         borderWidth: 1,
//                                         data: [100, 200, 150, 250, 180, 220, 300] // Sample cleaning data for each day
//                                     },
//                                     {
//                                         label: 'HVAC',
//                                         backgroundColor: '#E5E5EF',
//                                         borderColor: 'rgba(54, 162, 235, 1)',
//                                         borderWidth: 1,
//                                         data: [120, 210, 160, 280, 190, 230, 320] // Sample heating data for each day
//                                     },
//                                     {
//                                         label: 'Landscaping',
//                                         backgroundColor: '#002758',
//                                         borderColor: 'rgba(255, 206, 86, 1)',
//                                         borderWidth: 1,
//                                         data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                                     }
//                                     ,
//                                     {
//                                         label: 'Plumbing',
//                                         backgroundColor: '#01BAF2',
//                                         borderColor: 'rgba(255, 206, 86, 1)',
//                                         borderWidth: 1,
//                                         data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                                     }
//                                     ,
//                                     {
//                                         label: 'Remodeling',
//                                         backgroundColor: 'yellow',
//                                         borderColor: 'rgba(255, 206, 86, 1)',
//                                         borderWidth: 1,
//                                         data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                                     }
//                                     ,
//                                     {
//                                         label: 'Fencing',
//                                         backgroundColor: 'red',
//                                         borderColor: 'rgba(255, 206, 86, 1)',
//                                         borderWidth: 1,
//                                         data: [90, 180, 130, 240, 170, 200, 280] // Sample landscaping data for each day
//                                     }
//             ]
//         };

//         const config = {
//             type: 'bar',
//             data: data,
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Start y-axis from zero
//                         title: {
//                             display: true,
//                             text: 'Income' // Y-axis label
//                         }
//                     }
//                 }
//             }
//         };

//         const myChart = new Chart(chartRef.current, config);

//         return () => myChart.destroy(); // Cleanup
//     }, []);

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;









// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = ({ timeframe }) => {
//     const chartRef = useRef(null);


//     axios.get(`${baseURL}/getallreviews`)
//             .then((response)=>{

//                 console.log("REVIEWS",response.data)




//             })
//             .catch((error)=>{
//                 console.log(error)
//             })




//     useEffect(() => {
//         // Generate data based on the selected timeframe
//         let data;
//         if (timeframe === 'yearly') {
//             data = generateYearlyData();
//         } else if (timeframe === 'monthly') {
//             data = generateMonthlyData();
//         } else if (timeframe === 'weekly') {
//             data = generateWeeklyData();
//         }

//         const config = {
//             type: 'bar',
//             data: data,
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Start y-axis from zero
//                         title: {
//                             display: true,
//                             text: 'Income' // Y-axis label
//                         }
//                     },
//                     x: {
//                         title: {
//                             display: true,
//                             text: 'Date' // X-axis label
//                         }
//                     }
//                 }
//             }
//         };

//         const myChart = new Chart(chartRef.current, config);

//         return () => myChart.destroy(); // Cleanup
//     }, [timeframe]); // Re-run effect when timeframe changes

//     // Function to generate yearly data
//     const generateYearlyData = () => {
//         return {
//             labels: ['2023', '2024'], // Years
//             datasets: [
//                 {
//                     label: 'Cleaning',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Landscaping',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Fencing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'HVAC',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Plumbing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Remodeling',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 }
//                 // Add other datasets for different services if needed
//             ]
//         };
//     };

//     // Function to generate monthly data
//     const generateMonthlyData = () => {
//         return {
//             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
//             datasets: [
//                 {
//                     label: 'Cleaning',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Landscaping',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Fencing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'HVAC',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Plumbing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Remodeling',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 }
//                 // Add other datasets for different services if needed
//             ]
//         };
//     };

//     // Function to generate weekly data
//     const generateWeeklyData = () => {
//         const currentDate = new Date();
//         const weekStart = new Date(currentDate);
//         weekStart.setDate(currentDate.getDate() - currentDate.getDay());
//         const labels = [];
//         const data = [];
//         for (let i = 0; i < 7; i++) {
//             const date = new Date(weekStart);
//             date.setDate(weekStart.getDate() + i);
//             labels.push(date.toDateString());
//             data.push(Math.floor(Math.random() * 200) + 100); // Sample data for each day
//         }
//         return {
//             labels: labels, // Days of the week with dates
//             datasets: [
//                 {
//                     label: 'Cleaning',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Landscaping',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Fencing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'HVAC',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Plumbing',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 },
//                 {
//                     label: 'Remodeling',
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1,
//                     data: [2000, 2500] // Sample cleaning data for each year
//                 }
//                 // Add other datasets for different services if needed
//             ]
//         };
//     };

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;











// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = ({ timeframe }) => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         axios.get(`${baseURL}/getallreviews`)
//             .then((response) => {
//                 console.log("REVIEWS", response.data);
//                 // Process the response data to format it for the chart
//                 const formattedData = processResponseData(response.data.Reviews);
//                 setData(formattedData);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true, // Start y-axis from zero
//                             title: {
//                                 display: true,
//                                 text: 'Income' // Y-axis label
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Date' // X-axis label
//                             }
//                         }
//                     }
//                 }
//             };

//             const myChart = new Chart(chartRef.current, config);

//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);

//     const processResponseData = (responseData) => {
//         // Process the response data to extract dates and costs for the selected service
//         const filteredData = responseData.filter(item => item.selected_query === 'Plumbing');
//         const dates = filteredData.map(item => new Date(item.createdAt).toDateString());
//         const costs = filteredData.map(item => parseInt(item.cost));





//         const filteredData1 = responseData.filter(item => item.selected_query === 'Landscaping');
//         const dates1 = filteredData1.map(item => new Date(item.createdAt).toDateString());
//         const costs1 = filteredData1.map(item => parseInt(item.cost));




//         return {
//             labels: dates,
//             datasets: [{
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: costs
//             }],


//             labels: dates1,
//             datasets: [{
//                 label: 'Landscaping Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: costs1
//             }]
//         };
//     };

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;





// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = ({ timeframe }) => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetchDataFromBackend();
//     }, []);

//     const fetchDataFromBackend = async () => {
//         try {
//             const response = await axios.get(`${baseURL}/getallreviews`);
//             const formattedData = processResponseData(response.data.Reviews);
//             setData(formattedData);
//         } catch (error) {
//             console.error('Error fetching data from the backend:', error);
//         }
//     };

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: 'Income'
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Date'
//                             }
//                         }
//                     }
//                 }
//             };

//             const myChart = new Chart(chartRef.current, config);

//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);

//     const processResponseData = (responseData) => {
//         const weekStartDate = getWeekStartDate(new Date()); // Get the start date of the current week

//         // Initialize arrays to store dates and costs for each day of the current week
//         const dates = [];
//         const costs = [];

//         // Loop through the response data and extract dates and costs for the current week
//         responseData.forEach(item => {
//             const createdAt = new Date(item.createdAt);
//             if (createdAt >= weekStartDate) {
//                 dates.push(createdAt.toDateString());
//                 costs.push(parseInt(item.cost));
//             }
//         });

//         return {
//             labels: dates,
//             datasets: [{
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: costs
//             }]
//         };
//     };

//     // Function to get the start date of the current week
//     const getWeekStartDate = (date) => {
//         const dayOfWeek = date.getDay();
//         const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Sunday
//         return new Date(date.setDate(diff));
//     };

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;










// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = () => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         axios.get(`${baseURL}/getallreviews`)
//             .then((response) => {
//                 console.log("REVIEWS", response.data);
//                 // Process the response data to format it for the chart
//                 const formattedData = processResponseData(response.data.Reviews);
//                 setData(formattedData);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: {
//                     labels: [...data.landscapingData.labels, ...data.plumbingData.labels],
//                     datasets: [...data.landscapingData.datasets, ...data.plumbingData.datasets]
//                 },
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true, // Start y-axis from zero
//                             title: {
//                                 display: true,
//                                 text: 'Cost' // Y-axis label
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Date' // X-axis label
//                             }
//                         }
//                     }
//                 }
//             };
    
//             const myChart = new Chart(chartRef.current, config);
    
//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);
    

//     const processResponseData = (responseData) => {
//         // Initialize arrays to hold data for each service type
//         let plumbingData = {
//             labels: [],
//             datasets: [{
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: []
//             }]
//         };
        
//         let landscapingData = {
//             labels: [],
//             datasets: [{
//                 label: 'Landscaping Cost',
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//                 data: []
//             }]
//         };

//         // Process the response data to extract dates and costs for each service type
//         responseData.forEach(item => {
//             if (item.selected_query === 'Plumbing') {
//                 plumbingData.labels.push(new Date(item.createdAt).toDateString());
//                 plumbingData.datasets[0].data.push(parseInt(item.cost));
//             } else if (item.selected_query === 'Landscaping') {
//                 landscapingData.labels.push(new Date(item.createdAt).toDateString());
//                 landscapingData.datasets[0].data.push(parseInt(item.cost));
//             }
//         });


//             // Log labels and data points for debugging
//     console.log("Plumbing Labels:", plumbingData.labels);
//     console.log("Plumbing Data:", plumbingData.datasets[0].data);

//     console.log("Landscaping Labels:", landscapingData.labels);
//     console.log("Landscaping Data:", landscapingData.datasets[0].data);

//         // Return data for all service types
//         return {
//             plumbingData,
//             landscapingData


            
//         };
//     };

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;










// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = ({ timeframe }) => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         axios.get(`${baseURL}/getallreviews`)
//             .then((response) => {
//                 console.log("REVIEWS", response.data);
//                 // Process the response data to format it for the chart
//                 const formattedData = processResponseData(response.data.Reviews);
//                 setData(formattedData);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true, // Start y-axis from zero
//                             title: {
//                                 display: true,
//                                 text: 'Income' // Y-axis label
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Date' // X-axis label
//                             }
//                         }
//                     }
//                 }
//             };

//             const myChart = new Chart(chartRef.current, config);

//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);

//     const processResponseData = (responseData) => {
//         // Initialize an object to store data for each service
//         const serviceData = {};
    
//         // Process the response data to extract dates and costs for each service
//         responseData.forEach(item => {
//             const { selected_query, createdAt, cost } = item;
//             const date = new Date(createdAt); // Parse createdAt into a Date object
//             const formattedDate = date.toDateString(); // Use Date's toDateString() method to format the date
//             const service = selected_query;
    
//             // If serviceData object doesn't have an array for the current service, create one
//             if (!serviceData[service]) {
//                 serviceData[service] = {
//                     labels: [],
//                     data: []
//                 };
//             }
    
//             // Push the formatted date and cost to the corresponding service's data array
//             serviceData[service].labels.push(formattedDate);
//             serviceData[service].data.push(parseInt(cost));
//         });
    
//         // Convert serviceData into datasets array for Chart.js format
//         const datasets = Object.keys(serviceData).map(service => ({
//             label: service,
//             backgroundColor: getRandomColor(),
//             borderColor: getRandomColor(),
//             borderWidth: 1,
//             data: serviceData[service].data
//         }));
    
//         return {
//             labels: serviceData[Object.keys(serviceData)[0]].labels, // Use labels from the first service
//             datasets: datasets
//         };
//     };

//     // Function to generate a random color
//     const getRandomColor = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     };

//     return <canvas ref={chartRef} />;
// };

// export default MyChart;






















// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = () => {
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);
//     const [timeRange, setTimeRange] = useState('weekly');
//     const [myChart, setMyChart] = useState(null); // To store the chart instance

//     useEffect(() => {
//         fetchData();
//     }, [timeRange]);

//     useEffect(() => {
//         if (chartData) {
//             renderChart();
//         }
//     }, [chartData]);

//     const fetchData = () => {
//         axios.get(`${baseURL}/getallreviews`)
//             .then((response) => {
//                 console.log("REVIEWS", response.data);
//                 // Process the response data to format it for the chart
//                 const formattedData = processResponseData(response.data.Reviews, timeRange);
//                 setChartData(formattedData);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     const renderChart = () => {
//         destroyChart(); // Destroy previous chart instance if exists

//         const config = {
//             type: 'bar',
//             data: chartData,
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Start y-axis from zero
//                         title: {
//                             display: true,
//                             text: 'Cost' // Y-axis label
//                         }
//                     },
//                     x: {
//                         title: {
//                             display: true,
//                             text: 'Date' // X-axis label
//                         }
//                     }
//                 }
//             }
//         };

//         const newChartInstance = new Chart(chartRef.current, config);
//         setMyChart(newChartInstance);

//         return () => destroyChart(); // Cleanup
//     };

//     const destroyChart = () => {
//         if (myChart !== null) {
//             myChart.destroy();
//             setMyChart(null);
//         }
//     };

//     const processResponseData = (responseData) => {
//         // Extract dates from the response data
//         const dates = responseData.map(item => new Date(item.createdAt).toDateString());
        
//         // Assuming you have predefined date values for the x-axis
//         const xAxisDates = ['2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05']; // Example dates
        
//         // Initialize arrays to hold data for each date
//         const plumbingData = Array(xAxisDates.length).fill(0);
//         const landscapingData = Array(xAxisDates.length).fill(0);
        
//         // Map the data to corresponding dates
//         responseData.forEach(item => {
//             const dateIndex = xAxisDates.indexOf(new Date(item.createdAt).toISOString().split('T')[0]);
//             if (item.selected_query === 'Plumbing') {
//                 plumbingData[dateIndex] += parseInt(item.cost);
//             } else if (item.selected_query === 'Landscaping') {
//                 landscapingData[dateIndex] += parseInt(item.cost);
//             }
//         });

//         // Create datasets for plumbing and landscaping
//         const datasets = [
//             {
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: plumbingData
//             },
//             {
//                 label: 'Landscaping Cost',
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//                 data: landscapingData
//             }
//         ];

//         return {
//             labels: xAxisDates,
//             datasets: datasets
//         };
//     };


//     const handleButtonClick = (selectedTimeRange) => {
//         setTimeRange(selectedTimeRange);
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={() => handleButtonClick('weekly')}>Weekly</button>
//                 <button onClick={() => handleButtonClick('monthly')}>Monthly</button>
//                 <button onClick={() => handleButtonClick('yearly')}>Yearly</button>
//             </div>
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default MyChart;
















// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = () => {
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState(null);
//     const [timeRange, setTimeRange] = useState('weekly');
//     const [myChart, setMyChart] = useState(null); // To store the chart instance

//     useEffect(() => {
//         fetchData();
//     }, [timeRange]);

//     useEffect(() => {
//         if (chartData) {
//             renderChart();
//         }
//     }, [chartData]);

//     const fetchData = () => {
//         axios.get(`${baseURL}/getallreviews`)
//             .then((response) => {
//                 console.log("REVIEWS", response.data);
//                 // Process the response data to format it for the chart
//                 const formattedData = processResponseData(response.data.Reviews, timeRange);
//                 setChartData(formattedData);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     const renderChart = () => {
//         destroyChart(); // Destroy previous chart instance if exists

//         const config = {
//             type: 'bar',
//             data: chartData,
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true, // Start y-axis from zero
//                         title: {
//                             display: true,
//                             text: 'Cost' // Y-axis label
//                         }
//                     },
//                     x: {
//                         title: {
//                             display: true,
//                             text: 'Date' // X-axis label
//                         },
//                         // Enable scrolling and zooming on the x-axis
//                         // Change mode: 'x' to enable zooming as well
//                         interaction: {
//                             mode: 'x',
//                             intersect: false,
//                         }
//                     }
//                 }
//             }
//         };

//         const newChartInstance = new Chart(chartRef.current, config);
//         setMyChart(newChartInstance);

//         return () => destroyChart(); // Cleanup
//     };

//     const destroyChart = () => {
//         if (myChart !== null) {
//             myChart.destroy();
//             setMyChart(null);
//         }
//     };

//     const processResponseData = (responseData) => {
//         // Extract dates from the response data
//         const dates = responseData.map(item => new Date(item.createdAt).toDateString());
        
//         // Assuming you have predefined date values for the x-axis
//         const xAxisDates = ['2024-04-01', '2024-04-02', '2024-04-03', '2024-04-04', '2024-04-05']; // Example dates
        
//         // Initialize arrays to hold data for each date
//         const plumbingData = Array(xAxisDates.length).fill(0);
//         const landscapingData = Array(xAxisDates.length).fill(0);
        
//         // Map the data to corresponding dates
//         responseData.forEach(item => {
//             const dateIndex = xAxisDates.indexOf(new Date(item.createdAt).toISOString().split('T')[0]);
//             if (item.selected_query === 'Plumbing') {
//                 plumbingData[dateIndex] += parseInt(item.cost);
//             } else if (item.selected_query === 'Landscaping') {
//                 landscapingData[dateIndex] += parseInt(item.cost);
//             }
//         });

//         // Create datasets for plumbing and landscaping
//         const datasets = [
//             {
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: plumbingData
//             },
//             {
//                 label: 'Landscaping Cost',
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//                 data: landscapingData
//             }
//         ];

//         return {
//             labels: xAxisDates,
//             datasets: datasets
//         };
//     };


//     const handleButtonClick = (selectedTimeRange) => {
//         setTimeRange(selectedTimeRange);
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={() => handleButtonClick('weekly')}>Weekly</button>
//                 <button onClick={() => handleButtonClick('monthly')}>Monthly</button>
//                 <button onClick={() => handleButtonClick('yearly')}>Yearly</button>
//             </div>
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default MyChart;

















// ts\







// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = ({ timeframe }) => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);
//     const [currentWeekStartDate, setCurrentWeekStartDate] = useState(getWeekStartDate(new Date()));

//     // Function to get the start date of the current week
//     function getWeekStartDate(date) {
//         const dayOfWeek = date.getDay();
//         const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust for Sunday
//         return new Date(date.setDate(diff));
//     };

//     useEffect(() => {
//         fetchDataFromBackend();
//     }, [currentWeekStartDate]); // Fetch data whenever the current week start date changes

//     const fetchDataFromBackend = async () => {
//         try {
//             const response = await axios.get(`${baseURL}/getallreviews`);
//             const formattedData = processResponseData(response.data.Reviews);
//             setData(formattedData);
//         } catch (error) {
//             console.error('Error fetching data from the backend:', error);
//         }
//     };

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: 'Income'
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Date'
//                             }
//                         }
//                     }
//                 }
//             };

//             const myChart = new Chart(chartRef.current, config);

//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);

//     const processResponseData = (responseData) => {
//         // Initialize arrays to store dates and costs for each day of the current week
//         const dates = [];
//         const costs = [];

//         // Loop through the response data and extract dates and costs for the current week
//         responseData.forEach(item => {
//             const createdAt = new Date(item.createdAt);
//             if (createdAt >= currentWeekStartDate) {
//                 dates.push(createdAt.toDateString());
//                 costs.push(parseInt(item.cost));
//             }
//         });

//         return {
//             labels: dates,
//             datasets: [{
//                 label: 'Plumbing Cost',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: costs
//             }]
//         };
//     };

//     const handlePrevWeek = () => {
//         setCurrentWeekStartDate(prevStartDate => new Date(prevStartDate.getTime() - 7 * 24 * 60 * 60 * 1000));
//     };

//     const handleNextWeek = () => {
//         setCurrentWeekStartDate(prevStartDate => new Date(prevStartDate.getTime() + 7 * 24 * 60 * 60 * 1000));
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={handlePrevWeek}>Previous Week</button>
//                 <button onClick={handleNextWeek}>Next Week</button>
//             </div>
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default MyChart;


// ttstst

// import React, { useEffect, useRef, useState } from 'react';
// import Chart from 'chart.js/auto';
// import axios from 'axios';
// import { baseURL } from '../../config/apiHandle/apiHandle';

// const MyChart = () => {
//     const chartRef = useRef(null);
//     const [data, setData] = useState(null);
//     const [currentMonthStartDate, setCurrentMonthStartDate] = useState(getMonthStartDate(new Date()));

//     // Function to get the start date of the current month
//     function getMonthStartDate(date) {
//         return new Date(date.getFullYear(), date.getMonth(), 1);
//     }

//     useEffect(() => {
//         fetchDataForMonth();
//     }, [currentMonthStartDate]); // Fetch data whenever the current month start date changes

//     const fetchDataForMonth = async () => {
//         try {
//             const response = await axios.get(`${baseURL}/getallreviews`);
//             const formattedData = processResponseData(response.data.Reviews);
//             setData(formattedData);
//         } catch (error) {
//             console.error('Error fetching data from the backend:', error);
//         }
//     };

//     useEffect(() => {
//         if (data) {
//             const config = {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: 'Income'
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Week'
//                             }
//                         }
//                     }
//                 }
//             };

//             const myChart = new Chart(chartRef.current, config);

//             return () => myChart.destroy(); // Cleanup
//         }
//     }, [data]);

//     const processResponseData = (responseData) => {
//         const weekData = [];
//         const labels = [];

//         // Loop through 4 weeks of the month
//         for (let i = 0; i < 4; i++) {
//             const weekStartDate = new Date(currentMonthStartDate);
//             weekStartDate.setDate(weekStartDate.getDate() + (i * 7)); // Move to the start of the week

//             const weekEndDate = new Date(weekStartDate);
//             weekEndDate.setDate(weekEndDate.getDate() + 6); // Move to the end of the week

//             const weekLabel = `${weekStartDate.toLocaleDateString()} - ${weekEndDate.toLocaleDateString()}`;
//             labels.push(weekLabel);

//             const weekDataForChart = [];

//             // Loop through response data and sum up costs for the week for both categories
//             responseData.forEach(item => {
//                 const createdAt = new Date(item.createdAt);
//                 if (createdAt >= weekStartDate && createdAt <= weekEndDate) {
//                     if (item.selected_query === 'Plumbing' || item.selected_query === 'Landscaping') {
//                         weekDataForChart.push(parseInt(item.cost));
//                     }
//                 }
//             });

//             // Calculate total cost for the week
//             const totalCostForWeek = weekDataForChart.reduce((acc, cost) => acc + cost, 0);
//             weekData.push(totalCostForWeek);
//         }

//         return {
//             labels: labels,
//             datasets: [{
//                 label: 'Total Cost (Plumbing & Landscaping)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                 borderColor: 'rgba(255, 99, 132, 1)',
//                 borderWidth: 1,
//                 data: weekData
//             }]
//         };
//     };

//     const handlePrevMonth = () => {
//         const prevMonthStartDate = new Date(currentMonthStartDate);
//         prevMonthStartDate.setMonth(prevMonthStartDate.getMonth() - 1);
//         setCurrentMonthStartDate(prevMonthStartDate);
//     };

//     const handleNextMonth = () => {
//         const nextMonthStartDate = new Date(currentMonthStartDate);
//         nextMonthStartDate.setMonth(nextMonthStartDate.getMonth() + 1);
//         setCurrentMonthStartDate(nextMonthStartDate);
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={handlePrevMonth}>Previous Month</button>
//                 <button onClick={handleNextMonth}>Next Month</button>
//             </div>
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default MyChart;



// tstst




import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { baseURL } from '../../config/apiHandle/apiHandle';
import { BorderAllRounded } from '@mui/icons-material';

const MyChart = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState(null);
    const [currentMonthStartDate, setCurrentMonthStartDate] = useState(getMonthStartDate(new Date()));

    // Function to get the start date of the current month
    function getMonthStartDate(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    useEffect(() => {
        fetchDataForMonth();
    }, [currentMonthStartDate]); // Fetch data whenever the current month start date changes

    const fetchDataForMonth = async () => {
        try {
            const response = await axios.get(`${baseURL}/getallreviews`);
            const formattedData = processResponseData(response.data.Reviews);
            setData(formattedData);
        } catch (error) {
            console.error('Error fetching data from the backend:', error);
        }
    };

    // useEffect(() => {
    //     if (data) {
    //         const config = {
    //             type: 'bar',
    //             data: data,
    //             options: {
    //                 scales: {
    //                     y: {
    //                         beginAtZero: true,
    //                         title: {
    //                             display: true,
    //                             text: 'Income'
    //                         }
    //                     },

                        
    //                     x: {
    //                         title: {
    //                             display: true,
    //                             text: 'Week'
    //                         }
    //                     }
    //                 }
    //             }
    //         };

    //         const myChart = new Chart(chartRef.current, config);

    //         return () => myChart.destroy(); // Cleanup
    //     }
    // }, [data]);


    useEffect(() => {
        if (data) {
            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Income'
                            },
                            grid: {
                                display: false // Hide grid lines for the y-axis
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Week'
                            },
                            grid: {
                                display: false // Hide grid lines for the x-axis
                            }
                        }
                    }
                }
            };
    
            const myChart = new Chart(chartRef.current, config);
    
            return () => myChart.destroy(); // Cleanup
        }
    }, [data]);
    
    const processResponseData = (responseData) => {
        const weekData = [];


        const plumbingWeekData = [];
        const landscapingWeekData = [];

         const HeatingVentilationConditioningWeekData = [];
 
        const WaterHeaterWeekData = [];

        const RoofingWeekData = [];
        const RemodelingWeekData = [];
        const CleaningWeekData = [];
        const FencingWeekData = [];
        const HandymanWeekData = [];
        





        const labels = [];

        // Loop through 4 weeks of the month
        for (let i = 0; i < 4; i++) {
            const weekStartDate = new Date(currentMonthStartDate);
            weekStartDate.setDate(weekStartDate.getDate() + (i * 7)); // Move to the start of the week

            const weekEndDate = new Date(weekStartDate);
            weekEndDate.setDate(weekEndDate.getDate() + 6); // Move to the end of the week

            const weekLabel = `${weekStartDate.toLocaleDateString()} - ${weekEndDate.toLocaleDateString()}`;
            labels.push(weekLabel);

            let plumbingTotal = 0;
            let landscapingTotal = 0;

            let HeatingVentilationConditioning_total = 0;
            let WaterHeater_total = 0;
            let Roofing_total = 0;
            let Remodeling_total = 0;
            let Cleaning_total = 0;
            let Fencing_total = 0;
            let Handyman_total = 0;
            

            // Loop through response data and sum up costs for the week for each category
            responseData.forEach(item => {
                const createdAt = new Date(item.createdAt);
                if (createdAt >= weekStartDate && createdAt <= weekEndDate) {
                    if (item.selected_query === 'Plumbing') {
                        plumbingTotal += parseInt(item.cost);
                    } else if (item.selected_query === 'Landscaping') {
                        landscapingTotal += parseInt(item.cost);
                    }





                    else if (item.selected_query === 'Heating, Ventilation, Air Conditioning') {
                        HeatingVentilationConditioning_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Water Heater') {
                        WaterHeater_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Roofing') {
                        Roofing_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Remodeling') {
                        Remodeling_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Cleaning') {
                        Cleaning_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Fencing') {
                        Fencing_total += parseInt(item.cost);
                    }
                    else if (item.selected_query === 'Handyman') {
                        Handyman_total += parseInt(item.cost);
                    }




                }
            });

            plumbingWeekData.push(plumbingTotal);
            landscapingWeekData.push(landscapingTotal);
            HeatingVentilationConditioningWeekData.push(HeatingVentilationConditioning_total)
            WaterHeaterWeekData.push(WaterHeater_total)
            RoofingWeekData.push(Roofing_total)
            RemodelingWeekData.push(Remodeling_total)
            CleaningWeekData.push(Cleaning_total)
            FencingWeekData.push(Fencing_total)
            HandymanWeekData.push(Handyman_total)



            weekData.push(plumbingTotal + landscapingTotal + HeatingVentilationConditioning_total+WaterHeater_total
            +Roofing_total+Remodeling_total+Cleaning_total+Fencing_total+Handyman_total);
        }

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Plumbing',
                    backgroundColor: '#9FA4A8',
                    borderColor: '#9FA4A8',
                    borderWidth: 1,
                    data: plumbingWeekData,
                    borderRadius:10
                },
                {
                    label: 'Landscaping',
                    backgroundColor: '#335c67',
                    borderColor:  '#335c67',
                    borderWidth: 1,
                    data: landscapingWeekData,
                    borderRadius:10
                }



                ,
                {
                    label: 'HVAC',
                    backgroundColor: '#002758',
                    borderColor: '#002758',
                    borderWidth: 1,
                    borderRadius: 10,
                    
                    data: HeatingVentilationConditioningWeekData
                }
                ,
                {
                    label: 'Water Heater',
                    backgroundColor: '#01BAF2',
                    borderColor: '#01BAF2',
                    borderWidth: 1,
                    data: WaterHeaterWeekData,
                    borderRadius: 10,
                },
                {
                    label: 'Roofing',
                    backgroundColor: '#E5E5EF',
                    borderColor: '#E5E5EF',
                    borderWidth: 1,
                    data: RoofingWeekData,
                    borderRadius:10
                },
                {
                    label: 'Remodeling',
                    backgroundColor: '#656d4a',
                    borderColor:  '#656d4a',
                    borderWidth: 1,
                    data: RemodelingWeekData,
                    borderRadius:10
                },
                {
                    label: 'Cleaning',
                    backgroundColor: '#0d1b2a',
                    borderColor: '#0d1b2a',
                    borderWidth: 1,
                    data: CleaningWeekData,
                    borderRadius:10
                },
                {
                    label: 'Fencing',
                    backgroundColor: '#0077b6',
                    borderColor: '#0077b6',
                    borderWidth: 1,
                    data: FencingWeekData,
                    borderRadius:10
                },
                {
                    label: 'Handyman',
                    backgroundColor: '#c9ada7',
                    borderColor: '#c9ada7',
                    borderWidth: 1,
                    data: HandymanWeekData,
                    borderRadius:10
                }









            ]
        };
    };

    const handlePrevMonth = () => {
        const prevMonthStartDate = new Date(currentMonthStartDate);
        prevMonthStartDate.setMonth(prevMonthStartDate.getMonth() - 1);
        setCurrentMonthStartDate(prevMonthStartDate);
    };

    const handleNextMonth = () => {
        const nextMonthStartDate = new Date(currentMonthStartDate);
        nextMonthStartDate.setMonth(nextMonthStartDate.getMonth() + 1);
        setCurrentMonthStartDate(nextMonthStartDate);
    };

    return (
        <div>
            <div>
                {/* <button onClick={handlePrevMonth}>Previous Month</button>
                <button onClick={handleNextMonth}>Next Month</button> */}
            </div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default MyChart;

