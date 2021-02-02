import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetObject,
    selectObject,
    handleDeleteObject,
    selectDeletedObject,
    handleUpdateObject,
    selectUpdatedObject
 } from '../../store/domains/objects';

 import ObjectForSale from '../../components/object/ObjectForSale';

 const mapStateToProps = state => ({
     selectedObject: selectObject(state),
     deletedObject: selectDeletedObject(state),
     updatedObject: selectUpdatedObject(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetObject,
    handleDeleteObject,
    handleUpdateObject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(ObjectForSale);

//  export function getServerSideProps() {
//     return {
//         props: {
//             message: 'SSR data'
//         }
//     }
// }

export async function getServerSideProps(cxt) {
    const res = await fetch(`http://185-229-224-187.cloud-xip.io/lizena/object/${cxt.query.object_id}`);
    const data = await res.json();

    return {
        props: {
            metaData: data
        }
    };
}