import {Button, Typography} from '@mui/material';
import {useCallback, useState} from 'react';
import {Storage} from 'aws-amplify';
import './App.css';

export const App = () => {
    const [image, setImage] = useState('');

    const getImage = useCallback(async () => {
        const image = await Storage.get('h120/il.png');
        console.log(image);
        setImage(image);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Typography>Nice</Typography>
                <Button onClick={() => getImage()}>fetch image</Button>
                {
                    image &&
                    <img src={image} alt='image'/>
                }
            </header>
        </div>
    );
};
