import { useEffect } from "react";

const FunctionComponent = () => {
  useEffect(() => {
    console.log("Useeffect FunctionComponent runs after first render");
  }, []);

  console.log("Functional Component runs");
  return (
    <div>
      <h1>Functional Component</h1>
    </div>
  );
};

export default FunctionComponent;
