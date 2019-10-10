import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 1px solid #333;
  border-raduis: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = props => {
  return (
    <>
      <Wrapper to={`/details/${props.imdbID}`}>
        <Image alt={`${props.title} props poster`} src={require(`../../img/posters/${props.poster}`)} />
        <div>
          <h3>{props.title}</h3>
          <h4>({props.year})</h4>
          <p> {props.description}</p>
        </div>
      </Wrapper>
    </>
  );
};

export default ShowCard;
