// import { Button } from "bootstrap";
import SearchResult from "./components/SearchResult/SearchResult";
import React,{useEffect, useState} from "react";
import styled from "styled-components";
 const BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const Codepro = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setselectedbtn] = useState("all");
   
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLoading(false);

        setData(json);
        setFilteredData(json?.categories);

      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchFoodData();
     
     
  }, []);

  console.log(data)
  const searchFood = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);
    if (searchvalue === "") {
      setFilteredData(null)
    }
    const filter = filteredData?.filter((food) =>
      food.strCategory.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilteredData(filter);
    console.log(filter);
  };
  // const filterfood = (type) => {
  //   if (type === "alt") {
  //   setFilteredData(categories);  
  //     setFilteredData("all");
  //     return;

  //   }
    // const filter = filteredData?.filter((food) =>
    //   food.strCategory.toLowerCase().includes(searchvalue.toLowerCase())
   
    // )

  // }

  
   if (error) return <div>{error }</div>
   if (loading) return <div>loading....</div>

  console.log(process.env.PUBLIC_URL + "/FoodyZone.png")
    
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src={"/FoodyZone.png"} />;
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>Brakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
        {/* <SearchResult data={data?.categories} /> */}
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};
export default Codepro;
export const Container = styled.div`

margin:0 auto:
`;


const TopContainer = styled.section`
min height:140px;
display:flex;
justify-content: space-between;
padding:16px;
align-item:center;

.search{
input {
background-color:transparent;
border:1px solid red;
border-radius:5px;
height:40px
font-size:16px
padding:4px;
}


}
`;
const FilterContainer = styled.section`
display:flex:center;

gap:12px;
text-align: center;
padding-bottom:20px;

`;
const Button = styled.button`
  background:#FF5733;
  border-radius:5px;
  padding:4px 12px;
  color:white;
  curser:pointer;
  &:hover{
  background-color:#ff4343;
  }
`;
