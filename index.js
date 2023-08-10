
const initialize = async () => {
  if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed. Let\'s go!');
  } else {
      console.log('MetaMask is not installed.');
  }

  try {
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert("MetaMask is connected!");
      
  } catch (error) {
      alert("Error connecting to MetaMask: " + error.message);
  }
};






