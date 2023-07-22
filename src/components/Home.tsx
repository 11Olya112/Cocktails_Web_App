import React, { useState } from 'react';
import { Heading, Level } from 'react-bulma-components';
import axios from 'axios';
import { CardsList } from './CardsList';
import 'bulma/css/bulma.css';
// import like from '../assets/Icon-Heart-Unfavorite.svg';
// import add from '../assets/Icon-Add.svg';
// import github from '../assets/Icon-Github.svg';
// import linkedin from '../assets/Icon-Linkedin.svg';
import cocktail from '../assets/cocktail.png';
import './Home.scss';
import { Drinks } from '../types/Drinks';

export const Home: React.FC = () => {
  const [cards, setCards] = useState<Drinks[]>([]);
  // const [title, setTitle] = useState('');
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

  /* const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }; */

  /* const handleSubmit = (e: React.FormEvent) => {
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
  }; */

  return (
    <div>
      <nav className="navbar has-background-info-light" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={cocktail} alt="Logo" />
          </a>

          {/* Перемикач мобільного меню */}
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu" href="/">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        {/* Контейнер для меню */}
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/" className="button is-danger is-light">
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="columns">
        <div className="column">
          <div className="main">
            <Level>
              <Level.Item>
                <Heading size={3} mt={5}>Search results</Heading>
              </Level.Item>
            </Level>

            <CardsList
              cards={cards}
              setCards={setCards}
              handleLikeClick={handleLikeClick}
              liked={liked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
