import "./styles.css";
import JoinUs from "./JoinUs";
import Settings from "./Settings";
import Login from "./Login";
import ContactUs from "./ContactUs";
import Search from "./Search";
import Help from "./Help";
import Home from "./Home";
import Download from "./Download";
import ButtonEle from "./ButtonEle";

export default function App() {
  return (
    <>
      <div className="App">
        {/* Using multiple components */}
        <JoinUs />
        <Settings />
        <Login />
        <ContactUs />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>

      <div className="App">
        {/* Using single button component */}
        <ButtonEle title="JOIN US" color="rgb(25,157,210)" />
        <ButtonEle title="SETTINGS" color="rgb(97,135,140)" />
        <ButtonEle title="LOGIN" color="rgb(247,150,33)" />
        <ButtonEle title="CONTACT US" color="rgb(167,36,43)" />
        <ButtonEle title="SEARCH" color="rgb(105,158,62)" />
        <ButtonEle title="HELP" color="rgb(81,77,131)" />
        <ButtonEle title="HOME" color="rgb(205,57,116)" />
        <ButtonEle title="DOWNLOAD" color="rgb(139,105,45)" />
      </div>
    </>
  );
}
