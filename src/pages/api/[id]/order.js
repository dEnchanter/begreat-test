// pages/api/yCABZdRcg1OCCKpuAad6MP5l4MH2/order.js

export default function handler(req, res) {
    const { session_id } = req.query;
    // Implement your logic for handling the API request with the session_id parameter
    // You can access the session_id parameter using req.query.session_id
  
    // Return the desired response to the client
    res.status(200).json({ message: 'Success' });
  }
  