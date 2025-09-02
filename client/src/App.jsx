import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="form-container">
        <form className=" grid sm:grid-cols-1 md:grid-cols-2" action="submit">
          <div>
            <input id="input-name" className="" type="text" />
            <label htmlFor="input-name"> Name </label>
          </div>
          <br />
          <div>
            <input id="input-speciality" className="" type="text" />
            <label htmlFor="input-speciality"> Speciality </label>
          </div>
          <br />
          <div>
            <input id="input-location" className="" type="text" />
            <label htmlFor="input-location"> Location </label>
          </div>
          <br />
          <div className="time-slot bg-white-200">
            <div>
              <select name="first-slot" id="first-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="first-slot">First Slot</label>
            </div>
            <div>
              <select name="second-slot" id="second-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="second-slot">Second Slot</label>
            </div>
            <div>
              <select name="third-slot" id="third-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="third-slot">Third Slot</label>
            </div>
            <div>
              <select name="fourth-slot" id="fourth-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="fourth-slot">Fourth Slot</label>
            </div>
            <div>
              <select name="fifth-slot" id="fifth-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="fifth-slot">Fifth Slot</label>
            </div>
            <div>
              <select name="sixth-slot" id="sixth-slot">
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:30 AM">12:30 PM</option>
                <option value="13:30 AM">13:30 PM</option>
                <option value="14:30 AM">14:30 PM</option>
              </select>
              <label htmlFor="sixth-slot">Sixthfifth</label>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
