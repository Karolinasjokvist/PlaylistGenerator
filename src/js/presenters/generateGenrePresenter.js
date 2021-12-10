import React, { Component } from 'react';
import  {GenerateGenreView, ButtonView}  from '../views/generateGenreView';


function GenerateGenrePresenter(props) {
    const [total, setTotal] = React.useState(props.pmodel.total);
    const genres = props.model.genreList;

    React.useEffect(() => {
        const obs = () => {
            setTotal(props.pmodel.total)
        };
        props.pmodel.addObserver(obs);
        return () => props.pmodel.removeObserver(obs);
    }, []);

    return (
        <div>
            {<GenerateGenreView genres = {genres}
                                setGenre={(genre,value) => props.pmodel.addGenre(genre,value)}/>}
            {console.log(total)}
            {<ButtonView totalPercent={total}/>}
            {console.log(props.pmodel.genres)}
        </div>
    );
}

export default GenerateGenrePresenter;