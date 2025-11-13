import img1 from '../assets/cake-1.jpg';
import img2 from '../assets/cake-2.jpg';
import img3 from '../assets/cake-3.jpg';
import './Cards.css';


function Cards() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">This is a simple card example.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">Another example card.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

         <div className="col-md-4">
          <div className="card">
            <img src={img3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">Another example card.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cards;
