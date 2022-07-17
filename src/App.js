import "./App.css";
// import Spline from "@splinetool/react-spline";

// function App() {
//   return (
//       <Spline
//         className="spline"
//         scene="https://prod.spline.design/i2q9LUNxoxU6Deuq/scene.splinecode"
//       />
//   );
// }

// export default App;
import Spline from "@splinetool/react-spline";
import Logo from "./images/logo.svg";

// import IconTwitter from "./images/icon-twitter.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <div className="wrapper">
      <div className="menu">
        <li>
          <img src={Logo} alt="title" />
        </li>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <li>
          <button>Get Started</button>
        </li>
      </div>
      <div className="heading">
        <h1>Collaborate with People</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button className="btn">
          <img src={IconLaptop} alt="" /> Download for Mac
        </button>
      </div>
      <div className="spline">
        <Spline scene="https://prod.spline.design/2hLUMWDG6DCb3UY0/scene.splinecode" />

        <div className="social">
          {/* <img src={IconTwitter} alt="Twitter" /> */}
        </div>
      </div>
    </div>
  );
}
