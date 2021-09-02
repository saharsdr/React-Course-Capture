import styled from "styled-components";
import { useHistory } from "react-router";
import { MovieState } from "../movieState";
import { useState, useEffect } from "react";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  

  return (
    <motion.div  exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
};

const Details = styled.div`
  color : white;
`;

const HeadLine = styled.div`
  min-height : 90vh;
  padding-top : 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
     width: 100%;
     height: 70vh;
     object-fit: cover;
  }
`;

const Awards= styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

// Award Component
const Award = ({title, description}) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  )
}

const ImageDisplay= styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;


const StyledAward= styled.div`
  padding: 5rem;
  h3{
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: .5rem;
    margin: 1rem 0;
  }
  p{
    padding: 2rem 0;
  }
`;

export default MovieDetail;
