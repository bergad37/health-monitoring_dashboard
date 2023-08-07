import React,{useState,useEffect} from "react";
import "./measurements.css";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import * as Realm from "realm-web"

const temperature = 60;
const SpO2 = 65;

export const Measurements = () => {
  
  const [dataSet, setDataSet] = useState([]);

  const getData=async ()=>{
    const app = new Realm.App({ id: "application1-vondq" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allData= await user.functions.getAllData();
      setDataSet(allData);
      console.log(allData);
    } catch(err) {
      console.error("Failed to log in", err);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="data_panel">
        <div className="temperature">
          <CiTempHigh className="icon" />
          <p className="text">Body tempaerature is: {temperature} °C </p>
          <div className="circle-progress">
            <svg className="progress-circle" width="100" height="100">
              <circle
                className="progress-bar"
                cx="50"
                cy="50"
                r="40"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                className="progress-value"
                cx="50"
                cy="50"
                r="40"
                strokeWidth="10"
                fill="transparent"
                style={{ strokeDasharray: `${(temperature / 100) * 251}, 251` }}
              />
            </svg>
          </div>
        </div>
        <div className="temperature">
          <BsFillHeartPulseFill className="icon heart" />
          <p className="text">SpO2 is: {SpO2} bit per minute </p>
        </div>
        <div className="temperature">
          <BsFillHeartPulseFill className="icon heart" />
          <p className="text">Flexibility: {SpO2} bit per minute </p>
        </div>
        <div className="temperature">
          <CiTempHigh className="icon" />
          <p className="text">Body tempaerature is: {temperature} °C </p>
          <div className="circle-progress">
            <svg className="progress-circle" width="100" height="100">
              <circle
                className="progress-bar"
                cx="50"
                cy="50"
                r="40"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                className="progress-value"
                cx="50"
                cy="50"
                r="40"
                strokeWidth="10"
                fill="transparent"
                style={{ strokeDasharray: `${(temperature / 100) * 251}, 251` }}
              />
            </svg>
          </div>
        </div>
        <div className="temperature">
          <BsFillHeartPulseFill className="icon heart" />
          <p className="text">SpO2 is: {SpO2} bit per minute </p>
        </div>
      </div>
    </div>
  );
};
