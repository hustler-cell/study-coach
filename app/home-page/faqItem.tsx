import { FAQItemProps } from '../types';

export const FAQItem = ({ question, answer, isOpen }: FAQItemProps) => {
  return (
    <div className="flex flex-col justify-center px-4 py-6 bg-white shadow-sm max-md:max-w-full">
      <div className="flex flex-wrap gap-6 justify-center items-center max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className={`flex shrink-0 w-6 h-6 rounded-full ${isOpen ? 'bg-blue-600' : 'bg-blue-600 bg-opacity-10'}`} />
          <div className="w-[520px] max-md:max-w-full">{question}</div>
        </div>
        <img
          loading="lazy"
          src={`http://b.io/ext_${isOpen ? '21' : '20'}-`}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </div>
      {isOpen && answer && (
        <div className="mt-4 text-base leading-6 text-black max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
};