import * as React from 'react';
import folderIcon from '../assets/folder.png'

export function Folder(props) {
    const { id, title, parentId } = props.content;
    const { setParentId, setPreviousId } = props;
    return (
        <div onClick={() => {
            setPreviousId((prev) => {
                prev.push(parentId)
                setPreviousId(prev)
            }); setParentId(id);
        }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '200px', backgroundColor: 'lightgray', paddingTop: '12px', marginLeft: '16px' }}>
            <img style={{ height: '24px', width: '24px' }} src={folderIcon} />
            <h3>{title}</h3>
        </div>
    );
}
