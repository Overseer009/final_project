import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const useApplicationData = () => {
  // const [state, setState] = useState({
  //   currentUser: {},
  //   users: [],
  //   currentTimeline: {},
  //   timelines: [],
  //   instances: [],
  // });

  const [currentTimeline, setCurrentTimeline] = useState({
    user_id: null,
    name: null,
    start_month: null,
    end_month: null,
  });

  // let localCurrentTimeline = localStorage.getItem("currentTimeline");
  // localCurrentTimeline = JSON.parse(localCurrentTimeline);

  const [myTimelines, setMyTimelines] = useState();

  // localStorage.setItem("userTimelines", JSON.stringify(myTimelines));

  let currentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(currentUser);

  const getUserTimelines = (user) => {
    axios.get(`/api/timelines${user.id}`).then((res) => {
      setMyTimelines(res.data);
      localStorage.setItem("userTimelines", JSON.stringify(res.data));
      history.push("/mytimelines");
    });
  };

  const registerUser = (registerData) => {
    axios.post("/api/users/new", registerData).then((res) => {
      console.log("inside loginInfo", res);
      if (res.data) {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        history.push("/timelines/new");
      }
    });
  };

  const logout = () => {
    console.log("inside logout");
    localStorage.clear();
    history.push("/login");
  };

  const loginUser = (loginData) => {
    axios
      .post("/api/users", loginData)
      .then((res) => {
        console.log("inside loginInfo", res.data);
        if (res.data) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          history.push("/timelines/new");
        }
      })
      .catch((err) => console.log("Invalid User: ------>", err));
  };

  const createInstance = (instanceData) => {
    console.log("Inside createInstance --------- ", instanceData);

    axios.post("/api/instances/new", instanceData).then((res) => {
      console.log("Inside new Instance POST request -------- ", res.data);

      history.push("/timelines/new");
    });
  };

  const timelineData = (timelineObj) => {
    axios
      .post("/api/timelines", timelineObj)
      .then((res) => {
        console.log("line 81:", res);
        if (res.data) {
          setCurrentTimeline({
            ...currentTimeline,
            user_id: res.data.user_id,
            name: res.data.name,
            start_month: res.data.start_month,
            end_month: res.data.end_month,
          });
          localStorage.setItem(
            "currentTimeline",
            JSON.stringify(res.data)
          );
          history.push("/timeline");
        } else console.log("something went wrong");
      })
      .catch((err) => console.log("nothing here---------->", err));
  };

  return {
    getUserTimelines,
    registerUser,
    logout,
    loginUser,
    createInstance,
    timelineData,
    setCurrentTimeline,
    currentTimeline,
    myTimelines,
    history,
    currentUser,
    // localCurrentTimeline,
  };
};

export default useApplicationData;
