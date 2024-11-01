import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import CreateItem from "./components/CreateItem";
import ReadItems from "./components/ReadItems";
import UpdateItem from "./components/UpdateItem";
import DeleteItem from "./components/DeleteItem";

const App: React.FC = () => {
  return (
    <Router>
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
                <Link to="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">
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
        <div className="max-w-6xl mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<ReadItems />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/update/:id" element={<UpdateItemWrapper />} />
            <Route path="/delete/:id" element={<DeleteItemWrapper />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Wrapper para `UpdateItem` para buscar os dados de um item pelo `id` e preenchê-los
const UpdateItemWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) return <p>Item não encontrado.</p>;

  // método para buscar o item com base no `id`, você pode chamá-lo aqui
  // Exemplo: const item = await fetchItem(id);
  
  return <UpdateItem id={id}  />;
};

// Wrapper para `DeleteItem`
const DeleteItemWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) return <p>Item não encontrado.</p>;

  return <DeleteItem id={id} />;
};

export default App;
