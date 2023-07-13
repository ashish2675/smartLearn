import { Label, Select, Textarea, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../reducres/authReducers';
import { getUser, updateUser } from '../../services/lib/user';

const AdminUserEdit = () => {
  const { dispatch } = useAuth();
  const { userId } = useParams();
  const navigate = useNavigate();
  const [editedUser, setEditedUser] = useState({
    name: '',
    email: '',
    description: '',
    profilePic: '',
    role: '',
  });
  const { name, email, profilePic, description, role } = editedUser;

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser(userId, editedUser);
      //   console.log(res);

      if (res.status === 200) {
        navigate('/admin/users');
      }
    } catch (error) {
      console.log(error.response);

      if (error.response.data.code === 'JWT_EXPIRED') {
        alert('Login session out, Please login!');
        dispatch(logout());
        localStorage.removeItem('user');
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser(userId);

        if (res.status === 200) {
          setEditedUser(res.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-[480px] my-8'>
      {/* name */}
      <div className='my-2'>
        <Label htmlFor='name' value='Name' />

        <TextInput
          id='name'
          name='name'
          placeholder='Enter user name'
          type='text'
          className='my-2'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      {/* email */}
      <div className='my-2'>
        <Label htmlFor='email' value='Email' />

        <TextInput
          id='email'
          name='email'
          placeholder='Enter user email'
          type='email'
          className='my-2'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {/* description */}
      <div className='my-2'>
        <Label htmlFor='description' value='Course Description' />

        <Textarea
          id='description'
          name='description'
          placeholder='Enter course description'
          type='text'
          className='my-2'
          value={description}
          onChange={handleInputChange}
        />
      </div>

      {/* role */}
      <div className='my-2'>
        <Label htmlFor='role' value='Select role' />

        <Select
          id='role'
          required
          name='role'
          value={role}
          onChange={handleInputChange}
        >
          <option value={'user'}>User</option>
          <option value={'author'}>Author</option>
          <option value={'admin'}>Admin</option>
        </Select>
      </div>

      {/* profile picture */}
      <div className='my-2'>
        <Label htmlFor='profilePic' value='Profile picture URL' />

        <TextInput
          id='profilePic'
          name='profilePic'
          placeholder='Enter profilePic link'
          type='text'
          className='my-2'
          value={profilePic}
          onChange={handleInputChange}
        />
      </div>

      {profilePic ? (
        <div className='my-2'>
          <p className='my-2'>Preview: </p>
          <img src={profilePic} className='w-48 h-48 rounded-md ' alt={name} />
        </div>
      ) : (
        ''
      )}

      <div className='my-4 flex gap-2'>
        <button
          type='button'
          onClick={() => navigate('/admin/users')}
          className='bg-red-500 text-white rounded-md p-2 px-8'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='bg-purple-600 text-white rounded-md p-2 px-8'
        >
          Update User
        </button>
      </div>
    </form>
  );
};
export default AdminUserEdit;
