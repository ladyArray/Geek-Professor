export const ItemChapter = ({ nombre, color, onClickType }) => {
    return (
      <>
          <div className="col" onClick={() => onClickType(nombre)}>
              <div className="card">
                  <div className="row">
                      <div className="col-4">
                          <img src="src/images/ic_teoria.jpg" className="card-img img-fluid" alt="" />
                      </div>
                      <div className="col-8 d-flex justify-content-center align-items-center">
                          <h3 className="card-title"> { nombre } </h3>
                      </div>
                  </div>
              </div>
          </div>
      </>
    )
  }