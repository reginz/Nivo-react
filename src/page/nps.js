import React from "react";
import Stream from "../components/stream";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import EnhancedTable from "../components/customerData";
import { MyResponsiveRadialBar } from "../components/RadialBar";
function Nps(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{display:"flex"}}>
          <div className="card">
            <div className="card-body">
              <div style={{ width: "100%" }}>
                <h3>NPS score after calls</h3>
              </div>
              <Stream />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  color: "#62cdbb",
                }}
              >
                +60 <ArrowDropUpRoundedIcon className="svg_icons" />
              </h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div style={{ width: "100%" }}>
                <h3>NPS score before calls</h3>
              </div>
              <Stream />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  color: "#fae85e",
                }}
              >
                +40 <ArrowDropUpRoundedIcon className="svg_icons" />
              </h1>
            </div>
          </div>
        </div>

        <div style={{ width: "850px" }} className="card">
          <EnhancedTable />
        </div>
      </div>

      <div>
        <div className="card">
          <div className="card-body">
            <h3>Satisfaction rate in transaction basis</h3>
            <MyResponsiveRadialBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nps;
