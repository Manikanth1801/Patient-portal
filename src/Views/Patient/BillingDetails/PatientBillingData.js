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
    "billingAmount": "500",
    "bllingStatus": false,
    "transactionId": "Tid 01"
  },
  {
    "id":2,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "800",
    "bllingStatus": false,
    "transactionId": "Tid 02"
  },
  {
    "id":3,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "Tid 03"
  },
  {
    "id":4,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "800",
    "bllingStatus": false,
    "transactionId": "Tid 02"
  },
  {
    "id":5,
    "userI5d": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "Tid 03"
  },
  {
    "id":6,
    "userId": 2,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "800",
    "bllingStatus": false,
    "transactionId": "Tid 02"
  },
  {
    "id":7,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "Tid 03"
  },
  {
    "id":8,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "Tid 03"
  },
  {
    "id":9,
    "userId": 3,
    "uuid": "",
    "userName":"Siddharth",
    "billingType":"CT scan",
    "billingDate":"17-08-2021",
    "billingAmount": "600",
    "bllingStatus": false,
    "transactionId": "Tid 03"
  }
]