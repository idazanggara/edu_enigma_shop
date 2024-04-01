import { Component } from "react";

export default class ContactUs extends Component {
  render() {
    return (
      <section className="py-4" id="kontak-kami">
        <div className="container">
          <h2>Kontak Kami</h2>
          <div className="row">
            <div className="col-8 col-sm-12">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We`ll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputComments">Comments</label>
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    rows={6}
                    id="exampleInputComments"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary rounded-0">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
