import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import "./artwork-style.css"
import Logo from '../../components/logo';
const Artwork = () => {
    const artworkID = useParams().artName.replace(/[^0-9]/g, '')
    const [artwork, setArtwork] = useState({})
    const [description, setDescription] = useState("")
    const [audioURL, setAudio] = useState("")
    //fetch artwork data
    useEffect(()=>{
        fetch(`https://api.artic.edu/api/v1/artworks/${artworkID}`)
        .then(data=>data.json())
        .then(result=>setArtwork(result.data))
        fetch(`https://api.artic.edu/api/v1/artworks/${artworkID}/manifest.json`)
        .then(data=>data.json())
        .then(result=>setDescription(result.description[0].value))
    },[artworkID])
    //fetch descriptio
    useEffect(()=>{
        if(artwork.has_multimedia_resources){
            setAudio(artwork.sound_ids[0])
        }
    },[artwork])
    return (
        <div className="container">
            <Logo/>
            <div className="artwork-info">
                <h1 className="title">{artwork.title}</h1>
                <div className="detalis">
                    <div className="artwork-image">
                        <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt="sad"/>
                    </div>
                    <div className="data">
                        <p className="description">{description}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Artist</th>
                                    <td>{artwork.artist_title}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Date</th>
                                    <td>{artwork.date_display}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Medium</th>
                                    <td>{artwork.medium_display}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Dimensions</th>
                                    <td>{artwork.dimensions}</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>Credit Line</th>
                                    <td>{artwork.credit_line}</td>
                                </tr>
                            </tbody>
                        </table>
                        {
                            artwork.has_multimedia_resources&&
                            <div className="audio-source">
                                <p>Audio Source:</p>
                                <audio controls>
                                    <source src={`https://www.artic.edu/assets/${audioURL}`} type="audio/mpeg"/>
                                    Your browser does not support the audio element.
                                </audio>
                            </div>

                        }
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Artwork;