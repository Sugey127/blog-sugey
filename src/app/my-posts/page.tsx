import Card from '@/components/card';
import { Navbar } from '@/components/navigators/navbar';

export default function MyPublications() {
  const cards = [
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: 'Best Mountain Trails 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Karen Johnson',
      date: 'Aug 18',
      avatar: 'https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944',
      commentsCount: 8,
    },
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: '15 Rivers In Norway',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Karen Johnson',
      date: 'Aug 10',
      avatar: 'https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944',
      commentsCount: 5,
    },
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: '5 National Forests across the U.S.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Karen Johnson',
      date: 'Aug 9',
      avatar: 'https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944',
      commentsCount: 2,
    },
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: '5 National Forests across the U.S.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Karen Johnson',
      date: 'Aug 9',
      avatar: 'https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944',
      commentsCount: 2,
    },
  ];

  return (
    <>
    <Navbar/>
    <Card cards={cards} showAdminButtons={true}/>
    </>
    
  );
}