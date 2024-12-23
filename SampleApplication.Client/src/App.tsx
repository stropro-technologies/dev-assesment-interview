import React from 'react';
import './App.css';

function App(): React.JSX.Element {
    const columns = [
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' },
      { id: 'email', label: 'Email' },
    ];
  
    const rows = [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: 3, name: 'Emily Johnson', age: 40, email: 'emily@example.com' },
      { id: 4, name: 'Michael Brown', age: 35, email: 'michael@example.com' },
      { id: 5, name: 'Chris Green', age: 29, email: 'chris@example.com' },
      { id: 6, name: 'Anna White', age: 32, email: 'anna@example.com' },
      { id: 7, name: 'James Black', age: 28, email: 'james@example.com' },
      { id: 8, name: 'Laura Blue', age: 45, email: 'laura@example.com' },
      { id: 9, name: 'Paul Red', age: 50, email: 'paul@example.com' },
      { id: 10, name: 'Diana Violet', age: 23, email: 'diana@example.com' },
      { id: 11, name: 'George Yellow', age: 38, email: 'george@example.com' },
      { id: 12, name: 'Olivia Orange', age: 27, email: 'olivia@example.com' },
      { id: 13, name: 'Sophia Gray', age: 31, email: 'sophia@example.com' },
      { id: 14, name: 'Ethan Purple', age: 41, email: 'ethan@example.com' },
      { id: 15, name: 'Mia Cyan', age: 26, email: 'mia@example.com' },
      { id: 16, name: 'Jacob Magenta', age: 34, email: 'jacob@example.com' },
      { id: 17, name: 'Isabella Teal', age: 22, email: 'isabella@example.com' },
      { id: 18, name: 'William Gold', age: 47, email: 'william@example.com' },
      { id: 19, name: 'Ava Silver', age: 37, email: 'ava@example.com' },
      { id: 20, name: 'Elijah Platinum', age: 33, email: 'elijah@example.com' },
    ];
  
    const handleRowSelectionChange = (selectedIds: (number | string)[]) => {
      console.log('Selected Rows:', selectedIds);
    };
  
    return (
      <>
        <div className="container mt-4">
          <h4>Customizable Table</h4>
            {/*
            <CustomizableTable
              columns={columns}
              rows={rows}
              onRowSelectionChange={handleRowSelectionChange}
              paginationOptions={{
                rowsPerPage: 5,
                rowsPerPageOptions: [5, 10, 15],
              }}
              isSelectable={false}
            />
            */}
        </div>
      </>
    )
  }

export default App;