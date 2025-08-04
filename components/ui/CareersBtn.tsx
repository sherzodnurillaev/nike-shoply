'use client'

interface Props {
  onClick: () => void;
}

const CareersBtn = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="!mt-4 !px-6 !py-2 bg-black text-white rounded hover:bg-gray-800 transition"
    >
      Apply Now
    </button>
  );
};

export default CareersBtn;
