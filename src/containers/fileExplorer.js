import * as React from 'react';
import { Folder } from '../components/folder';
import { File } from '../components/file';
import { get, create } from '../api';

export function FileExplorer() {
    const [parentId, setParentId] = React.useState(0)
    const [previousId, setPreviousId] = React.useState([]);
    const [data, setData] = React.useState([]);
    const [fileName, setFileName] = React.useState('');
    const [folderName, setFolderName] = React.useState('');
    const createHandler = async (title, type) => {
        await create({
            title,
            type,
            parentId
        })
        getHandler()
        if (type === 0) setFolderName('')
        if (type === 1) setFileName('')
    }

    const getHandler = () => {
        get(parentId).then((data) => setData(data))
    }

    React.useEffect(() => {
        console.log(previousId)
    }, [previousId])
    React.useEffect(() => {
        getHandler()
    }, [parentId])

    return (
        <div>
            <div style={{ display: 'flex', gap: '12px', padding: '12px' }}>
                <button onClick={() => {
                    setParentId(previousId[previousId.length - 1]); setPreviousId((prev) => {
                        prev.pop()
                        setPreviousId(prev)
                    })
                }}>Back</button>
                <input value={fileName} type='text' placeholder='file name' onChange={(e) => setFileName(e.target.value)} />
                <button onClick={() => createHandler(fileName, 1)}>Create File</button>
                <input value={folderName} type='text' placeholder='folder name' onChange={(e) => setFolderName(e.target.value)} />
                <button onClick={() => createHandler(folderName, 0)}>Create Folder</button>
            </div>
            <div style={{ display: 'flex', padding: '12px' }} >
                {data.map((content) => {
                    if (content.type === 0) return <Folder setPreviousId={setPreviousId} setParentId={setParentId} key={content.id} content={content} />;
                    if (content.type === 1) return <File key={content.id} content={content} />;
                })}
            </div>
        </div>

    );
}
