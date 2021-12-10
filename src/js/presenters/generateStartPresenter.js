import React, { Component } from 'react';
import GenerateStartView from '../views/generateStartView';

function GenerateStartPresenter(props) {
    const [currentNum, setCurrentNum] = React.useState(props.pmodel.numberOfSongs);
    const [currentExplicit, setCurrentExplicit] = React.useState(props.pmodel.explicit);

    React.useEffect(() => {
        const obs = () => {
            setCurrentNum(props.pmodel.numberOfSongs)
            setCurrentExplicit(props.pmodel.explicit)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GenerateStartView numberOfSongsChosen={(length) => props.pmodel.currentNumberOfSongs(length)}
                explicitChosen={(choice) => props.pmodel.setExplicit(choice)}
                explicit={currentExplicit}
                currentNumberOfSongs={currentNum}/>}
        </div>
    );
}

export default GenerateStartPresenter;