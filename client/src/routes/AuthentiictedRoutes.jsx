import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {checkSession} from '../redux/slice/authSlice'
export default function AuthenticatedRoutes() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Checking session...');
        dispatch(checkSession());
    }, []);
    const { islogged,profileCompleted,loading,error } = useSelector((state) => state.auth);
   
   
    return islogged ? (
        profileCompleted ? (
            <Outlet />
        ) : (
            <Navigate to="/ProfileComplete" />
        )
    ) : (
        <Navigate to="/login" />
    );
}
