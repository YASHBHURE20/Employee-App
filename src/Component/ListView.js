import React from 'react';

const ListView = ({ employees }) => {
  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <img src={employee.avatar} alt="Avatar" />
          <span>{employee.first_name}</span>
        </div>
      ))}
    </div>
  );
};

export default ListView;