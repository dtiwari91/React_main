import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {

  return (
    <ImageList sx={{ width: 1200, height: 450, marginTop: "3em", marginBottom: "3em", paddingLeft: "2em", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))!important " }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://s3-prod.adage.com/s3fs-public/20220217_Coke_Starlight_3x2b.jpg',
    title: ' coke starlight',
    author: '@Coca-Cola',
  },
  {
    img: 'https://i.ytimg.com/vi/RGXZK1E8wig/maxresdefault.jpg',
    title: 'New Coke',
    author: '@Coca-Cola',
  },
  {
    img: 'https://images.unsplash.com/photo-1667329829058-ac191ba4a905?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Veg Burgers',
    author: '@mcdonald',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1667115431091-77e119fe18e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'cakes',
    author: '@Family cakes',
  },
  {
    img: 'https://images.unsplash.com/photo-1667747755652-0716ae70c386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80',
    title: 'Donuts',
    author: '@dunkin',
  },
  {
    img: 'https://images.unsplash.com/photo-1648146299076-ec0c5e5ead00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Book your table',
    author: '@opentable.co.uk',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1667215177072-6539146bc577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'Healthy breakfast',
    author: '@Subway',
  },
  {
    img: 'https://s3-prod.adage.com/s3fs-public/20220217_Coke_Starlight_3x2b.jpg',
    title: 'Soft Drinks',
    author: '@CocaCola',
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/911/475/HD-wallpaper-food-smoothie-drink-fruit.jpg',
    title: 'Healthy Drinks',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1661265014150-876c0efa41ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Champagne',
    author: '@Sainsburys',
  },
  {
    img: 'https://lagatar24.com/wp-content/uploads/2021/12/indian-food-curry-butter-chicken-palak-paneer-chiken-tikka-biryani-vegetable-curry-papad-dal-palak-sabji-jira-alu-rice-138549925.jpg',
    title: 'Full Meal',
    author: 'Haldiram',
  },
  {
    img: 'https://images.unsplash.com/photo-1638992150841-9562409832a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Light snacks',
    author: '@Taali Foods',
  },
];