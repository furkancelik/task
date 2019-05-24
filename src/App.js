import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStroopwafel,
  faBars,
  faComments,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Slide from "./components/Slide";
import DateBoxItem from "./components/DateBoxItem";
import Content from "./components/Content";

library.add(faStroopwafel, faBars, faComments, faMapMarker);

function App() {
  return (
    <>
      <Header />
      <Slide />
      <div style={{ display: "flex" }}>
        {[
          { title: "MON", day: 26 },
          { title: "TUE", day: 27 },
          { title: "WED", day: 28 },
          { title: "THU", day: 29 },
          { title: "FRI", day: 30 }
        ].map((item, index) => (
          <DateBoxItem active={index === 0} item={item} />
        ))}
      </div>
      <Content />
    </>
  );
}

export default App;
