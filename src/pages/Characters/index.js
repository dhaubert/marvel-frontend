import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import { Loading, CharacterBox, ComicList } from './styles';

export default class Character extends Component {
  state = {
    character: {},
    comics: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { characterId } = match.params;

    const [character, comics] = await Promise.all([
      api.get(`/characters/${characterId}/`),
      api.get(`/characters/${characterId}/comics`),
    ]);

    this.setState({
      character: character ? character.data : [],
      comics: comics ? comics.data : [],
      loading: false,
    });
  }

  render() {
    const { comics, character, loading } = this.state;

    if (loading) {
      return <Loading> Carregando... </Loading>;
    }

    return (
      <Container>
        <CharacterBox>
          <Link to="/"> Voltar à busca </Link>
          <img src={character.thumbnail} alt={character.name} />
          <h1>{character.name}</h1>
          <p>{character.description}</p>
        </CharacterBox>

        <ComicList>
          {comics.map(comic => (
            <li key={String(comic.id)}>
              <img src={comic.thumbnail} alt={comic.title} />
              <h1>{comic.title}</h1>
              <h2>{comic.variant_description}</h2>
              <p>{comic.description}</p>
              <p>{comic.page_count} páginas.</p>
            </li>
          ))}
        </ComicList>
      </Container>
    );
  }
}
