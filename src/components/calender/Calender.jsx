import React, { useEffect, useState } from 'react'
import Calendersub from './Calendersub'

const data = [
  {
    "id": 1,
    "courseTitle": "python",
    "courseStartDate": "2024-07-14",
    "batchNo": "31",
    "courseFee": "31000",
    "courseDuration": "31",
    "classScheduleFrom": "sun",
    "classScheduleTo": "tue",
    "classTimingsFrom": "11:11",
    "classTimingsTo": "02:22",
    "courseTrainerName": "chai",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 2,
    "courseTitle": "python",
    "courseStartDate": "2024-07-24",
    "batchNo": "34",
    "courseFee": "32340",
    "courseDuration": "30",
    "classScheduleFrom": "mon",
    "classScheduleTo": "tue",
    "classTimingsFrom": "12:11",
    "classTimingsTo": "02:32",
    "courseTrainerName": "ajay",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 3,
    "courseTitle": "data science",
    "courseStartDate": "2024-07-15",
    "batchNo": "25",
    "courseFee": "15300",
    "courseDuration": "22",
    "classScheduleFrom": "mon",
    "classScheduleTo": "fri",
    "classTimingsFrom": "1:00",
    "classTimingsTo": "02:00",
    "courseTrainerName": "sanjay",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 4,
    "courseTitle": "data science",
    "courseStartDate": "2024-07-14",
    "batchNo": "21",
    "courseFee": "6540",
    "courseDuration": "14",
    "classScheduleFrom": "sun",
    "classScheduleTo": "wed",
    "classTimingsFrom": "3:11",
    "classTimingsTo": "5:22",
    "courseTrainerName": "bhargav",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 5,
    "courseTitle": "data analytics",
    "courseStartDate": "2024-07-14",
    "batchNo": "19",
    "courseFee": "31000",
    "courseDuration": "27",
    "classScheduleFrom": "tue",
    "classScheduleTo": "sat",
    "classTimingsFrom": "3:31",
    "classTimingsTo": "5:42",
    "courseTrainerName": "ravi",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 6,
    "courseTitle": "data analytics",
    "courseStartDate": "2024-07-14",
    "batchNo": "50",
    "courseFee": "17000",
    "courseDuration": "60",
    "classScheduleFrom": "mon",
    "classScheduleTo": "sat",
    "classTimingsFrom": "7:11",
    "classTimingsTo": "11:22",
    "courseTrainerName": "nitin",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 7,
    "courseTitle": "data analytics",
    "courseStartDate": "2024-08-20",
    "batchNo": "55",
    "courseFee": "13600",
    "courseDuration": "40",
    "classScheduleFrom": "wed",
    "classScheduleTo": "sat",
    "classTimingsFrom": "7:11",
    "classTimingsTo": "11:22",
    "courseTrainerName": "shiva",
    "trainerQuali":"b.tech",
    "trainerRole":"data scientist"
  },
  {
    "id": 8,
    "courseTitle": "python",
    "courseStartDate": "2024-08-1",
    "batchNo": "38",
    "courseFee": "30000",
    "courseDuration": "60",
    "classScheduleFrom": "wed",
    "classScheduleTo": "sat",
    "classTimingsFrom": "5:11",
    "classTimingsTo": "8:22",
    "courseTrainerName": "yash",
    "trainerQuali":"b.tech",
    "trainerRole":"senior web developer"
  },
]


const Calender = () => {
  const [groupedData, setGroup] = useState(data)

  useEffect(() => {
    const reducedData = [...groupedData].reduce((acc, item) => {
      // Extract the category as the key
      const key = item.courseTitle;
      // Initialize the group if it doesn't exist
      if (!acc[key]) {
        acc[key] = [];
      }
      // Push the item to the appropriate group
      acc[key].push(item);
      return acc;
    }, {});
    setGroup(reducedData)
  }, [data])
  
  const courseList = Object.keys(groupedData)
  console.log('from calender.jsx groupedData',groupedData)
  return (
    <div>
      {courseList.map((course)=>(
        <div key={course}>
          <Calendersub course={course} table={groupedData[course]}/>
        </div>
      ))}
    </div>
  )
}

export default Calender