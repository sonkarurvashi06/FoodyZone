import { useSearchParams } from "react-router-dom";
function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  // console.log(searchParams.get("number"));
  console.log(searchParams.get("name"));
  const age = searchParams.get('age');
    const name = searchParams.get("name");
  return (
    <div>
      <h1>filter page</h1>
      <h1>age:{age}</h1>
      <h1>name:{name}</h1>
      <input type="text" onChange={(e) => setSearchParams({text:e.target.value,age})}placeholder="set the text"/>
      <button onClick={() => setSearchParams({ age: 65 })}>
        set age in query params
      </button>
      <button onClick={() => setSearchParams({ name: "urvashi" })}>
        set name in query params
      </button>
    </div>
  );
}
export default Filter;
