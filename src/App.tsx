import React from "react";
import { Link} from "react-router-dom";
import ReadItems from "./components/ReadItems";


const App: React.FC = () => {
  return (
    
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">
                      CRUD
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link to="/read" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                  Home
                </Link>
                <Link
                  to="/create"
                  className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                >
                  Adicionar Item
                </Link>
              </div>
            </div>
          </div>
        </nav>
<ReadItems/>
      </div>

  );
};


export default App;
