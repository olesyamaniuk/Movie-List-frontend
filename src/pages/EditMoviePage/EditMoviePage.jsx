
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieForm from "../../components/MovieForm/MovieForm.jsx";

function EditMoviePage() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    axios.get(`https://movie-backend-3.onrender.com/api/movies/${id}`)
      .then(response => setInitialData(response.data.data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (initialData === null) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Movie</h1>
      <MovieForm initialData={initialData} isEdit={true} />
    </div>
  );
}

export default EditMoviePage;

