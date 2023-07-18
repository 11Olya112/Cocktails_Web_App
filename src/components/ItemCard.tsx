import React from 'react';
import {
  Card, Content, Media, Image, Button, Heading, Level,
} from 'react-bulma-components';
import { Drinks } from '../types/Drinks';
import outlineHeart from '../assets/Icon-Heart-Unfavorite.svg';
import filledHeart from '../assets/Icon-Heart-Favorite.svg';

type Props = {
  item: Drinks;
  handleLikeClick: () => void;
  liked: boolean
};

export const ItemCard: React.FC<Props> = ({ item, handleLikeClick, liked }) => {
  return (
    <Card className="is-fullheight">
      <Card.Content>
        <Level>
          <Level.Side align="left" className="is-flex is-justify-content-space-between">
            <div className="card-heading">
              <Heading size={4} mb={4}>
                {item.strDrink}
              </Heading>
            </div>
          </Level.Side>
          <Level.Side align="right" className="is-flex is-justify-content-space-between">
            <div className="card-image">
              <Image src={liked ? filledHeart : outlineHeart} alt="Item Photo" onClick={handleLikeClick} />
            </div>
          </Level.Side>
        </Level>

        <Media>
          <Media.Item>
            <div className="card-image">
              <Image src={item.strDrinkThumb} />
            </div>
          </Media.Item>
        </Media>
        <Content mt={4}>
          <div className="category">
            <p>Category</p>
            <p className="is-size-6">
              <span className="has-text-weight-bold">{item.strCategory}</span>
              {' '}
              <span>{item.strArea}</span>
              <span className="has-text-grey-light">,</span>
              {' '}
              <span>{item.strTags}</span>
              <span className="has-text-grey-light">,</span>
              {' '}
              <span>{item.strGlass}</span>
            </p>
          </div>
        </Content>
        <Content mt={4}>
          <div className="buttons">
            <Button color="primary" className="is-rounded is-fullwidth">Details</Button>
          </div>
        </Content>
      </Card.Content>
    </Card>
  );
};
