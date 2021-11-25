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
    "patientId": "PatCh001",
    "patientName": "Chaitanya",
    "physicianId": "PhyMS001",
    "physicianName": "Dr.Mathew Samuel",
    "appointmentId": "CTApp001",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/11/2021",
    "time": "12PM IST",
    "status": "Completed",
    "notes": "Intake Captopril (Capoten) Enalapril (Vasotec) Fosinopril, 2 times a day for a week."
  },
  {
    "id": 2,
    "patientId": "PatCh001",
    "patientName": "Chaitanya",
    "physicianId": "PhyMS001",
    "physicianName": "Dr.Mathew Samuel",
    "appointmentId": "CtApp008",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/15/2021",
    "time": "2PM IST",
    "status": "Completed",
    "notes": "Continue with Captopril (Capoten) till next Consultation."
  },
  {
    "id": 1,
    "patientId": "PatCh001",
    "patientName": "Chaitanya",
    "physicianId": "PhyMS001",
    "physicianName": "Dr.Mathew Samuel",
    "appointmentId": "CtApp011",
    "specilization": "Cardiology",
    "dateOfAppointment": "10/28/2021",
    "time": "3PM IST",
    "status": "Completed",
    "notes": "Please take ECG scan. Avoid alcohol for atleast 6 months."
  },


  {
    "id": 2,
    "patientId": "PatCh001",
    "patientName": "Chaitanya",
    "physicianId": "PhyMS001",
    "physicianName": "Dr.Mathew Samuel",
    "appointmentId": "CtApp044",
    "specilization": "Cardiology",
    "dateOfAppointment": "11/28/2021",
    "time": "4PM IST",
    "status": "Scheduled",
    "notes": "NA"
  },

  
]



