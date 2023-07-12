import {
  BookmarkSquareIcon,
  CalendarIcon,
  QueueListIcon,
} from '@heroicons/react/24/outline';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid';

const data = [
  {
    bgColor: 'bg-purple-600',
    title: 'Progress tracking and Certifications',
    icon: <ArrowTrendingUpIcon className='h-6 w-6 text-white' />,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit delectus accusamus',
  },
  {
    bgColor: 'bg-yellow-300',
    title: 'Diverse course selection',
    icon: <QueueListIcon className='h-6 w-6 text-white' />,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit delectus accusamus',
  },
  {
    bgColor: 'bg-indigo-600',
    title: 'Accessibility and Convinience',
    icon: <CalendarIcon className='h-6 w-6 text-white' />,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit delectus accusamus',
  },
  {
    bgColor: 'bg-rose-600',
    title: 'Interative learning experience',
    icon: <BookmarkSquareIcon className='h-6 w-6 text-white' />,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit delectus accusamus',
  },
];

const Features = () => {
  return (
    <div className='container py-12 max-w-[1080px] w-[95%] mx-auto'>
      <p className='font-semibold text-center uppercase leading-relaxed text-xs text-purple-500'>
        Why choose us
      </p>
      <h1 className='text-2xl sm:text-3xl md:text-4xl text-center my-8 w-[80%] md:max-w-[50%] mx-auto'>
        Dive into online courses on diverse subjects
      </h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
        {data.map((d, i) => (
          <div
            key={i}
            className='bg-white rounded-md p-4 px-6 border border-gray-200'
          >
            <div className={`w-fit p-3 rounded-md shadow-lg ${d.bgColor} `}>
              {d.icon}
            </div>
            <h2 className='text-xl mt-4 mb-2'>{d.title}</h2>
            <p className='text-sm text-gray-500'>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
