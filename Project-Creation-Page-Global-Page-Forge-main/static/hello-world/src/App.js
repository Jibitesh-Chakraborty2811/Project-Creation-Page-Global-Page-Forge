import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import api, { route} from '@forge/api';

function App() {
    const [data, setData] = useState(null);
    const [name,setname] = useState('')

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);

    const clicked = async () =>{
        console.log(name)

    //var name = payload.name

        const response = await invoke('createProject',{name})
        console.log(response.status)
      }

    return (
        <div>
            <p>Enter Project Name :</p>
            <input type='text' onChange={(event)=>{setname(event.target.value)}}/>
            <p></p>
            <button onClick={clicked}>Submit</button>
        </div>
    );
}

export default App;
