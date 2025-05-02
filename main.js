// checks the storage quota in the browser
const estimate = navigator.storage.estimate();

estimate.then(({ usage, quota }) => {
  console.log(`Used storage: ${usage} bytes`);
  console.log(`Total storage quota: ${quota} bytes`);
});
