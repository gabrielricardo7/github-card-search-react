import "./styles.css";

const Card = ({ item }) => {
  return (
    <li>
      <a className="info" href={item.html_url} rel="noreferrer" target="_blank">
        <img src={item.organization?.avatar_url} className="avatar" alt="?" />
        <div className="text">
          <h2 className="title">{item.full_name}</h2>
          <p className="description">{item.description}</p>
        </div>
        <p className="arrow">&gt;</p>
      </a>
    </li>
  );
};

export default Card;
