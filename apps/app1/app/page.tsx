"use client"

import { Appbar } from "@/components/AppBar";
import axios from "axios";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    
    const getUser = async() => {
        try {
          const checkSession = await axios.get("/api/getUserData");

          console.log(checkSession.data.session);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
    }
    getUser();
    
  }, [])

  return (
    <div>
      <Appbar/>
      
    </div>
  );
}
