type props = {
  value: number;
};

const EmptyStar = () => {
  return <h1 className="text-gray-500 inline text-xl">★</h1>;
};

const FullStar = () => {
  return <h1 className="text-yellow-400 inline text-xl">★</h1>;
};

export const Rating = ({ value }: props) => {
  const STAR_COUNT = 5;
  const stars = Array.from({ length: STAR_COUNT }, () => (
    <EmptyStar key={Math.floor(Math.random() * 100)} />
  ));
  let i;
  for (i = 0; i < value; i++) {
    stars[i] = <FullStar key={Math.floor(Math.random() * 100)} />;
  }

  return <div className="rating">{stars}</div>;
};
