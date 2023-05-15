import { Food } from "./app/shared/modeles/food"
import { Tag } from "./app/shared/modeles/Tag"

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBwZXByb25pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdGJhbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id:'3',
    name: 'Hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'https://images.unsplash.com/photo-1523475886877-7cc3b40b8093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZWQlMjBwb3RhdG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    tags: ['FastFood', 'Fry'],
  },
  {
    id:'5',
    name: 'Chicken Soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'https://images.unsplash.com/photo-1533787761082-492a5b83e614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoZWtlbiUyMHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id:'6',
    name: 'Vegetables Pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnaXRhYmxlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]
