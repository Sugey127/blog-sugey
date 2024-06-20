import NavBar from '@/app/navbar';
import Card from '@/components/card';
import { inyectionContainer } from '@/features/shared/infra/inyection-container';

export default async function Publications() {
  const { localPostRepository } = inyectionContainer();
  
  const defaultCards = [
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: 'Best Mountain Trails 2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'John Smith',
      date: 'Aug 18',
      avatar: 'https://i.pinimg.com/originals/01/4e/a3/014ea3da98ba8335d7b594f7d5f7fbe1.jpg',
      commentsCount: 2,
    },
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: '15 Rivers In Norway',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Karen Johnson',
      date: 'Aug 10',
      avatar: 'https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944',
      commentsCount: 2,
    },
    {
      image: 'https://images4.alphacoders.com/115/thumb-1920-115716.jpg',
      title: '5 National Forests across the U.S.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Rafael Martin',
      date: 'Aug 9',
      avatar: 'https://c.pxhere.com/photos/e8/60/smile_profile_face_male_portrait_young_person_glasses-451653.jpg!d',
      commentsCount: 10,
    },
  ];

  console.log(await localPostRepository.getAll())
  const storedPublications = await localPostRepository.getAll();
  const cards = [...defaultCards, ...storedPublications];

  return (
    <>
    <NavBar/>
    <Card cards={cards} showAdminButtons={false}/>
    </>
  );
}
