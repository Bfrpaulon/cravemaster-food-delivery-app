import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'Restaurante 1',
    image: 'restaurante1.jpg',
    cuisine: 'Culinária 1',
  },
  {
    id: 2,
    name: 'Restaurante 2',
    image: 'restaurante2.jpg',
    cuisine: 'Culinária 2',
  },
  // Adicione mais objetos de restaurantes conforme necessário
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Bem-vindo ao CraveMaster!
        </Heading>
        <Text fontSize="lg" mb={4}>
          Escolha um restaurante abaixo para começar a fazer seu pedido:
        </Text>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              cuisine={restaurant.cuisine}
            />
          ))}
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Home;
