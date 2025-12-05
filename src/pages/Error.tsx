import Header from "../components/Header";

function Error() {
  return (
    <>
      <Header />
      <h1 className="error__title">
        Похоже, что страница, которую вы ищете, не существует...
      </h1>
    </>
  );
}

export default Error;
