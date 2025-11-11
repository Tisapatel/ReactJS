function Form(){
    return(
         <form>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" />
        <div className="form-text">We'll never share your email.</div>
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="check" />
        <label className="form-check-label" htmlFor="check">Check me out</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
 );
}

export default Form