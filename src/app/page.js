import Counter from "@/components/Counter/Counter";

const HomePage = () => {


  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Welcome time to Next.js home page </h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;