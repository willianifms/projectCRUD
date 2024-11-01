import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

interface UpdateItemProps {
  id: string;
}

const UpdateItem: React.FC<UpdateItemProps> = ({ id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRef = doc(db, "items", id);
        const itemSnap = await getDoc(itemRef);
        if (itemSnap.exists()) {
          const itemData = itemSnap.data();
          setName(itemData.name || "");
          setDescription(itemData.description || "");
        } else {
          console.error("Item não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const itemRef = doc(db, "items", id);
      await updateDoc(itemRef, { name, description });
      alert("Item atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Atualizar Item</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome do Item
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome do item"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Descrição
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do item"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Atualizar Item
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => window.history.back()}
          >
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
