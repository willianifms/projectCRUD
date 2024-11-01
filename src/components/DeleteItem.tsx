import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

interface DeleteItemProps {
  id: string;
}

const DeleteItem: React.FC<DeleteItemProps> = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "items", id));

      alert("Deletado com sucesso");

      navigate("/");
    } catch (error) {
      console.error("Erro ao deletar ", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Delete Item</h2>

      <p className="mb-4">Tem certeza que quer deletar o item?</p>

      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        delete
      </button>
    </div>
  );
};

export default DeleteItem;
