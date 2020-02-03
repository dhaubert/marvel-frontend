import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaPersonBooth, FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    search: '',
    characters: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { search } = this.state;

    const response = await api.get(`/characters?search=${search}`);

    const foundCharacters = response.data;
    this.setState({
      characters: foundCharacters,
      search: '',
      loading: false,
    });
  };

  render() {
    const { search, loading, characters } = this.state;

    return (
      <Container>
        <h1>
          <FaPersonBooth />
          Personagens da Marvel
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Procurar personagem"
            value={search}
            onChange={this.handleInputChange}
          />
          <SubmitButton loading={loading}>
            <FaSearch color="#FFF" size={14} />
          </SubmitButton>
        </Form>

        <List>
          {characters.map(character => (
            <li key={character.id}>
              <img
                src={character.thumbnail}
                alt={character.description}
                height="64px"
                width="64px"
              />
              <span>{character.name}</span>

              <Link to={`/character/${character.id}`}>Quadrinhos</Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
