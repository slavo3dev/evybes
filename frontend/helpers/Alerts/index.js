

export function showSuccessMessage(success) {
    return (
        <div className="alert alert-success">
            {success}
        </div>
    )
}

export function showErrorMessage(error) {
    return (
        <div className="alert alert-danger">
            {error}
        </div>
    )
}