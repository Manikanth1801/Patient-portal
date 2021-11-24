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




export const PatientBillingData= [
  {
    "id":1,
    "userId": 1,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "BillTid001"
  },
  {
    "id":2,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"Appointments",
    "billingDate":"15-10-2021",
    "billingAmount": "500",
    "bllingStatus": false,
    "transactionId": "BillTid126"
  },
  {
    "id":3,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"X ray",
    "billingDate":"22-10-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "BillTid190"
  },
  {
    "id":4,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"Appointments",
    "billingDate":"29-10-2021",
    "billingAmount": "500",
    "bllingStatus": false,
    "transactionId": "BillTid201"
  },
  {
    "id":5,
    "userI5d": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"Vital Checkup",
    "billingDate":"17-11-2021",
    "billingAmount": "250",
    "bllingStatus": false,
    "transactionId": "BillTid251"
  },
  {
    "id":6,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"20-11-2021",
    "billingAmount": "800",
    "bllingStatus": false,
    "transactionId": "BillTid273"
  },
  {
    "id":7,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"MRI Scan",
    "billingDate":"20-11-2021",
    "billingAmount": "1500",
    "bllingStatus": false,
    "transactionId": "BillTid276"
  },
  {
    "id":8,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"Others",
    "billingDate":"22-08-2021",
    "billingAmount": "300",
    "bllingStatus": false,
    "transactionId": "BillTid278"
  },
  {
    "id":9,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"Appointments",
    "billingDate":"23-11-2021",
    "billingAmount": "500",
    "bllingStatus": false,
    "transactionId": "BillTid333"
  }
]