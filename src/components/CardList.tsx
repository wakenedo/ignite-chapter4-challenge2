import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface _Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: _Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {

  const { onOpen, isOpen, onClose } = useDisclosure();


  const [selectedImageUrl, setSelectedImageUrl] = useState('');


  const handleViewImage = (url: string): void => {
    setSelectedImageUrl(url);
    onOpen();
  };

  return (
    <>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards.map(card => {
          return (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          );
        })}
      </SimpleGrid>
      {
        <ModalViewImage
          imgUrl={selectedImageUrl}
          isOpen={isOpen}
          onClose={onClose}
        />
      }
    </>
  );
}
