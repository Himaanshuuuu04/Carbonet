import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkSession } from '../redux/slice/authSlice';

export default function AuthenticatedRoutes() {
  const dispatch = useDispatch();
  
  // Check session when the component mounts
  // useEffect(() => {
  //   console.log('Checking session...');
  //   dispatch(checkSession());
  // }, [dispatch]);

  // Access the necessary states from Redux
  const { islogged, profileCompleted, loading, error } = useSelector((state) => state.auth);

  // Redirect logic
  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading spinner
  }

  return islogged ? (
    // profileCompleted ? (
      <Outlet /> // Render protected routes (Dashboard)
  //   ) : (
  //     <Navigate to="/ProfileComplete" /> // Redirect to profile completion
  //   )
  ) : (
    <Navigate to="/login" /> // Redirect to login if not logged in
  );
}
