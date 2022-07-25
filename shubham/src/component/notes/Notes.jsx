import React from "react";
import "./notes.scss";

export default function Notes() {
  return (
    <div className="notes" id="notes">
      <div className="hline">Notes</div>
      <div className="containor">
          <div className="nt">
          
            <div className="img">
              <img src="assets/java.png" alt="" />
            </div>
            <div className="sname">JAVA</div>
          </div>
        
        <div className="nt">
          <div className="img">
            <img src="assets/c-.png" alt="" />
          </div>
          <div className="sname">C/C++</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/computer.png" alt="" />
          </div>
          <div className="sname">Networking</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/python.png" alt="" />
          </div>
          <div className="sname">Python</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/coding.png" alt="" />
          </div>
          <div className="sname">Html/Css</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/android.png" alt="" />
          </div>
          <div className="sname">Android Studio</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/edit.png" alt="" />
          </div>
          <div className="sname">DBMS</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/edit.png" alt="" />
          </div>
          <div className="sname">Node/Js</div>
        </div>
        <div className="nt">
          <div className="img">
            <img src="assets/edit.png" alt="" />
          </div>
          <div className="sname">OT</div>
        </div>
      </div>
    </div>
  );
}
