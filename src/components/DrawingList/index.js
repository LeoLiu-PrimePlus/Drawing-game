import './style.scss'

const DrawingList = ({ className }) => {
    return (
        <div className={`${className} drawingList`}>
            <div className="mb-2">
                <button type="button" className="btn btn-primary btn-sm">Generate drawing list</button>
            </div>
            <div className="mb-2">
                <button type="button" className="btn btn-primary btn-sm">Delete selected list</button>
            </div>
            <div className="mb-2">
                <button type="button" className="btn btn-primary btn-sm">Delete all drawing list</button>
            </div>
            <div className="mb-2">
                <button type="button" className="btn btn-primary btn-sm">Add list</button>
            </div>
            <div className="drawingList-lists list-group border-m shadow">
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
                <label class="list-group-item rounded-0">
                    <input class="form-check-input me-1" type="checkbox" value="" />
                    First checkbox
                </label>
            </div>
        </div>
    );
}


export default DrawingList;