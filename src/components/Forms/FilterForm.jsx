export default function FilterForm() {
  return (
    <div className="rounded bg-base-200 my-4 flex-1 p-4 mt-auto">
      <h2 className="text-center my-2  text-primary-content font-bold">
        Filter values
      </h2>
      <form className=" flex flex-row justify-around align-baseline">
        <div className="flex flex-row align-baseline self-center">
          <select className="select select-bordered w-full max-w-xs text-primary-content">
            <option disabled selected>
              sort By
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </form>
    </div>
  );
}
