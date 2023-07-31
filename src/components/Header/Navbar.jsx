import React from "react";
import "./navbar.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbTemperatureCelsius } from "react-icons/tb";

export const Navbar = () => {
  return (
    <div className="tab">
      <div class="btn-group-vertical btns">
        <div>
          <MdOutlineHealthAndSafety className="logo" />
        </div>
        <div className="temp cn">
          <p>Temperature</p>
          <TbTemperatureCelsius />{" "}
        </div>
        <div className="temp">
          <p>
            Heart Beat Rate<p className="cb">(Bit per minute)</p>
          </p>
        </div>
        <div className="temp">
          <p>Oxygen saturation</p> <p className="cb">SpO2</p>
        </div>
        <div className="temp">
        <p>Flexibility</p> <p className="cb">Curvity</p>
      </div>
      </div>
    </div>
  );
};
