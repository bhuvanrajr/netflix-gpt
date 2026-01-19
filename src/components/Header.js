import { onAuthStateChanged} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUser, removeUser } from '../utils/UserDataSlice';
import { useEffect, useState } from 'react';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);

    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth,(user) =>{
        if(user)
        {
            
            const {uid, email, displayName, } = user;
            dispatch(addUser({uid: uid, email : email, displayName: displayName}));
            setUserLoggedIn(true);
            navigate("/browse");
        }
        else
        {
            dispatch(removeUser());
            setUserLoggedIn(false);
            navigate("/");
        }

        return () => {
            unsubscribe();
        }
    })},[]);

  return (
    <div className='absolute flex justify-between w-screen'>
        <div className='w-40 h-20 z-40 rounded-lg bg-gradient-to-b from-black' >
            <img alt='logo' src= "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        </div>
        {isUserLoggedIn && 
        <div className='w-14 h-20 z-10 rounded-lg cursor-pointer' >
            <img alt='userLogo' src="https://occ-0-2568-2567.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                onClick={() => auth.signOut()}
            ></img>
        </div>
        }   
    </div>
  )
}

export default Header
