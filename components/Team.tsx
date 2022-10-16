import Image from 'next/image';

import Creator from '../public/assets/creator.png';
import Developer from '../public/assets/developer.png';
import Marketer from '../public/assets/marketer.png';

export default function Team() {
  return (
    <div className="text-center">
      <h2 className="text-4xl mb-8">Team</h2>

      <div className="sm:flex sm:justify-center space-y-8 sm:space-y-0 sm:space-x-8">
        <div>
          <h3 className="text-gray-300 text-lg">Creator</h3>
          <div className="my-2">
            <Image
              src={Creator}
              alt="A5 Mobile Development"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div>
            <a
              href="https://twitter.com/_a5ua_"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              <span className="bg-gray-900 rounded-full px-4 py-2">
                @_a5ua_
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gray-300 text-lg">Developer</h3>
          <div className="my-2">
            <Image
              src={Developer}
              alt="A5 Mobile Development"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div>
            <a
              href="https://twitter.com/_a5ua_"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              <span className="bg-gray-900 rounded-full px-4 py-2">
                @_a5ua_
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gray-300 text-lg">Marketer</h3>
          <div className="my-2">
            <Image
              src={Marketer}
              alt="A5 Mobile Development"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div>
            <a
              href="https://twitter.com/_a5ua_"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 hover:text-blue-400"
            >
              <span className="bg-gray-900 rounded-full px-4 py-2">
                @_a5ua_
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
