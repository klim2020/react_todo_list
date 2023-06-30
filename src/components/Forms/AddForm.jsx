export default function AddForm() {
  return (
    <div className="rounded bg-base-200 my-4 p-4 ">
      <h2 className="text-center my-2 font-bold text-primary-content">
        Add a task
      </h2>
      <form className=" flex flex-row justify-around align-baseline">
        <div className="flex flex-row align-baseline self-center">
          <span className="label-text text-primary-content flex-grow self-center mx-2">
            Task name{" "}
          </span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered max-w-xs"
          />
        </div>

        <textarea
          className="textarea textarea-primary"
          placeholder="Description"
          style={{ height: "3rem" }}
        ></textarea>

        <button type="submit" className="btn btn-primary text-primary-content">
          Add
        </button>
      </form>
    </div>
  );
}
