import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}




export const AppointmentData=[

  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 2,
    "patientId": "UUID of patient",
    "patientName": "Akash",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Scheduled",
    "notes": ""
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Ravi",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "18/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "David",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "19/11/2021",
    "time": "12PM IST",
    "status": "Scheduled",
    "notes": ""
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },{
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  {
    "id": 1,
    "patientId": "UUID of patient",
    "patientName": "Chaitanya",
    "physicianId": "UUID of physician",
    "physicianName": "Samuel",
    "appointmentId": "CtAppointment001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Please drink water on regular basis"
  },
  

]



