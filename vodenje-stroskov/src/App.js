import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar.jsx';
import TableComponent from './components/CostTracking.jsx';
import ExpenseList from './components/ExpenseList.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       


              
              <SideBar></SideBar>
              <ExpenseList></ExpenseList>
              <TableComponent></TableComponent>
              
        
      </header>
    </div>
  );
}

export default App;
