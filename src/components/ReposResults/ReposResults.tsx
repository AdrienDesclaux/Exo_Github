import { Repo } from '../../@types/repo';
import './ReposResult.scss';

type ReposResultsProps = {
  dataGit: Repo[];
};

function ReposResults({ dataGit }: ReposResultsProps) {
  const truncate = (text: string, maxLength: number) => {
    if (text) {
      if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
      }
      return text;
    }
    return text;
  };
  return (
    <main>
      {dataGit.map((data) => (
        <div key={data.id} className="product__box">
          <div className="product__box-img">
            <img
              src={data.owner.avatar_url}
              alt={data.name}
              className="product__img"
            />
          </div>
          <div className="product__box-text">
            <h1 className="product__h1">{data.name}</h1>
            <h2 className="product__h2">{data.fullname}</h2>
            <p className="product__paragraph">
              {truncate(data.description, 100)}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default ReposResults;
