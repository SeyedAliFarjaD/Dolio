import { Route, BrowserRouter } from "react-router-dom";
import routes from "./components/pages/index";
// import avatar from "./avatar.jpg";
// import webPush from "web-push";
// const webPush = require('web-push');


// window.webPush = webPush
// window.webpush = webPush
// webPush.sendNotification

// window.notifyMe = function () {
//   if (!("Notification" in window)) {
//     // Check if the browser supports notifications
//     alert("This browser does not support desktop notification");
//   } else if (Notification.permission === "granted") {
//     // Check whether notification permissions have already been granted;
//     // if so, create a notification
//     const notification = new Notification("سلام!", {
//       image: avatar,
//       body: "سلام",
//     });
//     // …
//   } else if (Notification.permission !== "denied") {
//     // We need to ask the user for permission
//     Notification.requestPermission().then((permission) => {
//       // If the user accepts, let's create a notification
//       if (permission === "granted") {
//         const notification = new Notification("سلام!", {
//           image: avatar,
//           iconUrl: avatar,
//           icon: avatar,
//           body: "سلام",
//         });
//         // …
//       }
//     });
//   }

//   // At last, if the user has denied notifications, and you
//   // want to be respectful there is no need to bother them anymore.
// };

// // I added a function that can be used to register a service worker.
// const registerServiceWorker = async () => {
//   const swRegistration = await navigator.serviceWorker.register('./sw.js'); //notice the file name
//   return swRegistration;
// }

// const requestNotificationPermission = async () => {
//   const permission = await window.Notification.requestPermission();
//   // value of permission can be 'granted', 'default', 'denied'
//   // granted: user has accepted the request
//   // default: user has dismissed the notification permission popup by clicking on x
//   // denied: user has denied the request.
//   if(permission !== 'granted'){
//       throw new Error('Permission not granted for Notification');
//   }
// }

// const main = async () => {
//   const swRegistration = await registerServiceWorker();
//   const permission =  await requestNotificationPermission();
//   // showLocalNotification('This is title', 'this is the message', swRegistration);
// }
// main();

function App() {
  return (
    <BrowserRouter>
      {/* {routes.map((route, idx) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={idx}
        ></Route>
      ))} */}
      {routes.map((route, idx) => (
        <Route
          path={"*"}
          component={route.component}
          key={idx}
        ></Route>
      ))}

    </BrowserRouter>
  );
}

export default App;
