
import MovieForm from "../../components/MovieForm/MovieForm.jsx";

function AddMoviePage() {
  return (
    <div>
      <h1>Add New Movie</h1>
      <MovieForm isEdit={false} />
    </div>
  );
}

export default AddMoviePage;
