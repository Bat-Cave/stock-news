import {updateActiveTab} from '../dux/reducer';
import {connect} from 'react-redux';

const Tabs = (props) => {

    let tabsRendered = props.tabs.map((e, i) =>{
        let search = e;
        return(
            <div key={i} className='tab'>
                <p>{search}</p>
                <div className='film' onClick={() => {
                    props.updateActiveTab(search);
                }}>
                </div>
            </div>
        )
    })

    return(
        <div className='tabs-container'>
            {tabsRendered}
        </div>
    )
}

function mapStateToProps(state) {
    return state;
  }
  
export default connect(mapStateToProps, {updateActiveTab})(Tabs);