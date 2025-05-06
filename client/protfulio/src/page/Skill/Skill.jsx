import React from 'react';

function BlogPage() {
  const postsPart1 = [
    {
      title: 'Exploring React: A Comprehensive Guide',
      description: 'React is a popular JavaScript library for building user interfaces. In this post, we’ll explore its fundamentals and advanced concepts.',
      date: 'May 7, 2025',
      image: 'https://www.guvi.com/blog/wp-content/uploads/2024/06/ReactJS-Architecture-A-Comprehensive-Guide-For-Developer.webp',
      link: '/post/react-guide',
    },
    {
      title: 'Machine Learning in 2025: What to Expect',
      description: 'Machine learning continues to evolve rapidly. Here are the top trends in ML and what you should focus on as a developer.',
      date: 'May 5, 2025',
      image: 'https://miro.medium.com/v2/resize:fit:1024/1*C9o9t_GV7_YpSMQ-P2LcSg.png',
      link: '/post/ml-2025',
    },
    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },
    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },
    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },

    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },
    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },
    {
      title: 'Building a Portfolio with React',
      description: 'Learn how to build a stunning and responsive portfolio website using React and Tailwind CSS.',
      date: 'May 3, 2025',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwFi-faLAE22McOlFY3Ut6F8Oi8ybetA2be_YkzJBl7uY4hXJjuxz9BGie1-zZ1AhghjJdB-YGrmysfpqMayYjVqATl7_hhRdFjsa9x-7q7WqTsg1DSvjVfh3aMOMIXPzrVYWjK8zhsRaRQB_1CVQvjvmx9cQ8TB0faAKfMkS4d5hqx6-BFChQe7f3A8s/s1280/1.png',
      link: '/post/portfolio',
    },
  ];

  const postsPart2 = [
    {
      title: 'App Development with React Native',
      description: 'Discover how to build cross-platform mobile apps using React Native with efficiency and performance in mind.',
      date: 'May 6, 2025',
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--8r5z9lHV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_770/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1m8r5n1d3l8p6j0r7k9o.png',
      link: '/post/react-native-app',
    },
    {
      title: 'AI Machine Learning in Python',
      description: 'Explore the power of Python for AI and machine learning with practical examples and libraries like TensorFlow and Scikit-learn.',
      date: 'May 4, 2025',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Machine_Learning_with_Python.jpg',
      link: '/post/ai-ml-python',
    },
    {
      title: 'AI Machine Learning in Python',
      description: 'Explore the power of Python for AI and machine learning with practical examples and libraries like TensorFlow and Scikit-learn.',
      date: 'May 4, 2025',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Machine_Learning_with_Python.jpg',
      link: '/post/ai-ml-python',
    },
    {
      title: 'AI Machine Learning in Python',
      description: 'Explore the power of Python for AI and machine learning with practical examples and libraries like TensorFlow and Scikit-learn.',
      date: 'May 4, 2025',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Machine_Learning_with_Python.jpg',
      link: '/post/ai-ml-python',
    },
    {
      title: 'AI Machine Learning in Python',
      description: 'Explore the power of Python for AI and machine learning with practical examples and libraries like TensorFlow and Scikit-learn.',
      date: 'May 4, 2025',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Machine_Learning_with_Python.jpg',
      link: '/post/ai-ml-python',
    },
    {
      title: 'AI Machine Learning in Python',
      description: 'Explore the power of Python for AI and machine learning with practical examples and libraries like TensorFlow and Scikit-learn.',
      date: 'May 4, 2025',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Machine_Learning_with_Python.jpg',
      link: '/post/ai-ml-python',
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white font-sans">
     

      {/* Part 1: JSON-like Card Design */}
      <div className="">
        <h2 className="text-3xl font-bold  px-2 mb-8 animate-fadeIn">New Topics</h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {postsPart1.concat(postsPart1).map((post, index) => (
              <div 
                key={index} 
                className="flex-none w-80 bg-gradient-to-r from-pink-500 to-teal-500 rounded-3xl shadow-2xl p-6 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
                style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 flex flex-col space-y-4 h-full font-mono text-sm">
                  <div className="flex-1 text-white">
                    <p><span className="text-teal-300">"title"</span>: <span className="text-pink-300">"{post.title}"</span>,</p>
                    <p><span className="text-teal-300">"description"</span>: <span className="text-pink-300">"{post.description}"</span>,</p>
                    <p><span className="text-teal-300">"date"</span>: <span className="text-pink-300">"{post.date}"</span></p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={post.link}
                      className="py-1 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 transform hover:scale-105 text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-3xl font-bold px-2 mb-8 animate-fadeIn">Letested Topics</h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {postsPart1.concat(postsPart1).map((post, index) => (
              <div 
                key={index} 
                className="flex-none w-80 bg-gradient-to-r from-pink-500 to-teal-500 rounded-3xl shadow-2xl p-6 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
                style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 flex flex-col space-y-4 h-full font-mono text-sm">
                  <div className="flex-1 text-white">
                    <p><span className="text-teal-300">"title"</span>: <span className="text-pink-300">"{post.title}"</span>,</p>
                    <p><span className="text-teal-300">"description"</span>: <span className="text-pink-300">"{post.description}"</span>,</p>
                    <p><span className="text-teal-300">"date"</span>: <span className="text-pink-300">"{post.date}"</span></p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={post.link}
                      className="py-1 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 transform hover:scale-105 text-sm"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in;
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-marquee {
            animation: marquee 2s linear infinite;
            white-space: nowrap;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

export default BlogPage;