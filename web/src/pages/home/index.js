import React, { useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import StoryCard from './components/story_card'
import HeaderPic from '../../assets/header.svg'
import Modal from '../../components/modal';
import Register from '../credintials/register';

import './home.scss'

function Home () {
        var subtitle;
        const [modalIsOpen, setIsOpen] = useState(false);
        function changeModal() {
            setIsOpen(!modalIsOpen);
        }

        function afterOpenModal() {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#f00';
        }
        return (
            <div className="MainEntry">
                <div className="MainEntry">

                    <div className="MainEntry_header_image">
                        <img src={HeaderPic} alter="header pic" height="200" width="200"  repeat/>

                    </div>
                    <div className="MainEntry_container">
                        <p className="MainEntry_container_title">Available users</p>
                        <div className="MainEntry_container_story_Container">
                            <StoryCard />
                            <StoryCard />
                            <StoryCard />
                            <StoryCard />

                        </div>
                    </div>
                </div>
                <Modal show={modalIsOpen} handleClose={changeModal}>
                    <Register />
                </Modal>
                <a href="#" class="float" onClick={changeModal}>
                    <div className="float_div">
                        <FaPlus />
                    </div>
                </a>
                
            </div>
        )
    
}

export default Home;