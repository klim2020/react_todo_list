import PropTypes from "prop-types";
import Stats from "./Stats";
Footer.propTypes = {
  todoLists: PropTypes.array.isRequired,
};
export default function Footer({ todoLists }) {
  return (
    <footer className="justify-self-end flex flex-col justify-center bg-primary items-center">
      <Stats todoLists={todoLists} />

      <p className="text-primary-content">
        &copy; 2015 Klim Mansurov <a href="http://klim.ml">klim.ml</a>
      </p>
    </footer>
  );
}
