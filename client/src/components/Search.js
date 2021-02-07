const Search = ({ Card, Filter, handleFilterChange }) => {
  return (
    <div className="col-12">
      <Card className="mb-3" Header="Filter">
        <form action="">
          <div className="form-group m-0">
            <label htmlFor="enterName" className="sr-only">
              Enter Name
            </label>
            <input
              type="text"
              name="enterName"
              id="enterName"
              className="form-control"
              placeholder="Enter Name"
              value={Filter}
              onChange={handleFilterChange}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Search;
