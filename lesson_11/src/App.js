import { Button, Loading, Pagination, Input } from "@nextui-org/react";
import { useGetApi, useGetUserDetail } from "./hooks/useCallApi";

function App() {
  // const { data, isLoading } = useGetApi("/users?page=2");
  const { data, isLoading } = useGetUserDetail(2);

  return (
    <div className="App">
      <h1>Hello</h1>
      {data ? <h1>{data.email}</h1> : null}
      <Input className="my-butotn" placeholder="Enter your email" />
      <Button color="warning" shadow>
        {isLoading ? <Loading color="currentColor" size="sm" /> : "Click me"}
      </Button>
      <Pagination total={20} initialPage={1} />;
    </div>
  );
}

export default App;
