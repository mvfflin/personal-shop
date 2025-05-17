type props = {
  value: number;
  review?: number;
  small?: boolean;
};

const EmptyStar = ({ small }: { small?: boolean }) => {
  return (
    <h1 className={`text-gray-500 inline ${small ? "text-base" : "text-xl"}`}>
      ★
    </h1>
  );
};

const FullStar = ({ small }: { small?: boolean }) => {
  return (
    <h1 className={`text-yellow-400 inline ${small ? "text-base" : "text-xl"}`}>
      ★
    </h1>
  );
};

export const Rating = ({ value, review, small }: props) => {
  const STAR_COUNT = 5;
  const stars = Array.from({ length: STAR_COUNT }, () => (
    <EmptyStar small={small} key={Math.floor(Math.random() * 100)} />
  ));
  let i;
  for (i = 0; i < value; i++) {
    stars[i] = <FullStar small={small} key={Math.floor(Math.random() * 100)} />;
  }

  return (
    <div className="rating">
      {stars}{" "}
      {review ? <span className="text-zinc-600">({review})</span> : null}{" "}
    </div>
  );
};
