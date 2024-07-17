type Props = {
  params: {
    id: string;
  };
};
function MoviePage({ params: { id } }: Props) {
  console.log(id);

  return <div> Este es el template MoviePage</div>;
}

export default MoviePage;
