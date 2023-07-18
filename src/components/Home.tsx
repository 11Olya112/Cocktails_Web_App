import React, { useState } from 'react';
import { Heading, Button, Level } from 'react-bulma-components';
import axios from 'axios';
import { CardsList } from './CardsList';
import 'bulma/css/bulma.css';
import like from '../assets/Icon-Heart-Unfavorite.svg';
import add from '../assets/Icon-Add.svg';
import github from '../assets/Icon-Github.svg';
import linkedin from '../assets/Icon-Linkedin.svg';
import cocktail from '../assets/cocktail.png';
import './Home.scss';
import { Drinks } from '../types/Drinks';

export const Home: React.FC = () => {
  const [cards, setCards] = useState<Drinks[]>([]);
  const [title, setTitle] = useState('');
  const [liked, setLiked] = useState(false);

  const item = {
    id: 1,
    drinkName: '',
    thumbnail: '',
    category: '',
    area: '',
    tags: '',
    glass: '',
  };

  const handleLikeClick = () => {
    if (!liked) {
      axios.post('http://localhost:8081/add-to-my-list', item)
        .then(() => {
          setLiked(true);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Помилка під час додавання елемента до бази даних:', error);
        });
    } else {
      axios.post('http://localhost:8081/remove-from-my-list', item)
        .then(() => {
          setLiked(false);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Помилка під час видалення елемента з бази даних:', error);
        });
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call external API and perform search based on the title
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('Search results:', data.drinks);
        setCards(data.drinks);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <nav className="navbar has-background-info-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={cocktail} alt="Logo" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="#myListSection">
                <button type="button" className="button is-primary is-outlined">
                  <span className="icon is-small">
                    <img src={like} alt="Icon" />
                  </span>
                  <span>My list</span>
                </button>
              </a>
              <button type="button" className="button is-info is-inverted is-light is-bordered">
                <span className="icon is-small">
                  <img src={add} alt="Icon" />
                </span>
                <span>Add new</span>
              </button>

              <button type="button" className="button is-danger is-light">
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="columns">
        <div className="column is-one-quarter">
          <div
            className="box is-flex-direction-column"
            style={{
              height: '100vh', position: 'fixed', left: 0,
            }}
          >
            <h2 className="title">Search by</h2>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label" htmlFor="input">
                  <input type="radio" name="filterType" className="mr-2" value={title} onChange={handleTitleChange} />
                  Title
                  <div className="control">
                    <input
                      id="input"
                      className="input"
                      type="text"
                      placeholder="Enter title"
                      value={title}
                      onChange={handleTitleChange}
                    />

                  </div>
                </label>
              </div>

              <div className="field">
                <label className="label" htmlFor="select">
                  <input type="radio" name="filterType" className="mr-2" />
                  Category
                  <div className="control">
                    <div className="select">
                      <select id="select">
                        <option>Select category</option>
                        {/* Add options dynamically based on available categories */}
                      </select>
                    </div>
                  </div>
                </label>
              </div>

              <div className="field">
                <label className="label" htmlFor="control">
                  <input type="radio" name="filterType" className="mr-2" />
                  Ingredient
                  <div className="control">
                    <div className="select">
                      <select id="select">
                        <option>Select ingredient</option>
                        {/* Add options dynamically based on available categories */}
                      </select>
                    </div>
                  </div>
                </label>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button type="button" className="button is-primary">Submit</button>
                </div>
                <div className="control">
                  <button type="button" className="button is-light has-text-danger is-outlined">Clear</button>
                </div>
              </div>
            </form>
            <br />
            <div className="field is-grouped">
              <div className="control">
                <a href="https://github.com" className="button is-link">
                  <span className="icon">
                    <img src={github} alt="GitHub" />
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
              <div className="control">
                <a href="https://linkedin.com" className="button is-link">
                  <span className="icon">
                    <img src={linkedin} alt="LinkedIn" />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="main">
            <Level>
              <Level.Item>
                <Heading size={3} mt={5}>Search results</Heading>
              </Level.Item>
            </Level>

            <br />
            <CardsList
              cards={cards}
              setCards={setCards}
              handleLikeClick={handleLikeClick}
              liked={liked}
            />
          </div>
          <div className="mylist" id="myListSection">
            <Heading size={3} mt={6}>My list</Heading>
            count items
            {' '}
            <br />
            <Button color="primary" size="small" className="is-rounded is-outlined">
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
