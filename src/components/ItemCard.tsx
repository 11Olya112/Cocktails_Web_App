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
      <Card.Content className="is-flex-direction-column has-min-height-0">
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
            <div className="columns is-mobile is-multiline is-flex-wrap-wrap">
              {item.strCategory && (
                <div className="column is-narrow is-half-mobile is-one-quarter-tablet">
                  <span className="is-block has-text-weight-bold is-size-6 has-text-dark">
                    Category:
                    {' '}
                    {item.strCategory}
                  </span>
                </div>
              )}
              {item.strArea && (
                <div className="column is-narrow is-half-mobile is-one-quarter-tablet">
                  <span className="is-block has-text-weight-bold is-size-6 has-text-dark">
                    Area:
                    {' '}
                    {item.strArea}
                  </span>
                </div>
              )}
              {item.strTags && (
                <div className="column is-narrow is-half-mobile is-one-quarter-tablet">
                  <span className="is-block has-text-weight-bold is-size-6 has-text-dark">
                    Tags:
                    {' '}
                    {item.strTags}
                  </span>
                </div>
              )}
              {item.strGlass && (
                <div className="column is-narrow is-half-mobile is-one-quarter-tablet">
                  <span className="is-block has-text-weight-bold is-size-6 has-text-dark">
                    Glass:
                    {' '}
                    {item.strGlass}
                  </span>
                </div>
              )}
            </div>
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
