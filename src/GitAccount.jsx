export default function GitAccount({ name, login, id, avatar_url }) {
  return (
    <>
      <p> Name: {name} </p>
      <p> Login: {login} </p>
      <p> Id: {id} </p>
      <img src={avatar_url} alt={avatar_url} height={150} />
    </>
  );
}
