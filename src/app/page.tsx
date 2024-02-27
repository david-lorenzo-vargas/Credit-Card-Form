import CardForm from "./Components/Molecules/CardForm";

export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center justify-center bg-lightGray">
      <div className="w-1/2 flex flex-col items-center justify-center bg-white rounded-lg py-5">
        <CardForm />
      </div>
    </main>
  );
};
