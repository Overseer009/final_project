import { useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const useApplicationData = () => {
  const [currentTimeline, setCurrentTimeline] = useState({
    user_id: null,
    name: null,
    start_month: null,
    end_month: null,
  });

  const [myTimelines, setMyTimelines] = useState();

  let currentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(currentUser);

  const getUserTimelines = (user) => {
    axios.get(`/api/timelines${user.id}`).then((res) => {
      console.log(res.data);
      setMyTimelines(res.data);
      localStorage.setItem("userTimelines", JSON.stringify(res.data));
      history.push("/mytimelines");
    });
  };

  const registerUser = (registerData) => {
    axios.post("/api/users/new", registerData).then((res) => {
      if (res.data) {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        history.push("/timelines/new");
      }
    });
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const loginUser = (loginData) => {
    axios
      .post("/api/users", loginData)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          getUserTimelines(res.data).then((response) => {
            history.push("/mytimelines");
          });
        }
      })
      .catch((err) => console.log("Invalid User: ------>", err));
  };

  const createInstance = (instanceData) => {
    console.log("Inside createInstance --------- ", instanceData);

    axios.post("/api/instances/new", instanceData).then((res) => {
      console.log("Inside new Instance POST request -------- ", res.data);

      history.push("/timeline");
    });
  };

  const getInstances = (timeline) => {
    return axios.get(`/api/instances/${timeline.id}`).then((res) => {
      return res.data;
    });
  };

  const editInstance = (instanceData) => {
    axios
      .post("/api/instances/edit", instanceData)
      .then((res) => {
        history.push("/timeline");
      })
      .catch((err) => err.message);
  };

  const deleteInstance = (instanceId) => {
    console.log("inside deleteInstance", instanceId);
    const reqPackage = { id: instanceId };
    axios
      .post("/api/instances/delete", reqPackage)
      .then(() => {
        history.push("/timeline");
      })
      .catch((err) => err.message);
  };

  const timelineData = (timelineObj) => {
    axios
      .post("/api/timelines", timelineObj)
      .then((res) => {
        if (res.data) {
          setCurrentTimeline({
            ...currentTimeline,
            user_id: res.data.user_id,
            name: res.data.name,
            start_month: res.data.start_month,
            end_month: res.data.end_month,
          });
          localStorage.setItem("currentTimeline", JSON.stringify(res.data));
          history.push("/timeline");
        } else console.log("something went wrong");
      })
      .catch((err) => console.log("nothing here---------->", err));
  };

  function prependZero(month) {
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  }

  function getMonthFromString(mon) {
    return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
  }

  const formatDay = (day) => {
    if (day < 10) {
      day = "0" + day;
    }
    return day;
  };
  const deleteTimeline = (timelineId, user) => {
    localStorage.removeItem("currentTimeline");
    const reqPackage = {
      id: timelineId,
    };
    axios
      .post("api/timelines/delete", reqPackage)
      .then(() => {
        getUserTimelines(user);
      })
      .catch((err) => err.message);
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
    setMyTimelines,
    history,
    currentUser,
    getInstances,
    editInstance,
    prependZero,
    getMonthFromString,
    formatDay,
    deleteInstance,
    deleteTimeline,
  };
};

export default useApplicationData;
