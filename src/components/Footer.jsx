export default function Footer() {
  return (
    <footer className="justify-self-end flex flex-col justify-center bg-primary items-center">
      <Stats />

      <p className="text-primary-content">
        &copy; 2015 Klim Mansurov <a href="http://klim.ml">klim.ml</a>
      </p>
    </footer>
  );
}

function Stats() {
  return (
    <div>
      <p className="text-primary-content">Here we will have a statistics</p>
    </div>
  );
}
