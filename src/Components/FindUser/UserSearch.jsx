import React from "react";
import s from "./UserSearch.module.css";
import userPhoto from "../../assets/man_4140048.png";
import {NavLink} from "react-router-dom";


let UserSearch = (props) => {

    let pagesCount;
    pagesCount = Math.ceil(props.TotalUsersCount / props.PageSize)
    let pages=[];
    for (let i=1; i<=20;i++){
        pages.push(i)}

    return (
        <div>
            <div>
                {pages.map(p => <span className={props.currentPage === p ? s.selected : ""}
                                      onClick={() => props.onPageChange(p)}> {p} </span>)}
            </div>
            {
                props.UsersState.map(e =>
                    (
                        <div key={e.id} className={s.elements}>

                            <div>
                                <NavLink to={'/profile'}>
                                {/*<NavLink to={'/profile'+e.id}>*/}
                                <img className={s.img} src={e.photos.small !== null ? e.photos.small : userPhoto}
                                     alt={`${e.name}'s avatar`}/>
                                </NavLink>
                            </div>

                            <div>
                                {e.name}
                            </div>

                            <div>
                                {e.followed ? <button
                                    onClick={() => props.onUnFollow(e.id)}>
                                    Unfollow
                                </button> : <button className={s.button}
                                                    onClick={() => props.onFollow(e.id)}>
                                    Follow
                                </button>
                                }
                            </div>

                            <span className={s.posts}>
                                {e.status}
                            </span>

                        </div>
                    )
                )
            }
        </div>
    )
}

export default UserSearch

