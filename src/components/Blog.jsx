import React from 'react';

function Blog() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <article className="overflow-hidden border shadow transition hover:shadow-xl rounded-lg">
        <img
          alt="Blog Cover"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdl&auto=format&fit=crop&w=2070&q=80"
          className="h-48 sm:h-56 md:h-64 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">10th Oct 2022</time>

          <a href="#" className="block mt-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-blue-600 transition">
              How to position your furniture for positivity
            </h3>
          </a>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem.
          </p>

          <a href="#" className="mt-4 inline-block text-blue-500 text-sm sm:text-base font-medium hover:underline">
            Read More →
          </a>
        </div>
      </article>
    </div>
  );
}

export default Blog;
