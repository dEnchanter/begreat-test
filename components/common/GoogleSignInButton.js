import React, { useEffect } from 'react';

const GoogleSignInButton = ({ onSuccess }) => {
  // Function to handle the credential response from Google One Tap
  const handleCredentialResponse = (response) => {
    // Call the onSuccess callback with the token (response.credential)
    onSuccess(response.credential);
  }

  // Function to initialize Google One Tap API and render the button
  const initGoogleOneTap = () => {
    if (typeof window !== 'undefined') {
      // Check if window object is available (for server-side rendering)
      window.onload = function () {
        if (typeof google !== 'undefined' && google.accounts) {
          // Check if google object is defined and contains the accounts property
          google.accounts.id.initialize({
            // client_id: "878894823674-980843piuru7or27d8enk1j4bm31t0r5.apps.googleusercontent.com",
            client_id: "835111729100-862akcf0948la5pfj0892g8v55tbuva8.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("googleSignInButton"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }
      }
    }
  }

  useEffect(() => {
    // Load the Google One Tap API script
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize Google One Tap API and render the button
    initGoogleOneTap();
  }, []);

  return (
    <div id="googleSignInButton" dangerouslySetInnerHTML={{__html: ''}}></div>
  );
}

export default GoogleSignInButton;
