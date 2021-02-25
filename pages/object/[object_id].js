import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { baseUrl } from '../../config/base';

import { 
    handleGetObject,
    selectObject,
    handleDeleteObject,
    selectDeletedObject,
    handleUpdateObject,
    selectUpdatedObject,
    handleEditObjectPhotos
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
    handleUpdateObject,
    handleEditObjectPhotos
 }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ObjectForSale);

export async function getServerSideProps(cxt) {
    const res = await fetch(`${baseUrl}lizena/object/${cxt.query.object_id}`);
    const data = await res.json();

    return {
        props: {
            objectData: data
        }
    };
}
