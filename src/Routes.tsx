import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import CreateItem from "./components/CreateItem";
//import ReadItems from "./components/ReadItems";
import UpdateItem from "./components/UpdateItem";
import DeleteItem from "./components/DeleteItem";
import SignInPassword from "./components/SignInPassoword";
import App from "./App";

const Rotas: React.FC = () => {
  return (
    <Router>

          <Routes>
            <Route path="/" element={<SignInPassword />} />
            <Route path="/read" element={<App />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/update/:id" element={<UpdateItemWrapper />} />
            <Route path="/delete/:id" element={<DeleteItemWrapper />} />
          </Routes>

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

export default Rotas;
