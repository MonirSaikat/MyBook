const AddNewWord = () => {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h3>Add New Word</h3>
                <form>
                    <div className="form-group">
                        <label>Word</label>
                        <input className="form-control" placeholder="English Word" />
                    </div>
                    <div className="form-group">
                        <label>Meaning</label>
                        <input className="form-control" placeholder="Bengali Meaning" />
                    </div>
                </form>
            </div>
        </div>);
};

export default AddNewWord;