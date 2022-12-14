import { useParams, useNavigate, Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Container } from '../components/App.styled';
import s from '../components/MovieDetails/MovieDetails.module.css';
import { APIservise } from '../services/APIservice';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const getMovieDetails = async () => {
    const result = await APIservise.getMovieDetails(movieId, setError);

    setMovieDetails(result);
  };

  useEffect(() => {
    getMovieDetails();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        <button className={s.GoBackBtn} type="button" onClick={goBack}>
          Go back
        </button>
        {movieDetails && (
          <div className={s.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.tagline}
              width="300"
            />
            <div>
              <h1>{movieDetails.title}</h1>
              <p>User score: {movieDetails.vote_average * 10}% </p>
              <h2> Overview</h2>
              <p>{movieDetails.overview}</p>
              <h2>Genres</h2>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
        )}
        <section className={s.addInfo}>
          {error ? (
            <h2>
              {error}
              {error === '404'
                ? ' Information concerning choosen movie is not exist at the moment'
                : '  Something went wrong'}
            </h2>
          ) : (
            <>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </>
          )}
        </section>
        <section>
          <Suspense>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </section>
      </Container>
    </>
  );
};

export default MovieDetails;
