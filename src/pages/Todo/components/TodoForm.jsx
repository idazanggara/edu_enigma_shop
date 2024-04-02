import { Component } from "react";
import { IconDeviceFloppy, IconRefresh } from "@tabler/icons-react";
import PropTypes from "prop-types";

export default class TodoForm extends Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleChangeStatus,
      clearForm,
      form,
      errors,
    } = this.props;

    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="shadow-sm p-4 rounded-2"
      >
        <h3>Form Todo</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Tugas
          </label>
          <input
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.task && "is-invalid"}`}
            id="task"
            name="task"
            value={form.task}
          />
          <div className="invalid-feedback">{errors.task}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Deskripsi
          </label>
          <textarea
            onChange={handleChange}
            className={`form-control ${errors.description && "is-invalid"}`}
            id="description"
            name="description"
            rows="3"
            value={form.description}
          ></textarea>
          <div className="invalid-feedback">{errors.description}</div>
        </div>
        <div className="form-check">
          <input
            onChange={handleChangeStatus}
            className="form-check-input"
            type="checkbox"
            id="status"
            checked={form.status}
          />
          <label className="form-check-label" htmlFor="status">
            Selesai
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button
            type="submit"
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
            </i>
            Submit
          </button>
          <button
            onClick={clearForm}
            type="reset"
            className="btn btn-secondary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconRefresh />
            </i>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleChangeStatus: PropTypes.func,
  clearForm: PropTypes.func,
  form: PropTypes.object,
  errors: PropTypes.object,
};
