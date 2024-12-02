import React from 'react';

function OurTeamCard({ name, designation, image, description, linkedIn, twitter }) {
  return (
    <>
      <div className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all">
        <img src={image} alt={name} className="w-full sm:h-60 object-cover" />

        <div className="p-4">
          <h4 className="text-gray-800 text-base font-bold">{name}</h4>
          <p className="text-gray-600 text-xs mt-1">{designation}</p>

          <div className="mt-4">
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="space-x-2 mt-4">
            <a href={linkedIn} target='_blank'>
            <button type="button"
              className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                <path
                  d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                  data-original="#010002" />
              </svg>
            </button>
            </a>
            <a href={twitter} target='_blank'>
            <button type="button"
              className="w-6 h-6 inline-flex items-center max-sm:flex-col justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  data-original="#03a9f4" />
              </svg>
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeamCard;
