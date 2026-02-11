import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState();

  return (
    <div>
      <h1>Course Details</h1>
    </div>
  );
};

export default CourseDetails;
