import React from 'react';

function Page({ employees }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <table 
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees && employees.length > 0 ? (
            employees.map((emp, index) => (
              <tr key={index}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{emp.name}</td>
                <td style={tdStyle}>{emp.email}</td>
                <td style={tdStyle}>{emp.department}</td>
                <td style={tdStyle}>{emp.salary}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={tdStyle} colSpan="5">No Employees Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd"
};

export default Page;
