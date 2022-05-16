import * as React from 'react';
import fileIcon from '../assets/file.png'

export function File(props) {
    const { id, title, parentId } = props.content;
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '200px', backgroundColor: 'lightgray', paddingTop: '12px', marginLeft: '16px' }}>
            <img style={{ height: '24px', width: '24px' }} src={fileIcon} />
            <h3>{title}</h3>
        </div>
    );
}
