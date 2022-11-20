import { HashLink } from 'react-router-hash-link';


function JumpBtn(props) {
    return (
        <div className="jump-btn">
            <HashLink to={props.jumpTo}>》</HashLink>
        </div>
    )
}

export default JumpBtn;