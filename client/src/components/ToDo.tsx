import { baseURL } from '@/utils/constant';
import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';


interface PropsType {
  id: number;
  text: string;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToDo: React.FC<PropsType> = ({ id, text, setUpdateUI }) => {
  const deleteToDo = async () => {
    try {
      const res = await axios.delete(`${baseURL}/delete/${id}`);
      console.log('Delete response:', res.data);
      setUpdateUI((prevState: any) => !prevState);
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className='bg-accentLight p-4 text-gray-400 relative group'>
      {text}
      <div
        className='hidden absolute top-[50%] translate-y-[-50%] right-0 mx-4 group-hover:block cursor-pointer'
        onClick={deleteToDo}
      >
        <RxCross1 />
      </div>
    </div>
  );
}

export default ToDo;
