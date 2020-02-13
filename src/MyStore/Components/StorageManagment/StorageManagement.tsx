import React, {FC} from 'react';
import AddNewProduct from "./AddNewProduct"

const StorageManagement: FC = () => {
    return (
        <div className="App">
            Storage Management
            <AddNewProduct/>
        </div>
    );
};

export default StorageManagement;
