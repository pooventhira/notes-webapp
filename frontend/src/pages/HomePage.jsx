import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);
  
  return (
    <div>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage