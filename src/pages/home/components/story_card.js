import React, { Component } from 'react'
import { FaHome } from 'react-icons/fa'

import './story_card.scss'

const StoryCard = () => {
    return (
        <div>
            <div className='storyCard'>
                <div className='storyCard_left'>
                    <div className='storyCard_left_img-container'>
                        <div className='storyCard_left_img-container_char'>
                            b
                </div>
                    </div>
                </div>
                <div className='storyCard_right'>
                    <div className='storyCard_right_title'>
                        bihire boris - <span className='storyCard_right_time'>
                            9 hours ago
                        </span>
                    </div>

                    <div className='storyCard_right_field'>
                        <div className='storyCard_right_field_email'>
                            bihire@gmail.com
                        </div>
                        <div className='storyCard_right_field_phone'>
                            +250787104604
                        </div>
                    </div>

                    
                </div>

            </div>
            <div className="solid_divider"></div>
        </div>
        
    )

}

export default StoryCard;