import { useRouter } from 'next/router';
import React from 'react';

const SuccessPage = () => {
  const router = useRouter();
  const { session_id } = router.query;

  // Use the session_id to perform actions on your page
  if (session_id) {
    // Display the session ID or use it for further processing
    console.log('Session ID:', session_id);

    // You can use the session_id to fetch order details from your backend API
    // or perform other actions related to the successful order
    // For example:
    // fetch(`http://localhost:8081/api/yCABZdRcg1OCCKpuAad6MP5l4MH2/order/success?session_id=${session_id}`)
    // .then(response => {
    //   // Process the response and update the page accordingly
    // })
    // .catch(error => {
    //   // Handle error
    // });
  } else {
    // Session ID not found, handle accordingly
    console.error('Session ID not found in URL');
  }

  // Add your JSX code for the success page here
  return (
    <div>
      <h1>Success Page</h1>
      {/* Add your content here */}
    </div>
  );
};

export default SuccessPage;
