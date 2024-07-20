import "./Addcourse2.css";
import { Fragment, useState } from "react";
import axios from "axios";

const Addcourse2 = () => {
  const [courseData, setCourseData] = useState({
    courseTitle: "",
    courseStartDate: "",
    batchNo: "",
    courseDesc: "",
    // courseTopics: "",
    courseFee: "",
    courseDuration: "",
    classScheduleFrom: "",
    classScheduleTo: "",
    courseSchedule: "",
    classTimingsFrom: "",
    classTimingsTo: "",
    courseMobileNo: "",
    courseSample: "",
    courseCoverImage: "",
    courseTrainerName: "",
    courseTrainerPic: "",
    courseTrainerQualification: "",
    courseTrainerRole: "",
  });

  const {
    courseTitle,
    courseStartDate,
    batchNo,
    courseDesc,
    // courseTopics,
    courseFee,
    courseDuration,
    classScheduleFrom,
    classScheduleTo,
    courseSchedule,
    classTimingsFrom,
    classTimingsTo,
    courseMobileNo,
    courseSample,
    courseCoverImage,
    courseTrainerName,
    courseTrainerPic,
    courseTrainerQualification,
    courseTrainerRole,
  } = courseData;

  const changeHandler = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const resetHandler = () => {
    setCourseData({
      courseTitle: "",
      courseStartDate: "",
      batchNo: "",
      courseDesc: "",
      // courseTopics: "",
      courseFee: "",
      courseDuration: "",
      classScheduleFrom: "",
      classScheduleTo: "",
      courseSchedule: "",
      classTimingsFrom: "",
      classTimingsTo: "",
      courseMobileNo: "",
      courseSample: "",
      courseCoverImage: "",
      courseTrainerName: "",
      courseTrainerPic: "",
      courseTrainerQualification: "",
      courseTrainerRole: "",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/add-course",
        courseData
      );
      console.log(response.data);
      // Optionally handle success message or update UI
    } catch (error) {
      console.error("Error adding course:", error);
      // Optionally handle error message or update UI
    }
  };

  const toggle = (e) => {
    const formEle = document.getElementById("formContainer");
    formEle.classList.toggle("invisible");
  };

  return (
    <Fragment>
      <div
        className="container rounded-3 mt-5 px-3 py-2 border border-1 border-light-subtle"
        id="formContainer"
      >
        <form onSubmit={submitHandler}>
          <div className="row justify-content-between">
            <div className="col-6 ms-1 py-2">
              <h1 className="h4">Add Course Form</h1>
            </div>
            <div className="col-1 cursor-pointer">
              <img
                className=""
                src="src\assets\closeIcon-black.svg"
                alt="multiply"
                onClick={toggle}
                width={20}
                height={20}
                id="cancelIcon"
              />
              <div id="imgCover"></div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col mx-auto">
              <label
                htmlFor="courseTitle"
                className="form-label fw-bold ms-1 mb-0"
              >
                Course Title:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="courseTitle"
                  name="courseTitle"
                  value={courseTitle}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseStartDate"
                className="form-label fw-bold ms-1 mb-0"
              >
                Start Date:
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="date"
                  name="courseStartDate"
                  id="courseStartDate"
                  className="form-control"
                  value={courseStartDate}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseStartDate"
                className="form-label fw-bold ms-1 mb-0"
              >
                Batch No:
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="number"
                  min={1}
                  name="batchNo"
                  id="batchNo"
                  className="form-control"
                  value={batchNo}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col mx-auto">
              <label
                htmlFor="courseDesc"
                className="form-label fw-bold ms-1 mb-0"
              >
                Course Description:
              </label>
              <div className="input-group input-group-sm">
                <textarea
                  className="form-control"
                  id="courseDesc"
                  cols={30}
                  rows="3"
                  required
                  value={courseDesc}
                  onChange={changeHandler}
                  name="courseDesc"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseFee"
                className="form-label fw-bold ms-1 mb-0"
              >
                Fee:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="courseFee"
                  value={courseFee}
                  onChange={changeHandler}
                  name="courseFee"
                />
              </div>
            </div>

            <div className="col-6 mx-auto">
              <label
                htmlFor="courseDuration"
                className="form-label fw-bold ms-1 mb-0"
              >
                Duration (days):
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="number"
                  className="form-control"
                  id="courseDuration"
                  placeholder="30"
                  min={30}
                  max={200}
                  value={courseDuration}
                  onChange={changeHandler}
                  name="courseDuration"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                htmlFor="classScheduleFrom"
                className="form-label fw-bold ms-1 mb-0"
              >
                Class Schedule:
              </label>
              <div className="input-group input-group-sm">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  value={classScheduleFrom}
                  onChange={changeHandler}
                  name="classScheduleFrom"
                >
                  <option defaultValue>select</option>
                  <option value="sun">sun</option>
                  <option value="mon">mon</option>
                  <option value="tue">tue</option>
                  <option value="wed">wed</option>
                  <option value="thu">thu</option>
                  <option value="fri">fri</option>
                  <option value="sat">sat</option>
                </select>
                <span className="input-group-text">to</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  value={classScheduleTo}
                  onChange={changeHandler}
                  name="classScheduleTo"
                >
                  <option defaultValue>select</option>
                  <option value="sun">sun</option>
                  <option value="mon">mon</option>
                  <option value="tue">tue</option>
                  <option value="wed">wed</option>
                  <option value="thu">thu</option>
                  <option value="fri">fri</option>
                  <option value="sat">sat</option>
                </select>
              </div>
            </div>
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseSchedule"
                className="form-label fw-bold ms-1 mb-0"
              >
                Course Schedule:
              </label>
              <div className="input-group input-group-sm">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  value={courseSchedule}
                  onChange={changeHandler}
                  name="courseSchedule"
                >
                  <option defaultValue>select</option>
                  <option value="live">Live</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                htmlFor="classTimingsFrom"
                className="form-label fw-bold ms-1 mb-0"
              >
                Class Timings:
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="time"
                  name="classTimingsFrom"
                  id="classTimingsFrom"
                  className="form-control d-flex align-items-baseline"
                  value={classTimingsFrom}
                  onChange={changeHandler}
                />
                <span className="input-group-text">to</span>
                <input
                  type="time"
                  name="classTimingsTo"
                  id="classTimingsTo"
                  className="form-control d-flex align-items-baseline"
                  value={classTimingsTo}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseMobileNo"
                className="form-label fw-bold ms-1 mb-0"
              >
                Phone no:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  value={courseMobileNo}
                  onChange={changeHandler}
                  name="courseMobileNo"
                  type="tel"
                  className="form-control"
                  id="courseMobileNo"
                  pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$|^(\+1[\-\s]?)?(\(?\d{3}\)?[\-\s]?)?\d{3}[\-\s]?\d{4}$"
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col mx-auto">
              <label
                htmlFor="courseMobileNo"
                className="form-label fw-bold ms-1 mb-0"
              >
                Phone no:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  value={courseMobileNo}
                  onChange={changeHandler}
                  name="courseMobileNo"
                  type="tel"
                  className="form-control"
                  id="courseMobileNo"
                  pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$|^(\+1[\-\s]?)?(\(?\d{3}\)?[\-\s]?)?\d{3}[\-\s]?\d{4}$"
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col mx-auto">
              <label
                htmlFor="courseSample"
                className="form-label fw-bold ms-1 mb-0"
              >
                Course Sample Link:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="courseSample"
                  name="courseSample"
                  value={courseSample}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col mx-auto">
              <label
                htmlFor="courseTrainerName"
                className="form-label fw-bold ms-1 mb-0"
              >
                Trainer:
              </label>
              <div className="input-group input-group-sm">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  required
                  value={courseTrainerName}
                  onChange={changeHandler}
                  name="courseTrainerName"
                >
                  <option defaultValue>select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseTrainerQualification"
                className="form-label fw-bold ms-1 mb-0"
              >
                Trainer Qualification:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="courseTrainerQualification"
                  name="courseTrainerQualification"
                  value={courseTrainerQualification}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="col-6 mx-auto">
              <label
                htmlFor="courseTrainerRole"
                className="form-label fw-bold ms-1 mb-0"
              >
                Trainer Role:
              </label>
              <div className="input-group input-group-sm">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="courseTrainerRole"
                  name="courseTrainerRole"
                  value={courseTrainerRole}
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-6 mx-auto">
              <label
                className="form-label ms-1 mb-0 uploadLabel"
                htmlFor="courseCoverImage"
                onChange={changeHandler}
              >
                Upload Course Cover Image:
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="file"
                  className="form-control"
                  id="courseCoverImage"
                  value={courseCoverImage}
                  onChange={changeHandler}
                  name="courseCoverImage"
                />
              </div>
            </div>
            <div className="col-6 mx-auto">
              <label
                className="form-label ms-1 mb-0 uploadLabel"
                htmlFor="courseTrainerPic"
                onChange={changeHandler}
              >
                Upload Trainer Image:
              </label>
              <div className="input-group input-group-sm">
                <input
                  type="file"
                  className="form-control"
                  id="courseTrainerPic"
                  value={courseTrainerPic}
                  onChange={changeHandler}
                  name="courseTrainerPic"
                />
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-5 mx-auto btn-group">
              <div className="input-group input-group-sm">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={resetHandler}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={toggle}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Addcourse2;
