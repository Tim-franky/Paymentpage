import React from "react";
import PlansComponent from "./PlansComponent";
import CourseDetails from "./CourseDetails";

export default function MiddleComponent() {
  return (
    <div className="body">
      <CourseDetails />
      <PlansComponent />
    </div>
  );
}
