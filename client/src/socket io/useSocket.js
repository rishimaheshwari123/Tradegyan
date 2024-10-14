import { useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useSocket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

// const BASE_URL = 'https://photomanager.mahitechnocrafts.in/'
const BASE_URL = process.env.REACT_APP_SOCKET_BASE_URL

  
  useEffect(() => {
    const socket = io(BASE_URL); // Update with your server URL

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });
    
    
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

  }, []);

  return null;
};

export default useSocket;
