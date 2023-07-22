import React, { useEffect, useState } from 'react';
import { Button, Columns } from 'react-bulma-components';
import { Drinks } from '../types/Drinks';
import { ItemCard } from './ItemCard';

type Props = {
  cards: Drinks[],
  setCards: React.Dispatch<React.SetStateAction<Drinks[]>>,
  handleLikeClick: () => void,
  liked: boolean
};

export const CardsList: React.FC<Props> = ({
  cards, setCards, handleLikeClick, liked,
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchCocktails = async (count: number, cocktails: Drinks[]) => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const newCocktails = cocktails.concat(data.drinks[0]);

        if (count < 13) {
          fetchCocktails(count + 1, newCocktails);
        } else {
          setCards(newCocktails);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
        alert('Error loading data. Please try again.');
      }
    };

    if (cards.length === 0) {
      fetchCocktails(1, []);
    }
  }, [cards, setCards]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const visibleCards = cards.slice(0, visibleCount);

  return (
    <div>
      <p className="has-text-centered is-size-4">
        {cards.length}
        {' '}
        items
      </p>
      <br />

      <Columns className="is-flex-wrap-wrap">
        {visibleCards.map((item) => (
          <Columns.Column key={item.idDrink} className="is-one-third">
            <ItemCard item={item} handleLikeClick={handleLikeClick} liked={liked} />
          </Columns.Column>
        ))}
      </Columns>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Columns>
          <Columns.Column className="ml-5">
            {cards.length > visibleCount && (
              <Button color="primary" onClick={handleShowMore} className="is-large is-fullwidth">
                Show more
              </Button>
            )}
          </Columns.Column>
        </Columns>
      </div>

    </div>
  );
};
