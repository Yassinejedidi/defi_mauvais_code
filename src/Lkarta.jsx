import React, { useState } from "react";
import { connect } from "react-redux";
import { FaHeart, FaThumbsDown } from "react-icons/fa";
import Button from '@mui/material/Button';


const Card = props => {
    const { movie = {}, deletesidaa = () => { } } = props;
    const {
        id,
        title,
        category,
        thumbnail,
        likes,
        nonons,
        paragraphe
    } = movie;

    //like and deslike
    const [dezjaime, jaimepasup] = useState(false);

    const [nonon, setnonon] = useState(nonons);

    const inzellike = () => {
        let currentLikedBands = props.likedBands;
        if (!dezjaime) {
            upptoliki(ilikablo => ilikablo + 1);
            {
                nonon === 0 ?
                    setnonon(ilikablo => ilikablo)
                    :
                    setnonon(ilikablo => ilikablo - 1)
            }
            jaimepasup(true);

            if (!currentLikedBands.includes(title))
                props.jaimepasupdBands([...currentLikedBands, title]);
        } else {
            setnonon(ilikablo => ilikablo + 1);
            {
                like === 0 ?
                    upptoliki(ilikablo => ilikablo)
                    :
                    upptoliki(ilikablo => ilikablo - 1)
            }
            jaimepasup(false);

            if (currentLikedBands.includes(title))
                props.jaimepasupdBands(currentLikedBands.filter(band => band !== title));
        }
    };
    const [like, upptoliki] = useState(likes);
    return (
        <div className="col-lg-4 col-md-5 col-sm-8">
            <div className="card sida-card text-center my-3 mx-3 p-2">
                <h5 className="card-title pt-2">{title}</h5>
                <img
                    className="card-img-top img-responsive"
                    src={thumbnail}
                    alt={title}
                />
                <div className="card-body">
                    <p className="card-text"><strong>Symptômes</strong>: {category}</p>
                    <p><strong>Description:</strong>{paragraphe}</p>

                    <p>
                        <p><strong>information utile?</strong></p>
                        <button className={dezjaime ? "active-btn btn" : "btn"} onClick={inzellike}>
                            <FaHeart /> {like}
                        </button>
                        <button className={!dezjaime ? "active-bttn btn" : "btn"} onClick={inzellike}>
                            <FaThumbsDown /> {nonon}
                        </button>
                    </p>
                    <div className="text-center">
                        <Button variant="outlined" color="error" onClick={() => deletesidaa(id)} >Delete</Button>
                    </div>
                </div>
            </div>

        </div>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        deletesidaa: id => {
            dispatch({
                type: "DELETE_SIDAA",
                id: id
            });
        },
    };
};

const SidaCardo = connect(null, mapDispatchToProps)(Card);

export default SidaCardo;