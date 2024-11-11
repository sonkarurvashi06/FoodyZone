import React from 'react'
import styled from "styled-components";
const SearchResult = ({ data}) => {
     console.log(data)
    return (
      <FoodContainer>
        <container>
          <FoodCards>
            {data?.filter(Boolean).map((food) => {
              return (
                <FoodCard key={food.data}>
                  <div className="food_images">
                    <img height="100px" src={food.strCategoryThumb} />
                  </div>
                  <div className="food_info">
                    <h1>{food.idCategory}</h1>
                    <h4> {food.strCategory}</h4>
                    <h6>{food.strCategoryDescription}</h6>
                  </div>
                </FoodCard>
              );
            })}
          </FoodCards>
        </container>
      </FoodContainer>
    );


};
export default SearchResult
const FoodContainer = styled.section`
 min:calc(100vh -310px);
  background-image: url("./bg.png");
  height: 100vh;
  background-size: cover;
  // height: calc(100vh-210px);
`;
const FoodCards = styled.div`
  // display: ruby;

  // margin: 20px 50px;
display:flex;
flex-wrap:wrap;
 row-gap:30px;
 coloum-gap:20px;
 justify-item:center;
 align-item:center;
 padding-top:30px;
 padding-left:20px

`;
const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  margin:10px;
  

  border-image-source: radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  );




  radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
ackground: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );

     background-blend-mode: overlay, normal;
  backdrop-filter: blur(12.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

.food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    h1 {
      margin-top: 8px;
      font-size: 20px;
      font-weight: 500;
    }
      h6 {
      margin-top: 2px;
      font-size: 10px;
      font-weight: 90;
    }
      display:flex;

`;
  






