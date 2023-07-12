import { Label, Textarea, TextInput } from 'flowbite-react';

const Contact = () => {
  return (
    <div>
      <div
        className='w-full min-h-[50vh] relative -z-10'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8204313/pexels-photo-8204313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      ></div>
      <div className='container max-w-[960px] mx-auto w-[95%] text-lg my-8'>
        <form className='w-full max-w-[480px] mx-auto'>
          <h1 className=' font-semibold z-50 text-4xl'>Contact Us</h1>
          <p className='my-4 text-base text-gray-600'>
            Have a query or any suggestion for improvement? Feel free to contact
            us.
          </p>
          <div className='my-4'>
            <Label htmlFor='name' name='name' value='Your name' />
            <TextInput
              id='name'
              placeholder='John Doe'
              required
              name='name'
              type='text'
            />
          </div>
          <div className='my-4'>
            <Label htmlFor='email' name='email' value='Your email' />
            <TextInput
              id='email'
              placeholder='john@gmail.com'
              required
              name='email'
              type='email'
            />
          </div>
          <div className='my-4'>
            <Label htmlFor='message' value='Your message' />
            <Textarea
              id='message'
              name='message'
              placeholder='Leave a message...'
              required
              rows={4}
            />
          </div>
          <div className='my-4'>
            <button className='w-full p-2 px-4 rounded-md bg-purple-600 text-white'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
