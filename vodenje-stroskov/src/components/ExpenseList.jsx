import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css'; // Importing CSS for styling

const TableComponent = () => {
    // State variables for data, loading, and error
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API on component mount
    useEffect(() => {
        axios.get('http://localhost:3000/stroski') // Adjust URL if necessary
            .then(response => {
                setData(response.data); // Store data in state
                setLoading(false); // Set loading to false
            })
            .catch(error => {
                setError(error); // Capture error if request fails
                setLoading(false); // Set loading to false
            });
    }, []);

    // Display loading or error message if needed
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Render the table with selected data columns
    return (
        <div className="table-container">
            <h2>Expense List</h2>
            <table className="cost-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.naziv}</td>
                            <td>${item.znesek.toFixed(2)}</td> {/* Format amount */}
                            <td>{item.kategorija}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
