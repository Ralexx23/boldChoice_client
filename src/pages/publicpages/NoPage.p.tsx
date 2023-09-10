const NoPage = ({ Comp }: any) => {
  return (
    <main>
      <>{Comp ? <Comp /> : <h1>NoPage</h1>}</>
    </main>
  );
};
export default NoPage;
