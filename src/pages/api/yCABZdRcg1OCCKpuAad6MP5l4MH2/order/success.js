// pages/api/redirect.js

import { toast } from "react-hot-toast";

export default async (req, res) => {
  toast.success('Payment Successful')
  console.log(res,req)
   const redirectUrl = '/dashboard';

  // Set the appropriate status code and headers for a redirect
  res.writeHead(302, {
    Location: redirectUrl,
  });

  // Send an empty response body
  res.end();
};
