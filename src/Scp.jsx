import {scpp} from './Scpp';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';

function Scp(props) {

    const {id} = props;
    const scp = scpp.find(p => p.no === parseInt(id));

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="${scp.item}One">
                <h3>{scp.item}</h3>
            </h2>
            <div id="${scp.item}One" className="accordion-collapse collapse show" aria-labelledby="${scp.item}One" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h3><b>Object className: </b>{scp.class}</h3>
                    <p><img src={`/../img/${scp.img}`} className="img w-50 h-50"  alt={scp.item}/></p>
                    <h3>{scp.heading}</h3>
                    <p>{scp.subject}</p>
                    <h3>Description:</h3>
                    <p>{scp.description}</p>
                    <p>{scp.ChronologicalHistory}</p>
                </div>
            </div>
        </div>
        );
    }
  
export default Scp;