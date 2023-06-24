import React, { useState, useEffect } from 'react';
import { fetchEmployees } from './Api';
import './appp.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getEmployees = async () => {
      const data = await fetchEmployees();
      setEmployees(data);
    };
    getEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h3 className="heading">EMPLOYEE-APP</h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search by First Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <div className="list-container">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="list-item">
            <div className="image-container">
             <img src={employee.avatar} alt="Avatar" />
             <span className="employee-id">{employee.id}</span>
            </div>
            <span>{employee.first_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
