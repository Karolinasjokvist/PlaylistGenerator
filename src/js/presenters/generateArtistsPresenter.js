import React, { Component } from 'react';
import { AddedArtistsView, GenerateArtistsView, SearchResultsView, FullList, ButtonView } from '../views/generateArtistsView';
import PromiseNoRender from '../promiseNoRender';
import { SongSource } from '../songSource';

function GenerateArtistsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [dataArtists, setDataArtists] = React.useState(props.model.artists);


    React.useEffect(() => {
        const obs = () => {
            setDataArtists(props.model.artists);
        }
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        <div>
            <GenerateArtistsView
                onText={(search) => {
                    setData(null);
                    setError(null);
                    setPromise(SongSource.searchSongs(search)
                        .then((data) => setData(data))
                        .catch((error) => setError(error))
                    );
                }} />
            <ButtonView />


            {PromiseNoRender(promise, data, error) ||
                (<SearchResultsView searchResults={data.data}
                    addArtist={(artist) => { (props.model.artists.length < 3)? props.model.addToList(artist): <FullList />}}
                />)}

            {PromiseNoRender("not null", dataArtists, error) || (
                <AddedArtistsView artists={dataArtists}
                    removeArtist={(artist) => { props.model.removeFromList(artist) }} 
                />)}
        </div>
    );

}

export default GenerateArtistsPresenter;