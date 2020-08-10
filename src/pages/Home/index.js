import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categorysRepository from '../../repositories/categorys';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categorysRepository.getAllWithVideos()
      .then((categorysWithVideos) => {
        console.log(categorysWithVideos[0].videos[0]);
        console.log(categorysWithVideos[0]);
        setInitialData(categorysWithVideos);
      })
      .catch((err) => {
        console.log(err.message)
      });
  },[]);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          console.log(category);
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
