import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className = {classes.content}>

            <img className = {classes.profile_img} src = 'https://klike.net/uploads/posts/2019-01/medium/1547365386_2.jpg'
                 alt = ''/>
            {/*<div className = 'person'></div>*/}

            <div>
                <div className = {classes.my_post}>
                    My post
                    <div className = {classes.new_post}>
                        New post
                    </div>

                    <div className= {classes.posts}>
                        <div className= {classes.posts_item}>
                            Post 1
                        </div>
                        <div className={classes.posts_item}>
                            Post 2
                        </div>
                        <div className={classes.posts_item}>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;