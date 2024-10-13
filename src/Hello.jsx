export default function Hello({ name, carrer, age, greeting }) {
  return (
    <>
      <h1>
        {greeting} {name} <br />I am {carrer} <br />I am {age} years old
      </h1>
    </>
  );
}
