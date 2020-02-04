import React from 'react';
import './App.css';
import HDCDashboardViewPage from "../../components/pages/HDCDashboardViewPage";

const App: React.FC = () => {
    sample();
    return (
        <div className="App">
            <HDCDashboardViewPage />
        </div>
    );
};

function sample() {
    console.log("test")

}

export default App;
