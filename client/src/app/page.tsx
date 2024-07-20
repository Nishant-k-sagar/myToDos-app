"use client";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/utils/constant";
import ToDo from "@/components/ToDo";
import "../app/globals.css";

export default function Home() {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const [updateUI, setUpdateUI] = useState(false)

  useEffect(() => {
    if (session?.user?.email) {
      axios.post(`${baseURL}/get`, { email: session.user.email }).then((res) => {
        console.log(res.data);
        setToDos(res.data);
      });
    }
  }, [session?.user, updateUI]);

  if (!session?.user) {
    return <Login />;
  }

  const addToDo =()=>{
    axios.post(`${baseURL}/save`, {email: session.user?.email, toDo:input})
    .then((res)=>{
      console.log(res.data);
      setInput("");
      setUpdateUI((prevState)=>!prevState)
    })
    .catch((err)=>console.log(err));
  }

  return (
    <main className="max-w-[400px] mx-auto">
      <Navbar />
      <input
        className="w-full bg-transparent border-b border-accentDark p-2 text-white outline-none custom-placeholder"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todos..."
        style={{  color: 'purpleviolet'  }}
      />
      <button className="bg-accentDark px-4 text-gray-400 hover:bg-accentLight "onClick={addToDo} style={{ color: 'blue' }}>
        Add
      </button>

      <ul className="space-y-4 pt-8">
        {toDos.map((item:any)=>(
          <ToDo 
          key={item._id} 
          id={item._id} 
          text={item.toDo}
          setUpdateUI = {setUpdateUI} />
        ))}
      </ul>
    </main>
  );
}
